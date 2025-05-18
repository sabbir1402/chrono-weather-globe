
export interface FoodItem {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
}
