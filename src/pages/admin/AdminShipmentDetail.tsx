import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Package, MapPin, Calendar, Truck, Phone, Mail, Clock, CheckCircle, AlertCircle, User, Euro } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import ShipmentMap from "@/components/ShipmentMap";
import UpdateLocationForm from "@/components/UpdateLocationForm";
import AutoTrackingControls from "@/components/AutoTrackingControls";
import ManualLocationUpdate from "@/components/ManualLocationUpdate";

interface ShipmentDetail {
  id: string;
  tracking_number: string;
  status: string;
  sender_name: string;
  sender_address: string;
  sender_phone: string;
  recipient_name: string;
  recipient_address: string;
  recipient_phone: string;
  current_location: string | null;
  current_latitude: number | null;
  current_longitude: number | null;
  estimated_delivery: string | null;
  actual_delivery: string | null;
  transport_type: string;
  weight: number | null;
  dimensions: string | null;
  declared_value: number | null;
  insured_value: number | null;
  currency: string | null;
  transport_cost: number | null;
  payment_status: string | null;
  payment_method: string | null;
  priority_level: string | null;
  is_fragile: boolean;
  is_dangerous: boolean;
  requires_signature: boolean;
  emergency_contact_name: string | null;
  emergency_contact_phone: string | null;
  client_reference: string | null;
  order_number: string | null;
  delivery_instructions: string | null;
  special_instructions: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

interface TrackingHistoryItem {
  id: string;
  status: string;
  location: string;
  description: string | null;
  timestamp: string;
}

export default function AdminShipmentDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [shipment, setShipment] = useState<ShipmentDetail | null>(null);
  const [trackingHistory, setTrackingHistory] = useState<TrackingHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetchShipmentDetail();
  }, [id]);

  const fetchShipmentDetail = async () => {
    if (!id) return;

    try {
      setLoading(true);
      
      // Get shipment details
      const { data: shipmentData, error: shipmentError } = await supabase
        .from('shipments')
        .select('*')
        .eq('id', id)
        .single();

      if (shipmentError) {
        toast({
          title: "Erreur",
          description: "Impossible de charger les détails de l'envoi",
          variant: "destructive",
        });
        navigate('/admin/shipments');
        return;
      }

      // Get tracking history
      const { data: historyData, error: historyError } = await supabase
        .from('tracking_history')
        .select('*')
        .eq('shipment_id', id)
        .order('timestamp', { ascending: false });

      if (historyError) {
        console.error('Error fetching tracking history:', historyError);
      }

      setShipment(shipmentData);
      setTrackingHistory(historyData || []);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur inattendue s'est produite",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'in_transit': return <Truck className="h-4 w-4" />;
      case 'delivered': return <CheckCircle className="h-4 w-4" />;
      case 'failed': return <AlertCircle className="h-4 w-4" />;
      default: return <Package className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'secondary';
      case 'in_transit': return 'default';
      case 'delivered': return 'default';
      case 'failed': return 'destructive';
      default: return 'secondary';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'En attente';
      case 'in_transit': return 'En transit';
      case 'delivered': return 'Livré';
      case 'failed': return 'Échec';
      default: return status;
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'low': return 'Faible';
      case 'normal': return 'Normal';
      case 'high': return 'Élevé';
      case 'urgent': return 'Urgent';
      default: return priority;
    }
  };

  const getPaymentStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'En attente';
      case 'paid': return 'Payé';
      case 'failed': return 'Échoué';
      case 'refunded': return 'Remboursé';
      default: return status;
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <Package className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!shipment) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Envoi non trouvé</h2>
          <p className="text-muted-foreground mb-4">L'envoi demandé n'existe pas ou a été supprimé.</p>
          <Button onClick={() => navigate('/admin/shipments')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à la liste
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate('/admin/shipments')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour
        </Button>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <Package className="h-8 w-8" />
                {shipment.tracking_number}
              </h1>
              <p className="text-muted-foreground">Détails de l'envoi</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant={getStatusColor(shipment.status) as any} className="text-lg px-4 py-2">
                {getStatusIcon(shipment.status)}
                <span className="ml-2">{getStatusText(shipment.status)}</span>
              </Badge>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => navigate(`/admin/shipments/${shipment.id}/edit`)}
                >
                  Modifier
                </Button>
                <Button 
                  variant="default"
                  onClick={() => {
                    // Simulate sending notification
                    toast({
                      title: "Notification envoyée",
                      description: "Le client a été notifié du statut de son envoi",
                    });
                  }}
                >
                  Envoyer notification
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle>Informations de base</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-muted-foreground">Type de transport</span>
                  <p className="font-medium">{shipment.transport_type}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Priorité</span>
                  <p className="font-medium">{getPriorityText(shipment.priority_level || 'normal')}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Poids</span>
                  <p className="font-medium">{shipment.weight ? `${shipment.weight} kg` : 'Non spécifié'}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Dimensions</span>
                  <p className="font-medium">{shipment.dimensions || 'Non spécifiées'}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                {shipment.is_fragile && <Badge variant="outline">Fragile</Badge>}
                {shipment.is_dangerous && <Badge variant="outline">Dangereux</Badge>}
                {shipment.requires_signature && <Badge variant="outline">Signature requise</Badge>}
              </div>
            </CardContent>
          </Card>

          {/* Sender & Recipient */}
          <Card>
            <CardHeader>
              <CardTitle>Expéditeur et Destinataire</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Expéditeur
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Nom:</strong> {shipment.sender_name}</p>
                    <p><strong>Adresse:</strong> {shipment.sender_address}</p>
                    <p><strong>Téléphone:</strong> {shipment.sender_phone}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Destinataire
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Nom:</strong> {shipment.recipient_name}</p>
                    <p><strong>Adresse:</strong> {shipment.recipient_address}</p>
                    <p><strong>Téléphone:</strong> {shipment.recipient_phone}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Financial Info */}
          {(shipment.declared_value || shipment.transport_cost) && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Euro className="h-5 w-5" />
                  Informations financières
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {shipment.declared_value && (
                    <div>
                      <span className="text-sm text-muted-foreground">Valeur déclarée</span>
                      <p className="font-medium">{shipment.declared_value} {shipment.currency || 'EUR'}</p>
                    </div>
                  )}
                  {shipment.transport_cost && (
                    <div>
                      <span className="text-sm text-muted-foreground">Coût transport</span>
                      <p className="font-medium">{shipment.transport_cost} {shipment.currency || 'EUR'}</p>
                    </div>
                  )}
                  {shipment.payment_status && (
                    <div>
                      <span className="text-sm text-muted-foreground">Statut paiement</span>
                      <p className="font-medium">{getPaymentStatusText(shipment.payment_status)}</p>
                    </div>
                  )}
                  {shipment.payment_method && (
                    <div>
                      <span className="text-sm text-muted-foreground">Mode de paiement</span>
                      <p className="font-medium">{shipment.payment_method}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Manual Location Update */}
          <ManualLocationUpdate
            shipmentId={shipment.id}
            trackingNumber={shipment.tracking_number}
            currentLocation={shipment.current_location}
            currentLatitude={shipment.current_latitude}
            currentLongitude={shipment.current_longitude}
            onLocationUpdated={fetchShipmentDetail}
          />

          {/* Update Location Form */}
          <UpdateLocationForm
            shipmentId={shipment.id}
            currentLocation={shipment.current_location}
            currentLatitude={shipment.current_latitude}
            currentLongitude={shipment.current_longitude}
            onLocationUpdated={fetchShipmentDetail}
          />

          {/* Auto Tracking Controls */}
          <AutoTrackingControls
            shipmentId={shipment.id}
            trackingNumber={shipment.tracking_number}
            senderAddress={shipment.sender_address}
            recipientAddress={shipment.recipient_address}
            transportType={shipment.transport_type}
            onLocationUpdated={fetchShipmentDetail}
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* GPS Map */}
          <ShipmentMap
            shipmentId={shipment.id}
            latitude={shipment.current_latitude}
            longitude={shipment.current_longitude}
            currentLocation={shipment.current_location}
            senderAddress={shipment.sender_address}
            recipientAddress={shipment.recipient_address}
          />

          {/* Tracking History */}
          {trackingHistory.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Historique de suivi
                </CardTitle>
                <CardDescription>
                  Suivi détaillé des étapes de livraison
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingHistory.map((item, index) => (
                    <div key={item.id} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`
                          w-3 h-3 rounded-full border-2 
                          ${index === 0 ? 'bg-primary border-primary' : 'bg-background border-muted-foreground'}
                        `} />
                        {index < trackingHistory.length - 1 && (
                          <div className="w-0.5 h-8 bg-muted-foreground/30 mt-2" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {getStatusIcon(item.status)}
                          <span className="font-medium text-sm">
                            {getStatusText(item.status)}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {new Date(item.timestamp).toLocaleString('fr-FR')}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <div className="flex items-center gap-1 mb-1">
                            <MapPin className="h-3 w-3" />
                            {item.location}
                          </div>
                          {item.description && (
                            <p className="text-xs">{item.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Additional Info */}
          {(shipment.notes || shipment.delivery_instructions || shipment.special_instructions) && (
            <Card>
              <CardHeader>
                <CardTitle>Informations supplémentaires</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {shipment.notes && (
                  <div>
                    <span className="text-sm text-muted-foreground">Notes</span>
                    <p className="text-sm">{shipment.notes}</p>
                  </div>
                )}
                {shipment.delivery_instructions && (
                  <div>
                    <span className="text-sm text-muted-foreground">Instructions de livraison</span>
                    <p className="text-sm">{shipment.delivery_instructions}</p>
                  </div>
                )}
                {shipment.special_instructions && (
                  <div>
                    <span className="text-sm text-muted-foreground">Instructions spéciales</span>
                    <p className="text-sm">{shipment.special_instructions}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}