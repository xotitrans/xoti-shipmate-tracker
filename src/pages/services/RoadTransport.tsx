import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Truck, MapPin, Clock, Shield, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';

export default function RoadTransport() {
  const { currentLanguage } = useLanguage();
  const { getLinkWithLanguage } = useLanguageNavigation();
  const t = translations[currentLanguage];

  const features = [
    { icon: Clock, title: t.roadTransport.features.items.delivery.title, description: t.roadTransport.features.items.delivery.description },
    { icon: MapPin, title: t.roadTransport.features.items.tracking.title, description: t.roadTransport.features.items.tracking.description },
    { icon: Shield, title: t.roadTransport.features.items.insurance.title, description: t.roadTransport.features.items.insurance.description },
    { icon: Truck, title: t.roadTransport.features.items.vehicles.title, description: t.roadTransport.features.items.vehicles.description }
  ];

  const zones = [
    { country: t.roadTransport.zones.countries.france, time: '6-12h' },
    { country: t.roadTransport.zones.countries.germany, time: '24-36h' },
    { country: t.roadTransport.zones.countries.italy, time: '24-48h' },
    { country: t.roadTransport.zones.countries.spain, time: '36-48h' },
    { country: t.roadTransport.zones.countries.netherlands, time: '18-24h' },
    { country: t.roadTransport.zones.countries.belgium, time: '12-18h' }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to={getLinkWithLanguage('services')}>
                  {t.roadTransport.hero.backButton}
                </Link>
              </Button>
              <Badge variant="secondary">{t.roadTransport.hero.badge}</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {t.roadTransport.hero.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {t.roadTransport.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to={getLinkWithLanguage('contact')}>
                  {t.roadTransport.hero.quoteButton}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to={getLinkWithLanguage('tracking')}>
                  {t.roadTransport.hero.trackButton}
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
            <h2 className="text-3xl font-bold mb-4">{t.roadTransport.features.title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.roadTransport.features.subtitle}
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
            <h2 className="text-3xl font-bold mb-4">{t.roadTransport.zones.title}</h2>
            <p className="text-xl text-muted-foreground">
              {t.roadTransport.zones.subtitle}
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
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{t.roadTransport.zones.included.insurance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{t.roadTransport.zones.included.tracking}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{t.roadTransport.zones.included.delivery}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to={getLinkWithLanguage('contact')}>
                {t.roadTransport.zones.quoteButton}
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
            <h2 className="text-3xl font-bold mb-4">{t.roadTransport.process.title}</h2>
            <p className="text-xl text-muted-foreground">
              {t.roadTransport.process.subtitle}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
              
              {[
                { step: '1', title: t.roadTransport.process.steps.quote.title, description: t.roadTransport.process.steps.quote.description, time: t.roadTransport.process.steps.quote.time },
                { step: '2', title: t.roadTransport.process.steps.pickup.title, description: t.roadTransport.process.steps.pickup.description, time: t.roadTransport.process.steps.pickup.time },
                { step: '3', title: t.roadTransport.process.steps.transport.title, description: t.roadTransport.process.steps.transport.description, time: t.roadTransport.process.steps.transport.time },
                { step: '4', title: t.roadTransport.process.steps.delivery.title, description: t.roadTransport.process.steps.delivery.description, time: t.roadTransport.process.steps.delivery.time }
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
            {t.roadTransport.cta.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t.roadTransport.cta.subtitle}
          </p>
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold">{t.roadTransport.cta.stats.delivery.value}</div>
              <div className="text-white/70 text-sm">{t.roadTransport.cta.stats.delivery.label}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{t.roadTransport.cta.stats.time.value}</div>
              <div className="text-white/70 text-sm">{t.roadTransport.cta.stats.time.label}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-white/70 text-sm flex items-center justify-center gap-1">
                <Star className="h-4 w-4 fill-current" />
                {t.roadTransport.cta.stats.rating.label}
              </div>
            </div>
          </div>
          <Button size="lg" variant="secondary" asChild>
            <Link to={getLinkWithLanguage('contact')}>
              {t.roadTransport.cta.button}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}