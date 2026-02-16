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
 */

import { Fish, Map, Settings, TrendingUp, Coins, Calendar, Lightbulb, Database, Anchor, BookOpen, Gift } from 'lucide-react';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { Link } from 'react-router';

export default function GameOverview() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-16 border-b border-cyan-500/20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
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

      {/* What Is Fish It */}
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

      {/* Quick Navigation */}
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

      {/* Core Systems */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Core Gameplay Systems
        </h2>

        {/* Gear Synergy */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Gear Synergy & Statistical Scaling
            </h3>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Fish It is built around synergy between multiple gear components: Fishing Rods, Bobbers, Boats, and Utility items. Each piece contributes modifiers such as Luck, Mutation chance, and Shiny rate.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Stacking these stats correctly reduces the number of casts required to obtain rare fish. Late-game optimization is about balancing Luck vs Speed, targeting mutation rates, and aligning builds with island spawn pools.
            </p>

            <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-5 mt-6">
              <p className="text-cyan-300 text-lg font-semibold">
                Gear synergy becomes increasingly important after mid-game progression.
              </p>
            </div>
          </div>
        </div>

        {/* Location Progression */}
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
              Each location contains unique species pools, location-exclusive fish, specific rarity distributions, and progression gates (level or quest requirements).
            </p>

            <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-5 mt-6">
              <p className="text-cyan-300 text-lg font-semibold">
                Location mastery is key to Fish Index completion and rare fish targeting.
              </p>
            </div>
          </div>
        </div>

        {/* Progression Loop */}
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
      </section>

      {/* Game Scale */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Game Scale & Statistics
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          Fish It continues expanding through regular updates. Current scale:
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
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

          <Card className="text-center">
            <div className="flex flex-col items-center">
              <Anchor className="w-12 h-12 text-cyan-400 mb-4" />
              <div className="text-4xl font-bold text-white mb-2">60+</div>
              <div className="text-xl font-semibold text-cyan-400 mb-3">Gear Types</div>
              <p className="text-gray-400 text-sm">
                Rods, Bobbers, Boats, Items
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Using the Wiki */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Using This Wiki Efficiently
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          This wiki provides verified data to optimize your progression. Use the databases to plan every session and upgrade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <Button to="/guides" size="lg" className="justify-start">
            <BookOpen className="w-5 h-5 mr-3" />
            Guides
          </Button>
        </div>
      </section>

    </div>
  );
}
