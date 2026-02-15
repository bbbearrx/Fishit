/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LAVA BASIN EXPANSION UPDATE PAGE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /updates/lava-basin-expansion
 * 
 * PURPOSE:
 * Detailed breakdown of the Lava Basin Expansion update including new area,
 * charm crafting system, resources, quests, and QoL improvements.
 * 
 * DATA SOURCE:
 * Official Fish It patch notes. No speculation or invented mechanics.
 */

import { Flame, Hammer, Gem, ScrollText, Wrench, Shield, ArrowLeft } from 'lucide-react';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import Breadcrumbs from '../components/seo/Breadcrumbs';
import RelatedGuides from '../components/sections/RelatedGuides';
import { Link } from 'react-router';

export default function LavaBasinExpansion() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Updates', href: '/updates' },
            { label: 'Lava Basin Expansion', href: '/updates/lava-basin-expansion' }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-950 via-red-900 to-slate-900 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-orange-300 text-sm font-semibold">Major Update</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Lava Basin Expansion Update 🔥
          </h1>
          
          <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            New area, charm crafting system, new resources, quests, QoL improvements, and anti-cheat upgrades.
          </p>

          <div className="mt-6">
            <Link 
              to="/updates"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/30 rounded-lg text-orange-400 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              View All Updates
            </Link>
          </div>
        </div>
      </section>

      {/* Update Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader 
          title="What's New"
          subtitle="Complete breakdown of the Lava Basin Expansion"
        />

        <div className="space-y-6">
          {/* New Area */}
          <Card className="border-l-4 border-orange-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3">
                  🌋 New Area
                </h2>
                <p className="text-gray-300">
                  Discover the newly expanded Lava Basin
                </p>
              </div>
            </div>
          </Card>

          {/* Charm Crafting */}
          <Card className="border-l-4 border-purple-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                <Hammer className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3">
                  🔨 Charm Crafting
                </h2>
                <p className="text-gray-300">
                  You can now craft various charms using resources found!
                </p>
              </div>
            </div>
          </Card>

          {/* New Crafting Resources */}
          <Card className="border-l-4 border-cyan-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <Gem className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3">
                  💎 New Crafting Resources
                </h2>
                <p className="text-gray-300">
                  Resources used for crafting charms can now be fished up and extracted from new crystals
                </p>
              </div>
            </div>
          </Card>

          {/* New Quests */}
          <Card className="border-l-4 border-yellow-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                <ScrollText className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3">
                  📜 New Quests
                </h2>
                <p className="text-gray-300">
                  New quests that unlock new areas of the map and tease a new sneak peak
                </p>
              </div>
            </div>
          </Card>

          {/* QoL Improvements */}
          <Card className="border-l-4 border-green-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3">
                  🛠️ QoL Improvements
                </h2>
                <p className="text-gray-300 mb-3">
                  Bug & Tutorial Fixes + Minor Quality Of Life changes
                </p>
                <div className="p-3 bg-green-900/20 border border-green-500/30 rounded-lg flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-green-300 text-sm">
                    <strong>Security Update:</strong> New anti-cheat measures have been added!
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Important Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="bg-orange-950/30 border-orange-500/30">
          <h3 className="text-xl font-bold text-white mb-3">
            📝 Update Information
          </h3>
          <p className="text-gray-300 mb-3">
            This update introduces several new gameplay systems including charm crafting and resource gathering. Specific charm stats, bonuses, and mechanics have not been disclosed in the official patch notes.
          </p>
          <p className="text-gray-300">
            For the most up-to-date information about fishing mechanics and progression strategies, visit the guides below.
          </p>
        </Card>
      </section>

      {/* Related Pages */}
      <RelatedGuides />
    </div>
  );
}