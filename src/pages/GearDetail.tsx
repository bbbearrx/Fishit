/**
 * ═══════════════════════════════════════════════════════════════════════════
 * GEAR/ROD DETAIL PAGE — CLUSTER PAGE TEMPLATE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ⚠️ CRITICAL — INTERNAL LINKING CHECKLIST
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Every cluster detail page MUST include these linking blocks:
 * 
 * ✅ 1. RELATED PAGES BLOCK (using <RelatedPages /> component)
 *    Purpose: Link to parent pillar and related cluster pages
 *    Required props:
 *      - parent: Link back to "Rod Tier List" pillar
 *      - related: 2-3 links to similar rod detail pages
 *      - includeHome: true (links back to homepage)
 * 
 * ✅ 2. RELATED GUIDES BLOCK (using <RelatedGuides /> component)
 *    Purpose: Push link equity to main pillar pages
 *    Automatically links to:
 *      - Rod Tier List
 *      - Fishing Mechanics
 *      - Updates
 *      - Fish & Creatures catalog
 * 
 * WHY THIS MATTERS:
 * - Search engines understand site hierarchy
 * - Users discover related content (lower bounce rate)
 * - Page authority flows from detail pages to pillars
 * - Creates topic clusters that signal expertise
 * - Improves crawlability
 * 
 * PLACEMENT RULES:
 * - RelatedPages: After main content, before Related Guides
 * - RelatedGuides: After Related Pages, before footer
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Individual rod/gear detail pages showing stats, tier ranking, and usage tips.
 * This is a CLUSTER PAGE that belongs to the "Rod Tier List" pillar.
 * 
 * ROUTING:
 * This page would be accessed via /gear/:slug (e.g., /gear/golden-rod)
 * Requires dynamic routing setup in /routes.ts
 * 
 * TODO FOR IMPLEMENTATION:
 * 1. Add dynamic route in /routes.ts: { path: "gear/:slug", Component: GearDetail }
 * 2. Use useParams() to get rod slug from URL
 * 3. Fetch or map rod data based on slug
 * 4. Replace placeholder content with real data
 * 5. Update related rod links based on actual rods in database
 * 
 * CONTENT POLICY:
 * - DO NOT invent rod stats, prices, or effectiveness claims
 * - Use clear placeholders until data is verified
 * - Mark all unconfirmed info with [TBD] or [PLACEHOLDER]
 */

import { useParams } from 'react-router';
import { Trophy, DollarSign, Zap, Target, Star } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import SectionHeader from '../components/SectionHeader';
import RelatedPages from '../components/sections/RelatedPages';
import RelatedGuides from '../components/sections/RelatedGuides';

