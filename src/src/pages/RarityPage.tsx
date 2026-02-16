/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RARITY PAGE COMPONENT — REUSABLE TEMPLATE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /rarities/:rarity
 * 
 * PURPOSE:
 * Displays all fish of a specific rarity tier.
 */

import { Award } from 'lucide-react';
import Badge from '../components/Badge';
import SectionHeader from '../components/SectionHeader';
import FishTable from '../components/FishTable';
import { getFishByRarity } from '../data/fishData';
import { Link } from 'react-router';

interface RarityPageProps {
  rarity: string;
}

export default function RarityPage({ rarity }: RarityPageProps) {
  const fish = getFishByRarity(rarity);

  const getRarityVariant = (r: string): 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'default' => {
    const map: Record<string, 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic'> = {
      'Common': 'common',
      'Uncommon': 'uncommon',
      'Rare': 'rare',
      'Epic': 'epic',
      'Legendary': 'legendary',
      'Mythic': 'mythic',
    };
    return map[r] || 'default';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-950 via-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm">
            <Link to="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
            <span className="text-gray-500 mx-2">›</span>
            <Link to="/rarities" className="text-cyan-400 hover:text-cyan-300">Rarities</Link>
            <span className="text-gray-500 mx-2">›</span>
            <span className="text-gray-400">{rarity}</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                {rarity} Fish
              </h1>
              <Badge variant={getRarityVariant(rarity)} className="text-lg px-4 py-1">
                {rarity}
              </Badge>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mb-6">
            All {rarity.toLowerCase()} rarity fish in Fish It. Browse exact drop rates, locations, and values.
          </p>

          {/* Stats */}
          <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg px-6 py-3 inline-block">
            <div className="text-3xl font-bold text-cyan-400">{fish.length}</div>
            <div className="text-sm text-gray-400">{rarity} fish found</div>
          </div>
        </div>
      </section>

      {/* Fish Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader 
          title={`All ${rarity} Fish`}
          subtitle="Complete list with locations and drop chances"
        />

        <FishTable 
          data={fish} 
          showRarityFilter={false}
          defaultRarity={rarity}
        />
      </section>

      {/* Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <Link 
          to="/rarities"
          className="inline-block px-6 py-3 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/30 rounded-lg text-yellow-300 font-semibold transition-colors mr-4"
        >
          ← View All Rarities
        </Link>
        <Link 
          to="/fish-database"
          className="inline-block px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-lg text-cyan-400 font-semibold transition-colors"
        >
          Full Fish Database
        </Link>
      </section>
    </div>
  );
}
