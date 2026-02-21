import { Link } from 'react-router';
import { Fish } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t-2 border-cyan-500/20 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-2 rounded-lg shadow-lg shadow-cyan-500/50">
                <Fish className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Fish<span className="text-cyan-400">It.gg</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Your ultimate guide to the Roblox game Fish It. Learn everything about gameplay, items, fish, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/overview" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Game Overview
                </Link>
              </li>
              <li>
                <Link to="/how-to-play" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  How to Play
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Guides & Tips
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/items" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Items & Equipment
                </Link>
              </li>
              <li>
                <Link to="/fish-database" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Fish & Creatures
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Locations & Islands
                </Link>
              </li>
              <li>
                <Link to="/updates" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Updates & Patch Notes
                </Link>
              </li>
              <li>
                <Link to="/our-network" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Our Network
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-cyan-500/10">
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