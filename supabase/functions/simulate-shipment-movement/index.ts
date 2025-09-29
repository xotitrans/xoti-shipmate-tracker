import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface RoutePoint {
  lat: number;
  lng: number;
  location: string;
  status?: string;
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

    const { shipmentId, startLat, startLng, endLat, endLng, duration = 24 } = await req.json()

    if (!shipmentId || !startLat || !startLng || !endLat || !endLng) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Get current shipment details
    const { data: shipment, error: shipmentError } = await supabaseClient
      .from('shipments')
      .select('*')
      .eq('id', shipmentId)
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

    // Generate route points based on transport type
    const transportRoutes: { [key: string]: RoutePoint[] } = {
      road: [
        { lat: startLat, lng: startLng, location: "Départ - Centre de collecte", status: "in_transit" },
        { lat: startLat + (endLat - startLat) * 0.25, lng: startLng + (endLng - startLng) * 0.25, location: "Centre de tri régional" },
        { lat: startLat + (endLat - startLat) * 0.5, lng: startLng + (endLng - startLng) * 0.5, location: "En transit - Autoroute A1" },
        { lat: startLat + (endLat - startLat) * 0.75, lng: startLng + (endLng - startLng) * 0.75, location: "Centre de distribution" },
        { lat: endLat, lng: endLng, location: "Livraison - Adresse destinataire", status: "delivered" }
      ],
      air: [
        { lat: startLat, lng: startLng, location: "Aéroport de départ", status: "in_transit" },
        { lat: startLat + (endLat - startLat) * 0.1, lng: startLng + (endLng - startLng) * 0.1, location: "En vol - Altitude 10000m" },
        { lat: startLat + (endLat - startLat) * 0.5, lng: startLng + (endLng - startLng) * 0.5, location: "En vol - Mi-parcours" },
        { lat: startLat + (endLat - startLat) * 0.9, lng: startLng + (endLng - startLng) * 0.9, location: "Approche aéroport destination" },
        { lat: endLat, lng: endLng, location: "Aéroport de destination", status: "delivered" }
      ],
      sea: [
        { lat: startLat, lng: startLng, location: "Port de départ", status: "in_transit" },
        { lat: startLat + (endLat - startLat) * 0.2, lng: startLng + (endLng - startLng) * 0.2, location: "En mer - Sortie du port" },
        { lat: startLat + (endLat - startLat) * 0.5, lng: startLng + (endLng - startLng) * 0.5, location: "En mer - Pleine mer" },
        { lat: startLat + (endLat - startLat) * 0.8, lng: startLng + (endLng - startLng) * 0.8, location: "Approche port destination" },
        { lat: endLat, lng: endLng, location: "Port de destination", status: "delivered" }
      ],
      express: [
        { lat: startLat, lng: startLng, location: "Hub express - Collecte", status: "in_transit" },
        { lat: startLat + (endLat - startLat) * 0.3, lng: startLng + (endLng - startLng) * 0.3, location: "Centre de tri automatique" },
        { lat: startLat + (endLat - startLat) * 0.7, lng: startLng + (endLng - startLng) * 0.7, location: "Véhicule de livraison" },
        { lat: endLat, lng: endLng, location: "Livraison express", status: "delivered" }
      ]
    }

    const routePoints = transportRoutes[shipment.transport_type] || transportRoutes.road
    const intervalHours = Math.floor(duration / routePoints.length)

    console.log(`Starting simulation for shipment ${shipmentId} over ${duration} hours with ${routePoints.length} points`)

    // Schedule updates for each route point
    for (let i = 0; i < routePoints.length; i++) {
      const point = routePoints[i]
      const delayMs = i * intervalHours * 60 * 60 * 1000 // Convert hours to milliseconds
      
      // For demo purposes, we'll use shorter intervals (minutes instead of hours)
      const demoDelayMs = i * 2 * 60 * 1000 // 2 minutes between each update

      setTimeout(async () => {
        try {
          // Update shipment location
          const updateData: any = {
            current_latitude: point.lat,
            current_longitude: point.lng,
            current_location: point.location,
            updated_at: new Date().toISOString()
          }

          if (point.status) {
            updateData.status = point.status
          }

          await supabaseClient
            .from('shipments')
            .update(updateData)
            .eq('id', shipmentId)

          // Add tracking history
          await supabaseClient
            .from('tracking_history')
            .insert({
              shipment_id: shipmentId,
              status: point.status || shipment.status,
              location: point.location,
              description: `Position mise à jour automatiquement - ${point.location}`,
              timestamp: new Date().toISOString()
            })

          console.log(`Updated position ${i + 1}/${routePoints.length}: ${point.location}`)
        } catch (error) {
          console.error(`Error updating position ${i + 1}:`, error)
        }
      }, demoDelayMs)
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Simulation started for ${routePoints.length} points over ${duration} hours`,
        routePoints,
        intervalHours: intervalHours
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