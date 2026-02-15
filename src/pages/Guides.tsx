/**
 * ═══════════════════════════════════════════════════════════════════════════
 * GUIDES & STRATEGY HUB PAGE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Comprehensive collection of strategy guides, tips, and tutorials organized
 * by skill level (Beginner, Progression, Advanced, Mistakes to Avoid).
 * 
 * ROUTE: /guides
 * 
 * SEO ELEMENTS:
 * - H1: Fish It Guides & Strategy Hub (2026 Complete Guide Index)
 * - Structured guide categories with detailed summaries
 * - Internal linking to beginner guide
 * - Clear progression path for new to advanced players
 * 
 * DATA INTEGRITY RULES:
 * - DO NOT invent mechanics
 * - DO NOT change island names
 * - DO NOT modify game statistics
 * - Maintain authority tone
 * - NO external links
 * - Use internal link placeholders only
 */

import { BookOpen, TrendingUp, Zap, AlertTriangle, Lightbulb, Info, Database, Anchor, Fish, Gift, Calendar } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router';

export default function Guides() {
  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE CONTENT — SAFE TO CHANGE
  // ═══════════════════════════════════════════════════════════════════════════

  // SEO: Main page title
  const pageTitle = "Fish It Guides & Strategy Hub (2026 Complete Guide Index)";

  // SEO: Page intro paragraph
  const pageIntro = "Welcome to the Fish It Guides hub — the fastest way to learn Roblox Fish It progression, rod decision-making, fish rarity goals, and database-driven grinding routes. Each guide is structured to reduce wasted casts, improve XP-per-minute, and help you choose the right location and target fish using verified tables. Start with How to Play, then use the Rod Tier List and Fish Database to plan your sessions.";

  const headerBackgroundImage = "https://images.unsplash.com/photo-1646318714677-eeea2bdf92d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwYmx1ZSUyMG9jZWFuJTIwZ3JhZGllbnR8ZW58MXx8fHwxNzcwNjgzMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080";

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Guide Categories with Full Summaries
  // ═══════════════════════════════════════════════════════════════════════════

  const beginnerGuides = [
    {
      title: "Getting Started in Fish It",
      summary: "A step-by-step introduction to early progression, starter rod strategy, and how to build coin stability without inefficient grinding.",
      link: "/how-to-play"
    },
    {
      title: "Your First Catch",
      summary: "Explains the first progression loop: catch → sell → upgrade → unlock. Focuses on building XP efficiently instead of chasing rare fish too early.",
      link: "/guides/first-catch"
    },
    {
      title: "Understanding the Interface",
      summary: "Breakdown of Fish Database filters, rarity pages, location pages, and how to navigate the site's tools to plan fishing sessions and target specific fish.",
      link: "/guides/understanding-interface"
    },
    {
      title: "Basic Fishing Techniques",
      summary: "Covers cast timing, spawn awareness, and how to fish consistently to reduce wasted casts and improve consistency without inefficient practices.",
      link: "/guides/basic-fishing-techniques"
    }
  ];

  const progressionTips = [
    {
      title: "Fastest Way to Progress",
      summary: "Structured level-based strategy from early game to Level 100+, focusing on XP-per-minute optimization.",
      link: "/guides/fastest-way-to-progress"
    },
    {
      title: "Efficient Resource Management",
      summary: "How to manage coins, potions, and upgrades without overspending on marginal stat increases.",
      link: "/guides/efficient-resource-management"
    },
    {
      title: "Upgrade Priority Guide",
      summary: "Which rods and gear improvements should be prioritized first and why speed often matters more than early luck stacking.",
      link: "/guides/upgrade-priority"
    },
    {
      title: "Maximizing Rewards",
      summary: "How to combine spawn timing, island selection, and event buffs to increase returns.",
      link: "/guides/maximizing-rewards"
    }
  ];

  const advancedStrategies = [
    {
      title: "Advanced Fishing Techniques",
      summary: "How to balance Luck, Speed, and Mutation stacking for targeted species farming.",
      link: "/guides/advanced-fishing-techniques"
    },
    {
      title: "Rare Fish Hunting",
      summary: "Strategies for farming Mythic and Secret fish efficiently using island selection and event timing.",
      link: "/guides/rare-fish-hunting"
    },
    {
      title: "Optimization Strategies",
      summary: "Combining gear synergy, spawn logic, and weather awareness to reduce expected casts per target fish.",
      link: "/guides/optimization-strategies"
    },
    {
      title: "End-Game Content",
      summary: "Late-game systems including Admin Events, high-tier island access, and progression beyond Level 100.",
      link: "/guides/end-game-content"
    }
  ];

  const mistakesToAvoid = [
    {
      title: "Common Beginner Mistakes",
      summary: "Overspending coins, chasing rare fish too early, and ignoring XP optimization.",
      link: "/guides/common-beginner-mistakes"
    },
    {
      title: "Resource Waste Prevention",
      summary: "How to avoid inefficient potion usage and unnecessary gear purchases.",
      link: "/guides/resource-waste-prevention"
    },
    {
      title: "Inefficient Practices",
      summary: "Fishing without spawn awareness, ignoring island progression, and stacking the wrong stats.",
      link: "/guides/inefficient-practices"
    },
    {
      title: "What Not to Do",
      summary: "High-level warning guide summarizing major inefficiencies that slow progression.",
      link: "/guides/what-not-to-do"
    }
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Quick Tips
  // ═══════════════════════════════════════════════════════════════════════════

  const quickTips = [
    {
      title: "Tip #1: Level First, Rare Hunt Later",
      intro: "Early progression should focus on XP-per-minute, not rare fish probability.",
      subtitle: "Rare hunting becomes efficient only when:",
      bullets: [
        "Gear synergy improves",
        "Island unlocks expand",
        "Admin Events are relevant",
        "Spawn awareness increases"
      ],
      closing: ["Before Level 100+, prioritize consistent catches over low-probability targets.", "Momentum builds faster than gambling."]
    },
    {
      title: "Tip #2: Speed-Based Builds Increase XP Stability Early Game",
      intro: "Speed increases total casts.",
      highlight: "More casts = More XP opportunities.",
      content: "Early-game Luck stacking without proper synergy produces inconsistent results.",
      subtitle: "Speed builds are ideal for:",
      bullets: [
        "Early leveling",
        "Coin stability",
        "Island unlock pacing"
      ],
      closing: ["Stability first. Optimization later."]
    },
    {
      title: "Tip #3: Island Mastery Beats Random Travel",
      intro: "Efficiency comes from learning one spawn pool at a time.",
      subtitle: "Verified locations in our database include:",
      islands: [
        "Fisherman Island",
        "The Ocean",
        "Kohana Island",
        "Kohana Volcano",
        "Coral Reef Island",
        "Esoteric Depths",
        "Tropical Grove",
        "Crater Island",
        "Lost Isle",
        "Ancient Jungle",
        "Classic Island"
      ],
      content: "Each location has its own fish pool, rarities, and catch chances. Use the Fish Database filters to plan where you fish instead of bouncing randomly.",
      warning: "Random island hopping reduces consistency and slows progression.",
      closing: ["Master one location, then expand intentionally.", "Planned sessions beat wandering every time."]
    },
    {
      title: "Tip #4: Align Long Sessions With Updates and Bonuses You Can Verify",
      subtitle: "Before a long grind, check:",
      bullets: [
        "Current patch notes and new areas on the Updates page",
        "Any active codes that provide rewards",
        "Which fish and rods you are targeting in the database"
      ],
      actionTitle: "Best habit:",
      action: "Use the Fish Database + Rod Tier List to plan your session first.",
      content: "The biggest efficiency gains come from planning: target fish, target location, and choosing a rod that matches your goal.",
      closing: ["Planning multiplies returns more reliably than random grinding."]
    },
    {
      title: "Tip #5: Stack Complementary Stats — Not Just the Highest Numbers",
      intro: "Higher numbers do not always mean higher efficiency.",
      subtitle: "Balance:",
      stats: [
        "Speed",
        "Luck",
        "Mutation"
      ],
      objectiveTitle: "Choose one objective per session:",
      objectives: [
        "XP farming",
        "Rare targeting",
        "Mutation hunting"
      ],
      content: "Align your gear accordingly.",
      closing: ["Misaligned builds reduce output."]
    },
    {
      title: "Tip #6: Understanding Spawn Systems Saves More Time Than Any Single Upgrade",
      subtitle: "Spawn logic determines:",
      bullets: [
        "Which fish appear",
        "When they appear",
        "Where they appear"
      ],
      warning: "Fishing without spawn awareness increases wasted casts.",
      content: "Before upgrading gear, improve system knowledge.",
      closing: ["System awareness compounds more than minor stat increases."]
    }
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // STRUCTURE: PAGE LAYOUT
  // ═══════════════════════════════════════════════════════════════════════════

  return (
    <div className="min-h-screen">
      
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SEO: Hero Section with H1 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-16 border-b border-cyan-500/20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* SEO: Primary H1 heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {pageTitle}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {pageIntro}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION: Quick Start Links */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border-cyan-500/30">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-cyan-400" />
              Quick Start Links
            </h2>
            <p className="text-gray-300">
              Jump directly to essential databases and tools to plan your Fish It sessions efficiently.
            </p>
          </div>
          
          {/* Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            <Button to="/how-to-play" variant="outline" size="sm" className="justify-center">
              <BookOpen className="w-4 h-4 mr-2" />
              How to Play
            </Button>
            <Button to="/fish-database" variant="outline" size="sm" className="justify-center">
              <Database className="w-4 h-4 mr-2" />
              Fish Database
            </Button>
            <Button to="/fishing-rods" variant="outline" size="sm" className="justify-center">
              <Anchor className="w-4 h-4 mr-2" />
              Fishing Rods
            </Button>
            <Button to="/rod-tier-list" variant="outline" size="sm" className="justify-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Rod Tier List
            </Button>
          </div>
          
          {/* Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button to="/rarities" variant="outline" size="sm" className="justify-center">
              <Fish className="w-4 h-4 mr-2" />
              Rarities
            </Button>
            <Button to="/secret-fish" variant="outline" size="sm" className="justify-center">
              <Fish className="w-4 h-4 mr-2" />
              Secret Fish
            </Button>
            <Button to="/codes" variant="outline" size="sm" className="justify-center">
              <Gift className="w-4 h-4 mr-2" />
              Codes
            </Button>
            <Button to="/updates" variant="outline" size="sm" className="justify-center">
              <Calendar className="w-4 h-4 mr-2" />
              Updates
            </Button>
          </div>
        </Card>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION: Beginner Guides */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Beginner Guides
          </h2>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Start here if you are new to Fish It. These guides explain core systems, early progression, and how to avoid common beginner mistakes.
        </p>

        <div className="space-y-4">
          {beginnerGuides.map((guide, index) => (
            <Card key={index} hover className={guide.link ? "cursor-pointer" : ""}>
              {guide.link ? (
                <Link to={guide.link} className="block">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-cyan-400 font-semibold">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {guide.summary}
                      </p>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {guide.summary}
                    </p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION: Progression Tips */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-green-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Progression & Leveling Efficiency
          </h2>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          These guides focus on increasing XP rate, coin gain, and unlocking mid-game systems faster.
        </p>

        <div className="space-y-4">
          {progressionTips.map((guide, index) => (
            <Card key={index} hover className="cursor-pointer">
              <Link to={guide.link} className="block">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-400 font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {guide.summary}
                    </p>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION: Advanced Strategies */}
      {/* ══════════════════��════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <div className="flex items-center gap-3 mb-8">
          <Zap className="w-8 h-8 text-purple-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Advanced & Optimization Strategies
          </h2>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Designed for players entering late-game content, rare fish hunting, and event stacking.
        </p>

        <div className="space-y-4">
          {advancedStrategies.map((guide, index) => (
            <Card key={index} hover className="cursor-pointer">
              <Link to={guide.link} className="block">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-400 font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {guide.summary}
                    </p>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION: Mistakes to Avoid */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <div className="flex items-center gap-3 mb-8">
          <AlertTriangle className="w-8 h-8 text-red-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Common Mistakes & Inefficiencies
          </h2>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Fish It punishes inefficient upgrades and random grinding. Avoid these common traps.
        </p>

        <div className="space-y-4">
          {mistakesToAvoid.map((guide, index) => (
            <Card key={index} hover className="cursor-pointer">
              <Link to={guide.link} className="block">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-400 font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {guide.summary}
                    </p>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION: Quick Tips */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <div className="flex items-center gap-3 mb-8">
          <Lightbulb className="w-8 h-8 text-yellow-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Quick Tips for Faster Progression in Fish It (2026 Efficiency Boosters)
          </h2>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          These rapid-fire tips focus on system alignment, XP optimization, and efficient scaling. Small improvements compound dramatically over time.
        </p>

        <div className="space-y-8">
          {quickTips.map((tip, index) => (
            <Card key={index} className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 border-cyan-500/30">
              <div className="space-y-4">
                {/* Tip Header */}
                <div className="flex items-start gap-3 pb-4 border-b border-cyan-500/20">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white flex-1">
                    {tip.title}
                  </h3>
                </div>

                {/* Tip Content */}
                <div className="space-y-3">
                  {tip.intro && (
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {tip.intro}
                    </p>
                  )}

                  {tip.highlight && (
                    <p className="text-cyan-300 text-lg leading-relaxed font-semibold">
                      {tip.highlight}
                    </p>
                  )}

                  {tip.content && (
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {tip.content}
                    </p>
                  )}

                  {tip.subtitle && (
                    <p className="text-gray-300 text-lg leading-relaxed font-semibold mt-4">
                      {tip.subtitle}
                    </p>
                  )}

                  {tip.bullets && (
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      {tip.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="text-gray-300 text-lg leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {tip.islands && (
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      {tip.islands.map((island, islandIndex) => (
                        <li key={islandIndex} className="text-gray-300 text-lg leading-relaxed">
                          {island}
                        </li>
                      ))}
                    </ul>
                  )}

                  {tip.stats && (
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      {tip.stats.map((stat, statIndex) => (
                        <li key={statIndex} className="text-gray-300 text-lg leading-relaxed">
                          {stat}
                        </li>
                      ))}
                    </ul>
                  )}

                  {tip.objectiveTitle && (
                    <p className="text-gray-300 text-lg leading-relaxed font-semibold mt-4">
                      {tip.objectiveTitle}
                    </p>
                  )}

                  {tip.objectives && (
                    <div className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-4 space-y-2">
                      {tip.objectives.map((objective, objectiveIndex) => (
                        <p key={objectiveIndex} className="text-gray-300 text-lg leading-relaxed">
                          {objective}
                        </p>
                      ))}
                    </div>
                  )}

                  {tip.warning && (
                    <p className="text-red-300 text-lg leading-relaxed font-semibold">
                      {tip.warning}
                    </p>
                  )}

                  {tip.actionTitle && (
                    <p className="text-gray-300 text-lg leading-relaxed font-semibold mt-4">
                      {tip.actionTitle}
                    </p>
                  )}

                  {tip.action && (
                    <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-4">
                      <p className="text-cyan-200 text-lg leading-relaxed font-semibold">
                        {tip.action}
                      </p>
                    </div>
                  )}

                  {tip.closing && tip.closing.length > 0 && (
                    <div className="pt-3 border-t border-cyan-500/20 mt-4 space-y-2">
                      {tip.closing.map((close, closeIndex) => (
                        <p key={closeIndex} className="text-gray-300 text-lg leading-relaxed italic">
                          {close}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION: Why This Guide Hub Exists */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <div className="flex items-center gap-3 mb-8">
          <Info className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why This Guide Hub Exists
          </h2>
        </div>

        <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-8">
          <p className="text-gray-300 text-lg leading-relaxed">
            Fish It is a systems-driven progression RPG. Players who understand gear synergy, island tiers, weather systems, and event timing consistently outperform players who rely purely on grind. This guide hub centralizes structured knowledge to reduce wasted time and improve long-term efficiency.
          </p>
        </div>
      </section>

    </div>
  );
}