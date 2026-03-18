import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Sparkles, Baby, CakeSlice, Briefcase, Calendar, Users, Mountain, MapPin, Heart } from "lucide-react";

const packages = [
  {
    name: "Stress Reset Package",
    price: "R2,200",
    features: ["Full Body Massage", "Facial Treatment", "Foot Spa", "Hot Stones"],
    duration: "3+ hours",
  },
  {
    name: "Luxury Body Renewal",
    price: "R3,000",
    features: ["Deep Tissue Massage", "Premium Facial", "Full Nail Treatment", "Waxing", "Foot Spa"],
    duration: "4+ hours",
    featured: true,
  },
  {
    name: "Mobile Executive Package",
    price: "R3,500",
    features: ["Mobile Service", "Full Body Massage", "Facial", "Foot Spa", "Cupping Therapy"],
    duration: "4+ hours",
  },
  {
    name: "Kids Massage Package",
    price: "R450",
    features: ["Gentle Massage (30 min)", "Child-Safe Oils", "Fun Relaxation Techniques", "Story Time Session"],
    duration: "45 minutes",
    forKids: true,
  },
];

const customPackages = [
  {
    icon: CakeSlice,
    title: "Birthday Package",
    description: "Celebrate your special day with a pampering session for you and your friends. Includes sparkling wine and treats.",
    features: ["Group booking available", "Customised treatments", "Complimentary bubbles"],
  },
  {
    icon: Briefcase,
    title: "Corporate Package",
    description: "Bring wellness to your workplace. Perfect for team building or employee appreciation days.",
    features: ["On-site mobile service", "Flexible scheduling", "Group discounts"],
  },
  {
    icon: Mountain,
    title: "Hiking Recovery",
    description: "Post-trail muscle relief and recovery for outdoor enthusiasts and adventure seekers.",
    features: ["Deep tissue focus", "Stretching therapy", "Hot stone application"],
  },
  {
    icon: MapPin,
    title: "Destination Spa",
    description: "We come to your holiday rental or venue for a complete spa experience away from home.",
    features: ["Full mobile setup", "Group packages", "Flexible duration"],
  },
];

// Placeholder for Cake icon (since it's not in lucide-react directly)
const Cake = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
    <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
    <path d="M2 21h20" />
    <path d="M7 8v3" />
    <path d="M12 8v3" />
    <path d="M17 8v3" />
    <path d="M7 4h0" />
    <path d="M12 4h0" />
    <path d="M17 4h0" />
  </svg>
);

// Placeholder for Building icon (since it's not in your import)
const Building = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="22" x2="9" y2="10" />
    <line x1="15" y1="22" x2="15" y2="10" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="16" y2="10" />
  </svg>
);

const Packages = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-secondary">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">
            Treatments for Every Need
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-5">
            Our Wellness Packages
          </h1>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
            From quick relaxation to full-day pampering — find the perfect package for you, your family, or your group.
          </p>
        </div>
      </section>

      {/* Standard Packages */}
      <section id="packages" className="py-20 md:py-28 bg-background">
        <div className="container px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`rounded-2xl border-none shadow-sm hover:shadow-xl transition-all ${
                  pkg.featured ? "ring-2 ring-primary scale-[1.02] md:scale-105" : ""
                } ${pkg.forKids ? "bg-soft-pink/10" : ""}`}
              >
                <CardContent className="p-8 flex flex-col h-full">
                  {pkg.featured && (
                    <div className="flex items-center gap-1 text-gold text-xs font-body uppercase tracking-wider mb-3">
                      <Star className="w-3 h-3 fill-gold" /> Most Popular
                    </div>
                  )}
                  {pkg.forKids && (
                    <div className="flex items-center gap-1 text-primary text-xs font-body uppercase tracking-wider mb-3">
                      <Baby className="w-3 h-3" /> Kids Friendly
                    </div>
                  )}
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="font-heading text-3xl font-bold text-primary mb-5">
                    {pkg.price}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="font-body text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="font-body text-xs text-muted-foreground mb-4">
                    Duration: {pkg.duration}
                  </p>
                  <Link to="/book">
                    <Button className="rounded-full w-full">Book This Package</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">
              Tailored Just For You
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-5">
              Custom Packages
            </h2>
            <p className="font-body text-muted-foreground text-base leading-relaxed">
              Have something specific in mind? We create bespoke wellness experiences for any occasion.
              <span className="block mt-2 font-semibold text-primary">Price customised based on your needs</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {customPackages.map((custom) => (
              <Card key={custom.title} className="rounded-2xl border-none shadow-md hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center flex-shrink-0">
                      <custom.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        {custom.title}
                      </h3>
                      <p className="font-body text-muted-foreground text-sm mb-4">
                        {custom.description}
                      </p>
                      <ul className="space-y-1 mb-5">
                        {custom.features.map((feature) => (
                          <li key={feature} className="font-body text-xs text-muted-foreground flex items-center gap-2">
                            <Heart className="w-3 h-3 text-gold" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between mt-4">
                        <Badge variant="outline" className="text-primary border-primary">
                          Custom Pricing
                        </Badge>
                        <Link to="/contact">
                          <Button variant="link" className="text-primary p-0">
                            Enquire Now →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect for Groups */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <Users className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Perfect for Groups & Special Occasions
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Whether it's a birthday party, corporate event, or a girls' day out — we bring the spa to you.
            Contact us for a custom quote tailored to your group size and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button className="rounded-full px-8" size="lg">
                Book a Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="rounded-full px-8" size="lg">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;