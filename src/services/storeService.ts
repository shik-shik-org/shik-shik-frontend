import { API_BASE_URL } from '@/config/api';
import { Store } from '@/types/store';

export const storeService = {
  async getAllStores(): Promise<Store[]> {
    const response = await fetch(`${API_BASE_URL}/api/stores`);
    if (!response.ok) throw new Error('Failed to fetch stores');
    return response.json();
  },

  async getStoresByCity(city: string): Promise<Store[]> {
    const response = await fetch(`${API_BASE_URL}/api/stores/${city}`);
    if (!response.ok) throw new Error('Failed to fetch stores');
    return response.json();
  },

  async searchStores(query: string): Promise<Store[]> {
    const response = await fetch(`${API_BASE_URL}/api/stores/search/${query}`);
    if (!response.ok) throw new Error('Failed to search stores');
    return response.json();
  },
};
