import { createBrowserRouter } from "react-router";
console.log('✅ Step 1: react-router imported');

import Root, { RootErrorBoundary } from "./components/Root";
console.log('✅ Step 2: Root imported');

import Home from "./pages/Home";
console.log('✅ Step 3: Home imported');

import GameOverview from "./pages/GameOverview";
import HowToPlay from "./pages/HowToPlay";
import Items from "./pages/Items";
import Updates from "./pages/Updates";
import Guides from "./pages/Guides";
import FAQ from "./pages/FAQ";
import OurNetwork from "./pages/OurNetwork";
import Mechanics from "./pages/Mechanics";
import NotFound from "./pages/NotFound";
import Locations from "./pages/Locations";
console.log('✅ Step 4: Core pages imported');

// Fish Database pages
import FishDatabase from "./pages/FishDatabase";
import FishDetailPage from "./pages/FishDetailPage";
import LocationPage from "./pages/LocationPage";
import RaritiesHub from "./pages/RaritiesHub";
import RarityPage from "./pages/RarityPage";
import SecretFish from "./pages/SecretFish";
console.log('✅ Step 5: Fish pages imported');

// Fishing Rods pages
import FishingRods from "./pages/FishingRods";
import RodDetailPage from "./pages/RodDetailPage";
import RodTierList from "./pages/RodTierList";

// RNG Calculator
import RNGCalculator from "./pages/RNGCalculator";

// Create a test component
function TestComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">TEST COMPONENT WORKS!</h1>
        <p className="text-cyan-400">If you see this, routing is working fine.</p>
      </div>
    </div>
  );
}

// Update pages
import LavaBasinExpansion from "./pages/LavaBasinExpansion";

// Codes page
import Codes from "./pages/Codes";

// Guide pages
import FirstCatch from "./pages/guides/FirstCatch";
import UnderstandingInterface from "./pages/guides/UnderstandingInterface";
import BasicFishingTechniques from "./pages/guides/BasicFishingTechniques";
import FastestWayToProgress from "./pages/guides/FastestWayToProgress";
import EfficientResourceManagement from "./pages/guides/EfficientResourceManagement";
import UpgradePriority from "./pages/guides/UpgradePriority";
import MaximizingRewards from "./pages/guides/MaximizingRewards";
import AdvancedFishingTechniques from "./pages/guides/AdvancedFishingTechniques";
import RareFishHunting from "./pages/guides/RareFishHunting";
import OptimizationStrategies from "./pages/guides/OptimizationStrategies";
import EndGameContent from "./pages/guides/EndGameContent";
import CommonBeginnerMistakes from "./pages/guides/CommonBeginnerMistakes";
import ResourceWastePrevention from "./pages/guides/ResourceWastePrevention";
import InefficientPractices from "./pages/guides/InefficientPractices";
import WhatNotToDo from "./pages/guides/WhatNotToDo";

// Location wrapper components
import FishermanIsland from "./pages/locations/FishermanIsland";
import TheOcean from "./pages/locations/TheOcean";
import KohanaIsland from "./pages/locations/KohanaIsland";
import KohanaVolcano from "./pages/locations/KohanaVolcano";
import CoralReefIsland from "./pages/locations/CoralReefIsland";
import EsotericDepths from "./pages/locations/EsotericDepths";
import TropicalGrove from "./pages/locations/TropicalGrove";
import CraterIsland from "./pages/locations/CraterIsland";
import LostIsle from "./pages/locations/LostIsle";
import AncientJungle from "./pages/locations/AncientJungle";
import ClassicIsland from "./pages/locations/ClassicIsland";

// Rarity wrapper components
import CommonRarity from "./pages/rarities/CommonRarity";
import UncommonRarity from "./pages/rarities/UncommonRarity";
import RareRarity from "./pages/rarities/RareRarity";
import EpicRarity from "./pages/rarities/EpicRarity";
import LegendaryRarity from "./pages/rarities/LegendaryRarity";
import MythicRarity from "./pages/rarities/MythicRarity";
import SecretRarity from "./pages/rarities/SecretRarity";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ROUTES CONFIGURATION — BROWSER ROUTING FOR FIGMA PREVIEW
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Centralized routing configuration using React Router's Data Router API.
 * Uses BrowserRouter for compatibility with Figma Preview's preview-route parameter.
 * 
 * ROUTING STRATEGY:
 * - BrowserRouter (/page) for Figma Preview (uses ?preview-route=/page)
 * - Will work in Cloudflare Pages with proper _redirects file
 * 
 * HOW TO ADD NEW ROUTES:
 * 1. Import the page component at the top
 * 2. Add route object to the routeConfig array
 * 3. For nested routes, add to children array
 */

