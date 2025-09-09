import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Package, Truck, Globe, Shield, Clock, Users } from 'lucide-react';

const Index = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: Package,
      title: "Suivi en temps réel",
      description: "Suivez vos colis en temps réel avec notre système de tracking avancé"
    },
    {
      icon: Truck,
      title: "Transport multimodal",
      description: "Route, aérien, maritime - nous gérons tous types de transport"
    },
    {
      icon: Globe,
      title: "International",
      description: "Livraisons dans le monde entier avec nos partenaires locaux"
    },
    {
      icon: Shield,
      title: "Sécurisé",
      description: "Vos expéditions sont assurées et sécurisées à chaque étape"
    },
    {
      icon: Clock,
      title: "Rapide",
      description: "Services express disponibles pour vos livraisons urgentes"
    },
    {
      icon: Users,
      title: "Support 24/7",
      description: "Notre équipe est disponible pour vous aider à tout moment"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            XOTI Transport
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Votre partenaire de confiance pour le transport international et le suivi de colis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link to="/dashboard">
                <Button size="lg" className="w-full sm:w-auto">
                  Accéder au Dashboard
                </Button>
              </Link>
            ) : (
              <Link to="/auth">
                <Button size="lg" className="w-full sm:w-auto">
                  Commencer maintenant
                </Button>
              </Link>
            )}
            <Link to="/tracking">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Suivre un colis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi choisir XOTI ?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous offrons des solutions complètes de transport et de logistique pour répondre à tous vos besoins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à expédier ?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Créez votre compte et commencez à gérer vos expéditions dès aujourd'hui
          </p>
          {user ? (
            <Link to="/new-shipment">
              <Button size="lg">
                Créer une expédition
              </Button>
            </Link>
          ) : (
            <Link to="/auth">
              <Button size="lg">
                S'inscrire gratuitement
              </Button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
