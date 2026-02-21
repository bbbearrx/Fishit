/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FISHING MECHANICS PAGE — SEO PILLAR PAGE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * DEVELOPER NOTES — IMPORTANT:
 * 
 * This is a PILLAR PAGE in the site's SEO architecture.
 * 
 * WHAT THAT MEANS:
 * - This page serves as a central hub for gameplay mechanics content
 * - It should eventually link to detailed guides (fishing techniques, progression)
 * - Once detailed guides exist, link them from the sections below
 * - The goal is to build a strong internal linking structure for SEO
 * 
 * CONTENT POLICY — CRITICAL:
 * - DO NOT invent mechanics details, formulas, or exact values
 * - DO NOT fabricate catch rates, probabilities, or technical specifics
 * - ALL content must use clear "[PLACEHOLDER]" or "TBD" labels
 * - Only add real data once verified in-game
 * - This maintains credibility and prevents misinformation
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
 * - FAQ section targets long-tail queries
 * - Regular update promise signals freshness
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * SEO META PLACEHOLDERS (Update when deploying to real domain)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Meta Title Example:
 * "Fish It Mechanics Guide - How Fishing Works in Roblox | Your Site Name"
 * 
 * Meta Description Example:
 * "Complete guide to Fish It fishing mechanics. Learn how to catch fish, upgrade
 * rods, find rare catches, and maximize profits in this Roblox fishing game."
 * 
 * Schema: FAQPage (JSON-LD injected automatically for FAQ section)
 */

import { useState } from 'react';
import { Fish, TrendingUp, Target, DollarSign, ChevronDown, ChevronUp, HelpCircle, ArrowRight, Sparkles, Waves, BookMarked, Link2 } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import RelatedGuides from '../components/sections/RelatedGuides';
import JsonLd from '../components/seo/JsonLd';

