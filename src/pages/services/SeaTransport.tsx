import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Ship, Globe, Clock, Leaf, CheckCircle, Star, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export default function SeaTransport() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const services = [
    {
      title: t.seaTransport.services.fcl.title,
      description: t.seaTransport.services.fcl.description,
      features: t.seaTransport.services.fcl.features,
      button: t.seaTransport.services.fcl.button
    },
    {
      title: t.seaTransport.services.lcl.title,
      description: t.seaTransport.services.lcl.description,
      features: t.seaTransport.services.lcl.features,
      button: t.seaTransport.services.lcl.button
    },
    {
      title: t.seaTransport.services.special.title,
      description: t.seaTransport.services.special.description,
      features: t.seaTransport.services.special.features,
      button: t.seaTransport.services.special.button
    }
  ];

  const routes = [
    { region: t.seaTransport.routes.regions.europe.name, time: t.seaTransport.routes.regions.europe.time, description: t.seaTransport.routes.regions.europe.description },
    { region: t.seaTransport.routes.regions.asia.name, time: t.seaTransport.routes.regions.asia.time, description: t.seaTransport.routes.regions.asia.description },
    { region: t.seaTransport.routes.regions.america.name, time: t.seaTransport.routes.regions.america.time, description: t.seaTransport.routes.regions.america.description },
    { region: t.seaTransport.routes.regions.africa.name, time: t.seaTransport.routes.regions.africa.time, description: t.seaTransport.routes.regions.africa.description },
    { region: t.seaTransport.routes.regions.oceania.name, time: t.seaTransport.routes.regions.oceania.time, description: t.seaTransport.routes.regions.oceania.description },
    { region: t.seaTransport.routes.regions.middleEast.name, time: t.seaTransport.routes.regions.middleEast.time, description: t.seaTransport.routes.regions.middleEast.description }
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
                  {t.seaTransport.hero.backButton}
                </Link>
              </Button>
              <Badge variant="secondary">
                <Ship className="w-4 h-4 mr-2" />
                {t.seaTransport.hero.badge}
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {t.seaTransport.hero.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {t.seaTransport.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  {t.seaTransport.hero.quoteButton}
                  <Anchor className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/tracking">
                  {t.seaTransport.hero.trackButton}
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
            <h2 className="text-3xl font-bold mb-4">{t.seaTransport.services.title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.seaTransport.services.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                {index === 0 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500">
                      <Ship className="w-3 h-3 mr-1" />
                      Populaire
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" variant={index === 0 ? "default" : "outline"} asChild>
                    <Link to="/contact">
                      {service.button}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="py-20 bg-gradient-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.seaTransport.routes.title}</h2>
            <p className="text-xl text-muted-foreground">
              {t.seaTransport.routes.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <Card key={route.region} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">{route.region}</h3>
                    <Badge variant="outline">
                      <Clock className="w-3 h-3 mr-1" />
                      {route.time}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{route.description}</p>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{t.seaTransport.routes.ports}</span>
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
              <h2 className="text-3xl font-bold mb-6">{t.seaTransport.advantages.title}</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: ArrowRight,
                    title: t.seaTransport.advantages.items.economy.title,
                    description: t.seaTransport.advantages.items.economy.description
                  },
                  {
                    icon: Ship,
                    title: t.seaTransport.advantages.items.capacity.title,
                    description: t.seaTransport.advantages.items.capacity.description
                  },
                  {
                    icon: Leaf,
                    title: t.seaTransport.advantages.items.ecology.title,
                    description: t.seaTransport.advantages.items.ecology.description
                  },
                  {
                    icon: CheckCircle,
                    title: t.seaTransport.advantages.items.security.title,
                    description: t.seaTransport.advantages.items.security.description
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
                <Leaf className="h-16 w-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{t.seaTransport.advantages.sustainable.title}</h3>
                <ul className="space-y-3 text-sm">
                  {t.seaTransport.advantages.sustainable.features.map((feature, index) => (
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
            {t.seaTransport.cta.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t.seaTransport.cta.subtitle}
          </p>
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold">{t.seaTransport.cta.stats.containers.value}</div>
              <div className="text-white/70 text-sm">{t.seaTransport.cta.stats.containers.label}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{t.seaTransport.cta.stats.routes.value}</div>
              <div className="text-white/70 text-sm">{t.seaTransport.cta.stats.routes.label}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold flex items-center justify-center gap-1">
                <Leaf className="h-5 w-5 fill-current" />
                {t.seaTransport.cta.stats.co2.value}
              </div>
              <div className="text-white/70 text-sm">{t.seaTransport.cta.stats.co2.label}</div>
            </div>
          </div>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              {t.seaTransport.cta.button}
              <Ship className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}