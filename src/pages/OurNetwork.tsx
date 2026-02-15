/**
 * ═══════════════════════════════════════════════════════════════════════════
 * OUR NETWORK PAGE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * This page showcases other Roblox-related websites in your network.
 * It serves as cross-promotion and helps build a community ecosystem.
 * 
 * WHO IT'S FOR:
 * - Visitors who might be interested in your other projects
 * - Building brand awareness across multiple Roblox games
 * - Cross-traffic generation between network sites
 * 
 * HOW TO EDIT SAFELY:
 * 1. SAFE: Edit network site information in the networkSites array
 * 2. SAFE: Add or remove network sites (follow existing format)
 * 3. SAFE: Change all text content in EDITABLE section
 * 4. NETWORK: This page is identical across all network sites (shared branding)
 * 5. WARNING: Do not edit structure unless changing layout
 * 
 * WHAT THIS PAGE CONTAINS:
 * - Page header with network description
 * - Grid of network site cards (6 sites shown as example)
 * - Each card links to external site (opens in new tab)
 * - Trust disclaimer at bottom
 * 
 * NETWORK STRATEGY:
 * - Keep descriptions brief and value-focused
 * - Use consistent card design across all network sites
 * - Only include active, high-quality projects
 * - Update URLs and descriptions when sites launch
 */

import { ExternalLink } from 'lucide-react';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';

