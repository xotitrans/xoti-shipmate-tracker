import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Package, Truck, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const mockTrackingData = {
  'XTI-2024-001234': {
    id: 'XTI-2024-001234',
    status: 'en_transit',
    service: 'Transport Routier',
    origin: 'Paris, France',
    destination: 'Madrid, Espagne',
    estimatedDelivery: '25 Janvier 2024',
    weight: '15.5 kg',
    history: [
      { date: '22 Jan 2024 09:30', location: 'Paris, France', status: 'Collecté', description: 'Colis collecté chez l\'expéditeur' },
      { date: '22 Jan 2024 14:15', location: 'Hub Paris', status: 'En transit', description: 'Colis en préparation pour le transport' },
      { date: '23 Jan 2024 06:00', location: 'En route vers Madrid', status: 'En transit', description: 'Transport en cours vers la destination' },
      { date: '24 Jan 2024 12:30', location: 'Toulouse, France', status: 'En transit', description: 'Passage par le hub de Toulouse' },
    ]
  }
};

const statusConfig = {
  collecte: { icon: Package, color: 'bg-blue-500', label: 'Collecté' },
  en_transit: { icon: Truck, color: 'bg-yellow-500', label: 'En Transit' },
  livre: { icon: CheckCircle, color: 'bg-green-500', label: 'Livré' },
  probleme: { icon: AlertCircle, color: 'bg-red-500', label: 'Problème' }
};

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      const result = mockTrackingData[trackingNumber.toUpperCase() as keyof typeof mockTrackingData];
      
      if (result) {
        setTrackingResult(result);
        toast({
          title: "Colis trouvé !",
          description: `Statut : ${statusConfig[result.status as keyof typeof statusConfig].label}`,
        });
      } else {
        setTrackingResult(null);
        toast({
          title: "Colis non trouvé",
          description: "Vérifiez votre numéro de suivi et réessayez.",
          variant: "destructive"
        });
      }
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Suivi de Colis
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Suivez vos expéditions en temps réel avec notre système de tracking avancé.
              Entrez votre numéro de suivi pour obtenir des informations détaillées.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Rechercher votre colis</CardTitle>
                <p className="text-center text-muted-foreground">
                  Entrez votre numéro de suivi (ex: XTI-2024-001234)
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTrack} className="space-y-4">
                  <div className="flex gap-4">
                    <Input
                      placeholder="Numéro de suivi..."
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" disabled={isSearching} className="px-8">
                      {isSearching ? (
                        'Recherche...'
                      ) : (
                        <>
                          <Search className="mr-2 h-4 w-4" />
                          Suivre
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Essayez le numéro d'exemple : <button type="button" className="text-primary hover:underline" onClick={() => setTrackingNumber('XTI-2024-001234')}>XTI-2024-001234</button>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {trackingResult && (
        <section className="py-16 bg-gradient-card">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Status Overview */}
              <Card className="animate-slide-up">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Colis {trackingResult.id}</CardTitle>
                    <Badge variant="secondary" className="px-4 py-2">
                      {trackingResult.service}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className={`mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full ${statusConfig[trackingResult.status as keyof typeof statusConfig].color} text-white`}>
                        <Truck className="h-6 w-6" />
                      </div>
                      <div className="font-semibold">{statusConfig[trackingResult.status as keyof typeof statusConfig].label}</div>
                      <div className="text-sm text-muted-foreground">Statut actuel</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div className="font-semibold">{trackingResult.origin}</div>
                      <div className="text-sm text-muted-foreground">Origine</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div className="font-semibold">{trackingResult.destination}</div>
                      <div className="text-sm text-muted-foreground">Destination</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div className="font-semibold">{trackingResult.estimatedDelivery}</div>
                      <div className="text-sm text-muted-foreground">Livraison prévue</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tracking History */}
              <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle>Historique de suivi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
                    
                    {trackingResult.history.map((event: any, index: number) => (
                      <div key={index} className="relative flex items-start gap-6 pb-8">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground z-10">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                            <h4 className="font-semibold">{event.status}</h4>
                            <span className="text-sm text-muted-foreground">{event.date}</span>
                          </div>
                          <p className="text-muted-foreground mb-1">{event.location}</p>
                          <p className="text-sm">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <CardHeader>
                    <CardTitle>Détails du Colis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Poids :</span>
                      <span className="font-medium">{trackingResult.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service :</span>
                      <span className="font-medium">{trackingResult.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Références :</span>
                      <span className="font-medium">{trackingResult.id}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <CardHeader>
                    <CardTitle>Besoin d'aide ?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Notre service client est à votre disposition pour toute question.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Téléphone :</span>
                        <span className="font-medium">+33 1 23 45 67 89</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Email :</span>
                        <span className="font-medium">support@xoti-transport.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-xl text-muted-foreground">
              Tout ce que vous devez savoir sur le suivi de vos colis
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Comment fonctionne le suivi ?",
                answer: "Votre numéro de suivi commence par 'XTI-' suivi de l'année et d'un numéro unique. Il vous est communiqué dès la prise en charge de votre colis."
              },
              {
                question: "À quelle fréquence les informations sont-elles mises à jour ?",
                answer: "Les informations de suivi sont actualisées en temps réel. Chaque étape importante est enregistrée automatiquement."
              },
              {
                question: "Que faire si mon colis semble bloqué ?",
                answer: "Contactez notre service client au +33 1 23 45 67 89. Nous résoudrons rapidement tout problème logistique."
              },
              {
                question: "Puis-je modifier l'adresse de livraison ?",
                answer: "Oui, tant que le colis n'est pas en cours de livraison finale. Contactez-nous pour effectuer la modification."
              }
            ].map((faq, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}