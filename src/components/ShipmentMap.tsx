import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ShipmentMapProps {
  shipmentId?: string;
  latitude?: number | null;
  longitude?: number | null;
  currentLocation?: string;
  senderAddress?: string;
  recipientAddress?: string;
}

const ShipmentMap: React.FC<ShipmentMapProps> = ({ 
  shipmentId, 
  latitude, 
  longitude, 
  currentLocation,
  senderAddress,
  recipientAddress 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  // Get Mapbox token from Supabase secrets
  useEffect(() => {
    const getMapboxToken = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('get-mapbox-token');
        if (error) {
          setError('Impossible de charger la carte. Veuillez configurer le token Mapbox.');
          setIsLoading(false);
          return;
        }
        setMapboxToken(data.token);
      } catch (err) {
        console.error('Error getting Mapbox token:', err);
        setError('Erreur lors du chargement de la carte.');
        setIsLoading(false);
      }
    };

    getMapboxToken();
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    setIsLoading(true);

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 10,
      center: latitude && longitude ? [longitude, latitude] : [2.3522, 48.8566] // Default to Paris
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.on('load', () => {
      setIsLoading(false);
      
      // Add current position marker if coordinates are available
      if (latitude && longitude && map.current) {
        // Create custom marker for current position
        const currentMarker = new mapboxgl.Marker({
          color: '#ef4444',
          scale: 1.2
        })
          .setLngLat([longitude, latitude])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <div class="p-2">
                  <h3 class="font-semibold text-sm mb-1">Position actuelle</h3>
                  <p class="text-xs text-gray-600">${currentLocation || 'Position GPS'}</p>
                  <p class="text-xs text-gray-500 mt-1">
                    Lat: ${latitude.toFixed(6)}<br>
                    Lng: ${longitude.toFixed(6)}
                  </p>
                </div>
              `)
          )
          .addTo(map.current);

        // Center map on current position
        map.current.setCenter([longitude, latitude]);
        map.current.setZoom(12);
      }

      // Add sender marker if address is available
      if (senderAddress && map.current) {
        geocodeAddress(senderAddress, 'sender');
      }

      // Add recipient marker if address is available
      if (recipientAddress && map.current) {
        geocodeAddress(recipientAddress, 'recipient');
      }
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, latitude, longitude, currentLocation, senderAddress, recipientAddress]);

  const geocodeAddress = async (address: string, type: 'sender' | 'recipient') => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxToken}&limit=1`
      );
      const data = await response.json();
      
      if (data.features && data.features.length > 0 && map.current) {
        const [lng, lat] = data.features[0].center;
        
        const color = type === 'sender' ? '#22c55e' : '#3b82f6';
        const label = type === 'sender' ? 'Expéditeur' : 'Destinataire';
        
        new mapboxgl.Marker({
          color: color,
          scale: 0.8
        })
          .setLngLat([lng, lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <div class="p-2">
                  <h3 class="font-semibold text-sm mb-1">${label}</h3>
                  <p class="text-xs text-gray-600">${address}</p>
                </div>
              `)
          )
          .addTo(map.current);
      }
    } catch (error) {
      console.error(`Error geocoding ${type} address:`, error);
    }
  };

  const centerOnCurrentLocation = () => {
    if (latitude && longitude && map.current) {
      map.current.flyTo({
        center: [longitude, latitude],
        zoom: 15,
        duration: 2000
      });
    }
  };

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Localisation GPS
          </CardTitle>
          <CardDescription>Position actuelle du colis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Localisation GPS
            </CardTitle>
            <CardDescription>
              {latitude && longitude 
                ? `Position actuelle: ${currentLocation || 'Position GPS'}` 
                : 'Aucune position GPS disponible'
              }
            </CardDescription>
          </div>
          {latitude && longitude && (
            <Button
              variant="outline"
              size="sm"
              onClick={centerOnCurrentLocation}
              className="flex items-center gap-2"
            >
              <Navigation className="h-4 w-4" />
              Centrer
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div 
            ref={mapContainer} 
            className="w-full h-64 rounded-lg overflow-hidden"
            style={{ minHeight: '256px' }}
          />
          
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-lg">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                <p className="text-sm text-muted-foreground">Chargement de la carte...</p>
              </div>
            </div>
          )}

          {!latitude || !longitude ? (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/80 rounded-lg">
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Position GPS non disponible</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Le colis n'a pas encore de coordonnées GPS
                </p>
              </div>
            </div>
          ) : null}
        </div>

        {latitude && longitude && (
          <div className="mt-4 p-3 bg-muted rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Latitude:</span>
                <span className="ml-2 font-mono">{latitude.toFixed(6)}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Longitude:</span>
                <span className="ml-2 font-mono">{longitude.toFixed(6)}</span>
              </div>
            </div>
            {currentLocation && (
              <div className="mt-2 text-sm">
                <span className="text-muted-foreground">Lieu:</span>
                <span className="ml-2">{currentLocation}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ShipmentMap;