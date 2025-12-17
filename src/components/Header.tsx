import logo2 from '@/assets/logo2.png';
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
              src={logo2} 
              alt="Шик Шик" 
              className="h-14 md:h-16 w-auto object-contain max-w-none"
            />
          </Link>

          <nav className="flex items-center gap-6">
            {/* Магазини */}
            <Link 
              to="/#stores"
              onClick={scrollToStores}
              className="text-foreground/80 hover:text-primary font-medium transition-colors
                         flex flex-col md:flex-row items-center gap-1 md:gap-2
                         text-xs md:text-base"
            >
              <MapPin className="w-5 h-5 md:w-4 md:h-4" />
              <span className="md:inline text-[11px] leading-tight">
                Магазини
              </span>
            </Link>

            {/* Кариери */}
            <NavLink 
              to="/careers"
              className="text-foreground/80 hover:text-primary font-medium transition-colors
                         flex flex-col md:flex-row items-center gap-1 md:gap-2
                         text-xs md:text-base"
              activeClassName="text-primary"
            >
              <Briefcase className="w-5 h-5 md:w-4 md:h-4" />
              <span className="md:inline text-[11px] leading-tight">
                Кариери
              </span>
            </NavLink>

            {/* Контакти */}
            <NavLink 
              to="/contact"
              className="text-foreground/80 hover:text-primary font-medium transition-colors
                         flex flex-col md:flex-row items-center gap-1 md:gap-2
                         text-xs md:text-base"
              activeClassName="text-primary"
            >
              <Mail className="w-5 h-5 md:w-4 md:h-4" />
              <span className="md:inline text-[11px] leading-tight">
                Контакти
              </span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
