
import React from "react";
import FoodMenu from "../components/FoodMenu";
import Cart from "../components/Cart";
import { CartProvider } from "../context/CartContext";

const BillingSystem: React.FC = () => {
  return (
    <CartProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Food Cart Billing System</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FoodMenu />
          </div>
          <div className="glass rounded-lg shadow-lg">
            <Cart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default BillingSystem;
