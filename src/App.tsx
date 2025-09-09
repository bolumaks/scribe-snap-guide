import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Introduction from "./pages/docs/Introduction";
import Prerequisites from "./pages/docs/Prerequisites";
import NotFound from "./pages/NotFound";
import MobileApp from "./pages/docs/MobileApp";
import Backend from "./pages/docs/Backend";
import AdminPanel from "./pages/docs/AdminPanel";
import Support from "./pages/docs/Support";
import FAQs from "./pages/docs/FAQs";
import Rating from "./pages/docs/Rating";
import Contact from "./pages/docs/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/support" element={<Support />} />
          <Route path="/docs/faqs" element={<FAQs />} />
          <Route path="/docs/rating" element={<Rating />} />
          <Route path="/docs/contact" element={<Contact />} />
          {/* <Route path="/docs/prerequisites" element={<Prerequisites />} /> */}
          <Route path="/docs/mobile-app" element={<MobileApp />} />
          <Route path="/docs/backend" element={<Backend />} />
          <Route path="/docs/admin-panel" element={<AdminPanel />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
