/**
 * ═══════════════════════════════════════════════════════════════════════════
 * MAXIMIZING REWARDS - PROGRESSION GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/maximizing-rewards
 * 
 * SEO: Targets "Fish It maximize rewards", "Fish It event stacking", "Fish It spawn timing"
 * 
 * DATA INTEGRITY RULES:
 * - Island names verified: Fisherman Island
 * - Blackboard reference preserved
 * - NO new event types added
 * - NO external links
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function MaximizingRewards() {
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
              Maximizing Rewards in Fish It (Spawn Timing, Island Strategy & Event Buffs)
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
            Reward optimization in Fish It requires combining multiple systems.
          </p>
        </div>

        {/* Island Selection Strategy */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Island Selection Strategy
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Each island has unique spawn pools.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Fishing in the correct island for your objective dramatically increases efficiency.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Do not fish randomly across regions.
          </p>
        </div>

        {/* Spawn Timing Awareness */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Spawn Timing Awareness
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Certain fish appear only during:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Specific weather</li>
            <li>Event windows</li>
            <li>Progression stages</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Timing matters more than duration.
          </p>
        </div>

        {/* Admin Event Optimization */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Admin Event Optimization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Admin Events increase rare spawn rates.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Before starting a long farming session:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
              <p>Visit the Blackboard on Fisherman Island.</p>
              <p>Confirm if an event is active.</p>
              <p>Align your build with event bonuses.</p>
            </div>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Event stacking dramatically increases returns.
          </p>
        </div>

        {/* Combining Systems */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Combining Systems
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Maximum reward efficiency comes from:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Correct island</li>
            <li>Active event</li>
            <li>Appropriate build</li>
            <li>Efficient casting</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ignoring one system reduces total output.
          </p>
        </div>

        {/* Final Rule of Optimization */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Final Rule of Optimization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Fish It rewards structured sessions.
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
              <p>Plan before fishing.</p>
              <p>Align systems.</p>
              <p>Stack efficiency.</p>
            </div>
          </Card>
        </div>

      </section>

    </div>
  );
}
