import { Link } from 'react-router-dom';
import { MapPin, Mail, Clock } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-3">
            <div className="flex items-center h-12">
              <img 
                src={logo} 
                alt="Шик Шик" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Водеща верига магазини за дрехи втора употреба в България. 
              Качествени облекла на достъпни цени с фокус върху устойчивостта.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="h-12 flex items-center">
              <h3 className="text-lg font-semibold text-foreground">Бързи връзки</h3>
            </div>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/#stores';
                }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Нашите магазини
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Свържете се с нас
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="h-12 flex items-center">
              <h3 className="text-lg font-semibold text-foreground">Информация</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Работно време</p>
                  <p>Различно за всеки магазин</p>
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex justify-center items-center">
            <p className="text-sm text-muted-foreground text-center">
              © {currentYear} Шик Шик. Всички права запазени.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
