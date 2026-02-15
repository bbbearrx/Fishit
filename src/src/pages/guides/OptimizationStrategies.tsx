/**
 * ═══════════════════════════════════════════════════════════════════════════
 * OPTIMIZATION STRATEGIES - ADVANCED EFFICIENCY GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/optimization-strategies
 * 
 * SEO: Targets "Fish It optimization", "advanced strategies", "efficiency guide"
 */

import { ArrowLeft, TrendingUp } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function OptimizationStrategies() {
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

          <div className="flex items-center gap-4 mb-6">
            <TrendingUp className="w-12 h-12 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Optimization Strategies (Advanced Efficiency Guide)
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-12 space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Optimization in Fish It means extracting maximum value from every second of gameplay. Advanced players track metrics, test builds, and refine strategies to achieve 2-5x better efficiency than casual players at the same level.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide covers advanced optimization techniques used by top-tier grinders to maximize progression speed.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Optimization Hierarchy
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">Priority order for optimization:</strong>
            </p>
            <ol className="text-gray-300 text-lg leading-relaxed space-y-2 list-decimal list-inside">
              <li><strong className="text-cyan-400">Rod efficiency</strong> - Highest ROI upgrades</li>
              <li><strong className="text-purple-400">Location targeting</strong> - Match location to goal</li>
              <li><strong className="text-pink-400">Session structure</strong> - Minimize idle time</li>
              <li><strong className="text-yellow-400">Metric tracking</strong> - Measure and improve</li>
              <li><strong className="text-blue-400">Consumable timing</strong> - Use when it matters most</li>
            </ol>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Rod Efficiency Optimization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Strategy: Tier jumping over incremental upgrades</strong>
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Efficient Path:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Starter → Carbon (750 coins, +4% Speed)</li>
              <li>Carbon → Lucky (15K coins, +140% Luck)</li>
              <li>Lucky → Chrome (500K coins, +280% Luck)</li>
              <li>Chrome → Astral (1M coins, +380% Luck)</li>
              <li>Astral → Bamboo (12M coins, +760% Luck)</li>
              <li>Bamboo → Ghostfinn (Quest, +610% Luck + 118% Speed)</li>
              <li>Ghostfinn → Element (Quest, +1111% Luck + 130% Speed)</li>
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Inefficient Path (avoid):</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Buying every rod in sequence (wastes 50K-200K+ coins)</li>
              <li>Purchasing marginal upgrades like Grass Rod, Ice Rod, Demascus Rod</li>
              <li>Buying gamepass rods (C-tier stats, poor value)</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Check the <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> before every purchase to avoid wasting coins.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Location Targeting Optimization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Strategy: Match location to session goal</strong>
          </p>
          <div className="space-y-4 mb-6">
            <Card className="bg-cyan-950/20 border-cyan-500/30">
              <p className="text-lg font-semibold text-white mb-2">
                <span className="text-cyan-400">Goal:</span> XP Grinding
              </p>
              <ul className="text-gray-300 space-y-1 list-disc list-inside">
                <li>Location: Fisherman Island (early) or The Ocean (mid-game)</li>
                <li>Rod: Carbon Rod or Midnight Rod (Speed-focused)</li>
                <li>Target: High-frequency Common/Uncommon fish</li>
                <li>Metric: XP-per-hour</li>
              </ul>
            </Card>

            <Card className="bg-purple-950/20 border-purple-500/30">
              <p className="text-lg font-semibold text-white mb-2">
                <span className="text-purple-400">Goal:</span> Coin Farming
              </p>
              <ul className="text-gray-300 space-y-1 list-disc list-inside">
                <li>Location: Tropical Grove, Lost Isle, Ancient Jungle</li>
                <li>Rod: Astral Rod or Bamboo Rod (balanced Luck/Speed)</li>
                <li>Target: Legendary fish (8K-40K coin value)</li>
                <li>Metric: Coins-per-hour</li>
              </ul>
            </Card>

            <Card className="bg-pink-950/20 border-pink-500/30">
              <p className="text-lg font-semibold text-white mb-2">
                <span className="text-pink-400">Goal:</span> Rare Hunting
              </p>
              <ul className="text-gray-300 space-y-1 list-disc list-inside">
                <li>Location: Esoteric Depths, Ancient Jungle, Lost Isle</li>
                <li>Rod: Ghostfinn Rod or Element Rod (maximum Luck)</li>
                <li>Target: Mythic/Secret fish (40K-150K+ coins)</li>
                <li>Metric: Rare catch rate per session</li>
              </ul>
            </Card>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Use the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> to verify spawn pools before starting any session.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Session Structure Optimization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Strategy: Minimize idle time, maximize catch frequency</strong>
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Optimized Session Flow:</strong>
            </p>
            <ol className="text-gray-300 text-lg leading-relaxed space-y-2 list-decimal list-inside">
              <li>Cast immediately upon entering location</li>
              <li>Wait for bite notification (don't recast early)</li>
              <li>Reel in catch as soon as bite occurs</li>
              <li>Sell immediately (don't batch sells)</li>
              <li>Recast within 1-2 seconds of selling</li>
              <li>Repeat without breaks or distractions</li>
            </ol>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Time optimization breakdown:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Average catch cycle: 10-30 seconds (depends on rod Speed stat)</li>
            <li>Idle time per catch: 1-5 seconds (selling + recasting)</li>
            <li>Reducing idle from 5s → 1s = +40% catches per hour</li>
            <li>Over 60 minutes, that's 50+ extra catches = significant XP/coin gain</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Metric Tracking Optimization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Strategy: Track performance, identify bottlenecks, iterate</strong>
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Essential Metrics to Track:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <div>
                  <strong>XP-per-hour:</strong> XP gained ÷ session duration
                  <p className="text-gray-400 text-base mt-1">Tracks leveling efficiency</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <div>
                  <strong>Coins-per-hour:</strong> Total coins ÷ session duration
                  <p className="text-gray-400 text-base mt-1">Tracks income efficiency</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <div>
                  <strong>Catches-per-hour:</strong> Total catches ÷ session duration
                  <p className="text-gray-400 text-base mt-1">Tracks casting efficiency</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <div>
                  <strong>Rare catch rate:</strong> (Legendary+ catches ÷ total catches) × 100%
                  <p className="text-gray-400 text-base mt-1">Tracks Luck effectiveness</p>
                </div>
              </li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            If any metric drops below your baseline, adjust rod, location, or strategy immediately.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Consumable Timing Optimization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Strategy: Use consumables only when ROI justifies cost</strong>
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">When to use Luck Totems/Potions:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Mythic/Secret hunting sessions (60+ minutes)</li>
              <li>High-value location farming (Lost Isle, Ancient Jungle)</li>
              <li>When you have S-tier rod (Ghostfinn or Element)</li>
              <li>During focused rare catch attempts</li>
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">When NOT to use consumables:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>General XP grinding (waste of resources)</li>
              <li>Short sessions under 30 minutes (insufficient ROI)</li>
              <li>Before Level 50 (low base Luck makes consumables ineffective)</li>
              <li>Without proper rod foundation (Luck stacking requires high base stats)</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Get free consumables from <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">active codes</Link> before buying with coins.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Compound Efficiency Strategy
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Strategy: Stack multiple optimizations for exponential gains</strong>
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Example: Mid-Game Coin Farming Optimization</strong>
            </p>
            <ol className="text-gray-300 text-lg leading-relaxed space-y-3 list-decimal list-inside">
              <li>Equip Astral Rod (380% Luck, 43% Speed) — tier-jump upgrade</li>
              <li>Use <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> to identify Lost Isle's Legendary fish pool</li>
              <li>Activate Luck Totem from <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">active codes</Link></li>
              <li>Start 60-minute focused session at Lost Isle</li>
              <li>Minimize idle time (1-2s between catches)</li>
              <li>Track coins-per-hour to measure effectiveness</li>
              <li>Adjust if metric drops below baseline</li>
            </ol>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Each optimization layer multiplies effectiveness. Combined, they can increase rewards by 3-5x compared to random grinding.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Optimization Checklist
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Always tier-jump rods instead of incremental upgrades</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Match location to session goal (XP, Coins, or Rare Hunting)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Minimize idle time between catches (target &lt;2 seconds)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Track XP-per-hour and coins-per-hour every session</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Use consumables only during 60+ minute focused sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Stack optimizations for compound efficiency gains</span>
              </li>
            </ul>
          </Card>
        </div>

      </section>

    </div>
  );
}
