import { useState, useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { storeService } from '@/services/storeService';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StoreCard } from '@/components/StoreCard';
import { CityFilter } from '@/components/CityFilter';
import { SearchBar } from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { Loader2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getStoreImages } from '@/config/storeImages';
import { matchesBilingual } from '@/utils/transliteration';
import logo from '@/assets/logo.png';

const Index = () => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle scroll to stores section on hash navigation
  useEffect(() => {
    if (window.location.hash === '#stores') {
      setTimeout(() => {
        document.getElementById('stores')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const { data: stores, isLoading, error } = useQuery({
    queryKey: ['stores'],
    queryFn: storeService.getAllStores,
  });

  const cities = useMemo(() => {
    if (!stores) return [];
    return Array.from(new Set(stores.map((s) => s.city))).sort();
  }, [stores]);

  const filteredStores = useMemo(() => {
    if (!stores) return [];

    let filtered = stores;

    if (selectedCity !== 'all') {
      filtered = filtered.filter((s) => s.city === selectedCity);
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (s) =>
          matchesBilingual(s.name, searchQuery) ||
          matchesBilingual(s.address, searchQuery) ||
          matchesBilingual(s.city, searchQuery) ||
          (s.new_stock && matchesBilingual(s.new_stock, searchQuery))
      );
    }

    // Merge store images from local mapping
    return filtered.map(store => {
      const localImages = getStoreImages(store.city, store.address);
      return {
        ...store,
        photos: localImages.length > 0 ? localImages : store.photos
      };
    });
  }, [stores, selectedCity, searchQuery]);

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center text-destructive">
            Грешка при зареждане на магазините. Моля, опитайте отново.
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* About Us Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-b border-primary/10">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src={logo}
              alt="Шик Шик магазин" 
              className="rounded-3xl w-full max-w-md object-cover aspect-square shadow-xl bg-[#7b1b1b]"
            />
          </div>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">За нас</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Шик Шик е водеща верига магазини за дрехи втора употреба в България. 
                С повече от 17 локации в София, Пазарджик, Монтана, Благоевград и Разлог, 
                ние предлагаме внимателно подбрани, качествени дрехи на достъпни цени.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Нашата мисия е да направим модата по-достъпна и устойчива, като предлагаме 
                стилни облекла, които съчетават качество с екологична отговорност. Всяка седмица 
                обновяваме асортимента си с нова стока във всички магазини.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link to="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Свържете се с нас
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <main id="stores" className="container mx-auto px-4 py-12 max-w-7xl scroll-mt-20">
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Нашите магазини</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Открийте най-близкия до вас магазин и разгледайте нашата колекция
            </p>
          </div>

          <SearchBar value={searchQuery} onChange={setSearchQuery} />

          <CityFilter
            cities={cities}
            selectedCity={selectedCity}
            onCityChange={setSelectedCity}
          />

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStores.map((store) => (
                <StoreCard key={store.id} store={store} />
              ))}
            </div>
          )}

          {!isLoading && filteredStores.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              Няма намерени магазини по зададените критерии.
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
