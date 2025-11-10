import { Store } from '@/types/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatHours } from '@/utils/formatHours';

interface StoreCardProps {
  store: Store;
}

export const StoreCard = ({ store }: StoreCardProps) => {
  const hours = formatHours(store.hours);

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg text-foreground">{store.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-2 text-sm">
          <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-foreground">{store.address}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Phone className="w-4 h-4 text-primary flex-shrink-0" />
          <a href={`tel:${store.phone}`} className="text-foreground hover:text-primary transition-colors">
            {store.phone}
          </a>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>Работно време</span>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs pl-6">
            {hours.map((h, idx) => (
              <div key={idx} className="flex justify-between">
                <span className="text-muted-foreground">{h.day}</span>
                <span className="text-foreground font-medium">{h.time}</span>
              </div>
            ))}
          </div>
        </div>

        {store.new_stock && (
          <div className="flex items-start gap-2 text-sm bg-accent p-3 rounded-md">
            <Package className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-medium text-accent-foreground">Нова стока</div>
              <div className="text-accent-foreground">{store.new_stock}</div>
            </div>
          </div>
        )}

        {store.gmaps_url && (
          <Button
            variant="default"
            size="sm"
            className="w-full"
            asChild
          >
            <a href={store.gmaps_url} target="_blank" rel="noopener noreferrer">
              Виж на картата
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
