/**
 * ═══════════════════════════════════════════════════════════════════════════
 * COMMON BEGINNER MISTAKES - MISTAKES GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/common-beginner-mistakes
 * 
 * SEO: Targets "Fish It beginner mistakes", "Fish It what not to do", "Fish It avoid mistakes"
 * 
 * DATA INTEGRITY RULES:
 * - NO new mechanics invented
 * - NO external links
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function CommonBeginnerMistakes() {
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
              Common Beginner Mistakes in Fish It (2026 Early Game Errors to Avoid)
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
            Fish It rewards efficiency and system awareness. Most beginners slow their own progression without realizing it.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            If you want to level faster and avoid wasted time, avoid these common mistakes.
          </p>
        </div>

        {/* Mistake #1: Overspending Coins Too Early */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mistake #1: Overspending Coins Too Early
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Coins should increase efficiency — not just stats.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Many beginners:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Upgrade immediately after every sale</li>
            <li>Purchase marginal improvements</li>
            <li>Unlock islands without economic stability</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Instead:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Only upgrade when it significantly increases catch frequency or consistency.
            </p>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Early coin stability is more important than minor stat boosts.
          </p>
        </div>

        {/* Mistake #2: Chasing Rare Fish Too Early */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mistake #2: Chasing Rare Fish Too Early
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Rare fish are tempting.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            But early game:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Your gear synergy is low</li>
            <li>Luck stacking is underdeveloped</li>
            <li>Spawn efficiency is inconsistent</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Rare hunting becomes viable later, when:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Your leveling pace slows</li>
            <li>You have optimized builds</li>
            <li>Admin Events are relevant</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Early progression should focus on XP volume, not rarity.
          </p>
        </div>

        {/* Mistake #3: Ignoring XP Optimization */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mistake #3: Ignoring XP Optimization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            XP-per-minute determines progression speed.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Beginners often:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Fish passively</li>
            <li>Wait too long between casts</li>
            <li>Switch islands randomly</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Consistent casting in stable zones builds momentum.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Volume beats randomness early.
          </p>
        </div>

        {/* Mistake #4: Ignoring the Fish Index */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mistake #4: Ignoring the Fish Index
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The Fish Index tracks progression by island.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Ignoring it leads to:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Duplicate farming</li>
            <li>Inefficient island choices</li>
            <li>Missed completion opportunities</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Use the Fish Index as a targeting tool.
          </p>
        </div>

      </section>

    </div>
  );
}
