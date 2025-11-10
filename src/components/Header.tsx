import logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-primary/5 to-background border-b border-primary/10 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Шик Шик" 
              className="h-28 md:h-36 lg:h-40 w-auto hover:opacity-90 transition-opacity"
            />
          </Link>
          <Button asChild variant="default" size="lg" className="shadow-lg">
            <Link to="/contact">
              <Mail className="w-5 h-5 mr-2" />
              Свържете се с нас
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
