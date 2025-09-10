import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
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
import AdminShipmentDetail from "./pages/admin/AdminShipmentDetail";
import AdminEditShipment from "./pages/admin/AdminEditShipment";
import AdminClients from "./pages/admin/AdminClients";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { Language } from "@/types/language";

const queryClient = new QueryClient();

const LanguageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang } = useParams<{ lang: string }>();
  
  return (
    <LanguageProvider initialLanguage={lang as Language}>
      <AuthProvider>
        <Toaster />
        <Sonner />
        {children}
      </AuthProvider>
    </LanguageProvider>
  );
};

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Redirect root to default language */}
          <Route path="/" element={<Navigate to="/fr" replace />} />
          
          {/* Admin Routes - no language prefix needed */}
          <Route path="/admin" element={
            <LanguageProvider>
              <AuthProvider>
                <AdminLayout><AdminDashboard /></AdminLayout>
              </AuthProvider>
            </LanguageProvider>
          } />
          <Route path="/admin/shipments" element={
            <LanguageProvider>
              <AuthProvider>
                <AdminLayout><AdminShipments /></AdminLayout>
              </AuthProvider>
            </LanguageProvider>
          } />
          <Route path="/admin/shipments/:id" element={
            <LanguageProvider>
              <AuthProvider>
                <AdminLayout><AdminShipmentDetail /></AdminLayout>
              </AuthProvider>
            </LanguageProvider>
          } />
          <Route path="/admin/new-shipment" element={
            <LanguageProvider>
              <AuthProvider>
                <AdminLayout><AdminNewShipment /></AdminLayout>
              </AuthProvider>
            </LanguageProvider>
          } />
          <Route path="/admin/shipments/:id/edit" element={
            <LanguageProvider>
              <AuthProvider>
                <AdminLayout><AdminEditShipment /></AdminLayout>
              </AuthProvider>
            </LanguageProvider>
          } />
          <Route path="/admin/clients" element={
            <LanguageProvider>
              <AuthProvider>
                <AdminLayout><AdminClients /></AdminLayout>
              </AuthProvider>
            </LanguageProvider>
          } />
          
          {/* Language-specific routes */}
          <Route path="/:lang" element={
            <LanguageWrapper>
              <PageLayout>
                <Home />
              </PageLayout>
            </LanguageWrapper>
          } />
          <Route path="/:lang/about" element={
            <LanguageWrapper>
              <PageLayout>
                <About />
              </PageLayout>
            </LanguageWrapper>
          } />
          <Route path="/:lang/services" element={
            <LanguageWrapper>
              <PageLayout>
                <Services />
              </PageLayout>
            </LanguageWrapper>
          } />
          <Route path="/:lang/services/road-transport" element={
            <LanguageWrapper>
              <PageLayout>
                <RoadTransport />
              </PageLayout>
            </LanguageWrapper>
          } />
          <Route path="/:lang/services/air-transport" element={
            <LanguageWrapper>
              <PageLayout>
                <AirTransport />
              </PageLayout>
            </LanguageWrapper>
          } />
          <Route path="/:lang/services/sea-transport" element={
            <LanguageWrapper>
              <PageLayout>
                <SeaTransport />
              </PageLayout>
            </LanguageWrapper>
          } />
          <Route path="/:lang/services/express" element={
            <LanguageWrapper>
              <PageLayout>
                <Express />
              </PageLayout>
            </LanguageWrapper>
          } />
          <Route path="/:lang/services/custom" element={
            <LanguageWrapper>
              <PageLayout>
                <Custom />
              </PageLayout>
            </LanguageWrapper>
          } />
          <Route path="/:lang/contact" element={
            <LanguageWrapper>
              <PageLayout>
                <Contact />
              </PageLayout>
            </LanguageWrapper>
          } />
          <Route path="/:lang/tracking" element={
            <LanguageWrapper>
              <PageLayout>
                <Tracking />
              </PageLayout>
            </LanguageWrapper>
          } />
          <Route path="/:lang/auth" element={
            <LanguageWrapper>
              <PageLayout>
                <Auth />
              </PageLayout>
            </LanguageWrapper>
          } />
          <Route path="/:lang/dashboard" element={
            <LanguageWrapper>
              <PageLayout>
                <Dashboard />
              </PageLayout>
            </LanguageWrapper>
          } />
          <Route path="/:lang/new-shipment" element={
            <LanguageWrapper>
              <PageLayout>
                <NewShipment />
              </PageLayout>
            </LanguageWrapper>
          } />
          <Route path="/:lang/admin-secret" element={
            <LanguageProvider>
              <AuthProvider>
                <AdminLayout><AdminDashboard /></AdminLayout>
              </AuthProvider>
            </LanguageProvider>
          } />
          <Route path="*" element={
            <LanguageProvider>
              <AuthProvider>
                <PageLayout>
                  <NotFound />
                </PageLayout>
              </AuthProvider>
            </LanguageProvider>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;