/**
 * ═══════════════════════════════════════════════════════════════════════════
 * UPGRADE PRIORITY GUIDE - PROGRESSION GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/upgrade-priority
 * 
 * SEO: Targets "Fish It upgrade order", "Fish It best upgrades", "Fish It gear priority"
 * 
 * DATA INTEGRITY RULES:
 * - NO new stats or mechanics invented
 * - Speed vs Luck balance preserved
 * - NO external links
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function UpgradePriority() {
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
              Upgrade Priority Guide in Fish It (Speed vs Luck Strategy)
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
            Upgrading without structure slows progression.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide explains which upgrades matter first.
          </p>
        </div>

        {/* Early Game Priority */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Early Game Priority
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
              <p className="font-semibold">Catch Speed</p>
              <p className="font-semibold">Stability</p>
              <p className="font-semibold">Consistency</p>
            </div>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Speed increases XP volume.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Luck stacking is less impactful at low tiers due to low synergy.
          </p>
        </div>

        {/* Mid Game Priority */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mid Game Priority
          </h2>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Balanced stat stacking</li>
            <li>Island-based targeting</li>
            <li>Build alignment with spawn pools</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            At this stage, upgrade decisions should align with progression goals.
          </p>
        </div>

        {/* Late Game Priority */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Late Game Priority
          </h2>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Event-aligned builds</li>
            <li>Rare-target specialization</li>
            <li>Gear synergy stacking</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            High-tier upgrades matter most when aligned with island rotation and spawn timing.
          </p>
        </div>

        {/* Why Speed Often Wins Early */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Speed Often Wins Early
          </h2>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed font-semibold">
              More casts = More XP opportunities.
            </p>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Early-game Luck without synergy produces inconsistent results.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Stability first. Optimization second.
          </p>
        </div>

      </section>

    </div>
  );
}
