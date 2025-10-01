export interface ProductModel {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
  subCategory?: string;
  sku?: string;
  status?: 'active' | 'inactive';
  description?: string;
  rating?: number;
  details?: string;
  reviews?: string[];
  videoUrl?: string;
}
