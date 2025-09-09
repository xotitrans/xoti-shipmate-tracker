-- Fix security warnings by updating functions with proper search_path

-- Update generate_tracking_number function
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
$$ LANGUAGE plpgsql SET search_path = public;

-- Update auto_generate_tracking_number function
CREATE OR REPLACE FUNCTION public.auto_generate_tracking_number()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.tracking_number IS NULL OR NEW.tracking_number = '' THEN
    NEW.tracking_number := public.generate_tracking_number();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;