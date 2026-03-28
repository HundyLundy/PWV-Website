import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/Home";
import TexasPage from "@/pages/Texas";
import NotFound from "@/pages/not-found";
import { WaterBackground } from "@/components/WaterBackground";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/colorado" component={HomePage} />
      <Route path="/colorado/" component={HomePage} />
      <Route path="/texas" component={TexasPage} />
      <Route path="/texas/" component={TexasPage} />
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const base = import.meta.env.BASE_URL ? import.meta.env.BASE_URL.replace(/\/$/, "") : "";
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WaterBackground />
        <WouterRouter base={base}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
