import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const refrigeratorProducts = [
  {
    id: "ref-001",
    name: "Samsung 28 cu. ft. French Door Refrigerator with Twin Cooling Plus",
    price: "USD 2,450.00",
    brand: "Samsung",
    grade: "Grade A",
    category: "French Door"
  },
  {
    id: "ref-002", 
    name: "LG 30 cu. ft. Smart Wi-Fi Enabled InstaView Door-in-Door Refrigerator",
    price: "USD 3,200.00",
    brand: "LG",
    grade: "Grade A",
    category: "Smart"
  },
  {
    id: "ref-003",
    name: "Whirlpool 25 cu. ft. Side-by-Side Refrigerator with Ice Maker",
    price: "USD 1,850.00", 
    brand: "Whirlpool",
    grade: "Grade B",
    category: "Side-by-Side"
  },
  {
    id: "ref-004",
    name: "KitchenAid 24 cu. ft. Counter-Depth French Door Refrigerator",
    price: "USD 2,800.00",
    brand: "KitchenAid", 
    grade: "Grade A",
    category: "Counter-Depth"
  },
  {
    id: "ref-005",
    name: "GE Profile 27 cu. ft. Energy Star French Door Refrigerator",
    price: "USD 2,100.00",
    brand: "GE Profile",
    grade: "Grade A",
    category: "Energy Star"
  },
  {
    id: "ref-006",
    name: "Frigidaire 32 cu. ft. Professional Series Refrigerator",
    price: "USD 3,600.00",
    brand: "Frigidaire",
    grade: "Grade A",
    category: "Professional"
  }
];

const heroSlides = [
  {
    title: "Premium Refrigerators",
    subtitle: "Professional-Grade Cooling Solutions",
    description: "Up to 60% off retail prices on luxury refrigerators"
  },
  {
    title: "Smart Technology",
    subtitle: "Wi-Fi Enabled & Energy Efficient", 
    description: "Modern refrigerators with advanced features"
  },
  {
    title: "French Door Collection",
    subtitle: "Elegant Design Meets Functionality",
    description: "Spacious layouts with premium finishes"
  }
];

const Refrigerators = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Slider */}
      <section className="relative h-[500px] mx-4 mt-8 rounded-2xl overflow-hidden bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/90">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
        
        {/* Slider Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl animate-fade-in">
              <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30 mb-4">
                ❄️ Refrigerators Collection
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {heroSlides[currentSlide].title}
              </h1>
              <h2 className="text-xl md:text-2xl text-brand-blue mb-4 font-semibold">
                {heroSlides[currentSlide].subtitle}
              </h2>
              <p className="text-lg text-white/90 mb-8">
                {heroSlides[currentSlide].description}
              </p>
              <Button variant="hero" size="lg" className="animate-scale-in">
                Browse Collection
              </Button>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/10 hover:bg-background/20 text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/10 hover:bg-background/20 text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Slider Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-brand-blue scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <nav className="text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <span className="mx-2">→</span>
            <span className="text-foreground">Refrigerators</span>
          </nav>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">All Types</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">French Door</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Side-by-Side</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Counter-Depth</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Smart Features</Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              {refrigeratorProducts.length} products found
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {refrigeratorProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card to-card/80"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fade-in 0.6s ease-out forwards'
                }}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-muted/30 to-muted/10 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-background to-muted/20 flex items-center justify-center border-2 border-dashed border-border/30 group-hover:border-brand-blue/40 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-brand-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-blue/20 transition-colors group-hover:scale-110 duration-300">
                        <span className="text-lg text-brand-blue font-bold">REF</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Refrigerator Image</p>
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
                  <Badge 
                    variant="outline" 
                    className="absolute top-3 right-3 bg-brand-blue/10 text-brand-blue border-brand-blue/30"
                  >
                    {product.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {product.brand}
                  </Badge>
                  <h3 className="font-semibold text-lg line-clamp-2 mb-3 group-hover:text-brand-blue transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-foreground mb-4">
                    {product.price}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button variant="details" className="flex-1">
                      VIEW DETAILS
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-accent shrink-0">
                      ♡
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/90">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto text-white">
            <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30 mb-6">
              Limited Time Offer
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Premium Refrigerators
            </h2>
            <h3 className="text-xl md:text-2xl text-brand-blue mb-6">
              Starting from $1,850
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Professional-grade refrigerators with advanced cooling technology and energy efficiency
            </p>
            <Button variant="hero" size="lg">
              Shop Refrigerators Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Refrigerators;