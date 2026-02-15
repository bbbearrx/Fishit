/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FISHING MECHANICS PAGE — SEO PILLAR PAGE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Explains how fishing works in Fish It, including core gameplay loops, rod
 * progression, catch strategies, and money-making mechanics.
 * 
 * WHO IT'S FOR:
 * - New players learning the basics
 * - Experienced players optimizing strategies
 * - Search engines targeting "Fish It how to fish", "fishing mechanics", "gameplay guide"
 * 
 * SEO STRATEGY:
 * - H1 includes primary keywords: "Fish It", "Fishing Mechanics", "How to Fish"
 * - Structured with clear H2 sections for easy navigation
 * - Internal links to related content (rods, fish, tier list)
 * - Regular update promise signals freshness
 */

import { Fish, TrendingUp, Target, DollarSign, Sparkles, Waves, BookMarked } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import RelatedGuides from '../components/sections/RelatedGuides';
import { Link } from 'react-router';

export default function Mechanics() {
  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE CONTENT — SAFE TO CHANGE
  // ═══════════════════════════════════════════════════════════════════════════

  const pageTitle = "Fish It Mechanics Guide — How Fishing Works";
  const pageSubtitle = "Master the core gameplay systems of Fish It on Roblox. Understand fishing rod stats (Luck, Speed, Kg), location-based catches, rarity progression, and the catch-sell-upgrade loop that powers your journey from beginner to end-game player.";

  const fishingBasics = [
    {
      title: 'Core Fishing Loop',
      description: 'Fish It follows a simple but addictive cycle: Cast your rod → Catch fish → Sell for coins → Upgrade your equipment → Repeat. As you progress, you unlock new locations with rarer fish and can afford better rods that increase your catch speed and luck stats.',
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: 'What Rod Stats Mean',
      description: 'Every fishing rod has three key stats: Luck (increases chance of rarer fish), Speed (reduces time between catches), and Kg (maximum fish weight capacity). Higher-tier rods offer dramatically better stats, enabling access to end-game locations and Mythic/Secret fish.',
      icon: <Fish className="w-6 h-6" />,
    },
    {
      title: 'Why Location Matters',
      description: 'Each fishing location has its own unique fish pool and rarity distribution. Fisherman Island offers beginner catches, while advanced locations like Lost Isle, Ancient Jungle, and Esoteric Depths contain high-value Mythic and Secret fish worth 100,000+ coins per catch.',
      icon: <Waves className="w-6 h-6" />,
    },
    {
      title: 'How Money Works',
      description: 'Coins are earned by selling catches. Common fish sell for small amounts, but Mythic and Secret fish can sell for 40,000-150,000+ coins each. Use the Fish Database to identify which locations contain high-value targets, then farm them with optimized rods.',
      icon: <DollarSign className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-16 border-b border-cyan-500/20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
              <Fish className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-semibold">Core Gameplay Systems</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {pageTitle}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* How Fishing Works */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader 
          title="How Fishing Works in Fish It"
          subtitle="Understanding the core mechanics"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fishingBasics.map((item, index) => (
            <Card key={index} className="group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Rod Stats Explained */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Rod Stats Explained
        </h2>

        <div className="space-y-6">
          <Card>
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              Luck %
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Increases your chance of catching rarer fish. A rod with 30% Luck is decent for early game, but late-game rods like Ghostfinn Rod (610% Luck) dramatically boost your Mythic and Secret catch rates.
            </p>
            <p className="text-gray-400 text-sm italic">
              Higher luck = more Legendary/Mythic/Secret catches. Essential for rare fish hunting.
            </p>
          </Card>

          <Card>
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
              Speed %
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Reduces the time between catches. Carbon Rod (4% Speed) is excellent for early XP grinding because you catch more fish per minute. High-tier rods like Element Rod (130% Speed) maximize farming efficiency.
            </p>
            <p className="text-gray-400 text-sm italic">
              Speed determines how many catches you get per hour. Critical for XP and coin farming.
            </p>
          </Card>

          <Card>
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Fish className="w-6 h-6 text-purple-400" />
              Kg Capacity
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Determines the maximum weight of fish you can catch. Some rare fish require high-capacity rods (400K+ Kg) to even attempt catching. End-game locations often have heavy fish that low-tier rods cannot handle.
            </p>
            <p className="text-gray-400 text-sm italic">
              Kg capacity is a hard gate. You cannot catch heavy fish with low-capacity rods.
            </p>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button to="/rod-tier-list" size="lg">
            <TrendingUp className="w-5 h-5 mr-2" />
            View Complete Rod Tier List
          </Button>
        </div>
      </section>

      {/* Rarity System */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Understanding Fish Rarities
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Fish It uses seven rarity tiers with exponentially decreasing catch rates and increasing value:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <Badge variant="common" className="mb-2">Common</Badge>
            <p className="text-gray-300">Starter fish with high catch rates. Sell for minimal coins but great for early XP.</p>
          </Card>
          <Card>
            <Badge variant="uncommon" className="mb-2">Uncommon</Badge>
            <p className="text-gray-300">Early progression targets. Slightly better value than Common fish.</p>
          </Card>
          <Card>
            <Badge variant="rare" className="mb-2">Rare</Badge>
            <p className="text-gray-300">Mid-game catches with 1 in 100 → 1 in 1,000 range. Good coin value.</p>
          </Card>
          <Card>
            <Badge variant="epic" className="mb-2">Epic</Badge>
            <p className="text-gray-300">Advanced targets (1 in 1,000 → 1 in 10,000 range). Solid money makers.</p>
          </Card>
          <Card>
            <Badge variant="legendary" className="mb-2">Legendary</Badge>
            <p className="text-gray-300">High-value fish (1 in 10,000 → 1 in 50,000 range). Significant coin rewards.</p>
          </Card>
          <Card>
            <Badge variant="mythic" className="mb-2">Mythic</Badge>
            <p className="text-gray-300">Extremely rare (1 in 50,000 → 1 in 200,000). Sell for 40K-150K+ coins.</p>
          </Card>
          <Card className="md:col-span-2">
            <Badge variant="secret" className="mb-2">Secret</Badge>
            <p className="text-gray-300">Trophy fish with 1 in 500,000+ odds. Listed as "Invaluable". The rarest tier in the game.</p>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button to="/fish-database" size="lg">
            <Fish className="w-5 h-5 mr-2" />
            Browse Full Fish Database
          </Button>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <Card className="bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <BookMarked className="w-6 h-6 text-cyan-400" />
            Quick Mechanics Tips
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
              <span>Use the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> to see which fish spawn at each location before you start fishing.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
              <span>Speed-focused rods like Carbon Rod are better for XP grinding than high-Luck rods in early game.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
              <span>Don't chase Mythic fish with low-tier rods. Focus on progression first, rare hunting later.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
              <span>Check the <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> before buying rods to avoid wasting coins on marginal upgrades.</span>
            </li>
          </ul>
        </Card>
      </section>

      {/* Related Guides */}
      <RelatedGuides />

    </div>
  );
}
