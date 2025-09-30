-- Supprimer les anciennes politiques si elles existent
DROP POLICY IF EXISTS "Public access to shipment photos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload shipment photos" ON storage.objects;
DROP POLICY IF EXISTS "Users can upload their own shipment photos" ON storage.objects;

-- Permettre l'accès public en lecture pour toutes les photos du bucket shipment-photos
CREATE POLICY "Anyone can view shipment photos"
ON storage.objects FOR SELECT
USING (bucket_id = 'shipment-photos');

-- Permettre aux utilisateurs authentifiés d'uploader des photos
CREATE POLICY "Authenticated users can upload shipment photos"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'shipment-photos');

-- Permettre aux utilisateurs de supprimer leurs propres photos
CREATE POLICY "Users can delete their own shipment photos"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'shipment-photos' AND owner = auth.uid());