const routeConfig = [
  {
    path: "/",
    Component: Root,
    ErrorBoundary: RootErrorBoundary,
    children: [
      { index: true, Component: Home },
      { path: "overview", Component: GameOverview },
      { path: "how-to-play", Component: HowToPlay },
      { path: "items", Component: Items },
      { path: "mechanics", Component: Mechanics },
      { path: "updates", Component: Updates },
      { path: "guides", Component: Guides },
      { path: "faq", Component: FAQ },
      { path: "our-network", Component: OurNetwork },
      
      // Locations hub
      { path: "locations", Component: Locations },
      
      // Fish Database routes
      { path: "fish-database", Component: FishDatabase },
      { path: "fish/:slug", Component: FishDetailPage },
      
      // Location pages
      { path: "fish-database/fisherman-island", Component: FishermanIsland },
      { path: "fish-database/the-ocean", Component: TheOcean },
      { path: "fish-database/kohana-island", Component: KohanaIsland },
      { path: "fish-database/kohana-volcano", Component: KohanaVolcano },
      { path: "fish-database/coral-reef-island", Component: CoralReefIsland },
      { path: "fish-database/esoteric-depths", Component: EsotericDepths },
      { path: "fish-database/tropical-grove", Component: TropicalGrove },
      { path: "fish-database/crater-island", Component: CraterIsland },
      { path: "fish-database/lost-isle", Component: LostIsle },
      { path: "fish-database/ancient-jungle", Component: AncientJungle },
      { path: "fish-database/classic-island", Component: ClassicIsland },
      
      // Rarity pages
      { path: "rarities", Component: RaritiesHub },
      { path: "rarities/common", Component: CommonRarity },
      { path: "rarities/uncommon", Component: UncommonRarity },
      { path: "rarities/rare", Component: RareRarity },
      { path: "rarities/epic", Component: EpicRarity },
      { path: "rarities/legendary", Component: LegendaryRarity },
      { path: "rarities/mythic", Component: MythicRarity },
      { path: "rarities/secret", Component: SecretRarity },
      
      // Secret Fish page
      { path: "secret-fish", Component: SecretFish },
      
      // Fishing Rods routes
      { path: "fishing-rods", Component: FishingRods },
      { path: "fishing-rods/:slug", Component: RodDetailPage },
      
      // Rod Tier List
      { path: "rod-tier-list", Component: RodTierList },
      
      // RNG Calculator
      { path: "rng-calculator", Component: RNGCalculator },
      
      // Codes page
      { path: "codes", Component: Codes },
      
      // Update pages
      { path: "updates/lava-basin-expansion", Component: LavaBasinExpansion },
      
      // Guide pages
      { path: "guides/first-catch", Component: FirstCatch },
      { path: "guides/understanding-interface", Component: UnderstandingInterface },
      { path: "guides/basic-fishing-techniques", Component: BasicFishingTechniques },
      { path: "guides/fastest-way-to-progress", Component: FastestWayToProgress },
      { path: "guides/efficient-resource-management", Component: EfficientResourceManagement },
      { path: "guides/upgrade-priority", Component: UpgradePriority },
      { path: "guides/maximizing-rewards", Component: MaximizingRewards },
      { path: "guides/advanced-fishing-techniques", Component: AdvancedFishingTechniques },
      { path: "guides/rare-fish-hunting", Component: RareFishHunting },
      { path: "guides/optimization-strategies", Component: OptimizationStrategies },
      { path: "guides/end-game-content", Component: EndGameContent },
      { path: "guides/common-beginner-mistakes", Component: CommonBeginnerMistakes },
      { path: "guides/resource-waste-prevention", Component: ResourceWastePrevention },
      { path: "guides/inefficient-practices", Component: InefficientPractices },
      { path: "guides/what-not-to-do", Component: WhatNotToDo },
      
      { path: "*", Component: NotFound },
    ],
  },
];

// Export the BrowserRouter
console.log('🔥 ROUTER: Using BrowserRouter for Figma Preview compatibility');
export const router = createBrowserRouter(routeConfig);
console.log('📍 ROUTES REGISTERED:', routeConfig[0].children?.map(r => r.path || 'index'));