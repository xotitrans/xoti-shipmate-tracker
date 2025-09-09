import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdminLayout } from "@/layouts/AdminLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Tracking from "./pages/Tracking";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NewShipment from "./pages/NewShipment";
import RoadTransport from "./pages/services/RoadTransport";
import AirTransport from "./pages/services/AirTransport";
import SeaTransport from "./pages/services/SeaTransport";
import Express from "./pages/services/Express";
import Custom from "./pages/services/Custom";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminShipments from "./pages/admin/AdminShipments";
import AdminNewShipment from "./pages/admin/AdminNewShipment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Admin Routes with AdminLayout */}
              <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
              <Route path="/admin/shipments" element={<AdminLayout><AdminShipments /></AdminLayout>} />
              <Route path="/admin/new-shipment" element={<AdminLayout><AdminNewShipment /></AdminLayout>} />
              
              {/* Public Routes with Header/Footer */}
              <Route path="/*" element={
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-1">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/services/road-transport" element={<RoadTransport />} />
                      <Route path="/services/air-transport" element={<AirTransport />} />
                      <Route path="/services/sea-transport" element={<SeaTransport />} />
                      <Route path="/services/express" element={<Express />} />
                      <Route path="/services/custom" element={<Custom />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/tracking" element={<Tracking />} />
                      <Route path="/auth" element={<Auth />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/new-shipment" element={<NewShipment />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              } />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
