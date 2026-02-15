/**
 * ═══════════════════════════════════════════════════════════════════════════
 * BASIC FISHING TECHNIQUES - BEGINNER GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /guides/basic-fishing-techniques
 * 
 * SEO: Targets "Fish It fishing techniques", "Fish It cast timing", "how to fish in Fish It"
 * 
 * DATA INTEGRITY RULES:
 * - Island names verified: Fisherman Island, Coralcrest
 * - NO durability systems invented
 * - NO new mechanics added
 * - NO external links
 */

import { ArrowLeft } from 'lucide-react';
import Card from '../../components/Card';
import { Link } from 'react-router';

export default function BasicFishingTechniques() {
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
              Basic Fishing Techniques in Fish It (2026 Beginner Strategy Guide)
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
            Fishing in Fish It may look simple — cast, wait, reel. But consistent progression depends on how efficiently you fish, not just how often.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            This guide explains:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside">
            <li>Proper cast timing</li>
            <li>Spawn awareness</li>
            <li>Island targeting</li>
            <li>Efficient fishing habits</li>
            <li>How to avoid wasted sessions</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Mastering basic technique early dramatically improves XP gain and coin stability.
          </p>
        </div>

        {/* Technique #1: Prioritize Consistent Casting */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Technique #1: Prioritize Consistent Casting
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Early players often wait too long between casts.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Efficient fishing means:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Minimizing downtime</li>
            <li>Recasting quickly after each catch</li>
            <li>Avoiding unnecessary idle time</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            XP in Fish It scales with volume. The more consistent your catches, the faster you level.
          </p>
          <div className="text-gray-300 text-lg leading-relaxed space-y-2">
            <p>Do not fish passively.</p>
            <p>Fish intentionally.</p>
          </div>
        </div>

        {/* Technique #2: Understand Spawn Awareness */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Technique #2: Understand Spawn Awareness
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Not all fish spawn equally.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Spawn behavior depends on:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Island location</li>
            <li>Weather conditions</li>
            <li>Progression stage</li>
            <li>Active Admin Events</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            If you are targeting a specific fish, confirm:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>You are in the correct island</li>
            <li>The spawn conditions are appropriate</li>
            <li>No event modifiers are active that change spawn rates</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Fishing without spawn awareness wastes time.
          </p>
        </div>

        {/* Technique #3: Fish in Stable Zones Early */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Technique #3: Fish in Stable Zones Early
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            As a beginner, avoid over-rotating between islands.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Instead:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Choose a stable early-game island</li>
            <li>Learn its spawn pool</li>
            <li>Build XP consistency</li>
            <li>Stabilize coin income</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Examples of early regions include:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Fisherman Island</li>
            <li>Coralcrest</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Consistency builds progression momentum.
          </p>
        </div>

        {/* Technique #4: Align Build With Technique */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Technique #4: Align Build With Technique
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Fishing technique and gear synergy are connected.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Early game focus:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Speed over raw Luck</li>
            <li>Frequency over rarity</li>
            <li>Stability over gambling</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Advanced players later adjust builds based on:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Rare hunting</li>
            <li>Mutation stacking</li>
            <li>Event timing</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            But beginners should focus on consistent catch flow.
          </p>
        </div>

        {/* Technique #5: Use the Fish Index Strategically */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Technique #5: Use the Fish Index Strategically
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The Fish Index is not just for completion — it's a planning tool.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Before fishing:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Check missing species</li>
            <li>Confirm island pool</li>
            <li>Align session with progression goals</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Fishing randomly slows overall progression.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Fishing with intention accelerates it.
          </p>
        </div>

        {/* Technique #6: Monitor Weather & Event Windows */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Technique #6: Monitor Weather & Event Windows
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Some fish spawn only during:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Specific weather types</li>
            <li>Active Admin Events</li>
            <li>Time-sensitive windows</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Even beginners benefit from basic awareness.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Check the Blackboard on Fisherman Island to see if an event is active before committing to a long session.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Event alignment increases efficiency.
          </p>
        </div>

        {/* Technique #7: Avoid Common Beginner Inefficiencies */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Technique #7: Avoid Common Beginner Inefficiencies
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Do not:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Chase rare fish too early</li>
            <li>Constantly switch islands</li>
            <li>Upgrade without purpose</li>
            <li>Ignore spawn conditions</li>
            <li>Fish without checking your objective</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            Basic technique is about awareness, not complexity.
          </p>
        </div>

        {/* Building Consistency Without Wasting Time */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Building Consistency Without Wasting Time
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            If you want steady early progression:
          </p>
          <Card className="bg-cyan-950/20 border-cyan-500/30 mb-6">
            <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Recast quickly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Fish in stable zones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Sell consistently</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Upgrade strategically</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Monitor spawn systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✔</span>
                <span>Check event boards</span>
              </li>
            </ul>
          </Card>
          <p className="text-gray-300 text-lg leading-relaxed">
            Small optimizations compound over time.
          </p>
        </div>

        {/* When Basic Techniques Transition to Advanced */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            When Basic Techniques Transition to Advanced
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            You're ready to move beyond beginner fishing technique when:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>You target specific species</li>
            <li>You optimize for rare fish</li>
            <li>You track spawn windows intentionally</li>
            <li>You align gear stacking with event timing</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            At that stage, advanced optimization strategies become relevant.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            But basic technique always forms the foundation.
          </p>
        </div>

        {/* Final Takeaway */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Final Takeaway
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Fish It rewards structured fishing.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The best players:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            <li>Fish consistently</li>
            <li>Plan sessions</li>
            <li>Understand spawn systems</li>
            <li>Align builds with objectives</li>
          </ul>
          <div className="text-gray-300 text-lg leading-relaxed space-y-2">
            <p>Master the basics first.</p>
            <p>Optimization comes later.</p>
          </div>
        </div>

      </section>

    </div>
  );
}
