
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Food Cart Billing System</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Manage your food cart inventory, add items to cart, and generate bills with ease.
      </p>
      <Button asChild size="lg">
        <Link to="/billing">Open Billing System</Link>
      </Button>
    </div>
  );
}
