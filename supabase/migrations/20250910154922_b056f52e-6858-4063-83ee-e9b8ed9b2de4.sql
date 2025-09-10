-- Mettre à jour tous les numéros de suivi existants qui contiennent LOGICY
UPDATE shipments 
SET tracking_number = REPLACE(tracking_number, 'LOGICY-', 'XTR') 
WHERE tracking_number LIKE 'LOGICY-%';

-- Mettre à jour les autres champs qui pourraient contenir LOGICY
UPDATE shipments 
SET current_location = REPLACE(current_location, 'LOGICY', 'XOTI')
WHERE current_location LIKE '%LOGICY%';

UPDATE shipments 
SET sender_name = REPLACE(sender_name, 'LOGICY', 'XOTI')
WHERE sender_name LIKE '%LOGICY%';

UPDATE shipments 
SET recipient_name = REPLACE(recipient_name, 'LOGICY', 'XOTI') 
WHERE recipient_name LIKE '%LOGICY%';

-- Mettre à jour aussi l'historique de suivi
UPDATE tracking_history 
SET location = REPLACE(location, 'LOGICY', 'XOTI')
WHERE location LIKE '%LOGICY%';