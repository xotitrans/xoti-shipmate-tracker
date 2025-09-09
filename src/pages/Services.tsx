import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Truck, Plane, Ship, Zap, Settings, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const getMainServices = (t: any) => [
  {
    icon: Truck,
    title: t.services.items.road.title,
    description: t.services.items.road.description,
    features: t.services.items.road.features,
    destinations: t.services.destinations.europe,
    href: '/services/road-transport'
  },
  {
    icon: Plane,
    title: t.services.items.air.title,
    description: t.services.items.air.description,
    features: t.services.items.air.features,
    destinations: t.services.destinations.worldwide,
    href: '/services/air-transport'
  },
  {
    icon: Ship,
    title: t.services.items.sea.title,
    description: t.services.items.sea.description,
    features: t.services.items.sea.features,
    destinations: t.services.destinations.international,
    href: '/services/sea-transport'
  }
];

const getSpecialServices = (t: any) => [
  {
    icon: Zap,
    title: t.services.items.express.title,
    description: t.services.items.express.description,
    href: '/services/express'
  },
  {
    icon: Settings,
    title: t.services.items.custom.title,
    description: t.services.items.custom.description,
    href: '/services/custom'
  },
  {
    icon: Clock,
    title: t.services.items.support.title,
    description: t.services.items.support.description,
    href: '/tracking'
  }
];

export default function Services() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  
  const mainServices = getMainServices(t);
  const specialServices = getSpecialServices(t);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {t.services.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {t.services.subtitle}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="secondary" className="text-base px-4 py-2">{t.services.items.road.title}</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">{t.services.items.air.title}</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">{t.services.items.sea.title}</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">{t.services.items.express.title}</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.services.mainTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.services.mainSubtitle}
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

      {/* Special Services */}
      <section className="py-20 bg-gradient-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.services.specialTitle}</h2>
            <p className="text-xl text-muted-foreground">
              {t.services.specialSubtitle}
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
                        {t.services.discover}
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
            <h2 className="text-3xl font-bold mb-4">{t.services.processTitle}</h2>
            <p className="text-xl text-muted-foreground">
              {t.services.processSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {t.services.process.map((item: any, index: number) => (
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
            {t.services.ctaTitle}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t.services.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                {t.services.quoteButton}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/tracking">
                {t.services.trackButton}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}