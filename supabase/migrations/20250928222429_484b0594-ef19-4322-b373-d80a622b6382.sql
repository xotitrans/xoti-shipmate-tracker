-- Create shipments table
CREATE TABLE public.shipments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  tracking_number TEXT UNIQUE NOT NULL DEFAULT 'TR-' || UPPER(SUBSTR(MD5(RANDOM()::TEXT), 1, 8)),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'in_transit', 'delivered', 'cancelled', 'failed')),
  
  -- Sender information
  sender_name TEXT NOT NULL,
  sender_address TEXT NOT NULL,
  sender_phone TEXT NOT NULL,
  
  -- Recipient information
  recipient_name TEXT NOT NULL,
  recipient_address TEXT NOT NULL,
  recipient_phone TEXT NOT NULL,
  
  -- Current location
  current_location TEXT,
  current_latitude DECIMAL(10, 8),
  current_longitude DECIMAL(11, 8),
  
  -- Transport details
  transport_type TEXT NOT NULL CHECK (transport_type IN ('road', 'air', 'sea', 'express')),
  weight DECIMAL(10, 2),
  dimensions TEXT,
  declared_value DECIMAL(10, 2),
  insured_value DECIMAL(10, 2),
  currency TEXT DEFAULT 'EUR',
  
  -- Special options
  is_fragile BOOLEAN DEFAULT FALSE,
  is_dangerous BOOLEAN DEFAULT FALSE,
  requires_signature BOOLEAN DEFAULT FALSE,
  priority_level TEXT DEFAULT 'normal' CHECK (priority_level IN ('low', 'normal', 'high', 'urgent')),
  
  -- Financial information
  transport_cost DECIMAL(10, 2),
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
  payment_method TEXT,
  
  -- References
  client_reference TEXT,
  order_number TEXT,
  
  -- Emergency contact
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  
  -- Delivery information
  delivery_instructions TEXT,
  preferred_delivery_time TEXT,
  special_instructions TEXT,
  notes TEXT,
  
  -- Dates
  estimated_delivery TIMESTAMPTZ,
  actual_delivery TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.shipments ENABLE ROW LEVEL SECURITY;

-- Create tracking history table
CREATE TABLE public.tracking_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  shipment_id UUID REFERENCES public.shipments(id) ON DELETE CASCADE NOT NULL,
  status TEXT NOT NULL,
  location TEXT NOT NULL,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  description TEXT,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.tracking_history ENABLE ROW LEVEL SECURITY;

-- Create shipment photos table
CREATE TABLE public.shipment_photos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  shipment_id UUID REFERENCES public.shipments(id) ON DELETE CASCADE NOT NULL,
  photo_url TEXT NOT NULL,
  description TEXT,
  uploaded_by UUID REFERENCES auth.users NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.shipment_photos ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for shipments
CREATE POLICY "Users can view their own shipments" 
ON public.shipments 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own shipments" 
ON public.shipments 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own shipments" 
ON public.shipments 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own shipments" 
ON public.shipments 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create RLS policies for tracking history
CREATE POLICY "Users can view tracking history of their shipments" 
ON public.tracking_history 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM public.shipments 
  WHERE shipments.id = tracking_history.shipment_id 
  AND shipments.user_id = auth.uid()
));

CREATE POLICY "Users can create tracking history for their shipments" 
ON public.tracking_history 
FOR INSERT 
WITH CHECK (EXISTS (
  SELECT 1 FROM public.shipments 
  WHERE shipments.id = tracking_history.shipment_id 
  AND shipments.user_id = auth.uid()
));

-- Create RLS policies for shipment photos
CREATE POLICY "Users can view photos of their shipments" 
ON public.shipment_photos 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM public.shipments 
  WHERE shipments.id = shipment_photos.shipment_id 
  AND shipments.user_id = auth.uid()
));

CREATE POLICY "Users can upload photos for their shipments" 
ON public.shipment_photos 
FOR INSERT 
WITH CHECK (
  auth.uid() = uploaded_by AND
  EXISTS (
    SELECT 1 FROM public.shipments 
    WHERE shipments.id = shipment_photos.shipment_id 
    AND shipments.user_id = auth.uid()
  )
);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_shipments_updated_at
BEFORE UPDATE ON public.shipments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_shipments_user_id ON public.shipments(user_id);
CREATE INDEX idx_shipments_tracking_number ON public.shipments(tracking_number);
CREATE INDEX idx_shipments_status ON public.shipments(status);
CREATE INDEX idx_tracking_history_shipment_id ON public.tracking_history(shipment_id);
CREATE INDEX idx_tracking_history_timestamp ON public.tracking_history(timestamp);
CREATE INDEX idx_shipment_photos_shipment_id ON public.shipment_photos(shipment_id);