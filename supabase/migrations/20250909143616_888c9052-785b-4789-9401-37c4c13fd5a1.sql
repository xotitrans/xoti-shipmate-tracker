-- Set a default value for tracking_number so it becomes optional in inserts
ALTER TABLE public.shipments 
ALTER COLUMN tracking_number SET DEFAULT '';