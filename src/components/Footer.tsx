import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Transport Routier', href: '/services/road-transport' },
    { name: 'Transport Aérien', href: '/services/air-transport' },
    { name: 'Transport Maritime', href: '/services/sea-transport' },
    { name: 'Logistique Express', href: '/services/express' },
    { name: 'Solutions Sur Mesure', href: '/services/custom' },
  ],
  company: [
    { name: 'À propos', href: '/about' },
    { name: 'Nos équipes', href: '/team' },
    { name: 'Carrières', href: '/careers' },
    { name: 'Actualités', href: '/news' },
  ],
  support: [
    { name: 'Suivi de Colis', href: '/tracking' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support Client', href: '/support' },
  ],
  legal: [
    { name: 'Mentions Légales', href: '/legal' },
    { name: 'Conditions Générales', href: '/terms' },
    { name: 'Politique de Confidentialité', href: '/privacy' },
    { name: 'Cookies', href: '/cookies' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-brand-dark-navy text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/cfc1e6df-6d75-45ac-b706-bf4f21f6a4b2.png" 
              alt="XOTI" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 mb-6 max-w-md">
              Leader européen du transport international, XOTI vous accompagne 
              dans toutes vos expéditions avec expertise et fiabilité.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-teal" />
                <span className="text-sm">123 Avenue de l'Europe, 75001 Paris</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-teal" />
                <span className="text-sm">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-teal" />
                <span className="text-sm">contact@xoti-transport.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-brand-teal" />
                <span className="text-sm">Lun-Ven: 8h-18h, Sam: 9h-12h</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-white/70 hover:text-brand-teal transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-white/70 hover:text-brand-teal transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-white/70 hover:text-brand-teal transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 XOTI - eXport Overseas Transport International. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className="text-white/60 hover:text-brand-teal transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};