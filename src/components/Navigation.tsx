import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User, Upload } from "lucide-react";

export const Navigation = () => {
  const categories = [
    "Home", "Range Hoods", "Speed Ovens", "Wall Ovens", "Microwaves", 
    "Refrigerators", "Washers", "Dryers", "Cooktops", "More"
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="bg-brand-dark text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>📧 info@maxapplianceliquidation.com</span>
            <span>📞 (555) 123-4567</span>
          </div>
          <div className="hidden md:block">
            <span>Professional Appliance Liquidation Services</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-lg flex items-center justify-center border border-border/50">
              <Upload className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Max Appliance Liquidation</h1>
              <p className="text-sm text-muted-foreground">Upload your logo here</p>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search appliances..." 
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
                className="whitespace-nowrap text-sm hover:text-brand-blue font-medium flex flex-col items-center gap-2 py-4 px-3"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-muted to-muted/60 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <div className="w-full h-full bg-brand-blue/5 flex items-center justify-center rounded-md border border-dashed border-brand-blue/20">
                    <span className="text-xs text-muted-foreground">IMG</span>
                  </div>
                </div>
                <span className="text-xs">{category}</span>
                {category === "More" && <span className="text-xs">▼</span>}
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};