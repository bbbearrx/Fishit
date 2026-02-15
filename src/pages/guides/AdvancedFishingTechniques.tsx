/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ADVANCED FISHING TECHNIQUES - ADVANCED GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/advanced-fishing-techniques
 * 
 * SEO: Targets "Fish It advanced techniques", "Fish It stat stacking", "Fish It build optimization"
 * 
 * DATA INTEGRITY RULES:
 * - Stats verified: Luck, Speed, Mutation chance
 * - NO new mechanics added
 * - NO external links
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function AdvancedFishingTechniques() {
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
              Advanced Fishing Techniques in Fish It (Luck, Speed & Mutation Strategy Guide)
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
            Once you pass early progression, fishing efficiency shifts from volume to optimization.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Advanced players no longer fish randomly. They balance:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
            <li>Luck stacking</li>
            <li>Catch speed</li>
            <li>Mutation targeting</li>
            <li>Spawn timing</li>
            <li>Event alignment</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide explains how to balance systems for targeted species farming.
          </p>
        </div>

        {/* Understanding Stat Tradeoffs */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Understanding Stat Tradeoffs
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Three core variables influence advanced fishing:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
              <p className="font-semibold">Luck</p>
              <p className="font-semibold">Speed</p>
              <p className="font-semibold">Mutation chance</p>
            </div>
          </Card>
          <div className="text-gray-300 text-lg leading-relaxed space-y-4">
            <p>Speed increases cast frequency.</p>
            <p>Luck increases higher-tier spawn probability.</p>
            <p>Mutation affects variant farming efficiency.</p>
            <p className="font-semibold">The key is alignment — not maximizing one stat blindly.</p>
          </div>
        </div>

        {/* When to Prioritize Speed */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            When to Prioritize Speed
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Speed is ideal when:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Farming XP</li>
            <li>Building coin stability</li>
            <li>Grinding mid-tier islands</li>
            <li>Preparing for late-game unlocks</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            High speed increases total casts, which increases total opportunity volume.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Speed-first builds are ideal for structured progression farming.
          </p>
        </div>

        {/* When to Prioritize Luck */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            When to Prioritize Luck
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Luck becomes powerful when:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Targeting specific rare species</li>
            <li>Farming during Admin Events</li>
            <li>Completing Fish Index gaps</li>
            <li>Hunting Mythic-tier fish</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Luck stacking without correct island targeting is inefficient.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Luck must be combined with:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Proper island selection</li>
            <li>Active spawn conditions</li>
            <li>Event windows</li>
          </ul>
        </div>

        {/* Mutation Stacking Strategy */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mutation Stacking Strategy
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Mutation stacking becomes viable when:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Farming high-value variants</li>
            <li>Completing advanced Index entries</li>
            <li>Aligning builds for specific spawn pools</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Mutation builds are slower but higher value.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            They are inefficient in early game but powerful late game.
          </p>
        </div>

        {/* Build Alignment Rule */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Build Alignment Rule
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Do not mix builds randomly.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Choose one objective per session:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
              <p>XP Farming</p>
              <p>Rare Targeting</p>
              <p>Mutation Hunting</p>
              <p>Event Optimization</p>
            </div>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Align your build with your objective before casting.
          </p>
        </div>

      </section>

    </div>
  );
}
