import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

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
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">Premium Experiences</p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">Wellness Packages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`rounded-2xl border-none shadow-sm hover:shadow-xl transition-all ${
                pkg.featured ? "ring-2 ring-primary scale-[1.02]" : ""
              }`}
            >
              <CardContent className="p-8 flex flex-col h-full">
                {pkg.featured && (
                  <div className="flex items-center gap-1 text-gold text-xs font-body uppercase tracking-wider mb-3">
                    <Star className="w-3 h-3 fill-gold" /> Most Popular
                  </div>
                )}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{pkg.name}</h3>
                <p className="font-heading text-3xl font-bold text-primary mb-5">{pkg.price}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-xs text-muted-foreground mb-4">Duration: {pkg.duration}</p>
                <Link to="/book"
                    state={{ 
                        selectedPackage: pkg.name,
                        serviceType: pkg.name.includes("Mobile") ? "mobile" : "home"
                    }}
                  >
                  <Button className="rounded-full w-full">Book This Package</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/packages" className="font-body text-sm hover:text-gold transition-colors">
            <Button className="rounded-full">View All Packages &rarr;</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
