import { useState, useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { storeService } from '@/services/storeService';
import { Header } from '@/components/Header';
import { StoreCard } from '@/components/StoreCard';
import { CityFilter } from '@/components/CityFilter';
import { SearchBar } from '@/components/SearchBar';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.address.toLowerCase().includes(query) ||
          s.city.toLowerCase().includes(query) ||
          s.new_stock?.toLowerCase().includes(query)
      );
    }

    return filtered;
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
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">Нашите магазини</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Открийте стилни и качествени дрехи втора употреба на достъпни цени
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
    </div>
  );
};

export default Index;
