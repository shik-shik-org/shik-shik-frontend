import { Link } from 'react-router-dom';
import { MapPin, Mail, Clock, Briefcase, Facebook } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToStores = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      document.getElementById('stores')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-foreground">Шик Шик</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Водеща верига магазини за дрехи втора употреба в България. 
              Качествени облекла на достъпни цени.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-semibold text-foreground">Бързи връзки</h3>
            <nav className="flex flex-col space-y-1.5">
              <Link 
                to="/#stores"
                onClick={scrollToStores}
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Нашите магазини
              </Link>
              <Link 
                to="/careers" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                Кариери
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Свържете се с нас
              </Link>
              <a 
                href="https://www.facebook.com/magazini.shik.shik" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
            </nav>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-semibold text-foreground">Информация</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Работно време</p>
                  <p>Всеки магазин има собствено работно време</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">17+ локации</p>
                  <p>София, Пазарджик, Монтана, Благоевград, Разлог</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <div className="flex justify-center items-center">
            <p className="text-sm text-muted-foreground text-center">
              © {currentYear} Шик Шик.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
