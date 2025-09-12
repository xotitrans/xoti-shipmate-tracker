import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';

export const Footer = () => {
  const { currentLanguage } = useLanguage();
  const { getLinkWithLanguage } = useLanguageNavigation();
  const t = translations[currentLanguage];

  const footerLinks = {
    services: [
      { name: t.footer.links.services.road, href: 'services/road-transport' },
      { name: t.footer.links.services.air, href: 'services/air-transport' },
      { name: t.footer.links.services.sea, href: 'services/sea-transport' },
      { name: t.footer.links.services.express, href: 'services/express' },
      { name: t.footer.links.services.custom, href: 'services/custom' },
    ],
    company: [
      { name: t.footer.links.company.about, href: 'about' },
    ],
    support: [
      { name: t.footer.links.support.tracking, href: 'tracking' },
      { name: t.footer.links.support.contact, href: 'contact' },
    ],
    legal: [
      { name: t.footer.links.legal.legal, href: 'contact' },
      { name: t.footer.links.legal.terms, href: 'contact' },
      { name: t.footer.links.legal.privacy, href: 'contact' },
      { name: t.footer.links.legal.cookies, href: 'contact' },
    ],
  };

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
              {t.footer.description}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-teal" />
                <span className="text-sm">{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-teal" />
                <span className="text-sm">+49 176 93722675</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-brand-teal" />
                <span className="text-sm">{t.footer.schedule}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.sections.services}</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={getLinkWithLanguage(link.href)} 
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
            <h3 className="font-semibold text-lg mb-4">{t.footer.sections.company}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={getLinkWithLanguage(link.href)} 
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
            <h3 className="font-semibold text-lg mb-4">{t.footer.sections.support}</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={getLinkWithLanguage(link.href)} 
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
              {t.footer.copyright}
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name}
                  to={getLinkWithLanguage(link.href)} 
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