import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Truck, Plane, Ship, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';

export const HeroSection = () => {
  const { currentLanguage } = useLanguage();
  const { getLinkWithLanguage } = useLanguageNavigation();
  const t = translations[currentLanguage];

  const features = [
    {
      icon: Truck,
      title: t.hero.features.road.title,
      description: t.hero.features.road.description
    },
    {
      icon: Plane,
      title: t.hero.features.air.title,
      description: t.hero.features.air.description
    },
    {
      icon: Ship,
      title: t.hero.features.sea.title,
      description: t.hero.features.sea.description
    },
    {
      icon: Clock,
      title: t.hero.features.tracking.title,
      description: t.hero.features.tracking.description
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero compact-hero text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/dcf3fff5-8b38-4b74-bb10-ad9faab69d5c.png" 
          alt="Transport logistique - conteneurs, camions, navire et localisation"
          className="w-full h-full object-cover opacity-80"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-hero/20" />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.3)_1px,_transparent_0)] bg-[length:20px_20px]" />
      </div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight animate-fade-in">
            {t.hero.title1}
            <br />
            <span className="text-secondary">{t.hero.title2}</span>
          </h1>
          
          <p className="mb-6 text-lg md:text-xl text-white/90 animate-slide-up">
            {t.hero.subtitle}
          </p>
          
          <div className="flex justify-center mb-8 animate-scale-in">
            <Button size="default" variant="secondary" asChild className="shadow-navy px-6 py-3 font-bold">
              <Link to={getLinkWithLanguage('tracking')}>
                {t.hero.trackButton}
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="bg-white/10 border-white/20 backdrop-blur-sm animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="compact-card text-center">
                    <div className="mx-auto mb-2 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-secondary">
                      <Icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    </div>
                    <h3 className="mb-1 text-sm md:text-base font-semibold text-white">{feature.title}</h3>
                    <p className="text-xs md:text-sm text-white/80">{feature.description}</p>
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