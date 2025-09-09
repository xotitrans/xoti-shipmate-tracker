import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Globe, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export default function About() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {t.about.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t.about.heroDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-muted-foreground">{t.about.stats.experience}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">{t.about.stats.countries}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2000+</div>
                <div className="text-muted-foreground">{t.about.stats.clients}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t.about.missionTitle}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t.about.missionDescription1}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {t.about.missionDescription2}
              </p>
              <Button asChild>
                <Link to="/services">
                  {t.about.servicesButton}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-hero p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">{t.about.commitmentTitle}</h3>
                <ul className="space-y-3">
                  {t.about.commitmentItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-secondary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.about.valuesTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.about.valuesDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(t.about.values).map(([key, value], index) => {
              const icons = {
                excellence: Award,
                punctuality: Clock,
                international: Globe,
                service: Users
              };
              const Icon = icons[key as keyof typeof icons];
              
              return (
                <Card key={key} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.about.historyTitle}</h2>
            <p className="text-xl text-muted-foreground">
              {t.about.historyDescription}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>
              
              {t.about.timeline.map((item, index) => (
                <div key={item.year} className="relative flex items-center gap-8 pb-8 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg z-10">
                    {item.year.slice(-2)}
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-semibold text-primary mb-1">{item.year}</div>
                    <p className="text-muted-foreground">{item.event}</p>
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
            {t.about.ctaTitle}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t.about.ctaDescription}
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              {t.about.contactButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}