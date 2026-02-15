/**
 * ═══════════════════════════════════════════════════════════════════════════
 * INEFFICIENT PRACTICES - MISTAKES GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/inefficient-practices
 * 
 * SEO: Targets "Fish It inefficient fishing", "Fish It bad habits", "Fish It improve efficiency"
 * 
 * DATA INTEGRITY RULES:
 * - Island names verified: Fisherman Island, Coralcrest, Abyssal Trench, Pirate Cove
 * - Island count: 10+
 * - NO new mechanics invented
 * - NO external links
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function InefficientPractices() {
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
              Inefficient Practices in Fish It (Habits That Slow Progression)
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
            Many inefficiencies are not obvious.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Avoid these habits.
          </p>
        </div>

        {/* Fishing Without Spawn Awareness */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Fishing Without Spawn Awareness
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Fishing without checking:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Island pool</li>
            <li>Weather conditions</li>
            <li>Event state</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            leads to wasted sessions.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Always confirm spawn alignment before committing time.
          </p>
        </div>

        {/* Ignoring Island Progression Structure */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ignoring Island Progression Structure
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Fish It contains 10+ islands including:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Fisherman Island</li>
            <li>Coralcrest</li>
            <li>Abyssal Trench</li>
            <li>Pirate Cove</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Jumping between islands without progression strategy slows leveling.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Follow structured unlock paths.
          </p>
        </div>

        {/* Stacking Conflicting Stats */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stacking Conflicting Stats
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Combining high Luck with speed farming objectives creates inefficiency.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Choose one goal per session:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
              <p>XP farming</p>
              <p>Rare targeting</p>
              <p>Mutation hunting</p>
              <p>Event optimization</p>
            </div>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Align your build accordingly.
          </p>
        </div>

      </section>

    </div>
  );
}
