/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RNG CALCULATOR PAGE — PROBABILITY & TIME ESTIMATION TOOL
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Helps players calculate their chances of catching specific fish and estimate
 * how long it will take based on their fishing rate and luck multipliers.
 * 
 * WHO IT'S FOR:
 * - Players hunting rare or legendary fish
 * - Anyone planning long fishing sessions
 * - Players optimizing their time and luck boosts
 * 
 * HOW IT WORKS:
 * 1. Select a fish from the database
 * 2. Enter your luck multiplier (from rods, items, game passes)
 * 3. Enter your casts per hour (how fast you fish)
 * 4. See probability milestones: 50%, 90%, 99% chance of success
 * 
 * SEO META PLACEHOLDERS:
 * Title: "Fish It RNG Calculator - Catch Probability & Time Estimator | FishIt.gg"
 * Description: "Calculate your chances of catching rare fish in Roblox Fish It. 
 * Get estimated time, probability milestones, and plan your fishing sessions."
 * Keywords: "fish it calculator, rng calculator, fish probability, catch rate"
 */

import { useState, useMemo } from 'react';
import { Calculator, TrendingUp, Clock, Percent, Sparkles, Info } from 'lucide-react';
import { fishData, FishEntry } from '../data/fishData';
import Breadcrumbs from '../components/seo/Breadcrumbs';
import JsonLd from '../components/seo/JsonLd';
import Card from '../components/Card';
import Badge from '../components/Badge';

