import { Switch, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WaterBackground } from "@/components/WaterBackground";
import NotFound from "@/pages/not-found";

// Location Pages
import ColoradoPage from "@/pages/Colorado";
import TexasPage from "@/pages/TexasNew";
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
import USAPage from "@/pages/USA";

// Industry Pages
import DataCentersPage from "@/pages/industries/DataCenters";
import HotelsPage from "@/pages/industries/Hotels";
import CarWashesPage from "@/pages/industries/CarWashes";
import MultifamilyPage from "@/pages/industries/Multifamily";
import HospitalsPage from "@/pages/industries/Hospitals";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Locations */}
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
      <Route path="/locations/usa" component={USAPage} />
      <Route path="/locations/usa/" component={USAPage} />

      {/* Industries — served under /locations/industries/ */}
      <Route path="/locations/industries/data-centers" component={DataCentersPage} />
      <Route path="/locations/industries/data-centers/" component={DataCentersPage} />
      <Route path="/locations/industries/hotels" component={HotelsPage} />
      <Route path="/locations/industries/hotels/" component={HotelsPage} />
      <Route path="/locations/industries/car-washes" component={CarWashesPage} />
      <Route path="/locations/industries/car-washes/" component={CarWashesPage} />
      <Route path="/locations/industries/multifamily" component={MultifamilyPage} />
      <Route path="/locations/industries/multifamily/" component={MultifamilyPage} />
      <Route path="/locations/industries/hospitals" component={HospitalsPage} />
      <Route path="/locations/industries/hospitals/" component={HospitalsPage} />

      {/* Location index / fallbacks */}
      <Route path="/locations" component={USAPage} />
      <Route path="/locations/" component={ColoradoPage} />
      <Route path="/colorado" component={ColoradoPage} />
      <Route path="/colorado/" component={ColoradoPage} />
      <Route path="/texas" component={TexasPage} />
      <Route path="/texas/" component={TexasPage} />

      {/* Default */}
      <Route path="/" component={ColoradoPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WaterBackground />
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
