/**
 * ═══════════════════════════════════════════════════════════════════════════
 * END-GAME CONTENT - LEVEL 100+ GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/end-game-content
 * 
 * SEO: Targets "Fish It end game", "level 100 content", "late game guide"
 */

import { ArrowLeft, Trophy } from 'lucide-react';
import Card from '../../components/Card';
import Badge from '../../components/Badge';
import { Link } from 'react-router';

export default function EndGameContent() {
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

          <div className="flex items-center gap-4 mb-6">
            <Trophy className="w-12 h-12 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              End-Game Content (Level 100+ Guide)
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-12 space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Reaching Level 100+ in Fish It marks the transition from progression-focused gameplay to end-game optimization. At this stage, you shift from leveling efficiency to completion goals: Fish Index, quest rods, Mythic/Secret collection, and mutation hunting.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide covers end-game content objectives and optimization strategies for Level 100+ players.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            End-Game Objectives
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">Primary goals at Level 100+:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">1.</span>
                <div>
                  <strong>Complete Fish Index</strong>
                  <p className="text-gray-400 mt-1">Catch all 207 fish species tracked in the database</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">2.</span>
                <div>
                  <strong>Obtain Quest Rods</strong>
                  <p className="text-gray-400 mt-1">Unlock Ghostfinn Rod and Element Rod (S-tier)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 font-bold">3.</span>
                <div>
                  <strong>Hunt Secret Fish</strong>
                  <p className="text-gray-400 mt-1">Collect the rarest fish (1 in 500,000+ catch rates)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">4.</span>
                <div>
                  <strong>Mutation Collection</strong>
                  <p className="text-gray-400 mt-1">Catch mutation/shiny variants of fish</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold">5.</span>
                <div>
                  <strong>Optimize Gear Synergy</strong>
                  <p className="text-gray-400 mt-1">Perfect rod + bobber + boat combinations</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quest Rod Completion Priority
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Quest rods are S-tier and outperform all store-bought options:</strong>
          </p>
          <div className="space-y-4 mb-6">
            <Card className="bg-purple-950/20 border-purple-500/30">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="secret">Secret</Badge>
                <span className="text-xl font-semibold text-white">Ghostfinn Rod</span>
              </div>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Stats: 610% Luck, 118% Speed</li>
                <li>Unlock: Complete Ghostfinn quest</li>
                <li>Tier Ranking: S-tier (top 5 rods in game)</li>
                <li>Use Case: Mythic hunting and Fish Index completion</li>
              </ul>
            </Card>

            <Card className="bg-pink-950/20 border-pink-500/30">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="secret">Secret</Badge>
                <span className="text-xl font-semibold text-white">Element Rod</span>
              </div>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Stats: 1111% Luck, 130% Speed</li>
                <li>Unlock: Complete Element quest</li>
                <li>Tier Ranking: S-tier (best rod in the game)</li>
                <li>Use Case: Secret fish hunting, end-game optimization</li>
              </ul>
            </Card>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Prioritize completing these quests immediately upon reaching Level 100. Check the <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> for detailed rankings.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Fish Index Completion Strategy
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Goal: Catch all 207 fish species</strong>
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Efficient workflow:</strong>
            </p>
            <ol className="text-gray-300 text-lg leading-relaxed space-y-3 list-decimal list-inside">
              <li>Open <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> and export your missing fish list</li>
              <li>Sort missing fish by location</li>
              <li>Visit each location systematically, focusing on Common → Rare → Legendary → Mythic → Secret</li>
              <li>Use Ghostfinn or Element Rod for maximum catch probability</li>
              <li>Activate Luck Totems for Mythic/Secret hunting sessions</li>
              <li>Track progress per location to avoid revisiting unnecessarily</li>
            </ol>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Time estimate:</strong>
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Common/Uncommon fish: 10-20 hours</li>
            <li>Rare/Epic fish: 20-40 hours</li>
            <li>Legendary/Mythic fish: 40-80 hours</li>
            <li>Secret fish: 80-150+ hours (depends on RNG)</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secret Fish Hunting
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Secret fish have 1 in 500,000+ catch rates — the rarest in the game</strong>
          </p>
          <Card className="bg-pink-950/20 border-pink-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-pink-400">Requirements for efficient Secret hunting:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Rod: Element Rod (1111% Luck) or Ghostfinn Rod (610% Luck)</li>
              <li>Consumables: Luck Totem + Luck II Potion (stacked)</li>
              <li>Session Length: 2-4+ hours per session</li>
              <li>Location Research: Use <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> to identify which locations have Secret fish</li>
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-pink-400">Optimal locations for Secret fish:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Ancient Jungle</li>
              <li>Esoteric Depths</li>
              <li>Lost Isle</li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Secret fishing requires patience. Multiple 2-4 hour sessions may be needed per Secret fish due to extreme rarity.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mutation and Shiny Farming
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Mutations and Shiny variants add collection depth</strong>
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">What are mutations/shinies?</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Mutation: Rare variant of base fish (altered appearance/stats)</li>
              <li>Shiny: Ultra-rare variant with unique coloring</li>
              <li>Both have exponentially lower catch rates than base fish</li>
              <li>Primarily collected for completionist goals</li>
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Farming strategy:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Use Element Rod for maximum Luck</li>
              <li>Target specific fish species you want mutations of</li>
              <li>Use Luck Totem + Luck II Potion for best probability</li>
              <li>Expect 4-8+ hour sessions per mutation/shiny</li>
            </ul>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Gear Synergy Optimization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">End-game gear stacking maximizes efficiency</strong>
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              <strong className="text-cyan-400">Optimal gear combination:</strong>
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">Rod:</span>
                <span>Element Rod (1111% Luck, 130% Speed)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 font-bold">Bobber:</span>
                <span>Best-in-slot bobber for additional Luck modifier</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">Boat:</span>
                <span>Unlocks access to deep-sea fishing zones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">Consumables:</span>
                <span>Luck Totem + Luck II Potion during rare hunting</span>
              </li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            This full stack can increase Mythic/Secret catch rates by 5-10x compared to using only a rod.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            End-Game Session Planning
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <strong className="text-white">Typical end-game session structure:</strong>
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <ol className="text-gray-300 text-lg leading-relaxed space-y-3 list-decimal list-inside">
              <li>Review Fish Index to identify missing fish</li>
              <li>Use <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> to find locations for those fish</li>
              <li>Equip Element Rod or Ghostfinn Rod</li>
              <li>Activate Luck Totem + Luck II Potion (if hunting Mythic/Secret)</li>
              <li>Set aside 2-4 hour session for focused grinding</li>
              <li>Track which fish you catch to avoid revisiting locations</li>
              <li>Repeat until Fish Index complete</li>
            </ol>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            End-Game Progression Checklist
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Complete Ghostfinn Rod quest immediately</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Complete Element Rod quest for best-in-slot gear</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Work through Fish Index systematically by location</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Always use Luck Totems during Mythic/Secret hunting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Plan 2-4 hour sessions for Secret fish targeting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Stack gear synergy (rod + bobber + boat + consumables)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Use <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> for every session planning</span>
              </li>
            </ul>
          </Card>
        </div>

      </section>

    </div>
  );
}
