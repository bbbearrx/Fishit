/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SECRET FISH PAGE — SEO AUTHORITY PAGE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /secret-fish
 * 
 * PURPOSE:
 * SEO-dominant authority page for Fish It secret fish queries.
 * Targets: "Fish It secret fish", "All secret fish Fish It", "Fish It ultra rare fish"
 * 
 * DATA INTEGRITY:
 * - ONLY displays fish where rarity === "Secret" from fishData.ts
 * - Do NOT invent fish or change data values
 * - Preserve "???" chance values exactly as they appear
 * - Do NOT claim specific acquisition methods unless verified in fishData
 */

import { Sparkles, AlertCircle, Database, Map, TrendingUp, BookOpen, Clock } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import FishTable from '../components/FishTable';
import { getSecretFish } from '../data/fishData';
import { Link } from 'react-router';

export default function SecretFish() {
  const secretFish = getSecretFish();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-950 via-pink-900 to-slate-900 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 text-sm font-semibold">Ultra Rare</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fish It Secret Fish List (2026 Ultra-Rare Database)
          </h1>
          
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Secret fish are the rarest tier in Roblox Fish It. This page lists every Secret fish currently present in our Fish Database, including its primary location, listed catch chance (some may be unknown and shown as ???), and value notes. Use this page as a trophy tracker — and always verify targets through the Fish Database filters.
          </p>

          {/* Stats */}
          <div className="bg-slate-900/50 border border-purple-500/30 rounded-lg px-8 py-4 inline-block">
            <div className="text-4xl font-bold text-purple-400">{secretFish.length}</div>
            <div className="text-sm text-gray-400">Secret Fish Discovered</div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* Quick Links Row */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="bg-gradient-to-r from-purple-950/30 to-pink-950/30 border-purple-500/30">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white mb-2">Quick Navigation</h2>
            <p className="text-gray-300 text-sm">
              Essential pages for secret fish hunting
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <Button to="/fish-database" variant="outline" size="sm" className="justify-center">
              <Database className="w-4 h-4 mr-2" />
              Fish Database
            </Button>
            <Button to="/locations" variant="outline" size="sm" className="justify-center">
              <Map className="w-4 h-4 mr-2" />
              Locations
            </Button>
            <Button to="/rarities" variant="outline" size="sm" className="justify-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Rarities
            </Button>
            <Button to="/rod-tier-list" variant="outline" size="sm" className="justify-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Rod Tier List
            </Button>
            <Button to="/updates" variant="outline" size="sm" className="justify-center">
              <Clock className="w-4 h-4 mr-2" />
              Updates
            </Button>
          </div>
        </Card>
      </section>

      {/* Important Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Do Some Secret Fish Have '???' Catch Chances?
          </h2>
        </div>

        <Card className="bg-yellow-900/20 border-yellow-500/30">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Some entries may not have a published or confirmed probability. The database preserves unknown chances as '???' rather than guessing. Treat these as long-term trophy goals and track them as the wiki updates. Check the <Link to="/updates" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">Updates</Link> page for patch notes and data changes.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Secret Fish Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-purple-500/20">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            All Secret Fish (Database-Verified)
          </h2>
          <p className="text-gray-300 text-lg">
            To see the full spawn pool for a location, open the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> and filter by location.
          </p>
        </div>

        <FishTable 
          data={secretFish} 
          showRarityFilter={false}
          defaultRarity="Secret"
        />
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* How to Use This Page */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-purple-500/20">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-green-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How to Use the Secret Fish List Efficiently
          </h2>
        </div>

        <Card className="bg-gradient-to-r from-green-950/30 to-cyan-950/30 border-green-500/30">
          <ul className="space-y-4 text-gray-300 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold text-xl flex-shrink-0">→</span>
              <span>
                Start by choosing a target location (use the <Link to="/locations" className="text-green-400 hover:text-green-300 underline font-semibold">Locations page</Link>).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold text-xl flex-shrink-0">→</span>
              <span>
                Verify the fish's listed chance and value notes in the table above.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold text-xl flex-shrink-0">→</span>
              <span>
                Compare rods before long sessions using the <Link to="/rod-tier-list" className="text-green-400 hover:text-green-300 underline font-semibold">Rod Tier List</Link>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold text-xl flex-shrink-0">→</span>
              <span>
                Track changes after patches on the <Link to="/updates" className="text-green-400 hover:text-green-300 underline font-semibold">Updates page</Link>.
              </span>
            </li>
          </ul>
        </Card>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CTA Box */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-purple-500/20">
        <Card className="bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border-cyan-500/30 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want the Full Fish Index?
          </h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Secret fish are only one tier. Use the Fish Database to browse every fish by location and rarity.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button to="/fish-database" size="lg">
              <Database className="w-5 h-5 mr-2" />
              Open Fish Database
            </Button>
            <Button to="/rarities" variant="outline" size="lg">
              <Sparkles className="w-5 h-5 mr-2" />
              View Rarity Tiers
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
