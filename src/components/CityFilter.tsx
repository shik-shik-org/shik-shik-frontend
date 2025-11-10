import { Button } from '@/components/ui/button';

interface CityFilterProps {
  cities: string[];
  selectedCity: string;
  onCityChange: (city: string) => void;
}

export const CityFilter = ({ cities, selectedCity, onCityChange }: CityFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
      <Button
        variant={selectedCity === 'all' ? 'default' : 'outline'}
        size="default"
        onClick={() => onCityChange('all')}
        className="font-medium"
      >
        Всички градове
      </Button>
      {cities.map((city) => (
        <Button
          key={city}
          variant={selectedCity === city ? 'default' : 'outline'}
          size="default"
          onClick={() => onCityChange(city)}
          className="font-medium"
        >
          {city}
        </Button>
      ))}
    </div>
  );
};
