import logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="mx-auto md:mx-0">
            <img 
              src={logo} 
              alt="Шик Шик" 
              className="h-20 md:h-24 w-auto hover:scale-105 transition-transform"
            />
          </Link>
          <Button asChild variant="default" size="default" className="hidden md:flex shadow-md">
            <Link to="/contact">
              <Mail className="w-4 h-4 mr-2" />
              Контакт
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
