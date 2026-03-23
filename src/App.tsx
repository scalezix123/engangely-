import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import OnboardingPage from "./pages/OnboardingPage";
import Dashboard from "./pages/Dashboard";
import ConnectWhatsApp from "./pages/ConnectWhatsApp";
import WalletPage from "./pages/WalletPage";
import ContactsPage from "./pages/ContactsPage";
import TemplatesPage from "./pages/TemplatesPage";
import CampaignsPage from "./pages/CampaignsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/connect" element={<ConnectWhatsApp />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
