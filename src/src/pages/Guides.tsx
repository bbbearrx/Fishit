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
      title: "Rare Fish Hunting Strategies",
      summary: "Mythic and Secret fish targeting, optimal session length, and how to use Luck stacking with high-tier rods.",
      link: "/guides/rare-fish-hunting"
    },
    {
      title: "Best Fishing Spots by Level",
      summary: "Island-by-island progression guide with spawn pools, unlock requirements, and XP-to-coin efficiency rankings.",
      link: "/guides/best-fishing-spots"
    },
    {
      title: "Seasonal Event Strategies",
      summary: "How to maximize limited-time events, seasonal fish, and exclusive rewards.",
      link: "/guides/seasonal-events"
    }
  ];

  const mistakesToAvoid = [
    {
      title: "What NOT to Do in Fish It",
      summary: "Common beginner mistakes that waste time, coins, and progression opportunities.",
      link: "/guides/what-not-to-do"
    },
    {
      title: "Avoiding Rod Purchase Mistakes",
      summary: "Why buying every rod hurts progression and how to identify meaningful stat upgrades using tier lists.",
      link: "/guides/rod-purchase-mistakes"
    },
    {
      title: "Common Database Filter Mistakes",
      summary: "How to avoid fishing in wrong locations by using the Fish Database location filters correctly.",
      link: "/guides/database-mistakes"
    },
    {
      title: "XP Grinding Mistakes",
      summary: "Why chasing Mythic fish at Level 10 wastes hours and how Speed-based rods accelerate early XP.",
      link: "/guides/xp-mistakes"
    }
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
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-semibold">Complete Strategy Index</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {pageTitle}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {pageIntro}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/how-to-play" size="lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Start with Beginner Guide
              </Button>
              <Button to="/fish-database" variant="outline" size="lg">
                <Database className="w-5 h-5 mr-2" />
                Fish Database
              </Button>
              <Button to="/rod-tier-list" variant="outline" size="lg">
                <TrendingUp className="w-5 h-5 mr-2" />
                Rod Tier List
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Beginner Guides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Beginner Guides
          </h2>
        </div>

        <p className="text-gray-300 text-lg mb-8">
          Start here if you're new to Fish It. These guides explain core systems, progression paths, and database navigation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {beginnerGuides.map((guide, index) => (
            <Link key={index} to={guide.link}>
              <Card hover className="h-full group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-gray-400">
                      {guide.summary}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Progression Tips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Progression & Efficiency
          </h2>
        </div>

        <p className="text-gray-300 text-lg mb-8">
          Mid-game optimization strategies for faster leveling, better coin efficiency, and smarter upgrade decisions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {progressionTips.map((guide, index) => (
            <Link key={index} to={guide.link}>
              <Card hover className="h-full group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-gray-400">
                      {guide.summary}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Advanced Strategies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <div className="flex items-center gap-3 mb-8">
          <Lightbulb className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Advanced Strategies
          </h2>
        </div>

        <p className="text-gray-300 text-lg mb-8">
          Late-game optimization, rare fish targeting, and high-level progression strategies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advancedStrategies.map((guide, index) => (
            <Link key={index} to={guide.link}>
              <Card hover className="h-full group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Fish className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-gray-400">
                      {guide.summary}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <div className="flex items-center gap-3 mb-8">
          <AlertTriangle className="w-8 h-8 text-yellow-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Common Mistakes to Avoid
          </h2>
        </div>

        <p className="text-gray-300 text-lg mb-8">
          Learn from common player mistakes to save time, coins, and progression setbacks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mistakesToAvoid.map((guide, index) => (
            <Link key={index} to={guide.link}>
              <Card hover className="h-full group bg-red-950/20 border-red-500/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-gray-400">
                      {guide.summary}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-cyan-500/20">
        <Card className="bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-6">Quick Access to Key Resources</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <Button to="/fish-database" variant="outline" size="sm" className="justify-start">
              <Database className="w-4 h-4 mr-2" />
              Fish Database
            </Button>
            <Button to="/fishing-rods" variant="outline" size="sm" className="justify-start">
              <Anchor className="w-4 h-4 mr-2" />
              Fishing Rods
            </Button>
            <Button to="/rod-tier-list" variant="outline" size="sm" className="justify-start">
              <TrendingUp className="w-4 h-4 mr-2" />
              Rod Tier List
            </Button>
            <Button to="/codes" variant="outline" size="sm" className="justify-start">
              <Gift className="w-4 h-4 mr-2" />
              Codes
            </Button>
            <Button to="/updates" variant="outline" size="sm" className="justify-start">
              <Calendar className="w-4 h-4 mr-2" />
              Updates
            </Button>
            <Button to="/how-to-play" variant="outline" size="sm" className="justify-start">
              <BookOpen className="w-4 h-4 mr-2" />
              How to Play
            </Button>
          </div>
        </Card>
      </section>

    </div>
  );
}
