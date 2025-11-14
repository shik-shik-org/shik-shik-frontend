export interface Review {
  author: string;
  rating: number;
  comment: string;
  date?: string;
}

export interface Store {
  id: number;
  city: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  new_stock?: string;
  description?: string;
  gmaps_url?: string;
  photos: string[];
  reviews?: Review[];
}
