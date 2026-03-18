import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-spa.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-brown/60 via-dark-brown/40 to-dark-brown/70" />

      <div className="relative z-10 container text-center px-4 py-32">
        <p className="font-body text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in">
          A heaven for healing
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          TumieHazel<br />Massage Therapy
        </h1>
        <p className="font-body text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Home-Based & Mobile Wellness Therapy designed to help you relax, relieve stress, and restore balance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.45s" }}>
          <Link to="/book">
            <Button size="lg" className="rounded-full px-8 text-base">
              Book Appointment
            </Button>
          </Link>
          <a href="#services">
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-primary-foreground/40 text-primary hover:bg-primary-foreground/10">
              View Services
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
