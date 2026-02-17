/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FISH DETAIL PAGE — CLUSTER PAGE TEMPLATE
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
 *      - parent: Link back to category/pillar (e.g., "Fish & Creatures" or "Rod Tier List")
 *      - related: 2-3 links to similar detail pages
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
 * Individual fish detail pages showing stats, locations, and catch information.
 * This is a CLUSTER PAGE that belongs to the "Fish & Creatures" pillar.
 * 
 * ROUTING:
 * This page would be accessed via /fish/:slug (e.g., /fish/golden-koi)
 * Requires dynamic routing setup in /routes.ts
 * 
 * TODO FOR IMPLEMENTATION:
 * 1. Add dynamic route in /routes.ts: { path: "fish/:slug", Component: FishDetail }
 * 2. Use useParams() to get fish slug from URL
 * 3. Fetch or map fish data based on slug
 * 4. Replace placeholder content with real data
 * 5. Update related fish links based on actual fish in database
 * 
 * CONTENT POLICY:
 * - DO NOT invent fish stats, spawn rates, or locations
 * - Use clear placeholders until data is verified
 * - Mark all unconfirmed info with [TBD] or [PLACEHOLDER]
 */

import { useParams } from 'react-router';
import { Fish, MapPin, Trophy, Clock, Coins } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import SectionHeader from '../components/SectionHeader';
import RelatedPages from '../components/sections/RelatedPages';
import RelatedGuides from '../components/sections/RelatedGuides';

export default function FishDetail() {
  // Get fish slug from URL (e.g., /fish/golden-koi)
  const { slug } = useParams();

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Fish Data (PLACEHOLDER)
  // ═══════════════════════════════════════════════════════════════════════════
  // TODO: Replace with real fish data from API or data file
  // This is placeholder content for demonstration

  const fishData = {
    name: '[Fish Name Placeholder]',
    rarity: 'legendary', // common, rare, epic, legendary
    description: '[PLACEHOLDER] This fish is a rare species found in specific locations. Detailed information about behavior, appearance, and catch tips will be added once verified.',
    stats: {
      sellPrice: 'TBD Coins',
      catchRate: 'TBD%',
      bestTime: 'TBD (Day/Night)',
      location: 'TBD Location',
    },
    tips: [
      '[TIP 1] Placeholder tip about when to fish for this species',
      '[TIP 2] Placeholder tip about best rod or bait to use',
      '[TIP 3] Placeholder tip about location or conditions',
    ],
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // CRITICAL: Internal Linking Configuration
  // ═══════════════════════════════════════════════════════════════════════════
  // RULE: Every cluster page must link to parent and 2+ related pages

  // Parent category/pillar page
  const parentLink = {
    label: 'Fish & Creatures Catalog',
    href: '/fish',
  };

  // Related cluster pages (other fish detail pages)
  const relatedLinks = [
    { label: '[Related Fish 1]', href: '/fish/placeholder-fish-1' },
    { label: '[Related Fish 2]', href: '/fish/placeholder-fish-2' },
    { label: '[Related Fish 3]', href: '/fish/placeholder-fish-3' },
  ];

  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* Hero Section */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-950 to-blue-900 py-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Rarity Badge */}
            <div className="mb-4">
              <Badge variant={fishData.rarity as any} size="lg">
                {fishData.rarity.toUpperCase()} FISH
              </Badge>
            </div>

            {/* Fish Name - H1 */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              {fishData.name}
            </h1>

            {/* Fish Icon */}
            <Fish className="w-16 h-16 text-cyan-400 mx-auto mb-6" />

            {/* Description */}
            <p className="text-lg text-cyan-100 max-w-3xl mx-auto italic">
              {fishData.description}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* Fish Stats */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader title="Fish Statistics" subtitle="Key information about this species" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Sell Price */}
          <Card className="text-center">
            <Coins className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-gray-400 text-sm mb-1">Sell Price</h3>
            <p className="text-white text-xl font-bold">{fishData.stats.sellPrice}</p>
          </Card>

          {/* Catch Rate */}
          <Card className="text-center">
            <Trophy className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-gray-400 text-sm mb-1">Catch Rate</h3>
            <p className="text-white text-xl font-bold">{fishData.stats.catchRate}</p>
          </Card>

          {/* Best Time */}
          <Card className="text-center">
            <Clock className="w-12 h-12 text-purple-400 mx-auto mb-3" />
            <h3 className="text-gray-400 text-sm mb-1">Best Time</h3>
            <p className="text-white text-xl font-bold">{fishData.stats.bestTime}</p>
          </Card>

          {/* Location */}
          <Card className="text-center">
            <MapPin className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <h3 className="text-gray-400 text-sm mb-1">Location</h3>
            <p className="text-white text-xl font-bold">{fishData.stats.location}</p>
          </Card>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* Catch Tips */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader title="Catch Tips" subtitle="How to successfully catch this fish" />

        <Card>
          <ul className="space-y-4">
            {fishData.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mt-0.5">
                  <span className="text-cyan-400 text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-300 italic">{tip}</p>
              </li>
            ))}
          </ul>
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
      {/* REQUIRED: Links to parent category and related cluster pages */}
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
