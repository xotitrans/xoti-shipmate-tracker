import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Globe, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Nous nous engageons à fournir des services de transport de la plus haute qualité.'
  },
  {
    icon: Clock,
    title: 'Ponctualité',
    description: 'Respect des délais et livraisons dans les temps convenus avec nos clients.'
  },
  {
    icon: Globe,
    title: 'International',
    description: 'Une expertise reconnue dans le transport international depuis plus de 25 ans.'
  },
  {
    icon: Users,
    title: 'Service Client',
    description: 'Une équipe dédiée disponible 24/7 pour répondre à toutes vos questions.'
  }
];

const timeline = [
  { year: '1999', event: 'Création de XOTI avec une vision européenne du transport' },
  { year: '2005', event: 'Expansion vers le transport aérien et maritime' },
  { year: '2012', event: 'Lancement de la plateforme de suivi en temps réel' },
  { year: '2018', event: 'Ouverture de 5 nouveaux hubs européens' },
  { year: '2024', event: 'Plus de 15,000 expéditions mensuelles' }
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              À propos de XOTI
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Depuis 1999, XOTI (eXport Overseas Transport International) accompagne 
              les entreprises dans leurs défis logistiques avec expertise et innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-muted-foreground">Années d'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Pays desservis</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2000+</div>
                <div className="text-muted-foreground">Clients satisfaits</div>
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
              <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Chez XOTI, nous croyons que chaque expédition est unique et mérite une attention particulière. 
                Notre mission est de simplifier la logistique internationale en offrant des solutions 
                personnalisées et innovantes.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Nous combinons l'expertise humaine avec les dernières technologies pour garantir 
                à nos clients une expérience de transport exceptionnelle, du premier contact 
                jusqu'à la livraison finale.
              </p>
              <Button asChild>
                <Link to="/services">
                  Découvrir nos services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-hero p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Notre Engagement</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-secondary rounded-full" />
                    Transparence totale sur nos services
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-secondary rounded-full" />
                    Innovation constante de nos solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-secondary rounded-full" />
                    Respect de l'environnement
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-secondary rounded-full" />
                    Formation continue de nos équipes
                  </li>
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
            <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
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
            <h2 className="text-3xl font-bold mb-4">Notre Histoire</h2>
            <p className="text-xl text-muted-foreground">
              Un quart de siècle d'innovation dans le transport international
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>
              
              {timeline.map((item, index) => (
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
            Rejoignez les 2000+ entreprises qui nous font confiance
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez comment XOTI peut optimiser votre chaîne logistique
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Contactez-nous
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}