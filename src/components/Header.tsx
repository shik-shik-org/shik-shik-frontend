import { MapPin } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                <MapPin className="w-10 h-10 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Шик Шик</h1>
                <p className="text-sm text-muted-foreground">Дрехи втора употреба</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
