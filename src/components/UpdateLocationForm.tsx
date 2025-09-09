import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Navigation } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface UpdateLocationFormProps {
  shipmentId: string;
  currentLocation?: string | null;
  currentLatitude?: number | null;
  currentLongitude?: number | null;
  onLocationUpdated?: () => void;
}

const UpdateLocationForm: React.FC<UpdateLocationFormProps> = ({
  shipmentId,
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
    status: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);

    try {
      const { data, error } = await supabase.functions.invoke('update-shipment-location', {
        body: {
          shipmentId,
          latitude: formData.latitude ? parseFloat(formData.latitude) : null,
          longitude: formData.longitude ? parseFloat(formData.longitude) : null,
          location: formData.location || null,
          status: formData.status || null,
          description: formData.description || null
        }
      });

      if (error) {
        toast({
          title: "Erreur",
          description: "Impossible de mettre à jour la localisation: " + error.message,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Localisation mise à jour",
        description: "La position GPS du colis a été mise à jour avec succès.",
      });

      // Reset form
      setFormData({
        latitude: '',
        longitude: '',
        location: '',
        status: '',
        description: ''
      });

      // Notify parent component
      if (onLocationUpdated) {
        onLocationUpdated();
      }

    } catch (error) {
      console.error('Error updating location:', error);
      toast({
        title: "Erreur",
        description: "Une erreur inattendue s'est produite",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
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
        setFormData(prev => ({
          ...prev,
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString()
        }));
        toast({
          title: "Position obtenue",
          description: "Coordonnées GPS récupérées avec succès.",
        });
      },
      (error) => {
        toast({
          title: "Erreur de géolocalisation",
          description: "Impossible d'obtenir la position actuelle: " + error.message,
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
          <MapPin className="h-5 w-5" />
          Mettre à jour la localisation
        </CardTitle>
        <CardDescription>
          Modifier la position GPS et les informations de localisation du colis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={getCurrentPosition}
              className="flex items-center gap-2"
            >
              <Navigation className="h-4 w-4" />
              Utiliser ma position
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Lieu/Adresse</Label>
            <Input
              id="location"
              placeholder="Centre de tri Paris, France"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Nouveau statut (optionnel)</Label>
            <Select
              value={formData.status}
              onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner un statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Aucun changement</SelectItem>
                <SelectItem value="pending">En attente</SelectItem>
                <SelectItem value="in_transit">En transit</SelectItem>
                <SelectItem value="delivered">Livré</SelectItem>
                <SelectItem value="failed">Échec</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (optionnel)</Label>
            <Textarea
              id="description"
              placeholder="Détails sur la mise à jour de localisation..."
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
            />
          </div>

          <Button type="submit" disabled={isUpdating} className="w-full">
            {isUpdating ? "Mise à jour..." : "Mettre à jour la localisation"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UpdateLocationForm;