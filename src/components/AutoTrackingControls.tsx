import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Square, MapPin, Navigation, Zap, Clock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface AutoTrackingControlsProps {
  shipmentId: string;
  trackingNumber: string;
  senderAddress: string;
  recipientAddress: string;
  transportType: string;
  onLocationUpdated?: () => void;
}

const AutoTrackingControls: React.FC<AutoTrackingControlsProps> = ({
  shipmentId,
  trackingNumber,
  senderAddress,
  recipientAddress,
  transportType,
  onLocationUpdated
}) => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationDuration, setSimulationDuration] = useState(2); // 2 hours by default

  // Coordinates for major French cities for demo
  const cityCoordinates: { [key: string]: { lat: number; lng: number } } = {
    'paris': { lat: 48.8566, lng: 2.3522 },
    'lyon': { lat: 45.7640, lng: 4.8357 },
    'marseille': { lat: 43.2965, lng: 5.3698 },
    'toulouse': { lat: 43.6047, lng: 1.4442 },
    'nice': { lat: 43.7102, lng: 7.2620 },
    'nantes': { lat: 47.2184, lng: -1.5536 },
    'strasbourg': { lat: 48.5734, lng: 7.7521 },
    'bordeaux': { lat: 44.8378, lng: -0.5792 }
  };

  const geocodeAddress = async (address: string): Promise<{ lat: number; lng: number } | null> => {
    try {
      // Try to find coordinates for major cities first
      const lowerAddress = address.toLowerCase();
      for (const [city, coords] of Object.entries(cityCoordinates)) {
        if (lowerAddress.includes(city)) {
          return coords;
        }
      }

      // If no city match, try Mapbox geocoding
      const { data, error } = await supabase.functions.invoke('get-mapbox-token');
      if (error || !data?.token) {
        // Fallback to Paris coordinates
        return { lat: 48.8566, lng: 2.3522 };
      }

      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${data.token}&limit=1`
      );
      const geoData = await response.json();
      
      if (geoData.features && geoData.features.length > 0) {
        const [lng, lat] = geoData.features[0].center;
        return { lat, lng };
      }

      // Fallback coordinates (Paris)
      return { lat: 48.8566, lng: 2.3522 };
    } catch (error) {
      console.error('Geocoding error:', error);
      // Fallback coordinates (Paris)
      return { lat: 48.8566, lng: 2.3522 };
    }
  };

  const startSimulation = async () => {
    setIsSimulating(true);

    try {
      toast({
        title: "Démarrage de la simulation",
        description: "Géocodage des adresses en cours...",
      });

      // Geocode sender and recipient addresses
      const startCoords = await geocodeAddress(senderAddress);
      const endCoords = await geocodeAddress(recipientAddress);

      if (!startCoords || !endCoords) {
        throw new Error('Impossible de géocoder les adresses');
      }

      const { data, error } = await supabase.functions.invoke('simulate-shipment-movement', {
        body: {
          shipmentId,
          startLat: startCoords.lat,
          startLng: startCoords.lng,
          endLat: endCoords.lat,
          endLng: endCoords.lng,
          duration: simulationDuration
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      toast({
        title: "Simulation démarrée",
        description: `Le colis se déplacera sur ${data.routePoints.length} points en ${simulationDuration}h (démo: 2min/point)`,
      });

      // Auto-refresh after simulation completes
      setTimeout(() => {
        setIsSimulating(false);
        if (onLocationUpdated) {
          onLocationUpdated();
        }
      }, data.routePoints.length * 2 * 60 * 1000); // 2 minutes per point

    } catch (error) {
      console.error('Simulation error:', error);
      toast({
        title: "Erreur de simulation",
        description: error instanceof Error ? error.message : "Une erreur inattendue s'est produite",
        variant: "destructive",
      });
      setIsSimulating(false);
    }
  };

  const sendGPSUpdate = async () => {
    if (!navigator.geolocation) {
      toast({
        title: "Non supporté",
        description: "La géolocalisation n'est pas supportée par ce navigateur.",
        variant: "destructive",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { data, error } = await supabase.functions.invoke('auto-track-gps', {
            body: {
              trackingNumber,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              deviceId: 'admin-panel',
              timestamp: new Date().toISOString()
            }
          });

          if (error) {
            throw new Error(error.message);
          }

          toast({
            title: "Position mise à jour",
            description: "La position GPS actuelle a été enregistrée avec succès.",
          });

          if (onLocationUpdated) {
            onLocationUpdated();
          }

        } catch (error) {
          toast({
            title: "Erreur GPS",
            description: error instanceof Error ? error.message : "Erreur lors de la mise à jour",
            variant: "destructive",
          });
        }
      },
      (error) => {
        toast({
          title: "Erreur de géolocalisation",
          description: "Impossible d'obtenir la position: " + error.message,
          variant: "destructive",
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5" />
          Tracking automatique
        </CardTitle>
        <CardDescription>
          Simuler le déplacement du colis ou mettre à jour la position GPS
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Status */}
        <div className="flex items-center gap-2">
          <Badge variant={isSimulating ? "default" : "secondary"}>
            {isSimulating ? (
              <>
                <Play className="h-3 w-3 mr-1" />
                Simulation en cours
              </>
            ) : (
              <>
                <Square className="h-3 w-3 mr-1" />
                Inactif
              </>
            )}
          </Badge>
          <span className="text-sm text-muted-foreground">
            Transport: {transportType}
          </span>
        </div>

        {/* Simulation Controls */}
        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="duration">Durée de simulation (heures)</Label>
            <Input
              id="duration"
              type="number"
              min="1"
              max="48"
              value={simulationDuration}
              onChange={(e) => setSimulationDuration(parseInt(e.target.value) || 2)}
              className="w-24"
            />
            <p className="text-xs text-muted-foreground">
              Pour la démo: 2 minutes par étape de transport
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={startSimulation}
              disabled={isSimulating}
              className="flex items-center gap-2"
            >
              <Play className="h-4 w-4" />
              {isSimulating ? "Simulation..." : "Démarrer simulation"}
            </Button>

            <Button
              variant="outline"
              onClick={sendGPSUpdate}
              className="flex items-center gap-2"
            >
              <Navigation className="h-4 w-4" />
              Position actuelle
            </Button>
          </div>
        </div>

        {/* Info Box */}
        <div className="p-3 bg-muted rounded-lg text-sm">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Comment ça marche ?
          </h4>
          <ul className="space-y-1 text-muted-foreground">
            <li>• <strong>Simulation:</strong> Déplace automatiquement le colis de l'expéditeur au destinataire</li>
            <li>• <strong>Position actuelle:</strong> Utilise votre GPS comme position du colis</li>
            <li>• <strong>API externe:</strong> Utilisez /auto-track-gps pour les trackers GPS réels</li>
          </ul>
        </div>

        {/* API Info */}
        <div className="p-3 border rounded-lg text-sm">
          <h4 className="font-medium mb-2">API pour trackers GPS</h4>
          <code className="bg-muted p-2 rounded text-xs block">
            POST /functions/v1/auto-track-gps<br/>
            {JSON.stringify({
              trackingNumber: trackingNumber,
              latitude: "48.8566",
              longitude: "2.3522",
              location: "Paris, France",
              deviceId: "GPS_TRACKER_001"
            }, null, 1)}
          </code>
        </div>
      </CardContent>
    </Card>
  );
};

export default AutoTrackingControls;