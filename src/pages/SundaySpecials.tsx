import { useState, useRef } from "react";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle, Sparkles } from "lucide-react";
import emailjs from '@emailjs/browser';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

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

const sundayTimeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
];

const SundaySpecials = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<Date>();
  const [error, setError] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    time: '',
    serviceType: 'home',
    specialRequests: ''
  });

  // EmailJS credentials
  const publicKey = "QsaxgY-nPrzPyebB4";
  const serviceId = "service_pc71fbs";
  const templateId = "template_m22zi5j";

  const toggleService = (name: string) => {
    setSelectedServices((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  const isSunday = (d: Date) => d.getDay() !== 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that at least one service is selected
    if (selectedServices.length === 0) {
      setError('Please select at least one treatment');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Initialize EmailJS with your public key
      emailjs.init(publicKey);

      // Format selected services as a nice list
      const selectedServicesList = selectedServices.map(service => 
        `• ${service}`
      ).join('<br>');

      // Prepare template parameters - matching your template variables
      const templateParams = {
        // Client Information
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        
        // Appointment Details
        appointment_date: date ? format(date, "PPP") : 'Not selected',
        preferred_time: formData.time,
        service_type: formData.serviceType === 'home' ? 'Home-Based' : 'Mobile Service',
        
        // Selected Treatments
        selected_services: selectedServicesList || 'None selected',
        
        // Special Requests
        special_requests: formData.specialRequests || 'None',
        
        // Additional fields
        submission_time: new Date().toLocaleString(),
        
        // Reply-to for when you reply from email
        reply_to: formData.email,
      };

      console.log('Sending with params:', templateParams); // For debugging

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', result.text);
      
      // Show success message
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setError('Failed to send booking confirmation. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 flex items-center justify-center">
          <Card className="max-w-lg mx-auto rounded-2xl border-none shadow-lg">
            <CardContent className="p-12 text-center">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Sunday Special Booked!
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Thank you for booking a Sunday Special with TumieHazel Massage
                Therapy. We have sent a confirmation email to {formData.email}. We will contact you shortly to confirm your slot.
              </p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-body uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Sunday Only – Limited Slots
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-3">
              Massage On The Buffet
            </h1>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Treat yourself every Sunday with our special discounted wellness
              menu. Select as many treatments as you like!
            </p>
          </div>

          {/* Specials Menu */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
            {specials.map((s) => (
              <button
                key={s.name}
                type="button"
                onClick={() => toggleService(s.name)}
                className={cn(
                  "rounded-xl p-5 text-center transition-all border-2",
                  selectedServices.includes(s.name)
                    ? "border-primary bg-primary/10 shadow-md"
                    : "border-transparent bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md"
                )}
              >
                <p className="font-body text-sm text-foreground font-medium mb-1">
                  {s.name}
                </p>
                <p className="font-heading text-xl font-bold text-primary">
                  {s.price}
                </p>
              </button>
            ))}
          </div>

          {/* Booking Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl font-semibold text-foreground text-center mb-6">
              Book Your Sunday Slot
            </h2>
            <Card className="rounded-2xl border-none shadow-lg">
              <CardContent className="p-6 md:p-10">
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label className="font-body" htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Your full name"
                      required
                      className="rounded-lg"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="font-body" htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="072 000 0000"
                        required
                        className="rounded-lg"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-body" htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        required
                        className="rounded-lg"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Selected Services Summary */}
                  <div className="space-y-2">
                    <Label className="font-body">
                      Selected Treatments ({selectedServices.length})
                    </Label>
                    {selectedServices.length === 0 ? (
                      <p className="font-body text-sm text-muted-foreground italic">
                        Tap the treatment cards above to select
                      </p>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {selectedServices.map((s) => (
                          <span
                            key={s}
                            className="inline-flex items-center gap-1 bg-primary/10 text-primary font-body text-xs rounded-full px-3 py-1"
                          >
                            {s}
                            <button
                              type="button"
                              onClick={() => toggleService(s)}
                              className="ml-1 hover:text-destructive"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Date (Sundays only) & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="font-body">Sunday Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal rounded-lg",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Pick a Sunday"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(d) => d < new Date() || isSunday(d)}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label className="font-body" htmlFor="time">Preferred Time</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange('time', value)}
                        value={formData.time}
                        required
                      >
                        <SelectTrigger className="rounded-lg" id="time">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {sundayTimeSlots.map((t) => (
                            <SelectItem key={t} value={t}>
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Service Type */}
                  <div className="space-y-3">
                    <Label className="font-body">Service Type</Label>
                    <RadioGroup 
                      defaultValue="home" 
                      value={formData.serviceType}
                      onValueChange={handleRadioChange}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="home" id="s-home" />
                        <Label htmlFor="s-home" className="font-body cursor-pointer">
                          Home-Based
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mobile" id="s-mobile" />
                        <Label htmlFor="s-mobile" className="font-body cursor-pointer">
                          Mobile Service
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-body" htmlFor="specialRequests">Special Requests</Label>
                    <Textarea
                      id="specialRequests"
                      name="specialRequests"
                      placeholder="Any special requests or notes..."
                      className="rounded-lg min-h-[100px]"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Notice */}
                  <div className="bg-soft-pink rounded-xl p-4">
                    <p className="font-heading text-sm font-semibold text-foreground mb-2">
                      Sunday Special Notes:
                    </p>
                    <ul className="font-body text-xs text-muted-foreground space-y-1">
                      <li>• Available Sundays only – limited slots</li>
                      <li>• Special prices apply only on Sundays</li>
                      <li>• Multiple treatments can be combined</li>
                      <li>• Mobile services may cost slightly more</li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="rounded-full w-full text-base"
                    disabled={loading}
                  >
                    {loading ? 'Booking...' : 'Book Sunday Special'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SundaySpecials;