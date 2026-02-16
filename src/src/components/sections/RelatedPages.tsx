/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RELATED PAGES COMPONENT — CLUSTER PAGE INTERNAL LINKING
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * This component enforces internal linking rules for cluster/detail pages.
 * It helps search engines understand site hierarchy and distributes page authority.
 * 
 * CRITICAL RULE — EVERY CLUSTER PAGE MUST INCLUDE:
 * 
 * ✅ 1. Parent pillar/category link
 *    - Example: A specific rod detail page links to "Rod Tier List" pillar
 *    - This tells search engines the hierarchical relationship
 * 
 * ✅ 2. Two related cluster page links
 *    - Example: "Golden Rod" detail links to "Silver Rod" and "Diamond Rod"
 *    - This creates a network of related content
 *    - Helps users discover similar content
 * 
 * ✅ 3. Homepage link (optional but recommended)
 *    - Ensures all pages can navigate back to home
 *    - Distributes authority from detail pages to home
 * 
 * SEO BENEFITS:
 * - Strengthens internal link structure
 * - Helps search engines crawl and understand site architecture
 * - Distributes page authority (link equity) throughout site
 * - Reduces bounce rate by providing navigation options
 * - Creates topic clusters that signal expertise to search engines
 * 
 * WHEN TO USE:
 * - Individual fish detail pages (/fish/golden-koi)
 * - Individual rod detail pages (/gear/master-rod)
 * - Individual location pages (/locations/deep-ocean)
 * - Any "cluster" page that belongs to a pillar category
 * 
 * HOW TO USE:
 * 
 * <RelatedPages
 *   parent={{ label: "Rod Tier List", href: "/tier-list" }}
 *   related={[
 *     { label: "Silver Rod", href: "/gear/silver-rod" },
 *     { label: "Diamond Rod", href: "/gear/diamond-rod" }
 *   ]}
 *   includeHome={true}
 * />
 * 
 * DEVELOPER CHECKLIST:
 * When creating a new cluster detail page:
 * [ ] Import this component
 * [ ] Add parent link to the pillar page
 * [ ] Add 2-3 related cluster links (same category)
 * [ ] Place component near bottom of page (before Related Guides)
 * [ ] Verify all links are working
 */

import { Link } from 'react-router';
import { Home, ArrowLeft, ArrowRight } from 'lucide-react';

interface RelatedLink {
  label: string;
  href: string;
}

interface RelatedPagesProps {
  parent: RelatedLink;
  related: RelatedLink[];
  includeHome?: boolean;
}

export default function RelatedPages({ parent, related, includeHome = true }: RelatedPagesProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Container with calm ocean styling */}
      <div className="bg-gradient-to-br from-slate-900 to-cyan-950/20 border border-cyan-500/20 rounded-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Related Pages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Parent Link (Back to Pillar) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Category</span>
            </div>
            <Link
              to={parent.href}
              className="block bg-cyan-900/30 hover:bg-cyan-900/50 border border-cyan-500/30 rounded-lg p-4 transition-all hover:border-cyan-400/50 group"
            >
              <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                {parent.label}
              </div>
              <div className="text-gray-400 text-sm mt-1">
                View all in category
              </div>
            </Link>
          </div>

          {/* Related Cluster Pages */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
              <ArrowRight className="w-4 h-4" />
              <span>Related Content</span>
            </div>
            <div className="space-y-2">
              {related.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="block bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700 hover:border-cyan-500/30 rounded-lg p-3 transition-all group"
                >
                  <div className="text-white text-sm group-hover:text-cyan-300 transition-colors">
                    → {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Home Link */}
          {includeHome && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                <Home className="w-4 h-4" />
                <span>Site Navigation</span>
              </div>
              <Link
                to="/"
                className="block bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700 hover:border-cyan-500/30 rounded-lg p-4 transition-all group"
              >
                <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                  Homepage
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  Return to main page
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
