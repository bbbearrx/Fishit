/**
 * ═══════════════════════════════════════════════════════════════════════════
 * INEFFICIENT PRACTICES - GAMEPLAY HABITS TO AVOID
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/inefficient-practices
 * 
 * SEO: Targets "Fish It inefficient practices", "bad habits", "gameplay mistakes"
 */

import { ArrowLeft, AlertCircle } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function InefficientPractices() {
  return (
    <div className="min-h-screen">
      
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-16 border-b border-cyan-500/20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
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
            <AlertCircle className="w-12 h-12 text-orange-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Inefficient Practices (Gameplay Habits to Avoid)
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-12 space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Inefficient practices are gameplay habits that feel productive but actively slow your progression. Unlike one-time mistakes, these are repeated behaviors that compound into major time waste over weeks of gameplay.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide identifies the most common inefficient practices and explains how to replace them with high-efficiency alternatives.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-orange-400" />
            Inefficient Practice #1: Fishing Without a Session Goal
          </h2>
          <Card className="bg-orange-950/20 border-orange-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-orange-400">What players do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Log in, fish at random locations without defining whether they're grinding XP, farming coins, or hunting rare fish.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Why it's inefficient:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>No clear goal = no optimization strategy</li>
              <li>Wrong rod for the location (Speed rod at rare fish location, Luck rod during XP grind)</li>
              <li>Mixed goals = mediocre results for all metrics</li>
              <li>Can't measure effectiveness without baseline targets</li>
            </ul>
          </Card>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Efficient alternative:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Define session goal before starting: XP Grinding, Coin Farming, or Rare Hunting</li>
              <li>Equip optimal rod for that goal (Speed for XP, Luck for rare hunting)</li>
              <li>Choose location that matches goal using <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link></li>
              <li>Track metrics (XP-per-hour or coins-per-hour) to measure success</li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-orange-400" />
            Inefficient Practice #2: Excessive Idle Time Between Catches
          </h2>
          <Card className="bg-orange-950/20 border-orange-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-orange-400">What players do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Take 5-10 seconds between catches to check inventory, chat, or wait before recasting.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Why it's inefficient:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>10 seconds idle per catch × 200 catches per hour = 33 minutes of wasted time per hour</li>
              <li>That's 33% efficiency loss just from delays</li>
              <li>Over 10 hours of grinding, that's 5.5 hours lost to idle time</li>
            </ul>
          </Card>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Efficient alternative:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Sell fish immediately after catching (1-2 seconds max)</li>
              <li>Recast within 1-2 seconds of selling</li>
              <li>Target &lt;2 seconds idle time per catch cycle</li>
              <li>This alone increases catches-per-hour by 30-40%</li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-orange-400" />
            Inefficient Practice #3: Batch Selling Fish
          </h2>
          <Card className="bg-orange-950/20 border-orange-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-orange-400">What players do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Catch 10-20 fish, then sell them all at once in a batch.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Why it's inefficient:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Coins locked in inventory = zero progression value until sold</li>
              <li>Delayed upgrades = slower efficiency gains</li>
              <li>Batch selling creates long idle periods (10-20 seconds of menu navigation)</li>
              <li>Inventory clutter makes it harder to track valuable catches</li>
            </ul>
          </Card>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Efficient alternative:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Sell every single catch immediately after reeling in</li>
              <li>This converts fish → coins → progression as fast as possible</li>
              <li>Minimal idle time (1-2 seconds per sell)</li>
              <li>Coins available instantly for upgrades when you hit thresholds</li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-orange-400" />
            Inefficient Practice #4: Fishing at the Same Location for Hours
          </h2>
          <Card className="bg-orange-950/20 border-orange-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-orange-400">What players do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Stay at the same location for 3-5+ hours without checking if it's still optimal for their current level/gear.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Why it's inefficient:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>You outgrow locations — early locations become inefficient at higher levels</li>
              <li>Fishing at Fisherman Island at Level 75 = massive XP/coin waste</li>
              <li>Better locations unlock as you progress</li>
              <li>Location optimization changes every 20-30 levels</li>
            </ul>
          </Card>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Efficient alternative:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Re-evaluate location every 30 minutes of grinding</li>
              <li>Check if coins-per-hour or XP-per-hour has dropped below baseline</li>
              <li>Use <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> to identify better locations for your level</li>
              <li>Switch locations when efficiency metrics decline</li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-orange-400" />
            Inefficient Practice #5: Not Tracking Session Performance
          </h2>
          <Card className="bg-orange-950/20 border-orange-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-orange-400">What players do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Fish for hours without tracking XP gained, coins earned, or catches per hour.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Why it's inefficient:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Can't identify when efficiency drops</li>
              <li>No baseline to measure improvements</li>
              <li>Can't compare rods, locations, or strategies objectively</li>
              <li>Repeating inefficient sessions without realizing it</li>
            </ul>
          </Card>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Efficient alternative:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Track XP-per-hour every session (XP gained ÷ session time)</li>
              <li>Track coins-per-hour every session (total coins ÷ session time)</li>
              <li>Note starting/ending XP and coin totals</li>
              <li>If metrics drop below baseline, adjust strategy immediately</li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-orange-400" />
            Inefficient Practice #6: Grinding Without Consumables During Rare Hunting
          </h2>
          <Card className="bg-orange-950/20 border-orange-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-orange-400">What players do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Attempt 2+ hour Mythic/Secret hunting sessions without activating Luck Totems or Luck II Potions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Why it's inefficient:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Mythic catch rates are already 1 in 50,000+</li>
              <li>Without Luck stacking, probability drops even lower</li>
              <li>Wasting hours grinding with suboptimal Luck = poor rare catch rate</li>
              <li>Free consumables available from <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">active codes</Link></li>
            </ul>
          </Card>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Efficient alternative:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Always activate Luck Totem + Luck II Potion before rare hunting</li>
              <li>This can increase Mythic catch probability by 2-5x</li>
              <li>Redeem <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">active codes</Link> for free consumables</li>
              <li>Only hunt Mythic/Secret fish with full Luck stacking</li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-orange-400" />
            Inefficient Practice #7: Not Using the Fish Database
          </h2>
          <Card className="bg-orange-950/20 border-orange-500/30 mb-4">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-orange-400">What players do:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Fish at locations without knowing which fish actually spawn there or what their catch rates are.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-red-400">Why it's inefficient:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>You might be hunting fish that don't spawn at your location</li>
              <li>Can't identify high-value targets without spawn data</li>
              <li>Random fishing = random results = inefficiency</li>
              <li>No way to plan optimal sessions</li>
            </ul>
          </Card>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Efficient alternative:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Use <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> before every session</li>
              <li>Filter by your current location to see spawn pool</li>
              <li>Identify 2-3 target fish with high value or needed for Fish Index</li>
              <li>Plan sessions around specific targets, not random hopes</li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Inefficient Practices Summary
          </h2>
          <Card className="bg-orange-950/20 border-orange-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <strong className="text-orange-400">Replace these inefficient habits:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">✘</span>
                <span>Fishing without a session goal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">✘</span>
                <span>Excessive idle time between catches (5-10 seconds)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">✘</span>
                <span>Batch selling fish instead of selling immediately</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">✘</span>
                <span>Staying at same location for hours without re-evaluation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">✘</span>
                <span>Not tracking session performance metrics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">✘</span>
                <span>Rare hunting without Luck Totem/Potion activation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">✘</span>
                <span>Not using the Fish Database for planning</span>
              </li>
            </ul>
          </Card>
        </div>

      </section>

    </div>
  );
}
