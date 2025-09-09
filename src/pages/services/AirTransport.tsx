import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Plane, Globe, Clock, Shield, CheckCircle, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Express 6h',
    description: 'Livraison ultra-rapide pour vos urgences',
    price: 'À partir de 89€',
    features: ['6h chrono', 'Mondial', 'Priorité absolue', 'Suivi premium']
  },
  {
    title: 'Standard 24h',
    description: 'Solution équilibrée rapidité/prix',
    price: 'À partir de 45€',
    features: ['24h garanti', 'International', 'Assurance incluse', 'Suivi temps réel']
  },
  {
    title: 'Économique 48h',
    description: 'Option économique pour délais flexibles',
    price: 'À partir de 29€',
    features: ['48-72h', 'Groupage', 'Prix avantageux', 'Suivi standard']
  }
];

const destinations = [
  { region: 'Europe', time: '6-24h', description: 'Capitales européennes' },
  { region: 'Amérique du Nord', time: '12-48h', description: 'USA, Canada, Mexique' },
  { region: 'Asie', time: '24-72h', description: 'Chine, Japon, Singapour' },
  { region: 'Moyen-Orient', time: '18-48h', description: 'EAU, Arabie Saoudite' },
  { region: 'Afrique', time: '24-72h', description: 'Afrique du Nord et Ouest' },
  { region: 'Océanie', time: '48-96h', description: 'Australie, Nouvelle-Zélande' }
];

export default function AirTransport() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/services">
                  ← Services
                </Link>
              </Button>
              <Badge variant="secondary">
                <Plane className="w-4 h-4 mr-2" />
                Transport Aérien
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Fret Aérien International
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Solutions express pour vos expéditions urgentes vers toutes les destinations mondiales. 
              Rapidité, sécurité et fiabilité garanties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Devis Express
                  <Zap className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/tracking">
                  Suivre un Vol
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
            <h2 className="text-3xl font-bold mb-4">Nos Solutions Aériennes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trois niveaux de service pour répondre à tous vos besoins de rapidité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                {index === 0 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-500">
                      <Zap className="w-3 h-3 mr-1" />
                      Le plus rapide
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
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
                      Choisir ce service
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
            <h2 className="text-3xl font-bold mb-4">Destinations Mondiales</h2>
            <p className="text-xl text-muted-foreground">
              Plus de 200 destinations dans le monde entier
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
                    <span className="text-sm font-medium">Connexions quotidiennes</span>
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
              <h2 className="text-3xl font-bold mb-6">Pourquoi choisir le fret aérien ?</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: 'Rapidité inégalée',
                    description: 'Livraison en 6h à 72h selon la destination'
                  },
                  {
                    icon: Shield,
                    title: 'Sécurité maximale',
                    description: 'Standards aéroportuaires et assurance tous risques'
                  },
                  {
                    icon: Globe,
                    title: 'Couverture mondiale',
                    description: 'Plus de 200 destinations via notre réseau de partenaires'
                  },
                  {
                    icon: CheckCircle,
                    title: 'Suivi précis',
                    description: 'Tracking vol par vol avec notifications temps réel'
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
                <h3 className="text-2xl font-bold mb-4">Service Premium</h3>
                <ul className="space-y-3 text-sm">
                  <li>• Collecte et livraison J+1</li>
                  <li>• Dédouanement express</li>
                  <li>• Emballage spécialisé</li>
                  <li>• Produits dangereux acceptés</li>
                  <li>• Température contrôlée</li>
                  <li>• Service porte-à-porte</li>
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
            Votre expédition ne peut pas attendre ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Plus de 5 000 expéditions aériennes par mois. Délais respectés à 99.8%.
          </p>
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold">6h</div>
              <div className="text-white/70 text-sm">Express minimum</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">200+</div>
              <div className="text-white/70 text-sm">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold flex items-center justify-center gap-1">
                <Star className="h-5 w-5 fill-current" />
                4.9/5
              </div>
              <div className="text-white/70 text-sm">Satisfaction</div>
            </div>
          </div>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Expédier maintenant
              <Plane className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}