export default function GearDetail() {
  // Get rod slug from URL (e.g., /gear/golden-rod)
  const { slug } = useParams();

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Rod Data (PLACEHOLDER)
  // ═══════════════════════════════════════════════════════════════════════════
  // TODO: Replace with real rod data from API or data file
  // This is placeholder content for demonstration

  const rodData = {
    name: '[Rod Name Placeholder]',
    tier: 'A', // S, A, B, C, D
    tierColor: 'purple', // yellow (S), purple (A), blue (B), green (C), gray (D)
    description: '[PLACEHOLDER] This rod is a high-performance fishing tool designed for experienced players. Detailed stats and performance metrics will be added once verified through testing.',
    stats: {
      price: 'TBD Coins',
      catchSpeed: 'TBD seconds',
      effectiveness: 'TBD%',
      durability: 'TBD uses',
    },
    strengths: [
      '[STRENGTH 1] Placeholder strength description',
      '[STRENGTH 2] Placeholder strength description',
      '[STRENGTH 3] Placeholder strength description',
    ],
    weaknesses: [
      '[WEAKNESS 1] Placeholder weakness description',
      '[WEAKNESS 2] Placeholder weakness description',
    ],
    recommendedFor: '[PLACEHOLDER] Recommended player types and use cases will be added later.',
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // CRITICAL: Internal Linking Configuration
  // ═══════════════════════════════════════════════════════════════════════════
  // RULE: Every cluster page must link to parent and 2+ related pages

  // EDITABLE: Parent page link
  // This should link to the main tier list or equipment category
  const parentLink = {
    label: 'Rod Tier List',
    href: '/rod-tier-list',
  };

  // Related cluster pages (other rod detail pages)
  const relatedLinks = [
    { label: '[Related Rod 1]', href: '/gear/placeholder-rod-1' },
    { label: '[Related Rod 2]', href: '/gear/placeholder-rod-2' },
    { label: '[Related Rod 3]', href: '/gear/placeholder-rod-3' },
  ];

  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* Hero Section */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-950 to-blue-900 py-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Tier Badge */}
            <div className="mb-4">
              <Badge 
                variant={
                  rodData.tierColor === 'yellow' ? 'legendary' :
                  rodData.tierColor === 'purple' ? 'epic' :
                  rodData.tierColor === 'blue' ? 'rare' : 'common'
                } 
                size="lg"
              >
                {rodData.tier}-TIER ROD
              </Badge>
            </div>

            {/* Rod Name - H1 */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              {rodData.name}
            </h1>

            {/* Rod Icon */}
            <Trophy className="w-16 h-16 text-cyan-400 mx-auto mb-6" />

            {/* Description */}
            <p className="text-lg text-cyan-100 max-w-3xl mx-auto italic">
              {rodData.description}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* Rod Stats */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader title="Rod Statistics" subtitle="Performance metrics and specifications" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Price */}
          <Card className="text-center">
            <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-gray-400 text-sm mb-1">Price</h3>
            <p className="text-white text-xl font-bold">{rodData.stats.price}</p>
          </Card>

          {/* Catch Speed */}
          <Card className="text-center">
            <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-gray-400 text-sm mb-1">Catch Speed</h3>
            <p className="text-white text-xl font-bold">{rodData.stats.catchSpeed}</p>
          </Card>

          {/* Effectiveness */}
          <Card className="text-center">
            <Target className="w-12 h-12 text-purple-400 mx-auto mb-3" />
            <h3 className="text-gray-400 text-sm mb-1">Effectiveness</h3>
            <p className="text-white text-xl font-bold">{rodData.stats.effectiveness}</p>
          </Card>

          {/* Durability */}
          <Card className="text-center">
            <Star className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <h3 className="text-gray-400 text-sm mb-1">Durability</h3>
            <p className="text-white text-xl font-bold">{rodData.stats.durability}</p>
          </Card>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* Strengths & Weaknesses */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Strengths */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <span className="text-green-400 text-lg">+</span>
              </div>
              Strengths
            </h2>
            <Card>
              <ul className="space-y-3">
                {rodData.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <p className="text-gray-300 italic">{strength}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Weaknesses */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                <span className="text-red-400 text-lg">−</span>
              </div>
              Weaknesses
            </h2>
            <Card>
              <ul className="space-y-3">
                {rodData.weaknesses.map((weakness, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                      <span className="text-red-400 text-xs">✗</span>
                    </div>
                    <p className="text-gray-300 italic">{weakness}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* Recommended For */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader title="Recommended For" subtitle="Who should use this rod?" />

        <Card className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
          <p className="text-gray-300 text-lg text-center italic">
            {rodData.recommendedFor}
          </p>
        </Card>

        {/* Placeholder Notice */}
        <div className="mt-6 bg-cyan-950/30 border border-cyan-500/20 rounded-lg p-4">
          <p className="text-cyan-300 text-sm text-center">
            ⚠️ All information is placeholder until verified through in-game testing
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* CRITICAL: Related Pages Block */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* REQUIRED: Links to parent pillar and related cluster pages */}
      <RelatedPages
        parent={parentLink}
        related={relatedLinks}
        includeHome={true}
      />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* CRITICAL: Related Guides Block */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* REQUIRED: Links to main pillar pages for SEO and user navigation */}
      <RelatedGuides />
    </div>
  );
}