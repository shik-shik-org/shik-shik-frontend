import logo from '@/assets/logo.png';
import { Link } from 'react-router-dom';
import { NavLink } from './NavLink';
import { Mail, MapPin, Briefcase } from 'lucide-react';

export const Header = () => {
  const scrollToStores = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      document.getElementById('stores')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="transition-transform hover:scale-105 flex-shrink-0">
            <img 
              src={logo} 
              alt="Шик Шик" 
              className="h-12 md:h-20 w-auto"
            />
          </Link>
          
          <nav className="flex items-center gap-4 md:gap-8">
            <Link 
              to="/#stores"
              onClick={scrollToStores}
              className="text-foreground/80 hover:text-primary font-medium transition-colors flex items-center gap-1 md:gap-2 text-sm md:text-base"
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Магазини</span>
            </Link>
            <NavLink 
              to="/careers" 
              className="text-foreground/80 hover:text-primary font-medium transition-colors flex items-center gap-1 md:gap-2 text-sm md:text-base"
              activeClassName="text-primary"
            >
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Кариери</span>
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-foreground/80 hover:text-primary font-medium transition-colors flex items-center gap-1 md:gap-2 text-sm md:text-base"
              activeClassName="text-primary"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Контакти</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
