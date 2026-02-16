/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ADVANCED FISHING TECHNIQUES - LATE-GAME GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/advanced-fishing-techniques
 * 
 * SEO: Targets "Fish It advanced techniques", "late game fishing", "optimization strategies"
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function AdvancedFishingTechniques() {
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
            Advanced Fishing Techniques (Fish It Late-Game Optimization)
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-12 space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Once you reach Level 50+, basic fishing techniques no longer provide competitive efficiency. Advanced players optimize gear synergy, Luck/Speed balancing, and location-specific targeting strategies.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide covers late-game optimization techniques that separate efficient grinders from casual players.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Gear Synergy Stacking
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Late-game progression requires stacking multiple gear components:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">Rod:</span>
              <span>Primary source of Luck and Speed stats</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">Bobber:</span>
              <span>Provides additional Luck modifiers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold">Boat:</span>
              <span>Increases mobility and access to better fishing zones</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">Consumables:</span>
              <span>Luck Totems, Luck II Potions, Exclusive Baits from <Link to="/codes" className="text-cyan-400 hover:text-cyan-300 underline">active codes</Link></span>
            </li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Stacking these multipliers correctly can increase Mythic/Secret catch rates by 2-5x compared to using only a rod.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Luck vs Speed Optimization
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">The Core Question:</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Should you prioritize 760% Luck + 98% Speed (Bamboo Rod) or 610% Luck + 118% Speed (Ghostfinn Rod)?
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-cyan-400">Answer:</strong> It depends on your session goal.
            </p>
          </Card>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">High-Luck Builds:</span>
              <span>Best for Mythic/Secret hunting sessions (1+ hour grinds)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">High-Speed Builds:</span>
              <span>Best for coin farming and XP grinding (30-60 minute sessions)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">Balanced Builds:</span>
              <span>Best for general progression and Fish Index completion</span>
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Location-Specific Targeting
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Advanced players don't fish randomly. They target specific locations based on spawn pools.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Optimal workflow:</strong>
          </p>
          <ol className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-decimal list-inside">
            <li>Open the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link></li>
            <li>Filter by Mythic or Secret rarity</li>
            <li>Identify which locations have the highest-value targets</li>
            <li>Equip high-Luck gear for that specific location</li>
            <li>Fish in 1-2 hour focused sessions</li>
            <li>Track catch rates to measure efficiency</li>
          </ol>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Example:</strong>
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            If you're targeting high-value Mythic fish at Ancient Jungle, equip Ghostfinn Rod + Luck Totem + Luck II Potion for maximum catch probability.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Session Length Optimization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Session length affects rare catch probability:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">Short sessions (15-30 min):</span>
                <span>Focus on Speed-based coin farming with Common/Uncommon targets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">Medium sessions (30-60 min):</span>
                <span>Balanced Luck/Speed for Legendary hunting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">Long sessions (60-120 min):</span>
                <span>Maximum Luck stacking for Mythic/Secret hunting</span>
              </li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Longer sessions justify higher Luck investment because rare catch probability compounds over time.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mutation and Shiny Farming
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Mutation and Shiny fish have exponentially lower catch rates than base fish.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Requirements:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>High-tier rod (Bamboo, Ghostfinn, or Element Rod)</li>
            <li>Luck Totem + Luck II Potion active</li>
            <li>2+ hour dedicated grinding sessions</li>
            <li>Location-specific spawn knowledge from the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link></li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Mutation/Shiny farming is only efficient at Level 100+ with maximum gear synergy.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Efficiency Metrics to Track
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Advanced players track these metrics per session:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Coins per hour (total sell value ÷ session time)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>XP per hour (XP gained ÷ session time)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Catches per hour (total fish ÷ session time)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Rare catch rate (Legendary+ catches ÷ total catches)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Average coin per catch (total coins ÷ total catches)</span>
              </li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed mt-6">
            If any metric drops below your baseline, adjust location, rod, or session strategy.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quest Optimization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Quest-locked rods (Ghostfinn Rod, Element Rod) are S-tier ranked for a reason.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Priority order:</strong>
          </p>
          <ol className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-decimal list-inside">
            <li>Complete Ghostfinn Rod quest (610% Luck, 118% Speed)</li>
            <li>Use Ghostfinn Rod to farm coins and complete Fish Index</li>
            <li>Complete Element Rod quest (1111% Luck, 130% Speed)</li>
            <li>Element Rod becomes your permanent end-game rod</li>
          </ol>
          <p className="text-gray-300 text-lg leading-relaxed">
            Check the <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> for detailed stat comparisons.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Final Advanced Tips
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Always use Luck Totems during Mythic/Secret hunting sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Track your rarest catch per session to measure progression</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Switch locations if catch rate drops below baseline</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Plan 2+ hour sessions for Secret fish targeting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Use the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> before every session</span>
              </li>
            </ul>
          </Card>
        </div>

      </section>

    </div>
  );
}
