/**
 * ═══════════════════════════════════════════════════════════════════════════
 * WHAT NOT TO DO - COMMON MISTAKES GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/what-not-to-do
 * 
 * SEO: Targets "Fish It mistakes to avoid", "Fish It beginner mistakes", "what not to do fish it"
 */

import { ArrowLeft, AlertTriangle } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function WhatNotToDo() {
  return (
    <div className="min-h-screen">
      
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-16 border-b border-cyan-500/20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
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
            <AlertTriangle className="w-12 h-12 text-red-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              What NOT to Do in Fish It (2026 Mistakes Guide)
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-12 space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Fish It progression is fast when you avoid common mistakes. But most players waste hours on inefficient strategies that feel productive but hurt long-term progress.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide identifies the most common mistakes and explains why they slow you down.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Mistake #1: Rare Fish Hunting Before Level 50
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What players do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Spend hours casting at advanced locations trying to catch Mythic/Secret fish with starter or low-tier rods.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Why it's wrong:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Low Luck stats make rare catches extremely unlikely</li>
              <li>Time spent waiting for rare fish = zero XP gain</li>
              <li>You earn more coins grinding Common/Uncommon fish fast</li>
              <li>Rare fish require high Kg capacity rods you don't have yet</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">What to do instead:</strong> Focus on XP grinding with Speed-focused rods until Level 50, then start rare hunting with proper gear.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Mistake #2: Buying Every Rod
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What players do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Purchase every single rod in order (Starter → Luck → Grass → Ice → Demascus → etc.) believing gradual upgrades are efficient.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Why it's wrong:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Marginal stat increases (e.g., 50% Luck → 55% Luck) provide minimal improvement</li>
              <li>Coins spent on weak rods delay access to tier-jump upgrades</li>
              <li>Many mid-tier rods are worse than skipping to the next tier entirely</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">What to do instead:</strong> Jump tiers. Go Starter → Carbon → Lucky → Chrome → Astral → Bamboo. Check the <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> before buying.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Mistake #3: Ignoring Speed Stats
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What players do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Prioritize Luck-focused rods over Speed-focused rods early game because "Luck sounds better."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Why it's wrong:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Early game XP is volume-based, not rarity-based</li>
              <li>4% Speed on Carbon Rod &gt; 140% Luck on Lucky Rod for Level 1-25 grinding</li>
              <li>Speed compounds over hours — every second saved = more catches = more XP</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">What to do instead:</strong> Buy Carbon Rod immediately (750 coins). Grind to Level 50 before switching to Luck-focused rods.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Mistake #4: Fishing Without Location Research
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What players do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Cast randomly at any location without checking which fish actually spawn there.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Why it's wrong:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Each island has a unique spawn pool — random casting wastes time</li>
              <li>You might be fishing at a location that doesn't have the fish you want</li>
              <li>Efficiency = targeting high-value fish at the right location</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">What to do instead:</strong> Use the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> to filter by location BEFORE starting a session. Know your targets.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Mistake #5: Not Using Active Codes
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What players do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Never redeem codes because they "don't seem important."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Why it's wrong:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Codes give free Luck Totems, Exclusive Baits, Luck II Potions, and Presents</li>
              <li>These items would cost hours of grinding to obtain normally</li>
              <li>Active codes expire — waiting = losing free rewards</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">What to do instead:</strong> Check the <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">Codes page</Link> regularly and redeem every active code.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Mistake #6: Hoarding Fish Instead of Selling
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What players do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Keep fish in inventory "just in case" instead of selling immediately.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Why it's wrong:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Coins locked in inventory = zero progression value</li>
              <li>Delayed upgrades = slower XP gain = slower leveling</li>
              <li>Fish have no use except selling (no crafting/trading)</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">What to do instead:</strong> Sell every catch immediately. Convert fish to coins to coins to upgrades to efficiency.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Mistake #7: Unlocking Islands Too Early
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What players do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Rush to unlock every island immediately without coin stability or proper rods.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Why it's wrong:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Advanced islands require high Kg capacity rods to catch their fish</li>
              <li>Spending unlock fees depletes coin reserves needed for rod upgrades</li>
              <li>You end up at a harder location with weak gear = inefficiency</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">What to do instead:</strong> Stabilize coin income and rod quality BEFORE unlocking new islands. Follow the progression path in <Link to="/guides/fastest-way-to-progress" className="text-cyan-400 hover:text-cyan-300 underline">Fastest Way to Progress</Link>.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Mistake #8: Buying Gamepass Rods
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What players do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Purchase Gold Rod, Hyper Rod, or Angelic Rod thinking they're "premium upgrades."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Why it's wrong:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Gamepass rods are ranked C-tier on the <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link></li>
              <li>They're outclassed by free mid-game rods like Ares Rod or Angler Rod</li>
              <li>Stats don't justify Robux cost vs free alternatives</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">What to do instead:</strong> Save Robux. Grind for free rods which have better late-game stats.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quick Mistake Checklist
          </h2>
          <Card className="bg-red-950/20 border-red-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <strong className="text-red-400">Avoid These:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Rare fish hunting before Level 50</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Buying every rod instead of tier jumping</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Ignoring Speed stats for early XP</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Fishing without checking spawn pools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Not redeeming active codes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Hoarding fish instead of selling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Unlocking islands before you're ready</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Buying gamepass rods</span>
              </li>
            </ul>
          </Card>
        </div>

      </section>

    </div>
  );
}
