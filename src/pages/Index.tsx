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
    <div className="min-h-screen bg-background dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative">
        <HeroBanner
          title="CHOOSE VIKING 60 CHOOSE SAVINGS!"
          subtitle="UPTO 70% OFF"
          discount="Special Discount ✨"
          image={heroKitchen}
          className="mx-4 mt-8 h-[500px] md:h-[600px]"
        />
        
        <div className="absolute bottom-8 right-8 bg-brand-yellow/20 backdrop-blur-sm rounded-lg p-4">
          <p className="text-sm text-white mb-2">Filter Type: Baffle Filters | Duct Size: 10" Round</p>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-dark">
            More details
          </Button>
        </div>
      </section>

      {/* Shop by Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Shop by Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {[
              { icon: "🎧", name: "Audio" },
              { icon: "💻", name: "Laptops" },
              { icon: "📱", name: "Mobile" },
              { icon: "🖥️", name: "Monitors" },
              { icon: "🔧", name: "Tools" },
              { icon: "🏠", name: "Appliances" },
              { icon: "🎮", name: "Gaming" },
              { icon: "📷", name: "Cameras" },
              { icon: "🖨️", name: "Printers" },
              { icon: "🛡️", name: "Security" }
            ].map((category) => (
              <div
                key={category.name}
                className="flex flex-col items-center p-4 rounded-full bg-muted/30 hover:bg-accent/20 transition-colors cursor-pointer group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-muted to-muted/60 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <span className="text-sm font-medium text-center">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-8 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <HeroBanner
            title="Turn Down The Chaos,"
            subtitle="Turn Up The Productivity"
            image={productivityBanner}
            className="h-[300px]"
          />
          <HeroBanner
            title="Gaming On The Go"
            subtitle="From Boarding Gates To Battlefields"
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
            <div className="flex gap-2">
              <Badge className="bg-accent text-accent-foreground">+ Add Element</Badge>
              <Badge variant="secondary">↗ Copy</Badge>
            </div>
            <Button variant="link" className="text-accent hover:text-accent/80">
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
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">All Products</h2>
            <Button variant="link" className="text-accent hover:text-accent/80">
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

      {/* Blogs & Events */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Blogs & Events</h2>
            <Button variant="link" className="text-accent hover:text-accent/80">
              View All →
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/60 rounded-xl mb-4 overflow-hidden">
                  <div className="w-full h-full bg-brand-dark/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="text-4xl">📰</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mb-2">📅 08 June 2024</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  Up to 20% Discount
                </h3>
                <p className="text-muted-foreground mb-4">
                  The Apple Mouse 2 is designed for those who seek a seamless experience with their quality.
                </p>
                <Button variant="link" className="p-0 text-accent">
                  Read More...
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/90 rounded-2xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/api/placeholder/800/400')] opacity-20 bg-cover bg-center" />
            <div className="relative z-10">
              <p className="text-brand-yellow font-semibold mb-4">Go Anywhere, Pro Everything Starting At</p>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Just $999</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-8">Save Up To 60%</h3>
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