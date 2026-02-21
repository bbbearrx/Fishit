/**
 * ═══════════════════════════════════════════════════════════════════════════
 * BREADCRUMBS NAVIGATION COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Provides hierarchical navigation showing the user's current location within
 * the site structure. Automatically generates breadcrumb trails from the URL.
 * 
 * DEVELOPER NOTES:
 * - This component uses React Router's useLocation to read the current path
 * - Breadcrumbs are automatically hidden on the homepage (path === "/")
 * - Each URL segment is converted to a readable label via pathToLabel mapping
 * - Progressive links are built (e.g., /fish/golden-tuna creates links for
 *   both /fish and /fish/golden-tuna)
 * - The last breadcrumb (current page) is not clickable
 * - Mobile responsive with proper text wrapping and spacing
 * 
 * HOW TO ADD NEW ROUTE LABELS:
 * When you add a new page route, update the pathToLabel object below:
 * 'your-slug': 'Display Name'
 * 
 * STYLING PHILOSOPHY:
 * - Subtle and unobtrusive (complements the ocean theme)
 * - Uses cyan accents consistent with the site's fishing aesthetic
 * - Text is small and secondary to main content
 * - Proper spacing prevents crowding
 */

import { useLocation, Link } from 'react-router';
import { ChevronRight, Home } from 'lucide-react';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * EDITABLE: URL Slug to Display Name Mapping
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Add new routes here as you expand the site.
 * The key should match the URL slug exactly.
 * The value is what displays in the breadcrumb.
 */
const pathToLabel: Record<string, string> = {
    'overview': 'Game Overview',
    'how-to-play': 'How to Play',
    'items': 'Items & Equipment',
    'fish': 'Fish & Creatures',
    'rod-tier-list': 'Rod Tier List',
    'updates': 'Updates & Patch Notes',
    'guides': 'Guides & Tips',
};

/**
 * Converts a URL slug to a human-readable label
 * Examples:
 * - "how-to-play" -> "How to Play"
 * - "fish" -> "Fish & Creatures"
 * - "golden-tuna" -> "Golden Tuna" (if not in mapping)
 */
function formatPathSegment(segment: string): string {
  // Check if we have a custom label for this slug
  if (pathToLabel[segment]) {
    return pathToLabel[segment];
  }
  
  // Otherwise, convert kebab-case to Title Case
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function Breadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname;

  // ENGAGEMENT: Hide breadcrumbs on homepage
  // Homepage doesn't need breadcrumbs since it's the root
  if (pathname === '/') {
    return null;
  }

  // STRUCTURE: Build breadcrumb trail from URL path
  // Split path into segments, removing empty strings
  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  
  // Build progressive path array for links
  // Example: /fish/golden-tuna becomes ['/fish', '/fish/golden-tuna']
  const breadcrumbPaths: Array<{ path: string; label: string }> = [];
  
  let accumulatedPath = '';
  pathSegments.forEach(segment => {
    accumulatedPath += `/${segment}`;
    breadcrumbPaths.push({
      path: accumulatedPath,
      label: formatPathSegment(segment),
    });
  });

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="py-4"
    >
      {/* STRUCTURE: Breadcrumb list with proper ARIA semantics for accessibility */}
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        
        {/* Home breadcrumb - always first */}
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </li>

        {/* Render each path segment as a breadcrumb */}
        {breadcrumbPaths.map((crumb, index) => {
          const isLast = index === breadcrumbPaths.length - 1;
          
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {/* Separator chevron */}
              <ChevronRight className="w-4 h-4 text-gray-500" />
              
              {/* If it's the last item, render as text (current page) */}
              {isLast ? (
                <span className="text-gray-300 font-medium" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                /* Otherwise, render as a clickable link */
                <Link
                  to={crumb.path}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}