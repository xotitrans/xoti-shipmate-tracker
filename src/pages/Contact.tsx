import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { translations } from '@/data/translations';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  
  const contactInfo = [
    {
      icon: MapPin,
      title: t.contactPage.contactInfo.address.title,
      content: t.contactPage.contactInfo.address.content
    },
    {
      icon: Phone,
      title: t.contactPage.contactInfo.phone.title,
      content: t.contactPage.contactInfo.phone.content
    },
    {
      icon: Mail,
      title: t.contactPage.contactInfo.email.title,
      content: t.contactPage.contactInfo.email.content
    },
    {
      icon: Clock,
      title: t.contactPage.contactInfo.hours.title,
      content: t.contactPage.contactInfo.hours.content
    }
  ];
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
        title: t.contactPage.form.successTitle,
        description: t.contactPage.form.successMessage,
      });
      
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
    } catch (error) {
      toast({
        title: t.contactPage.form.errorTitle,
        description: t.contactPage.form.errorMessage,
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
              {t.contactPage.hero.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {t.contactPage.hero.subtitle}
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
                  <CardTitle className="text-2xl">{t.contactPage.form.title}</CardTitle>
                  <p className="text-muted-foreground">
                    {t.contactPage.form.subtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">{t.contactPage.form.fields.name}</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">{t.contactPage.form.fields.email}</Label>
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
                        <Label htmlFor="company">{t.contactPage.form.fields.company}</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">{t.contactPage.form.fields.phone}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">{t.contactPage.form.fields.service}</Label>
                      <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder={t.contactPage.form.serviceOptions.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="road">{t.contactPage.form.serviceOptions.road}</SelectItem>
                          <SelectItem value="air">{t.contactPage.form.serviceOptions.air}</SelectItem>
                          <SelectItem value="sea">{t.contactPage.form.serviceOptions.sea}</SelectItem>
                          <SelectItem value="express">{t.contactPage.form.serviceOptions.express}</SelectItem>
                          <SelectItem value="custom">{t.contactPage.form.serviceOptions.custom}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">{t.contactPage.form.fields.message}</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder={t.contactPage.form.fields.messagePlaceholder}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        t.contactPage.form.submitting
                      ) : (
                        <>
                          {t.contactPage.form.submitButton}
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
                    <CardTitle>{t.contactPage.location.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square bg-gradient-hero rounded-lg flex items-center justify-center text-white mb-6">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 mx-auto mb-4" />
                        <p className="text-lg font-semibold">{t.contactPage.location.mapTitle}</p>
                        <p className="text-white/80">{t.contactPage.location.mapSubtitle}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">{t.contactPage.location.headquarters}</h4>
                        <p className="text-muted-foreground">
                          {t.contactPage.contactInfo.address.content.split('\n').map((line, index) => (
                            <span key={index}>
                              {line}
                              {index < t.contactPage.contactInfo.address.content.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">{t.contactPage.location.access}</h4>
                        <p className="text-muted-foreground text-sm">
                          {t.contactPage.location.accessDetails.split('\n').map((line, index) => (
                            <span key={index}>
                              {line}
                              {index < t.contactPage.location.accessDetails.split('\n').length - 1 && <br />}
                            </span>
                          ))}
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
            {t.contactPage.emergency.title}
          </h2>
          <p className="text-white/90 mb-6">
            {t.contactPage.emergency.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-4 w-4" />
              {t.contactPage.emergency.phoneButton}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Mail className="mr-2 h-4 w-4" />
              {t.contactPage.emergency.emailButton}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}