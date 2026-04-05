import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// Blog
import BlogPage from "@/pages/Blog";
import WaterRates2025 from "@/pages/blog/WaterRates2025";
import AmazonYYZ3 from "@/pages/blog/AmazonYYZ3";
import DenverRebate from "@/pages/blog/DenverRebate";
import HotelWaterSavings from "@/pages/blog/HotelWaterSavings";
import WhatIsSmartValve from "@/pages/blog/WhatIsSmartValve";

// Core pages
import Results from "@/pages/Results";
import Impact from "@/pages/Impact";
import Savings from "@/pages/Savings";
import CommonMisconceptions from "@/pages/CommonMisconceptions";
import PlumbingProtection from "@/pages/PlumbingProtection";
import Partners from "@/pages/Partners";
import Compare from "@/pages/Compare";

// Info sheet
import InfoSheet from "@/pages/InfoSheet";

// Location pages — existing
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

// Location pages — new state pages
import AlabamaPage from "@/pages/Alabama";
import AlaskaPage from "@/pages/Alaska";
import ArkansasPage from "@/pages/Arkansas";
import ConnecticutPage from "@/pages/Connecticut";
import DelawarePage from "@/pages/Delaware";
import GeorgiaPage from "@/pages/Georgia";
import HawaiiPage from "@/pages/Hawaii";
import IndianaPage from "@/pages/Indiana";
import IowaPage from "@/pages/Iowa";
import KentuckyPage from "@/pages/Kentucky";
import LouisianaPage from "@/pages/Louisiana";
import MainePage from "@/pages/Maine";
import MarylandPage from "@/pages/Maryland";
import MassachusettsPage from "@/pages/Massachusetts";
import MichiganPage from "@/pages/Michigan";
import MinnesotaPage from "@/pages/Minnesota";
import MississippiPage from "@/pages/Mississippi";
import MissouriPage from "@/pages/Missouri";
import NewHampshirePage from "@/pages/NewHampshire";
import NewJerseyPage from "@/pages/NewJersey";
import NorthCarolinaPage from "@/pages/NorthCarolina";
import NorthDakotaPage from "@/pages/NorthDakota";
import OhioPage from "@/pages/Ohio";
import OklahomaPage from "@/pages/Oklahoma";
import PennsylvaniaPage from "@/pages/Pennsylvania";
import RhodeIslandPage from "@/pages/RhodeIsland";
import SouthCarolinaPage from "@/pages/SouthCarolina";
import SouthDakotaPage from "@/pages/SouthDakota";
import TennesseePage from "@/pages/Tennessee";
import VermontPage from "@/pages/Vermont";
import VirginiaPage from "@/pages/Virginia";
import WestVirginiaPage from "@/pages/WestVirginia";
import WisconsinPage from "@/pages/Wisconsin";
import WyomingPage from "@/pages/Wyoming";

// Colorado city pages
import DenverPage from "@/pages/Denver";
import ColoradoSpringsPage from "@/pages/ColoradoSprings";
import AuroraPage from "@/pages/Aurora";
import FortCollinsPage from "@/pages/FortCollins";
import LakewoodPage from "@/pages/Lakewood";
import BoulderPage from "@/pages/Boulder";
import PuebloPage from "@/pages/Pueblo";
import LovelandPage from "@/pages/Loveland";
import GreeleyPage from "@/pages/Greeley";
import ArvadaPage from "@/pages/Arvada";

// International pages
import EuropePage from "@/pages/Europe";
import AsiaPage from "@/pages/Asia";

// Industry pages
import IndustriesHub from "@/pages/Industries";
import DataCentersPage from "@/pages/industries/DataCenters";
import HotelsPage from "@/pages/industries/Hotels";
import CarWashesPage from "@/pages/industries/CarWashes";
import MultifamilyPage from "@/pages/industries/Multifamily";
import HospitalsPage from "@/pages/industries/Hospitals";
import GolfCoursesPage from "@/pages/industries/GolfCourses";

