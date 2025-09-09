import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresse',
    content: '123 Avenue de l\'Europe\n75001 Paris, France'
  },
  {
    icon: Phone,
    title: 'Téléphone',
    content: '+33 1 23 45 67 89\n+33 1 23 45 67 90'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@xoti-transport.com\ndevis@xoti-transport.com'
  },
  {
    icon: Clock,
    title: 'Horaires',
    content: 'Lun-Ven: 8h-18h\nSam: 9h-12h\nDim: Fermé'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Notre équipe d'experts est à votre disposition pour vous accompagner 
              dans tous vos projets de transport international.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={info.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <p className="text-muted-foreground whitespace-pre-line text-sm">{info.content}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle className="text-2xl">Demande de devis</CardTitle>
                  <p className="text-muted-foreground">
                    Remplissez ce formulaire pour recevoir un devis personnalisé
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Entreprise</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Service souhaité</Label>
                      <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="road">Transport Routier</SelectItem>
                          <SelectItem value="air">Transport Aérien</SelectItem>
                          <SelectItem value="sea">Transport Maritime</SelectItem>
                          <SelectItem value="express">Logistique Express</SelectItem>
                          <SelectItem value="custom">Solution Sur Mesure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Décrivez votre besoin : origine, destination, type de marchandise, délais souhaités..."
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        'Envoi en cours...'
                      ) : (
                        <>
                          Envoyer la demande
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Nous trouver</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square bg-gradient-hero rounded-lg flex items-center justify-center text-white mb-6">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 mx-auto mb-4" />
                        <p className="text-lg font-semibold">Carte interactive</p>
                        <p className="text-white/80">Disponible prochainement</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Siège social</h4>
                        <p className="text-muted-foreground">
                          123 Avenue de l'Europe<br />
                          75001 Paris, France
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Accès</h4>
                        <p className="text-muted-foreground text-sm">
                          • Métro : Ligne 1, Station Louvre-Rivoli<br />
                          • RER : RER A, Station Châtelet<br />
                          • Parking : Disponible sur site
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">
            Urgence ou support 24/7 ?
          </h2>
          <p className="text-white/90 mb-6">
            Notre service client est disponible 24h/24 et 7j/7 pour toute urgence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-4 w-4" />
              Urgence : +33 6 12 34 56 78
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Mail className="mr-2 h-4 w-4" />
              urgence@xoti-transport.com
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}