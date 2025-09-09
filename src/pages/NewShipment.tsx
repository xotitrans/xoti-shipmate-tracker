import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Package, ArrowLeft } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const NewShipment = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if not authenticated
  if (!loading && !user) {
    return <Navigate to="/auth" replace />;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
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
      notes: formData.get('notes') as string || null,
      estimated_delivery: formData.get('estimatedDelivery') ? formData.get('estimatedDelivery') as string : null,
    };

    try {
      const { data, error } = await supabase
        .from('shipments')
        .insert(shipmentData)
        .select()
        .single();

      if (error) {
        toast({
          title: "Erreur",
          description: "Impossible de créer l'expédition: " + error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Expédition créée",
          description: `Numéro de suivi: ${data.tracking_number}`,
        });
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error creating shipment:', error);
      toast({
        title: "Erreur",
        description: "Une erreur inattendue s'est produite",
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
          onClick={() => navigate('/dashboard')}
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
                  placeholder="+33 1 23 45 67 89"
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
                  placeholder="+33 4 56 78 90 12"
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
                <Select name="transportType" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un type de transport" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="road">Transport routier</SelectItem>
                    <SelectItem value="air">Transport aérien</SelectItem>
                    <SelectItem value="sea">Transport maritime</SelectItem>
                    <SelectItem value="express">Express</SelectItem>
                  </SelectContent>
                </Select>
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

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Création en cours..." : "Créer l'expédition"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewShipment;