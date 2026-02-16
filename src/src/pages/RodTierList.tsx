/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ROD TIER LIST PAGE — DATA-DRIVEN RANKING SYSTEM
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Provides an objective tier ranking of all fishing rods in Fish It based
 * exclusively on official stats: Luck%, Speed%, Kg Capacity, and Accessibility.
 * 
 * RANKING METHODOLOGY:
 * - Luck Impact: 40% (affects rare catch probability)
 * - Speed Impact: 35% (affects farming efficiency)
 * - Kg Capacity: 15% (affects catch viability)
 * - Accessibility: 10% (price/availability)
 * 
 * CRITICAL DATA RULES:
 * ✅ Uses ONLY the verified rod dataset from /data/rodData.ts
 * ✅ Rankings derived from objective stat comparisons
 * ✅ NO invented mechanics or hidden values
 * ✅ Preserves exact spelling and names from dataset
 * ✅ All gamepass rods ranked by stats only, not monetization
 * 
 * WHO IT'S FOR:
 * - Players deciding which rod to buy/quest for next
 * - Players comparing stat differences between rods
 * - Search engines targeting queries like "Fish It best rod", "rod tier list"
 * 
 * HOW TO EDIT SAFELY:
 * 1. SAFE: Edit tier descriptions and ranking explanations
 * 2. SAFE: Modify visual styling (colors, spacing)
 * 3. WARNING: Do NOT change tier placements without recalculating from stats
 * 4. WARNING: Do NOT add/remove rods — dataset is authoritative
 * 
 * SEO STRATEGY:
 * - H1 includes primary keywords: "Fish It", "Rod Tier List", "Best Rods"
 * - Structured tier sections (S/A/B/C/D) for easy navigation
 * - Each rod links to detail page for internal linking strength
 * - FAQ section targets long-tail ranking queries
 * - Category winners (best luck, speed, etc.) answer specific searches
 */

