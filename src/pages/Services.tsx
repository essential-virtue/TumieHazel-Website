import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Footprints, Paintbrush, Scissors, Circle } from "lucide-react";

const services = [
  { icon: Heart, title: "Massage Therapy", slug: "massage-therapy", desc: "Relieve tension with our therapeutic massage treatments tailored to your needs." },
  { icon: Sparkles, title: "Facials", slug: "facials", desc: "Rejuvenate your skin with luxurious facial treatments for a radiant glow." },
  { icon: Footprints, title: "Foot Spa", slug: "foot-spa", desc: "Pamper your feet with a soothing foot spa experience that restores comfort." },
  { icon: Paintbrush, title: "Nails", slug: "nails", desc: "Get beautifully manicured nails with our professional nail care services." },
  { icon: Scissors, title: "Waxing", slug: "waxing", desc: "Smooth, silky skin with our gentle and effective waxing treatments." },
  { icon: Circle, title: "Cupping Therapy", slug: "cupping-therapy", desc: "Ancient healing therapy to improve circulation and release deep muscle tension." },
];

const Services = () => {
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
            Our Wellness Services
          </h1>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
            From quick relaxation to full-day pampering — find the perfect service for you, your family, or your group.
          </p>
        </div>
      </section>

      {/* Standard Services */}
      <section id="services" className="py-20 md:py-28 bg-background">
        <div className="container px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {services.map((s) => (
                <Card key={s.title} className="group border-none shadow-sm hover:shadow-lg transition-shadow bg-card rounded-2xl">
                    <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-soft-pink flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                        <s.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                    <Link to={`/services/${s.slug}`}>
                        <Button variant="ghost" className="text-primary hover:text-primary rounded-full text-sm">
                        Learn More →
                        </Button>
                    </Link>
                    </CardContent>
                </Card>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
