/**
 * ═══════════════════════════════════════════════════════════════════════════
 * WHAT NOT TO DO - MISTAKES GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/what-not-to-do
 * 
 * SEO: Targets "Fish It what not to do", "Fish It critical mistakes", "Fish It avoid these"
 * 
 * DATA INTEGRITY RULES:
 * - Island reference: Fisherman Island
 * - NO new mechanics invented
 * - NO external links
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function WhatNotToDo() {
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
              What Not to Do in Fish It (High-Level Progression Warnings)
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
            This is a summary of behaviors that consistently slow progression.
          </p>
        </div>

        {/* Do Not Grind Randomly */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Do Not Grind Randomly
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Fishing without a plan wastes time.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Plan your:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Island</li>
            <li>Objective</li>
            <li>Build</li>
            <li>Session length</li>
          </ul>
        </div>

        {/* Do Not Ignore Admin Events */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Do Not Ignore Admin Events
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Admin Events increase rare spawn rates.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Before long farming sessions:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Visit the Blackboard on Fisherman Island.
            </p>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ignoring event windows reduces efficiency.
          </p>
        </div>

        {/* Do Not Upgrade Emotionally */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Do Not Upgrade Emotionally
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Upgrades should be strategic.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Never purchase gear simply because coins are available.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Efficiency first.
          </p>
        </div>

        {/* Do Not Chase Every Rare */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Do Not Chase Every Rare
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Not every rare fish is worth targeting immediately.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Rare hunting is powerful only when aligned with:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Proper island</li>
            <li>Event timing</li>
            <li>Optimized build</li>
          </ul>
        </div>

        {/* Do Not Ignore System Alignment */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Do Not Ignore System Alignment
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Fish It is system-driven.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Progression improves when:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <p className="text-gray-300 text-lg leading-relaxed font-semibold text-center">
              Island + Build + Spawn + Event align.
            </p>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ignoring one of these slows growth.
          </p>
        </div>

        {/* Final Warning */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Final Warning
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Fish It rewards structured sessions.
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30">
            <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
              <p>Avoid randomness.</p>
              <p>Avoid emotional upgrades.</p>
              <p>Avoid inefficient stacking.</p>
            </div>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed mt-6">
            Play intentionally.
          </p>
        </div>

      </section>

    </div>
  );
}
