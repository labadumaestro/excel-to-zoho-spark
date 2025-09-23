import { Button } from "@/components/ui/button";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  discount?: string;
  image: string;
  className?: string;
}

export const HeroBanner = ({ title, subtitle, discount, image, className = "" }: HeroBannerProps) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent ${className}`}>
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt="Banner" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>
      
      <div className="relative z-10 p-8 md:p-12 text-white">
        {discount && (
          <div className="inline-block bg-brand-yellow text-black px-3 py-1 rounded-full text-sm font-semibold mb-4">
            {discount}
          </div>
        )}
        
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          {title}
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-md">
          {subtitle}
        </p>
        
        <Button variant="hero" size="lg">
          Shop Now
        </Button>
      </div>
    </div>
  );
};