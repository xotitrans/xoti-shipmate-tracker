import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  User, 
  MapPin, 
  Package, 
  Phone, 
  Shield, 
  FileText, 
  AlertTriangle, 
  CreditCard,
  Camera,
  Upload,
  X,
  Image
} from "lucide-react";

export default function AdminNewShipment() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState<Array<{file: File, preview: string}>>([]);
  
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (uploadedPhotos.length + files.length > 10) {
      toast({
        title: "Limite dépassée",
        description: "Vous ne pouvez pas ajouter plus de 10 photos.",
        variant: "destructive",
      });
      return;
    }

    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const preview = URL.createObjectURL(file);
        setUploadedPhotos(prev => [...prev, { file, preview }]);
      }
    });
  };

  const removePhoto = (index: number) => {
    setUploadedPhotos(prev => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Generate tracking number
      const trackingNumber = `LOGICY-${Date.now()}`;
      
      const shipmentData = {
        // Basic info
        user_id: user?.id,
        tracking_number: trackingNumber,
        
        // Sender info
        sender_name: formData.get('senderName') as string,
        sender_phone: formData.get('senderPhone') as string,
        sender_address: `${formData.get('senderAddress')}, ${formData.get('senderCity')}, ${formData.get('senderCountry')}`,
        
        // Recipient info
        recipient_name: formData.get('recipientName') as string,
        recipient_phone: formData.get('recipientPhone') as string,
        recipient_address: `${formData.get('recipientAddress')}, ${formData.get('recipientCity')}, ${formData.get('recipientCountry')}`,
        
        // Shipment details
        transport_type: formData.get('transportType') as 'road' | 'air' | 'sea' | 'express',
        weight: parseFloat(formData.get('weight') as string) || null,
        dimensions: formData.get('dimensions') as string,
        estimated_delivery: formData.get('estimatedDelivery') as string,
        
        // Current location
        current_location: formData.get('currentAddress') as string,
        current_latitude: parseFloat(formData.get('latitude') as string) || null,
        current_longitude: parseFloat(formData.get('longitude') as string) || null,
        google_maps_link: formData.get('mapsLink') as string,
        
        // Emergency contact
        emergency_contact_name: formData.get('emergencyContactName') as string,
        emergency_contact_phone: formData.get('emergencyContactPhone') as string,
        
        // Value and insurance
        declared_value: parseFloat(formData.get('declaredValue') as string) || null,
        currency: formData.get('currency') as string,
        insured_value: parseFloat(formData.get('insuredValue') as string) || null,
        
        // References and instructions
        client_reference: formData.get('clientReference') as string,
        order_number: formData.get('orderNumber') as string,
        special_instructions: formData.get('specialInstructions') as string,
        delivery_instructions: formData.get('deliveryInstructions') as string,
        preferred_delivery_time: formData.get('preferredDeliveryTime') as string,
        internal_notes: formData.get('internalNotes') as string,
        
        // Priority and options
        priority_level: formData.get('priorityLevel') as 'low' | 'normal' | 'high' | 'urgent',
        is_fragile: formData.get('isFragile') === 'on',
        is_dangerous: formData.get('isDangerous') === 'on',
        requires_signature: formData.get('requiresSignature') === 'on',
        
        // Cost and payment
        transport_cost: parseFloat(formData.get('transportCost') as string) || null,
        payment_method: formData.get('paymentMethod') as string,
        payment_status: formData.get('paymentStatus') as 'pending' | 'paid' | 'cancelled' | 'refunded',
        
        // Notes
        notes: formData.get('notes') as string,
        status: 'pending' as const,
      };

      const { data: shipment, error } = await supabase
        .from('shipments')
        .insert(shipmentData)
        .select()
        .single();

      if (error) throw error;

      // Upload photos if any
      if (uploadedPhotos.length > 0) {
        const photoUploadPromises = uploadedPhotos.map(async (photo, index) => {
          const fileExt = photo.file.name.split('.').pop();
          const fileName = `${shipment.id}/${Date.now()}-${index}.${fileExt}`;
          
          const { error: uploadError } = await supabase.storage
            .from('shipment-photos')
            .upload(fileName, photo.file);

          if (uploadError) throw uploadError;

          const { data: { publicUrl } } = supabase.storage
            .from('shipment-photos')
            .getPublicUrl(fileName);

          return supabase
            .from('shipment_photos')
            .insert({
              shipment_id: shipment.id,
              photo_url: publicUrl,
              uploaded_by: user?.id,
              description: `Photo ${index + 1}`
            });
        });

        await Promise.all(photoUploadPromises);
      }

      toast({
        title: "Envoi créé avec succès",
        description: `Numéro de suivi : ${trackingNumber}`,
      });

      navigate('/admin/shipments');
    } catch (error) {
      console.error('Error creating shipment:', error);
      toast({
        title: "Erreur",
        description: "Impossible de créer l'envoi. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Package className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Créer un Nouvel Envoi</h1>
          <p className="text-muted-foreground">Ajoutez un nouvel envoi au système de suivi</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Sender Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Informations Expéditeur
            </CardTitle>
            <p className="text-sm text-muted-foreground">Détails de l'expéditeur du colis</p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="senderName">Nom complet *</Label>
              <Input id="senderName" name="senderName" required />
            </div>
            <div>
              <Label htmlFor="senderPhone">Téléphone *</Label>
              <Input id="senderPhone" name="senderPhone" type="tel" placeholder="+31626018693" required />
            </div>
            <div>
              <Label htmlFor="senderEmail">Email</Label>
              <Input id="senderEmail" name="senderEmail" type="email" placeholder="expediteur@example.com" />
            </div>
            <div>
              <Label htmlFor="senderCity">Ville *</Label>
              <Input id="senderCity" name="senderCity" required />
            </div>
            <div>
              <Label htmlFor="senderAddress">Adresse *</Label>
              <Input id="senderAddress" name="senderAddress" required />
            </div>
            <div>
              <Label htmlFor="senderCountry">Pays *</Label>
              <Input id="senderCountry" name="senderCountry" required />
            </div>
          </CardContent>
        </Card>

        {/* Recipient Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Informations Destinataire
            </CardTitle>
            <p className="text-sm text-muted-foreground">Détails du destinataire du colis</p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="recipientName">Nom complet *</Label>
              <Input id="recipientName" name="recipientName" required />
            </div>
            <div>
              <Label htmlFor="recipientPhone">Téléphone *</Label>
              <Input id="recipientPhone" name="recipientPhone" type="tel" placeholder="+31626018693" required />
            </div>
            <div>
              <Label htmlFor="recipientEmail">Email</Label>
              <Input id="recipientEmail" name="recipientEmail" type="email" placeholder="destinataire@example.com" />
            </div>
            <div>
              <Label htmlFor="recipientCity">Ville *</Label>
              <Input id="recipientCity" name="recipientCity" required />
            </div>
            <div>
              <Label htmlFor="recipientAddress">Adresse *</Label>
              <Input id="recipientAddress" name="recipientAddress" required />
            </div>
            <div>
              <Label htmlFor="recipientCountry">Pays *</Label>
              <Input id="recipientCountry" name="recipientCountry" required />
            </div>
          </CardContent>
        </Card>

        {/* Shipment Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Détails de l'Envoi
            </CardTitle>
            <p className="text-sm text-muted-foreground">Informations sur le type et les caractéristiques de l'envoi</p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="transportType">Mode de transport *</Label>
              <Select name="transportType" required>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="road">Transport routier</SelectItem>
                  <SelectItem value="air">Transport aérien</SelectItem>
                  <SelectItem value="sea">Transport maritime</SelectItem>
                  <SelectItem value="express">Transport express</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="packageType">Type d'envoi *</Label>
              <Select name="packageType" required>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="document">Document</SelectItem>
                  <SelectItem value="package">Colis</SelectItem>
                  <SelectItem value="pallet">Palette</SelectItem>
                  <SelectItem value="container">Container</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="weight">Poids (kg)</Label>
              <Input id="weight" name="weight" type="number" step="0.1" placeholder="Ex: 25.5" />
            </div>
            <div>
              <Label htmlFor="estimatedDelivery">Livraison estimée</Label>
              <Input id="estimatedDelivery" name="estimatedDelivery" type="date" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="dimensions">Dimensions / Description</Label>
              <Textarea 
                id="dimensions" 
                name="dimensions" 
                placeholder="Ex: 50cm x 30cm x 20cm ou description du contenu"
              />
            </div>
          </CardContent>
        </Card>

        {/* Current Location */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Position Actuelle du Colis
            </CardTitle>
            <p className="text-sm text-muted-foreground">Indiquez la position actuelle du colis pour le suivi en temps réel</p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="currentAddress">Adresse actuelle</Label>
              <Input 
                id="currentAddress" 
                name="currentAddress" 
                placeholder="Ex: Entrepôt LOGICY Paris, 123 Rue de la Logistique"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="mapsLink">Lien Google Maps (temporaire)</Label>
              <Input 
                id="mapsLink" 
                name="mapsLink" 
                placeholder="Ex: https://maps.google.com/..."
              />
              <p className="text-xs text-muted-foreground mt-1">
                (optionnel - extrait automatiquement les coordonnées)
              </p>
            </div>
            <div>
              <Label htmlFor="latitude">Latitude</Label>
              <Input 
                id="latitude" 
                name="latitude" 
                type="number" 
                step="any" 
                placeholder="Ex: 48.8566"
              />
              <p className="text-xs text-muted-foreground">(coordonnée GPS)</p>
            </div>
            <div>
              <Label htmlFor="longitude">Longitude</Label>
              <Input 
                id="longitude" 
                name="longitude" 
                type="number" 
                step="any" 
                placeholder="Ex: 2.3522"
              />
              <p className="text-xs text-muted-foreground">(coordonnée GPS)</p>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              Contact d'Urgence
            </CardTitle>
            <p className="text-sm text-muted-foreground">Personne à contacter en cas de problème avec la livraison</p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="emergencyContactName">Nom du contact</Label>
              <Input 
                id="emergencyContactName" 
                name="emergencyContactName" 
                placeholder="Nom de la personne à contacter"
              />
            </div>
            <div>
              <Label htmlFor="emergencyContactPhone">Téléphone d'urgence</Label>
              <Input 
                id="emergencyContactPhone" 
                name="emergencyContactPhone" 
                type="tel" 
                placeholder="+31626018693"
              />
            </div>
          </CardContent>
        </Card>

        {/* Value and Insurance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Valeur et Assurance
            </CardTitle>
            <p className="text-sm text-muted-foreground">Valeur déclarée de la marchandise et couverture d'assurance</p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="declaredValue">Valeur déclarée</Label>
              <Input 
                id="declaredValue" 
                name="declaredValue" 
                type="number" 
                step="0.01" 
                placeholder="1000.00"
              />
            </div>
            <div>
              <Label htmlFor="currency">Devise</Label>
              <Select name="currency" defaultValue="EUR">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EUR">EUR (€)</SelectItem>
                  <SelectItem value="USD">USD ($)</SelectItem>
                  <SelectItem value="GBP">GBP (£)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="insuredValue">Valeur assurée</Label>
              <Input 
                id="insuredValue" 
                name="insuredValue" 
                type="number" 
                step="0.01" 
                placeholder="1000.00"
              />
            </div>
          </CardContent>
        </Card>

        {/* References and Instructions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Références et Instructions
            </CardTitle>
            <p className="text-sm text-muted-foreground">Références client et instructions spéciales pour la livraison</p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="clientReference">Référence client</Label>
              <Input 
                id="clientReference" 
                name="clientReference" 
                placeholder="REF-2024-001"
              />
            </div>
            <div>
              <Label htmlFor="orderNumber">Numéro de commande</Label>
              <Input 
                id="orderNumber" 
                name="orderNumber" 
                placeholder="CMD-12345"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="specialInstructions">Instructions spéciales</Label>
              <Textarea 
                id="specialInstructions" 
                name="specialInstructions" 
                placeholder="Instructions particulières pour le transport (fragile, manipulation spéciale, etc.)"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="deliveryInstructions">Instructions de livraison</Label>
              <Textarea 
                id="deliveryInstructions" 
                name="deliveryInstructions" 
                placeholder="Instructions pour la livraison (code d'accès, étage, horaires préférés, etc.)"
              />
            </div>
            <div>
              <Label htmlFor="preferredDeliveryTime">Créneau de livraison préféré</Label>
              <Input 
                id="preferredDeliveryTime" 
                name="preferredDeliveryTime" 
                placeholder="Ex: 9h-12h ou 14h-18h"
              />
            </div>
            <div>
              <Label htmlFor="internalNotes">Notes internes</Label>
              <Textarea 
                id="internalNotes" 
                name="internalNotes" 
                placeholder="Notes pour l'équipe LOGICY (non visibles par le client)"
              />
            </div>
          </CardContent>
        </Card>

        {/* Priority and Options */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              Priorité et Options
            </CardTitle>
            <p className="text-sm text-muted-foreground">Niveau de priorité et options spéciales pour l'envoi</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="priorityLevel">Niveau de priorité</Label>
              <Select name="priorityLevel" defaultValue="normal">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Faible</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="high">Élevé</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="isFragile" name="isFragile" />
                <label htmlFor="isFragile" className="text-sm font-medium">
                  Colis fragile
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="isDangerous" name="isDangerous" />
                <label htmlFor="isDangerous" className="text-sm font-medium">
                  Matières dangereuses
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="requiresSignature" name="requiresSignature" />
                <label htmlFor="requiresSignature" className="text-sm font-medium">
                  Signature obligatoire
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cost and Payment */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Coût et Paiement
            </CardTitle>
            <p className="text-sm text-muted-foreground">Informations de facturation et paiement</p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="transportCost">Coût de transport</Label>
              <Input 
                id="transportCost" 
                name="transportCost" 
                type="number" 
                step="0.01" 
                placeholder="150.00"
              />
            </div>
            <div>
              <Label htmlFor="paymentMethod">Mode de paiement</Label>
              <Select name="paymentMethod">
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="card">Carte bancaire</SelectItem>
                  <SelectItem value="transfer">Virement</SelectItem>
                  <SelectItem value="cash">Espèces</SelectItem>
                  <SelectItem value="check">Chèque</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="paymentStatus">Statut paiement</Label>
              <Select name="paymentStatus" defaultValue="pending">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">En attente</SelectItem>
                  <SelectItem value="paid">Payé</SelectItem>
                  <SelectItem value="cancelled">Annulé</SelectItem>
                  <SelectItem value="refunded">Remboursé</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Photos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-primary" />
              Photos de l'envoi
              <span className="text-sm font-normal text-muted-foreground">
                {uploadedPhotos.length}/10
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {uploadedPhotos.length === 0 ? (
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground mb-2">Aucune photo ajoutée</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Cliquez sur "Ajouter des photos" pour commencer
                </p>
                <div className="relative">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Button type="button" variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Ajouter des photos
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {uploadedPhotos.map((photo, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={photo.preview}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg border"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
                {uploadedPhotos.length < 10 && (
                  <div className="relative">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Button type="button" variant="outline" className="w-full">
                      <Upload className="h-4 w-4 mr-2" />
                      Ajouter d'autres photos ({10 - uploadedPhotos.length} restantes)
                    </Button>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Submit Buttons */}
        <div className="flex gap-3 pt-6">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="flex-1 md:flex-none"
          >
            <Package className="h-4 w-4 mr-2" />
            {isSubmitting ? 'Création en cours...' : "Créer l'Envoi"}
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => navigate('/admin')}
            className="flex-1 md:flex-none"
          >
            Annuler
          </Button>
        </div>
      </form>
    </div>
  );
}