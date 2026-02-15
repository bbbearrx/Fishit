/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FISH DATABASE PAGE — SEO PILLAR PAGE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Main database pillar page that displays ALL fish from the dataset.
 * Provides filtering, searching, and sorting capabilities.
 * 
 * ROUTE: /fish-database
 * 
 * DATA SOURCE:
 * Uses the authoritative fishData.ts dataset. No external data or guessing.
 * 
 * SEO ELEMENTS:
 * - H1 with primary keywords
 * - Breadcrumbs (Home > Fish Database)
 * - MiniSitemap component
 * - Links to all location pages
 * - Links to all rarity pages
 * - "Data Last Updated" disclaimer
 */

import { Database, MapPin, Award, Fish, Anchor, TrendingUp } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import FishTable from '../components/FishTable';
import MiniSitemap from '../components/sections/MiniSitemap';
import { fishData, getUniqueLocations, getUniqueRarities, getLocationSlug, getRaritySlug } from '../data/fishData';
import { Link } from 'react-router';

export default function FishDatabase() {
  const locations = getUniqueLocations();
  const rarities = getUniqueRarities();

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
            <Database className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-semibold">Complete Database</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fish It Fish Database
          </h1>
          
          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Welcome to the complete Fish It Fish Database. This page contains every verified fish currently available across all major locations in Roblox Fish It, including Common, Uncommon, Rare, Epic, Legendary, Mythic, and Secret tiers. Each entry includes confirmed catch chance data, primary location, and approximate coin value ranges to help you plan efficient farming sessions.
          </p>

          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Use the filters above to sort by location or rarity, then combine this information with the Fishing Rods page and Rod Tier List to reduce wasted casts and optimize XP-per-minute. This database is structured for progression planning — not guesswork.
          </p>

          {/* Database Stats */}
          <div className="flex flex-wrap justify-center gap-4 text-center">
            <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg px-6 py-3">
              <div className="text-3xl font-bold text-cyan-400">{fishData.length}</div>
              <div className="text-sm text-gray-400">Total Fish Entries</div>
            </div>
            <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg px-6 py-3">
              <div className="text-3xl font-bold text-cyan-400">{locations.length}</div>
              <div className="text-sm text-gray-400">Locations</div>
            </div>
            <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg px-6 py-3">
              <div className="text-3xl font-bold text-cyan-400">{rarities.length}</div>
              <div className="text-sm text-gray-400">Rarity Tiers</div>
            </div>
          </div>

          {/* Data Disclaimer */}
          <div className="mt-6 text-sm text-gray-400 italic">
            Data Last Updated: (not provided)
          </div>
        </div>
      </section>

      {/* Location Authority Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-cyan-500/20">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <MapPin className="w-8 h-8 text-cyan-400" />
            All Fish Locations in Roblox Fish It
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The Fish It world is divided into 11 confirmed fishing regions. Each location has a unique fish pool and rarity distribution. Mastering location progression is more efficient than random exploration.
          </p>

          <Card className="bg-slate-800/30 border-cyan-500/30">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-300 text-lg">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Fisherman Island
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                The Ocean
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Kohana Island
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Kohana Volcano
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Coral Reef Island
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Esoteric Depths
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Tropical Grove
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Crater Island
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Lost Isle
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Ancient Jungle
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Classic Island
              </li>
            </ul>
          </Card>

          <p className="text-gray-300 text-lg leading-relaxed mt-6">
            For full progression planning, visit the <Link to="/locations" className="text-cyan-400 hover:text-cyan-300 underline">Map Locations guide</Link> to understand when to move between islands.
          </p>
        </div>
      </section>

      {/* Rarity Explanation Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-cyan-500/20">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <Award className="w-8 h-8 text-yellow-400" />
            Fish It Rarity System Explained
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Each fish in Roblox Fish It belongs to one of seven rarity tiers: Common, Uncommon, Rare, Epic, Legendary, Mythic, or Secret. Higher rarity fish typically have lower catch probabilities and higher coin value potential. However, chasing rarity too early can reduce XP efficiency.
          </p>

          <Card className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-500/30">
            <p className="text-gray-300 text-lg">
              For full rarity breakdown and strategy comparisons, see the <Link to="/rarities" className="text-yellow-400 hover:text-yellow-300 underline font-semibold">Rarities page</Link>.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Navigation Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Locations Card */}
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Browse by Location</h2>
            </div>
            <p className="text-gray-400 mb-4">
              View fish specific to each fishing location in Fish It.
            </p>
            <div className="flex flex-wrap gap-2">
              {locations.map(location => (
                <Link 
                  key={location}
                  to={`/fish-database/${getLocationSlug(location)}`}
                  className="inline-block px-3 py-1 bg-slate-800 hover:bg-slate-700 border border-cyan-500/30 rounded text-cyan-400 text-sm transition-colors"
                >
                  {location}
                </Link>
              ))}
            </div>
          </Card>

          {/* Rarities Card */}
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Browse by Rarity</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Filter fish by rarity tier from Common to Secret.
            </p>
            <div className="flex flex-wrap gap-2">
              {rarities.map(rarity => (
                <Link 
                  key={rarity}
                  to={`/rarities/${getRaritySlug(rarity)}`}
                  className="inline-block"
                >
                  <Badge 
                    variant={
                      rarity === 'Common' ? 'common' :
                      rarity === 'Uncommon' ? 'uncommon' :
                      rarity === 'Rare' ? 'rare' :
                      rarity === 'Epic' ? 'epic' :
                      rarity === 'Legendary' ? 'legendary' :
                      rarity === 'Mythic' ? 'mythic' : 'default'
                    }
                    className="cursor-pointer hover:scale-105 transition-transform"
                  >
                    {rarity}
                  </Badge>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Main Fish Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader 
          title="Complete Fish Database"
          subtitle="All fish entries with exact drop rates and values"
        />

        <FishTable data={fishData} />
      </section>

      {/* Secret Fish Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
          <Fish className="w-8 h-8 text-purple-400" />
          Secret & Ultra-Rare Fish Strategy
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Secret fish represent the rarest category in Fish It. Many have unknown (???) catch rates or are event/quest dependent. These should only be targeted once you have appropriate rods and efficiency builds.
        </p>

        <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30">
          <p className="text-gray-300 text-lg">
            See the complete <Link to="/secret-fish" className="text-purple-400 hover:text-purple-300 underline font-semibold">Secret Fish guide</Link> for focused strategies.
          </p>
        </Card>
      </section>

      {/* Rod Planning CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-cyan-500/20">
        <Card className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-cyan-500/30">
          <div className="text-center py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Plan Your Build Before You Fish
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              The Fish Database tells you what exists. The Fishing Rods and Rod Tier List pages tell you how to catch it efficiently.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/fishing-rods" size="lg">
                <Anchor className="w-5 h-5 mr-2" />
                View All Fishing Rods
              </Button>
              <Button to="/rod-tier-list" size="lg" variant="outline">
                <TrendingUp className="w-5 h-5 mr-2" />
                See Rod Tier Rankings
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* MiniSitemap */}
      <MiniSitemap />
    </div>
  );
}