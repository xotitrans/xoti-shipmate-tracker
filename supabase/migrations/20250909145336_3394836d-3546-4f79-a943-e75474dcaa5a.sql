-- Fix the ambiguous column reference error in generate_tracking_number function
CREATE OR REPLACE FUNCTION public.generate_tracking_number()
RETURNS text
LANGUAGE plpgsql
SET search_path TO 'public'
AS $function$
DECLARE
  new_tracking_number TEXT;
  exists_check BOOLEAN;
BEGIN
  LOOP
    -- Generate tracking number: XTR + random 10 digits
    new_tracking_number := 'XTR' || LPAD(FLOOR(RANDOM() * 10000000000)::TEXT, 10, '0');
    
    -- Check if tracking number already exists
    SELECT EXISTS(SELECT 1 FROM public.shipments WHERE tracking_number = new_tracking_number) INTO exists_check;
    
    -- Exit loop if unique tracking number is generated
    IF NOT exists_check THEN
      EXIT;
    END IF;
  END LOOP;
  
  RETURN new_tracking_number;
END;
$function$