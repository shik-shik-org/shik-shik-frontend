import { Button } from '@/components/ui/button';

interface CityFilterProps {
  cities: string[];
  selectedCity: string;
  onCityChange: (city: string) => void;
}

export const CityFilter = ({ cities, selectedCity, onCityChange }: CityFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCity === 'all' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onCityChange('all')}
      >
        Всички градове
      </Button>
      {cities.map((city) => (
        <Button
          key={city}
          variant={selectedCity === city ? 'default' : 'outline'}
          size="sm"
          onClick={() => onCityChange(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};
