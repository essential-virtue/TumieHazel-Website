import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Award, Users, Star, MapPin, Phone } from "lucide-react";
import aboutImage from "@/assets/about-spa.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const values = [
  { icon: Heart, title: "Healing Touch", desc: "Every treatment is delivered with care, compassion, and a deep commitment to your wellbeing." },
  { icon: Award, title: "Excellence", desc: "We use premium products and proven techniques to deliver results that exceed expectations." },
  { icon: Users, title: "Client First", desc: "Your comfort, privacy, and satisfaction are at the heart of everything we do." },
  { icon: Star, title: "Passion", desc: "We are passionate about helping people feel their best — body, mind, and spirit." },
];

const team = [
  { name: "Hazel", role: "Founder & Lead Therapist", image: team1, bio: "With over 8 years of experience in massage therapy and holistic wellness, Tumie founded TumieHazel to bring premium spa experiences to the comfort of your home." },
  { name: "Boitumelo", role: "Senior Massage Therapist", image: team3, bio: "Specialising in deep tissue and hot stone massage, Boitumelo brings a healing touch that clients return for again and again." },
  { name: "Nkgabisheng", role: "Nail Technician & Aesthetician", image: team2, bio: "A creative nail artist and skincare enthusiast, Nkgabisheng ensures every client leaves with flawless nails and glowing skin." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-secondary">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">Our Story</p>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-5">About TumieHazel</h1>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
            A passion-driven wellness brand dedicated to helping you relax, heal, and rediscover balance — one treatment at a time.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={aboutImage} alt="TumieHazel spa environment" className="w-full h-80 md:h-[28rem] object-cover" />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground mb-6">Where It All Began</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                TumieHazel Massage Therapy was born out of a deep love for healing and wellness. What started as a personal journey to understand the body's ability to heal itself grew into a thriving business serving hundreds of clients across Polokwane and beyond.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                We believe that wellness should be accessible, personal, and transformative. That's why we offer both home-based and mobile services — bringing the full spa experience directly to you.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                From therapeutic massages to luxurious facials, every treatment is designed with one goal: to help you feel completely renewed.
              </p>
              <div className="flex gap-8 mt-8">
                <div>
                  <p className="font-heading text-3xl font-bold text-primary">500+</p>
                  <p className="font-body text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-primary">8+</p>
                  <p className="font-body text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-primary">5★</p>
                  <p className="font-body text-sm text-muted-foreground">Client Rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">What Drives Us</p>
            <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground mb-4">Our Mission & Values</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              To provide exceptional, personalised wellness experiences that nurture the body, calm the mind, and uplift the spirit.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v) => (
              <Card key={v.title} className="border-none shadow-sm rounded-2xl text-center">
                <CardContent className="p-7">
                  <div className="w-14 h-14 rounded-full bg-soft-pink flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="text-center mb-14">
            <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">The Team</p>
            <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground">Meet Our Therapists</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="border-none shadow-md rounded-2xl overflow-hidden group">
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-5 text-center">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="font-body text-primary text-sm mb-3">{member.role}</p>
                  <p className="font-body text-muted-foreground text-xs leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 text-center max-w-2xl mx-auto">
          <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">Visit Us</h2>
          <p className="font-body text-muted-foreground mb-2">Based in Polokwane, 0609, South Africa</p>
          <p className="font-body text-muted-foreground mb-6">Home-based & mobile services available</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/packages">
              <Button className="rounded-full px-8" size="lg">View Packages</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="rounded-full px-8" size="lg">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
