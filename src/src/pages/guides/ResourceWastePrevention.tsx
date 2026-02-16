/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RESOURCE WASTE PREVENTION - COIN SAVING STRATEGIES GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/resource-waste-prevention
 * 
 * SEO: Targets "Fish It save coins", "avoid wasting money", "resource management"
 */

import { ArrowLeft, Shield } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function ResourceWastePrevention() {
  return (
    <div className="min-h-screen">
      
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-16 border-b border-cyan-500/20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
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
            <Shield className="w-12 h-12 text-green-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Resource Waste Prevention (Coin Saving Strategies)
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-12 space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Most Fish It players waste 50,000-200,000+ coins on inefficient purchases during their progression. These wasted coins represent hours of grinding that could have been avoided with proper planning and discipline.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide identifies the most common resource waste traps and explains how to avoid them completely.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Core Principle
          </h2>
          <Card className="bg-green-950/20 border-green-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <strong className="text-green-400">Golden Rule:</strong>
            </p>
            <p className="text-gray-300 text-xl leading-relaxed text-center py-4">
              Every coin spent should provide a measurable efficiency increase of at least 25%
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              If a purchase doesn't meet this threshold, delay it and save for a tier-jump upgrade that does.
            </p>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Waste Trap #1: Incremental Rod Purchases
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Common waste pattern:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Buying every rod in sequence: Starter → Luck → Grass → Ice → Demascus → etc.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Why it's wasteful:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Luck Rod (50% Luck) → Grass Rod (55% Luck) = only +5% improvement for 500 coins</li>
              <li>These marginal gains don't justify the cost</li>
              <li>Coins spent on weak rods delay access to tier-jump upgrades</li>
              <li>Total waste: 50K-100K+ coins on D/C-tier rods</li>
            </ul>
          </Card>
          <Card className="bg-green-950/20 border-green-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-green-400">Waste prevention strategy:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Skip: Luck Rod, Grass Rod, Ice Rod, Demascus Rod, Fluorescent Rod</li>
              <li>Only buy: Carbon → Lucky → Chrome → Astral → Bamboo → Quest rods</li>
              <li>Coins saved: 50K-100K+ (5-10 hours of grinding)</li>
              <li>Check <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> before every purchase</li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Waste Trap #2: Premature Location Unlocks
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Common waste pattern:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Unlocking every island immediately without coin stability or proper rod stats.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Why it's wasteful:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Island unlock fees (5K-8M coins) deplete savings needed for rod upgrades</li>
              <li>Advanced islands require high Kg capacity rods you don't have yet</li>
              <li>Fishing at harder locations with weak gear = poor efficiency = wasted time</li>
            </ul>
          </Card>
          <Card className="bg-green-950/20 border-green-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-green-400">Waste prevention strategy:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Only unlock new locations after establishing rod foundation</li>
              <li>Verify you can afford your next rod tier immediately after unlocking</li>
              <li>Check <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> to confirm you can catch that location's fish</li>
              <li>Prioritize rod upgrades over location exploration</li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Waste Trap #3: Gamepass Rod Purchases
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Common waste pattern:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Buying Gold Rod, Hyper Rod, or Angelic Rod thinking they're "premium shortcuts."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Why it's wasteful:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>All gamepass rods are ranked C-tier (mediocre stats)</li>
              <li>They're outclassed by free mid-game rods (Ares Rod, Angler Rod)</li>
              <li>Robux spent could be saved for other games/purchases</li>
              <li>End-game quest rods make gamepass rods completely obsolete</li>
            </ul>
          </Card>
          <Card className="bg-green-950/20 border-green-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-green-400">Waste prevention strategy:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Skip all gamepass rods entirely</li>
              <li>Grind for free rods with better stats (Bamboo Rod = 760% Luck, S-tier)</li>
              <li>Save Robux for other games or real cosmetics</li>
              <li>Check <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> to see C-tier rankings</li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Waste Trap #4: Consumable Misuse
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Common waste pattern:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Using Luck Totems and Luck II Potions during general XP grinding or short sessions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Why it's wasteful:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Consumables cost coins or require codes to obtain</li>
              <li>Using them during XP grinding provides zero benefit (volume &gt; rarity)</li>
              <li>Short sessions (&lt;30 min) don't provide enough time for ROI</li>
              <li>Without high base Luck (500%+), consumables have minimal impact</li>
            </ul>
          </Card>
          <Card className="bg-green-950/20 border-green-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-green-400">Waste prevention strategy:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Only use consumables during 60+ minute Mythic/Secret hunting sessions</li>
              <li>Only use when you have S-tier rod (Ghostfinn or Element)</li>
              <li>Get free consumables from <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">active codes</Link> before buying</li>
              <li>Save consumables for high-value rare hunting, not casual grinding</li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Waste Trap #5: Hoarding Coins Too Long
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Common waste pattern:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Saving coins indefinitely without buying proven upgrades, fearing making a "wrong purchase."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Why it's wasteful:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Coins sitting idle provide zero progression value</li>
              <li>Delayed upgrades = slower XP gain = slower overall progression</li>
              <li>Over-saving wastes potential compounding efficiency gains</li>
            </ul>
          </Card>
          <Card className="bg-green-950/20 border-green-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-green-400">Waste prevention strategy:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Buy tier-jump rod upgrades as soon as you can afford them</li>
              <li>Don't hoard beyond your next major upgrade threshold</li>
              <li>Follow the proven upgrade path: Carbon → Lucky → Chrome → Astral → Bamboo</li>
              <li>Trust the <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> rankings</li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Waste Trap #6: Ignoring Free Resources
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Common waste pattern:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Never redeeming active codes, then buying consumables with hard-earned coins.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Why it's wasteful:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Codes give free Luck Totems, Luck II Potions, Exclusive Baits, and Presents</li>
              <li>These items would cost 5K-20K+ coins if purchased</li>
              <li>Active codes expire — not redeeming = permanently losing free value</li>
            </ul>
          </Card>
          <Card className="bg-green-950/20 border-green-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-green-400">Waste prevention strategy:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Check <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">active codes</Link> weekly</li>
              <li>Redeem every code immediately</li>
              <li>Never buy consumables with coins if codes are available</li>
              <li>Coins saved: 10K-50K+ over your progression</li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Total Waste Prevention Savings
          </h2>
          <Card className="bg-green-950/20 border-green-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <strong className="text-green-400">If you avoid all waste traps:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Incremental rod purchases: Save 50K-100K coins</li>
              <li>Premature location unlocks: Save 10K-30K coins</li>
              <li>Gamepass rods: Save 200-800 Robux</li>
              <li>Consumable misuse: Save 10K-20K coins</li>
              <li>Ignoring codes: Save 10K-50K coins</li>
            </ul>
            <p className="text-gray-300 text-xl font-semibold text-center py-4 text-green-400">
              Total Potential Savings: 80K-200K+ Coins
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              This represents 10-20+ hours of grinding time saved through discipline and planning.
            </p>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Waste Prevention Checklist
          </h2>
          <Card className="bg-green-950/20 border-green-500/30">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✔</span>
                <span>Only buy tier-jump rod upgrades (skip all D/C-tier rods)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✔</span>
                <span>Unlock locations only after establishing rod foundation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✔</span>
                <span>Skip all gamepass rods completely</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✔</span>
                <span>Use consumables only during 60+ minute rare hunting sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✔</span>
                <span>Buy proven upgrades immediately, don't over-hoard coins</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✔</span>
                <span>Redeem all <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">active codes</Link> weekly</span>
              </li>
            </ul>
          </Card>
        </div>

      </section>

    </div>
  );
}
