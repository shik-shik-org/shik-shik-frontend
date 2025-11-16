import { Store } from '@/types/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Package, Star, StarHalf } from 'lucide-react';
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
  
  const defaultImages = [
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop',
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
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      
      <CardHeader className="pb-3">
        <div className="space-y-2">
          <CardTitle className="text-lg text-foreground leading-tight">{store.name}</CardTitle>
          {store.average_rating && store.reviews_count && (
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => {
                  const rating = store.average_rating || 0;
                  if (i < Math.floor(rating)) {
                    return <Star key={i} className="w-4 h-4 text-primary fill-primary" />;
                  } else if (i < rating) {
                    return <StarHalf key={i} className="w-4 h-4 text-primary fill-primary" />;
                  }
                  return <Star key={i} className="w-4 h-4 text-muted-foreground" />;
                })}
              </div>
              <span className="text-foreground font-semibold">{store.average_rating.toFixed(1)}</span>
              <span className="text-muted-foreground">({store.reviews_count} отзива)</span>
            </div>
          )}
        </div>
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

          {store.reviews && store.reviews.length > 0 && (
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground border-b border-border pb-2">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span>Отзиви</span>
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {store.reviews.slice(0, 3).map((review, idx) => (
                  <div key={idx} className="bg-muted/50 p-3 rounded-lg space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm text-foreground">{review.author}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${i < review.rating ? 'text-primary fill-primary' : 'text-muted-foreground'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">{review.comment}</p>
                  </div>
                ))}
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
