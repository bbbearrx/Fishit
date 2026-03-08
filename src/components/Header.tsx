import { useLocation, Link } from 'react-router';
import { Fish, Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/fish-database', label: 'Fish Database' },
    { path: '/fishing-rods', label: 'Fishing Rods' },
    { path: '/rod-tier-list', label: 'Rod Tier List' },
    { path: '/rng-calculator', label: 'RNG Calculator' },
    { path: '/codes', label: 'Codes' },
    { path: '/locations', label: 'Locations' },
    { path: '/mechanics', label: 'Mechanics' },
    { path: '/updates', label: 'Updates' },
    { path: '/guides', label: 'Guides' },
    { path: '/faq', label: 'FAQ' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-cyan-950/95 backdrop-blur-sm border-b-2 border-cyan-500/30 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-2 rounded-lg shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/70 transition-all">
              <Fish className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Fish<span className="text-cyan-400">It.gg</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg transition-all text-sm ${
                  isActive(link.path)
                    ? 'bg-cyan-500/20 text-cyan-300 shadow-inner'
                    : 'text-gray-300 hover:text-white hover:bg-cyan-500/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Discord Button - Desktop */}
            <a
              href="https://discord.gg/CWWAsCbSQT"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discord</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-1 border-t border-cyan-500/20 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all ${
                  isActive(link.path)
                    ? 'bg-cyan-500/20 text-cyan-300'
                    : 'text-gray-300 hover:text-white hover:bg-cyan-500/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Discord Button - Mobile */}
            <a
              href="https://discord.gg/CWWAsCbSQT"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 mt-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Join Discord</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
