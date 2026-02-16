/**
 * ═══════════════════════════════════════════════════════════════════════════
 * MAXIMIZING REWARDS - SESSION OPTIMIZATION GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/maximizing-rewards
 * 
 * SEO: Targets "Fish It maximize rewards", "how to farm coins faster", "XP optimization"
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function MaximizingRewards() {
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
            Maximizing Rewards (Session Optimization Guide)
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-12 space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Maximizing rewards in Fish It means optimizing every fishing session for the highest coin-per-hour, XP-per-hour, or rare-catch-per-session outcomes. Players who understand session optimization earn 2-5x more rewards than those who fish randomly.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide explains how to plan, execute, and measure efficient fishing sessions.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Session Planning Framework
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Before starting any session, define your primary goal:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">XP Grinding:</span>
                <span>Maximize catches-per-hour with Speed-focused rods (Carbon, Midnight)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">Coin Farming:</span>
                <span>Target locations with high-value Legendary fish (Lost Isle, Tropical Grove)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 font-bold">Rare Hunting:</span>
                <span>Equip maximum Luck gear and farm Mythic/Secret fish for 2+ hours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">Fish Index Completion:</span>
                <span>Use <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> to identify missing species</span>
              </li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Never mix goals in a single session. Focus creates efficiency.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Maximizing XP-per-Hour
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Optimal setup:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Rod: Carbon Rod (early) or Midnight Rod (mid-game)</li>
            <li>Location: Fisherman Island (early) or The Ocean (mid-game)</li>
            <li>Strategy: Cast → Catch → Sell → Repeat immediately</li>
            <li>Session length: 30-60 minutes</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Why it works:</strong>
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            XP is earned through catch volume. Speed stats reduce time between catches, increasing XP-per-minute. Avoid rare fishing during XP grinding—it's inefficient.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Maximizing Coins-per-Hour
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Optimal setup:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Rod: Chrome Rod, Astral Rod, or Bamboo Rod</li>
            <li>Location: Tropical Grove, Lost Isle, or Ancient Jungle</li>
            <li>Target: Legendary and Mythic fish (8K-150K coin value each)</li>
            <li>Consumables: Luck Totem if available</li>
            <li>Session length: 60-120 minutes</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Strategy:</strong>
          </p>
          <ol className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-decimal list-inside">
            <li>Filter <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> by location + Legendary/Mythic</li>
            <li>Identify which fish have the highest sell values</li>
            <li>Fish at that location with high-Luck rod</li>
            <li>Sell everything immediately to maintain inventory flow</li>
          </ol>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Maximizing Rare Catch Rate
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Optimal setup:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Rod: Ghostfinn Rod or Element Rod</li>
            <li>Consumables: Luck Totem + Luck II Potion (stacked)</li>
            <li>Location: Esoteric Depths, Ancient Jungle, Lost Isle</li>
            <li>Session length: 120+ minutes (2+ hours)</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Why long sessions matter:</strong>
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Mythic fish have 1 in 50,000 → 1 in 200,000 catch rates. Secret fish exceed 1 in 500,000. Even with maximum Luck stacking, you need hundreds or thousands of casts to hit these probabilities.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Short sessions (under 60 minutes) have low rare catch probability regardless of Luck stats.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Using Codes for Bonus Rewards
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Active codes provide free consumables that directly increase session rewards:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">Luck Totems:</span>
              <span>Increase rare catch probability during grinding sessions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">Luck II Potions:</span>
              <span>Stack with Totems for maximum Mythic/Secret hunting efficiency</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold">Exclusive Baits:</span>
              <span>Target specific high-value fish</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">Rod Skins & Presents:</span>
              <span>Cosmetics and mystery rewards</span>
            </li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Check <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">active codes</Link> before every session to maximize free rewards.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Session Efficiency Metrics
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Track these metrics to measure session effectiveness:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <span><strong>Coins-per-hour:</strong> Total coins earned ÷ session time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <span><strong>XP-per-hour:</strong> XP gained ÷ session time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <span><strong>Catches-per-hour:</strong> Total catches ÷ session time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <span><strong>Rare catch rate:</strong> (Legendary+ catches ÷ total catches) × 100%</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <span><strong>Average coin-per-catch:</strong> Total coins ÷ total catches</span>
              </li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            If any metric drops below your baseline, adjust location, rod, or strategy.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Location-Based Reward Optimization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Different locations optimize for different rewards:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">Fisherman Island:</span>
              <span>Best for early XP grinding (high catch frequency, low value)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">The Ocean:</span>
              <span>Balanced XP and coin farming for mid-game</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">Tropical Grove:</span>
              <span>Good Legendary fish pool for coin farming</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold">Lost Isle:</span>
              <span>Multiple Mythic fish, excellent coin-per-hour potential</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">Ancient Jungle:</span>
              <span>End-game Mythic/Secret hunting</span>
            </li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Use the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> to verify spawn pools before committing to a location.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Reward Maximization Checklist
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Define session goal (XP, Coins, or Rare Hunting) before starting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Equip optimal rod for your goal (Speed for XP, Luck for rare hunting)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Check <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">active codes</Link> for free consumables</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Filter <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> by location to identify targets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Track coins-per-hour and XP-per-hour to measure efficiency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Adjust strategy if metrics drop below baseline</span>
              </li>
            </ul>
          </Card>
        </div>

      </section>

    </div>
  );
}
