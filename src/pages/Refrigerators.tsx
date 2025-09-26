import React, { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };
  
  const filteredProducts = selectedFilter === 'All' 
    ? refrigeratorProducts 
    : refrigeratorProducts.filter(product => product.category === selectedFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Enhanced Hero Carousel */}
      <section className="relative overflow-hidden">
        <div className="relative h-[500px] md:h-[600px] bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-dark/80">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-blue/10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-orange/10 rounded-full animate-pulse animation-delay-1000"></div>
          </div>
          
          <div className="relative h-full flex items-center justify-center text-white z-20">
            <div className="text-center max-w-4xl mx-auto px-4">
              <div className="inline-block bg-gradient-to-r from-brand-blue/30 to-brand-orange/30 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/20 animate-fade-in">
                ❄️ {heroSlides[currentSlide].title}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-scale-in animation-delay-200">
                {heroSlides[currentSlide].subtitle}
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-400">
                {heroSlides[currentSlide].description}
              </p>
              
              <div className="flex gap-4 justify-center animate-fade-in animation-delay-600">
                <Button variant="hero" size="lg" className="hover-scale">
                  Shop Now
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Navigation */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        {/* Enhanced Slider Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-8 h-3 bg-gradient-to-r from-brand-blue to-brand-orange scale-110' 
                  : 'w-3 h-3 bg-white/50 hover:bg-white/70 hover:scale-110'
              }`}
            />
          ))}
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
          <div 
            className="h-full bg-gradient-to-r from-brand-blue to-brand-orange transition-all duration-1000 ease-out"
            style={{ width: `${((currentSlide + 1) / heroSlides.length) * 100}%` }}
          />
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

      {/* Enhanced Filter Section */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 mb-8">
            {['All', 'Side-by-Side', 'French Door', 'Top Freezer', 'Bottom Freezer'].map((filter) => (
              <Badge
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                className={`px-6 py-3 cursor-pointer transition-all duration-300 hover-scale ${
                  selectedFilter === filter 
                    ? 'bg-gradient-to-r from-brand-blue to-brand-orange text-white shadow-lg' 
                    : 'hover:bg-accent/10 border-border/50 hover:border-brand-blue/50'
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </Badge>
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            {filteredProducts.length} products found
          </div>
        </div>
      </section>

      {/* Enhanced Products Grid with Staggered Animation */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card to-card/80">
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
              </div>
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