import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Footprints, Paintbrush, Scissors, Circle, Clock, CheckCircle, ArrowLeft } from "lucide-react";

const servicesData: Record<string, {
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  duration: string;
  priceRange: string;
  includes: string[];
  image: string;
}> = {
  "massage-therapy": {
    icon: Heart,
    title: "Massage Therapy",
    tagline: "Melt away tension and restore balance",
    description: "Our massage therapy sessions are designed to relieve muscle tension, reduce stress, and promote deep relaxation. Whether you prefer a gentle Swedish massage or a more intense deep tissue treatment, our skilled therapist tailors every session to your body's unique needs. Using premium oils and expert techniques, we help restore your body's natural balance and leave you feeling completely renewed.",
    benefits: [
      "Relieves chronic muscle pain and tension",
      "Reduces stress and anxiety levels",
      "Improves blood circulation",
      "Enhances flexibility and range of motion",
      "Promotes better sleep quality",
      "Boosts immune system function",
    ],
    duration: "60 – 90 minutes",
    priceRange: "R1,300 – R1,500",
    includes: ["Swedish Massage", "Deep Tissue Massage", "Hot Stone Massage", "Scented Massage"],
    image: "/placeholder.svg",
  },
  "facials": {
    icon: Sparkles,
    title: "Facials",
    tagline: "Reveal your natural radiance",
    description: "Our luxurious facial treatments are crafted to cleanse, exfoliate, and nourish your skin, giving you a healthy, radiant glow. Each facial is customised based on your skin type and concerns, using high-quality products that hydrate, brighten, and rejuvenate. From deep cleansing to anti-aging treatments, we ensure your skin looks and feels its absolute best.",
    benefits: [
      "Deep cleanses and unclogs pores",
      "Hydrates and nourishes the skin",
      "Reduces fine lines and wrinkles",
      "Evens out skin tone and texture",
      "Promotes cell regeneration",
      "Leaves skin glowing and refreshed",
    ],
    duration: "45 – 75 minutes",
    priceRange: "R650 – R700",
    includes: ["Deep Cleansing Facial", "Anti-Aging Facial", "Foot Soak, Scrub & Massage"],
    image: "/placeholder.svg",
  },
  "foot-spa": {
    icon: Footprints,
    title: "Foot Spa",
    tagline: "Soothe your soles, refresh your spirit",
    description: "Treat your feet to the ultimate pampering experience with our luxurious foot spa. This revitalising treatment begins with a warm soak infused with essential oils, followed by gentle exfoliation to remove dead skin cells. A deeply relaxing foot massage completes the experience, improving circulation and leaving your feet feeling soft, smooth, and completely rejuvenated.",
    benefits: [
      "Relieves tired and aching feet",
      "Softens rough and dry skin",
      "Improves blood circulation in the feet",
      "Reduces swelling and inflammation",
      "Promotes deep relaxation",
      "Stimulates reflex points for overall wellness",
    ],
    duration: "30 – 45 minutes",
    priceRange: "R650 – R700",
    includes: ["Foot Soak + Scrub + Massage", "Foot Soak + Scrub + DrySkin Removal + Foot & Lower Leg Massage"],
    image: "/placeholder.svg",
  },
  "nails": {
    icon: Paintbrush,
    title: "Nails",
    tagline: "Beautiful nails, beautiful you",
    description: "Our professional nail care services ensure your hands and feet look polished and elegant. From gel manicures and pedicures to gel pedicures and nail art, we use premium products for long-lasting, beautiful results. Whether you want a natural, clean look or a bold statement design, our nail technician will create the perfect finish for you.",
    benefits: [
      "Strengthens and protects natural nails",
      "Long-lasting gel and polish finishes",
      "Promotes healthy nail growth",
      "Cuticle care and hand moisturising",
      "Wide range of colours and designs",
      "Professional and hygienic application",
    ],
    duration: "30 – 60 minutes",
    priceRange: "R250 – R300",
    includes: ["Gel Manicure", "Gel Pedicure", "Buff & Shine"],
    image: "/placeholder.svg",
  },
  "waxing": {
    icon: Scissors,
    title: "Waxing",
    tagline: "Smooth skin, effortless confidence",
    description: "Achieve silky smooth skin with our gentle and effective waxing treatments. We use high-quality wax formulas that minimise discomfort while delivering long-lasting results. Our experienced therapist ensures a comfortable experience whether you're booking a full body wax or targeting specific areas. Walk out feeling confident and beautifully smooth.",
    benefits: [
      "Long-lasting smooth results",
      "Reduces hair growth over time",
      "Gentle on sensitive skin",
      "Removes dead skin cells for softer skin",
      "No razor bumps or irritation",
      "Quick and efficient treatment",
    ],
    duration: "15 – 60 minutes",
    priceRange: "R100",
    includes: ["Full Leg Wax", "Half Leg Wax", "Arm Wax", "Underarm Wax", "Bikini Wax", "Facial Wax"],
    image: "/placeholder.svg",
  },
  "cupping-therapy": {
    icon: Circle,
    title: "Cupping Therapy",
    tagline: "Ancient healing for modern wellness",
    description: "Experience the powerful healing benefits of cupping therapy, an ancient practice that uses suction cups to improve blood flow, release deep muscle tension, and promote natural healing. This treatment is ideal for those suffering from chronic pain, muscle stiffness, or fatigue. Our therapist carefully places cups on specific points to encourage detoxification and restore your body's energy flow.",
    benefits: [
      "Relieves deep muscle tension and pain",
      "Improves blood circulation and oxygen flow",
      "Reduces inflammation and swelling",
      "Promotes natural detoxification",
      "Alleviates headaches and migraines",
      "Boosts energy and reduces fatigue",
    ],
    duration: "30 – 45 minutes",
    priceRange: "R100",
    includes: ["Dry Cupping", "Wet Cupping", "Massage Cupping", "Facial Cupping", "Back & Shoulder Focus"],
    image: "/placeholder.svg",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-heading text-3xl text-foreground mb-4">Service Not Found</h1>
          <Link to="/#services">
            <Button className="rounded-full">Back to Services</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-secondary">
        <div className="container px-4">
          <Link to="/#services" className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-soft-pink flex items-center justify-center shrink-0">
              <IconComponent className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-3">{service.title}</h1>
              <p className="font-heading text-lg md:text-xl text-primary italic">{service.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">About This Treatment</h2>
                <p className="font-body text-muted-foreground leading-relaxed text-base">{service.description}</p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-5">Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="font-body text-sm text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-5">What's Included</h2>
                <div className="flex flex-wrap gap-3">
                  {service.includes.map((item) => (
                    <span key={item} className="px-4 py-2 rounded-full bg-secondary text-sm font-body text-foreground border border-border">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-none shadow-md rounded-2xl overflow-hidden">
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Duration</p>
                      <p className="font-heading text-lg font-semibold text-foreground">{service.duration}</p>
                    </div>
                  </div>
                  <div className="h-px bg-border" />
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">Price Range</p>
                    <p className="font-heading text-2xl font-semibold text-primary">{service.priceRange}</p>
                  </div>
                  <Link to="/book" className="block">
                    <Button className="w-full rounded-full text-base" size="lg">
                      Book This Treatment
                    </Button>
                  </Link>
                  <a href="https://wa.me/27729792181" target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full rounded-full text-base" size="lg">
                      WhatsApp Us
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
