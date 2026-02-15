/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FISH DETAIL PAGE — DYNAMIC TEMPLATE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /fish/:slug
 * 
 * PURPOSE:
 * Shows all occurrences of a specific fish across different locations.
 * Some fish appear in multiple locations with different stats.
 * 
 * DATA: Uses getFishOccurrences() from fishData.ts to find all rows matching the fish name.
 */

import { useParams, Link } from 'react-router';
import { Fish, MapPin, TrendingUp, DollarSign } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import SectionHeader from '../components/SectionHeader';
import RelatedPages from '../components/sections/RelatedPages';
import RelatedGuides from '../components/sections/RelatedGuides';
import { fishData, getFishSlug, getLocationSlug } from '../data/fishData';

export default function FishDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  // Find all occurrences of this fish (some fish appear in multiple locations)
  const occurrences = fishData.filter(fish => getFishSlug(fish["Fish Name"]) === slug);
  
  if (occurrences.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="text-center max-w-md">
          <Fish className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Fish Not Found</h1>
          <p className="text-gray-400 mb-4">
            The fish you're looking for doesn't exist in our database.
          </p>
          <Link 
            to="/fish-database"
            className="inline-block px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-lg text-cyan-400 font-semibold transition-colors"
          >
            ← Back to Database
          </Link>
        </Card>
      </div>
    );
  }

  const fishName = occurrences[0]["Fish Name"];
  const primaryRarity = occurrences[0].Rarity;

  // Get rarity badge variant
  const getRarityVariant = (rarity: string): 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'default' => {
    const map: Record<string, 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic'> = {
      'Common': 'common',
      'Uncommon': 'uncommon',
      'Rare': 'rare',
      'Epic': 'epic',
      'Legendary': 'legendary',
      'Mythic': 'mythic',
    };
    return map[rarity] || 'default';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-950 via-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm">
            <Link to="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
            <span className="text-gray-500 mx-2">›</span>
            <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300">Fish Database</Link>
            <span className="text-gray-500 mx-2">›</span>
            <span className="text-gray-400">{fishName}</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
              <Fish className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                {fishName}
              </h1>
              <Badge variant={getRarityVariant(primaryRarity)} className="text-lg px-4 py-1">
                {primaryRarity}
              </Badge>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl">
            Detailed information for {fishName}. All data shown exactly as provided in the database.
          </p>
        </div>
      </section>

      {/* All Known Occurrences */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader 
          title="All Known Occurrences"
          subtitle={occurrences.length > 1 ? "This fish can be found in multiple locations" : "Location and catch details"}
        />

        <div className="space-y-6">
          {occurrences.map((occurrence, index) => (
            <Card key={index} hover>
              <div className="grid md:grid-cols-4 gap-6">
                {/* Location */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-sm font-semibold text-gray-400">Location</h3>
                  </div>
                  <Link 
                    to={`/fish-database/${getLocationSlug(occurrence.Location)}`}
                    className="text-white hover:text-cyan-400 transition-colors font-medium text-lg"
                  >
                    {occurrence.Location}
                  </Link>
                </div>

                {/* Rarity */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-sm font-semibold text-gray-400">Rarity</h3>
                  </div>
                  <Badge variant={getRarityVariant(occurrence.Rarity)}>
                    {occurrence.Rarity}
                  </Badge>
                </div>

                {/* Chance */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-sm font-semibold text-gray-400">Catch Chance</h3>
                  </div>
                  <p className="text-white font-medium text-lg">
                    {occurrence.Chance}
                  </p>
                </div>

                {/* Value */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-sm font-semibold text-gray-400">Value</h3>
                  </div>
                  <p className="text-white font-medium text-lg">
                    {occurrence.Value}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Data Note */}
        <div className="mt-6 p-4 bg-slate-900/50 border border-cyan-500/20 rounded-lg">
          <p className="text-gray-400 text-sm italic">
            <strong>Note:</strong> All data displayed exactly as provided. 
            {occurrences.some(occ => occ.Chance === '???') && ' Some chances are unknown (???). '}
            {occurrences.some(occ => occ.Chance.includes('Event') || occ.Chance.includes('Quest') || occ.Chance.includes('Boss')) && 
              ' This fish may only be available during special events or quests.'}
          </p>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages 
        parent={{ label: 'Fish Database', href: '/fish-database' }}
        related={[
          { label: 'All Locations', href: '/fish-database' },
          { label: `All ${primaryRarity} Fish`, href: `/rarities/${primaryRarity.toLowerCase()}` },
        ]}
        includeHome={true}
      />

      {/* Related Guides */}
      <RelatedGuides />
    </div>
  );
}
