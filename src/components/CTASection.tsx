import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-rose">
      <div className="container px-4 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          Relax. Renew. Rebalance.
        </h2>
        <p className="font-body text-primary-foreground/80 text-lg mb-10 max-w-md mx-auto">
          Book your wellness session today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/packages">
            <Button size="lg" variant="secondary" className="rounded-full px-8 text-base">
              View Packages
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-primary-foreground/40 text-primary hover:bg-primary-foreground/10">
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
