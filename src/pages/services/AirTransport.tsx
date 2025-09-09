import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Plane, Globe, Clock, Shield, CheckCircle, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export default function AirTransport() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const services = [
    {
      title: t.airTransport.services.express.title,
      description: t.airTransport.services.express.description,
      features: t.airTransport.services.express.features
    },
    {
      title: t.airTransport.services.standard.title,
      description: t.airTransport.services.standard.description,
      features: t.airTransport.services.standard.features
    },
    {
      title: t.airTransport.services.economy.title,
      description: t.airTransport.services.economy.description,
      features: t.airTransport.services.economy.features
    }
  ];

  const destinations = [
    { region: t.airTransport.destinations.regions.europe.name, time: t.airTransport.destinations.regions.europe.time, description: t.airTransport.destinations.regions.europe.description },
    { region: t.airTransport.destinations.regions.northAmerica.name, time: t.airTransport.destinations.regions.northAmerica.time, description: t.airTransport.destinations.regions.northAmerica.description },
    { region: t.airTransport.destinations.regions.asia.name, time: t.airTransport.destinations.regions.asia.time, description: t.airTransport.destinations.regions.asia.description },
    { region: t.airTransport.destinations.regions.middleEast.name, time: t.airTransport.destinations.regions.middleEast.time, description: t.airTransport.destinations.regions.middleEast.description },
    { region: t.airTransport.destinations.regions.africa.name, time: t.airTransport.destinations.regions.africa.time, description: t.airTransport.destinations.regions.africa.description },
    { region: t.airTransport.destinations.regions.oceania.name, time: t.airTransport.destinations.regions.oceania.time, description: t.airTransport.destinations.regions.oceania.description }
  ];
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/services">
                  {t.airTransport.hero.backButton}
                </Link>
              </Button>
              <Badge variant="secondary">
                <Plane className="w-4 h-4 mr-2" />
                {t.airTransport.hero.badge}
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {t.airTransport.hero.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {t.airTransport.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  {t.airTransport.hero.quoteButton}
                  <Zap className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/tracking">
                  {t.airTransport.hero.trackButton}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.airTransport.services.title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.airTransport.services.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                {index === 0 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-500">
                      <Zap className="w-3 h-3 mr-1" />
                      {t.airTransport.services.express.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6" variant={index === 0 ? "default" : "outline"} asChild>
                    <Link to="/contact">
                      {index === 0 ? t.airTransport.services.express.button : 
                       index === 1 ? t.airTransport.services.standard.button : 
                       t.airTransport.services.economy.button}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-gradient-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.airTransport.destinations.title}</h2>
            <p className="text-xl text-muted-foreground">
              {t.airTransport.destinations.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <Card key={dest.region} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">{dest.region}</h3>
                    <Badge variant="outline">
                      <Clock className="w-3 h-3 mr-1" />
                      {dest.time}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{dest.description}</p>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{t.airTransport.destinations.connections}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t.airTransport.advantages.title}</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: t.airTransport.advantages.items.speed.title,
                    description: t.airTransport.advantages.items.speed.description
                  },
                  {
                    icon: Shield,
                    title: t.airTransport.advantages.items.security.title,
                    description: t.airTransport.advantages.items.security.description
                  },
                  {
                    icon: Globe,
                    title: t.airTransport.advantages.items.coverage.title,
                    description: t.airTransport.advantages.items.coverage.description
                  },
                  {
                    icon: CheckCircle,
                    title: t.airTransport.advantages.items.tracking.title,
                    description: t.airTransport.advantages.items.tracking.description
                  }
                ].map((advantage, index) => {
                  const Icon = advantage.icon;
                  return (
                    <div key={advantage.title} className="flex gap-4 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{advantage.title}</h3>
                        <p className="text-muted-foreground text-sm">{advantage.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-hero p-8 text-white">
                <Plane className="h-16 w-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{t.airTransport.advantages.premium.title}</h3>
                <ul className="space-y-3 text-sm">
                  {t.airTransport.advantages.premium.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t.airTransport.cta.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t.airTransport.cta.subtitle}
          </p>
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold">{t.airTransport.cta.stats.express.value}</div>
              <div className="text-white/70 text-sm">{t.airTransport.cta.stats.express.label}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{t.airTransport.cta.stats.destinations.value}</div>
              <div className="text-white/70 text-sm">{t.airTransport.cta.stats.destinations.label}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold flex items-center justify-center gap-1">
                <Star className="h-5 w-5 fill-current" />
                4.9/5
              </div>
              <div className="text-white/70 text-sm">{t.airTransport.cta.stats.satisfaction.label}</div>
            </div>
          </div>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              {t.airTransport.cta.button}
              <Plane className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}