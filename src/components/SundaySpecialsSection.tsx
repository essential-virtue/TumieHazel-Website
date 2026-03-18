import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const specials = [
  { name: "Full Body Massage", price: "R300" },
  { name: "Neck & Back Massage", price: "R150" },
  { name: "Buff & Shine", price: "R100" },
  { name: "Gel Overlay", price: "R100" },
  { name: "Hot Stones Add-On", price: "R50" },
  { name: "Facial", price: "R150" },
  { name: "Wax", price: "R100" },
  { name: "Foot Spa + Foot Massage", price: "R150" },
  { name: "Cupping Therapy", price: "R100" },
];

const SundaySpecialsSection = () => {
  return (
    <section id="sunday-specials" className="py-20 md:py-28 bg-soft-pink">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-body uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Sunday Only – Limited Slots
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-3">
            Massage On The Buffet
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Treat yourself every Sunday with our special discounted wellness menu.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {specials.map((s) => (
            <Card key={s.name} className="rounded-xl border-none bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-5 text-center">
                <p className="font-body text-sm text-foreground font-medium mb-1">{s.name}</p>
                <p className="font-heading text-xl font-bold text-primary">{s.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/sunday-specials">
            <Button size="lg" className="rounded-full px-8">Book Sunday Special</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SundaySpecialsSection;
