import logo from '@/assets/logo.png';

export const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center">
          <img 
            src={logo} 
            alt="Шик Шик" 
            className="h-20 md:h-24 w-auto"
          />
        </div>
      </div>
    </header>
  );
};
