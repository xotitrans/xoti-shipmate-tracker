-- Rendre le bucket shipment-photos public pour permettre l'accès aux photos
UPDATE storage.buckets 
SET public = true 
WHERE id = 'shipment-photos';