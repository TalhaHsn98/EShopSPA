export interface ProductModel {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
  rating?: number;
  description?: string;
  details?: string;
  reviews?: string[];
  videoUrl?: string;
}
