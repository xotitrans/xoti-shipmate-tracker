import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Package, Truck, Globe, Users, Search } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { translations } from '@/data/translations';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage } = useLanguage();
  const { user, signOut } = useAuth();
  const { getLinkWithLanguage } = useLanguageNavigation();
  const t = translations[currentLanguage];

  const navigation = [
    { name: t.navigation.home, href: '', icon: Package },
    { name: t.navigation.about, href: 'about', icon: Users },
    { name: t.navigation.services, href: 'services', icon: Truck },
    { name: t.navigation.tracking, href: 'tracking', icon: Search },
    { name: t.navigation.contact, href: 'contact', icon: Globe },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link to={getLinkWithLanguage('')} className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/cfc1e6df-6d75-45ac-b706-bf4f21f6a4b2.png" 
            alt="XOTI - eXport Overseas Transport International" 
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6 md:text-sm md:font-medium ml-8">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={getLinkWithLanguage(item.href)}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <LanguageSelector />
          
          {/* User Authentication Buttons */}
          {user ? (
            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link to={getLinkWithLanguage('dashboard')}>
                  Dashboard
                </Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={signOut}>
                Déconnexion
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to={getLinkWithLanguage('auth')}>
                  Connexion
                </Link>
              </Button>
            </div>
          )}
          
          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={getLinkWithLanguage(item.href)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-secondary"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  );
                })}
                
                {/* Mobile User Authentication */}
                <div className="border-t pt-4 mt-4">
                  {user ? (
                    <>
                      <Link
                        to={getLinkWithLanguage('dashboard')}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-secondary"
                        onClick={() => setIsOpen(false)}
                      >
                        <Package className="h-4 w-4" />
                        Dashboard
                      </Link>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start gap-3 px-3"
                        onClick={() => {
                          signOut();
                          setIsOpen(false);
                        }}
                      >
                        Déconnexion
                      </Button>
                    </>
                  ) : (
                    <Link
                      to={getLinkWithLanguage('auth')}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-secondary"
                      onClick={() => setIsOpen(false)}
                    >
                      <Users className="h-4 w-4" />
                      Connexion
                    </Link>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};