export default function OurNetwork() {
  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE CONTENT — SAFE TO CHANGE
  // ═══════════════════════════════════════════════════════════════════════════
  // All text on the Our Network page is defined here.
  // Edit these values to update what visitors see.

  // EDITABLE: Page header section
  const pageTitle = "Our Network";
  const pageSubtitle = "Empyreus Network is a collection of Roblox-focused websites built to help players find clear guides, structured databases, and updates faster. Each site has its own focus, but they share a consistent navigation standard and cross-linking to make it easier to explore related games and resources.";
  
  // EDITABLE: Introduction paragraph
  // Explains what the network is and how sites relate to each other
  const introText = "Instead of isolated sites, Empyreus Network is designed as a connected set of resources. That means consistent structure, clearer internal linking, and faster discovery of related guides across games — without mixing content between sites.";

  // EDITABLE: Trust disclaimer at bottom of page
  // Sets proper expectations about site independence
  const disclaimerText = "These are independent community sites and are not affiliated with Roblox or any game developers. Content may change as games update; check each site's Updates page where available.";

  // ═══════════════════════════════════════════════════════════════════════════
  // NETWORK: Network Sites Configuration
  // ═══════════════════════════════════════════════════════════════════════════
  // NETWORK: This array defines all sites in your network
  // NETWORK: Each site card is clickable and opens in a new browser tab
  // NETWORK: Keep this list consistent across all network sites for branding
  // 
  // TO EDIT:
  // - name: The site's display name
  // - url: The full URL (must start with https://)
  // - description: One-line explanation of what the site offers (keep it brief!)
  // - logo: Emoji or icon representing the site (for visual identification)
  // 
  // TO ADD A NEW SITE:
  // Copy this pattern and add to the array:
  // {
  //   name: 'YourSite.gg',
  //   url: 'https://yoursite.gg',
  //   description: 'Brief one-line description of what this site provides for the Roblox community.',
  //   logo: '🎮', // Choose any emoji
  // },
  // 
  // TO REMOVE A SITE:
  // Delete the entire object from the array
  // 
  // TIPS:
  // - Use descriptive names (usually the domain name)
  // - Descriptions should focus on user value, not features
  // - Choose emoji logos that match the site's theme
  // - Keep the grid balanced (multiples of 3 look best on desktop)
  // 
  // WARNING: Ensure URLs are correct before adding
  // WARNING: Test all links after making changes

  const networkSites = [
    {
      name: 'bloxy.gg',
      url: 'https://bloxy.gg',
      description: 'A Roblox-focused marketplace-style store site where users can browse listings and purchase digital items. Built for clear navigation, fast checkout, and high trust design.',
      logo: '🛒',
      type: 'Marketplace',
    },
    {
      name: 'fishit.gg',
      url: 'https://fishit.gg',
      description: 'A database-first Fish It wiki with searchable tables, rarity/location navigation, and structured guides. Built to help players plan progression using verified reference pages.',
      logo: '🎣',
      type: 'Wiki/Database',
    },
    {
      name: 'bloxfruits.gg',
      url: 'https://bloxfruits.gg',
      description: 'An informational site for Blox Fruits with structured pages for guides, updates, and reference content. Designed to be easy to browse and internally linked.',
      logo: '🍇',
      type: 'Info Site',
    },
    {
      name: 'slapduels.com',
      url: 'https://slapduels.com',
      description: 'An informational site for Slap Duels with SEO-structured pages for guides, updates, and game reference topics. Built to help players find answers fast.',
      logo: '👋',
      type: 'Info Site',
    },
    {
      name: 'timebombduels.com',
      url: 'https://timebombduels.com',
      description: 'An informational site for TimeBomb Duels with clean navigation and topic pages for players who want quick explanations and guide-style content.',
      logo: '💣',
      type: 'Info Site',
    },
    {
      name: 'stealfrombrainrots.com',
      url: 'https://stealfrombrainrots.com',
      description: 'An informational guide-style site for Steal From Brainrots with structured pages and cross-links that make it easier to explore related content in the network.',
      logo: '🧠',
      type: 'Info Site',
    },
    {
      name: 'gardentd.com',
      url: 'https://gardentd.com',
      description: 'An informational site for Garden Tower Defense with SEO-structured pages designed for guides, strategies, and reference topics.',
      logo: '🌻',
      type: 'Info Site',
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // STRUCTURE: PAGE LAYOUT (DO NOT EDIT UNLESS CHANGING DESIGN)
  // ═══════════════════════════════════════════════════════════════════════════
  // Everything below controls visual layout and structure.

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* STRUCTURE: Page Header */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="mb-12">
        <SectionHeader 
          title={pageTitle}
          subtitle={pageSubtitle}
        />
        
        {/* Introduction text */}
        <div className="max-w-3xl mx-auto mt-6">
          <p className="text-gray-300 text-center">
            {introText}
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* What You'll Find in the Network */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">What You'll Find in the Network</h2>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-1">•</span>
            <span>Game guides and beginner walkthroughs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-1">•</span>
            <span>Searchable databases and reference tables (where available)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-1">•</span>
            <span>Patch notes and update tracking</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-1">•</span>
            <span>Codes pages and quick-reference resources</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-1">•</span>
            <span>Safe links between related sites in the network</span>
          </li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* NETWORK: Network Sites Grid */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* NETWORK: Grid of clickable cards, each linking to a network site */}
      {/* NETWORK: All links open in new tab (target="_blank") */}
      {/* STRUCTURE: 1 column mobile, 2 tablet, 3 desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {networkSites.map((site, index) => (
          <a
            key={index}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            {/* ENGAGEMENT: Entire card is clickable and shows hover effects */}
            <Card 
              hover 
              className="h-full transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  
                  {/* Site logo (emoji) */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-2xl">
                    {site.logo}
                  </div>

                  {/* Site name and type */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {/* Site name - changes color on hover */}
                      <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                        {site.name}
                      </h3>
                      {/* External link icon */}
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                    </div>
                    {/* Type badge */}
                    <span className="inline-block px-2 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded">
                      {site.type}
                    </span>
                  </div>
                </div>
                
                {/* Site description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {site.description}
                </p>
                
                {/* Visit site button */}
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1 text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Visit site
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* NETWORK: Trust Disclaimer */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* NETWORK: Important notice about site independence */}
      {/* Sets proper expectations for users */}
      <div className="text-center">
        <p className="text-gray-500 text-sm">
          {disclaimerText}
        </p>
      </div>
    </div>
  );
}