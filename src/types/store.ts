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
}
