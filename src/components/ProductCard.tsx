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
      <div className="aspect-square bg-muted/20 relative overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
            <div className="w-24 h-24 bg-brand-dark/10 rounded-lg flex items-center justify-center">
              <span className="text-2xl text-muted-foreground">🏠</span>
            </div>
          </div>
        )}
        {product.grade && (
          <Badge 
            variant="secondary" 
            className="absolute top-2 left-2 bg-background/90 text-foreground"
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