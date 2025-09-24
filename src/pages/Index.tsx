import { Navigation } from "@/components/Navigation";
import { HeroBanner } from "@/components/HeroBanner";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import productivityBanner from "@/assets/productivity-banner.jpg";
import gamingBanner from "@/assets/gaming-banner.jpg";

const Index = () => {
  const featuredProducts = products.slice(0, 4);
  const latestProducts = products.slice(4, 8);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative">
        <HeroBanner
          title="PROFESSIONAL APPLIANCE LIQUIDATION!"
          subtitle="UP TO 70% OFF RETAIL PRICES"
          discount="Max Savings ✨"
          image={heroKitchen}
          className="mx-4 mt-8 h-[500px] md:h-[600px]"
        />
      </section>

      {/* Shop by Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Shop by Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4">
            {[
              { name: "Range Hoods", link: "#range-hoods" },
              { name: "Speed Ovens", link: "#speed-ovens" },
              { name: "Wall Ovens", link: "#wall-ovens" },
              { name: "Microwaves", link: "#microwaves" },
              { name: "Refrigerators", link: "/refrigerators" }
            ].map((category) => (
              <a
                key={category.name}
                href={category.link}
                className="flex flex-col items-center p-6 rounded-xl bg-card hover:bg-accent/10 transition-all duration-300 cursor-pointer group border border-border/50 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-muted to-muted/60 rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <div className="w-full h-full bg-brand-blue/5 flex items-center justify-center rounded-lg border-2 border-dashed border-brand-blue/20">
                    <span className="text-xs text-muted-foreground text-center px-2">Image placeholder</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-center text-foreground group-hover:text-brand-blue transition-colors">{category.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-8 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <HeroBanner
            title="Professional Grade"
            subtitle="Commercial Kitchen Equipment"
            image={productivityBanner}
            className="h-[300px]"
          />
          <HeroBanner
            title="Luxury Home"
            subtitle="Premium Appliance Collection"
            image={gamingBanner}
            className="h-[300px]"
          />
        </div>
      </section>

      {/* Latest Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Latest Products</h2>
            <Button variant="link" className="text-brand-blue hover:text-brand-blue/80">
              View All →
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
            <Button variant="link" className="text-brand-blue hover:text-brand-blue/80">
              View All →
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/90 rounded-2xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-brand-blue font-semibold mb-4">Professional Appliance Liquidation Starting At</p>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Just $650</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-8">Save Up To 70%</h3>
              <Button variant="hero" size="lg">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;