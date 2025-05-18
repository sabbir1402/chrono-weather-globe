
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { foodItems, categories } from "../data/foodData";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FoodMenu: React.FC = () => {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = activeTab === "all" 
    ? foodItems 
    : foodItems.filter(item => item.category === activeTab);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6 flex flex-wrap gap-2">
          <TabsTrigger value="all">All Items</TabsTrigger>
          {categories.map(category => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeTab}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <Card key={item.id} className="overflow-hidden">
                {item.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-primary">${item.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => addToCart(item)}
                    className="w-full"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FoodMenu;
