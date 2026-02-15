/**
 * ═══════════════════════════════════════════════════════════════════════════
 * COMMON BEGINNER MISTAKES - EARLY GAME PITFALLS GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/common-beginner-mistakes
 * 
 * SEO: Targets "Fish It beginner mistakes", "new player mistakes", "what to avoid fish it"
 */

import { ArrowLeft, AlertTriangle } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function CommonBeginnerMistakes() {
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
              Common Beginner Mistakes (What New Players Get Wrong)
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-12 space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Most Fish It beginners make the same progression-killing mistakes in their first 10 hours of gameplay. These mistakes seem logical at the time but compound into significant setbacks that slow leveling, waste coins, and delay access to high-tier content.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide identifies the most common early-game mistakes and explains why they hurt progression.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Mistake #1: Skipping Carbon Rod
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What beginners do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Stay with Starter Rod or buy Luck Rod (50% Luck) instead of Carbon Rod because "Luck sounds better than Speed."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Why it's wrong:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Early game XP is volume-based, not rarity-based</li>
              <li>Carbon Rod's 4% Speed = 4% more catches per hour = 4% more XP</li>
              <li>Compounded over 10 hours, that's ~40% more XP than Starter Rod</li>
              <li>Only costs 750 coins — easiest efficiency upgrade in the game</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">Correct approach:</strong> Buy Carbon Rod immediately after your first few catches. It's the single best early-game investment.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Mistake #2: Trying to Catch Rare Fish Too Early
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What beginners do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Spend 2+ hours casting at advanced locations trying to catch Legendary/Mythic fish with Starter Rod or Luck Rod.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Why it's wrong:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Starter Rod (0% Luck) has near-zero Mythic catch probability</li>
              <li>Luck Rod (50% Luck) is still too low for efficient rare hunting</li>
              <li>Time spent waiting for rare fish = zero XP gain = delayed leveling</li>
              <li>You earn more coins grinding Common/Uncommon fish quickly</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">Correct approach:</strong> Focus on XP grinding until Level 50+, then start rare hunting with proper Luck rods (Astral, Bamboo, Ghostfinn).
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Mistake #3: Not Selling Fish Immediately
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What beginners do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Hoard fish in inventory thinking they might need them later or believing they'll get better prices.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Why it's wrong:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Fish have no use except selling (no crafting or trading)</li>
              <li>Coins locked in inventory = zero progression value</li>
              <li>Delayed upgrades = slower XP gain = slower overall progression</li>
              <li>Sell prices don't fluctuate — hoarding provides no benefit</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">Correct approach:</strong> Sell every catch immediately. Convert fish → coins → upgrades → efficiency as fast as possible.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Mistake #4: Fishing Without Checking Location Spawns
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What beginners do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Cast randomly at any location without knowing which fish actually spawn there.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Why it's wrong:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Each island has a unique spawn pool — random fishing wastes time</li>
              <li>You might be at a location that doesn't have the fish you want</li>
              <li>Some locations require high Kg capacity rods you don't have yet</li>
              <li>Planning = efficiency, random casting = wasted sessions</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">Correct approach:</strong> Use the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> to filter by location and see exactly which fish spawn there before starting a session.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Mistake #5: Ignoring Active Codes
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What beginners do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Never check for codes or redeem them because "codes aren't important."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Why it's wrong:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Codes give free Luck Totems, Luck II Potions, Exclusive Baits, Rod Skins, and Presents</li>
              <li>These consumables would cost hours of grinding to obtain normally</li>
              <li>Active codes expire — waiting = permanently losing free rewards</li>
              <li>Luck Totems dramatically increase rare catch probability</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">Correct approach:</strong> Check <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">active codes</Link> regularly and redeem every code immediately.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Mistake #6: Unlocking Islands Too Quickly
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What beginners do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Rush to unlock every island immediately without coin stability or proper rod stats.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Why it's wrong:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Island unlock fees deplete coins needed for rod upgrades</li>
              <li>Advanced islands require high Kg capacity rods to catch their fish</li>
              <li>You end up at harder locations with weak gear = poor efficiency</li>
              <li>Rod upgrades provide permanent benefits, location unlocks are one-time costs</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">Correct approach:</strong> Prioritize rod upgrades. Only unlock new islands after establishing coin stability and proper rod stats for that location.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Mistake #7: Buying Gamepass Rods
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What beginners do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Purchase Gold Rod, Hyper Rod, or Angelic Rod thinking they're "premium shortcuts."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Why it's wrong:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>All gamepass rods are ranked C-tier on the <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link></li>
              <li>They're outclassed by free mid-game rods like Ares Rod or Angler Rod</li>
              <li>Stats don't justify Robux cost compared to grinding for free alternatives</li>
              <li>End-game quest rods (Ghostfinn, Element) make gamepass rods obsolete</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">Correct approach:</strong> Save Robux. Grind for free rods which have superior late-game stats.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            Mistake #8: Not Following a Progression Path
          </h2>
          <Card className="bg-red-950/20 border-red-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">What beginners do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Play randomly without clear goals, buying rods/unlocks based on "what looks cool."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Why it's wrong:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Inefficient spending wastes 50-100K+ coins on marginal upgrades</li>
              <li>No progression structure = slower leveling and delayed milestones</li>
              <li>Players with plans reach Level 100 in half the time of random players</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">Correct approach:</strong> Follow the <Link to="/guides/fastest-way-to-progress" className="text-cyan-400 hover:text-cyan-300 underline">Fastest Way to Progress</Link> guide for a structured level-based roadmap.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quick Mistake Checklist
          </h2>
          <Card className="bg-red-950/20 border-red-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <strong className="text-red-400">Avoid These Common Mistakes:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Skipping Carbon Rod early game</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Rare fish hunting before Level 50</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Hoarding fish instead of selling immediately</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Fishing without checking spawn pools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Ignoring active codes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Unlocking islands before rod stability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Buying gamepass rods</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Playing without a progression plan</span>
              </li>
            </ul>
          </Card>
        </div>

      </section>

    </div>
  );
}
