import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    value: "+27 72 979 2181",
    href: "tel:+27729792181",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@tumiehazel.co.za",
    href: "mailto:info@tumiehazel.co.za",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Polokwane, 0609, South Africa",
    href: "https://www.google.com/maps/search/Polokwane+0609+South+Africa",
  },
  {
    icon: Clock,
    title: "Operating Hours",
    value: "Mon–Sat: 8AM – 6PM | Sun: By Appointment",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-secondary">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">
            A heaven for healing
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-5">
            Get In Touch
          </h1>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
            We'd love to hear from you. — Reach out to book a session or ask any questions.
          </p>
        </div>
      </section>

      {/* Contact Cards - Now in a 2x2 grid above */}
      <section className="py-16">
        <div className="container px-4">

          {/* Map and Contact Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Left side - Contact Information Card */}
            <Card className="border-border h-full">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground mb-1">Phone / WhatsApp</h3>
                      <a 
                        href="tel:+27729792181" 
                        className="font-body text-muted-foreground hover:text-primary transition-colors"
                      >
                        +27 72 979 2181
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground mb-1">Email</h3>
                      <a 
                        href="mailto:bookings@tumiehazelmassage.co.za" 
                        className="font-body text-muted-foreground hover:text-primary transition-colors"
                      >
                        bookings@tumiehazelmassage.co.za
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground mb-1">Address</h3>
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=24A+Rissik+St+Polokwane+Central+Polokwane+0700"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-muted-foreground hover:text-primary transition-colors"
                      >
                        24A Rissik St, Polokwane Central, Polokwane, 0700
                      </a>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground mb-1">Operating Hours</h3>
                      <p className="font-body text-muted-foreground">
                        Mon–Sat: 8AM – 6PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="font-body text-sm text-muted-foreground">
                      Prefer to book online? Select a{' '}
                      <a href="/packages" className="text-primary hover:underline">
                        package
                      </a>
                      {' '} or a{' '}
                      <a href="/services" className="text-primary hover:underline">
                        service
                      </a>
                      {' '} to schedule your appointment directly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right side - Map */}
            <div className="rounded-xl overflow-hidden border border-border shadow-sm min-h-[500px]">
              <iframe
                title="TumieHazel Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.6726000506196!2d29.451044475132207!3d-23.901796378567443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6d82fe5718b49%3A0x5a3e723b78511c9!2s24A%20Rissik%20St%2C%20Polokwane%20Central%2C%20Polokwane%2C%200700!5e1!3m2!1sen!2sza!4v1773220790017!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 500 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Add a Call to Action Section */}
      <section className="pb-16">
        <div className="container px-4">
          <Card className="max-w-3xl mx-auto border-border bg-secondary/50">
            <CardContent className="p-8 text-center">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Ready to Relax?
              </h2>
              <p className="font-body text-muted-foreground mb-6">
                Book your appointment today and experience the best massage therapy in Polokwane.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/services">View Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full ml-4">
                <Link to="/packages">View Packages</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
