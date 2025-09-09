-- Vérifier et configurer le bucket pour les photos des envois
INSERT INTO storage.buckets (id, name, public) 
VALUES ('shipment-photos', 'shipment-photos', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Créer les politiques RLS pour le bucket shipment-photos
CREATE POLICY "Authenticated users can view shipment photos" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'shipment-photos' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can upload shipment photos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'shipment-photos' AND auth.role() = 'authenticated');

CREATE POLICY "Users can update their own shipment photos" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'shipment-photos' AND auth.role() = 'authenticated');

CREATE POLICY "Users can delete their own shipment photos" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'shipment-photos' AND auth.role() = 'authenticated');