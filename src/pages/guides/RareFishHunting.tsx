/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RARE FISH HUNTING - ADVANCED GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/rare-fish-hunting
 * 
 * SEO: Targets "Fish It rare fish guide", "Fish It Mythic fishing", "Fish It Secret fish"
 * 
 * DATA INTEGRITY RULES:
 * - Island names verified: Fisherman Island, Coralcrest, Abyssal Trench, Pirate Cove
 * - Rarity tiers: Mythic, Secret
 * - NO new islands added
 * - NO external links
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function RareFishHunting() {
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
          {/* Back to Guides */}
          <Link 
            to="/guides" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Guides Hub</span>
          </Link>

          <div>
            {/* SEO: Primary H1 heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Rare Fish Hunting in Fish It (Mythic & Secret Farming Strategy)
            </h1>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* Guide Content */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <div className="mb-12 space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Rare fish farming is inefficient without structure.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Mythic and Secret fish require:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
            <li>Correct island</li>
            <li>Correct spawn window</li>
            <li>Proper build alignment</li>
            <li>Event timing</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Random rare hunting wastes hours.
          </p>
        </div>

        {/* Step 1: Confirm Island Location */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Step 1: Confirm Island Location
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Rare fish are island-specific.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Fish in the correct region:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Fisherman Island</li>
            <li>Coralcrest</li>
            <li>Abyssal Trench</li>
            <li>Pirate Cove</li>
            <li>Other unlockable islands</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Fishing in the wrong region guarantees failure.
          </p>
        </div>

        {/* Step 2: Check Spawn Conditions */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Step 2: Check Spawn Conditions
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Rare fish may depend on:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Weather cycles</li>
            <li>Event windows</li>
            <li>Progression stage</li>
            <li>Hidden locations</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Confirm spawn logic before committing to long sessions.
          </p>
        </div>

        {/* Step 3: Align With Admin Events */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Step 3: Align With Admin Events
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Admin Events increase rare spawn probability.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Before farming:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
              <p>Visit the Blackboard on Fisherman Island.</p>
              <p>Confirm event status.</p>
              <p>Align build with event objective.</p>
            </div>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Event stacking dramatically increases efficiency.
          </p>
        </div>

        {/* Step 4: Accept Reduced Volume */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Step 4: Accept Reduced Volume
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Rare hunting reduces catch frequency.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            This is normal.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Expect:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Slower catch cycles</li>
            <li>Higher value returns</li>
            <li>More patience required</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Rare hunting is precision-based progression.
          </p>
        </div>

      </section>

    </div>
  );
}
