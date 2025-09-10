import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Shipment {
  id: string;
  tracking_number: string;
  sender_name: string;
  recipient_name: string;
  status: string;
  transport_type: string;
  created_at: string;
  transport_cost?: number;
}

export default function AdminShipments() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const { data, error } = await supabase
          .from('shipments')
          .select('id, tracking_number, sender_name, recipient_name, status, transport_type, created_at, transport_cost')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setShipments(data || []);
      } catch (error) {
        console.error('Error fetching shipments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShipments();
  }, []);

  const filteredShipments = shipments.filter(shipment =>
    shipment.tracking_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shipment.sender_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shipment.recipient_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in_transit': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return 'En attente';
      case 'in_transit': return 'En transit';
      case 'delivered': return 'Livré';
      case 'cancelled': return 'Annulé';
      default: return status;
    }
  };

  const getTransportLabel = (type: string) => {
    switch (type) {
      case 'road': return 'Routier';
      case 'air': return 'Aérien';
      case 'sea': return 'Maritime';
      case 'express': return 'Express';
      default: return type;
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

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Package className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Gestion des Envois</h1>
            <p className="text-muted-foreground">Gérez tous les envois de votre plateforme</p>
          </div>
        </div>
        <Link to="/admin/new-shipment">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nouvel Envoi
          </Button>
        </Link>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Rechercher par numéro de suivi, expéditeur ou destinataire..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Shipments List */}
      <Card>
        <CardHeader>
          <CardTitle>Envois ({filteredShipments.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredShipments.length === 0 ? (
            <div className="text-center py-8">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                {searchTerm ? "Aucun envoi trouvé pour cette recherche." : "Aucun envoi créé pour le moment."}
              </p>
              {!searchTerm && (
                <Link to="/admin/new-shipment" className="inline-block mt-4">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Créer le premier envoi
                  </Button>
                </Link>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredShipments.map((shipment) => (
                <div 
                  key={shipment.id} 
                  className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{shipment.tracking_number}</h3>
                        <Badge className={getStatusColor(shipment.status)}>
                          {getStatusLabel(shipment.status)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        De: {shipment.sender_name} → Vers: {shipment.recipient_name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {getTransportLabel(shipment.transport_type)} • 
                        Créé le {new Date(shipment.created_at).toLocaleDateString('fr-FR')}
                        {shipment.transport_cost && ` • ${shipment.transport_cost}€`}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/admin/shipments/${shipment.id}`}>
                        <Button variant="outline" size="sm">
                          Voir
                        </Button>
                      </Link>
                      <Link to={`/admin/shipments/${shipment.id}`}>
                        <Button variant="outline" size="sm">
                          Modifier
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}