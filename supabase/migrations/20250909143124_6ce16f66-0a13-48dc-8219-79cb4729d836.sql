-- First, let's make sure the trigger is properly attached to the shipments table
DROP TRIGGER IF EXISTS auto_generate_tracking_number_trigger ON public.shipments;

-- Create the trigger on the shipments table
CREATE TRIGGER auto_generate_tracking_number_trigger
  BEFORE INSERT ON public.shipments
  FOR EACH ROW
  EXECUTE FUNCTION public.auto_generate_tracking_number();