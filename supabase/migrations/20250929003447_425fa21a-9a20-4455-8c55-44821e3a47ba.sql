-- Create storage bucket for shipment photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('shipment-photos', 'shipment-photos', false);

-- Storage policies for shipment photos
CREATE POLICY "Users can view photos of their shipments"
ON storage.objects FOR SELECT
TO authenticated
USING (
  bucket_id = 'shipment-photos' 
  AND (
    -- Allow access if user uploaded the photo
    auth.uid()::text = (storage.foldername(name))[1]
    OR
    -- Allow access if user owns the shipment associated with the photo
    EXISTS (
      SELECT 1 FROM shipment_photos sp
      JOIN shipments s ON s.id = sp.shipment_id
      WHERE sp.photo_url LIKE '%' || name || '%'
      AND s.user_id = auth.uid()
    )
  )
);

CREATE POLICY "Users can upload shipment photos"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'shipment-photos'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can update their photos"
ON storage.objects FOR UPDATE
TO authenticated
USING (
  bucket_id = 'shipment-photos'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete their photos"
ON storage.objects FOR DELETE
TO authenticated
USING (
  bucket_id = 'shipment-photos'
  AND auth.uid()::text = (storage.foldername(name))[1]
);