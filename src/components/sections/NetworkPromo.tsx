/**
 * ═══════════════════════════════════════════════════════════════════════════
 * NETWORK PROMO COMPONENT — EMPYREUS NETWORK BRANDING
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Promotes the Empyreus network of Roblox game guide sites. This component
 * builds trust, cross-promotes other properties, and establishes brand presence.
 * 
 * PLACEMENT:
 * - MUST be placed after FAQ section
 * - MUST be before footer
 * - This ensures visibility without being intrusive
 * 
 * TONE & MESSAGING:
 * - Trust-building, not salesy
 * - Focus on value and quality
 * - Emphasize independence and community focus
 * - Clear disclaimer about Roblox affiliation
 * 
 * DEVELOPER NOTES:
 * - This component uses a standardized design across all Empyreus sites
 * - Keep styling consistent with FishIt's calm ocean aesthetic
 * - The CTA should link to /our-network page (must exist)
 * - Do not make this section aggressive or flashy
 * 
 * NETWORK STRATEGY:
 * - Cross-promote high-quality game guide sites
 * - Build brand recognition across Roblox community
 * - Drive traffic between network properties
 * - Establish authority and trustworthiness
 */

import { Link } from 'react-router';
import { Network, ExternalLink, Shield } from 'lucide-react';
import Card from '../Card';

export default function NetworkPromo() {
  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Network Promo Content
  // ═══════════════════════════════════════════════════════════════════════════

  const networkName = "Empyreus Network";
  const networkDescription = "Part of a growing network of independent Roblox game guides built by players, for players. We create high-quality, ad-supported resources for popular Roblox games.";
  const ctaText = "Explore Our Network";
  const ctaLink = "/our-network";

  // Trust indicators
  const trustPoints = [
    "Independently operated",
    "Community-focused guides",
    "No affiliation with Roblox Corporation",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Card className="bg-gradient-to-br from-slate-900 to-cyan-950/30 border-2 border-cyan-500/20">
        <div className="text-center">
          {/* Network icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <Network className="w-8 h-8 text-cyan-400" />
          </div>

          {/* Network name */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {networkName}
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            {networkDescription}
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-400">{point}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to={ctaLink}
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            {ctaText}
            <ExternalLink className="w-4 h-4" />
          </Link>

          {/* Disclaimer */}
          <div className="mt-8 pt-6 border-t border-cyan-500/10">
            <p className="text-gray-500 text-xs">
              Not affiliated with or endorsed by Roblox Corporation. All game names, logos, and content are property of their respective owners.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}