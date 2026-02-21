/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ITEMS & EQUIPMENT PAGE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * This page displays a complete catalog of all items in Fish It, organized
 * by category: Fishing Rods, Tools, Boosts, and Special Items.
 * 
 * WHO IT'S FOR:
 * - Players researching what items are available
 * - Players planning their progression strategy
 * - Search engines (targeting queries like "Fish It items", "best rods")
 * 
 * HOW TO EDIT SAFELY:
 * 1. SAFE: Edit category names and descriptions
 * 2. SAFE: Replace placeholder items with real item data
 * 3. SAFE: Change the number of placeholder items displayed
 * 4. ENGAGEMENT: Item cards show rarity badges and hover effects
 * 5. WARNING: Do not edit structure unless changing layout
 * 
 * WHAT THIS PAGE CONTAINS:
 * - Hero header with page title
 * - Four category overview cards
 * - Four item grids (Rods, Tools, Boosts, Special Items)
 * - Each item shows: icon, rarity badge, name, description
 * - Info notice about placeholder content
 * 
 * PLACEHOLDER SYSTEM:
 * - Currently shows 8 placeholder items per category
 * - All items marked "TBD" (To Be Determined)
 * - Replace with real item data when available
 */

import { Package, Wrench, Zap, Star, Database, Trophy, Gift, BookOpen, TrendingUp, Fish, Eye } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Items() {
  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE CONTENT — SAFE TO CHANGE
  // ═══════════════════════════════════════════════════════════════════════════

  // SEO: Main page title — H1 heading
  const pageTitle = "Fish It Items & Resources Hub";

  // SEO: Page subtitle
  const pageSubtitle = "Navigate Fish It rods, fish database, rarities, codes, updates, and guides. Your complete resource portal for all Fish It content on this site.";

  // EDITABLE: Category section header
  const categorySectionTitle = "Site Resources & Content Hub";
  const categorySectionSubtitle = "Quick access to all Fish It databases, tier lists, codes, updates, and guides";

  // EDITABLE: Individual category section titles
  // These appear as H2 headings above each item grid
  const fishingRodsTitle = "Fishing Rods";
  const toolsTitle = "Tools";
  const boostsTitle = "Boosts";
  const specialItemsTitle = "Special Items";

  // EDITABLE: Info notice at bottom of page
  const infoNoticeText = "Item names, descriptions, rarities, and statistics will be added as information becomes available. Check back regularly for updates to this catalog.";

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Item Categories
  // ═══════════════════════════════════════════════════════════════════════════
  // These four cards appear at the top as a visual navigation guide
  // 
  // TO EDIT:
  // - title: Category name
  // - description: Brief explanation of what's in this category
  // - gradient: Color scheme (visual only)
  // 
  // WARNING: Changing icons requires importing from lucide-react

  const categories = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Fishing Rods',
      description: 'Complete catalog of fishing rods',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Tools',
      description: 'Essential equipment and utilities',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Boosts',
      description: 'Power-ups and temporary enhancements',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Special Items',
      description: 'Unique and rare collectibles',
      gradient: 'from-pink-500 to-purple-600',
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Hub Cards — Links to Existing Site Content
  // ═══════════════════════════════════════════════════════════════════════════

  const hubCards = [
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Fishing Rods',
      description: 'Full rod database with Luck, Speed, Kg capacity, price, and exact requirements.',
      link: '/fishing-rods',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Rod Tier List',
      description: 'Fast comparison view of every rod, sorted by tier and stats.',
      link: '/rod-tier-list',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: <Fish className="w-6 h-6" />,
      title: 'Fish Database',
      description: 'Every fish entry: location, rarity, catch chance, and value.',
      link: '/fish-database',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Rarities Hub',
      description: 'Browse fish by rarity: Common → Secret.',
      link: '/rarities',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Secret Fish',
      description: 'All known Secret fish entries from the database (including unknown chances marked ???).',
      link: '/secret-fish',
      gradient: 'from-pink-500 to-purple-600',
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Codes',
      description: 'Active and expired Fish It codes page for rewards.',
      link: '/codes',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Updates',
      description: 'Patch notes and major update history (New Year 2026 timeline).',
      link: '/updates',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Guides',
      description: 'Beginner → End-game guides, structured for fast progression.',
      link: '/guides',
      gradient: 'from-indigo-500 to-blue-600',
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Placeholder Items (REPLACE WITH REAL DATA WHEN AVAILABLE)
  // ═══════════════════════════════════════════════════════════════════════════
  // ENGAGEMENT: Currently shows 8 placeholder items per category
  // ENGAGEMENT: Each item card has a rarity badge and hover effect
  // 
  // TO REPLACE WITH REAL ITEMS:
  // Instead of using this placeholder, create an array like:
  // 
  // const fishingRodItems = [
  //   {
  //     name: 'Basic Rod',
  //     description: 'The starter fishing rod with basic stats.',
  //     rarity: 'common',
  //   },
  //   {
  //     name: 'Advanced Rod',
  //     description: 'An upgraded rod with better catch rates.',
  //     rarity: 'rare',
  //   },
  //   // ... more items
  // ];
  // 
  // AVAILABLE RARITY VALUES:
  // - 'default' (gray)
  // - 'common' (green)
  // - 'rare' (blue)
  // - 'epic' (purple)
  // - 'legendary' (orange/gold)
  // 
  // TO CHANGE NUMBER OF PLACEHOLDERS:
  // Change the "8" in Array(8) to any number

  const placeholderItems = Array(8).fill(null).map((_, i) => ({
    name: 'Item Name - TBD',
    description: 'Description - TBD',
    rarity: 'default' as const,
  }));

  // ═══════════════════════════════════════════════════════════════════════════
  // STRUCTURE: Background Image
  // ═══════════════════════════════════════════════════════════════════════════

  const headerBackgroundImage = "https://images.unsplash.com/photo-1663056336325-0df5a327b2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwcm9kJTIwb2NlYW58ZW58MXx8fHwxNzcwNjgzMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080";

  // ═══════════════════════════════════════════════════════════════════════════
  // STRUCTURE: PAGE LAYOUT (DO NOT EDIT UNLESS CHANGING DESIGN)
  // ═══════════════════════════════════════════════════════════════════════════

  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* STRUCTURE: Page Header */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-950 to-blue-900 py-16">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src={headerBackgroundImage}
            alt="Fishing equipment"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {pageTitle}
            </h1>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              {pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* STRUCTURE: Main Content */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* ENGAGEMENT: Category Overview Cards */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <SectionHeader 
          title={categorySectionTitle}
          subtitle={categorySectionSubtitle}
        />

        {/* STRUCTURE: 4-column grid (responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {hubCards.map((card, index) => (
            <Button key={index} to={card.link} variant="ghost" className="p-0 h-auto text-left">
              <Card hover className="text-center w-full">
                {/* Category icon with gradient background */}
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${card.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <div className="text-white">
                    {card.icon}
                  </div>
                </div>
                {/* Category title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {card.title}
                </h3>
                {/* Category description */}
                <p className="text-gray-400 text-sm">
                  {card.description}
                </p>
              </Card>
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
}