import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";
import Index from "./pages/Index";
import Surveys from "./pages/Surveys";
import BusinessDashboard from "./pages/BusinessDashboard";
import CreateSurvey from "./pages/CreateSurvey";
import TakeSurvey from "./pages/TakeSurvey";
import Profile from "./pages/Profile";
import SurveyResults from "./pages/SurveyResults";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/surveys" element={<Surveys />} />
                  <Route path="/survey/:id" element={<TakeSurvey />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/business" element={<BusinessDashboard />} />
                  <Route path="/business/create" element={<CreateSurvey />} />
                  <Route path="/business/results/:id" element={<SurveyResults />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
