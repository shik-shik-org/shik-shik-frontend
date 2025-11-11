import { Store } from '@/types/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatHours } from '@/utils/formatHours';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface StoreCardProps {
  store: Store;
}

export const StoreCard = ({ store }: StoreCardProps) => {
  const hours = formatHours(store.hours);
  
  // Default images for stores without photos
  const defaultImages = [
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=600&fit=crop'
  ];
  
  const images = store.photos && store.photos.length > 0 ? store.photos : defaultImages;

  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:shadow-primary/20 h-full flex flex-col overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((photo, idx) => (
            <CarouselItem key={idx}>
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src={photo} 
                  alt={`${store.name} - снимка ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-foreground leading-tight">{store.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 flex-1 flex flex-col">
        <div className="space-y-3 flex-1">
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-foreground leading-relaxed">{store.address}</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-4 h-4 text-primary flex-shrink-0" />
            <a href={`tel:${store.phone}`} className="text-foreground hover:text-primary transition-colors font-medium">
              {store.phone}
            </a>
          </div>

          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground border-b border-border pb-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Работно време</span>
            </div>
            <div className="space-y-1.5">
              {hours.map((h, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm px-2 py-1 rounded hover:bg-muted/50 transition-colors">
                  <span className="text-muted-foreground font-medium">{h.day}</span>
                  <span className={`font-semibold ${h.time === 'Затворено' ? 'text-destructive' : 'text-foreground'}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {store.new_stock && (
            <div className="flex items-start gap-3 text-sm bg-primary/5 border border-primary/10 p-3 rounded-lg">
              <Package className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-primary mb-0.5">Нова стока</div>
                <div className="text-foreground">{store.new_stock}</div>
              </div>
            </div>
          )}
        </div>

        {store.gmaps_url && (
          <Button
            variant="default"
            size="default"
            className="w-full mt-4"
            asChild
          >
            <a href={store.gmaps_url} target="_blank" rel="noopener noreferrer">
              <MapPin className="w-4 h-4 mr-2" />
              Виж на картата
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