export default function RngCalculator() {
  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE CONTENT — SAFE TO CHANGE
  // ═══════════════════════════════════════════════════════════════════════════
  
  // SEO: Page title (H1)
  const pageTitle = "Fish It RNG Calculator";
  const pageSubtitle = "Calculate catch probabilities and estimate fishing time for any fish";
  
  // EDITABLE: Explanation text
  const explanationText = "This calculator helps you understand your chances of catching specific fish and estimates how long it might take. Enter your fishing setup details below to see probability milestones.";
  
  // EDITABLE: Default values
  const defaultLuckMultiplier = 1;
  const defaultCastsPerHour = 300;
  
  // ═══════════════════════════════════════════════════════════════════════════
  // STATE MANAGEMENT
  // ═══════════════════════════════════════════════════════════════════════════
  
  const [selectedFish, setSelectedFish] = useState<FishEntry | null>(null);
  const [luckMultiplier, setLuckMultiplier] = useState<number>(defaultLuckMultiplier);
  const [castsPerHour, setCastsPerHour] = useState<number>(defaultCastsPerHour);
  const [manualOdds, setManualOdds] = useState<number | null>(null);
  const [useManualOdds, setUseManualOdds] = useState(false);
  
  // ═══════════════════════════════════════════════════════════════════════════
  // CALCULATION LOGIC
  // ═══════════════════════════════════════════════════════════════════════════
  
  // Parse "1 in X" or "1 in X,XXX" format to get the denominator
  const parseFishOdds = (chanceStr: string): number | null => {
    // Handle "???" or unknown values
    if (chanceStr.includes('?')) return null;
    
    // Match "1 in X" or "1 in X,XXX" format
    const match = chanceStr.match(/1 in ([\d,]+)/i);
    if (match) {
      // Remove commas and parse
      return parseInt(match[1].replace(/,/g, ''), 10);
    }
    return null;
  };
  
  // Get effective odds (base odds divided by luck multiplier)
  const getEffectiveOdds = (): number | null => {
    if (useManualOdds && manualOdds) {
      return manualOdds / luckMultiplier;
    }
    
    if (!selectedFish) return null;
    
    const baseOdds = parseFishOdds(selectedFish.Chance);
    if (!baseOdds) return null;
    
    return baseOdds / luckMultiplier;
  };
  
  // Calculate probability of getting at least one success in N trials
  // Formula: P(at least one) = 1 - (1 - p)^n
  // Where p = 1/odds
  const calculateProbability = (casts: number, odds: number): number => {
    const pSuccess = 1 / odds;
    const pNone = Math.pow(1 - pSuccess, casts);
    return (1 - pNone) * 100;
  };
  
  // Find number of casts needed to reach target probability
  // Derived from: targetProb = 1 - (1 - 1/odds)^n
  // Solving for n: n = ln(1 - targetProb) / ln(1 - 1/odds)
  const castsForProbability = (targetProb: number, odds: number): number => {
    if (targetProb >= 1) return Infinity;
    const pSuccess = 1 / odds;
    return Math.ceil(Math.log(1 - targetProb) / Math.log(1 - pSuccess));
  };
  
  // ═══════════════════════════════════════════════════════════════════════════
  // COMPUTED VALUES
  // ═══════════════════════════════════════════════════════════════════════════
  
  const calculations = useMemo(() => {
    const effectiveOdds = getEffectiveOdds();
    if (!effectiveOdds || effectiveOdds <= 0) return null;
    
    const chancePerCast = (1 / effectiveOdds) * 100;
    const expectedCasts = effectiveOdds; // Expected value = 1/p
    
    // Milestone casts
    const casts50 = castsForProbability(0.50, effectiveOdds);
    const casts90 = castsForProbability(0.90, effectiveOdds);
    const casts99 = castsForProbability(0.99, effectiveOdds);
    
    // Time estimates (in hours)
    const hours50 = casts50 / castsPerHour;
    const hours90 = casts90 / castsPerHour;
    const hours99 = casts99 / castsPerHour;
    
    return {
      effectiveOdds,
      chancePerCast,
      expectedCasts,
      milestones: [
        { probability: 50, casts: casts50, hours: hours50 },
        { probability: 90, casts: casts90, hours: hours90 },
        { probability: 99, casts: casts99, hours: hours99 },
      ]
    };
  }, [selectedFish, luckMultiplier, castsPerHour, manualOdds, useManualOdds]);
  
  // ═══════════════════════════════════════════════════════════════════════════
  // HELPER FUNCTIONS
  // ═══════════════════════════════════════════════════════════════════════════
  
  // Format time in human-readable format
  const formatTime = (hours: number): string => {
    if (!isFinite(hours)) return "∞";
    if (hours < 1) {
      const minutes = Math.round(hours * 60);
      return `${minutes} min`;
    }
    if (hours < 24) {
      return `${hours.toFixed(1)} hours`;
    }
    const days = Math.floor(hours / 24);
    const remainingHours = Math.round(hours % 24);
    return `${days}d ${remainingHours}h`;
  };
  
  // Format large numbers with commas
  const formatNumber = (num: number): string => {
    if (!isFinite(num)) return "∞";
    return num.toLocaleString();
  };
  
  // Get rarity color class
  const getRarityColor = (rarity: string): string => {
    const colors: Record<string, string> = {
      'Common': 'text-gray-300',
      'Uncommon': 'text-green-400',
      'Rare': 'text-blue-400',
      'Epic': 'text-purple-400',
      'Legendary': 'text-yellow-400',
      'Mythic': 'text-pink-400',
      'Secret': 'text-red-400',
    };
    return colors[rarity] || 'text-white';
  };
  
  // ═══════════════════════════════════════════════════════════════════════════
  // BREADCRUMBS & JSON-LD
  // ═══════════════════════════════════════════════════════════════════════════
  
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'RNG Calculator', path: '/rng-calculator' },
  ];
  
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Fish It RNG Calculator",
    "description": "Calculate catch probabilities and fishing time estimates for Roblox Fish It",
    "applicationCategory": "UtilityApplication",
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
    <div className="min-h-screen">
      {/* STRUCTURE: Breadcrumbs for navigation context */}
      <Breadcrumbs items={breadcrumbItems} />
      
      {/* SEO: JSON-LD structured data */}
      <JsonLd data={jsonLdData} />
      
      {/* STRUCTURE: Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* SEO: H1 Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Badge variant="cyan" className="animate-pulse">
              NEW TOOL
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            <Calculator className="inline-block w-10 h-10 mr-3 text-cyan-400" />
            {pageTitle}
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {pageSubtitle}
          </p>
        </div>
        
        {/* ENGAGEMENT: Explanation card */}
        <Card className="mb-8 border-cyan-500/30">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            <p className="text-gray-300">
              {explanationText}
            </p>
          </div>
        </Card>
        
        {/* STRUCTURE: Two-column layout (inputs | outputs) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN: Inputs */}
          <div className="space-y-6">
            <Card className="border-cyan-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                Calculator Inputs
              </h2>
              
              {/* EDITABLE: Fish selection dropdown */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Target Fish
                  </label>
                  <select
                    value={selectedFish ? fishData.indexOf(selectedFish) : ''}
                    onChange={(e) => {
                      const index = parseInt(e.target.value);
                      setSelectedFish(isNaN(index) ? null : fishData[index]);
                      setUseManualOdds(false);
                    }}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  >
                    <option value="">-- Select a fish --</option>
                    {fishData.map((fish, index) => (
                      <option key={index} value={index}>
                        {fish["Fish Name"]} ({fish.Rarity}) - {fish.Chance}
                      </option>
                    ))}
                  </select>
                  
                  {selectedFish && (
                    <div className="mt-3 p-3 bg-slate-800/50 rounded-lg border border-cyan-500/20">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-400">Rarity:</span>
                          <span className={`ml-2 font-semibold ${getRarityColor(selectedFish.Rarity)}`}>
                            {selectedFish.Rarity}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400">Location:</span>
                          <span className="ml-2 text-white">{selectedFish.Location}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Base Odds:</span>
                          <span className="ml-2 text-cyan-300">{selectedFish.Chance}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Value:</span>
                          <span className="ml-2 text-green-300">{selectedFish.Value}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* EDITABLE: Manual odds input (optional fallback) */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <input
                      type="checkbox"
                      checked={useManualOdds}
                      onChange={(e) => setUseManualOdds(e.target.checked)}
                      className="w-4 h-4 rounded border-cyan-500/30 bg-slate-800 text-cyan-500 focus:ring-cyan-400/20"
                    />
                    Use Manual Odds (Optional)
                  </label>
                  {useManualOdds && (
                    <input
                      type="number"
                      value={manualOdds || ''}
                      onChange={(e) => setManualOdds(parseFloat(e.target.value) || null)}
                      placeholder="Enter odds denominator (e.g., 1000 for '1 in 1000')"
                      className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    />
                  )}
                </div>
                
                {/* EDITABLE: Luck multiplier input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Luck Multiplier
                    <span className="ml-2 text-xs text-gray-500">(from rods, items, game passes)</span>
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={luckMultiplier}
                    onChange={(e) => setLuckMultiplier(parseFloat(e.target.value) || 1)}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    Higher multiplier = better odds. Default is 1.0 (no bonuses).
                  </p>
                </div>
                
                {/* EDITABLE: Casts per hour input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Casts Per Hour
                    <span className="ml-2 text-xs text-gray-500">(your fishing speed)</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="10"
                    value={castsPerHour}
                    onChange={(e) => setCastsPerHour(parseInt(e.target.value) || 1)}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    Average: 200-400 casts/hour depending on rod and playstyle.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* RIGHT COLUMN: Results */}
          <div className="space-y-6">
            {calculations ? (
              <>
                {/* ENGAGEMENT: Per-cast probability */}
                <Card className="border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 to-blue-950/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
                      <Percent className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Chance Per Cast</h3>
                      <p className="text-sm text-gray-400">With your luck multiplier applied</p>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-cyan-300">
                    {calculations.chancePerCast < 0.01 
                      ? calculations.chancePerCast.toExponential(2)
                      : calculations.chancePerCast.toFixed(4)}%
                  </div>
                  <p className="mt-2 text-gray-400">
                    Effective odds: 1 in {formatNumber(Math.round(calculations.effectiveOdds))}
                  </p>
                </Card>
                
                {/* ENGAGEMENT: Expected casts */}
                <Card className="border-purple-500/30 bg-gradient-to-br from-purple-950/30 to-blue-950/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Expected Casts</h3>
                      <p className="text-sm text-gray-400">Average attempts needed</p>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-purple-300">
                    {formatNumber(Math.round(calculations.expectedCasts))}
                  </div>
                  <p className="mt-2 text-gray-400">
                    Estimated time: {formatTime(calculations.expectedCasts / castsPerHour)}
                  </p>
                </Card>
                
                {/* ENGAGEMENT: Probability milestones */}
                <Card className="border-yellow-500/30 bg-gradient-to-br from-yellow-950/30 to-blue-950/30">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-yellow-500/20 border border-yellow-400/30 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Probability Milestones</h3>
                      <p className="text-sm text-gray-400">Chance to catch at least once</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {calculations.milestones.map((milestone, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-slate-800/50 rounded-lg border border-yellow-500/20"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-lg font-bold text-yellow-300">
                            {milestone.probability}% Chance
                          </span>
                          <Badge variant={milestone.probability === 50 ? "blue" : milestone.probability === 90 ? "purple" : "pink"}>
                            {milestone.probability === 50 ? "Median" : milestone.probability === 90 ? "Likely" : "Very Likely"}
                          </Badge>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">
                          {formatNumber(milestone.casts)} casts
                        </div>
                        <div className="text-sm text-gray-400">
                          ≈ {formatTime(milestone.hours)} at {castsPerHour} casts/hour
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-950/30 border border-blue-500/20 rounded-lg">
                    <p className="text-xs text-gray-400">
                      <strong className="text-cyan-300">Tip:</strong> These are probability estimates. 
                      You might get lucky and catch it sooner, or it might take longer. 
                      The 50% milestone is the median (half of players catch it by this point).
                    </p>
                  </div>
                </Card>
              </>
            ) : (
              /* ENGAGEMENT: Empty state */
              <Card className="border-cyan-500/30 bg-gradient-to-br from-slate-900/50 to-blue-950/30">
                <div className="text-center py-12">
                  <Calculator className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-400 mb-2">
                    No Calculations Yet
                  </h3>
                  <p className="text-gray-500">
                    Select a fish and enter your fishing setup to see probability estimates.
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
        
        {/* ENGAGEMENT: How it works section */}
        <Card className="mt-12 border-cyan-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">
            How This Calculator Works
          </h2>
          <div className="space-y-3 text-gray-300">
            <p>
              <strong className="text-cyan-300">Probability Formula:</strong> This calculator uses 
              the binomial probability formula to determine your chances of catching a fish after 
              a certain number of casts.
            </p>
            <p>
              <strong className="text-cyan-300">50% Milestone:</strong> This is the median number 
              of casts. Half of all players will catch the fish by this point, and half will need more attempts.
            </p>
            <p>
              <strong className="text-cyan-300">90% Milestone:</strong> At this point, 9 out of 10 
              players will have caught the fish. This is a more realistic "grind target" for rare fish.
            </p>
            <p>
              <strong className="text-cyan-300">99% Milestone:</strong> Nearly guaranteed success. 
              Only 1% of players will still be hunting after this many casts.
            </p>
            <p>
              <strong className="text-cyan-300">Luck Multiplier:</strong> Divides the base odds. 
              For example, a 2x luck multiplier turns "1 in 1000" into "1 in 500" (better odds).
            </p>
          </div>
        </Card>
        
      </div>
    </div>
  );
}
