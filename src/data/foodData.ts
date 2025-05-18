
import { FoodItem, Category } from "../types/foodTypes";

export const categories: Category[] = [
  { id: "meals", name: "Meals" },
  { id: "drinks", name: "Drinks" },
  { id: "desserts", name: "Desserts" },
  { id: "sides", name: "Sides" },
];

export const foodItems: FoodItem[] = [
  {
    id: "burger",
    name: "Classic Burger",
    price: 8.99,
    category: "meals",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "pizza",
    name: "Margherita Pizza",
    price: 10.99,
    category: "meals",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "salad",
    name: "Grilled Chicken Salad",
    price: 7.99,
    category: "meals",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "fries",
    name: "French Fries",
    price: 3.99,
    category: "sides",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "cola",
    name: "Cola",
    price: 1.99,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "water",
    name: "Bottled Water",
    price: 1.49,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "icecream",
    name: "Ice Cream",
    price: 4.99,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "cake",
    name: "Chocolate Cake",
    price: 5.99,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60",
  },
];
