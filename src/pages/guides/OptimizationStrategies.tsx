/**
 * ═══════════════════════════════════════════════════════════════════════════
 * OPTIMIZATION STRATEGIES - ADVANCED GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/optimization-strategies
 * 
 * SEO: Targets "Fish It optimization guide", "Fish It efficiency tips", "Fish It min-maxing"
 * 
 * DATA INTEGRITY RULES:
 * - Stats verified: Luck, Speed, Mutation
 * - Items: Rods, bobbers, boats, utility items
 * - NO new mechanics added
 * - NO external links
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function OptimizationStrategies() {
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
              Optimization Strategies in Fish It (Reducing Expected Casts Per Target Fish)
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
            Optimization in Fish It means reducing the number of casts required to obtain a target species.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Advanced players combine:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
            <li>Gear synergy</li>
            <li>Spawn logic</li>
            <li>Island targeting</li>
            <li>Weather awareness</li>
            <li>Event timing</li>
          </ul>
        </div>

        {/* Gear Synergy Optimization */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Gear Synergy Optimization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Rods, bobbers, boats, and utility items all influence:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Luck</li>
            <li>Speed</li>
            <li>Mutation</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Stack complementary stats.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Avoid stacking conflicting priorities in a single session.
          </p>
        </div>

        {/* Spawn Logic Planning */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Spawn Logic Planning
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Before fishing:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Confirm island pool</li>
            <li>Confirm weather conditions</li>
            <li>Confirm event state</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Fishing without system alignment increases expected casts.
          </p>
        </div>

        {/* Weather Awareness */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Weather Awareness
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Certain fish spawn only under specific environmental conditions.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Ignoring weather cycles increases wasted casts.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Even slight awareness increases efficiency.
          </p>
        </div>

        {/* Event Stacking */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Event Stacking
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Admin Events create temporary spawn boosts.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Aligning:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed font-semibold text-center">
              Island + Build + Event + Weather
            </p>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            creates exponential efficiency improvements.
          </p>
        </div>

        {/* Optimization Rule */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Optimization Rule
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Optimization is not about fishing longer.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            It is about fishing smarter.
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
              <p>Reduce randomness.</p>
              <p>Increase alignment.</p>
              <p>Shorten grind time.</p>
            </div>
          </Card>
        </div>

      </section>

    </div>
  );
}
