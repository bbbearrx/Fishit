/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RNG CALCULATOR PAGE — FISH IT CATCH PROBABILITY CALCULATOR
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Advanced probability calculator for Fish It that shows players their real odds
 * of catching any fish, expected casts needed, time estimates, and probability
 * milestones.
 * 
 * SEO STRATEGY:
 * - Target keywords: "Fish It RNG", "Fish It calculator", "Fish It secret fish odds",
 *   "Fish It catch probability", "Fish It luck multiplier"
 * - Long-tail: "how many casts to catch secret fish Fish It"
 * - Schema: SoftwareApplication + FAQPage
 * 
 * DATA INTEGRATION:
 * - Pulls fish data from /data/fishData.ts (same source as wiki pages)
 * - Dynamically calculates probabilities based on actual game data
 * - No hardcoded odds
 */

import { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Clock, Target, HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { fishData, getFishSlug } from '../data/fishData';
import { rodData } from '../data/rodData';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import SectionHeader from '../components/SectionHeader';
import MiniSitemap from '../components/sections/MiniSitemap';
import RelatedGuides from '../components/sections/RelatedGuides';
import RelatedPages from '../components/sections/RelatedPages';
import Breadcrumbs from '../components/seo/Breadcrumbs';
import JsonLd from '../components/seo/JsonLd';
import { Link } from 'react-router';

export default function RNGCalculator() {
  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE CONTENT
  // ═══════════════════════════════════════════════════════════════════════════

  const pageTitle = "Fish It RNG Calculator – Advanced Catch Probability Tool";
  const pageSubtitle = "Understand your real odds before you start grinding.";

  // ═══════════════════════════════════════════════════════════════════════════
  // STATE MANAGEMENT
  // ═══════════════════════════════════════════════════════════════════════════

  const [selectedFish, setSelectedFish] = useState(fishData[0]);
  const [luckMultiplier, setLuckMultiplier] = useState(100);
  const [castsPerHour, setCastsPerHour] = useState(600);
  const [selectedRod, setSelectedRod] = useState('None');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Custom rarity mode
  const [useCustomRarity, setUseCustomRarity] = useState(false);
  const [customRarityValue, setCustomRarityValue] = useState(1000000);

  // ═══════════════════════════════════════════════════════════════════════════
  // SORT FISH BY RARITY (RAREST FIRST)
  // ═══════════════════════════════════════════════════════════════════════════
  
  const rarityOrder: { [key: string]: number } = {
    'Secret': 1,
    'Mythic': 2,
    'Legendary': 3,
    'Epic': 4,
    'Rare': 5,
    'Uncommon': 6,
    'Common': 7
  };
  
  const sortedFishData = [...fishData].sort((a, b) => {
    const rarityA = rarityOrder[a.Rarity] || 999;
    const rarityB = rarityOrder[b.Rarity] || 999;
    
    // Sort by rarity first
    if (rarityA !== rarityB) {
      return rarityA - rarityB;
    }
    
    // If same rarity, sort by chance (parse "1 in X")
    const parseChanceForSort = (chanceStr: string): number => {
      const match = chanceStr.match(/1 in ([\d,]+)/);
      if (!match) return 0;
      return parseInt(match[1].replace(/,/g, ''));
    };
    
    const chanceA = parseChanceForSort(a.Chance);
    const chanceB = parseChanceForSort(b.Chance);
    
    return chanceB - chanceA; // Higher number = rarer = show first
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // CALCULATION LOGIC
  // ═══════════════════════════════════════════════════════════════════════════

  // Parse chance string (e.g., "1 in 100,000" → 0.00001)
  const parseChance = (chanceStr: string): number | null => {
    if (chanceStr === '???' || chanceStr === 'Event Only' || chanceStr === 'Event/Quest' || chanceStr === 'Quest' || chanceStr === 'Boss/Event') {
      return null;
    }
    
    const match = chanceStr.match(/1 in ([\d,]+)/);
    if (!match) return null;
    
    const denominator = parseInt(match[1].replace(/,/g, ''));
    return 1 / denominator;
  };

  const baseChance = useCustomRarity ? 1 / customRarityValue : parseChance(selectedFish.Chance);
  
  // Apply luck multiplier (simplified model: luck increases odds linearly)
  const effectiveChance = baseChance ? baseChance * (luckMultiplier / 100) : null;
  
  // Expected casts to get 1 success
  const expectedCasts = effectiveChance ? Math.round(1 / effectiveChance) : null;
  
  // Time estimates
  const expectedHours = expectedCasts && castsPerHour > 0 
    ? (expectedCasts / castsPerHour).toFixed(1) 
    : null;

  // Probability after N casts: P(at least 1) = 1 - (1-p)^n
  const probabilityAfterCasts = (casts: number): number => {
    if (!effectiveChance) return 0;
    return (1 - Math.pow(1 - effectiveChance, casts)) * 100;
  };

  // Calculate casts needed for target probability
  const castsForProbability = (targetProb: number): number => {
    if (!effectiveChance) return 0;
    // n = ln(1-P) / ln(1-p)
    return Math.ceil(Math.log(1 - targetProb) / Math.log(1 - effectiveChance));
  };

  const milestones = [
    { prob: 0.50, label: '50% chance' },
    { prob: 0.75, label: '75% chance' },
    { prob: 0.90, label: '90% chance' },
    { prob: 0.99, label: '99% chance' },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // FAQ DATA
  // ═══════════════════════════════════════════════════════════════════════════

  const faqs = [
    {
      question: "How does Fish It RNG work?",
      answer: "Fish It uses random number generation (RNG) to determine what you catch each time you cast. Every fish has a fixed probability (e.g., 1 in 100,000 for rare mythics). Each cast is an independent event, meaning previous attempts don't affect future odds. You could catch a secret fish on your first cast, or go 500,000 casts without seeing it."
    },
    {
      question: "Does luck increase odds linearly?",
      answer: "In this calculator, we model luck as a linear multiplier for simplicity. For example, 200% luck doubles your base catch rate. The actual in-game mechanics may vary, but this provides a reasonable estimate for planning your grinding sessions and understanding relative improvements."
    },
    {
      question: "What does expected value mean?",
      answer: "Expected value is the average number of casts you'd need if you repeated the process infinitely. For a 1 in 10,000 fish, the expected value is 10,000 casts. This doesn't mean you're guaranteed to catch it in 10,000 casts — you might get lucky at 1,000, or unlucky at 50,000."
    },
    {
      question: "How many casts do I need for a secret fish?",
      answer: "It depends on the fish's rarity and your luck stats. Most secret fish have odds like 1 in 500,000. With 100% luck (no boost), you'd need ~346,573 casts for a 50% chance, or ~1,151,292 casts for a 90% chance. Higher luck reduces these numbers proportionally."
    },
  ];

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

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Fish It RNG Calculator",
    "applicationCategory": "GameUtility",
    "description": "Calculate your real chances of catching any fish in Fish It. See expected casts, time estimates, and probability milestones.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════════════════════

  return (
    <>
      {/* SEO: JSON-LD Schema */}
      <JsonLd data={faqSchema} />
      <JsonLd data={softwareSchema} />

      {/* Page wrapper for Breadcrumbs only */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* HERO SECTION - Full Width */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden w-full">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"></div>
          
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE5NGY2ZSIgb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
              <Calculator className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-semibold">Advanced Probability Tool</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
              {pageTitle}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-cyan-100 mb-6 max-w-3xl mx-auto">
              {pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ADVANCED CALCULATOR */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          title="Advanced Probability Calculator"
          subtitle="See your real odds, expected casts, and time estimates"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: Input Controls */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-cyan-400" />
                Calculator Inputs
              </h3>

              <div className="space-y-6">
                {/* Custom Rarity Toggle */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={useCustomRarity}
                      onChange={(e) => setUseCustomRarity(e.target.checked)}
                      className="w-5 h-5 accent-cyan-500 cursor-pointer"
                    />
                    <div>
                      <span className="text-white font-semibold">Custom Rarity Mode</span>
                      <p className="text-xs text-gray-400 mt-1">Calculate odds for any "1 in X" rarity</p>
                    </div>
                  </label>
                </div>

                {/* Fish Selection OR Custom Rarity Input */}
                {useCustomRarity ? (
                  <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">
                      Custom Rarity (1 in X)
                    </label>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">1 in</span>
                      <input
                        type="number"
                        value={customRarityValue}
                        onChange={(e) => setCustomRarityValue(Math.max(1, parseInt(e.target.value) || 1000000))}
                        className="flex-1 bg-slate-800 border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                        min="1"
                        placeholder="1000000"
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      Example: Enter "500000" for a 1 in 500,000 chance
                    </p>
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">
                      Select Fish
                    </label>
                    <select
                      value={selectedFish["Fish Name"]}
                      onChange={(e) => {
                        const fish = fishData.find(f => f["Fish Name"] === e.target.value);
                        if (fish) setSelectedFish(fish);
                      }}
                      className="w-full bg-slate-800 border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    >
                      {sortedFishData.map((fish, idx) => (
                        <option key={idx} value={fish["Fish Name"]}>
                          {fish["Fish Name"]} ({fish.Rarity}) - {fish.Chance}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Luck Multiplier */}
                <div>
                  <label className="block text-sm font-semibold text-cyan-400 mb-2">
                    Luck Multiplier (%)
                  </label>
                  <input
                    type="number"
                    value={luckMultiplier}
                    onChange={(e) => setLuckMultiplier(Math.max(1, parseInt(e.target.value) || 100))}
                    className="w-full bg-slate-800 border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    min="1"
                  />
                  <p className="text-xs text-gray-400 mt-1">100% = base odds, 200% = double odds</p>
                </div>

                {/* Casts Per Hour */}
                <div>
                  <label className="block text-sm font-semibold text-cyan-400 mb-2">
                    Casts Per Hour
                  </label>
                  <input
                    type="number"
                    value={castsPerHour}
                    onChange={(e) => setCastsPerHour(Math.max(1, parseInt(e.target.value) || 600))}
                    className="w-full bg-slate-800 border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    min="1"
                  />
                  <p className="text-xs text-gray-400 mt-1">Average: 600 casts/hour</p>
                </div>
              </div>
            </Card>
          </div>

          {/* RIGHT: Results Display */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Selected Fish Info OR Custom Rarity Info */}
              {useCustomRarity ? (
                <Card className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border-purple-500/30">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-300 text-sm font-semibold">Custom Rarity Mode</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      1 in {customRarityValue.toLocaleString()}
                    </h3>
                    <p className="text-gray-300">
                      Calculating probabilities for a custom rarity
                    </p>
                  </div>
                </Card>
              ) : (
                <Card className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 border-cyan-500/30">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{selectedFish["Fish Name"]}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant={
                          selectedFish.Rarity === 'Secret' ? 'legendary' :
                          selectedFish.Rarity === 'Mythic' ? 'epic' :
                          selectedFish.Rarity === 'Legendary' ? 'rare' :
                          selectedFish.Rarity === 'Epic' ? 'rare' : 'common'
                        }>
                          {selectedFish.Rarity}
                        </Badge>
                        <span className="text-gray-400">{selectedFish.Location}</span>
                      </div>
                    </div>
                    <Link to={`/fish/${getFishSlug(selectedFish["Fish Name"])}`}>
                      <Button variant="outline" size="sm">View Details</Button>
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Base Chance:</span>
                      <span className="text-white ml-2 font-semibold">{selectedFish.Chance}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Value:</span>
                      <span className="text-white ml-2 font-semibold">{selectedFish.Value}</span>
                    </div>
                  </div>
                </Card>
              )}

              {/* Results */}
              {baseChance === null ? (
                <Card className="bg-yellow-950/30 border-yellow-500/30">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-yellow-300 mb-2">Unknown Probability</h4>
                      <p className="text-yellow-100">
                        This fish has an unknown or event-based catch chance ({selectedFish.Chance}). 
                        Probability calculations cannot be performed for event-exclusive or unverified fish.
                      </p>
                    </div>
                  </div>
                </Card>
              ) : (
                <>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-gradient-to-br from-purple-950/40 to-pink-950/40 border-purple-500/30">
                      <div className="text-center">
                        <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                        <h4 className="text-sm text-gray-400 mb-1">Effective Chance Per Cast</h4>
                        <p className="text-2xl font-bold text-white">
                          {(effectiveChance! * 100).toFixed(4)}%
                        </p>
                        <p className="text-xs text-gray-400 mt-1">1 in {Math.round(1/effectiveChance!)}</p>
                      </div>
                    </Card>

                    <Card className="bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border-cyan-500/30">
                      <div className="text-center">
                        <TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                        <h4 className="text-sm text-gray-400 mb-1">Expected Casts</h4>
                        <p className="text-2xl font-bold text-white">
                          {expectedCasts!.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">On average</p>
                      </div>
                    </Card>

                    <Card className="bg-gradient-to-br from-orange-950/40 to-red-950/40 border-orange-500/30">
                      <div className="text-center">
                        <Clock className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                        <h4 className="text-sm text-gray-400 mb-1">Expected Time</h4>
                        <p className="text-2xl font-bold text-white">
                          {expectedHours} hrs
                        </p>
                        <p className="text-xs text-gray-400 mt-1">At {castsPerHour} casts/hr</p>
                      </div>
                    </Card>
                  </div>

                  {/* Milestone Table */}
                  <Card>
                    <h3 className="text-2xl font-bold text-white mb-4">Probability Milestones</h3>
                    <p className="text-gray-400 mb-6">How many casts you need to reach different probability thresholds</p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-cyan-500/30">
                            <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Target Probability</th>
                            <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Casts Needed</th>
                            <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Time Required</th>
                          </tr>
                        </thead>
                        <tbody>
                          {milestones.map((milestone, idx) => {
                            const casts = castsForProbability(milestone.prob);
                            const hours = (casts / castsPerHour).toFixed(1);
                            return (
                              <tr key={idx} className="border-b border-slate-700/50">
                                <td className="py-3 px-4 text-white font-semibold">{milestone.label}</td>
                                <td className="py-3 px-4 text-gray-300">{casts.toLocaleString()} casts</td>
                                <td className="py-3 px-4 text-gray-300">{hours} hours</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </Card>

                  {/* Explanation Box */}
                  <Card className="bg-blue-950/30 border-blue-500/30">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-bold text-blue-300 mb-2">What This Means</h4>
                        <p className="text-blue-100 mb-3">
                          RNG doesn't guarantee results. Even after {expectedCasts!.toLocaleString()} casts, you could still miss it. 
                          This tool shows <strong>probability</strong>, not certainty.
                        </p>
                        <p className="text-blue-100">
                          A "50% chance" means that if 100 players each did {castsForProbability(0.50).toLocaleString()} casts, 
                          about 50 would catch it and 50 wouldn't. You're rolling the dice every single cast.
                        </p>
                      </div>
                    </div>
                  </Card>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* FAQ SECTION */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Understanding RNG and probability in Fish It"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  {openFaqIndex === index && (
                    <p className="text-gray-300 pl-7">{faq.answer}</p>
                  )}
                </div>
                <button className="text-cyan-400 flex-shrink-0">
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* RELATED CONTENT */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <RelatedPages
        parent={{ label: "Fish Database", href: "/fish-database" }}
        related={[
          { label: "Secret Fish Guide", href: "/secret-fish" },
          { label: "Fishing Rods Database", href: "/fishing-rods" },
          { label: "Rod Tier List", href: "/rod-tier-list" },
        ]}
        includeHome={true}
      />

      <RelatedGuides />

      {/* Mini Sitemap */}
      <MiniSitemap />
    </>
  );
}