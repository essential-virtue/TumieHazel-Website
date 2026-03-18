import aboutImage from "@/assets/about-spa.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={aboutImage} alt="TumieHazel spa treatment room" className="w-full h-80 md:h-[28rem] object-cover" />
          </div>
          <div>
            <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">About Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Your Wellness Journey Starts Here
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              TumieHazel Massage Therapy provides relaxing and therapeutic treatments designed to help clients relieve stress and improve overall wellness.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Services are available both home-based and through mobile bookings, bringing the full spa experience to your comfort zone.
            </p>
            <div className="flex gap-8 mt-8">
              <div>
                <p className="font-heading text-3xl font-bold text-primary">500+</p>
                <p className="font-body text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-primary">6+</p>
                <p className="font-body text-sm text-muted-foreground">Services</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-primary">5★</p>
                <p className="font-body text-sm text-muted-foreground">Rated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
