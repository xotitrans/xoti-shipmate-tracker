import { HeroSection } from '@/components/HeroSection';
import { ServicesOverview } from '@/components/ServicesOverview';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';

export default function Home() {
  const { currentLanguage } = useLanguage();
  const { getLinkWithLanguage } = useLanguageNavigation();
  const t = translations[currentLanguage];

  const stats = [
    { label: t.home.stats.expeditions, value: '15,000+' },
    { label: t.home.stats.countries, value: '50+' },
    { label: t.home.stats.satisfaction, value: '99.5%' },
    { label: t.home.stats.experience, value: '25+' }
  ];

  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesOverview />
      
      {/* Stats Section */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-brand-teal mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t.home.testimonials.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.home.testimonials.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.home.testimonials.reviews.map((testimonial, index) => (
              <Card key={testimonial.name} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="h-6 w-6 text-muted-foreground mb-3" />
                  <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{testimonial.avatar}</span>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t.home.cta.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t.home.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to={getLinkWithLanguage('contact')}>
                {t.home.cta.quoteButton}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to={getLinkWithLanguage('tracking')}>
                {t.home.cta.trackButton}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}