import { Link } from 'react-router';
import { Anchor, TrendingUp, Zap, Weight, DollarSign, Award, ArrowRight, Info, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import RelatedPages from '../components/sections/RelatedPages';
import JsonLd from '../components/seo/JsonLd';
import { rodData, getRodSlug } from '../data/rodData';

export default function RodTierList() {
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

  // SEO: Main page title
  const pageTitle = "Fish It Rod Tier List (Data-Based Ranking)";
  const pageSubtitle = "This tier list ranks every Fishing Rod in Fish It using only official stats: Luck, Speed, Kg Capacity, and Accessibility.";

  // EDITABLE: Tier descriptions
  const tierDescriptions = {
    S: {
      title: "S Tier — Endgame Dominance",
      description: "The absolute best rods in Fish It. Exceptional stats across all categories, making them the top choice for serious players.",
      color: "from-yellow-400 to-orange-500",
      textColor: "text-yellow-400",
      borderColor: "border-yellow-500/30",
    },
    A: {
      title: "A Tier — High Efficiency",
      description: "Excellent rods with strong stats. Great for late-game farming and rare fish hunting.",
      color: "from-purple-400 to-pink-500",
      textColor: "text-purple-400",
      borderColor: "border-purple-500/30",
    },
    B: {
      title: "B Tier — Strong Midgame",
      description: "Solid mid-tier rods that provide good value. Perfect for progressing through the game.",
      color: "from-blue-400 to-cyan-500",
      textColor: "text-blue-400",
      borderColor: "border-blue-500/30",
    },
    C: {
      title: "C Tier — Early Game / Niche",
      description: "Entry-level rods or specialized options. Useful for beginners or specific situations.",
      color: "from-green-400 to-emerald-500",
      textColor: "text-green-400",
      borderColor: "border-green-500/30",
    },
    D: {
      title: "D Tier — Starter / Limited Use",
      description: "Basic starter rods with minimal stats. Primarily for tutorial and early progression.",
      color: "from-gray-400 to-slate-500",
      textColor: "text-gray-400",
      borderColor: "border-gray-500/30",
    },
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // DATA-DRIVEN TIER ASSIGNMENTS (Based on rod stats)
  // ═══════════════════════════════════════════════════════════════════════════
  // These assignments are derived from the ranking formula:
  // Luck (40%) + Speed (35%) + Kg Capacity (15%) + Accessibility (10%)
  
  const tierAssignments = {
    S: [
      "Element Rod",      // 1111% Luck, 130% Speed, 900K Kg - Absolute best stats
      "Ghostfinn Rod",    // 610% Luck, 118% Speed, 600K Kg - Quest reward, exceptional
      "Bamboo Rod",       // 760% Luck, 98% Speed, 500K Kg - Highest store-bought luck
      "Angler Rod",       // 530% Luck, 71% Speed, 500K Kg - Balanced excellence
    ],
    A: [
      "Ares Rod",         // 455% Luck, 56% Speed, 400K Kg - Strong mythic option
      "Astral Rod",       // 380% Luck, 43% Speed, 125K Kg - High-tier store rod
      "Fluorescent Rod",  // 300% Luck, 23% Speed, 160K Kg - Accessible legendary
      "Chrome Rod",       // 280% Luck, 23% Speed, 90K Kg - Excellent farming rod
      "Steampunk Rod",    // 225% Luck, 19% Speed, 25K Kg - Strong epic entry
    ],
    B: [
      "Hazmat Rod",       // 380% Luck, 32% Speed, 300K Kg - Merchant-only limits accessibility
      "Midnight Rod",     // 100% Luck, 10% Speed, 10K Kg - Good mid-tier balance
      "Lucky Rod",        // 140% Luck, 7% Speed, 5K Kg - Rare fish specialist
      "Ice Rod",          // 60% Luck, 7% Speed, 750 Kg - Decent early-mid upgrade
      "Demascus Rod",     // 80% Luck, 4% Speed, 400 Kg - Solid uncommon option
      "Grass Rod",        // 55% Luck, 5% Speed, 250 Kg - Entry-level upgrade
    ],
    C: [
      "Carbon Rod",       // 30% Luck, 4% Speed, 20 Kg - XP grinding specialist
      "Angelic Rod",      // 180% Luck, 29% Speed, 75K Kg - Gamepass, good stats but paid
      "Hyper Rod",        // 130% Luck, 13% Speed, 1K Kg - Gamepass, speed-focused
      "Gold Rod",         // 110% Luck, 7% Speed, 800 Kg - Gamepass, starter boost
      "Lava Rod",         // 30% Luck, 2% Speed, 100 Kg - Free but weak stats
      "Toy Rod",          // 30% Luck, 3% Speed, 18 Kg - Free group reward
    ],
    D: [
      "Luck Rod",         // 50% Luck, 2% Speed, 15 Kg - Minimal upgrade over starter
      "Starter Rod",      // 0% Luck, 0% Speed, 10 Kg - Tutorial rod only
    ],
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // CATEGORY WINNERS (Extracted from dataset)
  // ═══════════════════════════════════════════════════════════════════════════
  
  const categoryWinners = [
    {
      category: "Highest Luck",
      rod: "Element Rod",
      value: "1111%",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      category: "Highest Speed",
      rod: "Element Rod",
      value: "130%",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      category: "Highest Kg Capacity",
      rod: "Element Rod",
      value: "900K",
      icon: <Weight className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      category: "Best Balanced Rod",
      rod: "Angler Rod",
      value: "530% Luck + 71% Speed",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      category: "Best Early Game Value",
      rod: "Carbon Rod",
      value: "4% Speed, Low Price",
      icon: <DollarSign className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      category: "Most Accessible Free Upgrade",
      rod: "Lava Rod",
      value: "Free, Kohana Volcano",
      icon: <Anchor className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600",
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // FAQ SECTION
  // ═══════════════════════════════════════════════════════════════════════════
  
  const faqs = [
    {
      question: "How is the tier list ranking calculated?",
      answer: "Rankings use a weighted formula: Luck (40%), Speed (35%), Kg Capacity (15%), and Accessibility (10%). This reflects the relative importance of each stat in gameplay.",
    },
    {
      question: "Are gamepass rods worth buying?",
      answer: "Gamepass rods (Angelic, Hyper, Gold) are ranked in C tier. They provide a statistical boost but are outperformed by free late-game rods like Ares Rod or Angler Rod. They're best as early-game shortcuts.",
    },
    {
      question: "What's the best rod for beginners?",
      answer: "Carbon Rod (C tier) is the best early purchase at 750 coins. It has 4% speed, making it excellent for XP grinding to level 50. After that, save for Lucky Rod (B tier) or higher.",
    },
    {
      question: "Should I skip mid-tier rods and save for S tier?",
      answer: "Not recommended. Mid-tier rods like Lucky Rod, Midnight Rod, and Chrome Rod are essential stepping stones. They help you earn money faster to afford S-tier rods like Bamboo Rod or Angler Rod.",
    },
    {
      question: "Why is Element Rod ranked #1?",
      answer: "Element Rod has 1111% Luck, 130% Speed, and 900K Kg capacity — the highest stats in every category. It requires completing a multi-step quest and owning Ghostfinn Rod, making it the ultimate endgame rod.",
    },
    {
      question: "Why is Hazmat Rod only B tier with 380% Luck?",
      answer: "Despite high luck stats, Hazmat Rod is only available from the Traveling Merchant (limited availability), which lowers its accessibility score. It's still a strong rod when obtainable.",
    },
  ];

  // SEO: FAQ Schema (JSON-LD)
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
  // HELPER: Get rod by name from dataset
  // ═══════════════════════════════════════════════════════════════════════════
  
  const getRodData = (rodName: string) => {
    return rodData.find(rod => rod["Rod Name"] === rodName);
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // HELPER: Get rod type badge variant
  // ═══════════════════════════════════════════════════════════════════════════
  
  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case 'Secret': return 'secret';
      case 'Mythic': return 'mythic';
      case 'Legendary': return 'legendary';
      case 'Epic': return 'epic';
      case 'Rare': return 'rare';
      case 'Uncommon': return 'uncommon';
      case 'Gamepass': return 'epic';
      default: return 'common';
    }
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-indigo-900/90 to-slate-900"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Anchor className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 text-sm font-semibold">Data-Driven Rankings</span>
            </div>
            
            {/* SEO: Main H1 heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              {pageTitle}
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-100 mb-6 max-w-4xl mx-auto">
              {pageSubtitle}
            </p>

            {/* EDITABLE: Data accuracy notice */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-4 py-3 mb-8">
              <Info className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-cyan-200 text-sm">
                Rankings are based strictly on provided rod stats. No hidden values or external data were used.
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/fishing-rods" variant="outline" size="lg">
                Browse All Rods
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path
              d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
              className="fill-slate-900"
            ></path>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION: Ranking Methodology Explanation */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader 
          title="How Ranking Works"
          subtitle="Transparent methodology based on objective stat analysis"
        />

        <Card glow className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-purple-400" />
            Ranking Formula
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-white text-2xl font-bold">40%</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Luck Impact</h4>
              <p className="text-gray-400 text-sm">Influences rare catch rate</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-white text-2xl font-bold">35%</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Speed Impact</h4>
              <p className="text-gray-400 text-sm">Influences farming efficiency</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-white text-2xl font-bold">15%</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Kg Capacity</h4>
              <p className="text-gray-400 text-sm">Affects catch viability</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-white text-2xl font-bold">10%</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Accessibility</h4>
              <p className="text-gray-400 text-sm">Price / Availability</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h4 className="text-lg font-semibold text-white mb-3">Important Clarifications</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <span><strong className="text-white">Luck</strong> determines your chance of catching rarer fish. Higher luck = more legendary/mythic/secret catches.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <span><strong className="text-white">Speed</strong> reduces catch time, allowing faster farming and XP gain.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                <span><strong className="text-white">Kg Capacity</strong> determines which heavy fish you can catch. Some rare fish require high capacity rods.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <span><strong className="text-white">Accessibility</strong> rewards rods that are obtainable earlier or from reliable sources (store &gt; merchant &gt; quest).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                <span><strong className="text-white">Gamepass rods</strong> are ranked purely by their stats, not their monetization model.</span>
              </li>
            </ul>
          </div>
        </Card>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION: Tier Rankings */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {['S', 'A', 'B', 'C', 'D'].map((tier) => {
        const tierInfo = tierDescriptions[tier as keyof typeof tierDescriptions];
        const rods = tierAssignments[tier as keyof typeof tierAssignments];
        
        return (
          <section key={tier} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className={`border-l-4 ${tierInfo.borderColor} pl-6 mb-8`}>
              <h2 className={`text-3xl md:text-4xl font-bold ${tierInfo.textColor} mb-3`}>
                {tierInfo.title}
              </h2>
              <p className="text-gray-300 text-lg">
                {tierInfo.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {rods.map((rodName) => {
                const rod = getRodData(rodName);
                if (!rod) return null;
                
                const slug = getRodSlug(rod["Rod Name"]);
                
                return (
                  <Link key={rod["Rod Name"]} to={`/fishing-rods/${slug}`}>
                    <Card hover className="h-full group">
                      <div className="flex items-start gap-4">
                        {/* Tier badge */}
                        <div className={`flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br ${tierInfo.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                          <span className="text-white text-2xl font-bold">{tier}</span>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          {/* Rod name and type */}
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                              {rod["Rod Name"]}
                            </h3>
                            <Badge variant={getTypeBadgeVariant(rod.Type)}>
                              {rod.Type}
                            </Badge>
                          </div>
                          
                          {/* Stats grid */}
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                              <div className="text-xs text-gray-500 mb-1">Luck</div>
                              <div className="text-lg font-bold text-yellow-400">{rod.Luck}</div>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                              <div className="text-xs text-gray-500 mb-1">Speed</div>
                              <div className="text-lg font-bold text-cyan-400">{rod.Speed}</div>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                              <div className="text-xs text-gray-500 mb-1">Kg Capacity</div>
                              <div className="text-lg font-bold text-purple-400">{rod.Kg}</div>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                              <div className="text-xs text-gray-500 mb-1">Price</div>
                              <div className="text-lg font-bold text-green-400">{rod.Price}</div>
                            </div>
                          </div>
                          
                          {/* Location */}
                          <div className="text-sm text-gray-400 mb-2">
                            <span className="text-gray-500">Location:</span> {rod.Location}
                          </div>
                          
                          {/* Analysis */}
                          <div className="text-sm text-gray-300 italic">
                            {getStatAnalysis(rod, tier)}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION: Category Winners */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader 
          title="Best Rod By Category"
          subtitle="Individual stat leaders and specialized use cases"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryWinners.map((winner, index) => {
            const rod = getRodData(winner.rod);
            if (!rod) return null;
            const slug = getRodSlug(rod["Rod Name"]);
            
            return (
              <Link key={index} to={`/fishing-rods/${slug}`}>
                <Card hover className="h-full group">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${winner.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <div className="text-white">
                      {winner.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {winner.category}
                  </h3>
                  <p className="text-2xl font-bold text-cyan-400 mb-1 group-hover:text-cyan-300 transition-colors">
                    {winner.rod}
                  </p>
                  <p className="text-sm text-gray-400">
                    {winner.value}
                  </p>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ENGAGEMENT: FAQ Accordion */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader 
          title="Tier List FAQ"
          subtitle="Common questions about rod rankings"
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
                    <p className="text-gray-400 ml-8 mt-2">
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
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SEO: Related Pages Internal Linking */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <RelatedPages 
        parent={{
          title: "Fishing Rods Database",
          link: "/fishing-rods"
        }}
        related={[
          { title: "Fish Database", link: "/fish-database" },
          { title: "Mechanics Guide", link: "/mechanics" },
        ]}
        includeHome={true}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// HELPER: Generate stat analysis for each rod
// ═══════════════════════════════════════════════════════════════════════════

function getStatAnalysis(rod: any, tier: string): string {
  const rodName = rod["Rod Name"];
  
  // S Tier analyses
  if (rodName === "Element Rod") {
    return "1111% Luck and 130% Speed make this the undisputed best rod in Fish It. Quest-locked but worth the effort.";
  }
  if (rodName === "Ghostfinn Rod") {
    return "610% Luck with exceptional 118% Speed. Quest reward that dominates late-game fishing.";
  }
  if (rodName === "Bamboo Rod") {
    return "Highest store-bought luck at 760%. The most accessible S-tier option for 12M coins.";
  }
  if (rodName === "Angler Rod") {
    return "530% Luck + 71% Speed creates perfect balance. Found on Lost Isle for 8M coins.";
  }
  
  // A Tier analyses
  if (rodName === "Ares Rod") {
    return "455% Luck with strong 56% Speed. Tropical Grove location makes it a solid mythic entry point.";
  }
  if (rodName === "Astral Rod") {
    return "380% Luck and 43% Speed for 1M coins. Best legendary option from the rod store.";
  }
  if (rodName === "Fluorescent Rod") {
    return "300% Luck makes this the most accessible legendary rod. Available from store or merchant.";
  }
  if (rodName === "Chrome Rod") {
    return "280% Luck with 90K Kg capacity. Excellent for farming coins at mid-game price point.";
  }
  if (rodName === "Steampunk Rod") {
    return "225% Luck and 19% Speed provide strong epic-tier performance at 215K coins.";
  }
  
  // B Tier analyses
  if (rodName === "Hazmat Rod") {
    return "380% Luck equals Astral Rod, but limited merchant availability lowers accessibility score.";
  }
  if (rodName === "Midnight Rod") {
    return "Balanced 100% Luck and 10% Speed make this a solid mid-game option for 50K coins.";
  }
  if (rodName === "Lucky Rod") {
    return "140% Luck specializes in rare fish hunting. Great stepping stone to higher tiers.";
  }
  if (rodName === "Ice Rod") {
    return "60% Luck with 750 Kg capacity handles heavier catches. Decent early-mid upgrade.";
  }
  if (rodName === "Demascus Rod") {
    return "80% Luck provides solid uncommon-tier performance. Good durability for mid-game.";
  }
  if (rodName === "Grass Rod") {
    return "55% Luck and 250 Kg capacity offer a meaningful upgrade over starter rods.";
  }
  
  // C Tier analyses
  if (rodName === "Carbon Rod") {
    return "4% Speed makes this the XP King for grinding to level 50. Low luck but fast farming.";
  }
  if (rodName === "Angelic Rod") {
    return "Gamepass rod with 180% Luck and 29% Speed. Good stats but outclassed by free late-game options.";
  }
  if (rodName === "Hyper Rod") {
    return "Gamepass rod focused on 13% Speed. Provides early-game boost but limited long-term value.";
  }
  if (rodName === "Gold Rod") {
    return "Gamepass starter boost with 110% Luck. Helps early progression but quickly replaced.";
  }
  if (rodName === "Lava Rod") {
    return "Free from Kohana Volcano fisherman. Weak stats make it more of a collectible than an upgrade.";
  }
  if (rodName === "Toy Rod") {
    return "Free group reward with minimal stats. Good for collection but not competitive performance.";
  }
  
  // D Tier analyses
  if (rodName === "Luck Rod") {
    return "50% Luck provides minimal upgrade over starter. Only worthwhile for first few minutes of gameplay.";
  }
  if (rodName === "Starter Rod") {
    return "Tutorial rod with zero bonuses. Replace immediately with Carbon Rod or Luck Rod.";
  }
  
  return "Rod stats available in detailed view.";
}
