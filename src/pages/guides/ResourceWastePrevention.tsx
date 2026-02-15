/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RESOURCE WASTE PREVENTION - MISTAKES GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/resource-waste-prevention
 * 
 * SEO: Targets "Fish It resource waste", "Fish It potion guide", "Fish It efficient spending"
 * 
 * DATA INTEGRITY RULES:
 * - Potions verified: Mutation I, Luck II
 * - Island reference: Fisherman Island
 * - NO durability systems mentioned (removed from old placeholder)
 * - NO external links
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function ResourceWastePrevention() {
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
              Resource Waste Prevention in Fish It (Coins, Potions & Upgrade Efficiency)
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
            Poor resource management slows mid-game scaling.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide explains how to avoid inefficient spending.
          </p>
        </div>

        {/* Avoid Using Potions in Low-Efficiency Zones */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Avoid Using Potions in Low-Efficiency Zones
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Potions such as Mutation I and Luck II should be used strategically.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Use them:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>During Admin Events</li>
            <li>While targeting rare fish</li>
            <li>In optimized islands</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Avoid:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Casual use during early XP grinding</li>
            <li>Stacking potions without objective alignment</li>
          </ul>
        </div>

        {/* Delay Upgrades Without Purpose */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Delay Upgrades Without Purpose
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Before upgrading ask:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
              <p>Does this increase catch speed?</p>
              <p>Does this improve stability?</p>
              <p>Does this align with my current objective?</p>
            </div>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            If not, save coins.
          </p>
        </div>

        {/* Avoid Unlocking Islands Without Stability */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Avoid Unlocking Islands Without Stability
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Unlocking new islands without coin consistency leads to:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Inability to sustain farming</li>
            <li>Inefficient spawn targeting</li>
            <li>Progression slowdowns</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Stabilize income before expanding.
          </p>
        </div>

      </section>

    </div>
  );
}
