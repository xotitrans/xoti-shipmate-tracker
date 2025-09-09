import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Truck, MapPin, Clock, Shield, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const features = [
  { icon: Clock, title: 'Livraison 24-48h', description: 'Délais garantis pour l\'Europe' },
  { icon: MapPin, title: 'Suivi GPS', description: 'Localisation en temps réel' },
  { icon: Shield, title: 'Assurance incluse', description: 'Couverture complète des marchandises' },
  { icon: Truck, title: 'Véhicules adaptés', description: 'Flotte moderne et spécialisée' }
];

const zones = [
  { country: 'France', time: '6-12h', price: '150€' },
  { country: 'Allemagne', time: '24-36h', price: '280€' },
  { country: 'Italie', time: '24-48h', price: '320€' },
  { country: 'Espagne', time: '36-48h', price: '350€' },
  { country: 'Pays-Bas', time: '18-24h', price: '240€' },
  { country: 'Belgique', time: '12-18h', price: '180€' }
];

export default function RoadTransport() {
  const { currentLanguage } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/services">
                  ← Services
                </Link>
              </Button>
              <Badge variant="secondary">Transport Terrestre</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Transport Routier Européen
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Solutions complètes de transport terrestre pour l'Europe avec suivi GPS en temps réel 
              et livraison garantie sous 24-48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Demander un Devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/tracking">
                  Suivre un Transport
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pourquoi choisir notre transport routier ?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une solution fiable et économique pour vos expéditions européennes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Tarifs et Délais</h2>
            <p className="text-xl text-muted-foreground">
              Prix indicatifs pour un colis standard (jusqu'à 30kg)
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {zones.map((zone, index) => (
              <Card key={zone.country} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{zone.country}</CardTitle>
                    <Badge variant="outline">{zone.time}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-4">À partir de {zone.price}</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Assurance incluse</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Suivi GPS temps réel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Livraison avec accusé</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/contact">
                Obtenir un Devis Personnalisé
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Notre Processus</h2>
            <p className="text-xl text-muted-foreground">
              Simple, rapide et transparent
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
              
              {[
                { step: '1', title: 'Demande de devis', description: 'Renseignez vos besoins via notre formulaire ou par téléphone', time: '2h' },
                { step: '2', title: 'Collecte programmée', description: 'Enlèvement à votre adresse aux créneaux convenus', time: '24h' },
                { step: '3', title: 'Transport sécurisé', description: 'Acheminement avec suivi GPS et notifications automatiques', time: '24-48h' },
                { step: '4', title: 'Livraison confirmée', description: 'Réception avec signature et preuve de livraison digitale', time: 'Immédiat' }
              ].map((item, index) => (
                <div key={item.step} className="relative flex items-start gap-6 pb-12 last:pb-0 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl z-10 shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <Badge variant="outline">{item.time}</Badge>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à expédier par la route ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Plus de 10 000 expéditions routières réussies chaque mois. 
            Rejoignez nos clients satisfaits.
          </p>
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold">99.2%</div>
              <div className="text-white/70 text-sm">Livraisons à temps</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24h</div>
              <div className="text-white/70 text-sm">Délai moyen</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-white/70 text-sm flex items-center justify-center gap-1">
                <Star className="h-4 w-4 fill-current" />
                Note client
              </div>
            </div>
          </div>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Commencer maintenant
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}