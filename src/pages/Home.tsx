/**
 * ═══════════════════════════════════════════════════════════════════════════
 * HOME PAGE — EMPYREUS MASTER SEO STRUCTURE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * This is the main landing page for FishIt.gg. It introduces visitors to the
 * Fish It Roblox game and directs them to different sections of the website.
 * 
 * WHO IT'S FOR:
 * - New visitors discovering the site
 * - Returning players looking for quick navigation
 * - Search engines (SEO-optimized content)
 * 
 * HOW TO EDIT SAFELY:
 * 1. SAFE: Edit any text in the "EDITABLE CONTENT" section below
 * 2. SAFE: Change button links and labels
 * 3. CAUTION: Changing card gradients affects visual appearance only
 * 4. WARNING: Do not edit the JSX structure unless changing layout
 * 
 * SECTION ORDER (Empyreus Master Template):
 * 1. Hero (with "What is Fish It?" intro integrated)
 * 2. Quick Access Grid (6 feature cards)
 * 3. Latest Update Preview
 * 4. Featured Rods & Rare Catches
 * 5. Beginner Guide Preview
 * 6. FAQ Accordion
 * 7. Network Promo
 * 8. Mini Sitemap
 * 9. Footer (global in Root)
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * SEO META PLACEHOLDERS (Update when deploying to real domain)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Meta Title Example:
 * "Fish It Guide - Complete Roblox Game Wiki & Tips | Your Site Name"
 * 
 * Meta Description Example:
 * "Your complete guide to Fish It on Roblox. Find fishing tips, rod tier lists,
 * rare fish locations, updates, and beginner guides for the popular fishing game."
 * 
 * Schema: FAQPage (JSON-LD injected for FAQ section)
 */

import { ArrowRight, Fish, BookOpen, Package, Waves, TrendingUp, Lightbulb, Calendar, Sparkles, ChevronDown, ChevronUp, HelpCircle, Anchor, Calculator } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import Button from '../components/Button';
import Card from '../components/Card';
import Badge from '../components/Badge';
import SectionHeader from '../components/SectionHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import MiniSitemap from '../components/sections/MiniSitemap';
import NetworkPromo from '../components/sections/NetworkPromo';
import JsonLd from '../components/seo/JsonLd';
import PremiumFishLayer from '../components/hero/PremiumFishLayer';

