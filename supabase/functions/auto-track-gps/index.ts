import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { trackingNumber, latitude, longitude, location, deviceId, timestamp } = await req.json()

    if (!trackingNumber || (!latitude && !longitude && !location)) {
      return new Response(
        JSON.stringify({ error: 'Tracking number and at least one location parameter required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Find shipment by tracking number
    const { data: shipment, error: shipmentError } = await supabaseClient
      .from('shipments')
      .select('*')
      .eq('tracking_number', trackingNumber)
      .single()

    if (shipmentError || !shipment) {
      return new Response(
        JSON.stringify({ error: 'Shipment not found' }),
        { 
          status: 404, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Prepare location update
    const updateData: any = {
      updated_at: new Date().toISOString()
    }

    if (latitude !== undefined) updateData.current_latitude = latitude
    if (longitude !== undefined) updateData.current_longitude = longitude
    if (location) updateData.current_location = location

    // If coordinates provided but no location text, try reverse geocoding
    if (latitude && longitude && !location && Deno.env.get('MAPBOX_PUBLIC_TOKEN')) {
      try {
        const mapboxToken = Deno.env.get('MAPBOX_PUBLIC_TOKEN')
        const reverseGeoResponse = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxToken}&types=place,locality,neighborhood,address`
        )
        const geoData = await reverseGeoResponse.json()
        
        if (geoData.features && geoData.features.length > 0) {
          updateData.current_location = geoData.features[0].place_name
        }
      } catch (error) {
        console.error('Reverse geocoding failed:', error)
        updateData.current_location = `Position GPS: ${latitude}, ${longitude}`
      }
    }

    // Update shipment location
    const { data: updatedShipment, error: updateError } = await supabaseClient
      .from('shipments')
      .update(updateData)
      .eq('id', shipment.id)
      .select()
      .single()

    if (updateError) {
      return new Response(
        JSON.stringify({ error: updateError.message }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Add tracking history entry
    const { error: historyError } = await supabaseClient
      .from('tracking_history')
      .insert({
        shipment_id: shipment.id,
        status: shipment.status,
        location: updateData.current_location || shipment.current_location || 'Position GPS',
        description: deviceId ? `Mise à jour automatique depuis ${deviceId}` : 'Mise à jour automatique GPS',
        timestamp: timestamp || new Date().toISOString()
      })

    if (historyError) {
      console.error('Error adding tracking history:', historyError)
    }

    // Log the update
    console.log(`GPS location updated for ${trackingNumber}:`, {
      latitude: updateData.current_latitude,
      longitude: updateData.current_longitude,
      location: updateData.current_location,
      deviceId
    })

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'GPS location updated successfully',
        shipment: updatedShipment,
        coordinates: {
          latitude: updateData.current_latitude,
          longitude: updateData.current_longitude
        }
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})