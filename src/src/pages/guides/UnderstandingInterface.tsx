/**
 * ═══════════════════════════════════════════════════════════════════════════
 * UNDERSTANDING THE INTERFACE - DATABASE NAVIGATION GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/understanding-interface
 * 
 * SEO: Targets "Fish It database guide", "how to use fish database", "Fish It wiki navigation"
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function UnderstandingInterface() {
  return (
    <div className="min-h-screen">
      
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-16 border-b border-cyan-500/20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/guides" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Guides Hub</span>
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Understanding the Interface (Fish It Wiki Navigation Guide)
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-12 space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            The Fish It wiki (fishit.gg) is built around data-driven decision making. Understanding how to navigate the Fish Database, Fishing Rods Database, and Rod Tier List dramatically improves your planning efficiency.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide explains how to use each tool effectively.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Fish Database Overview
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> contains 207 fish entries with complete stats:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Fish Name</li>
            <li>Rarity (Common → Secret)</li>
            <li>Location (11 islands tracked)</li>
            <li>Catch Chance (e.g., "1 in 500,000")</li>
            <li>Base Sell Value</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">How to use it:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Filter by Location to see which fish spawn at your current island</li>
            <li>Filter by Rarity to target specific fish tiers</li>
            <li>Search by Name to find specific fish quickly</li>
            <li>Sort by Catch Chance to identify the rarest fish</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Using Location Filters
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Location filtering is the most important Fish Database feature.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Why it matters:</strong>
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Each island has a unique fish pool. Fishing blindly wastes time if you're targeting a fish that doesn't spawn at your current location.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Example workflow:</strong>
          </p>
          <ol className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-decimal list-inside">
            <li>Select your current island from the Location filter</li>
            <li>Review the fish list for that location</li>
            <li>Identify high-value targets (Legendary/Mythic fish with good sell values)</li>
            <li>Plan a grinding session around those targets</li>
          </ol>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Using Rarity Filters
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Rarity filters help you focus on specific progression goals:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 font-bold">Common/Uncommon:</span>
              <span>Early-game XP grinding targets</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">Rare/Epic:</span>
              <span>Mid-game coin farming targets</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">Legendary/Mythic:</span>
              <span>Late-game high-value targets (40K-150K+ coins)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold">Secret:</span>
              <span>Trophy fish for Fish Index completion</span>
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Fishing Rods Database
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The <Link to="/fishing-rods" className="text-cyan-400 hover:text-cyan-300 underline">Fishing Rods Database</Link> tracks 23 rods with stats:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Rod Name</li>
            <li>Type (Common → Secret)</li>
            <li>Luck % (affects rare fish catch rate)</li>
            <li>Speed % (reduces time between catches)</li>
            <li>Kg Capacity (maximum fish weight)</li>
            <li>Price</li>
            <li>Location (where to buy/unlock)</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">How to use it:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Sort by Price to identify your next affordable upgrade</li>
            <li>Filter by Type to compare rods within the same tier</li>
            <li>Click individual rods for detailed breakdowns</li>
            <li>Compare Luck vs Speed stats to match your playstyle</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Rod Tier List
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> ranks all rods using a weighted formula:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2">
              <li>Luck Impact: 40%</li>
              <li>Speed Impact: 35%</li>
              <li>Kg Capacity: 15%</li>
              <li>Accessibility: 10%</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">How to use it:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Check S-tier rods to identify end-game targets</li>
            <li>Review your current rod's tier placement</li>
            <li>Plan upgrade path from B → A → S tier</li>
            <li>Read FAQ section for common rod purchase questions</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Planning a Fishing Session
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Step-by-step workflow:</strong>
          </p>
          <ol className="text-gray-300 text-lg leading-relaxed space-y-3 mb-6 list-decimal list-inside">
            <li>Open the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link></li>
            <li>Filter by your current island location</li>
            <li>Identify 2-3 target fish (balance rarity with catch chance)</li>
            <li>Check if your rod's Kg capacity can handle those fish</li>
            <li>Start fishing session with clear targets</li>
            <li>Track coin-per-hour and XP-per-hour metrics</li>
            <li>Adjust location or rod if efficiency drops</li>
          </ol>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Common Navigation Mistakes
          </h2>
          <Card className="bg-red-950/20 border-red-500/30">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Fishing without checking the location's fish pool first</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Buying rods without comparing tier list rankings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Ignoring Kg capacity when targeting heavy fish</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Not using search/filter tools to narrow results</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quick Reference Links
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database (207 fish entries)</Link>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <Link to="/fishing-rods" className="text-cyan-400 hover:text-cyan-300 underline">Fishing Rods Database (23 rods)</Link>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List (data-driven rankings)</Link>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">Codes (active code list)</Link>
              </li>
            </ul>
          </Card>
        </div>

      </section>

    </div>
  );
}
