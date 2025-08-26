export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'whale' | 'dolphin' | 'shark' | 'turtle' | 'accessories';
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}