export default function Home() {
  // ═══════════════════════════════════════════════════════════════════════════
  // ENGAGEMENT: FAQ Accordion State
  // ═══════════════════════════════════════════════════════════════════════════
  
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE CONTENT — SAFE TO CHANGE
  // ═══════════════════════════════════════════════════════════════════════════
  // This section contains all user-visible text on the homepage.
  // Editing these values will update what visitors see.
  // Changes here do NOT affect layout or functionality.

  // SEO: Main page title — appears as the largest heading on the page
  // SEO: This is the H1 tag, critical for search engine rankings
  // SEO: Keep it descriptive and include key search terms
  const pageTitle = "Fish It – Roblox Game Guide & Information Hub";

  // SEO: Page subtitle — appears below the main title
  // This provides context and improves user understanding
  const pageSubtitle = "Learn everything about the Roblox game Fish It — gameplay details, updates, and guides.";

  // EDITABLE: Badge text above the main title
  // This small label identifies the site's purpose at a glance
  const badgeText = "Roblox Game Guide";

  // EDITABLE: "What is Fish It?" section (integrated into hero)
  // This introduces the game to new visitors
  const introSectionTitle = "What is Fish It?";
  const introSectionContent = "Fish It is a Roblox game centered around fishing-themed gameplay. This website serves as your comprehensive information hub for all things Fish It, providing detailed guides, item catalogs, and the latest updates.";

  // EDITABLE: Main section header
  // Appears above the six feature cards
  const exploreSectionTitle = "Explore Fish It";
  const exploreSectionSubtitle = "Everything you need to know about the game";

  // EDITABLE: Hero button labels
  // These buttons appear in the main hero section
  const heroButton1Text = "Game Overview";
  const heroButton2Text = "How to Play";
  const heroButton3Text = "Guides & Tips";

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Latest Update Preview Section
  // ═══════════════════════════════════════════════════════════════════════════
  
  const updateSectionTitle = "Lava Basin Expansion Update";
  const updateDate = "Recent Update"; // Update date when official release date is confirmed
  const updateSummary = "Major expansion introducing new area, charm crafting system, fishable resources, new quests, QoL improvements, and anti-cheat upgrades.";
  const updateChanges = [
    "🌋 New Area: Discover the newly expanded Lava Basin",
    "🔨 Charm Crafting: Craft various charms using resources found",
    "💎 New Crafting Resources: Fish up and extract resources from new crystals",
    "📜 New Quests: Unlock new areas and tease upcoming content",
    "🛠️ QoL Improvements: Bug fixes, tutorial improvements, and new anti-cheat measures",
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Featured Rods & Rare Catches Section
  // ═══════════════════════════════════════════════════════════════════════════
  
  const featuredSectionTitle = "Featured Rods & Rare Catches (Data-Verified 2026 Picks)";
  const featuredSectionSubtitle = "Hand-picked highlights pulled directly from our Fish Database and Rod Database (no guesses).";
  
  // Featured Rods (Left Column)
  const featuredRods = [
    {
      name: "Carbon Rod",
      title: "Early Game Speed Specialist",
      description: "A Common-tier rod with 30% Luck, 4% Speed, and 20 Kg capacity. Costs 750 coins at the Rod Store. Despite lower luck, the Carbon Rod's speed advantage maximizes catches per minute, making it highly efficient for early-game XP grinding and progression to Level 50.",
      bestFor: "Fast catches and early XP grinding",
      link: "/fishing-rods/carbon-rod",
      linkText: "View Rod Stats"
    },
    {
      name: "Lava Rod",
      title: "Free Volcanic Upgrade",
      description: "An Uncommon-tier rod with 30% Luck, 2% Speed, and 100 Kg capacity. Obtained free at Kohana Volcano by talking to the fisherman inside. This rod enables players to fish in volcanic zones without purchasing costly upgrades.",
      bestFor: "Kohana Volcano access and quest progression",
      link: "/fishing-rods/lava-rod",
      linkText: "View Rod Stats"
    },
    {
      name: "Ares Rod",
      title: "Mythic-Tier Powerhouse",
      description: "A Mythic-tier rod with 455% Luck, 56% Speed, and 400K Kg capacity. Costs 3M coins and is found in the Tropical Grove area. This end-game rod offers strong luck and speed for high-value catches and advanced farming strategies.",
      bestFor: "High-tier farming and late-game progression",
      link: "/fishing-rods/ares-rod",
      linkText: "View Rod Stats"
    },
    {
      name: "Ghostfinn Rod",
      title: "Quest-Unlocked Elite Rod",
      description: "A Mythic-tier rod with 610% Luck, 118% Speed, and 600K Kg capacity. Unlocked through a multi-stage quest in the Deep Sea. Requires catching 300 Rare/Epic fish, 3 Mythics, 1 Secret, and earning 1M coins. One of the strongest rods for rare fish hunting.",
      bestFor: "High luck builds and rare fish targeting",
      link: "/fishing-rods/ghostfinn-rod",
      linkText: "View Rod Stats"
    }
  ];

  // Rare Catches (Right Column)
  const rareCatches = [
    {
      name: "Kraken",
      location: "Lost Isle",
      rarity: "Mythic",
      description: "A Mythic-rarity fish found at Lost Isle with a 1 in 100,000 catch chance. Sells for approximately 100,000 coins (Jackpot value). One of the most valuable Mythic catches in the game.",
      locationLabel: "Lost Isle",
      link: "/fish/kraken",
      linkText: "See Full Entry"
    },
    {
      name: "Magma Shark",
      location: "Kohana Volcano",
      rarity: "Mythic",
      description: "A Mythic-rarity fish found at Kohana Volcano with a 1 in 200,000 catch chance. Sells for approximately 150,000 coins (Jackpot value). The rarest Mythic fish in the volcanic zone.",
      locationLabel: "Kohana Volcano",
      link: "/fish/magma-shark",
      linkText: "See Full Entry"
    },
    {
      name: "Dotted Stingray",
      location: "Fisherman Island",
      rarity: "Mythic",
      description: "A Mythic-rarity fish found at Fisherman Island with a 1 in 91,000 catch chance. Sells for approximately 100,000+ coins (Jackpot value). The only Mythic fish available at the starting location.",
      locationLabel: "Fisherman Island",
      link: "/fish/dotted-stingray",
      linkText: "See Full Entry"
    },
    {
      name: "Hacker Shark",
      location: "Classic Island",
      rarity: "Secret",
      description: "A Secret-rarity fish found at Classic Island with a 1 in 500,000 catch chance. Listed as Invaluable. One of the rarest catches in the entire game and a trophy fish for advanced players.",
      locationLabel: "Classic Island",
      link: "/fish/hacker-shark",
      linkText: "See Full Entry"
    }
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Beginner Guide Preview Section
  // ═══════════════════════════════════════════════════════════════════════════
  
  const beginnerSectionTitle = "Fish It Beginner Guide (Start Smart, Progress Faster)";
  const beginnerSectionSubtitle = "";
  
  const beginnerIntroContent = "Starting Fish It without understanding its systems can slow your progression dramatically. While the game appears simple at first, early decisions around rods, islands, and leveling routes impact long-term efficiency.";
  
  const beginnerBenefits = [
    "Level faster in early game",
    "Unlock islands efficiently",
    "Choose your first meaningful upgrades",
    "Avoid wasting coins on inefficient gear",
    "Build your Fish Index correctly",
  ];
  
  const beginnerCallout = "If you are new to Fish It, begin here before exploring advanced guides.";
  
  // Remove the old beginnerSteps array
  const beginnerSteps = [
    {
      step: "1",
      title: "Start With the Complete Beginner Guides",
      description: "Browse our structured guide library at /guides, covering First Catch, Interface, Fishing Techniques, and Fast Progression strategies. Follow the beginner section sequentially to avoid common mistakes and inefficient practices that waste coins and time.",
    },
    {
      step: "2",
      title: "Use the Fish Database to Plan Your Catches",
      description: "Visit /fish-database to see every fish by location, rarity, exact catch chance (e.g., 1 in 100,000), and coin value. Filter by island or browse rarities at /rarities to target specific tiers. Secret fish are cataloged at /secret-fish.",
    },
    {
      step: "3",
      title: "Compare Rods Using the Tier List & Database",
      description: "Check /rod-tier-list for a fast visual comparison of all rods sorted by Luck, Speed, and Kg stats. For detailed info on requirements, prices, and quest unlocks, visit the full /fishing-rods database with search and tier filtering.",
    },
    {
      step: "4",
      title: "Stay Updated With Codes & Patch Notes",
      description: "Redeem active codes at /codes for free rewards and boosts. Monitor /updates for the latest patches, expansions (like Lava Basin), and new content releases that add fish, rods, or game systems to optimize your strategy around.",
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: FAQ Questions and Answers
  // ═══════════════════════════════════════════════════════════════════════════
  
  const faqs = [
    {
      question: "Where is the full Fish It fish database?",
      answer: "Visit /fish-database to browse every fish in Fish It. Each entry includes location, rarity tier, exact catch chance (e.g., 1 in 100,000 for Mythic fish), and coin value. You can filter by location or browse fish organized by rarity at /rarities.",
    },
    {
      question: "How do I compare fishing rods quickly?",
      answer: "Check the Rod Tier List at /rod-tier-list for a fast visual comparison of all fishing rods sorted by rarity tier. The table displays Luck %, Speed %, Kg capacity, and price side-by-side so you can compare stats at a glance without clicking through individual rod pages.",
    },
    {
      question: "Where can I see all Secret fish in Fish It?",
      answer: "The dedicated Secret Fish page at /secret-fish catalogs all known Secret-rarity fish from the database. Secret fish have extremely low catch rates (often 1 in 500,000 or worse) and are listed as 'Invaluable' in the game. Some Secret fish catch chances are still marked as '???' because exact odds are unknown.",
    },
    {
      question: "Are catch chances always known for every fish?",
      answer: "No. Some fish entries in our database show '???' for catch chance because the exact odds have not been confirmed or publicly disclosed. This is most common with Secret-tier fish and newly added content. Visit /fish-database to see which fish have verified catch rates versus unknown rates.",
    },
    {
      question: "Where are the latest Fish It patch notes?",
      answer: "Visit /updates to see the full patch note archive, including the recent Lava Basin Expansion with charm crafting, new resources, quests, and QoL improvements. The Updates page lists major releases in reverse chronological order (New Year 2026 timeline) with full changelogs and feature breakdowns.",
    },
    {
      question: "Where do I find active Fish It codes for rewards?",
      answer: "Check /codes for the complete list of active and expired Fish It codes. The Codes page is regularly updated with new redemption codes that grant free coins, boosts, or special items. Expired codes are marked clearly so you don't waste time trying invalid codes.",
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // SEO: FAQ Schema (JSON-LD)
  // ═══════════════════════════════════════════════════════════════════════════
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // ENGAGEMENT: Featured Section Cards
  // ═══════════════════════════════════════════════════════════════════════════
  // ENGAGEMENT: These six cards are the main navigation elements on the homepage
  // ENGAGEMENT: Each card links to a major section of the website
  // ENGAGEMENT: Users can click anywhere on a card to navigate
  // 
  // TO EDIT:
  // - title: The card's heading
  // - description: Brief explanation of what the section contains
  // - link: Where the card navigates to (must start with /)
  // - gradient: Color scheme (affects visual appearance only)
  // 
  // WARNING: Changing the 'link' value will redirect users to a different page
  // WARNING: Ensure the link corresponds to an existing page

  const featuredSections = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Gameplay Overview',
      description: 'Learn about the core mechanics and what makes Fish It unique',
      link: '/overview',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <Fish className="w-8 h-8" />,
      title: 'Fish Database',
      description: 'Complete catalog of all fish with exact drop rates and values',
      link: '/fish-database',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: <Anchor className="w-8 h-8" />,
      title: 'Fishing Rods Guide',
      description: 'Comprehensive rod stats, progression paths, and best builds',
      link: '/fishing-rods',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Items & Equipment',
      description: 'Discover all the rods, tools, and special items available',
      link: '/items',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: 'Locations & Rarities',
      description: 'Browse fish by location or rarity tier',
      link: '/locations',
      gradient: 'from-teal-500 to-cyan-600',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Updates & Changes',
      description: 'Stay informed about the latest patches and game updates',
      link: '/updates',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Tips & Guides',
      description: 'Expert strategies and tips to improve your fishing game',
      link: '/guides',
      gradient: 'from-yellow-500 to-orange-600',
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // STRUCTURE: PAGE LAYOUT (DO NOT EDIT UNLESS CHANGING DESIGN)
  // ═══════════════════════════════════════════════════════════════════════════
  // Everything below this point controls the visual layout and structure.
  // Only edit if you need to change how the page looks or is organized.
  // Editing the structure may break the layout if done incorrectly.

  return (
    <div>
      {/* SEO: Inject FAQPage JSON-LD schema */}
      <JsonLd data={faqSchema} />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* STRUCTURE: Hero Section */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* This is the large banner at the top of the page */}
      {/* Contains: Main title, subtitle, badge, and three CTA buttons */}
      <section className="relative overflow-hidden min-h-[600px]">
        {/* Premium Deep Ocean Background */}
        <div className="absolute inset-0 z-0">
          {/* Deep ocean gradient: navy → teal → abyss */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-cyan-900 to-slate-950"></div>
          
          {/* Subtle radial gradients for depth */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-cyan-950/30 to-transparent"></div>
          
          {/* Atmospheric glow accents */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400/6 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/5 rounded-full blur-3xl"></div>
          
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/40"></div>
        </div>

        {/* ENGAGEMENT: Premium Swimming Fish Background Layer */}
        <PremiumFishLayer />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            {/* Small badge above the title */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Fish className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-semibold">{badgeText}</span>
            </div>
            
            {/* SEO: Main H1 heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              {pageTitle}
            </h1>
            
            {/* Subtitle paragraph */}
            <p className="text-xl md:text-2xl text-cyan-100 mb-10 max-w-3xl mx-auto drop-shadow-lg">
              {pageSubtitle}
            </p>

            {/* ENGAGEMENT: Call-to-action buttons */}
            {/* Three prominent buttons directing users to key pages */}
            <div className="flex flex-wrap justify-center gap-4 relative z-20">
              <Button to="/overview" size="lg">
                {heroButton1Text}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button to="/how-to-play" variant="outline" size="lg">
                {heroButton2Text}
              </Button>
              <Button to="/guides" variant="outline" size="lg">
                {heroButton3Text}
              </Button>
            </div>
          </div>
        </div>

        {/* STRUCTURE: Wave divider at bottom of hero section */}
        {/* This creates a smooth visual transition to the next section */}
        {/* WARNING: Changing SVG path values may distort the wave shape */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path
              d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
              className="fill-slate-900"
            ></path>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ENGAGEMENT: RNG Calculator Feature Highlight */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative">
          {/* Animated glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl animate-pulse"></div>
          
          <Card className="relative bg-gradient-to-br from-cyan-950/50 via-purple-950/50 to-blue-950/50 border-cyan-500/40" glow>
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                  {/* Animated pulse ring */}
                  <div className="absolute inset-0 rounded-xl bg-cyan-400/20 animate-ping"></div>
                  <Calculator className="relative w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="cyan" className="animate-pulse">
                    ✨ NEW TOOL
                  </Badge>
                  <Badge variant="purple">
                    PROBABILITY CALCULATOR
                  </Badge>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Fish It RNG Calculator
                </h2>
                
                <p className="text-cyan-100 text-lg mb-6 leading-relaxed">
                  Calculate your exact chances of catching any fish in the database. Enter your target fish, luck multiplier, and fishing rate to see probability milestones (50%, 90%, 99%) and estimated time to catch. Perfect for planning rare fish hunting sessions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <span className="text-sm font-semibold text-cyan-300">Per-Cast Probability</span>
                    </div>
                    <p className="text-xs text-gray-400">See your exact chance with luck boosts applied</p>
                  </div>
                  
                  <div className="bg-purple-950/40 border border-purple-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span className="text-sm font-semibold text-purple-300">Time Estimates</span>
                    </div>
                    <p className="text-xs text-gray-400">Get fishing session time predictions</p>
                  </div>
                  
                  <div className="bg-pink-950/40 border border-pink-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                      <span className="text-sm font-semibold text-pink-300">Success Milestones</span>
                    </div>
                    <p className="text-xs text-gray-400">Know when you'll likely succeed</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Link to="/rng-calculator" className="inline-block">
                    <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/30">
                      <Calculator className="w-5 h-5 mr-2" />
                      Try RNG Calculator
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  
                  <Button to="/fish-database" variant="outline" size="lg">
                    <Fish className="w-5 h-5 mr-2" />
                    Browse Fish Database
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ENGAGEMENT: Featured Sections Grid */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* Six clickable cards that serve as main navigation */}
      {/* Each card links to a major section of the website */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader 
          title={exploreSectionTitle}
          subtitle={exploreSectionSubtitle}
        />

        {/* STRUCTURE: Responsive grid (1 column mobile, 2 tablet, 3 desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSections.map((section, index) => (
            <Link 
              key={index} 
              to={section.link}
              aria-label={`Go to ${section.title}`}
              className="block"
            >
              <Card hover className="group cursor-pointer h-full">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${section.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {section.icon}
                  </div>
                </div>
                {/* Card title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {section.title}
                </h3>
                {/* Card description */}
                <p className="text-gray-400 mb-4">
                  {section.description}
                </p>
                {/* "Learn more" link that appears on hover */}
                <span className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ENGAGEMENT: Latest Update Preview */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card glow>
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">
                {updateSectionTitle}
              </h2>
              <p className="text-cyan-400 text-sm mb-4">{updateDate}</p>
              <p className="text-gray-300 mb-6 italic">
                {updateSummary}
              </p>
              
              <div className="space-y-2 mb-6">
                {updateChanges.map((change, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-400 italic">{change}</p>
                  </div>
                ))}
              </div>
              
              <Button to="/updates" variant="outline">
                View All Updates
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ENGAGEMENT: Featured Rods & Rare Catches */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <SectionHeader 
            title={featuredSectionTitle}
            subtitle={featuredSectionSubtitle}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Featured Rods */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Anchor className="w-6 h-6 text-cyan-400" />
              Featured Rods in Fish It (2026 Meta Picks)
            </h3>
            
            <div className="space-y-4">
              {featuredRods.map((rod, index) => (
                <Card key={index} hover>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <Badge variant="epic" className="mb-2">
                          Featured Rod
                        </Badge>
                        <h4 className="text-xl font-bold text-white mb-1">
                          {rod.name}
                        </h4>
                        <p className="text-cyan-400 text-sm font-semibold">
                          {rod.title}
                        </p>
                      </div>
                      <Anchor className="w-8 h-8 text-cyan-400/30 flex-shrink-0" />
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {rod.description}
                    </p>
                    
                    <div className="pt-4 border-t border-cyan-500/20">
                      <p className="text-sm text-gray-400 mb-3">
                        <span className="font-semibold text-cyan-400">Best For:</span> {rod.bestFor}
                      </p>
                      <Button to={rod.link} size="sm" className="w-full">
                        {rod.linkText}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column: Rare Catches */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Fish className="w-6 h-6 text-blue-400" />
              Rare & Legendary Catches to Hunt
            </h3>
            
            <div className="space-y-4">
              {rareCatches.map((fish, index) => (
                <Card key={index} hover>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <Badge variant={fish.rarity === 'Secret' ? 'legendary' : 'rare'} className="mb-2">
                          {fish.rarity}
                        </Badge>
                        <h4 className="text-xl font-bold text-white mb-1">
                          {fish.name}
                        </h4>
                        <p className="text-blue-400 text-sm font-semibold">
                          {fish.location}
                        </p>
                      </div>
                      <Fish className="w-8 h-8 text-blue-400/30 flex-shrink-0" />
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {fish.description}
                    </p>
                    
                    <div className="pt-4 border-t border-cyan-500/20">
                      <p className="text-sm text-gray-400 mb-3">
                        <span className="font-semibold text-blue-400">Location:</span> {fish.locationLabel}
                      </p>
                      <Button to={fish.link} size="sm" className="w-full">
                        {fish.linkText}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ENGAGEMENT: Beginner Guide Preview */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          {beginnerSectionTitle}
        </h2>

        <Card className="mb-8">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {beginnerIntroContent}
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            This beginner overview gives you the foundation you need to:
          </p>

          <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mb-6 list-disc list-inside">
            {beginnerBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-5 mb-6">
            <p className="text-cyan-300 text-lg">
              {beginnerCallout}
            </p>
          </div>

          <div className="text-center">
            <Button to="/how-to-play" size="lg">
              Read the Complete Beginner Guide
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Card>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ENGAGEMENT: FAQ Accordion */}
      {/* ══════════════════════════���═══════════════════════════════════════ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader 
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about Fish It"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} hover className="cursor-pointer" onClick={() => handleFaqToggle(index)}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  {openFaqIndex === index && (
                    <p className="text-gray-400 ml-8 mt-2">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <div className="flex-shrink-0">
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">
            Need more detailed information?
          </p>
          <Button to="/faq" variant="outline">
            View Full FAQ Page
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SEO: Fish It Wiki Authority Intro Block */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Fish It Wiki: Database, Guides, and Verified Tables
          </h2>
          
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8">
            <p>
              Fishit.gg is a database-first Fish It wiki built for players who want answers fast. Instead of vague tips, we provide verified tables that list each fish's location, rarity tier, catch chance, and value notes — all in one searchable Fish Database.
            </p>
            
            <p>
              Use the Fishing Rods database and Rod Tier List to compare Luck, Speed, and Kg capacity before you spend coins. Then plan your session by choosing a location spawn pool (not random travel) and targeting fish that match your current progression goals.
            </p>
            
            <p>
              If you're new, start with How to Play and the Guides hub. If you're returning after a patch, check Updates for the latest map changes and new systems, then redeem any active Codes.
            </p>
          </div>

          <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Start Here</h3>
            <div className="flex flex-wrap gap-3">
              <Button to="/how-to-play" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                How to Play
              </Button>
              <Button to="/fish-database" size="sm" variant="outline">
                <Fish className="w-4 h-4 mr-2" />
                Fish Database
              </Button>
              <Button to="/rod-tier-list" size="sm" variant="outline">
                <TrendingUp className="w-4 h-4 mr-2" />
                Rod Tier List
              </Button>
              <Button to="/codes" size="sm" variant="outline">
                <Package className="w-4 h-4 mr-2" />
                Codes
              </Button>
              <Button to="/updates" size="sm" variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Updates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SEO: Explore Fish It Faster (Quick Navigation) */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Explore Fish It Faster (Quick Navigation)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/fish-database" aria-label="Go to Fish Database" className="block">
            <Card hover className="group cursor-pointer h-full">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Fish className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fish Database</h3>
              <p className="text-gray-400 text-sm mb-3">
                Search every fish by location, rarity, chance, and value.
              </p>
              <span className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors text-sm">
                Browse → <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Card>
          </Link>

          <Link to="/fishing-rods" aria-label="Go to Fishing Rods" className="block">
            <Card hover className="group cursor-pointer h-full">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fishing Rods</h3>
              <p className="text-gray-400 text-sm mb-3">
                Full rod stats with requirements and notes.
              </p>
              <span className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors text-sm">
                Browse → <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Card>
          </Link>

          <Link to="/rod-tier-list" aria-label="Go to Rod Tier List" className="block">
            <Card hover className="group cursor-pointer h-full">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Rod Tier List</h3>
              <p className="text-gray-400 text-sm mb-3">
                Fast comparisons across all rods.
              </p>
              <span className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors text-sm">
                Compare → <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Card>
          </Link>

          <Link to="/rarities" aria-label="Go to Rarities" className="block">
            <Card hover className="group cursor-pointer h-full">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Rarities</h3>
              <p className="text-gray-400 text-sm mb-3">
                Understand Common → Secret tiers.
              </p>
              <span className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors text-sm">
                Learn → <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Card>
          </Link>

          <Link to="/secret-fish" aria-label="Go to Secret Fish" className="block">
            <Card hover className="group cursor-pointer h-full">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Secret Fish</h3>
              <p className="text-gray-400 text-sm mb-3">
                Track trophy-tier ultra-rare entries.
              </p>
              <span className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors text-sm">
                View → <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Card>
          </Link>

          <Link to="/guides" aria-label="Go to Guides" className="block">
            <Card hover className="group cursor-pointer h-full">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Guides</h3>
              <p className="text-gray-400 text-sm mb-3">
                Beginner to end-game progression strategy.
              </p>
              <span className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors text-sm">
                Read → <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Card>
          </Link>

          <Link to="/codes" aria-label="Go to Codes" className="block">
            <Card hover className="group cursor-pointer h-full">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Codes</h3>
              <p className="text-gray-400 text-sm mb-3">
                Active and expired Fish It codes (kept accurate).
              </p>
              <span className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors text-sm">
                Redeem → <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Card>
          </Link>

          <Link to="/updates" aria-label="Go to Updates" className="block">
            <Card hover className="group cursor-pointer h-full">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Updates</h3>
              <p className="text-gray-400 text-sm mb-3">
                Patch notes timeline and major additions.
              </p>
              <span className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors text-sm">
                Track → <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Card>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ENGAGEMENT: Network Promotion */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* Promotes the Empyreus network of Roblox guide sites */}
      <NetworkPromo />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ENGAGEMENT: Mini Sitemap */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <MiniSitemap />
    </div>
  );
}