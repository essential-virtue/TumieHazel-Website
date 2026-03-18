import { Phone, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark-brown text-primary-foreground/70 py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-4">TumieHazel</h3>
            <p className="font-body text-sm leading-relaxed">
              Premium massage therapy & wellness services. Home-based & mobile bookings available.
            </p>
            <p className="font-body text-sm mt-4 flex items-center">
              <Phone className="w-4 h-4 mr-2" /> +27 72 979 2181
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/services" className="font-body text-sm hover:text-gold transition-colors">Our Services</Link>
              <Link to="/packages" className="font-body text-sm hover:text-gold transition-colors">Our Packages</Link>
              <Link to="/sunday-specials" className="font-body text-sm hover:text-gold transition-colors">Sunday Specials</Link>
              <Link to="/gallery" className="font-body text-sm hover:text-gold transition-colors">Our Gallery</Link>
              <Link to="/about" className="font-body text-sm hover:text-gold transition-colors">About Us</Link>
              <Link to="/contact" className="font-body text-sm hover:text-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">Follow Us</h4>
            <div className="flex gap-2">
              <a href="#" className="font-body text-sm hover:text-gold transition-colors flex items-center">
                <Instagram className="w-6 h-6 mr-1" />
              </a>
              <a href="https://www.facebook.com/share/17HzdHFgkZ/?mibextid=wwXlfr" className="font-body text-sm hover:text-gold transition-colors flex items-center">
                <Facebook className="w-6 h-6 mr-1" />
              </a>
              <a href="https://www.tiktok.com/@tumiehazelmobilespa" className="font-body text-sm hover:text-gold transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/40">
  
          <p className="font-body">
            © 2026 TumieHazel Massage Therapy. All rights reserved.
          </p>

          <p className="font-body mt-2 md:mt-0">
            Developed by{" "}
            <a
              href="https://essentialvirtue.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              Essential Virtue
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
