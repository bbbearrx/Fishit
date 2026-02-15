/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FISH IT OVERVIEW PAGE — 2026 COMPLETE GAME SYSTEMS BREAKDOWN
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Core authority hub and SEO pillar page explaining all major Fish It systems.
 * This page functions as the structural foundation of the Fish It wiki.
 * Every advanced guide builds on the systems explained here.
 * 
 * ROUTE: /overview
 * 
 * SEO ELEMENTS:
 * - H1: Fish It Overview (2026 Complete Game Systems Breakdown)
 * - Structured long-form content optimized for system queries
 * - Three key stat cards (120+ fish, 10+ islands, 60+ gear)
 * - Internal linking to Fish Database, Fishing Rods, Updates
 * 
 * DATA INTEGRITY RULES:
 * - DO NOT change 120+, 10+, 60+ statistics
 * - DO NOT modify island names (Fisherman Island, Coralcrest, etc.)
 * - DO NOT alter code "COUNTTRANSCENDEDSTONES"
 * - DO NOT add speculation or unverified information
 * - DO NOT add external links
 * 
 * DESIGN APPROACH:
 * - Clean, authoritative, premium aesthetic
 * - Minimal gradients, strong hierarchy
 * - Wide readable content blocks for long-form reading
 * - Clear section separation
 */

import { Fish, Map, Settings, TrendingUp, Coins, Calendar, Users, Lightbulb, Database, Anchor, BookOpen, Gift } from 'lucide-react';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { Link } from 'react-router';

