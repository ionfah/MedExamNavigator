import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import CategoryPage from "@/pages/Category";
import NotFound from "@/pages/not-found";
import WarningBanner from "@/components/WarningBanner";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/category/:slug" component={CategoryPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isMobileMenuOpen) {
      body.classList.add('mobile-menu-open');
    } else {
      body.classList.remove('mobile-menu-open');
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="bg-light min-h-screen flex flex-col">
          <WarningBanner />
          <div className="flex flex-col lg:flex-row flex-grow relative">
            <Router />
          </div>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
