import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Navigation, Mouse, Save, RotateCcw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import mapboxgl from 'mapbox-gl';

interface ManualLocationUpdateProps {
  shipmentId: string;
  trackingNumber: string;
  currentLocation?: string | null;
  currentLatitude?: number | null;
  currentLongitude?: number | null;
  onLocationUpdated?: () => void;
}

const ManualLocationUpdate: React.FC<ManualLocationUpdateProps> = ({
  shipmentId,
  trackingNumber,
  currentLocation,
  currentLatitude,
  currentLongitude,
  onLocationUpdated
}) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState({
    latitude: currentLatitude?.toString() || '',
    longitude: currentLongitude?.toString() || '',
    location: currentLocation || '',
    description: ''
  });
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);

  // Get Mapbox token
  useEffect(() => {
    const getMapboxToken = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('get-mapbox-token');
        if (!error && data?.token) {
          setMapboxToken(data.token);
        }
      } catch (err) {
        console.error('Error getting Mapbox token:', err);
      }
    };
    getMapboxToken();
  }, []);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 10,
      center: currentLatitude && currentLongitude 
        ? [currentLongitude, currentLatitude] 
        : [2.3522, 48.8566] // Default to Paris
    });

    // Add click handler to update position
    map.current.on('click', (e) => {
      const { lng, lat } = e.lngLat;
      
      // Update form data
      setFormData(prev => ({
        ...prev,
        latitude: lat.toFixed(6),
        longitude: lng.toFixed(6)
      }));

      // Update marker position
      if (marker.current) {
        marker.current.setLngLat([lng, lat]);
      } else {
        marker.current = new mapboxgl.Marker({ color: '#ef4444' })
          .setLngLat([lng, lat])
          .addTo(map.current!);
      }

      // Try to reverse geocode
      reverseGeocode(lat, lng);
    });

    // Add existing marker if coordinates exist
    if (currentLatitude && currentLongitude) {
      marker.current = new mapboxgl.Marker({ color: '#ef4444' })
        .setLngLat([currentLongitude, currentLatitude])
        .addTo(map.current);
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const reverseGeocode = async (lat: number, lng: number) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxToken}&types=place,locality,neighborhood,address&limit=1`
      );
      const data = await response.json();
      
      if (data.features && data.features.length > 0) {
        setFormData(prev => ({
          ...prev,
          location: data.features[0].place_name
        }));
      }
    } catch (error) {
      console.error('Reverse geocoding failed:', error);
    }
  };

  const getCurrentPosition = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Non supporté",
        description: "La géolocalisation n'est pas supportée par ce navigateur.",
        variant: "destructive",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        
        setFormData(prev => ({
          ...prev,
          latitude: lat.toFixed(6),
          longitude: lng.toFixed(6)
        }));

        // Update map and marker
        if (map.current) {
          map.current.flyTo({ center: [lng, lat], zoom: 15 });
          
          if (marker.current) {
            marker.current.setLngLat([lng, lat]);
          } else {
            marker.current = new mapboxgl.Marker({ color: '#ef4444' })
              .setLngLat([lng, lat])
              .addTo(map.current);
          }
        }

        reverseGeocode(lat, lng);
        
        toast({
          title: "Position obtenue",
          description: "Votre position GPS a été récupérée avec succès.",
        });
      },
      (error) => {
        toast({
          title: "Erreur de géolocalisation",
          description: "Impossible d'obtenir la position: " + error.message,
          variant: "destructive",
        });
      }
    );
  };

  const resetToOriginal = () => {
    setFormData({
      latitude: currentLatitude?.toString() || '',
      longitude: currentLongitude?.toString() || '',
      location: currentLocation || '',
      description: ''
    });

    if (map.current && currentLatitude && currentLongitude) {
      map.current.flyTo({ 
        center: [currentLongitude, currentLatitude], 
        zoom: 12 
      });

      if (marker.current) {
        marker.current.setLngLat([currentLongitude, currentLatitude]);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.latitude || !formData.longitude) {
      toast({
        title: "Coordonnées manquantes",
        description: "Veuillez saisir ou sélectionner une position GPS.",
        variant: "destructive",
      });
      return;
    }

    setIsUpdating(true);

    try {
      const { data, error } = await supabase.functions.invoke('auto-track-gps', {
        body: {
          trackingNumber,
          latitude: parseFloat(formData.latitude),
          longitude: parseFloat(formData.longitude),
          location: formData.location || null,
          deviceId: 'admin-manual-update',
          timestamp: new Date().toISOString()
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      // Add tracking history if description provided
      if (formData.description) {
        await supabase
          .from('tracking_history')
          .insert({
            shipment_id: shipmentId,
            status: 'in_transit', // You might want to make this configurable
            location: formData.location || `GPS: ${formData.latitude}, ${formData.longitude}`,
            description: formData.description,
            timestamp: new Date().toISOString()
          });
      }

      toast({
        title: "Position mise à jour",
        description: "La nouvelle position GPS a été enregistrée avec succès.",
      });

      // Reset description only
      setFormData(prev => ({ ...prev, description: '' }));

      if (onLocationUpdated) {
        onLocationUpdated();
      }

    } catch (error) {
      console.error('Error updating location:', error);
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Une erreur inattendue s'est produite",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Mise à jour manuelle GPS
        </CardTitle>
        <CardDescription>
          Changez la position du colis en cliquant sur la carte ou en saisissant les coordonnées
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Interactive Map */}
        <div className="space-y-2">
          <Label>Cliquez sur la carte pour choisir la position</Label>
          <div 
            ref={mapContainer} 
            className="w-full h-64 rounded-lg border cursor-crosshair"
            style={{ minHeight: '256px' }}
          />
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <Mouse className="h-3 w-3" />
            Cliquez n'importe où sur la carte pour définir la nouvelle position
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Coordinates */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="latitude">Latitude</Label>
              <Input
                id="latitude"
                type="number"
                step="any"
                placeholder="48.8566"
                value={formData.latitude}
                onChange={(e) => setFormData(prev => ({ ...prev, latitude: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="longitude">Longitude</Label>
              <Input
                id="longitude"
                type="number"
                step="any"
                placeholder="2.3522"
                value={formData.longitude}
                onChange={(e) => setFormData(prev => ({ ...prev, longitude: e.target.value }))}
              />
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location">Lieu/Adresse</Label>
            <Input
              id="location"
              placeholder="Paris, France"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description (optionnel)</Label>
            <Textarea
              id="description"
              placeholder="Colis arrivé au centre de tri de Paris..."
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={2}
            />
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={getCurrentPosition}
              className="flex items-center gap-2"
            >
              <Navigation className="h-4 w-4" />
              Ma position
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={resetToOriginal}
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>

            <Button 
              type="submit" 
              disabled={isUpdating}
              className="flex items-center gap-2 flex-1"
            >
              <Save className="h-4 w-4" />
              {isUpdating ? "Mise à jour..." : "Enregistrer position"}
            </Button>
          </div>
        </form>

        {/* Current position info */}
        {(currentLatitude && currentLongitude) && (
          <div className="p-3 bg-muted rounded-lg text-sm">
            <h4 className="font-medium mb-1">Position actuelle :</h4>
            <p className="text-muted-foreground">
              {currentLatitude.toFixed(6)}, {currentLongitude.toFixed(6)}
              {currentLocation && ` - ${currentLocation}`}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ManualLocationUpdate;