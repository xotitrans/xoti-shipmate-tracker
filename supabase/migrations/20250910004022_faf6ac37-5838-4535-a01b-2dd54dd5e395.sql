-- Create a public tracking policy for shipments
CREATE POLICY "Allow public tracking by tracking number" 
ON public.shipments 
FOR SELECT 
USING (tracking_number IS NOT NULL AND tracking_number != '');

-- Create a public tracking policy for tracking history
CREATE POLICY "Allow public tracking history by tracking number" 
ON public.tracking_history 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM public.shipments 
  WHERE shipments.id = tracking_history.shipment_id 
  AND shipments.tracking_number IS NOT NULL 
  AND shipments.tracking_number != ''
));