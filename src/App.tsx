import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookAppointment from "./pages/BookAppointment";
import Gallery from "./pages/Gallery";
import SundaySpecials from "./pages/SundaySpecials";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ServiceDetail from "./pages/ServiceDetail";
import Packages from "./pages/Packages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sunday-specials" element={<SundaySpecials />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
