import { useState, useRef } from "react";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const services = [
  "Swedish Massage", "Deep Tissue Massage", "Hot Stone Massage",
  "Facial", "Foot Spa", "Nails", "Waxing", "Cupping Therapy",
];

const packages = [
  "Stress Reset Package", "Luxury Body Renewal", "Mobile Executive Package",
];

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
];

const BookAppointment = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<Date>();
  const [error, setError] = useState<string | null>(null);
  
  // Create refs for form inputs
  const formRef = useRef<HTMLFormElement>(null);
  
  // State for form values (optional - you can also use the refs directly)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    package: '',
    time: '',
    serviceType: 'home',
    specialRequests: ''
  });

  // EmailJS credentials
  const publicKey = "QsaxgY-nPrzPyebB4";
  const serviceId = "service_pc71fbs";
  const templateId = "template_d40z34e";

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
  setLoading(true);
  setError(null);

  try {
    // Initialize EmailJS with your public key
    emailjs.init(publicKey);

    // Prepare template parameters - MATCHING YOUR TEMPLATE VARIABLES
    const templateParams = {
      // Client Information section
      full_name: formData.fullName,           // Matches {{full_name}}
      phone: formData.phone,                   // Matches {{phone}}
      email: formData.email,                    // Matches {{email}}
      
      // Service Details section
      service: formData.service,                // Matches {{service}}
      package: formData.package || 'None selected', // Matches {{package}}
      
      // Appointment Details section
      appointment_date: date ? format(date, "PPP") : 'Not selected', // Matches {{appointment_date}}
      preferred_time: formData.time,            // Matches {{preferred_time}}
      service_type: formData.serviceType === 'home' ? 'Home-Based' : 'Mobile Service', // Matches {{service_type}}
      
      // Special Requests section
      special_requests: formData.specialRequests || 'None', // Matches {{special_requests}}
      
      // Additional fields
      submission_time: new Date().toLocaleString(), // Matches {{submission_time}}
      
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
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Booking Confirmed!</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Thank you for booking with TumieHazel Massage Therapy. We will contact you shortly to confirm your appointment.
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
        <div className="container px-4 max-w-2xl">
          <div className="text-center mb-12">
            <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">Appointments</p>
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-3">
              Book Your Appointment
            </h1>
            <p className="font-body text-muted-foreground">Select your treatment and preferred time.</p>
          </div>

          <Card className="rounded-2xl border-none shadow-lg">
            <CardContent className="p-6 md:p-10">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
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

                {/* Phone & Email */}
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

                {/* Service */}
                <div className="space-y-2">
                  <Label className="font-body" htmlFor="service">Service</Label>
                  <Select 
                    onValueChange={(value) => handleSelectChange('service', value)}
                    value={formData.service}
                    required
                  >
                    <SelectTrigger className="rounded-lg" id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Package */}
                <div className="space-y-2">
                  <Label className="font-body" htmlFor="package">Package (Optional)</Label>
                  <Select onValueChange={(value) => handleSelectChange('package', value)}>
                    <SelectTrigger className="rounded-lg" id="package">
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      {packages.map((p) => (
                        <SelectItem key={p} value={p}>{p}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="font-body">Appointment Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full justify-start text-left font-normal rounded-lg", !date && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(d) => d < new Date()}
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
                        {timeSlots.map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
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
                      <RadioGroupItem value="home" id="home" />
                      <Label htmlFor="home" className="font-body cursor-pointer">Home-Based</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mobile" id="mobile" />
                      <Label htmlFor="mobile" className="font-body cursor-pointer">Mobile Service</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Special Requests */}
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
                  <p className="font-heading text-sm font-semibold text-foreground mb-2">Important Notes:</p>
                  <ul className="font-body text-xs text-muted-foreground space-y-1">
                    <li>• Limited slots available daily</li>
                    <li>• Deposit may be required to confirm booking</li>
                    <li>• Mobile services may cost slightly more depending on location</li>
                  </ul>
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="rounded-full w-full text-base"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Confirm Booking'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookAppointment;