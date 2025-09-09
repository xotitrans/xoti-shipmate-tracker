import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { supabase } from '@/integrations/supabase/client';
import { Search, Package, MapPin, Calendar, Truck, Phone, Mail, Clock, CheckCircle, AlertCircle, Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface TrackingData {
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
  estimated_delivery: string | null;
  actual_delivery: string | null;
  transport_type: string;
  weight: number | null;
  dimensions: string | null;
  created_at: string;
  notes: string | null;
}

interface TrackingHistoryItem {
  id: string;
  status: string;
  location: string;
  description: string | null;
  timestamp: string;
}

const Tracking = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [trackingNumber, setTrackingNumber] = useState(searchParams.get('number') || '');
  const [trackingResult, setTrackingResult] = useState<TrackingData | null>(null);
  const [trackingHistory, setTrackingHistory] = useState<TrackingHistoryItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  useEffect(() => {
    const numberFromUrl = searchParams.get('number');
    if (numberFromUrl && !trackingResult) {
      setTrackingNumber(numberFromUrl);
      handleTrack(numberFromUrl);
    }
  }, [searchParams]);

  const handleTrack = async (numberToSearch?: string) => {
    const searchNumber = numberToSearch || trackingNumber;
    
    if (!searchNumber.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir un numéro de suivi",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);
    
    try {
      const { data: shipment, error: shipmentError } = await supabase
        .from('shipments')
        .select('*')
        .eq('tracking_number', searchNumber)
        .single();

      if (shipmentError || !shipment) {
        setTrackingResult(null);
        setTrackingHistory([]);
        toast({
          title: "Colis non trouvé",
          description: "Aucun colis ne correspond à ce numéro de suivi",
          variant: "destructive",
        });
        return;
      }

      const { data: history, error: historyError } = await supabase
        .from('tracking_history')
        .select('*')
        .eq('shipment_id', shipment.id)
        .order('timestamp', { ascending: false });

      setTrackingResult(shipment);
      setTrackingHistory(history || []);
      
      if (!numberToSearch) {
        setSearchParams({ number: searchNumber });
      }
      
      toast({
        title: "Colis trouvé",
        description: `Statut: ${getStatusText(shipment.status)}`,
      });
      
    } catch (error) {
      console.error('Error tracking shipment:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la recherche",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
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

  const getTransportText = (type: string) => {
    switch (type) {
      case 'road': return 'Route';
      case 'air': return 'Aérien';
      case 'sea': return 'Maritime';
      case 'express': return 'Express';
      default: return type;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Suivi de colis</h1>
        <p className="text-muted-foreground">Suivez l'état de votre expédition en temps réel</p>
      </div>

      <div className="max-w-2xl mx-auto mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Rechercher un colis</CardTitle>
            <CardDescription>Saisissez votre numéro de suivi pour voir l'état de votre colis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="XTR1234567890"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1"
              />
              <Button onClick={() => handleTrack()} disabled={isSearching} className="shrink-0">
                {isSearching ? (
                  <Package className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Search className="h-4 w-4 mr-2" />
                )}
                {isSearching ? 'Recherche...' : 'Rechercher'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {trackingResult && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Colis {trackingResult.tracking_number}
                </CardTitle>
                <Badge variant={getStatusColor(trackingResult.status) as any}>
                  {getStatusIcon(trackingResult.status)}
                  <span className="ml-1">{getStatusText(trackingResult.status)}</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Expéditeur
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Nom:</strong> {trackingResult.sender_name}</p>
                    <p><strong>Adresse:</strong> {trackingResult.sender_address}</p>
                    <p><strong>Téléphone:</strong> {trackingResult.sender_phone}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Destinataire
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Nom:</strong> {trackingResult.recipient_name}</p>
                    <p><strong>Adresse:</strong> {trackingResult.recipient_address}</p>
                    <p><strong>Téléphone:</strong> {trackingResult.recipient_phone}</p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Position actuelle</p>
                    <p className="text-sm text-muted-foreground">
                      {trackingResult.current_location || 'Non définie'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Type de transport</p>
                    <p className="text-sm text-muted-foreground">
                      {getTransportText(trackingResult.transport_type)}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Livraison prévue</p>
                    <p className="text-sm text-muted-foreground">
                      {trackingResult.estimated_delivery ? 
                        new Date(trackingResult.estimated_delivery).toLocaleDateString('fr-FR') : 
                        'Non définie'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Tracking;