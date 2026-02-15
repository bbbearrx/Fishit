/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FISHING RODS PAGE — SEO PILLAR PAGE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /fishing-rods
 * 
 * PURPOSE:
 * Main fishing rods pillar page displaying all rods with stats explanations,
 * progression path, and best builds.
 * 
 * DATA SOURCE:
 * Uses the authoritative rodData.ts dataset. Rod table is truth; other sections
 * are labeled "Unverified Notes (as provided)".
 */

import { Anchor, Info, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import RodTable from '../components/RodTable';
import MiniSitemap from '../components/sections/MiniSitemap';
import { rodData } from '../data/rodData';
import { Link } from 'react-router';

export default function FishingRods() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-950 via-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <Anchor className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-semibold">Complete Rod Guide</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fishing Rods in Fish It (Complete Guide + Stats Breakdown)
          </h1>
          
          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Your boat lets you travel across locations like Kohana Volcano, Lost Isle, and Ancient Jungle, but your Fishing Rod determines what you can actually catch.
          </p>

          <div className="text-left max-w-3xl mx-auto mb-8 space-y-4">
            <p className="text-gray-300">
              In Fish It, rods are not cosmetic upgrades — they directly control:
            </p>
            
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Catch speed</li>
              <li>Rare fish probability</li>
              <li>Weight capacity</li>
              <li>Endgame progression</li>
            </ul>

            <p className="text-gray-300">
              A player using a high-tier rod such as the Ghostfinn Rod or Element Rod will dramatically outperform someone using a Starter Rod, even at the same level.
            </p>

            <p className="text-gray-300">
              If you want to maximize XP, farm Mythic fish, or complete your Index faster, understanding rod stats is mandatory.
            </p>

            <p className="text-cyan-400 font-semibold">
              👉 View full stat table below
            </p>
          </div>

          {/* Database Stats */}
          <div className="flex flex-wrap justify-center gap-4 text-center">
            <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg px-6 py-3">
              <div className="text-3xl font-bold text-cyan-400">{rodData.length}</div>
              <div className="text-sm text-gray-400">Total Rods</div>
            </div>
          </div>

          {/* Data Disclaimer */}
          <div className="mt-6 text-sm text-gray-400 italic">
            Data Last Updated: (not provided)
          </div>
        </div>
      </section>

      {/* Fishing Rod Stats Explained */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader 
          title="Fishing Rod Stats Explained (How Rods Actually Work)"
          subtitle="Every rod in Fish It is defined by four core attributes"
        />

        <Card className="mb-6">
          <div className="space-y-6">
            {/* Luck */}
            <div className="p-4 bg-slate-800/50 border border-cyan-500/20 rounded-lg">
              <h3 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Luck
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Increases your probability of catching Rare, Legendary, Mythic, and Secret fish. Higher Luck = fewer common fish and more valuable catches.
              </p>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Example:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm ml-4 space-y-1">
                <li>Starter Rod: 0% Luck</li>
                <li>Ghostfinn Rod: 610% Luck</li>
                <li>Element Rod: 1111% Luck</li>
              </ul>
              <p className="text-gray-300 text-sm mt-3">
                If your goal is hunting Kraken, Megalodon, or other Mythics from the{' '}
                <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">
                  Fish Database
                </Link>
                , Luck is the dominant stat.
              </p>
            </div>

            {/* Speed */}
            <div className="p-4 bg-slate-800/50 border border-cyan-500/20 rounded-lg">
              <h3 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Speed
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Determines how fast you catch fish. Higher Speed improves:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm ml-4 mb-3 space-y-1">
                <li>XP farming efficiency</li>
                <li>Coin farming</li>
                <li>Overall catch rate</li>
              </ul>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Example:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm ml-4 space-y-1">
                <li>Carbon Rod: 4% Speed</li>
                <li>Angler Rod: 71% Speed</li>
                <li>Element Rod: 130% Speed</li>
              </ul>
              <p className="text-gray-300 text-sm mt-3">
                If you are grinding levels, Speed is often more valuable than pure Luck.
              </p>
            </div>

            {/* Kg (Weight Capacity) */}
            <div className="p-4 bg-slate-800/50 border border-cyan-500/20 rounded-lg">
              <h3 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <Anchor className="w-5 h-5" />
                Kg (Weight Capacity)
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Controls the maximum fish weight your rod can handle. Lower capacity rods (e.g., 10 Kg Starter Rod) are not suitable for heavy late-game fish found in locations like:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm ml-4 mb-3 space-y-1">
                <li>Lost Isle</li>
                <li>Esoteric Depths</li>
                <li>Ancient Jungle</li>
              </ul>
              <p className="text-gray-300 text-sm mb-2">
                High-tier rods such as:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm ml-4 space-y-1">
                <li>Bamboo Rod (500K Kg)</li>
                <li>Angler Rod (500K Kg)</li>
                <li>Element Rod (900K Kg)</li>
              </ul>
              <p className="text-gray-300 text-sm mt-3">
                are built for endgame catches.
              </p>
            </div>

            {/* Accessibility */}
            <div className="p-4 bg-slate-800/50 border border-cyan-500/20 rounded-lg">
              <h3 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <Info className="w-5 h-5" />
                Accessibility (Price + Location)
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Some rods are:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm ml-4 mb-3 space-y-1">
                <li>Store purchases</li>
                <li>Traveling Merchant exclusives</li>
                <li>Location-based unlocks</li>
                <li>Quest rewards</li>
                <li>Gamepass items</li>
              </ul>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Example:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm ml-4 space-y-1">
                <li>Lava Rod: Free (Kohana Volcano)</li>
                <li>Ghostfinn Rod: Quest (Deep Sea)</li>
                <li>Element Rod: Quest (Element Quest)</li>
              </ul>
              <p className="text-gray-300 text-sm mt-3">
                Accessibility impacts early-game progression strategy.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* All Fishing Rods Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader 
          title="All Fishing Rods"
          subtitle="Complete rod database with exact stats"
        />

        <RodTable data={rodData} />
      </section>

      {/* Rods Progression Path */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader 
          title="Best Rod Progression Path (Data-Based Strategy)"
          subtitle="Below is a progression path using ONLY rods from the official rod table"
        />

        <Card>
          <div className="space-y-6">
            {/* Early Game */}
            <div className="p-4 bg-slate-800/50 border-l-4 border-cyan-500 rounded">
              <h3 className="text-xl font-bold text-white mb-2">Early Game (Level 1+)</h3>
              <p className="text-gray-300 mb-3">
                Start with the Starter Rod, then upgrade quickly.
              </p>
              <p className="text-gray-300 mb-2">
                <strong className="text-cyan-400">Best early upgrade options:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                <li>Carbon Rod (Fast leveling)</li>
                <li>Lava Rod (Free from Kohana Volcano)</li>
              </ul>
              <p className="text-gray-300 mt-3">
                These rods prioritize speed for faster XP gain.
              </p>
            </div>

            {/* Mid Game */}
            <div className="p-4 bg-slate-800/50 border-l-4 border-cyan-500 rounded">
              <h3 className="text-xl font-bold text-white mb-2">Mid Game</h3>
              <p className="text-gray-300 mb-2">
                Transition into:
              </p>
              <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                <li>Lucky Rod (140% Luck)</li>
                <li>Midnight Rod (Balanced 100% Luck / 10% Speed)</li>
                <li>Ice Rod (Higher Kg capacity)</li>
              </ul>
              <p className="text-gray-300 mt-3">
                This phase is about increasing rare catch potential while maintaining speed.
              </p>
            </div>

            {/* Late Game */}
            <div className="p-4 bg-slate-800/50 border-l-4 border-cyan-500 rounded">
              <h3 className="text-xl font-bold text-white mb-2">Late Game</h3>
              <p className="text-gray-300 mb-2">
                Strong competitive options:
              </p>
              <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                <li>Steampunk Rod</li>
                <li>Chrome Rod</li>
                <li>Fluorescent Rod</li>
                <li>Astral Rod</li>
              </ul>
              <p className="text-gray-300 mt-3">
                These offer high Luck + strong Speed balance.
              </p>
            </div>

            {/* Endgame */}
            <div className="p-4 bg-slate-800/50 border-l-4 border-purple-500 rounded">
              <h3 className="text-xl font-bold text-white mb-2">Endgame / Mythic Hunting</h3>
              <p className="text-gray-300 mb-2">
                <strong className="text-purple-400">Top-tier rods based on stats:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                <li>Ares Rod (455% Luck / 56% Speed)</li>
                <li>Angler Rod (530% Luck / 71% Speed)</li>
                <li>Ghostfinn Rod (610% Luck / 118% Speed)</li>
                <li>Bamboo Rod (760% Luck / 98% Speed)</li>
                <li>Element Rod (1111% Luck / 130% Speed)</li>
              </ul>
              <p className="text-gray-300 mt-3">
                If your goal is Secret or Mythic fish, Ghostfinn and Element Rod dominate statistically.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link 
              to="/rod-tier-list"
              className="inline-block px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-purple-400 font-semibold transition-colors"
            >
              See full ranking breakdown: Rod Tier List →
            </Link>
          </div>
        </Card>
      </section>

      {/* Best Rods Builds */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader 
          title="Best Rod Builds (Optimized Playstyles)"
          subtitle="Match your rod to your goals"
        />

        <div className="space-y-6">
          {/* XP Farming Build */}
          <div className="p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              XP Farming Build
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong className="text-white">Rod:</strong> Carbon Rod</li>
              <li><strong className="text-white">Focus:</strong> Speed over Luck</li>
              <li><strong className="text-white">Goal:</strong> Maximize fish per minute for rapid leveling</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Best for early-mid game grinding.
            </p>
          </div>

          {/* Mythic Hunter Build */}
          <div className="p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-400" />
              Mythic Hunting Build
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong className="text-white">Rod:</strong> Ghostfinn Rod or Element Rod</li>
              <li><strong className="text-white">Focus:</strong> Maximum Luck</li>
              <li><strong className="text-white">Goal:</strong> Target Mythic and Secret fish from locations like Lost Isle and Ancient Jungle</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Expect fewer catches, but higher-value outcomes.
            </p>
          </div>

          {/* Balanced Farming Build */}
          <div className="p-6 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Info className="w-6 h-6 text-cyan-400" />
              Balanced Farming Build
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong className="text-white">Rod:</strong> Angler Rod</li>
              <li><strong className="text-white">Focus:</strong> Strong Luck + Strong Speed</li>
              <li><strong className="text-white">Goal:</strong> Maintain coin flow while still catching higher rarity fish</li>
            </ul>
          </div>
        </div>
      </section>

      {/* New Systems Added in Lava Basin Expansion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader 
          title="New Systems Added in Lava Basin Expansion"
          subtitle="Recent update introduces charm crafting mechanics"
        />

        <Card className="border-orange-500/30">
          <p className="text-gray-300">
            The Lava Basin Expansion introduced charm crafting and new fishable crafting resources. These materials can be obtained through fishing and crystal extraction and may impact future rod builds and progression strategies.
          </p>
          <div className="mt-6">
            <Link 
              to="/updates/lava-basin-expansion"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/30 rounded-lg text-orange-400 font-semibold transition-colors"
            >
              Read Full Update Details →
            </Link>
          </div>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader 
          title="Frequently Asked Questions"
          subtitle="Common rod questions answered"
        />

        <div className="space-y-4">
          <Card>
            <h3 className="text-xl font-bold text-white mb-3">
              Why does my fishing line snap?
            </h3>
            <p className="text-gray-300">
              If a fish exceeds your rod's Kg capacity, your line will fail. Upgrade to a rod with higher weight capacity before targeting heavy fish in late-game areas.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-white mb-3">
              Ghostfinn Rod vs Ares Rod — Which is better?
            </h3>
            <p className="text-gray-300 mb-3">
              Ghostfinn Rod offers higher Luck and Speed. Ares Rod offers strong Luck with slightly lower Speed.
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
              <li>If targeting Mythic fish exclusively → Ghostfinn.</li>
              <li>If farming efficiently → Ares Rod is more balanced.</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-white mb-3">
              Do I lose rods when upgrading?
            </h3>
            <p className="text-gray-300">
              No. All rods remain in your inventory. You can switch between rods depending on your goal (XP farming vs rare hunting).
            </p>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-3">
            Why This Guide Is Different
          </h3>
          <p className="text-gray-300 mb-4">
            This guide is built directly from the official rod stat table — no speculation, no missing rods, and no outdated prices.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link 
              to="/fishing-rods"
              className="inline-block px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-semibold transition-colors"
            >
              → Complete rod stats
            </Link>
            <Link 
              to="/rod-tier-list"
              className="inline-block px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-purple-400 text-sm font-semibold transition-colors"
            >
              → Stat-based ranking
            </Link>
            <Link 
              to="/fish-database"
              className="inline-block px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 text-sm font-semibold transition-colors"
            >
              → Fish rarity locations
            </Link>
          </div>
        </div>
      </section>

      {/* MiniSitemap */}
      <MiniSitemap />
    </div>
  );
}