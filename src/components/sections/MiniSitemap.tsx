/**
 * ═══════════════════════════════════════════════════════════════════════════
 * MINI SITEMAP COMPONENT — INTERNAL RESOURCE DIRECTORY
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Provides a structured overview of the site's main pages and content areas.
 * This improves internal linking for SEO and helps users discover content.
 * 
 * SEO BENEFITS:
 * - Strengthens internal link structure (helps search engines understand site hierarchy)
 * - Distributes page authority across important pages
 * - Provides keyword-rich anchor text for internal links
 * - Helps search engine crawlers discover all pages
 * 
 * DEVELOPER NOTES:
 * - Update links as new pages are added to the site
 * - Use "#" with TODO comment for routes that don't exist yet
 * - Keep link text descriptive (good for SEO and users)
 * - This component is typically placed after the main content but before footer
 * 
 * WHERE TO USE:
 * - Homepage (after FAQ, before Network Promo)
 * - Can also be used on long-form guide pages as internal linking
 * 
 * HOW TO UPDATE:
 * When you add a new page:
 * 1. Decide which category it belongs to (Getting Started, Rods & Fish, Updates & Progression)
 * 2. Add a new entry with label and href
 * 3. Ensure href matches the route in /routes.ts
 */

import { Link } from 'react-router';
import { FileText, Trophy, TrendingUp, Calculator } from 'lucide-react';

export default function MiniSitemap() {
  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Sitemap Categories and Links
  // ═══════════════════════════════════════════════════════════════════════════
  // Update these arrays when you add new pages to the site.
  // Each link should point to an existing route (or use "#" with TODO if planned).

  const sitemapCategories = [
    {
      title: 'Getting Started',
      icon: <FileText className="w-5 h-5" />,
      links: [
        { label: 'Game Overview', href: '/overview' },
        { label: 'How to Play', href: '/how-to-play' },
        { label: 'Rod Tier List', href: '/rod-tier-list' },
        { label: 'RNG Calculator', href: '/rng-calculator' },
        { label: 'Fishing Mechanics', href: '/mechanics' },
        { label: 'FAQ & Help', href: '/faq' },
      ],
    },
    {
      title: 'Fish & Rods Database',
      icon: <Trophy className="w-5 h-5" />,
      links: [
        { label: 'Full Fish Database', href: '/fish-database' },
        { label: 'All Locations & Islands', href: '/locations' },
        { label: 'Browse by Rarity', href: '/rarities' },
        { label: 'Secret Fish', href: '/secret-fish' },
        { label: 'Fishing Rods Guide', href: '/fishing-rods' },
      ],
    },
    {
      title: 'Updates & Progression',
      icon: <TrendingUp className="w-5 h-5" />,
      links: [
        { label: 'Latest Updates', href: '/updates' },
        { label: 'Patch Notes History', href: '/updates' },
        { label: 'Guides & Tips', href: '/guides' },
        { label: 'Progression System', href: '/overview' },
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">
          Site Resources
        </h2>
        <p className="text-gray-400">
          Quick access to all guides, tools, and information
        </p>
      </div>

      {/* Three-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sitemapCategories.map((category, index) => (
          <div key={index} className="space-y-4">
            {/* Category header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <div className="text-cyan-400">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">
                {category.title}
              </h3>
            </div>

            {/* Links list */}
            <ul className="space-y-2">
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  {link.href === '#' ? (
                    // Placeholder link (not yet implemented)
                    <span className="text-gray-500 hover:text-gray-400 transition-colors text-sm block py-1 cursor-not-allowed italic">
                      {link.label} (Coming Soon)
                    </span>
                  ) : (
                    // Active link
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm block py-1 hover:translate-x-1 transform duration-200"
                    >
                      → {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-12 text-center">
        <p className="text-gray-500 text-sm">
          Looking for something specific?{' '}
          <Link to="/faq" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Check our FAQ
          </Link>
        </p>
      </div>
    </section>
  );
}