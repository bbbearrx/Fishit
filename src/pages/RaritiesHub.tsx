/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RARITIES HUB PAGE — SEO AUTHORITY PAGE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /rarities
 * 
 * PURPOSE:
 * SEO-dominant authority page for Fish It rarity system queries.
 * Targets: "Fish It rarities", "Fish It rarity tiers", "Mythic vs Legendary",
 * "Secret fish rarity"
 * 
 * DATA INTEGRITY:
 * - Use ONLY confirmed rarities: Common, Uncommon, Rare, Epic, Legendary, Mythic, Secret
 * - Do NOT invent drop rates beyond database values
 * - Do NOT mention unverified mechanics
 */

import { Award, TrendingUp, Database, Map, Anchor, Fish, BookOpen } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import { getUniqueRarities, getFishByRarity, getRaritySlug } from '../data/fishData';
import { Link } from 'react-router';

export default function RaritiesHub() {
  const rarities = getUniqueRarities();

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Rarity Tier Data
  // ═══════════════════════════════════════════════════════════════════════════
  const rarityDescriptions: Record<string, string> = {
    'Common': 'Most frequently found fish with lower values',
    'Uncommon': 'Moderately rare fish with decent value',
    'Rare': 'Hard to find fish with high value',
    'Epic': 'Very rare fish with very high value',
    'Legendary': 'Extremely rare fish with jackpot values',
    'Mythic': 'Ultra rare fish worth massive amounts',
    'Secret': 'Special event or quest fish with invaluable status',
  };

  const rarityGuidance: Record<string, string> = {
    'Common': 'XP stability and learning locations',
    'Uncommon': 'XP stability and learning locations',
    'Rare': 'Mid-game targets and value scaling',
    'Epic': 'Mid-game targets and value scaling',
    'Legendary': 'High-value targets with low odds',
    'Mythic': 'High-value targets with low odds',
    'Secret': 'Trophy-tier entries; some odds may be unknown (???) or special',
  };

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
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-300 text-sm font-semibold">Rarity Tiers</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fish It Rarities Explained (Common → Secret Tier Guide)
          </h1>
          
          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto">
            Every fish in Roblox Fish It belongs to one of seven rarity tiers: Common, Uncommon, Rare, Epic, Legendary, Mythic, or Secret. Rarity affects how difficult a fish is to catch (its listed chance in the Fish Database) and generally correlates with value potential. This page explains what each tier means, when it's efficient to target it, and how to use the database to plan progression without wasting time chasing ultra-rare fish too early.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* Quick Links Row */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border-cyan-500/30">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white mb-2">Quick Navigation</h2>
            <p className="text-gray-300 text-sm">
              Jump to essential tools for rarity-based planning
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button to="/fish-database" variant="outline" size="sm" className="justify-center">
              <Database className="w-4 h-4 mr-2" />
              Fish Database
            </Button>
            <Button to="/locations" variant="outline" size="sm" className="justify-center">
              <Map className="w-4 h-4 mr-2" />
              Locations
            </Button>
            <Button to="/rod-tier-list" variant="outline" size="sm" className="justify-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Rod Tier List
            </Button>
            <Button to="/secret-fish" variant="outline" size="sm" className="justify-center">
              <Fish className="w-4 h-4 mr-2" />
              Secret Fish
            </Button>
          </div>
        </Card>
      </section>

      {/* Rarity Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fish It Rarity Tiers (Overview)
          </h2>
          <p className="text-gray-300 text-lg">
            Use this as a practical interpretation guide. Exact probabilities vary per fish and are listed in the Fish Database.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rarities.map(rarity => {
            const fishCount = getFishByRarity(rarity).length;
            return (
              <Link
                key={rarity}
                to={`/rarities/${getRaritySlug(rarity)}`}
                className="block"
              >
                <Card hover className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <Badge 
                      variant={getRarityVariant(rarity)}
                      className="text-lg px-4 py-2"
                    >
                      {rarity}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{fishCount}</div>
                      <div className="text-sm text-gray-400">fish</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-3">
                    {rarityDescriptions[rarity] || 'Special fish category'}
                  </p>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-400 mb-1">Best for:</p>
                    <p className="text-sm text-cyan-300 font-semibold">
                      {rarityGuidance[rarity]}
                    </p>
                  </div>

                  <div className="flex items-center text-cyan-400 text-sm font-semibold">
                    Browse in Database →
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* Mythic vs Legendary Comparison */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-cyan-500/20">
        <div className="flex items-center gap-3 mb-8">
          <Award className="w-8 h-8 text-yellow-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Mythic vs Legendary (What's the Difference?)
          </h2>
        </div>

        <Card className="bg-gradient-to-r from-yellow-950/30 to-orange-950/30 border-yellow-500/30">
          <ul className="space-y-4 text-gray-300 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold text-xl flex-shrink-0">→</span>
              <span>
                Both are high-value tiers with low listed catch chances per fish.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold text-xl flex-shrink-0">→</span>
              <span>
                Legendary fish are rare; Mythic fish are typically rarer within the database.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold text-xl flex-shrink-0">→</span>
              <span>
                Always use the <Link to="/fish-database" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">Fish Database</Link> to compare actual catch chance and value per entry.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold text-xl flex-shrink-0">→</span>
              <span>
                Efficiency matters: chasing ultra-rare tiers too early can reduce XP-per-minute. Use the <Link to="/rod-tier-list" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">Rod Tier List</Link> to optimize your setup first.
              </span>
            </li>
          </ul>
        </Card>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* How to Use Rarity for Progression */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-cyan-500/20">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-green-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How to Use Rarity for Efficient Progression
          </h2>
        </div>

        <Card className="bg-gradient-to-r from-green-950/30 to-cyan-950/30 border-green-500/30">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 text-sm font-bold">1</span>
                Early Game
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed ml-10">
                Focus on volume and learning a single location spawn pool. Common and Uncommon fish provide consistent XP and teach you the location's spawn patterns. Check the <Link to="/locations" className="text-green-400 hover:text-green-300 underline">Locations guide</Link> to pick your starter area.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 text-sm font-bold">2</span>
                Mid Game
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed ml-10">
                Introduce Rare/Epic targets when your rod stats allow consistent catches. Use the <Link to="/fishing-rods" className="text-green-400 hover:text-green-300 underline">Fishing Rods database</Link> and <Link to="/rod-tier-list" className="text-green-400 hover:text-green-300 underline">Rod Tier List</Link> to identify which rods match your current progression stage.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 text-sm font-bold">3</span>
                Late Game
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed ml-10">
                Selectively target Legendary/Mythic entries with intentional sessions. These fish have extremely low catch chances, so plan fishing sessions around specific targets rather than random casting.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 text-sm font-bold">4</span>
                Trophy Hunting
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed ml-10">
                Secret fish should be treated as long-term goals. Many have unknown (???) catch rates or require special conditions. Visit the <Link to="/guides" className="text-green-400 hover:text-green-300 underline">Guides hub</Link> for advanced strategies.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Secret Fish Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-cyan-500/20">
        <div className="flex items-center gap-3 mb-8">
          <Fish className="w-8 h-8 text-purple-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Secret Tier (Ultra-Rare Fish)
          </h2>
        </div>

        <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Secret fish are the rarest tier in Fish It. In the Fish Database, some Secret entries show unknown chance values (???) or special acquisition notes. This is normal for trophy-tier content where exact odds may not be public.
          </p>
          
          <div className="bg-purple-950/50 border border-purple-500/30 rounded-lg p-6">
            <p className="text-purple-300 text-lg font-semibold mb-3">
              Open the <Link to="/secret-fish" className="text-purple-200 hover:text-white underline">Secret Fish page</Link> for the full list.
            </p>
          </div>
        </Card>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FAQ Section */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          FAQ
        </h2>

        <div className="space-y-6">
          {/* Q1 */}
          <Card className="border-cyan-500/30">
            <h3 className="text-xl font-bold text-white mb-3">
              Where can I see the exact chance for each fish?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Use the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> — each fish entry lists its chance and location. The database shows the verified catch chance values per fish (or ??? for unknown odds).
            </p>
          </Card>

          {/* Q2 */}
          <Card className="border-cyan-500/30">
            <h3 className="text-xl font-bold text-white mb-3">
              Are Mythic fish always worth more than Legendary?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Not always. Value varies per entry, so compare fish by value in the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link>. Rarity correlates with difficulty, not guaranteed value.
            </p>
          </Card>

          {/* Q3 */}
          <Card className="border-cyan-500/30">
            <h3 className="text-xl font-bold text-white mb-3">
              Why do some Secret fish show "???" chance?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Some odds may be unknown or not published, and the database reflects that. Visit the <Link to="/secret-fish" className="text-cyan-400 hover:text-cyan-300 underline">Secret Fish page</Link> for more information on trophy-tier entries.
            </p>
          </Card>

          {/* Q4 */}
          <Card className="border-cyan-500/30">
            <h3 className="text-xl font-bold text-white mb-3">
              How do I choose what rarity to target next?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Use the <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> and <Link to="/locations" className="text-cyan-400 hover:text-cyan-300 underline">Locations guide</Link> and pick targets you can catch consistently. Don't chase ultra-rare fish before you have the rod stats to support it.
            </p>
          </Card>
        </div>
      </section>

      {/* Back to Database */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <Link 
          to="/fish-database"
          className="inline-block px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-lg text-cyan-400 font-semibold transition-colors"
        >
          ← Back to Full Database
        </Link>
      </section>
    </div>
  );
}