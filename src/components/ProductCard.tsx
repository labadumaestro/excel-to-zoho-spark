import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  price: string;
  brand: string;
  category: string;
  grade?: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/80">
      <div className="aspect-square bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-background to-muted/20 flex items-center justify-center border-2 border-dashed border-border/30 group-hover:border-brand-blue/30 transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-brand-blue/20 transition-colors">
              <span className="text-sm text-brand-blue font-medium">IMG</span>
            </div>
            <p className="text-xs text-muted-foreground">Product Image</p>
          </div>
        </div>
        {product.grade && (
          <Badge 
            variant="secondary" 
            className="absolute top-3 left-3 bg-background/95 text-foreground shadow-sm"
          >
            {product.grade}
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <Badge variant="outline" className="mb-2 text-xs">
          {product.brand}
        </Badge>
        <h3 className="font-semibold text-sm line-clamp-2 mb-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-lg font-bold text-foreground">
          {product.price}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 gap-2">
        <Button variant="details" size="sm" className="flex-1">
          VIEW DETAILS
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-accent">
          ♡
        </Button>
      </CardFooter>
    </Card>
  );
};