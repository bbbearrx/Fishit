/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ROD DETAIL PAGE — DYNAMIC TEMPLATE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /fishing-rods/:slug
 * 
 * PURPOSE:
 * Shows detailed stats and information for a specific fishing rod.
 */

import { useParams, Link } from 'react-router';
import { Anchor, TrendingUp, DollarSign, MapPin, Info } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import RelatedPages from '../components/sections/RelatedPages';
import RelatedGuides from '../components/sections/RelatedGuides';
import { getRodBySlug, getRodsByType, getRodSlug } from '../data/rodData';

export default function RodDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const rod = getRodBySlug(slug || '');
  
  if (!rod) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="text-center max-w-md">
          <Anchor className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Rod Not Found</h1>
          <p className="text-gray-400 mb-4">
            The fishing rod you're looking for doesn't exist in our database.
          </p>
          <Link 
            to="/fishing-rods"
            className="inline-block px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-lg text-cyan-400 font-semibold transition-colors"
          >
            ← Back to All Rods
          </Link>
        </Card>
      </div>
    );
  }

  const rodName = rod["Rod Name"];
  const rodType = rod.Type;

  // Get related rods (same type)
  const relatedRods = getRodsByType(rodType)
    .filter(r => r["Rod Name"] !== rodName)
    .slice(0, 3);

  // Get type badge variant
  const getTypeVariant = (type: string): 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'default' => {
    const map: Record<string, 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic'> = {
      'Common': 'common',
      'Uncommon': 'uncommon',
      'Rare': 'rare',
      'Epic': 'epic',
      'Legendary': 'legendary',
      'Mythic': 'mythic',
    };
    return map[type] || 'default';
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
            <Link to="/fishing-rods" className="text-cyan-400 hover:text-cyan-300">Fishing Rods</Link>
            <span className="text-gray-500 mx-2">›</span>
            <span className="text-gray-400">{rodName}</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
              <Anchor className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                {rodName}
              </h1>
              <Badge variant={getTypeVariant(rodType)} className="text-lg px-4 py-1">
                {rodType}
              </Badge>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl">
            Detailed stats and requirements for the {rodName}. All data shown exactly as provided in the database.
          </p>
        </div>
      </section>

      {/* Rod Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-6">Rod Stats</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Luck */}
          <Card>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Luck</div>
                <div className="text-2xl font-bold text-white">{rod.Luck}</div>
              </div>
            </div>
          </Card>

          {/* Speed */}
          <Card>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Speed</div>
                <div className="text-2xl font-bold text-white">{rod.Speed}</div>
              </div>
            </div>
          </Card>

          {/* Weight Capacity */}
          <Card>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Weight (Kg)</div>
                <div className="text-2xl font-bold text-white">{rod.Kg}</div>
              </div>
            </div>
          </Card>

          {/* Price */}
          <Card>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Price</div>
                <div className="text-2xl font-bold text-white">{rod.Price}</div>
              </div>
            </div>
          </Card>

          {/* Location */}
          <Card>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Location</div>
                <div className="text-lg font-bold text-white">{rod.Location}</div>
              </div>
            </div>
          </Card>

          {/* Type */}
          <Card>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Info className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Type</div>
                <Badge variant={getTypeVariant(rodType)} className="text-lg px-3 py-1">
                  {rodType}
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Notes & Requirements */}
        <Card className="bg-slate-900/50 border-cyan-500/30">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-cyan-400" />
            Notes & Requirements
          </h3>
          <p className="text-gray-300 whitespace-pre-line">
            {rod["Notes & Requirements"]}
          </p>
        </Card>

        {/* Where to Get It */}
        <Card className="mt-6 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-cyan-500/30">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-cyan-400" />
            Where to Get It
          </h3>
          <p className="text-gray-300">
            This rod can be obtained from: <strong className="text-white">{rod.Location}</strong>
          </p>
        </Card>
      </section>

      {/* Related Rods */}
      {relatedRods.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Other {rodType} Rods
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedRods.map((relatedRod) => (
              <Link
                key={relatedRod["Rod Name"]}
                to={`/fishing-rods/${getRodSlug(relatedRod["Rod Name"])}`}
                className="block"
              >
                <Card hover className="h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">
                      {relatedRod["Rod Name"]}
                    </h3>
                    <Badge variant={getTypeVariant(relatedRod.Type)}>
                      {relatedRod.Type}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Luck:</span>
                      <span className="text-white font-semibold">{relatedRod.Luck}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Speed:</span>
                      <span className="text-white font-semibold">{relatedRod.Speed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-white font-semibold">{relatedRod.Price}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Pages */}
      <RelatedPages 
        parent={{ label: 'All Fishing Rods', href: '/fishing-rods' }}
        related={[
          { label: 'Fish Database', href: '/fish-database' },
          { label: 'Rarities Guide', href: '/rarities' },
        ]}
        includeHome={true}
      />

      {/* Related Guides */}
      <RelatedGuides />
    </div>
  );
}
