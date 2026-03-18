import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Amazing experience! I felt completely relaxed and refreshed. TumieHazel truly has healing hands.",
    name: "Thandi M.",
  },
  {
    text: "The mobile service was so convenient. Professional, soothing, and exactly what I needed after a long week.",
    name: "Lerato K.",
  },
  {
    text: "Best massage I've ever had! The Sunday special is unbeatable value. I'm now a regular client.",
    name: "Palesa N.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <Card key={t.name} className="rounded-2xl border-none shadow-sm bg-card">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed italic mb-6">"{t.text}"</p>
                <p className="font-heading text-foreground font-semibold">– {t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
