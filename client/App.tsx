import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <title>Equal Contribution Calculator - Fair Bill Splitting Made Easy</title>
        <meta name="description" content="Calculate who owes whom and how much with our advanced bill splitting calculator. Split expenses fairly among groups with optimized transfers. Free, fast, and secure." />
        <meta name="keywords" content="bill splitting, expense calculator, equal contribution, group expenses, bill split calculator, share expenses, money calculator, group bills" />
        <meta name="author" content="M.Mitra" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Equal Contribution Calculator - Fair Bill Splitting" />
        <meta property="og:description" content="Split bills fairly with our advanced calculator. Calculate who owes whom and minimize transfers needed." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Equal Contribution Calculator" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Equal Contribution Calculator" />
        <meta name="twitter:description" content="Fair bill splitting made easy with optimized transfer calculations" />
        <link rel="canonical" href="https://equal-contribution-calculator.com" />
      </Helmet>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