export default function Mechanics() {
  // ═══════════════════════════════════════════════════════════════════════════
  // ENGAGEMENT: FAQ Accordion State
  // ═══════════════════════════════════════════════════════════════════════════
  
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE CONTENT — SAFE TO CHANGE
  // ═══════════════════════════════════════════════════════════════════════════

  // SEO: Main page title — H1 heading
  const pageTitle = "Fish It Mechanics Guide — How Fishing Works";

  // SEO: Page subtitle — explains the mechanics guide purpose
  const pageSubtitle = "Master the core gameplay systems of Fish It on Roblox. Understand fishing rod stats (Luck, Speed, Kg), location-based catches, rarity progression, and the catch-sell-upgrade loop that powers your journey from beginner to end-game player.";

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: How Fishing Works Section
  // ═══════════════════════════════════════════════════════════════════════════

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
      title: 'Rarity Progression',
      description: 'Fish are categorized by rarity: Common, Uncommon, Rare, Epic, Legendary, Mythic, and Secret. Each tier has progressively lower catch rates but exponentially higher coin values. Mythic fish range from 1 in 50,000 to 1 in 200,000 odds. Secret fish have unknown rates and are considered trophy catches.',
      icon: <Sparkles className="w-6 h-6" />,
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Rod Progression System
  // ═══════════════════════════════════════════════════════════════════════════

  const rodProgression = [
    {
      stage: 'Common',
      description: 'Starter Rod, Luck Rod, Carbon Rod, Toy Rod — Free to low-cost rods with 0-50% Luck. Carbon Rod is the early-game XP king despite lower luck.',
      color: 'from-gray-500 to-slate-600',
    },
    {
      stage: 'Uncommon',
      description: 'Grass Rod, Demascus Rod, Ice Rod, Lava Rod — 55-80% Luck range. Lava Rod is a free unlock at Kohana Volcano that enables volcanic fishing.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      stage: 'Rare/Epic',
      description: 'Lucky Rod, Midnight Rod, Steampunk Rod, Chrome Rod — 100-280% Luck. Mid-game rods that unlock Rare and Epic fish hunting strategies.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      stage: 'Legendary',
      description: 'Fluorescent Rod, Astral Rod, Hazmat Rod — 300-380% Luck. High-tier store rods with 23-43% Speed. Essential for advanced location access.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      stage: 'Mythic/Secret',
      description: 'Ares Rod, Angler Rod, Ghostfinn Rod, Bamboo Rod, Element Rod — 455-1111% Luck. End-game quest or high-cost rods for Mythic/Secret fish hunting.',
      color: 'from-yellow-500 to-orange-600',
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Rare Fish & Catch Strategy
  // ═══════════════════════════════════════════════════════════════════════════

  const catchStrategies = [
    {
      title: 'Use the Fish Database Effectively',
      tip: 'Browse our complete Fish Database to see every fish available per location. Each entry lists exact catch chances (e.g., 1 in 100,000 for Kraken) and coin values. Use location pages to plan farming routes based on which rarities you need for quests or profits.',
    },
    {
      title: 'Match Rod to Location',
      tip: 'Check the Rod Database to compare Luck, Speed, and Kg stats. Higher-luck rods increase your odds of catching Mythic and Secret fish. End-game locations like Lost Isle and Ancient Jungle require rods with massive Kg capacities (400K+) to handle rare catches.',
    },
    {
      title: 'Understand Rarity Economics',
      tip: 'View the Rarities Hub to see all fish organized by tier. Mythic fish (1 in 50,000 to 1 in 200,000) sell for 40,000-150,000 coins. Secret fish have unknown rates and "Invaluable" pricing. Target the rarity tier that matches your current rod\'s luck stat.',
      },
    {
      title: 'Stay Updated on New Content',
      tip: 'Check the Updates page regularly for new locations, fish, and systems like the recent Lava Basin expansion with charm crafting. New updates often introduce higher-tier fish and quest-locked rods that reshape the meta.',
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Money Making & Selling Loop
  // ═══════════════════════════════════════════════════════════════════════════

  const moneyMakingSteps = [
    {
      step: '1',
      title: 'Catch Fish',
      description: 'Focus on volume early. Speed-based rods increase casts per minute, which increases XP stability and coin consistency. Do not chase Mythic or Secret fish at low levels. Build momentum through fast catches and steady leveling.',
    },
    {
      step: '2',
      title: 'Sell Your Catch',
      description: 'Fish value is determined by rarity, weight, and mutation multipliers. Legendary and Mythic fish offer large spikes in profit, but consistent selling from mid-tier fish builds reliable progression. Use Wealth potions before selling full inventories for optimized returns.',
    },
    {
      step: '3',
      title: 'Upgrade Equipment',
      description: 'Reinvest coins into rods that improve Speed before stacking Luck too early. Faster rods generate more total catch attempts per minute, which increases both XP and mutation rolls. Prioritize upgrades that improve overall loop efficiency, not single rare outcomes.',
    },
    {
      step: '4',
      title: 'Repeat & Optimize',
      description: 'As you unlock new islands, shift your target pool toward higher-value spawn tables. Combine rod stats, bait effects, enchants, and temporary potions to reduce expected casts per valuable fish. Optimization compounds over time.',
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: FAQ Questions and Answers
  // ═══════════════════════════════════════════════════════════════════════════

  const faqs = [
    {
      question: 'How do I start fishing in Fish It?',
      answer: '[PLACEHOLDER] Step-by-step instructions for beginning your fishing journey will be added once the tutorial sequence is verified.',
    },
    {
      question: 'What determines catch success rate?',
      answer: '[PLACEHOLDER] Information about factors affecting catch rates (rod quality, location, fish rarity, etc.) will be documented.',
    },
    {
      question: 'How do I catch rare fish?',
      answer: '[PLACEHOLDER] Strategies for finding and catching rare fish, including any special requirements, will be provided.',
    },
    {
      question: 'When should I upgrade my rod?',
      answer: '[PLACEHOLDER] Guidance on optimal upgrade timing and cost-benefit analysis will be added once progression is mapped.',
    },
    {
      question: 'What is the best money-making strategy?',
      answer: '[PLACEHOLDER] Tested money-making methods and efficiency comparisons will be shared once gameplay data is collected.',
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // SEO: FAQ Schema (JSON-LD)
  // ═══════════════════════════════════════════════════════════════════════════
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // STRUCTURE: PAGE LAYOUT
  // ═══════════════════════════════════════════════════════════════════════════

  return (
    <div className="min-h-screen">
      {/* SEO: Inject FAQPage JSON-LD schema */}
      <JsonLd data={faqSchema} />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* STRUCTURE: Hero Section */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-950 via-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="epic" className="mb-4">Gameplay Guide</Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {pageTitle}
          </h1>
          
          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto">
            {pageSubtitle}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION: How Fishing Works */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader 
          title="How Fishing Works"
          subtitle="Core mechanics and gameplay basics"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fishingBasics.map((basic, index) => (
            <Card key={index} hover>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <div className="text-white">{basic.icon}</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {basic.title}
                  </h3>
                  <p className="text-gray-400 text-sm italic">
                    {basic.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION: Rod Progression System */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader 
          title="Rod Progression System"
          subtitle="Understand the upgrade path from starter to expert"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {rodProgression.map((stage, index) => (
            <Card key={index} hover>
              <div className={`w-full h-24 rounded-lg bg-gradient-to-br ${stage.color} mb-4 flex items-center justify-center shadow-lg`}>
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <Badge variant={index < 2 ? 'common' : index < 4 ? 'rare' : 'epic'} className="mb-2">
                {stage.stage}
              </Badge>
              <p className="text-gray-400 text-sm italic">
                {stage.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button to="/rod-tier-list" variant="outline">
            View Rod Tier List
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION: Rare Fish & Catch Strategy */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader 
          title="Rare Fish & Catch Strategy"
          subtitle="Tips for maximizing your rare catch rates"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {catchStrategies.map((strategy, index) => (
            <Card key={index} hover>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {strategy.title}
                  </h3>
                  <p className="text-gray-400 text-sm italic">
                    {strategy.tip}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Card className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-cyan-500/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <Link2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  Quick Links to Key Resources
                </h3>
                <p className="text-gray-300 mb-4">
                  Access the essential tools and databases to optimize your Fish It gameplay
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <Button to="/fish-database" variant="outline" size="sm" className="justify-start">
                <Fish className="w-4 h-4 mr-2" />
                Fish Database
              </Button>
              <Button to="/fishing-rods" variant="outline" size="sm" className="justify-start">
                <Target className="w-4 h-4 mr-2" />
                Rod Database
              </Button>
              <Button to="/rod-tier-list" variant="outline" size="sm" className="justify-start">
                <TrendingUp className="w-4 h-4 mr-2" />
                Rod Tier List
              </Button>
              <Button to="/locations" variant="outline" size="sm" className="justify-start">
                <Waves className="w-4 h-4 mr-2" />
                All Locations
              </Button>
              <Button to="/codes" variant="outline" size="sm" className="justify-start">
                <Sparkles className="w-4 h-4 mr-2" />
                Active Codes
              </Button>
              <Button to="/updates" variant="outline" size="sm" className="justify-start">
                <BookMarked className="w-4 h-4 mr-2" />
                Latest Updates
              </Button>
              <Button to="/rarities" variant="outline" size="sm" className="justify-start">
                <Fish className="w-4 h-4 mr-2" />
                Rarity Guide
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION: Money Making & Selling Loop */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader 
          title="Money Making & Selling Loop"
          subtitle="Optimize your profit with efficient fishing strategies"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moneyMakingSteps.map((stepData, index) => (
            <Card key={index} hover>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{stepData.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {stepData.title}
                </h3>
                <p className="text-gray-400 text-sm italic">
                  {stepData.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Card className="bg-gradient-to-r from-green-900/30 to-emerald-900/30">
            <div className="flex items-start gap-4">
              <DollarSign className="w-8 h-8 text-green-400 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">
                  Advanced Profit Optimization
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">• Early Game:</strong> Focus on Speed and XP farming to reach mid-game islands quickly.
                  </p>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">• Mid Game:</strong> Introduce Mutation farming to multiply value through Shiny, Gold, or Neon variants.
                  </p>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">• Late Game:</strong> Target Legendary and Mythic spawn pools during events or weather boosts.
                  </p>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">• Selling Strategy:</strong> Stack Wealth potions before offloading high-value catches.
                  </p>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">• Enchant Strategy:</strong> Use XPerienced for leveling, Gold Digger for selling efficiency, and Luck-based enchants when index hunting.
                  </p>
                  <p className="text-gray-300 text-sm italic mt-4">
                    Long-term progression is about reducing downtime between casts and increasing total valuable roll attempts — not gambling for rare fish too early.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION: Core Systems Behind the Economy */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader 
          title="Core Systems Behind the Economy"
          subtitle="Understanding the mechanics that drive progression"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card hover>
            <h3 className="text-xl font-bold text-white mb-3">
              Rod Stats
            </h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p><strong className="text-white">Luck</strong> increases rarity probability.</p>
              <p><strong className="text-white">Lure Speed</strong> reduces wait time before a bite.</p>
              <p><strong className="text-white">Reel Speed</strong> pulls fish in faster.</p>
              <p><strong className="text-white">Weight capacity</strong> prevents line snapping.</p>
            </div>
          </Card>

          <Card hover>
            <h3 className="text-xl font-bold text-white mb-3">
              Mutations
            </h3>
            <p className="text-gray-300 text-sm">
              Mutations multiply fish value. Higher-tier mutations such as Gold, Neon, Negative, or Rainbow dramatically increase selling price.
            </p>
          </Card>

          <Card hover>
            <h3 className="text-xl font-bold text-white mb-3">
              Enchants
            </h3>
            <p className="text-gray-300 text-sm">
              Permanent rod modifiers that alter Luck, Mutation, XP, or Speed efficiency. Enchants overwrite unless using Transcended Stones.
            </p>
          </Card>

          <Card hover>
            <h3 className="text-xl font-bold text-white mb-3">
              Potions
            </h3>
            <p className="text-gray-300 text-sm">
              Temporary buffs lasting 10–30 minutes. Different potion types stack. Same-type potions typically override weaker versions.
            </p>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-cyan-500/30">
            <h3 className="text-lg font-bold text-white mb-4">
              Explore Related Systems
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              <Button to="/fish-database" variant="outline" size="sm" className="justify-start">
                Fish Database
              </Button>
              <Button to="/fishing-rods" variant="outline" size="sm" className="justify-start">
                Fishing Rods
              </Button>
              <Button to="/guides" variant="outline" size="sm" className="justify-start">
                Guides
              </Button>
              <Button to="/updates" variant="outline" size="sm" className="justify-start">
                Updates
              </Button>
              <Button to="/rarities" variant="outline" size="sm" className="justify-start">
                Rarities
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION: FAQ Accordion */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader 
          title="Fishing Mechanics FAQ"
          subtitle="Common questions about how Fish It works"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} hover className="cursor-pointer" onClick={() => handleFaqToggle(index)}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  {openFaqIndex === index && (
                    <p className="text-gray-400 ml-8 mt-2 italic">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <div className="flex-shrink-0">
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">
            Need more detailed information?
          </p>
          <Button to="/faq" variant="outline">
            View Full FAQ Page
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ENGAGEMENT: Related Guides */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <RelatedGuides />
    </div>
  );
}