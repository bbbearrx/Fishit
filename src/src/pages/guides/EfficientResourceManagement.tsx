/**
 * ═══════════════════════════════════════════════════════════════════════════
 * EFFICIENT RESOURCE MANAGEMENT - COIN & UPGRADE OPTIMIZATION GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/efficient-resource-management
 * 
 * SEO: Targets "Fish It resource management", "how to manage coins", "upgrade optimization"
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function EfficientResourceManagement() {
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
            Efficient Resource Management (Coin & Upgrade Optimization)
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-12 space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Coins are the bottleneck in Fish It progression. Poor resource management—overspending on marginal upgrades, hoarding consumables, or buying equipment in the wrong order—can set you back hours or even days of grinding.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide explains how to manage coins, potions, and upgrades efficiently at every progression stage.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Resource Hierarchy
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">Priority order for spending coins:</strong>
            </p>
            <ol className="text-gray-300 text-lg leading-relaxed space-y-2 list-decimal list-inside">
              <li><strong className="text-cyan-400">Tier-jump rod upgrades</strong> (e.g., Starter → Carbon, Lucky → Chrome)</li>
              <li><strong className="text-purple-400">Location unlocks</strong> (only when you can afford the next rod tier immediately after)</li>
              <li><strong className="text-pink-400">Consumables</strong> (Luck Totems, Potions) for dedicated rare hunting sessions</li>
              <li><strong className="text-yellow-400">Minor upgrades</strong> (bobbers, boats) only after establishing rod foundation</li>
            </ol>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Never deviate from this order unless you're 100% certain the alternative provides better ROI.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Early Game Resource Strategy (Level 1-25)
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Goal:</strong> Build coin stability and unlock Carbon Rod ASAP.
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">What to buy:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Carbon Rod (750 coins) — First purchase, no exceptions</li>
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What NOT to buy:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Luck Rod (50% Luck) — waste of 250 coins</li>
              <li>Grass Rod (55% Luck) — marginal improvement over Starter</li>
              <li>Any bobber or boat — save coins for Carbon Rod</li>
              <li>Consumables — ineffective early game</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            After buying Carbon Rod, save every coin for Lucky Rod (15K coins).
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mid-Game Resource Strategy (Level 25-75)
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Goal:</strong> Build toward Chrome Rod → Astral Rod progression.
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Recommended spending path:</strong>
            </p>
            <ol className="text-gray-300 text-lg leading-relaxed space-y-3 list-decimal list-inside">
              <li>Lucky Rod (15K coins) — First mid-tier Luck boost</li>
              <li>Save to 500K for Chrome Rod (don't buy intermediate rods)</li>
              <li>Chrome Rod (500K coins) — Major tier jump</li>
              <li>Save to 1M for Astral Rod</li>
              <li>Astral Rod (1M coins) — Best legendary store option</li>
            </ol>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Resource discipline:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Don't buy Steampunk Rod (215K) if you're close to Chrome Rod (500K)</li>
            <li>Skip Fluorescent Rod (300K) entirely — Chrome Rod is better value</li>
            <li>Delay location unlocks if they prevent rod upgrades</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Late-Game Resource Strategy (Level 75-100+)
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Goal:</strong> Reach Bamboo Rod, then complete quests for Ghostfinn/Element Rod.
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Optimal path:</strong>
            </p>
            <ol className="text-gray-300 text-lg leading-relaxed space-y-3 list-decimal list-inside">
              <li>Astral Rod → Save to 12M for Bamboo Rod (don't buy filler rods)</li>
              <li>Bamboo Rod (12M coins) — Highest store-bought Luck</li>
              <li>Use Bamboo Rod to farm coins for location unlocks and consumables</li>
              <li>Complete Ghostfinn Rod quest (S-tier, quest-locked)</li>
              <li>Complete Element Rod quest (best rod in game)</li>
            </ol>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            At this stage, consumables (Luck Totems, Potions) become valuable for Mythic/Secret hunting. Use them strategically during 2+ hour grinding sessions.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Consumable Management
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">When to use consumables:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">Luck Totems:</span>
              <span>Use during Mythic/Secret hunting sessions (60+ minutes)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">Luck II Potions:</span>
              <span>Stack with Totems for maximum rare fish probability</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold">Exclusive Baits:</span>
              <span>Use when targeting specific high-value fish</span>
            </li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">When NOT to use consumables:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>General XP grinding (waste of resources)</li>
            <li>Short sessions under 30 minutes (insufficient time for ROI)</li>
            <li>Before Level 50 (low Luck base stats make consumables ineffective)</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Get free consumables from <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">active codes</Link> before buying them with coins.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Location Unlock Strategy
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Location unlocks cost coins that could be spent on rod upgrades.
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-white">Decision framework:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Before unlocking a new location, ask:
            </p>
            <ol className="text-gray-300 text-lg leading-relaxed space-y-2 list-decimal list-inside">
              <li>Do I have enough coins left for my next rod upgrade?</li>
              <li>Does this location contain fish that justify the unlock cost?</li>
              <li>Can my current rod handle the Kg requirements of this location's fish?</li>
            </ol>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            If the answer is "no" to any of these, delay the unlock and prioritize rod upgrades.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Common Resource Mistakes
          </h2>
          <Card className="bg-red-950/20 border-red-500/30">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Buying every rod instead of tier jumping (wastes 100K+ coins)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Unlocking all locations before establishing rod foundation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Using consumables during general grinding (low ROI)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Hoarding coins instead of buying proven tier-jump upgrades</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Not checking the <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> before purchases</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Resource Management Checklist
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Always prioritize rod upgrades over cosmetics or minor improvements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Save for tier-jump rods instead of buying every intermediate option</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Use consumables strategically during dedicated rare hunting sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Check <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">active codes</Link> for free Luck Totems and Potions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Delay location unlocks if they prevent critical rod purchases</span>
              </li>
            </ul>
          </Card>
        </div>

      </section>

    </div>
  );
}
