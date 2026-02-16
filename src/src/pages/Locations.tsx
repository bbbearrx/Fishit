/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LOCATIONS HUB PAGE — COMPLETE FISH IT ISLANDS GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Central authority page for all Fish It locations and fishing areas.
 * Targets: "Fish It locations", "Fish It islands", "Fish It map",
 * "where to fish in Fish It", "Fish It fishing areas"
 * 
 * ROUTE: /locations
 * 
 * HOW TO EDIT:
 * 1. SAFE: Edit location descriptions in the EDITABLE section below
 * 2. SAFE: Modify intro/section text in EDITABLE areas
 * 3. WARNING: Do not add unverified locations beyond the 11 confirmed islands
 * 4. SEO: Each location card links to filtered Fish Database results
 * 
 * DATA INTEGRITY RULES:
 * - ONLY use the 11 confirmed locations (exact spelling)
 * - DO NOT invent hidden areas or unverified islands
 * - DO NOT claim unlock requirements unless verified
 * - Link only to verified routes
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * SEO META PLACEHOLDERS (Update when deploying to real domain)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Meta Title Example:
 * "Fish It Locations Guide - All Islands & Fishing Areas | FishIt.gg"
 * 
 * Meta Description Example:
 * "Complete guide to all 11 Fish It locations and islands. Find the best fishing
 * areas, progression strategies, and location-specific fish spawn pools."
 */

import { Map, MapPin, Fish, TrendingUp, Database, Compass } from 'lucide-react';
import { Link } from 'react-router';
import Card from '../components/Card';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import JsonLd from '../components/seo/JsonLd';

