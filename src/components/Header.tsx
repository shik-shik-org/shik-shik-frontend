import logo from '@/assets/logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center">
          <Link to="/" className="transition-transform hover:scale-105">
            <img 
              src={logo} 
              alt="Шик Шик" 
              className="h-24 md:h-28 w-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
