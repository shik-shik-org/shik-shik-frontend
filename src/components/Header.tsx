import logo from '@/assets/logo.png';
import { Link } from 'react-router-dom';
import { NavLink } from './NavLink';
import { Mail, MapPin } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="transition-transform hover:scale-105 flex-shrink-0">
            <img 
              src={logo} 
              alt="Шик Шик" 
              className="h-16 md:h-20 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/#stores"
              className="text-foreground/80 hover:text-primary font-medium transition-colors flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Магазини
            </Link>
            <NavLink 
              to="/contact" 
              className="text-foreground/80 hover:text-primary font-medium transition-colors flex items-center gap-2"
              activeClassName="text-primary"
            >
              <Mail className="w-4 h-4" />
              Контакти
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