export default function GameOverview() {
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
              Fish It Overview (2026 Complete Game Systems Breakdown)
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Fish It is a systems-driven open-world Roblox RPG built around progression, probability, and optimization. While it presents itself as a fishing simulator, the game's structure is built on layered mechanics including spawn logic, gear stacking, island rotation, environmental conditions, and event-based modifiers.
            </p>

            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-6">
              This page explains how every major system works at a high level so you can understand how progression actually scales.
            </p>

            <div className="mt-8 inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-6 py-3">
              <p className="text-cyan-300 font-semibold">
                If you want to play efficiently, you must understand the systems—not just cast repeatedly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 1: What Is Fish It? */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          What Is Fish It?
        </h2>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Fish It is an open-world fishing RPG on Roblox built around a core progression loop: <strong className="text-white">catch → sell → upgrade → unlock</strong>. Players explore multiple fishing locations, collect hundreds of fish species across seven rarity tiers (Common through Secret), and upgrade fishing rods with Luck, Speed, and Kg capacity stats to access higher-tier content.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The game features dynamic environmental conditions that affect spawn pools, location-based fish exclusivity, and a stat-stacking system that rewards optimization over random casting.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            This wiki provides:
          </p>

          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-8 list-disc list-inside">
            <li>Complete <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> with exact catch chances, rarities, and coin values</li>
            <li>Comprehensive <Link to="/fishing-rods" className="text-cyan-400 hover:text-cyan-300 underline">Fishing Rods Database</Link> with Luck, Speed, and Kg stats for every rod</li>
            <li>Structured <Link to="/guides" className="text-cyan-400 hover:text-cyan-300 underline">Beginner → End-Game Guides</Link> for efficient progression</li>
            <li>Regular <Link to="/updates" className="text-cyan-400 hover:text-cyan-300 underline">Patch Notes & Update Archive</Link> tracking new content</li>
          </ul>

          <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 my-8">
            <p className="text-gray-300 text-lg mb-2">
              <strong className="text-white">Random casting works early game.</strong>
            </p>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">System mastery dominates late game.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* Quick Navigation Block */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-cyan-500/20">
        <Card className="bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border-cyan-500/30">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-cyan-400" />
              Quick Navigation to Key Resources
            </h3>
            <p className="text-gray-300">
              Jump directly to the databases, tier lists, and guides referenced throughout this overview.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Button to="/fish-database" variant="outline" size="sm" className="justify-start">
              <Database className="w-4 h-4 mr-2" />
              Fish Database
            </Button>
            <Button to="/fishing-rods" variant="outline" size="sm" className="justify-start">
              <Anchor className="w-4 h-4 mr-2" />
              Fishing Rods
            </Button>
            <Button to="/rod-tier-list" variant="outline" size="sm" className="justify-start">
              <TrendingUp className="w-4 h-4 mr-2" />
              Rod Tier List
            </Button>
            <Button to="/codes" variant="outline" size="sm" className="justify-start">
              <Gift className="w-4 h-4 mr-2" />
              Codes
            </Button>
            <Button to="/updates" variant="outline" size="sm" className="justify-start">
              <Calendar className="w-4 h-4 mr-2" />
              Updates
            </Button>
            <Button to="/guides" variant="outline" size="sm" className="justify-start">
              <BookOpen className="w-4 h-4 mr-2" />
              Guides
            </Button>
          </div>
        </Card>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 2: Core Gameplay Systems */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Core Gameplay Systems
        </h2>

        {/* Gear Synergy & Statistical Scaling */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Gear Synergy & Statistical Scaling
            </h3>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Fish It is built around synergy between multiple gear components:
            </p>

            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Fishing Rods</li>
              <li>Bobbers</li>
              <li>Boats</li>
              <li>Utility items</li>
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Each piece contributes modifiers such as:
            </p>

            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Luck</li>
              <li>Mutation chance</li>
              <li>Shiny rate</li>
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Stacking these stats correctly reduces the number of casts required to obtain rare fish.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Late-game optimization is not about "highest number wins." It is about:
            </p>

            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Balancing Luck vs Speed</li>
              <li>Targeting mutation rates</li>
              <li>Aligning builds with island spawn pools</li>
              <li>Adapting builds during Admin Events</li>
            </ul>

            <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-5 mt-6">
              <p className="text-cyan-300 text-lg font-semibold">
                Gear synergy becomes increasingly important after mid-game progression.
              </p>
            </div>
          </div>
        </div>

        {/* Island Progression & Region Tiers */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Map className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Location-Based Spawn Pools
            </h3>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Fish It features 11 confirmed fishing locations documented in our <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link>:
            </p>

            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
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

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Each location contains:
            </p>

            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Unique species pools</li>
              <li>Location-exclusive fish</li>
              <li>Specific rarity distributions</li>
              <li>Progression gates (level or quest requirements)</li>
            </ul>

            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 my-6">
              <p className="text-white text-lg font-semibold mb-4">
                Location selection directly impacts available catches.
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-cyan-400 font-semibold mb-1">Example: Early Game</p>
                  <p className="text-gray-300">Fisherman Island contains Common → Mythic fish. Dotted Stingray (1 in 91,000, Mythic) is exclusive to this starting location.</p>
                </div>

                <div>
                  <p className="text-cyan-400 font-semibold mb-1">Example: Mid Game</p>
                  <p className="text-gray-300">Kohana Volcano requires Lava Rod. Contains Magma Shark (1 in 200,000, Mythic).</p>
                </div>

                <div>
                  <p className="text-cyan-400 font-semibold mb-1">Example: Late Game</p>
                  <p className="text-gray-300">Lost Isle and Ancient Jungle contain high-tier Mythic and Secret fish requiring 400K+ Kg capacity rods.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Browse all locations and their fish pools at <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">/fish-database</Link>.
            </p>

            <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-5 mt-6">
              <p className="text-cyan-300 text-lg font-semibold">
                Location mastery is key to Fish Index completion and rare fish targeting.
              </p>
            </div>
          </div>
        </div>

        {/* The Progression Loop */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              The Progression Loop (Catch → Sell → Upgrade)
            </h3>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Fish It's core economy revolves around:
            </p>

            <ol className="text-gray-300 text-lg leading-relaxed space-y-3 mb-6 list-decimal list-inside">
              <li><strong className="text-white">Catch:</strong> Fish at your current location with your equipped rod</li>
              <li><strong className="text-white">Sell:</strong> Turn catches into coins (higher rarities = exponentially higher value)</li>
              <li><strong className="text-white">Upgrade:</strong> Purchase better rods with higher Luck, Speed, and Kg stats</li>
              <li><strong className="text-white">Unlock:</strong> Access new locations with better spawn pools</li>
              <li><strong className="text-white">Repeat:</strong> Target progressively rarer fish</li>
            </ol>

            <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-5 mt-6">
              <p className="text-cyan-300 text-lg font-semibold">
                Efficiency determines progression speed—not just time played.
              </p>
            </div>
          </div>
        </div>

        {/* Rod Stats Explained */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Rod Stats Explained (Luck, Speed, Kg Capacity)
            </h3>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Every fishing rod has three core stats:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-5">
                <h4 className="text-xl font-bold text-white mb-2">Luck %</h4>
                <p className="text-gray-300">Increases the probability of catching higher-rarity fish. Mythic-tier rods like Ghostfinn Rod (610% Luck) dramatically boost rare catch rates compared to starter rods (0-30% Luck).</p>
              </div>

              <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-5">
                <h4 className="text-xl font-bold text-white mb-2">Speed %</h4>
                <p className="text-gray-300">Reduces time between catches. Carbon Rod (4% Speed) is an early-game XP grinder despite lower luck. High-tier rods like Ghostfinn Rod (118% Speed) maximize catches per hour.</p>
              </div>

              <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-5">
                <h4 className="text-xl font-bold text-white mb-2">Kg Capacity</h4>
                <p className="text-gray-300">Maximum fish weight you can catch. End-game locations (Lost Isle, Ancient Jungle) contain fish that require 400K+ Kg rods to even attempt catching.</p>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Compare all rod stats side-by-side at the <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> or browse detailed entries at <Link to="/fishing-rods" className="text-cyan-400 hover:text-cyan-300 underline">/fishing-rods</Link>.
            </p>

            <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-5 mt-6">
              <p className="text-cyan-300 text-lg font-semibold">
                Rod selection determines which fish you can target and how efficiently you farm them.
              </p>
            </div>
          </div>
        </div>

        {/* Rarities & What They Mean */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Fish className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Rarities & What They Mean
            </h3>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Fish It uses seven rarity tiers with exponentially decreasing catch rates:
            </p>

            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li><strong className="text-green-400">Common:</strong> Starter fish, high catch rates</li>
              <li><strong className="text-green-300">Uncommon:</strong> Early progression targets</li>
              <li><strong className="text-blue-400">Rare:</strong> Mid-game catches (1 in 100 → 1 in 1,000 range)</li>
              <li><strong className="text-purple-400">Epic:</strong> Advanced targets (1 in 1,000 → 1 in 10,000 range)</li>
              <li><strong className="text-orange-400">Legendary:</strong> High-value fish (1 in 10,000 → 1 in 50,000 range)</li>
              <li><strong className="text-pink-400">Mythic:</strong> Extremely rare (1 in 50,000 → 1 in 200,000). Sell for 40K-150K+ coins</li>
              <li><strong className="text-yellow-400">Secret:</strong> Trophy fish. Odds often marked "???\" due to extreme rarity (1 in 500,000+). \"Invaluable\" pricing</li>
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Browse fish by rarity at <Link to="/rarities" className="text-cyan-400 hover:text-cyan-300 underline">/rarities</Link>. All known Secret fish are cataloged at <Link to="/secret-fish" className="text-cyan-400 hover:text-cyan-300 underline">/secret-fish</Link>.
            </p>

            <div className="bg-yellow-950/30 border border-yellow-500/30 rounded-lg p-5 mt-6">
              <p className="text-yellow-300 text-lg font-semibold">
                Higher-luck rods do NOT guarantee rare catches—they increase probability. Mythic and Secret fish remain low-percentage even with optimized gear.
              </p>
            </div>
          </div>
        </div>

        {/* Using This Wiki Efficiently */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Using This Wiki Efficiently
            </h3>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              This wiki provides verified data to optimize your progression:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-5">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Database className="w-5 h-5 text-cyan-400" />
                  <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link>
                </h4>
                <p className="text-gray-300">Browse all fish by location or rarity. See exact catch chances (e.g., \"1 in 100,000\"), coin values, and which locations contain specific fish.</p>
              </div>

              <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-5">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Anchor className="w-5 h-5 text-cyan-400" />
                  <Link to="/fishing-rods" className="text-cyan-400 hover:text-cyan-300 underline">Fishing Rods Database</Link>
                </h4>
                <p className="text-gray-300">Full rod catalog with Luck, Speed, Kg capacity, price, requirements (quest-locked vs store-bought), and location info.</p>
              </div>

              <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-5">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link>
                </h4>
                <p className="text-gray-300">Fast comparison table showing all rods sorted by tier. Compare stats side-by-side without clicking individual entries.</p>
              </div>

              <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-5">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                  <Link to="/guides" className="text-cyan-400 hover:text-cyan-300 underline">Guides</Link>
                </h4>
                <p className="text-gray-300">Beginner → End-Game progression guides covering First Catch, Upgrade Priority, Rare Fish Hunting, and What NOT to Do.</p>
              </div>
            </div>

            <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-5 mt-6">
              <p className="text-cyan-300 text-lg font-semibold">
                Data-driven optimization beats random casting. Use the wiki to target specific fish and plan rod upgrades.
              </p>
            </div>
          </div>
        </div>

        {/* Staying Updated */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Staying Updated
            </h3>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Fish It receives regular content updates including:
            </p>

            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>New fishing locations</li>
              <li>New fish species and rarity additions</li>
              <li>New fishing rods and gear</li>
              <li>Limited-time events and seasonal content</li>
              <li>System changes (charm crafting, new resources, quests)</li>
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Check <Link to="/updates" className="text-cyan-400 hover:text-cyan-300 underline">/updates</Link> for patch notes and update history. Recent example: Lava Basin Expansion (charm crafting system, new resources, QoL improvements).
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Also check <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">/codes</Link> regularly for active redemption codes (free coins, boosts, items).
            </p>

            <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-5 mt-6">
              <p className="text-cyan-300 text-lg font-semibold">
                Updates often introduce new high-tier content that reshapes progression strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: Game Scale & Statistics */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Game Scale & Statistics
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Fish It continues expanding through regular updates.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          Current scale:
        </p>

        {/* EDITABLE: Three Statistics Cards */}
        {/* WARNING: Do NOT change the numbers 120+, 10+, 60+ */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Fish Species */}
          <Card className="text-center">
            <div className="flex flex-col items-center">
              <Fish className="w-12 h-12 text-cyan-400 mb-4" />
              <div className="text-4xl font-bold text-white mb-2">120+</div>
              <div className="text-xl font-semibold text-cyan-400 mb-3">Fish Species</div>
              <p className="text-gray-400 text-sm">
                Including Mutation and Shiny variants
              </p>
            </div>
          </Card>

          {/* Card 2: Islands & Locations */}
          <Card className="text-center">
            <div className="flex flex-col items-center">
              <Map className="w-12 h-12 text-cyan-400 mb-4" />
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-xl font-semibold text-cyan-400 mb-3">Islands & Locations</div>
              <p className="text-gray-400 text-sm">
                Mirrors Fish Index tabs
              </p>
            </div>
          </Card>

          {/* Card 3: Gear Types */}
          <Card className="text-center">
            <div className="flex flex-col items-center">
              <Settings className="w-12 h-12 text-cyan-400 mb-4" />
              <div className="text-4xl font-bold text-white mb-2">60+</div>
              <div className="text-xl font-semibold text-cyan-400 mb-3">Gear Types</div>
              <p className="text-gray-400 text-sm">
                Rods · Bobbers · Boats · Utility
              </p>
            </div>
          </Card>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Fish className="w-7 h-7 text-cyan-400" />
              120+ Fish Species
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Including Mutation and Shiny variants.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              The Fish Index expands as new updates introduce species and seasonal additions.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Map className="w-7 h-7 text-cyan-400" />
              10+ Islands & Locations
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Each location mirrors a tab within the Fish Index system.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Regions contain exclusive fish and progression requirements.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Settings className="w-7 h-7 text-cyan-400" />
              60+ Gear Types
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Including rods, bobbers, boats, and utility items.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Gear diversity enables specialized builds for:
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>XP farming</li>
              <li>Coin farming</li>
              <li>Rare targeting</li>
              <li>Mutation hunting</li>
              <li>Event optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 4: Progression Path */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Progression Path (Level-Based Structure)
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          While progression is flexible, most players follow a structure:
        </p>

        <div className="space-y-8">
          {/* Early Game */}
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Early Game (Levels 1–50)
            </h3>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Starter rods</li>
              <li>Basic island access</li>
              <li>XP-focused builds</li>
              <li>Coin accumulation</li>
              <li>Fish Index foundation</li>
            </ul>
          </div>

          {/* Mid Game */}
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mid Game (50–100)
            </h3>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Advanced rod upgrades</li>
              <li>Island expansion</li>
              <li>Mutation awareness</li>
              <li>Event tracking begins</li>
              <li>Gear stacking becomes important</li>
            </ul>
          </div>

          {/* Late Game */}
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Late Game (100+)
            </h3>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Rare and Secret targeting</li>
              <li>Admin Event optimization</li>
              <li>High-tier gear synergy</li>
              <li>Build specialization</li>
              <li>Spawn cycle tracking</li>
            </ul>
          </div>
        </div>

        <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-6 mt-10">
          <p className="text-cyan-300 text-lg font-semibold text-center">
            Progression shifts from grind to efficiency.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 5: Economy & Resource Loop */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Economy & Resource Loop
        </h2>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Fish It operates on a cyclical resource system:
          </p>

          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6 mb-8">
            <ol className="text-gray-300 text-lg leading-relaxed space-y-3 list-decimal list-inside">
              <li>Catch fish</li>
              <li>Sell fish</li>
              <li>Upgrade gear</li>
              <li>Unlock islands</li>
              <li>Increase spawn efficiency</li>
              <li>Target higher-value fish</li>
            </ol>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Potions and temporary buffs (such as Mutation I and Luck II potions) amplify returns.
          </p>

          <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 my-8">
            <p className="text-white text-lg font-semibold mb-4">
              Example update content:
            </p>
            <p className="text-cyan-400 font-semibold mb-3">
              "Expansion" Update (November 2025)
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>New mysterious island requiring specific boat tier</li>
              <li>Transcended Stones (revealed via code "COUNTTRANSCENDEDSTONES")</li>
              <li>Mutation I & Luck II potions added</li>
            </ul>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Higher-tier fish generate exponentially higher coin value.
          </p>

          <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-5 mt-6">
            <p className="text-cyan-300 text-lg font-semibold">
              Efficiency determines how quickly you enter late-game economy tiers.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 6: Expansion & Update Model */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Expansion & Update Model
        </h2>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Developers regularly expand Fish It through:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-5">
              <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
                <li>New islands</li>
                <li>New rods</li>
                <li>New mutations</li>
                <li>New quests</li>
              </ul>
            </div>
            <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-5">
              <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
                <li>Limited-time events</li>
                <li>New potions</li>
                <li>High-tier resources</li>
              </ul>
            </div>
          </div>

          <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-6 mb-6">
            <p className="text-cyan-300 text-lg font-semibold">
              Updates frequently release on Sundays.
            </p>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            The expanding Fish Index ensures long-term replay value.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 7: Community Data & Knowledge Sharing */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Community Data & Knowledge Sharing
        </h2>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The Fish It community actively tracks:
          </p>

          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-8 list-disc list-inside">
            <li>Catch rate data</li>
            <li>Spawn screenshots</li>
            <li>Mutation discoveries</li>
            <li>Event schedules</li>
          </ul>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Centralized data reduces wasted casts and inefficient progression.
          </p>

          <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-6">
            <p className="text-cyan-300 text-lg font-semibold">
              Strategic players rely on data-driven optimization rather than guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 8: Why This Overview Exists */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Why This Overview Exists
        </h2>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Fish It rewards players who understand:
          </p>

          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-8 list-disc list-inside">
            <li>Gear stacking</li>
            <li>Spawn logic</li>
            <li>Island rotation</li>
            <li>Weather timing</li>
            <li>Event windows</li>
            <li>Resource scaling</li>
          </ul>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            This overview functions as the structural foundation of the Fish It wiki.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Every advanced guide builds on the systems explained here.
          </p>

          <div className="bg-gradient-to-r from-cyan-950/50 to-blue-950/50 border border-cyan-500/30 rounded-lg p-8 text-center">
            <p className="text-2xl font-bold text-white mb-3">
              Master the systems.
            </p>
            <p className="text-2xl font-bold text-cyan-400">
              Then optimize the grind.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}