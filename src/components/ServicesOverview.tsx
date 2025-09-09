import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Plane, Ship, Zap, Settings, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export const ServicesOverview = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const services = [
    {
      icon: Truck,
      title: t.services.items.road.title,
      description: t.services.items.road.description,
      features: t.services.items.road.features,
      href: '/services/road-transport'
    },
    {
      icon: Plane,
      title: t.services.items.air.title,
      description: t.services.items.air.description,
      features: t.services.items.air.features,
      href: '/services/air-transport'
    },
    {
      icon: Ship,
      title: t.services.items.sea.title,
      description: t.services.items.sea.description,
      features: t.services.items.sea.features,
      href: '/services/sea-transport'
    },
    {
      icon: Zap,
      title: t.services.items.express.title,
      description: t.services.items.express.description,
      features: t.services.items.express.features,
      href: '/services/express'
    },
    {
      icon: Settings,
      title: t.services.items.custom.title,
      description: t.services.items.custom.description,
      features: t.services.items.custom.features,
      href: '/services/custom'
    },
    {
      icon: Clock,
      title: t.services.items.support.title,
      description: t.services.items.support.description,
      features: t.services.items.support.features,
      href: '/tracking'
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.services.subtitle}
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
                      {t.services.learnMore}
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