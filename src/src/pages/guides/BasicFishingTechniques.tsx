/**
 * ═══════════════════════════════════════════════════════════════════════════
 * BASIC FISHING TECHNIQUES - BEGINNER GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/basic-fishing-techniques
 * 
 * SEO: Targets "Fish It fishing techniques", "how to fish efficiently", "fishing tips"
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function BasicFishingTechniques() {
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
            Basic Fishing Techniques (Fish It 2026 Guide)
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-12 space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Fishing in Fish It is deceptively simple—cast, wait, catch. But mastering basic techniques dramatically improves your efficiency, XP per minute, and coin income.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide covers core fishing techniques that separate casual players from efficient grinders.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Understanding Cast Timing
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Cast timing affects your overall session efficiency.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Key principles:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Cast immediately after selling to minimize idle time</li>
            <li>Avoid recasting in the same spot repeatedly if no bites occur</li>
            <li>Learn spawn patterns for your current island</li>
            <li>Speed stat reduces time between catches, not cast animation</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Spawn Awareness
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Fish spawns follow location-specific patterns. Understanding spawn behavior reduces wasted casts.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            What to observe:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Which fish species appear most frequently at your location</li>
            <li>Average time between catches with your current rod</li>
            <li>Whether rare fish appear during specific conditions</li>
            <li>How Luck and Speed stats affect your catch rate</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Consistent Fishing Strategy
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Consistency beats random casting. Follow this loop:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <ol className="text-gray-300 text-lg leading-relaxed space-y-3 list-decimal list-inside">
              <li>Cast your rod</li>
              <li>Wait for bite notification</li>
              <li>Reel in catch</li>
              <li>Sell immediately (don't hoard fish)</li>
              <li>Repeat without delay</li>
            </ol>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            This creates maximum catches-per-minute and stable XP gain.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Reducing Wasted Casts
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Wasted casts occur when:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>You cast in areas with poor spawn rates</li>
            <li>Your rod's Kg capacity is too low for the location's fish</li>
            <li>You're fishing at a location designed for higher-level players</li>
            <li>You idle between catches instead of recasting immediately</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Use the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> to verify which fish spawn at your current location before committing to a long session.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            When to Change Locations
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Change locations when:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Your catch rate drops significantly</li>
            <li>You've outleveled the location's spawn pool</li>
            <li>You want to target specific fish from another island</li>
            <li>You unlock a new location with better value-per-catch</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Using Rod Stats Effectively
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Your rod's stats directly impact fishing efficiency:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">Luck:</span>
              <span>Increases chance of rarer fish. Prioritize after reaching mid-game.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">Speed:</span>
              <span>Reduces time between catches. Critical for early XP grinding.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">Kg Capacity:</span>
              <span>Determines which fish you can catch. Essential for late-game locations.</span>
            </li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Check the <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> to identify which rod upgrades provide the best efficiency gains for your current level.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Final Tips
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Fish in sessions of 15-30 minutes to maintain focus</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Sell frequently to avoid inventory clutter</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Track your XP gain to measure efficiency improvements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Upgrade rods when efficiency plateaus</span>
              </li>
            </ul>
          </Card>
        </div>

      </section>

    </div>
  );
}
