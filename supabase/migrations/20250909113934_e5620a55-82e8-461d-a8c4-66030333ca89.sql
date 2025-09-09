-- Add missing fields to shipments table for the admin system

-- Add location and tracking fields
ALTER TABLE public.shipments 
ADD COLUMN current_latitude DECIMAL(10, 8),
ADD COLUMN current_longitude DECIMAL(11, 8),
ADD COLUMN google_maps_link TEXT,

-- Add emergency contact fields
ADD COLUMN emergency_contact_name TEXT,
ADD COLUMN emergency_contact_phone TEXT,

-- Add value and insurance fields  
ADD COLUMN declared_value DECIMAL(10, 2),
ADD COLUMN currency TEXT DEFAULT 'EUR',
ADD COLUMN insured_value DECIMAL(10, 2),

-- Add reference fields
ADD COLUMN client_reference TEXT,
ADD COLUMN order_number TEXT,
ADD COLUMN special_instructions TEXT,
ADD COLUMN delivery_instructions TEXT,
ADD COLUMN preferred_delivery_time TEXT,
ADD COLUMN internal_notes TEXT,

-- Add priority and options
ADD COLUMN priority_level TEXT DEFAULT 'normal',
ADD COLUMN is_fragile BOOLEAN DEFAULT false,
ADD COLUMN is_dangerous BOOLEAN DEFAULT false,
ADD COLUMN requires_signature BOOLEAN DEFAULT false,

-- Add cost and payment fields
ADD COLUMN transport_cost DECIMAL(10, 2),
ADD COLUMN payment_method TEXT,
ADD COLUMN payment_status TEXT DEFAULT 'pending';

-- Create enum for priority levels
CREATE TYPE priority_level AS ENUM ('low', 'normal', 'high', 'urgent');
ALTER TABLE public.shipments ALTER COLUMN priority_level TYPE priority_level USING priority_level::priority_level;

-- Create enum for payment status  
CREATE TYPE payment_status AS ENUM ('pending', 'paid', 'cancelled', 'refunded');
ALTER TABLE public.shipments ALTER COLUMN payment_status TYPE payment_status USING payment_status::payment_status;