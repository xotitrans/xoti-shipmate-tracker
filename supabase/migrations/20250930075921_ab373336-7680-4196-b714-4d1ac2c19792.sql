-- Ajouter une politique permettant la lecture publique des colis par numéro de suivi
-- Cela permet aux utilisateurs non authentifiés de suivre leurs colis
CREATE POLICY "Anyone can view shipments by tracking number"
ON public.shipments
FOR SELECT
USING (true);

-- Ajouter une politique permettant la lecture publique de l'historique de suivi
CREATE POLICY "Anyone can view tracking history"
ON public.tracking_history
FOR SELECT
USING (true);

-- Ajouter une politique permettant la lecture publique des photos de colis
CREATE POLICY "Anyone can view shipment photos"
ON public.shipment_photos
FOR SELECT
USING (true);