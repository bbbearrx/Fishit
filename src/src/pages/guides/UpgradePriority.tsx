/**
 * ═══════════════════════════════════════════════════════════════════════════
 * UPGRADE PRIORITY GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/upgrade-priority
 * 
 * SEO: Targets "Fish It upgrade priority", "best rod upgrades", "what to upgrade first"
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import Badge from '../../components/Badge';
import { Link } from 'react-router';

export default function UpgradePriority() {
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
            Upgrade Priority Guide (Fish It 2026 Resource Optimization)
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-12 space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Coins are the bottleneck in Fish It progression. Spending them inefficiently on marginal upgrades slows your leveling and delays access to high-value locations.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide explains which upgrades provide the best return on investment at each progression stage.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Upgrade Priority Framework
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Before buying any upgrade, ask:
            </p>
            <ol className="text-gray-300 text-lg leading-relaxed space-y-2 list-decimal list-inside">
              <li>Does this increase XP-per-minute by at least 25%?</li>
              <li>Does this unlock a new location with better fish?</li>
              <li>Does this improve coin-per-hour enough to pay for itself quickly?</li>
            </ol>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              If the answer is no to all three, delay the purchase.
            </p>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Early Game (Level 1-25)
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Priority #1: Carbon Rod (750 coins)</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li><Badge variant="common">Common</Badge> 4% Speed, 30% Luck</li>
            <li>Fastest XP grind from Level 1-50</li>
            <li>Buy immediately after first few catches</li>
            <li>More valuable than any other early upgrade</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">What NOT to buy early:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Luck Rod (50% Luck, 2% Speed) — minimal improvement over Starter Rod</li>
            <li>Grass Rod (55% Luck, 5% Speed) — Carbon Rod is better for XP</li>
            <li>Any gamepass rod — outclassed by free options at mid-game</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mid-Game (Level 25-50)
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Priority #1: Lucky Rod (15,000 coins)</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li><Badge variant="rare">Rare</Badge> 140% Luck, 7% Speed</li>
            <li>First meaningful Luck boost</li>
            <li>Unlocks rare fish targeting</li>
            <li>Save coins from Level 1-25 specifically for this</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Alternative: Midnight Rod (50,000 coins)</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li><Badge variant="rare">Rare</Badge> 100% Luck, 10% Speed</li>
            <li>Balanced stats, good for general grinding</li>
            <li>Consider if you want Speed over Luck</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">What to skip:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Ice Rod, Demascus Rod — marginal stat improvements</li>
            <li>Toy Rod, Lava Rod — free but weak stats</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Late-Game (Level 50-100)
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Recommended Progression Path:</strong>
          </p>
          <ol className="text-gray-300 text-lg leading-relaxed space-y-4 mb-6 list-decimal list-inside">
            <li>
              <strong className="text-white">Steampunk Rod (215,000 coins)</strong>
              <ul className="mt-2 ml-6 space-y-1 list-disc list-inside">
                <li><Badge variant="epic">Epic</Badge> 225% Luck, 19% Speed</li>
                <li>First epic-tier rod, solid all-around stats</li>
              </ul>
            </li>
            <li>
              <strong className="text-white">Chrome Rod (500,000 coins)</strong>
              <ul className="mt-2 ml-6 space-y-1 list-disc list-inside">
                <li><Badge variant="legendary">Legendary</Badge> 280% Luck, 23% Speed</li>
                <li>Excellent farming rod for mid-game coin grinding</li>
              </ul>
            </li>
            <li>
              <strong className="text-white">Astral Rod (1,000,000 coins)</strong>
              <ul className="mt-2 ml-6 space-y-1 list-disc list-inside">
                <li><Badge variant="legendary">Legendary</Badge> 380% Luck, 43% Speed</li>
                <li>Best legendary option from rod store</li>
              </ul>
            </li>
            <li>
              <strong className="text-white">Bamboo Rod (12,000,000 coins)</strong>
              <ul className="mt-2 ml-6 space-y-1 list-disc list-inside">
                <li><Badge variant="secret">Secret</Badge> 760% Luck, 98% Speed</li>
                <li>Highest store-bought luck, S-tier ranked</li>
              </ul>
            </li>
          </ol>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">What to consider skipping:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Fluorescent Rod (300K) — marginal improvement over Chrome</li>
            <li>Buying every rod tier instead of jumping to meaningful upgrades</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            End-Game (Level 100+)
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Priority: Quest Completion</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <Badge variant="secret">Secret</Badge>
              <div>
                <strong className="text-white">Ghostfinn Rod (Quest Reward)</strong>
                <p className="text-gray-400">610% Luck, 118% Speed — Quest-locked, S-tier</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Badge variant="secret">Secret</Badge>
              <div>
                <strong className="text-white">Element Rod (Quest Reward)</strong>
                <p className="text-gray-400">1111% Luck, 130% Speed — Best rod in the game</p>
              </div>
            </li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            At end-game, focus on quest completion over coin grinding. These quest rods outperform everything else.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Speed vs Luck Priority
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">Early Game (Level 1-50):</strong> Prioritize Speed
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>XP gain is driven by catch frequency, not rarity</li>
              <li>Speed stats compound over hours of grinding</li>
              <li>Rare fish hunting is inefficient before good gear synergy</li>
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">Late Game (Level 50+):</strong> Balance Speed and Luck
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Target Mythic fish (40K-150K coin value)</li>
              <li>High Luck increases rare catch probability</li>
              <li>Speed still matters for farming efficiency</li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Common Upgrade Mistakes
          </h2>
          <Card className="bg-red-950/20 border-red-500/30">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Buying every single rod instead of tier jumping</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Upgrading for +20% Luck when your Speed is still low</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Spending coins on gamepass rods (Gold, Hyper, Angelic)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✘</span>
                <span>Not checking the <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> before buying</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quick Reference: Best Upgrade Path
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <ol className="text-gray-300 text-lg leading-relaxed space-y-2 list-decimal list-inside">
              <li>Starter Rod → <strong className="text-white">Carbon Rod</strong> (750 coins)</li>
              <li>Carbon Rod → <strong className="text-white">Lucky Rod</strong> (15K coins)</li>
              <li>Lucky Rod → <strong className="text-white">Chrome Rod</strong> (500K coins)</li>
              <li>Chrome Rod → <strong className="text-white">Astral Rod</strong> (1M coins)</li>
              <li>Astral Rod → <strong className="text-white">Bamboo Rod</strong> (12M coins)</li>
              <li>Bamboo Rod → <strong className="text-white">Ghostfinn Rod</strong> (Quest)</li>
              <li>Ghostfinn Rod → <strong className="text-white">Element Rod</strong> (Quest)</li>
            </ol>
          </Card>
        </div>

      </section>

    </div>
  );
}
