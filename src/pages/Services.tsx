import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Truck, Plane, Ship, Zap, Settings, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const mainServices = [
  {
    icon: Truck,
    title: 'Transport Routier',
    description: 'Solutions complètes de transport terrestre pour l\'Europe avec suivi GPS en temps réel.',
    price: 'À partir de 150€',
    features: ['Livraison 24-48h', 'Suivi GPS temps réel', 'Assurance incluse', 'Véhicules adaptés'],
    destinations: 'Europe',
    href: '/services/road-transport'
  },
  {
    icon: Plane,
    title: 'Transport Aérien',
    description: 'Fret aérien express pour vos expéditions urgentes vers toutes destinations mondiales.',
    price: 'À partir de 89€',
    features: ['Express 6-24h', 'Mondial', 'Produits sensibles', 'Dédouanement'],
    destinations: 'Mondial',
    href: '/services/air-transport'
  },
  {
    icon: Ship,
    title: 'Transport Maritime',
    description: 'Solutions économiques FCL et LCL pour vos expéditions en conteneurs.',
    price: 'À partir de 890€',
    features: ['FCL & LCL', 'Économique', 'Écologique', 'Port à port'],
    destinations: 'International',
    href: '/services/sea-transport'
  }
];

const specialServices = [
  {
    icon: Zap,
    title: 'Logistique Express',
    description: 'Service premium avec engagement de délais pour vos expéditions critiques.',
    href: '/services/express'
  },
  {
    icon: Settings,
    title: 'Solutions Sur Mesure',
    description: 'Solutions personnalisées pour les industries spécialisées.',
    href: '/services/custom'
  },
  {
    icon: Clock,
    title: 'Suivi Avancé',
    description: 'Plateforme de tracking avec alertes et notifications personnalisées.',
    href: '/tracking'
  }
];

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Nos Services de Transport
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Des solutions complètes et personnalisées pour tous vos besoins 
              de transport international. Expertise, fiabilité et innovation.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="secondary" className="text-base px-4 py-2">Transport Routier</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">Transport Aérien</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">Transport Maritime</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">Solutions Express</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Services Principaux</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trois modes de transport complémentaires pour répondre à tous vos besoins logistiques
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="group hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <Badge variant="outline">{service.destinations}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                      <Link to={service.href}>
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-gradient-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Services Spécialisés</h2>
            <p className="text-xl text-muted-foreground">
              Solutions avancées pour des besoins spécifiques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="group hover:shadow-elegant transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <Button variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors" asChild>
                      <Link to={service.href}>
                        Découvrir
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comment ça marche ?</h2>
            <p className="text-xl text-muted-foreground">
              Un processus simple et transparent en 4 étapes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Devis', description: 'Recevez un devis personnalisé en moins de 2 heures' },
              { step: '02', title: 'Enlèvement', description: 'Collecte à votre adresse aux horaires convenus' },
              { step: '03', title: 'Transport', description: 'Suivi en temps réel de votre expédition' },
              { step: '04', title: 'Livraison', description: 'Réception confirmée avec preuve de livraison' }
            ].map((item, index) => (
              <div key={item.step} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Obtenez un devis gratuit et personnalisé pour votre prochaine expédition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Demander un Devis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/tracking">
                Suivre un Colis
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}