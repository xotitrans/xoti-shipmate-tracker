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

    const { shipmentId, latitude, longitude, location, status, description } = await req.json()

    if (!shipmentId) {
      return new Response(
        JSON.stringify({ error: 'Shipment ID is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Update shipment location and coordinates
    const updateData: any = {
      updated_at: new Date().toISOString()
    }

    if (latitude !== undefined) updateData.current_latitude = latitude
    if (longitude !== undefined) updateData.current_longitude = longitude
    if (location) updateData.current_location = location
    if (status) updateData.status = status

    const { data: shipment, error: updateError } = await supabaseClient
      .from('shipments')
      .update(updateData)
      .eq('id', shipmentId)
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
    if (location || status) {
      const { error: historyError } = await supabaseClient
        .from('tracking_history')
        .insert({
          shipment_id: shipmentId,
          status: status || shipment.status,
          location: location || shipment.current_location || 'Position GPS',
          description: description || null,
          timestamp: new Date().toISOString()
        })

      if (historyError) {
        console.error('Error adding tracking history:', historyError)
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Location updated successfully',
        shipment 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})