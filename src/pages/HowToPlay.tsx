/**
 * ═══════════════════════════════════════════════════════════════════════════
 * HOW TO PLAY PAGE — BEGINNER GUIDE (COMPLETE STARTER WALKTHROUGH)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Comprehensive beginner guide walking new players step-by-step from Level 1
 * through early mid-game, helping them avoid inefficient grinding and wasted upgrades.
 * 
 * ROUTE: /how-to-play
 * 
 * SEO ELEMENTS:
 * - H1: How to Play Fish It (Beginner Guide + Fast Progression Setup)
 * - Structured long-form beginner content
 * - Clear progression path
 * - Internal linking to Fish Database, Fishing Rods, Updates, Tier Lists
 * 
 * DATA INTEGRITY RULES:
 * - Only use verified locations from confirmed database
 * - DO NOT add speculation or unverified information
 * - DO NOT add external links
 * - All internal links must point to existing routes
 */

import { Lightbulb, TrendingUp, Target, Map, AlertTriangle, CheckCircle2, Info, Database, Anchor, BookOpen, Gift, Calendar, Fish } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router';

export default function HowToPlay() {
  return (
    <div className="min-h-screen">
      
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SEO: Hero Section with H1 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-16 border-b border-cyan-500/20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* SEO: Primary H1 heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              How to Play Fish It (Beginner Guide + Fast Progression Setup)
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              This complete <strong className="text-white">Roblox Fish It how to play guide</strong> walks you through the Fish It beginner experience from first cast to mid-game progression. Learn Fish It rods, Fish It fish locations, catch mechanics, and how to use the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish It fish database</Link> to accelerate your progression and avoid common beginner mistakes that waste coins and time.
            </p>

            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-6">
              Whether you're brand new to Fish It or restarting after a break, this Fish It beginner guide explains the core progression loop, rod upgrades, location unlocks, and how to efficiently use this wiki's <Link to="/fishing-rods" className="text-cyan-400 hover:text-cyan-300 underline">Fishing Rods database</Link> and <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> to plan your next upgrade.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 1: Start Here - 6 Step Quick Start */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Target className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Start Here: 6-Step Quick Start Guide
          </h2>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Follow these six steps to set up an efficient progression path from Level 1 onward. Each step links to verified databases and tools on this wiki.
          </p>

          <div className="space-y-6">
            {/* Step 1 */}
            <Card className="border-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Learn the Core Progression Loop
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Fish It's economy revolves around <strong className="text-white">catch → sell → upgrade → unlock</strong>. You catch fish, sell them for coins, buy better rods with higher Luck/Speed/Kg stats, unlock new locations with better spawn pools, and repeat. Early game prioritizes XP and coin accumulation over rare fish hunting.
                  </p>
                  <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-4">
                    <p className="text-cyan-300 font-semibold">
                      Focus on consistency first. Rare hunting comes later when you have high-tier rods.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="border-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Use the Rod Tier List to Compare Rods Quickly
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Visit the <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">Rod Tier List</Link> to see all fishing rods sorted by rarity tier (Common → Mythic) with Luck %, Speed %, and Kg capacity displayed side-by-side. This lets you compare stats at a glance without clicking individual rod pages.
                  </p>
                  <Button to="/rod-tier-list" size="sm">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Rod Tier List
                  </Button>
                </div>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="border-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Use the Fishing Rods Database to Verify Requirements
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    The <Link to="/fishing-rods" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">Fishing Rods Database</Link> shows every rod with price, location (where to buy/unlock), requirements (quest-locked vs store-bought), and full stats. Use the search and tier filters to plan your next upgrade.
                  </p>
                  <Button to="/fishing-rods" size="sm">
                    <Anchor className="w-4 h-4 mr-2" />
                    Browse Fishing Rods
                  </Button>
                </div>
              </div>
            </Card>

            {/* Step 4 */}
            <Card className="border-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xl">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Use the Fish Database to Pick Location and Target
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    The <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">Fish Database</Link> catalogs every fish by location and rarity. Filter by island (e.g., Fisherman Island, Kohana Volcano, Lost Isle) to see available fish, exact catch chances (e.g., 1 in 100,000), and coin values. Plan your fishing sessions by checking which locations have fish you need.
                  </p>
                  <Button to="/fish-database" size="sm">
                    <Database className="w-4 h-4 mr-2" />
                    Open Fish Database
                  </Button>
                </div>
              </div>
            </Card>

            {/* Step 5 */}
            <Card className="border-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xl">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Use Rarities to Understand Your Goals
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Fish It uses seven rarity tiers: Common, Uncommon, Rare, Epic, Legendary, Mythic, and Secret. Browse fish organized by rarity at <Link to="/rarities" className="text-cyan-400 hover:text-cyan-300 underline">/rarities</Link>. Secret fish (the rarest tier with 1 in 500,000+ odds) are cataloged at <Link to="/secret-fish" className="text-cyan-400 hover:text-cyan-300 underline">/secret-fish</Link>.
                  </p>
                  <div className="flex gap-2">
                    <Button to="/rarities" size="sm" variant="outline">
                      <Fish className="w-4 h-4 mr-2" />
                      Browse Rarities
                    </Button>
                    <Button to="/secret-fish" size="sm" variant="outline">
                      Secret Fish
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Step 6 */}
            <Card className="border-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xl">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Use Codes + Updates to Stay Current
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Redeem active codes at <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">/codes</Link> for free coins, boosts, and items. Check <Link to="/updates" className="text-cyan-400 hover:text-cyan-300 underline">/updates</Link> for patch notes and new content releases (new fish, rods, locations, systems). Updates can reshape progression strategies.
                  </p>
                  <div className="flex gap-2">
                    <Button to="/codes" size="sm">
                      <Gift className="w-4 h-4 mr-2" />
                      Active Codes
                    </Button>
                    <Button to="/updates" size="sm" variant="outline">
                      <Calendar className="w-4 h-4 mr-2" />
                      Patch Notes
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 2: Locations (Verified) */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <div className="flex items-center gap-3 mb-8">
          <Map className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Fishing Locations (Verified Database)
          </h2>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Fish It features 11 confirmed fishing locations, each with its own spawn pool, rarity distribution, and progression requirements. Use the Fish Database to see which fish are available at each location.
          </p>

          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              All 11 Verified Locations:
            </h3>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Fisherman Island</li>
              <li>The Ocean</li>
              <li>Kohana Island</li>
              <li>Kohana Volcano</li>
              <li>Coral Reef Island</li>
              <li>Esoteric Depths</li>
              <li>Tropical Grove</li>
              <li>Crater Island</li>
              <li>Lost Isle</li>
              <li>Ancient Jungle</li>
              <li>Classic Island</li>
            </ul>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Each location contains unique fish that can only be caught there. For example:
          </p>

          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-8 list-disc list-inside">
            <li><strong className="text-white">Fisherman Island:</strong> Starter location with Common → Mythic fish. Contains Dotted Stingray (1 in 91,000, Mythic).</li>
            <li><strong className="text-white">Kohana Volcano:</strong> Requires Lava Rod. Contains Magma Shark (1 in 200,000, Mythic).</li>
            <li><strong className="text-white">Lost Isle:</strong> High-tier location requiring 400K+ Kg rods. Contains Kraken (1 in 100,000, Mythic).</li>
            <li><strong className="text-white">Classic Island:</strong> Contains Hacker Shark (1 in 500,000, Secret).</li>
          </ul>

          <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-6 mb-6">
            <p className="text-cyan-300 text-lg font-semibold mb-3">
              Don't fish randomly. Use the database to plan your session.
            </p>
            <p className="text-gray-300">
              Knowing which locations contain which fish prevents wasted time fishing in the wrong zones.
            </p>
          </div>

          <Button to="/fish-database" size="lg">
            <Database className="w-5 h-5 mr-2" />
            Browse Fish Database by Location
          </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: Common Beginner Mistakes */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <div className="flex items-center gap-3 mb-8">
          <AlertTriangle className="w-8 h-8 text-yellow-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Common Beginner Mistakes (Avoid These)
          </h2>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            New players often make these efficiency mistakes that slow progression:
          </p>

          <div className="space-y-4">
            <Card className="bg-red-950/20 border-red-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Mistake #1: Chasing Rare Fish Too Early
                  </h3>
                  <p className="text-gray-300">
                    Mythic and Secret fish have 1 in 50,000+ catch rates. Without high-Luck rods (Mythic-tier rods like Ghostfinn Rod at 610% Luck), you'll waste hours for minimal progress. Focus on leveling and coin farming first.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-red-950/20 border-red-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Mistake #2: Ignoring Rod Stat Comparisons
                  </h3>
                  <p className="text-gray-300">
                    Not all rods in the same tier are equal. Use the <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> to compare Luck, Speed, and Kg stats side-by-side before buying. A Speed-focused rod (like Carbon Rod at 4% Speed) can out-perform higher-Luck rods for XP grinding.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-red-950/20 border-red-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Mistake #3: Not Using the Database Filters
                  </h3>
                  <p className="text-gray-300">
                    The <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> has location and rarity filters. Use them to see exactly which fish spawn at your current location instead of fishing blindly. Filter by "Mythic" to see all Mythic fish and where they spawn.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-red-950/20 border-red-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Mistake #4: Spending Coins Without a Plan
                  </h3>
                  <p className="text-gray-300">
                    Coins are the bottleneck in early-mid game. Don't buy every rod you see. Use the Tier List to identify meaningful upgrades (50%+ Luck increase or major Speed boost). Save coins for quest-locked rods or significant stat jumps.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-red-950/20 border-red-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Mistake #5: Not Checking Updates and Codes
                  </h3>
                  <p className="text-gray-300">
                    Fish It receives regular content updates that add new fish, rods, and locations. Check <Link to="/updates" className="text-cyan-400 hover:text-cyan-300 underline">/updates</Link> for patch notes. Also redeem codes at <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">/codes</Link> for free boosts and coins.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 mt-8">
            <p className="text-white text-lg font-semibold">
              Fish It rewards data-driven planning over random grinding. Use the wiki tools.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 4: Quick Links */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <div className="flex items-center gap-3 mb-8">
          <Lightbulb className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Quick Links to Wiki Resources
          </h2>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Jump directly to the databases and guides referenced in this beginner walkthrough:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Button to="/guides" size="lg" className="justify-start">
            <BookOpen className="w-5 h-5 mr-3" />
            All Guides
          </Button>
          <Button to="/fish-database" size="lg" className="justify-start">
            <Database className="w-5 h-5 mr-3" />
            Fish Database
          </Button>
          <Button to="/fishing-rods" size="lg" className="justify-start">
            <Anchor className="w-5 h-5 mr-3" />
            Fishing Rods
          </Button>
          <Button to="/rod-tier-list" size="lg" className="justify-start">
            <TrendingUp className="w-5 h-5 mr-3" />
            Rod Tier List
          </Button>
          <Button to="/codes" size="lg" className="justify-start">
            <Gift className="w-5 h-5 mr-3" />
            Codes
          </Button>
          <Button to="/updates" size="lg" className="justify-start">
            <Calendar className="w-5 h-5 mr-3" />
            Updates
          </Button>
        </div>

        <div className="bg-gradient-to-r from-cyan-950/50 to-blue-950/50 border border-cyan-500/30 rounded-lg p-8 text-center mt-12">
          <p className="text-2xl font-bold text-white mb-3">
            Ready to Start?
          </p>
          <p className="text-lg text-cyan-300 mb-6">
            Use the 6-step guide above and check the databases before every upgrade.
          </p>
          <Button to="/fish-database" size="lg">
            <Database className="w-5 h-5 mr-2" />
            Open Fish Database
          </Button>
        </div>
      </section>

    </div>
  );
}