import { Link, useLocation } from 'react-router';
import { Fish, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/fish-database', label: 'Fish Database' },
    { path: '/fishing-rods', label: 'Fishing Rods' },
    { path: '/rod-tier-list', label: 'Rod Tier List' },
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
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all ${
                  isActive(link.path)
                    ? 'bg-cyan-500/20 text-cyan-300 shadow-inner'
                    : 'text-gray-300 hover:text-white hover:bg-cyan-500/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-1">
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
          </nav>
        )}
      </div>
    </header>
  );
}