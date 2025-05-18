
import React, { createContext, useContext, useState } from "react";
import { CartItem, FoodItem } from "../types/foodTypes";
import { toast } from "../components/ui/use-toast";

interface CartContextType {
  items: CartItem[];
  addToCart: (item: FoodItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: FoodItem) => {
    setItems(currentItems => {
      // Check if item already exists in cart
      const existingItem = currentItems.find(i => i.id === item.id);
      
      if (existingItem) {
        // If it exists, increase quantity
        toast({
          title: "Added to cart",
          description: `${item.name} quantity increased`,
        });
        
        return currentItems.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + 1 } 
            : i
        );
      } else {
        // If it doesn't exist, add with quantity 1
        toast({
          title: "Added to cart",
          description: `${item.name} added to your cart`,
        });
        
        return [...currentItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setItems(currentItems => {
      const removingItem = currentItems.find(i => i.id === id);
      
      if (removingItem) {
        toast({
          title: "Removed from cart",
          description: `${removingItem.name} was removed from your cart`,
        });
      }
      
      return currentItems.filter(i => i.id !== id);
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setItems(currentItems =>
      currentItems.map(i =>
        i.id === id ? { ...i, quantity } : i
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