export default function Locations() {
  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Page Content
  // ═══════════════════════════════════════════════════════════════════════════

  // SEO: Main page title — H1 heading
  const pageTitle = "Fish It Locations Guide (All Islands & Fishing Areas)";

  // SEO: Page subtitle/intro
  const pageSubtitle = "Explore all 11 confirmed Fish It locations and islands with detailed spawn pools, progression strategies, and location-specific fishing guides. Each island in the Fish It map contains unique fish across multiple rarity tiers — use our searchable database to filter by location and plan your fishing sessions for maximum efficiency.";

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Location Data
  // ═══════════════════════════════════════════════════════════════════════════
  // Each location includes:
  // - name: Exact location name (must match database)
  // - description: 2-3 sentence factual description
  // - urlParam: URL-encoded location name for Fish Database filtering
  //
  // WARNING: Do not add locations beyond these 11 confirmed islands

  const locations = [
    {
      name: 'Fisherman Island',
      description: 'Starter hub with shops and early progression resources. Contains common and uncommon fish, making it ideal for learning the catch-sell-upgrade loop and building initial coin reserves.',
      urlParam: 'Fisherman%20Island',
    },
    {
      name: 'The Ocean',
      description: 'Open water fishing area with diverse spawn pool. Mix of common through legendary and mythic entries across multiple rarity tiers for balanced progression.',
      urlParam: 'The%20Ocean',
    },
    {
      name: 'Kohana Island',
      description: 'Mid-progression island with increasing rarity pool. Balanced spawn table for players transitioning from early to mid-game fishing targets.',
      urlParam: 'Kohana%20Island',
    },
    {
      name: 'Kohana Volcano',
      description: 'High-difficulty lava zone with epic, legendary, and mythic entries. Contains ultra-rare targets like the Magma Shark and requires high-luck rods for efficient farming.',
      urlParam: 'Kohana%20Volcano',
    },
    {
      name: 'Coral Reef Island',
      description: 'Balanced mid-game fishing region with multiple rarities. Offers consistent spawn rates across common through epic tiers with occasional legendary entries.',
      urlParam: 'Coral%20Reef%20Island',
    },
    {
      name: 'Esoteric Depths',
      description: 'Underwater cave region with higher rarity potential. Contains rare and epic fish with increased legendary spawn chances compared to starter islands.',
      urlParam: 'Esoteric%20Depths',
    },
    {
      name: 'Tropical Grove',
      description: 'Early-to-mid island with balanced spawn pool. Features mix of uncommon, rare, and epic fish for steady coin generation and XP farming.',
      urlParam: 'Tropical%20Grove',
    },
    {
      name: 'Crater Island',
      description: 'Mid-tier region with growing legendary presence. Transition island for players upgrading to high-luck rods and targeting rarer spawn pools.',
      urlParam: 'Crater%20Island',
    },
    {
      name: 'Lost Isle',
      description: 'High-rarity island with legendary, mythic, and secret entries. Late-game location for trophy hunting and ultra-rare fish with very low catch rates.',
      urlParam: 'Lost%20Isle',
    },
    {
      name: 'Ancient Jungle',
      description: 'Late progression jungle region with high-tier fish. Contains mythic and secret fish across jungle-themed spawn pools for end-game players.',
      urlParam: 'Ancient%20Jungle',
    },
    {
      name: 'Classic Island',
      description: 'Mixed rarity island with legendary and mythic entries. Established location with diverse spawn table including multiple high-value targets.',
      urlParam: 'Classic%20Island',
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Section Titles and Content
  // ═══════════════════════════════════════════════════════════════════════════

  const section1Title = "Complete List of Fish It Locations";
  const section1Intro = "These are the 11 confirmed fishing locations in Fish It. Each island contains unique fish, rarity distributions, and progression value. Click any location to view its full spawn pool in the Fish Database, where you can filter by location and rarity tier.";

  const section2Title = "Location Strategy & Progression";
  const section2Content = "Location choice directly impacts fishing efficiency and coin generation. Early islands like Fisherman Island and Tropical Grove prioritize XP farming and volume through common/uncommon fish with high spawn rates. Mid-tier islands like Crater Island and Coral Reef Island balance coin scaling with occasional legendary entries for steady progression. Late-game islands like Lost Isle and Ancient Jungle shift focus to rarity hunting — targeting mythic and secret fish with ultra-low catch rates but massive value returns. Plan your location strategy around current rod stats (Luck % for rarity hunting, Speed % for volume farming) and reference the Guides hub and Mechanics page for deeper optimization strategies.";

  const section3Title = "Fish It Map & Island Progression";
  const section3Content = "Fish It uses an island-based progression system where players travel between fishing locations to access different spawn pools. Some islands may require boats or progression milestones to access, though specific unlock requirements vary by location. The Fish Database allows you to filter by location to preview each island's spawn table before traveling, helping you plan efficient fishing sessions without wasting time on low-value areas. Use the location cards below to jump directly to filtered database results for each island.";

  // ═══════════════════════════════════════════════════════════════════════════
  // SEO: Schema.org ItemList for Locations
  // ═══════════════════════════════════════════════════════════════════════════
  
  const locationsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": locations.map((location, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": location.name,
      "description": location.description
    }))
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // STRUCTURE: Background Image
  // ═══════════════════════════════════════════════════════════════════════════
  
  const headerBackgroundImage = "https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMG9jZWFuJTIwYWVyaWFsfGVufDF8fHx8MTc3MDY4MzE1MXww&ixlib=rb-4.1.0&q=80&w=1080";

  // ═══════════════════════════════════════════════════════════════════════════
  // STRUCTURE: PAGE LAYOUT
  // ═══════════════════════════════════════════════════════════════════════════

  return (
    <div className="min-h-screen">
      {/* SEO: Inject ItemList JSON-LD schema */}
      <JsonLd data={locationsSchema} />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* STRUCTURE: Page Header */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-950 to-blue-900 py-16">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src={headerBackgroundImage}
            alt="Fish It islands background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Icon badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <Map className="w-5 h-5 text-cyan-300" />
              <span className="text-cyan-200 text-sm font-semibold">11 Confirmed Locations</span>
            </div>

            {/* SEO: Main H1 heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {pageTitle}
            </h1>
            <p className="text-xl text-cyan-100 max-w-4xl mx-auto leading-relaxed">
              {pageSubtitle}
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button to="/fish-database" size="lg">
                <Database className="w-5 h-5 mr-2" />
                Browse Fish Database
              </Button>
              <Button to="/rarities" variant="outline" size="lg">
                <TrendingUp className="w-5 h-5 mr-2" />
                View Rarities
              </Button>
              <Button to="/guides" variant="outline" size="lg">
                <Compass className="w-5 h-5 mr-2" />
                Guides Hub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 1: Complete List of Locations (Cards) */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          title={section1Title}
          subtitle={section1Intro}
        />

        {/* ENGAGEMENT: Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {locations.map((location, index) => (
            <Card key={index} hover className="flex flex-col h-full">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                {/* SEO: Location name as H2 */}
                <h2 className="text-2xl font-bold text-white">
                  {location.name}
                </h2>
              </div>
              
              {/* Location description */}
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                {location.description}
              </p>

              {/* NETWORK: Link to filtered Fish Database */}
              <Link
                to={`/fish-database?location=${location.urlParam}`}
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/30"
              >
                <Fish className="w-4 h-4 mr-2" />
                View Fish from this Location
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 2: Location Strategy & Progression */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-8 h-8 text-green-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {section2Title}
          </h2>
        </div>

        <Card className="bg-gradient-to-r from-green-950/30 to-cyan-950/30 border-green-500/30">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {section2Content}
          </p>

          {/* Internal links */}
          <div className="flex flex-wrap gap-3">
            <Link
              to="/guides"
              className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/40 text-green-300 rounded-lg hover:bg-green-500/30 transition-all"
            >
              <Compass className="w-4 h-4 mr-2" />
              Browse Guides
            </Link>
            <Link
              to="/mechanics"
              className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-all"
            >
              <Database className="w-4 h-4 mr-2" />
              Game Mechanics
            </Link>
          </div>
        </Card>

        {/* Progression strategy cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="border-cyan-500/30">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Early Islands</h3>
              <p className="text-gray-400 leading-relaxed">
                Focus on XP farming and volume. Target common/uncommon fish for rapid coin generation and leveling.
              </p>
            </div>
          </Card>

          <Card className="border-green-500/30">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mid Islands</h3>
              <p className="text-gray-400 leading-relaxed">
                Balance coin scaling with occasional legendary catches. Upgrade rods for efficiency gains.
              </p>
            </div>
          </Card>

          <Card className="border-purple-500/30">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Late Islands</h3>
              <p className="text-gray-400 leading-relaxed">
                Shift to rarity hunting. Target mythic and secret fish with optimized high-luck rod builds.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: Fish It Map & Island Progression */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <div className="flex items-center gap-3 mb-6">
          <Map className="w-8 h-8 text-blue-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {section3Title}
          </h2>
        </div>

        <Card className="bg-gradient-to-r from-blue-950/30 to-purple-950/30 border-blue-500/30">
          <p className="text-gray-300 text-lg leading-relaxed">
            {section3Content}
          </p>
        </Card>

        {/* Additional tip card */}
        <div className="mt-8">
          <Card className="bg-yellow-950/20 border-yellow-500/30" glow>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <Fish className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Pro Tip: Filter Before You Travel
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Use the <Link to="/fish-database" className="text-yellow-400 hover:text-yellow-300 underline font-semibold">Fish Database</Link> location filters to preview each island's spawn pool before traveling. This helps you identify high-value targets and avoid wasting time on locations that don't match your current fishing goals.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ENGAGEMENT: Related Resources */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Related Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card hover className="text-center">
            <Database className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Fish Database</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Searchable database with location filters for every fish
            </p>
            <Button to="/fish-database" variant="outline" size="sm" className="w-full">
              Browse Database
            </Button>
          </Card>

          <Card hover className="text-center">
            <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Rarities Guide</h3>
            <p className="text-gray-400 mb-4 text-sm">
              All 7 rarity tiers with catch rate breakdowns
            </p>
            <Button to="/rarities" variant="outline" size="sm" className="w-full">
              View Rarities
            </Button>
          </Card>

          <Card hover className="text-center">
            <Fish className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Secret Fish</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Ultra-rare Secret tier fish with hunting strategies
            </p>
            <Button to="/secret-fish" variant="outline" size="sm" className="w-full">
              Secret Fish Guide
            </Button>
          </Card>

          <Card hover className="text-center">
            <Compass className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Guides Hub</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Progression guides and optimization strategies
            </p>
            <Button to="/guides" variant="outline" size="sm" className="w-full">
              Browse Guides
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
