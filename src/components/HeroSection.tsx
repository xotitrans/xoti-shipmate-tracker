import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Truck, Plane, Ship, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Truck,
    title: 'Transport Routier',
    description: 'Livraisons européennes rapides et sécurisées'
  },
  {
    icon: Plane,
    title: 'Transport Aérien',
    description: 'Solutions express pour le monde entier'
  },
  {
    icon: Ship,
    title: 'Transport Maritime',
    description: 'Fret maritime économique et écologique'
  },
  {
    icon: Clock,
    title: 'Suivi 24/7',
    description: 'Tracking en temps réel de vos expéditions'
  }
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.3)_1px,_transparent_0)] bg-[length:20px_20px]" />
      </div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl animate-fade-in">
            Transport International
            <br />
            <span className="text-secondary">de Confiance</span>
          </h1>
          
          <p className="mb-8 text-xl text-white/90 animate-slide-up">
            XOTI vous accompagne dans vos expéditions internationales avec des solutions 
            sur mesure, un suivi en temps réel et un service client d'exception.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-scale-in">
            <Button size="lg" variant="secondary" asChild className="shadow-navy">
              <Link to="/services">
                Nos Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/tracking">
                Suivre un Colis
              </Link>
            </Button>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="bg-white/10 border-white/20 backdrop-blur-sm animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-white/80">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};