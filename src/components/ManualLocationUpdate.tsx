import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Navigation, Save, RotateCcw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.latitude || !formData.longitude) {
      toast({
        title: "Coordonnées manquantes",
        description: "Veuillez saisir une position GPS.",
        variant: "destructive",
      });
      return;
    }

    setIsUpdating(true);

    try {
      // Direct database update (simple and reliable)
      const { error: updateError } = await supabase
        .from('shipments')
        .update({
          current_latitude: parseFloat(formData.latitude),
          current_longitude: parseFloat(formData.longitude),
          current_location: formData.location || null,
          updated_at: new Date().toISOString()
        })
        .eq('id', shipmentId);

      if (updateError) {
        throw new Error(updateError.message);
      }

      // Add tracking history if description provided
      if (formData.description) {
        await supabase
          .from('tracking_history')
          .insert({
            shipment_id: shipmentId,
            status: 'in_transit',
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
    <div className="space-y-4">
      {/* Simple coordinate input */}
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
    </div>
  );
};

export default ManualLocationUpdate;