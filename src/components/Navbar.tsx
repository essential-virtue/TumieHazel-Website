import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sunday Specials", href: "/sunday-specials" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-heading text-xl md:text-2xl font-semibold text-foreground tracking-tight flex items-center gap-2 group">
          <img 
            src="/logo.png" 
            alt="TumieHazel Massage Therapy Logo" 
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
          />
          TumieHazel
        </Link>

        {/* Desktop - Changed <a> to <Link> */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-body transition-colors ${
                isActive(link.href) 
                  ? "text-primary font-medium" 
                  : "text-muted-foreground hover:text-primary"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/book">
            <Button className="rounded-full px-6">Book Now</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu - Changed <a> to <Link> */}
      {open && (
        <div className="lg:hidden bg-card border-b border-border pb-4">
          <div className="container flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-body py-2 transition-colors ${
                  isActive(link.href) 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/book" onClick={() => setOpen(false)}>
              <Button className="rounded-full w-full mt-2">Book Now</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;