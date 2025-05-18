
import React from "react";
import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableFooter, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Trash, Plus, Minus } from "lucide-react";

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <p className="text-muted-foreground">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <Button 
          variant="outline" 
          onClick={clearCart}
          size="sm"
        >
          Clear Cart
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                    min={1}
                    className="h-8 w-16 text-center"
                  />
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="h-8 w-8" 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
              <TableCell className="text-right">
                ${(item.price * item.quantity).toFixed(2)}
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right font-bold">
              ${getTotal().toFixed(2)}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <div className="mt-6">
        <Button className="w-full">Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
