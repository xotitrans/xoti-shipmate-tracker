import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Plus, Package, Clock, Truck, CheckCircle, AlertCircle, Trash2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

interface Shipment {
  id: string;
  tracking_number: string;
  status: string;
  recipient_name: string;
  current_location: string | null;
  estimated_delivery: string | null;
  created_at: string;
  transport_type: string;
}

const Dashboard = () => {
  const { user, loading } = useAuth();
  const { navigateWithLanguage, getLinkWithLanguage } = useLanguageNavigation();
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [isLoadingShipments, setIsLoadingShipments] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Redirect if not authenticated
  if (!loading && !user) {
    return <Navigate to="/auth" replace />;
  }

  useEffect(() => {
    if (user) {
      fetchShipments();
    }
  }, [user]);

  const fetchShipments = async () => {
    try {
      const { data, error } = await supabase
        .from('shipments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast({
          title: "Erreur",
          description: "Impossible de charger vos expéditions",
          variant: "destructive",
        });
      } else {
        setShipments(data || []);
      }
    } catch (error) {
      console.error('Error fetching shipments:', error);
    } finally {
      setIsLoadingShipments(false);
    }
  };

  const handleDeleteShipment = async (shipmentId: string, trackingNumber: string) => {
    setDeletingId(shipmentId);
    
    try {
      // Delete tracking history first (foreign key constraint)
      const { error: historyError } = await supabase
        .from('tracking_history')
        .delete()
        .eq('shipment_id', shipmentId);

      if (historyError) throw historyError;

      // Delete shipment photos
      const { error: photosError } = await supabase
        .from('shipment_photos')
        .delete()
        .eq('shipment_id', shipmentId);

      if (photosError) throw photosError;

      // Delete the shipment
      const { error: shipmentError } = await supabase
        .from('shipments')
        .delete()
        .eq('id', shipmentId);

      if (shipmentError) throw shipmentError;

      // Update local state
      setShipments(prev => prev.filter(s => s.id !== shipmentId));
      
      toast({
        title: "Succès",
        description: `L'envoi ${trackingNumber} a été supprimé avec succès.`,
      });
    } catch (error) {
      console.error('Error deleting shipment:', error);
      toast({
        title: "Erreur",
        description: "Impossible de supprimer cet envoi. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setDeletingId(null);
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

  if (loading || isLoadingShipments) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Package className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Chargement...</p>
        </div>
      </div>
    );
  }

  const stats = {
    total: shipments.length,
    pending: shipments.filter(s => s.status === 'pending').length,
    inTransit: shipments.filter(s => s.status === 'in_transit').length,
    delivered: shipments.filter(s => s.status === 'delivered').length,
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Tableau de bord</h1>
          <p className="text-muted-foreground">Gérez vos expéditions et suivez vos colis</p>
        </div>
        <Button onClick={() => navigateWithLanguage('new-shipment')}>
          <Plus className="h-4 w-4 mr-2" />
          Nouvelle expédition
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En attente</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pending}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En transit</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.inTransit}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Livrés</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.delivered}</div>
          </CardContent>
        </Card>
      </div>

      {/* Shipments List */}
      <Card>
        <CardHeader>
          <CardTitle>Vos expéditions</CardTitle>
          <CardDescription>
            Liste de toutes vos expéditions récentes
          </CardDescription>
        </CardHeader>
        <CardContent>
          {shipments.length === 0 ? (
            <div className="text-center py-8">
              <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">Aucune expédition</h3>
              <p className="text-muted-foreground mb-4">
                Vous n'avez pas encore créé d'expédition.
              </p>
              <Button onClick={() => navigateWithLanguage('new-shipment')}>
                <Plus className="h-4 w-4 mr-2" />
                Créer votre première expédition
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {shipments.map((shipment) => (
                <div key={shipment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(shipment.status)}
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{shipment.tracking_number}</span>
                        <Badge variant={getStatusColor(shipment.status) as any}>
                          {getStatusText(shipment.status)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Pour: {shipment.recipient_name} • {getTransportText(shipment.transport_type)}
                      </p>
                      {shipment.current_location && (
                        <p className="text-sm text-muted-foreground">
                          Localisation: {shipment.current_location}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-2 justify-end">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => navigateWithLanguage(`tracking?number=${shipment.tracking_number}`)}
                      >
                        Suivre
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            disabled={deletingId === shipment.id}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
                            <AlertDialogDescription>
                              Êtes-vous sûr de vouloir supprimer l'envoi <strong>{shipment.tracking_number}</strong> ?
                              Cette action est irréversible et supprimera également tout l'historique de suivi associé.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteShipment(shipment.id, shipment.tracking_number)}
                              className="bg-red-600 hover:bg-red-700"
                            >
                              Supprimer
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                    {shipment.estimated_delivery && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Livraison prévue: {new Date(shipment.estimated_delivery).toLocaleDateString('fr-FR')}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;