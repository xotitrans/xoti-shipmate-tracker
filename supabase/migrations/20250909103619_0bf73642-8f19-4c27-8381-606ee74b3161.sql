-- Create enum for shipment status
CREATE TYPE public.shipment_status AS ENUM (
  'pending',
  'in_transit',
  'delivered',
  'cancelled',
  'delayed'
);

-- Create enum for transport type
CREATE TYPE public.transport_type AS ENUM (
  'road',
  'air',
  'sea',
  'express'
);

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create shipments table
CREATE TABLE public.shipments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tracking_number TEXT NOT NULL UNIQUE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  sender_name TEXT NOT NULL,
  sender_address TEXT NOT NULL,
  sender_phone TEXT NOT NULL,
  recipient_name TEXT NOT NULL,
  recipient_address TEXT NOT NULL,
  recipient_phone TEXT NOT NULL,
  weight DECIMAL(10,2),
  dimensions TEXT,
  transport_type transport_type NOT NULL,
  status shipment_status NOT NULL DEFAULT 'pending',
  estimated_delivery DATE,
  actual_delivery DATE,
  current_location TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tracking_history table
CREATE TABLE public.tracking_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  shipment_id UUID NOT NULL REFERENCES public.shipments(id) ON DELETE CASCADE,
  status shipment_status NOT NULL,
  location TEXT NOT NULL,
  description TEXT,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create shipment_photos table
CREATE TABLE public.shipment_photos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  shipment_id UUID NOT NULL REFERENCES public.shipments(id) ON DELETE CASCADE,
  photo_url TEXT NOT NULL,
  description TEXT,
  uploaded_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shipments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tracking_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shipment_photos ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- RLS Policies for shipments
CREATE POLICY "Users can view their own shipments" 
ON public.shipments FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own shipments" 
ON public.shipments FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own shipments" 
ON public.shipments FOR UPDATE 
USING (auth.uid() = user_id);

-- RLS Policies for tracking_history
CREATE POLICY "Users can view tracking history of their shipments" 
ON public.tracking_history FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.shipments 
    WHERE shipments.id = tracking_history.shipment_id 
    AND shipments.user_id = auth.uid()
  )
);

CREATE POLICY "Users can insert tracking history for their shipments" 
ON public.tracking_history FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.shipments 
    WHERE shipments.id = tracking_history.shipment_id 
    AND shipments.user_id = auth.uid()
  )
);

-- RLS Policies for shipment_photos
CREATE POLICY "Users can view photos of their shipments" 
ON public.shipment_photos FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.shipments 
    WHERE shipments.id = shipment_photos.shipment_id 
    AND shipments.user_id = auth.uid()
  )
);

CREATE POLICY "Users can upload photos for their shipments" 
ON public.shipment_photos FOR INSERT 
WITH CHECK (
  auth.uid() = uploaded_by AND
  EXISTS (
    SELECT 1 FROM public.shipments 
    WHERE shipments.id = shipment_photos.shipment_id 
    AND shipments.user_id = auth.uid()
  )
);

-- Create storage bucket for shipment photos
INSERT INTO storage.buckets (id, name, public) VALUES ('shipment-photos', 'shipment-photos', false);

-- Storage policies for shipment photos
CREATE POLICY "Users can view photos of their shipments" 
ON storage.objects FOR SELECT 
USING (
  bucket_id = 'shipment-photos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can upload photos for their shipments" 
ON storage.objects FOR INSERT 
WITH CHECK (
  bucket_id = 'shipment-photos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can update photos for their shipments" 
ON storage.objects FOR UPDATE 
USING (
  bucket_id = 'shipment-photos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete photos for their shipments" 
ON storage.objects FOR DELETE 
USING (
  bucket_id = 'shipment-photos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Function to generate tracking number
CREATE OR REPLACE FUNCTION public.generate_tracking_number()
RETURNS TEXT AS $$
DECLARE
  tracking_number TEXT;
  exists_check BOOLEAN;
BEGIN
  LOOP
    -- Generate tracking number: XTR + random 10 digits
    tracking_number := 'XTR' || LPAD(FLOOR(RANDOM() * 10000000000)::TEXT, 10, '0');
    
    -- Check if tracking number already exists
    SELECT EXISTS(SELECT 1 FROM public.shipments WHERE tracking_number = tracking_number) INTO exists_check;
    
    -- Exit loop if unique tracking number is generated
    IF NOT exists_check THEN
      EXIT;
    END IF;
  END LOOP;
  
  RETURN tracking_number;
END;
$$ LANGUAGE plpgsql;

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, first_name, last_name)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data ->> 'first_name',
    NEW.raw_user_meta_data ->> 'last_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Function to update shipment location and add tracking history
CREATE OR REPLACE FUNCTION public.update_shipment_location(
  shipment_id_param UUID,
  new_location TEXT,
  new_status shipment_status DEFAULT NULL,
  description_param TEXT DEFAULT NULL
)
RETURNS VOID AS $$
BEGIN
  -- Update shipment location
  UPDATE public.shipments 
  SET 
    current_location = new_location,
    status = COALESCE(new_status, status),
    updated_at = now()
  WHERE id = shipment_id_param;
  
  -- Add tracking history entry
  INSERT INTO public.tracking_history (
    shipment_id,
    status,
    location,
    description
  ) VALUES (
    shipment_id_param,
    COALESCE(new_status, (SELECT status FROM public.shipments WHERE id = shipment_id_param)),
    new_location,
    description_param
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Triggers for updated_at timestamps
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_shipments_updated_at
  BEFORE UPDATE ON public.shipments
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Trigger to auto-generate tracking number
CREATE OR REPLACE FUNCTION public.auto_generate_tracking_number()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.tracking_number IS NULL OR NEW.tracking_number = '' THEN
    NEW.tracking_number := public.generate_tracking_number();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER generate_tracking_number_trigger
  BEFORE INSERT ON public.shipments
  FOR EACH ROW EXECUTE FUNCTION public.auto_generate_tracking_number();