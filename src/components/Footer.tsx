import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Youtube, Tv } from "lucide-react";

export const Footer = () => {
  const productLinks = [
    "Smart Watches", "Wireless Earbuds", "Bluetooth Speakers", "Spark Gift Card"
  ];
  
  const businessLinks = [
    "Spark For Business", "Corporate Enquiries", "Brand Partners"
  ];
  
  const aboutLinks = [
    "About us", "Blog", "Careers", "In the Press"
  ];
  
  const supportLinks = [
    "Download your income", "Track your order", "Shipping and return policy", 
    "Product Support", "Register your Warranty", "Contact us"
  ];
  
  const legalLinks = [
    "Terms and Conditions", "Privacy Policy", "Social Responsibilities"
  ];

  return (
    <footer className="bg-brand-dark text-white">
      {/* Newsletter */}
      <div className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Subscribe to our Mail alerts</h3>
          <div className="max-w-md mx-auto flex gap-2">
            <Input 
              placeholder="Enter Your Email Address" 
              className="bg-white/10 border-white/20 text-white placeholder-white/60"
            />
            <Button variant="shop">Submit</Button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="border-t border-white/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Our Products */}
            <div>
              <h4 className="font-bold text-lg mb-6">Our Products</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link}>
                    <Button variant="ghost" className="p-0 h-auto text-white/80 hover:text-white justify-start">
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
              
              <h4 className="font-bold text-lg mb-4 mt-8">For Business</h4>
              <ul className="space-y-3">
                {businessLinks.map((link) => (
                  <li key={link}>
                    <Button variant="ghost" className="p-0 h-auto text-white/80 hover:text-white justify-start">
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Spark */}
            <div>
              <h4 className="font-bold text-lg mb-6">About Spark</h4>
              <ul className="space-y-3">
                {aboutLinks.map((link) => (
                  <li key={link}>
                    <Button variant="ghost" className="p-0 h-auto text-white/80 hover:text-white justify-start">
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link}>
                    <Button variant="ghost" className="p-0 h-auto text-white/80 hover:text-white justify-start">
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link}>
                    <Button variant="ghost" className="p-0 h-auto text-white/80 hover:text-white justify-start">
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center">
                <span className="text-brand-dark font-bold">S</span>
              </div>
              <span className="text-xl font-bold">spark</span>
            </div>

            {/* Newsletter */}
            <div className="flex items-center gap-4">
              <span className="text-white/80">Subscribe to our Mail alerts</span>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter Your Email Address" 
                  className="bg-white/10 border-white/20 text-white placeholder-white/60 w-60"
                />
                <Button variant="shop" size="sm">Submit</Button>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2">
              <span className="text-white/80 mr-2">Follow us</span>
              <Button variant="ghost" size="icon" className="text-white hover:text-brand-yellow">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-brand-yellow">
                <Tv className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-brand-yellow">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-brand-yellow">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};