-- Allow public access to shipment photos when tracking number is known
CREATE POLICY "Allow public viewing photos by tracking number" 
ON public.shipment_photos 
FOR SELECT 
USING (EXISTS ( 
  SELECT 1
  FROM shipments 
  WHERE (
    shipments.id = shipment_photos.shipment_id 
    AND shipments.tracking_number IS NOT NULL 
    AND shipments.tracking_number <> ''
  )
));