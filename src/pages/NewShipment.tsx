import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Package, ArrowLeft, Upload, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';

const NewShipment = () => {
  const { user, loading } = useAuth();
  const { navigateWithLanguage, getLinkWithLanguage } = useLanguageNavigation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [photos, setPhotos] = useState<File[]>([]);

  // Redirect if not authenticated
  if (!loading && !user) {
    return <Navigate to={getLinkWithLanguage('auth')} replace />;
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (photos.length + files.length > 10) {
      toast({
        title: "Limite dépassée",
        description: "Vous ne pouvez pas télécharger plus de 10 photos.",
        variant: "destructive",
      });
      return;
    }
    setPhotos(prev => [...prev, ...files]);
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("=== FORM SUBMISSION STARTED ===");
    
    if (!user) {
      console.log("❌ User not authenticated");
      toast({
        title: "Erreur d'authentification",
        description: "Vous devez être connecté pour créer un envoi",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log("✅ Setting submitting to true");
    
    try {
      const formData = new FormData(e.currentTarget);
      console.log("📋 Form data extracted");
      
      // Validate required fields
      const requiredFields = ['senderName', 'senderAddress', 'senderPhone', 'recipientName', 'recipientAddress', 'recipientPhone', 'transportType'];
      const missingFields = requiredFields.filter(field => !formData.get(field));
      
      if (missingFields.length > 0) {
        console.log("❌ Missing required fields:", missingFields);
        toast({
          title: "Champs manquants",
          description: `Veuillez remplir les champs obligatoires: ${missingFields.join(', ')}`,
          variant: "destructive",
        });
        return;
      }
      
      const shipmentData = {
        user_id: user.id,
        sender_name: formData.get('senderName') as string,
        sender_address: formData.get('senderAddress') as string,
        sender_phone: formData.get('senderPhone') as string,
        recipient_name: formData.get('recipientName') as string,
        recipient_address: formData.get('recipientAddress') as string,
        recipient_phone: formData.get('recipientPhone') as string,
        transport_type: formData.get('transportType') as any,
        weight: parseFloat(formData.get('weight') as string) || null,
        dimensions: formData.get('dimensions') as string || null,
        declared_value: parseFloat(formData.get('declaredValue') as string) || null,
        insured_value: parseFloat(formData.get('insuredValue') as string) || null,
        currency: formData.get('currency') as string || 'EUR',
        is_fragile: formData.get('isFragile') === 'on',
        is_dangerous: formData.get('isDangerous') === 'on',
        requires_signature: formData.get('requiresSignature') === 'on',
        priority_level: formData.get('priorityLevel') as any || 'normal',
        transport_cost: parseFloat(formData.get('transportCost') as string) || null,
        payment_status: formData.get('paymentStatus') as any || 'pending',
        payment_method: formData.get('paymentMethod') as string || null,
        client_reference: formData.get('clientReference') as string || null,
        order_number: formData.get('orderNumber') as string || null,
        emergency_contact_name: formData.get('emergencyContactName') as string || null,
        emergency_contact_phone: formData.get('emergencyContactPhone') as string || null,
        current_location: formData.get('currentLocation') as string || null,
        current_latitude: parseFloat(formData.get('currentLatitude') as string) || null,
        current_longitude: parseFloat(formData.get('currentLongitude') as string) || null,
        delivery_instructions: formData.get('deliveryInstructions') as string || null,
        preferred_delivery_time: formData.get('preferredDeliveryTime') as string || null,
        special_instructions: formData.get('specialInstructions') as string || null,
        notes: formData.get('notes') as string || null,
        estimated_delivery: formData.get('estimatedDelivery') ? formData.get('estimatedDelivery') as string : null,
      };

      console.log("📦 Shipment data prepared:", shipmentData);
      console.log("🚀 Sending request to Supabase...");

      const { data, error } = await supabase
        .from('shipments')
        .insert(shipmentData)
        .select()
        .single();

      console.log("📡 Supabase response received");
      console.log("Data:", data);
      console.log("Error:", error);

      if (error) {
        console.log("❌ Supabase error:", error);
        toast({
          title: "Erreur",
          description: "Impossible de créer l'expédition: " + error.message,
          variant: "destructive",
        });
        return;
      }

      // Upload photos if any
      if (photos.length > 0) {
        for (const photo of photos) {
          const fileName = `${user.id}/${Date.now()}-${photo.name}`;
          const { error: uploadError } = await supabase.storage
            .from('shipment-photos')
            .upload(fileName, photo);

          if (uploadError) {
            console.error('Error uploading photo:', uploadError);
            toast({
              title: "Erreur upload photo",
              description: `Impossible d'uploader ${photo.name}: ${uploadError.message}`,
              variant: "destructive",
            });
            continue;
          }

          const { data: { publicUrl } } = supabase.storage
            .from('shipment-photos')
            .getPublicUrl(fileName);

          const { error: insertError } = await supabase
            .from('shipment_photos')
            .insert({
              shipment_id: data.id,
              photo_url: publicUrl,
              uploaded_by: user.id
            });

          if (insertError) {
            console.error('Error inserting photo record:', insertError);
          }
        }
      }

      toast({
        title: "Expédition créée",
        description: `Numéro de suivi: ${data.tracking_number}`,
      });
      navigateWithLanguage('dashboard');
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur inattendue s'est produite: " + (error instanceof Error ? error.message : 'Erreur inconnue'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Package className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl">
      <div className="mb-8">
        <Button 
          variant="ghost" 
          onClick={() => navigateWithLanguage('dashboard')}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour au tableau de bord
        </Button>
        <h1 className="text-3xl font-bold">Nouvelle expédition</h1>
        <p className="text-muted-foreground">Créez une nouvelle expédition pour suivre votre colis</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Sender Information */}
          <Card>
            <CardHeader>
              <CardTitle>Informations expéditeur</CardTitle>
              <CardDescription>Vos coordonnées d'expéditeur</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="senderName">Nom complet *</Label>
                <Input 
                  id="senderName" 
                  name="senderName" 
                  placeholder="Jean Dupont"
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="senderAddress">Adresse complète *</Label>
                <Textarea 
                  id="senderAddress" 
                  name="senderAddress" 
                  placeholder="123 rue de la Paix, 75001 Paris, France"
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="senderPhone">Téléphone *</Label>
                <Input 
                  id="senderPhone" 
                  name="senderPhone" 
                  type="tel"
                  placeholder="+49 176 93722675"
                  required 
                />
              </div>
            </CardContent>
          </Card>

          {/* Recipient Information */}
          <Card>
            <CardHeader>
              <CardTitle>Informations destinataire</CardTitle>
              <CardDescription>Coordonnées du destinataire</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recipientName">Nom complet *</Label>
                <Input 
                  id="recipientName" 
                  name="recipientName" 
                  placeholder="Marie Martin"
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="recipientAddress">Adresse complète *</Label>
                <Textarea 
                  id="recipientAddress" 
                  name="recipientAddress" 
                  placeholder="456 avenue des Champs, 69001 Lyon, France"
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="recipientPhone">Téléphone *</Label>
                <Input 
                  id="recipientPhone" 
                  name="recipientPhone" 
                  type="tel"
                  placeholder="+49 176 93722675"
                  required 
                />
              </div>
            </CardContent>
          </Card>

          {/* Shipment Details */}
          <Card>
            <CardHeader>
              <CardTitle>Détails de l'expédition</CardTitle>
              <CardDescription>Informations sur le colis et le transport</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="transportType">Type de transport *</Label>
                <select 
                  name="transportType" 
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Sélectionnez un type de transport</option>
                  <option value="road">Transport routier</option>
                  <option value="air">Transport aérien</option>
                  <option value="sea">Transport maritime</option>
                  <option value="express">Express</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight">Poids (kg)</Label>
                  <Input 
                    id="weight" 
                    name="weight" 
                    type="number"
                    step="0.1"
                    placeholder="2.5"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dimensions">Dimensions</Label>
                  <Input 
                    id="dimensions" 
                    name="dimensions" 
                    placeholder="30x20x10 cm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="estimatedDelivery">Livraison prévue</Label>
                <Input 
                  id="estimatedDelivery" 
                  name="estimatedDelivery" 
                  type="date"
                />
              </div>

              <div className="space-y-4">
                <Label>Options spéciales</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="isFragile" name="isFragile" />
                  <Label htmlFor="isFragile" className="text-sm font-normal">
                    Fragile
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="isDangerous" name="isDangerous" />
                  <Label htmlFor="isDangerous" className="text-sm font-normal">
                    Marchandise dangereuse
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="requiresSignature" name="requiresSignature" />
                  <Label htmlFor="requiresSignature" className="text-sm font-normal">
                    Signature requise
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes additionnelles</Label>
                <Textarea 
                  id="notes" 
                  name="notes" 
                  placeholder="Informations supplémentaires, instructions spéciales..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Current Location */}
          <Card>
            <CardHeader>
              <CardTitle>Localisation actuelle</CardTitle>
              <CardDescription>Où se trouve actuellement le colis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentLocation">Localisation</Label>
                <Input 
                  id="currentLocation" 
                  name="currentLocation" 
                  placeholder="Centre de tri Paris, France"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentLatitude">Latitude GPS</Label>
                  <Input 
                    id="currentLatitude" 
                    name="currentLatitude" 
                    type="number"
                    step="any"
                    placeholder="48.8566"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currentLongitude">Longitude GPS</Label>
                  <Input 
                    id="currentLongitude" 
                    name="currentLongitude" 
                    type="number"
                    step="any"
                    placeholder="2.3522"
                  />
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground">
                💡 Les coordonnées GPS permettront un affichage précis sur la carte de suivi
              </p>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Contact d'urgence</CardTitle>
              <CardDescription>Personne à contacter en cas de problème</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="emergencyContactName">Nom</Label>
                  <Input 
                    id="emergencyContactName" 
                    name="emergencyContactName" 
                    placeholder="Contact d'urgence"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyContactPhone">Téléphone</Label>
                  <Input 
                    id="emergencyContactPhone" 
                    name="emergencyContactPhone" 
                    type="tel"
                    placeholder="+49 176 93722675"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Value and Insurance */}
          <Card>
            <CardHeader>
              <CardTitle>Valeur et assurance</CardTitle>
              <CardDescription>Informations financières du colis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="declaredValue">Valeur déclarée</Label>
                  <Input 
                    id="declaredValue" 
                    name="declaredValue" 
                    type="number"
                    step="0.01"
                    placeholder="100.00"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="insuredValue">Valeur assurée</Label>
                  <Input 
                    id="insuredValue" 
                    name="insuredValue" 
                    type="number"
                    step="0.01"
                    placeholder="100.00"
                  />
                </div>
                 <div className="space-y-2">
                   <Label htmlFor="currency">Devise</Label>
                   <select 
                     name="currency" 
                     defaultValue="EUR"
                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                   >
                     <option value="EUR">EUR</option>
                     <option value="USD">USD</option>
                     <option value="GBP">GBP</option>
                   </select>
                 </div>
              </div>
            </CardContent>
          </Card>

          {/* References */}
          <Card>
            <CardHeader>
              <CardTitle>Références</CardTitle>
              <CardDescription>Numéros de référence et commandes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="clientReference">Référence client</Label>
                  <Input 
                    id="clientReference" 
                    name="clientReference" 
                    placeholder="REF-2024-001"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orderNumber">Numéro de commande</Label>
                  <Input 
                    id="orderNumber" 
                    name="orderNumber" 
                    placeholder="CMD-2024-001"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Priority */}
          <Card>
            <CardHeader>
              <CardTitle>Priorité</CardTitle>
              <CardDescription>Niveau de priorité de l'expédition</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="space-y-2">
                 <Label htmlFor="priorityLevel">Niveau de priorité</Label>
                 <select 
                   name="priorityLevel" 
                   defaultValue="normal"
                   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                 >
                   <option value="low">Faible</option>
                   <option value="normal">Normal</option>
                   <option value="high">Élevé</option>
                   <option value="urgent">Urgent</option>
                 </select>
               </div>
            </CardContent>
          </Card>

          {/* Cost */}
          <Card>
            <CardHeader>
              <CardTitle>Coût</CardTitle>
              <CardDescription>Informations sur les coûts et paiement</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="transportCost">Coût transport</Label>
                  <Input 
                    id="transportCost" 
                    name="transportCost" 
                    type="number"
                    step="0.01"
                    placeholder="50.00"
                  />
                </div>
                 <div className="space-y-2">
                   <Label htmlFor="paymentMethod">Mode de paiement</Label>
                   <select 
                     name="paymentMethod"
                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                   >
                     <option value="">Sélectionner</option>
                     <option value="credit_card">Carte de crédit</option>
                     <option value="bank_transfer">Virement</option>
                     <option value="cash">Espèces</option>
                     <option value="check">Chèque</option>
                   </select>
                 </div>
              </div>
              
               <div className="space-y-2">
                 <Label htmlFor="paymentStatus">Statut de paiement</Label>
                 <select 
                   name="paymentStatus" 
                   defaultValue="pending"
                   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                 >
                   <option value="pending">En attente</option>
                   <option value="paid">Payé</option>
                   <option value="failed">Échoué</option>
                   <option value="refunded">Remboursé</option>
                 </select>
               </div>
            </CardContent>
          </Card>

          {/* Delivery Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Instructions de livraison</CardTitle>
              <CardDescription>Consignes spéciales pour la livraison</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryInstructions">Instructions</Label>
                <Textarea 
                  id="deliveryInstructions" 
                  name="deliveryInstructions" 
                  placeholder="Laisser le colis chez le voisin si absent..."
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="preferredDeliveryTime">Heure préférée</Label>
                <Input 
                  id="preferredDeliveryTime" 
                  name="preferredDeliveryTime" 
                  placeholder="Entre 14h et 18h"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="specialInstructions">Instructions spéciales</Label>
                <Textarea 
                  id="specialInstructions" 
                  name="specialInstructions" 
                  placeholder="Manipuler avec précaution..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Photos */}
          <Card>
            <CardHeader>
              <CardTitle>Photos</CardTitle>
              <CardDescription>Téléchargez des photos du colis (max 10)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="photos">Sélectionner des photos</Label>
                <Input 
                  id="photos"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoUpload}
                  className="cursor-pointer"
                />
              </div>
              
              {photos.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {photos.map((photo, index) => (
                    <div key={index} className="relative">
                      <img 
                        src={URL.createObjectURL(photo)} 
                        alt={`Photo ${index + 1}`}
                        className="w-full h-24 object-cover rounded-md"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-1 right-1 h-6 w-6 p-0"
                        onClick={() => removePhoto(index)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Création en cours..." : "Créer l'expédition"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewShipment;