/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RARE FISH HUNTING STRATEGIES - MYTHIC & SECRET TARGETING GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/rare-fish-hunting
 * 
 * SEO: Targets "Fish It rare fish hunting", "how to catch mythic fish", "secret fish guide"
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import Badge from '../../components/Badge';
import { Link } from 'react-router';

export default function RareFishHunting() {
  return (
    <div className="min-h-screen">
      
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-16 border-b border-cyan-500/20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
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
            Rare Fish Hunting (Mythic & Secret Targeting Guide)
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-12 space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Rare fish hunting is the most rewarding activity in Fish It—but only when done correctly. Mythic and Secret fish sell for 40,000-150,000+ coins each, but require optimized gear, location knowledge, and patience.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide explains how to efficiently hunt Legendary, Mythic, and Secret fish without wasting hours on inefficient sessions.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Understanding Rarity Tiers
          </h2>
          <div className="space-y-4 mb-6">
            <Card className="bg-purple-950/20 border-purple-500/30">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="legendary">Legendary</Badge>
                <span className="text-lg font-semibold text-white">Legendary Fish</span>
              </div>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Catch rates: 1 in 10,000 → 1 in 50,000</li>
                <li>Sell values: 8,000 - 40,000 coins</li>
                <li>Viable starting at Level 50+ with Lucky Rod or better</li>
              </ul>
            </Card>

            <Card className="bg-pink-950/20 border-pink-500/30">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="mythic">Mythic</Badge>
                <span className="text-lg font-semibold text-white">Mythic Fish</span>
              </div>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Catch rates: 1 in 50,000 → 1 in 200,000</li>
                <li>Sell values: 40,000 - 150,000+ coins</li>
                <li>Requires high Luck rods (Astral Rod, Bamboo Rod, or better)</li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-r from-pink-950/20 to-purple-950/20 border-pink-500/30">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="secret">Secret</Badge>
                <span className="text-lg font-semibold text-white">Secret Fish</span>
              </div>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Catch rates: 1 in 500,000+</li>
                <li>Sell values: Listed as "Invaluable"</li>
                <li>Trophy fish for Fish Index completion</li>
                <li>Requires S-tier rods (Ghostfinn, Element Rod) + consumables</li>
              </ul>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Minimum Requirements for Rare Hunting
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">For Legendary Fish:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Minimum Level: 50+</li>
            <li>Minimum Rod: Lucky Rod (140% Luck, 7% Speed)</li>
            <li>Recommended Rod: Chrome Rod (280% Luck, 23% Speed)</li>
            <li>Session Length: 30-60 minutes</li>
          </ul>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">For Mythic Fish:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Minimum Level: 75+</li>
            <li>Minimum Rod: Astral Rod (380% Luck, 43% Speed)</li>
            <li>Recommended Rod: Bamboo Rod (760% Luck, 98% Speed)</li>
            <li>Consumables: Luck Totem or Luck II Potion</li>
            <li>Session Length: 60-120 minutes</li>
          </ul>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">For Secret Fish:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Minimum Level: 100+</li>
            <li>Required Rod: Ghostfinn Rod or Element Rod</li>
            <li>Consumables: Luck Totem + Luck II Potion stacked</li>
            <li>Session Length: 120+ minutes (2+ hours)</li>
            <li>Location Research: Required via <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link></li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Location Targeting Strategy
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Step-by-step workflow:</strong>
          </p>
          <ol className="text-gray-300 text-lg leading-relaxed space-y-3 mb-6 list-decimal list-inside">
            <li>Open the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link></li>
            <li>Filter by Mythic or Secret rarity</li>
            <li>Review which locations contain your target fish</li>
            <li>Check if your rod's Kg capacity can handle those fish</li>
            <li>Equip maximum Luck gear + consumables</li>
            <li>Start a focused 1-2 hour grinding session at that location</li>
          </ol>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Example:</strong>
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            If targeting Mythic fish at Lost Isle, filter the database by "Lost Isle" + "Mythic" to see exactly which fish you can expect. Then equip Bamboo Rod + Luck Totem for optimal catch probability.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Luck Stacking for Maximum Efficiency
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">Optimal Luck Stack:</strong>
            </p>
            <ol className="text-gray-300 text-lg leading-relaxed space-y-2 list-decimal list-inside">
              <li><strong>Base Rod Luck:</strong> 610-1111% (Ghostfinn or Element Rod)</li>
              <li><strong>Luck Totem:</strong> Active buff (from <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">codes</Link>)</li>
              <li><strong>Luck II Potion:</strong> Additional boost</li>
              <li><strong>Exclusive Bait:</strong> Optional targeting modifier</li>
            </ol>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            This stack can increase Mythic catch probability by 3-5x compared to using only a rod.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Session Length and Probability
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Rare fish hunting requires extended sessions because probability compounds over time.
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">30 min session:</span>
                <span>~200-300 casts (low Mythic probability)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">60 min session:</span>
                <span>~400-600 casts (moderate Mythic probability)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 font-bold">120 min session:</span>
                <span>~800-1200 casts (good Mythic probability)</span>
              </li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Secret fish (1 in 500,000+) may require multiple 2+ hour sessions even with maximum Luck.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Common Rare Hunting Mistakes
          </h2>
          <Card className="bg-red-950/20 border-red-500/30">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Hunting Mythic fish with rods below 300% Luck</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Starting rare hunting sessions before Level 50</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Not using Luck Totems during dedicated hunting sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Fishing at locations without confirming target fish spawn there</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Giving up after 30 minutes (probability requires longer sessions)</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Best Locations for Rare Fish
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            High-value Mythic and Secret fish are concentrated in specific locations:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">Lost Isle:</span>
              <span>Multiple Mythic fish, 8M coin unlock, high-tier location</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold">Ancient Jungle:</span>
              <span>Secret and Mythic fish pool, end-game location</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">Esoteric Depths:</span>
              <span>Deep-sea Mythic fish, requires high Kg capacity rods</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">Tropical Grove:</span>
              <span>Mid-tier Mythic location, good for Astral/Chrome Rod farming</span>
            </li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Use the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> location filters to see exact spawn pools.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Rare Hunting Checklist
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Level 75+ with high-tier rod (Bamboo or better)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Luck Totem + Luck II Potion active</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Location confirmed via Fish Database</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>2+ hour session planned</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Tracking catches to measure efficiency</span>
              </li>
            </ul>
          </Card>
        </div>

      </section>

    </div>
  );
}
