import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// Core pages
import Results from "@/pages/Results";
import Impact from "@/pages/Impact";
import Savings from "@/pages/Savings";

// Location pages
import USAPage from "@/pages/USA";
import ColoradoPage from "@/pages/Colorado";
import TexasPage from "@/pages/Texas";
import CaliforniaPage from "@/pages/California";
import ArizonaPage from "@/pages/Arizona";
import NevadaPage from "@/pages/Nevada";
import NewYorkPage from "@/pages/NewYork";
import WashingtonPage from "@/pages/Washington";
import OregonPage from "@/pages/Oregon";
import IllinoisPage from "@/pages/Illinois";
import FloridaPage from "@/pages/Florida";
import UtahPage from "@/pages/Utah";
import IdahoPage from "@/pages/Idaho";
import MontanaPage from "@/pages/Montana";
import NebraskaPage from "@/pages/Nebraska";
import KansasPage from "@/pages/Kansas";
import NewMexicoPage from "@/pages/NewMexico";
import UKPage from "@/pages/UnitedKingdom";

// Info sheet
import InfoSheet from "@/pages/InfoSheet";

// Industry pages
import IndustriesHub from "@/pages/Industries";
import DataCentersPage from "@/pages/industries/DataCenters";
import HotelsPage from "@/pages/industries/Hotels";
import CarWashesPage from "@/pages/industries/CarWashes";
import MultifamilyPage from "@/pages/industries/Multifamily";
import HospitalsPage from "@/pages/industries/Hospitals";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Home */}
      <Route path="/" component={Home} />

      {/* Info sheet */}
      <Route path="/infosheet" component={InfoSheet} />
      <Route path="/infosheet/" component={InfoSheet} />

      {/* Core pages */}
      <Route path="/results" component={Results} />
      <Route path="/results/" component={Results} />
      <Route path="/impact" component={Impact} />
      <Route path="/impact/" component={Impact} />
      <Route path="/savings" component={Savings} />
      <Route path="/savings/" component={Savings} />

      {/* Location pages */}
      <Route path="/locations/usa" component={USAPage} />
      <Route path="/locations/usa/" component={USAPage} />
      <Route path="/locations/colorado" component={ColoradoPage} />
      <Route path="/locations/colorado/" component={ColoradoPage} />
      <Route path="/locations/texas" component={TexasPage} />
      <Route path="/locations/texas/" component={TexasPage} />
      <Route path="/locations/california" component={CaliforniaPage} />
      <Route path="/locations/california/" component={CaliforniaPage} />
      <Route path="/locations/arizona" component={ArizonaPage} />
      <Route path="/locations/arizona/" component={ArizonaPage} />
      <Route path="/locations/nevada" component={NevadaPage} />
      <Route path="/locations/nevada/" component={NevadaPage} />
      <Route path="/locations/new-york" component={NewYorkPage} />
      <Route path="/locations/new-york/" component={NewYorkPage} />
      <Route path="/locations/washington" component={WashingtonPage} />
      <Route path="/locations/washington/" component={WashingtonPage} />
      <Route path="/locations/oregon" component={OregonPage} />
      <Route path="/locations/oregon/" component={OregonPage} />
      <Route path="/locations/illinois" component={IllinoisPage} />
      <Route path="/locations/illinois/" component={IllinoisPage} />
      <Route path="/locations/florida" component={FloridaPage} />
      <Route path="/locations/florida/" component={FloridaPage} />
      <Route path="/locations/utah" component={UtahPage} />
      <Route path="/locations/utah/" component={UtahPage} />
      <Route path="/locations/idaho" component={IdahoPage} />
      <Route path="/locations/idaho/" component={IdahoPage} />
      <Route path="/locations/montana" component={MontanaPage} />
      <Route path="/locations/montana/" component={MontanaPage} />
      <Route path="/locations/nebraska" component={NebraskaPage} />
      <Route path="/locations/nebraska/" component={NebraskaPage} />
      <Route path="/locations/kansas" component={KansasPage} />
      <Route path="/locations/kansas/" component={KansasPage} />
      <Route path="/locations/new-mexico" component={NewMexicoPage} />
      <Route path="/locations/new-mexico/" component={NewMexicoPage} />
      <Route path="/locations/uk" component={UKPage} />
      <Route path="/locations/uk/" component={UKPage} />

      {/* Industries hub */}
      <Route path="/industries" component={IndustriesHub} />
      <Route path="/industries/" component={IndustriesHub} />

      {/* Industry pages */}
      <Route path="/industries/data-centers" component={DataCentersPage} />
      <Route path="/industries/data-centers/" component={DataCentersPage} />
      <Route path="/industries/hotels" component={HotelsPage} />
      <Route path="/industries/hotels/" component={HotelsPage} />
      <Route path="/industries/car-washes" component={CarWashesPage} />
      <Route path="/industries/car-washes/" component={CarWashesPage} />
      <Route path="/industries/multifamily" component={MultifamilyPage} />
      <Route path="/industries/multifamily/" component={MultifamilyPage} />
      <Route path="/industries/hospitals" component={HospitalsPage} />
      <Route path="/industries/hospitals/" component={HospitalsPage} />

      {/* Fallback */}
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
