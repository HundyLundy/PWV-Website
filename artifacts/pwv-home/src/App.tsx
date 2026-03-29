import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ColoradoPage from "@/pages/ColoradoPage";
import TexasPage from "@/pages/TexasPage";
import CaseStudiesPage from "@/pages/CaseStudiesPage";
import CalculatorPage from "@/pages/CalculatorPage";
import ProposalPage from "@/pages/ProposalPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/colorado" component={ColoradoPage} />
      <Route path="/texas" component={TexasPage} />
      <Route path="/case-studies" component={CaseStudiesPage} />
      <Route path="/calculator" component={CalculatorPage} />
      <Route path="/proposal" component={ProposalPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
