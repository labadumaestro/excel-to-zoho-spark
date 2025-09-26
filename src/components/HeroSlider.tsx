import React, { useState, useEffect } from 'react';
import { HeroBanner } from "@/components/HeroBanner";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import productivityBanner from "@/assets/productivity-banner.jpg";
import gamingBanner from "@/assets/gaming-banner.jpg";

interface Slide {
  title: string;
  subtitle: string;
  discount: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "PROFESSIONAL APPLIANCE LIQUIDATION!",
    subtitle: "UP TO 70% OFF RETAIL PRICES",
    discount: "Max Savings ✨",
    image: heroKitchen
  },
  {
    title: "LUXURY HOME APPLIANCES",
    subtitle: "PREMIUM BRANDS AT WHOLESALE",
    discount: "Exclusive Deals 🔥",
    image: productivityBanner
  },
  {
    title: "COMMERCIAL GRADE EQUIPMENT",
    subtitle: "RESTAURANT QUALITY FOR HOME",
    discount: "Limited Time ⚡",
    image: gamingBanner
  }
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleSlideClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('slider-dot')) {
        const slideIndex = parseInt(target.getAttribute('data-slide') || '0');
        goToSlide(slideIndex);
      } else if (target.closest('.slider-arrow.left')) {
        prevSlide();
      } else if (target.closest('.slider-arrow.right')) {
        nextSlide();
      }
    };

    document.addEventListener('click', handleSlideClick);
    return () => document.removeEventListener('click', handleSlideClick);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <HeroBanner
              title={slide.title}
              subtitle={slide.subtitle}
              discount={slide.discount}
              image={slide.image}
              className="mx-4 mt-8 h-[500px] md:h-[600px]"
            />
          </div>
        ))}
        
        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <div 
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`} 
              data-slide={index}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button className="slider-arrow left absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300">
          <span className="text-white text-xl">←</span>
        </button>
        <button className="slider-arrow right absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300">
          <span className="text-white text-xl">→</span>
        </button>
      </div>
    </section>
  );
};