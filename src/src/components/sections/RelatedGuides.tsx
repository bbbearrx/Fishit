/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RELATED GUIDES COMPONENT — PILLAR PAGE INTERNAL LINKING
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Links cluster detail pages to main pillar/guide pages. This pushes link equity
 * (page authority) from detail pages to important pillar pages and helps users
 * continue their journey through the site.
 * 
 * WHY THIS MATTERS FOR SEO:
 * - Detail pages often receive long-tail search traffic
 * - By linking to pillar pages, we pass authority from detail pages to main guides
 * - Creates topic clusters that signal expertise to search engines
 * - Reduces bounce rate by giving users clear next steps
 * - Improves crawlability (search engines discover all pillar pages)
 * 
 * STANDARD PILLARS TO LINK:
 * 1. Rod Tier List (/tier-list) - Best rods ranked
 * 2. Fishing Mechanics (/mechanics) - How fishing works
 * 3. Updates (/updates) - Latest changes
 * 4. Fish or Gear category (/fish or /items) - Main catalog
 * 
 * PLACEMENT:
 * - Should appear at bottom of cluster detail pages
 * - Place AFTER RelatedPages component
 * - Before footer
 * 
 * HOW IT WORKS:
 * - Automatically links to the 4 main pillar pages
 * - Uses calm ocean styling consistent with FishIt aesthetic
 * - Each card is clickable and shows on hover
 * - Responsive grid (1 col mobile, 2 tablet, 4 desktop)
 * 
 * DEVELOPER NOTES:
 * - Update href values if pillar page routes change
 * - Add new pillars if site expands
 * - Keep descriptions brief and value-focused
 */

import { Link } from 'react-router';
import { Trophy, Settings, TrendingUp, Fish } from 'lucide-react';

export default function RelatedGuides() {
  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Pillar Guide Links
  // ═══════════════════════════════════════════════════════════════════════════
  // These are the main pillar pages that every cluster page should link to.
  // Update hrefs if routes change or new pillars are added.

  const guides = [
    {
      title: 'Rod Tier List',
      description: 'Best rods ranked and compared',
      href: '/rod-tier-list',
      icon: <Trophy className="w-6 h-6" />,
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      title: 'Fishing Mechanics',
      description: 'How fishing works in Fish It',
      href: '/mechanics',
      icon: <Settings className="w-6 h-6" />,
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Latest Updates',
      description: 'See recent patches and changes',
      href: '/updates',
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Fish & Creatures',
      description: 'Complete fish catalog',
      href: '/fish',
      icon: <Fish className="w-6 h-6" />,
      gradient: 'from-teal-500 to-cyan-600',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          Continue Learning
        </h2>
        <p className="text-gray-400">
          Explore our main guides and resources
        </p>
      </div>

      {/* 4-column responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {guides.map((guide, index) => (
          guide.comingSoon ? (
            // Coming soon card (not clickable)
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-6 opacity-60 cursor-not-allowed"
            >
              {/* Icon with gradient background */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${guide.gradient} flex items-center justify-center mb-4 opacity-50`}>
                <div className="text-white">
                  {guide.icon}
                </div>
              </div>
              {/* Card title */}
              <h3 className="text-white font-semibold mb-2">
                {guide.title}
              </h3>
              {/* Card description */}
              <p className="text-gray-500 text-sm italic">
                Coming Soon
              </p>
            </div>
          ) : (
            // Active guide card (clickable)
            <Link
              key={index}
              to={guide.href}
              className="block bg-slate-900/30 hover:bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-500/40 rounded-lg p-6 transition-all group"
            >
              {/* Icon with gradient background */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${guide.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {guide.icon}
                </div>
              </div>
              {/* Card title */}
              <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                {guide.title}
              </h3>
              {/* Card description */}
              <p className="text-gray-400 text-sm">
                {guide.description}
              </p>
            </Link>
          )
        ))}
      </div>
    </section>
  );
}
