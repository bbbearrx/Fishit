import { Link } from 'react-router';
import { Fish, FileText, Trophy, TrendingUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Site Resources Categories (formerly MiniSitemap)
  const sitemapCategories = [
    {
      title: 'Getting Started',
      icon: <FileText className="w-5 h-5" />,
      links: [
        { label: 'Game Overview', href: '/overview' },
        { label: 'How to Play', href: '/how-to-play' },
        { label: 'Rod Tier List', href: '/rod-tier-list' },
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
        { label: 'RNG Calculator', href: '/rng-calculator' },
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
        { label: 'Active Codes', href: '/codes' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 border-t-2 border-cyan-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Brand Section at Top */}
        <div className="mb-12 pb-8 border-b border-cyan-500/10">
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-2 rounded-lg shadow-lg shadow-cyan-500/50">
              <Fish className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">
              Fish<span className="text-cyan-400">It.gg</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm text-center md:text-left max-w-2xl">
            Your ultimate guide to the Roblox game Fish It. Learn everything about gameplay, items, fish, and more. 
            <span className="hidden sm:inline"> Browse our comprehensive database, compare fishing rods, discover rare catches, and master the game with expert guides.</span>
          </p>
        </div>

        {/* Main Navigation Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {sitemapCategories.map((category, index) => (
            <div key={index}>
              {/* Category header with icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <div className="text-cyan-400">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Links list */}
              <ul className="space-y-2.5">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href === '#' ? (
                      // Placeholder link (not yet implemented)
                      <span className="text-gray-500 hover:text-gray-400 transition-colors text-sm block cursor-not-allowed italic">
                        {link.label} (Coming Soon)
                      </span>
                    ) : (
                      // Active link
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm block hover:translate-x-1 transform duration-200"
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

        {/* Additional Quick Link */}
        <div className="text-center mb-12 pb-8 border-b border-cyan-500/10">
          <p className="text-gray-500 text-sm">
            Looking for something specific?{' '}
            <Link to="/faq" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
              Check our FAQ
            </Link>
            {' '}or{' '}
            <Link to="/our-network" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
              Explore Our Network
            </Link>
          </p>
        </div>

        {/* Disclaimer and Copyright */}
        <div>
          <div className="bg-cyan-950/30 border border-cyan-500/20 rounded-lg p-4 mb-6">
            <p className="text-gray-400 text-sm text-center">
              <strong className="text-cyan-400">Disclaimer:</strong> FishIt.gg is a fan-made informational website and is not affiliated with Roblox Corporation or the developers of Fish It. All game content and trademarks are property of their respective owners.
            </p>
          </div>
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} FishIt.gg. All rights reserved. | <a href="https://discord.gg/fKeYZNpD8m" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Discord Community</a>
          </p>
        </div>
      </div>
    </footer>
  );
}