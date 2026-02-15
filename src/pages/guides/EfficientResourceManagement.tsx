/**
 * ═══════════════════════════════════════════════════════════════════════════
 * EFFICIENT RESOURCE MANAGEMENT - PROGRESSION GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/efficient-resource-management
 * 
 * SEO: Targets "Fish It resource management", "Fish It coin guide", "Fish It upgrades"
 * 
 * DATA INTEGRITY RULES:
 * - Potions verified: Mutation I, Luck II
 * - NO new resource types added
 * - NO external links
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function EfficientResourceManagement() {
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
              Efficient Resource Management in Fish It (Coins, Potions & Upgrade Strategy)
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
            Coins, potions, and upgrades determine how fast you scale.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Poor resource management is the most common progression bottleneck.
          </p>
        </div>

        {/* Managing Coins */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Managing Coins
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Coins should be used to:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Increase catch frequency</li>
            <li>Unlock meaningful islands</li>
            <li>Improve efficiency</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Avoid:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Cosmetic spending early</li>
            <li>Upgrading for marginal stat increases</li>
            <li>Unlocking islands without stability</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Always ask:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mt-4">
            <p className="text-gray-300 text-lg leading-relaxed font-semibold">
              Will this upgrade increase XP-per-minute?
            </p>
          </Card>
        </div>

        {/* Potion Usage Strategy */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Potion Usage Strategy
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Potions such as Mutation I and Luck II (introduced in updates) should be used strategically.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Use potions when:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Farming during Admin Events</li>
            <li>Targeting specific rare fish</li>
            <li>Maximizing spawn windows</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Avoid using potions casually in low-efficiency zones.
          </p>
        </div>

        {/* Upgrade Timing */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Upgrade Timing
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Do not upgrade immediately after every coin gain.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Instead:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Save for meaningful improvements</li>
            <li>Compare stat impact</li>
            <li>Upgrade only when efficiency noticeably increases</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Resource control prevents mid-game stagnation.
          </p>
        </div>

      </section>

    </div>
  );
}
