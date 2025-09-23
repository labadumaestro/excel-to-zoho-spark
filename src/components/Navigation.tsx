import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User } from "lucide-react";

export const Navigation = () => {
  const categories = [
    "Home", "Fridges", "Washers", "Gas Dryers", "Electrical Dryers", 
    "Electrical Cooktops", "Gas Cooktops", "Wine Coolers", "Beverage Coolers", "More"
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="bg-brand-dark text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>📧 info@yourcompanyname.com</span>
            <span>📞 123-456-7890</span>
          </div>
          <div className="hidden md:block">
            <span>Your trial ends in 9 days</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-yellow to-brand-yellow/80 rounded-lg flex items-center justify-center">
              <span className="text-brand-dark font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold text-foreground">spark</span>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search" 
                className="pl-10 pr-4 rounded-full border-muted"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <nav className="border-t bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 py-3 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="whitespace-nowrap text-sm hover:text-accent font-medium"
              >
                {category}
                {category === "More" && " ▼"}
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};