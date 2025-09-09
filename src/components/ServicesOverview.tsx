import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Plane, Ship, Zap, Settings, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Truck,
    title: 'Transport Routier',
    description: 'Solutions de transport terrestre pour l\'Europe avec des délais optimisés et une traçabilité totale.',
    features: ['Livraison 24-48h', 'Suivi GPS', 'Véhicules adaptés'],
    href: '/services/road-transport'
  },
  {
    icon: Plane,
    title: 'Transport Aérien',
    description: 'Fret aérien rapide et sécurisé vers toutes les destinations mondiales.',
    features: ['Express 24h', 'Mondial', 'Produits sensibles'],
    href: '/services/air-transport'
  },
  {
    icon: Ship,
    title: 'Transport Maritime',
    description: 'Solutions économiques pour vos expéditions en conteneurs complets ou groupage.',
    features: ['FCL & LCL', 'Économique', 'Écologique'],
    href: '/services/sea-transport'
  },
  {
    icon: Zap,
    title: 'Logistique Express',
    description: 'Service premium pour vos expéditions urgentes avec engagement de délais.',
    features: ['Same day', 'Urgences', 'Premium'],
    href: '/services/express'
  },
  {
    icon: Settings,
    title: 'Solutions Sur Mesure',
    description: 'Solutions personnalisées adaptées à vos besoins spécifiques.',
    features: ['Personnalisé', 'Industries', 'Consulting'],
    href: '/services/custom'
  },
  {
    icon: Clock,
    title: 'Suivi & Support',
    description: 'Plateforme de suivi avancée et support client disponible 24/7.',
    features: ['Temps réel', 'Support 24/7', 'Alertes'],
    href: '/tracking'
  }
];

export const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Nos Services de Transport
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions complètes pour tous vos besoins de transport international, 
            de l'express au maritime, avec un suivi personnalisé.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="group hover:shadow-elegant transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span key={feature} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
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
  );
};