// Data center sub-pages
import DataCenterCoolingCostsPage from "@/pages/DataCenterCoolingCosts";
import HyperscaleROIPage from "@/pages/HyperscaleROI";
import DataCenterWUEPage from "@/pages/DataCenterWUE";

// Hotels sub-pages
import HotelsWaterCostsPage from "@/pages/HotelsWaterCosts";
import HotelsLaundryCoolingPage from "@/pages/HotelsLaundryCooling";
import HotelsGreenCertificationPage from "@/pages/HotelsGreenCertification";

// Hospitals sub-pages
import HospitalsWaterCostsPage from "@/pages/HospitalsWaterCosts";
import HospitalsLegionellaPage from "@/pages/HospitalsLegionella";
import HospitalsSterileWaterPage from "@/pages/HospitalsSterileWater";

// Car washes sub-pages
import CarWashesWaterCostsPage from "@/pages/CarWashesWaterCosts";
import CarWashesHardWaterPage from "@/pages/CarWashesHardWater";

// Multifamily sub-pages
import MultifamilyWaterCostsPage from "@/pages/MultifamilyWaterCosts";
import MultifamilyIrrigationPage from "@/pages/MultifamilyIrrigation";

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
      <Route path="/common-misconceptions" component={CommonMisconceptions} />
      <Route path="/common-misconceptions/" component={CommonMisconceptions} />
      <Route path="/benefits/plumbing-protection" component={PlumbingProtection} />
      <Route path="/benefits/plumbing-protection/" component={PlumbingProtection} />
      <Route path="/partners" component={Partners} />
      <Route path="/partners/" component={Partners} />
      <Route path="/compare" component={Compare} />
      <Route path="/compare/" component={Compare} />
      <Route path="/impact" component={Impact} />
      <Route path="/impact/" component={Impact} />
      <Route path="/savings" component={Savings} />
      <Route path="/savings/" component={Savings} />

      {/* Location pages — existing */}
      <Route path="/locations" component={USAPage} />
      <Route path="/locations/" component={USAPage} />
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

      {/* Location pages — new state pages */}
      <Route path="/locations/alabama" component={AlabamaPage} />
      <Route path="/locations/alabama/" component={AlabamaPage} />
      <Route path="/locations/alaska" component={AlaskaPage} />
      <Route path="/locations/alaska/" component={AlaskaPage} />
      <Route path="/locations/arkansas" component={ArkansasPage} />
      <Route path="/locations/arkansas/" component={ArkansasPage} />
      <Route path="/locations/connecticut" component={ConnecticutPage} />
      <Route path="/locations/connecticut/" component={ConnecticutPage} />
      <Route path="/locations/delaware" component={DelawarePage} />
      <Route path="/locations/delaware/" component={DelawarePage} />
      <Route path="/locations/georgia" component={GeorgiaPage} />
      <Route path="/locations/georgia/" component={GeorgiaPage} />
      <Route path="/locations/hawaii" component={HawaiiPage} />
      <Route path="/locations/hawaii/" component={HawaiiPage} />
      <Route path="/locations/indiana" component={IndianaPage} />
      <Route path="/locations/indiana/" component={IndianaPage} />
      <Route path="/locations/iowa" component={IowaPage} />
      <Route path="/locations/iowa/" component={IowaPage} />
      <Route path="/locations/kentucky" component={KentuckyPage} />
      <Route path="/locations/kentucky/" component={KentuckyPage} />
      <Route path="/locations/louisiana" component={LouisianaPage} />
      <Route path="/locations/louisiana/" component={LouisianaPage} />
      <Route path="/locations/maine" component={MainePage} />
      <Route path="/locations/maine/" component={MainePage} />
      <Route path="/locations/maryland" component={MarylandPage} />
      <Route path="/locations/maryland/" component={MarylandPage} />
      <Route path="/locations/massachusetts" component={MassachusettsPage} />
      <Route path="/locations/massachusetts/" component={MassachusettsPage} />
      <Route path="/locations/michigan" component={MichiganPage} />
      <Route path="/locations/michigan/" component={MichiganPage} />
      <Route path="/locations/minnesota" component={MinnesotaPage} />
      <Route path="/locations/minnesota/" component={MinnesotaPage} />
      <Route path="/locations/mississippi" component={MississippiPage} />
      <Route path="/locations/mississippi/" component={MississippiPage} />
      <Route path="/locations/missouri" component={MissouriPage} />
      <Route path="/locations/missouri/" component={MissouriPage} />
      <Route path="/locations/new-hampshire" component={NewHampshirePage} />
      <Route path="/locations/new-hampshire/" component={NewHampshirePage} />
      <Route path="/locations/new-jersey" component={NewJerseyPage} />
      <Route path="/locations/new-jersey/" component={NewJerseyPage} />
      <Route path="/locations/north-carolina" component={NorthCarolinaPage} />
      <Route path="/locations/north-carolina/" component={NorthCarolinaPage} />
      <Route path="/locations/north-dakota" component={NorthDakotaPage} />
      <Route path="/locations/north-dakota/" component={NorthDakotaPage} />
      <Route path="/locations/ohio" component={OhioPage} />
      <Route path="/locations/ohio/" component={OhioPage} />
      <Route path="/locations/oklahoma" component={OklahomaPage} />
      <Route path="/locations/oklahoma/" component={OklahomaPage} />
      <Route path="/locations/pennsylvania" component={PennsylvaniaPage} />
      <Route path="/locations/pennsylvania/" component={PennsylvaniaPage} />
      <Route path="/locations/rhode-island" component={RhodeIslandPage} />
      <Route path="/locations/rhode-island/" component={RhodeIslandPage} />
      <Route path="/locations/south-carolina" component={SouthCarolinaPage} />
      <Route path="/locations/south-carolina/" component={SouthCarolinaPage} />
      <Route path="/locations/south-dakota" component={SouthDakotaPage} />
      <Route path="/locations/south-dakota/" component={SouthDakotaPage} />
      <Route path="/locations/tennessee" component={TennesseePage} />
      <Route path="/locations/tennessee/" component={TennesseePage} />
      <Route path="/locations/vermont" component={VermontPage} />
      <Route path="/locations/vermont/" component={VermontPage} />
      <Route path="/locations/virginia" component={VirginiaPage} />
      <Route path="/locations/virginia/" component={VirginiaPage} />
      <Route path="/locations/west-virginia" component={WestVirginiaPage} />
      <Route path="/locations/west-virginia/" component={WestVirginiaPage} />
      <Route path="/locations/wisconsin" component={WisconsinPage} />
      <Route path="/locations/wisconsin/" component={WisconsinPage} />
      <Route path="/locations/wyoming" component={WyomingPage} />
      <Route path="/locations/wyoming/" component={WyomingPage} />

      {/* Colorado city pages */}
      <Route path="/locations/colorado/denver" component={DenverPage} />
      <Route path="/locations/colorado/denver/" component={DenverPage} />
      <Route path="/locations/colorado/colorado-springs" component={ColoradoSpringsPage} />
      <Route path="/locations/colorado/colorado-springs/" component={ColoradoSpringsPage} />
      <Route path="/locations/colorado/aurora" component={AuroraPage} />
      <Route path="/locations/colorado/aurora/" component={AuroraPage} />
      <Route path="/locations/colorado/fort-collins" component={FortCollinsPage} />
      <Route path="/locations/colorado/fort-collins/" component={FortCollinsPage} />
      <Route path="/locations/colorado/lakewood" component={LakewoodPage} />
      <Route path="/locations/colorado/lakewood/" component={LakewoodPage} />
      <Route path="/locations/colorado/boulder" component={BoulderPage} />
      <Route path="/locations/colorado/boulder/" component={BoulderPage} />
      <Route path="/locations/colorado/pueblo" component={PuebloPage} />
      <Route path="/locations/colorado/pueblo/" component={PuebloPage} />
      <Route path="/locations/colorado/loveland" component={LovelandPage} />
      <Route path="/locations/colorado/loveland/" component={LovelandPage} />
      <Route path="/locations/colorado/greeley" component={GreeleyPage} />
      <Route path="/locations/colorado/greeley/" component={GreeleyPage} />
      <Route path="/locations/colorado/arvada" component={ArvadaPage} />
      <Route path="/locations/colorado/arvada/" component={ArvadaPage} />

      {/* International pages */}
      <Route path="/locations/europe" component={EuropePage} />
      <Route path="/locations/europe/" component={EuropePage} />
      <Route path="/locations/asia" component={AsiaPage} />
      <Route path="/locations/asia/" component={AsiaPage} />

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
      <Route path="/industries/golf-courses" component={GolfCoursesPage} />
      <Route path="/industries/golf-courses/" component={GolfCoursesPage} />

      {/* Data center sub-pages */}
      <Route path="/industries/data-centers/cooling-water-costs" component={DataCenterCoolingCostsPage} />
      <Route path="/industries/data-centers/cooling-water-costs/" component={DataCenterCoolingCostsPage} />
      <Route path="/industries/data-centers/hyperscale-roi" component={HyperscaleROIPage} />
      <Route path="/industries/data-centers/hyperscale-roi/" component={HyperscaleROIPage} />
      <Route path="/industries/data-centers/wue-regulatory-risk" component={DataCenterWUEPage} />
      <Route path="/industries/data-centers/wue-regulatory-risk/" component={DataCenterWUEPage} />

      {/* Hotels sub-pages */}
      <Route path="/industries/hotels/water-costs" component={HotelsWaterCostsPage} />
      <Route path="/industries/hotels/water-costs/" component={HotelsWaterCostsPage} />
      <Route path="/industries/hotels/laundry-cooling-towers" component={HotelsLaundryCoolingPage} />
      <Route path="/industries/hotels/laundry-cooling-towers/" component={HotelsLaundryCoolingPage} />
      <Route path="/industries/hotels/green-certification" component={HotelsGreenCertificationPage} />
      <Route path="/industries/hotels/green-certification/" component={HotelsGreenCertificationPage} />

      {/* Hospitals sub-pages */}
      <Route path="/industries/hospitals/water-costs" component={HospitalsWaterCostsPage} />
      <Route path="/industries/hospitals/water-costs/" component={HospitalsWaterCostsPage} />
      <Route path="/industries/hospitals/legionella-biofilm-risk" component={HospitalsLegionellaPage} />
      <Route path="/industries/hospitals/legionella-biofilm-risk/" component={HospitalsLegionellaPage} />
      <Route path="/industries/hospitals/sterile-water-compliance" component={HospitalsSterileWaterPage} />
      <Route path="/industries/hospitals/sterile-water-compliance/" component={HospitalsSterileWaterPage} />

      {/* Car washes sub-pages */}
      <Route path="/industries/car-washes/water-costs" component={CarWashesWaterCostsPage} />
      <Route path="/industries/car-washes/water-costs/" component={CarWashesWaterCostsPage} />
      <Route path="/industries/car-washes/hard-water-equipment" component={CarWashesHardWaterPage} />
      <Route path="/industries/car-washes/hard-water-equipment/" component={CarWashesHardWaterPage} />

      {/* Multifamily sub-pages */}
      <Route path="/industries/multifamily/water-costs" component={MultifamilyWaterCostsPage} />
      <Route path="/industries/multifamily/water-costs/" component={MultifamilyWaterCostsPage} />
      <Route path="/industries/multifamily/irrigation-common-areas" component={MultifamilyIrrigationPage} />
      <Route path="/industries/multifamily/irrigation-common-areas/" component={MultifamilyIrrigationPage} />

      {/* Blog */}
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/" component={BlogPage} />
      <Route path="/blog/commercial-water-rates-rising-2025" component={WaterRates2025} />
      <Route path="/blog/amazon-yyz3-case-study" component={AmazonYYZ3} />
      <Route path="/blog/denver-water-rebate-guide" component={DenverRebate} />
      <Route path="/blog/hotel-water-savings-guide" component={HotelWaterSavings} />
      <Route path="/blog/what-is-smart-valve" component={WhatIsSmartValve} />

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
