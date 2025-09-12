import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Package, Search, UserPlus, Phone, Calendar } from 'lucide-react';

interface Client {
  id: string;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  created_at: string;
  shipments_count?: number;
}

export default function AdminClients() {
  console.log('AdminClients component loaded');
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log('AdminClients useEffect triggered');
    fetchClients();
  }, []);

  const fetchClients = async () => {
    console.log('Fetching clients...');
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select(`
          user_id,
          first_name,
          last_name,
          phone,
          created_at
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      const clientsData = (data || []).map(profile => ({
        id: profile.user_id,
        
        first_name: profile.first_name,
        last_name: profile.last_name,
        phone: profile.phone,
        created_at: profile.created_at,
      }));
      
      setClients(clientsData);
    } catch (error) {
      console.error('Error fetching clients:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredClients = clients.filter(client =>
    `${client.first_name || ''} ${client.last_name || ''}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (client.phone && client.phone.includes(searchTerm))
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Package className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Clients</h1>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Nouveau Client
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
          <Input
            placeholder="Rechercher par nom ou téléphone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredClients.length === 0 ? (
          <div className="text-center py-12">
            <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-muted-foreground mb-2">
              {searchTerm ? 'Aucun client trouvé' : 'Aucun client'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm 
                ? 'Essayez de modifier votre recherche'
                : 'Les clients apparaîtront ici une fois inscrits'
              }
            </p>
          </div>
        ) : (
          filteredClients.map((client) => (
            <div key={client.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-lg">
                    {client.first_name && client.last_name 
                      ? `${client.first_name} ${client.last_name}`
                      : 'Nom non renseigné'
                    }
                  </h3>
                  {client.phone && (
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Phone className="h-4 w-4" />
                      <span>{client.phone}</span>
                    </div>
                  )}
                </div>
                <Badge variant="outline">
                  Client
                </Badge>
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    Inscrit le {new Date(client.created_at).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Voir les envois
                  </Button>
                  <Button variant="outline" size="sm">
                    Contacter
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}