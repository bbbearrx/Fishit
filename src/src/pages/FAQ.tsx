/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FAQ PAGE (Frequently Asked Questions)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * This page answers common questions about Fish It. It uses an accordion-style
 * interface where users click questions to reveal answers.
 * 
 * WHO IT'S FOR:
 * - Players looking for quick answers to specific questions
 * - Search engines (FAQ schema helps with rich snippets in Google)
 * - New players who want to learn before playing
 * 
 * HOW TO EDIT SAFELY:
 * 1. SAFE: Edit FAQ questions and answers in the "faqs" array
 * 2. SAFE: Add new FAQ items (follow the existing format)
 * 3. SAFE: Edit all other text content in EDITABLE section
 * 4. ENGAGEMENT: The accordion auto-closes previous items for clean UX
 * 5. WARNING: Do not edit the FAQItem component unless changing functionality
 * 
 * WHAT THIS PAGE CONTAINS:
 * - Hero header with page title
 * - 12 FAQ items in accordion format (click to expand/collapse)
 * - "Still Have Questions?" call-to-action box
 * - Browse by topic category cards
 * 
 * ENGAGEMENT FEATURES:
 * - Click any question to reveal the answer
 * - Only one answer visible at a time (others auto-close)
 * - Visual feedback with icons and color changes
 * - Links to related pages for deeper information
 * 
 * SEO BENEFITS:
 * - FAQ content targets long-tail search queries
 * - Question format matches how people search Google
 * - Schema markup (FAQPage JSON-LD) creates rich snippets in search results
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * SEO META PLACEHOLDERS (Update when deploying to real domain)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Meta Title Example:
 * "Fish It FAQ - Frequently Asked Questions | Your Site Name"
 * 
 * Meta Description Example:
 * "Find answers to common questions about Fish It on Roblox. Learn about gameplay,
 * fishing mechanics, rods, rare fish, and more in our comprehensive FAQ."
 * 
 * Schema: FAQPage (JSON-LD injected automatically)
 */

import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import JsonLd from '../components/seo/JsonLd';

// ═══════════════════════════════════════════════════════════════════════════
// STRUCTURE: FAQ Item Component (DO NOT EDIT UNLESS CHANGING FUNCTIONALITY)
// ═══════════════════════════════════════════════════════════════════════════
// This component handles the accordion behavior for each FAQ item.
// WARNING: Changes here affect ALL FAQ items on the page.

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <Card hover className="cursor-pointer">
      <div className="flex items-start justify-between gap-4" onClick={onToggle}>
        <div className="flex-1">
          {/* Question with question mark icon */}
          <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
            {question}
          </h3>
          {/* Answer (only shown when isOpen is true) */}
          {/* ENGAGEMENT: Smooth reveal/hide animation controlled by React state */}
          {isOpen && (
            <p className="text-gray-400 ml-8 mt-2">
              {answer}
            </p>
          )}
        </div>
        {/* Chevron icon - points up when open, down when closed */}
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-cyan-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </div>
    </Card>
  );
}

export default function FAQ() {
  // ═══════════════════════════════════════════════════════════════════════════
  // ENGAGEMENT: Accordion State Management
  // ═══════════════════════════════════════════════════════════════════════════
  // ENGAGEMENT: Tracks which FAQ is currently open (only one at a time)
  // ENGAGEMENT: When you click a question, any other open question auto-closes
  // This keeps the interface clean and focused
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // If clicking the already-open item, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE CONTENT — SAFE TO CHANGE
  // ═══════════════════════════════════════════════════════════════════════════
  // All text on the FAQ page is defined here.
  // Edit these values to update what visitors see.

  // SEO: Main page title — H1 heading
  const pageTitle = "Fish It Wiki FAQ (FishIt.gg Help + Common Questions)";

  // SEO: Page subtitle
  const pageSubtitle = "Your complete guide to using FishIt.gg — the searchable Fish It wiki with fish database, rod comparisons, codes, rarities, and verified game information.";

  // EDITABLE: Main section header
  const sectionTitle = "Common Questions";
  const sectionSubtitle = "Click on any question to reveal the answer";

  // EDITABLE: "Still have questions?" section
  const helpBoxTitle = "Still Have Questions?";
  const helpBoxContent = "This FAQ will be continuously updated with new questions and answers. If you need additional help, check out our guides section or visit the official Fish It game page on Roblox.";
  const helpBoxButton1Text = "Browse Guides";
  const helpBoxButton2Text = "How to Play";

  // EDITABLE: Browse by topic section
  const topicSectionTitle = "Browse by Topic";

  // EDITABLE: Topic category cards
  const topicCategories = [
    {
      title: 'About FishIt.gg',
      description: 'Site info, updates, and affiliation',
    },
    {
      title: 'Database & Navigation',
      description: 'Using the fish database and filters',
    },
    {
      title: 'Locations & Rarities',
      description: 'Islands, tiers, and spawn tables',
    },
    {
      title: 'Codes & Updates',
      description: 'Active codes and patch notes',
    },
    {
      title: 'Rods & Mechanics',
      description: 'Fishing rod stats and progression',
    },
    {
      title: 'Troubleshooting',
      description: 'Site issues and reporting data',
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: FAQ Content — Add or modify questions and answers here
  // ═══════════════════════════════════════════════════════════════════════════
  // Each FAQ item consists of:
  // - id: Unique number (increment for new items)
  // - question: The FAQ question text (appears in bold)
  // - answer: The answer text (appears below when expanded)
  //
  // SEO: Questions should match how users search on Google
  // ENGAGEMENT: Keep answers concise (2-3 sentences max)

  const faqSections = [
    {
      sectionTitle: 'About FishIt.gg',
      faqs: [
        {
          id: 1,
          question: 'What is FishIt.gg?',
          answer: 'FishIt.gg is a database-first wiki for the Roblox game Fish It. It provides searchable tables for fish (with location, rarity, catch chance, and value), fishing rod comparisons, active codes, guides, and updates. Browse the Fish Database at /fish-database or explore Guides at /guides.',
        },
        {
          id: 2,
          question: 'Is FishIt.gg official?',
          answer: 'No. FishIt.gg is a fan-made informational site with no official affiliation to the Fish It game developers. All information is compiled from community research and in-game verification.',
        },
        {
          id: 3,
          question: 'How often is the site updated?',
          answer: 'The site is updated when new Fish It content releases or when data becomes available. Check the Updates page at /updates for the latest patch notes and site changes. There is no fixed schedule.',
        },
      ]
    },
    {
      sectionTitle: 'Using the Fish Database',
      faqs: [
        {
          id: 4,
          question: 'Where can I see every fish and its location?',
          answer: 'Visit the Fish Database at /fish-database to browse all fish entries. You can filter by location or rarity tier using the search and filter tools. Each entry shows the fish name, location, rarity, listed catch chance, and value notes.',
        },
        {
          id: 5,
          question: 'What does "Chance" mean in the database?',
          answer: 'The "Chance" column shows the database-listed catch probability for that fish (e.g., "1 in 100,000"). These values represent known or approximate catch rates. Some entries may display "???" when exact odds are unknown or unpublished.',
        },
        {
          id: 6,
          question: 'Why do some fish show "???" for catch chance?',
          answer: 'When exact catch rates are not confirmed or publicly disclosed, the database displays "???" to indicate unknown odds. This is most common with Secret-tier fish and newly added content. Visit /secret-fish to see all Secret rarity fish, many of which have unknown catch chances.',
        },
        {
          id: 7,
          question: 'Can I filter the database by island?',
          answer: 'Yes. The Fish Database at /fish-database includes filtering by location. You can also visit the Locations page at /locations to see all 11 confirmed fishing locations and browse fish organized by island.',
        },
      ]
    },
    {
      sectionTitle: 'Locations & Rarities',
      faqs: [
        {
          id: 8,
          question: 'What are the confirmed Fish It locations listed on this site?',
          answer: 'The site lists 11 confirmed fishing locations: Fisherman Island, The Ocean, Kohana Island, Kohana Volcano, Coral Reef Island, Esoteric Depths, Tropical Grove, Crater Island, Lost Isle, Ancient Jungle, and Classic Island. Visit /locations to explore fish spawn tables by island.',
        },
        {
          id: 9,
          question: 'What are the rarity tiers in Fish It?',
          answer: 'Fish It uses 7 rarity tiers: Common, Uncommon, Rare, Epic, Legendary, Mythic, and Secret. Each tier has progressively lower catch rates and higher value. Visit the Rarities page at /rarities to see all fish organized by rarity tier.',
        },
        {
          id: 10,
          question: 'What is the difference between Mythic and Secret?',
          answer: 'Both Mythic and Secret are rare tiers with very low catch rates. Secret is the rarest tier in the game and often includes fish with unknown catch chances listed as "???". Visit /rarities to compare tiers, or /secret-fish to see all Secret fish entries.',
        },
      ]
    },
    {
      sectionTitle: 'Codes & Updates',
      faqs: [
        {
          id: 11,
          question: 'Where do I find the latest Fish It codes?',
          answer: 'Visit the Codes page at /codes for a complete list of active and expired Fish It redemption codes. The page is regularly updated with new codes and clearly marks which codes are still valid versus expired.',
        },
        {
          id: 12,
          question: 'Do you change code text or formatting?',
          answer: 'No. All redemption codes are displayed exactly as listed to ensure they work when entered in-game. Codes are case-sensitive and must be copied precisely as shown on the Codes page.',
        },
        {
          id: 13,
          question: 'Where can I track patch notes and new content?',
          answer: 'Check the Updates page at /updates for Fish It patch notes, expansion announcements, and new content releases. Recent updates include the Lava Basin Expansion with charm crafting, new resources, and QoL improvements.',
        },
      ]
    },
    {
      sectionTitle: 'Rods, Progression & Mechanics',
      faqs: [
        {
          id: 14,
          question: 'Where can I compare fishing rods quickly?',
          answer: 'Visit the Rod Tier List at /rod-tier-list for a fast visual comparison of all rods sorted by Luck, Speed, and Kg stats. For detailed information including requirements, prices, and quest unlocks, check the full Fishing Rods database at /fishing-rods.',
        },
        {
          id: 15,
          question: 'What rod stats matter most?',
          answer: 'Luck affects rarity probability (higher chance for Mythic/Secret fish). Speed stats reduce wait times and increase casts per minute, improving efficiency. Kg capacity determines the maximum weight you can catch before line snapping. Visit /mechanics for a detailed breakdown of rod stats and their impact.',
        },
        {
          id: 16,
          question: 'Where should I start if I\'m new to Fish It?',
          answer: 'Begin with the How to Play guide at /how-to-play for an introduction to core mechanics and progression systems. Then browse the Guides hub at /guides for beginner tips, resource management, and efficient leveling strategies.',
        },
        {
          id: 17,
          question: 'What is the catch → sell → upgrade loop?',
          answer: 'This is Fish It\'s core progression cycle: catch fish, sell them for coins, reinvest coins into better rods and upgrades, then repeat with improved efficiency. Visit /mechanics to learn optimization strategies for speed, luck, and profit maximization.',
        },
      ]
    },
    {
      sectionTitle: 'Troubleshooting',
      faqs: [
        {
          id: 18,
          question: 'A page looks clickable but doesn\'t navigate — what\'s wrong?',
          answer: 'This is likely a UI bug or browser caching issue. Try refreshing the page (Ctrl+R or Cmd+R) or clearing your browser cache. Check /updates for any reported site issues or recent changes.',
        },
        {
          id: 19,
          question: 'The database feels slow — what can I do?',
          answer: 'Use the search and filter tools to narrow results by location or rarity tier instead of loading the full database at once. Reloading the page can also help if filters become unresponsive.',
        },
        {
          id: 20,
          question: 'I found incorrect data — how do I report it?',
          answer: 'If this site has a contact page, use it to report data issues. Otherwise, check the Updates page at /updates for announcements about data corrections or community feedback channels.',
        },
      ]
    },
  ];

  // Flatten all FAQs for schema
  const allFaqs = faqSections.flatMap(section => section.faqs);

  // ═══════════════════════════════════════════════════════════════════════════
  // STRUCTURE: Background Image
  // ═══════════════════════════════════════════════════════════════════════════
  
  const headerBackgroundImage = "https://images.unsplash.com/photo-1646318714677-eeea2bdf92d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwYmx1ZSUyMG9jZWFuJTIwZ3JhZGllbnR8ZW58MXx8fHwxNzcwNjgzMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080";

  // ═══════════════════════════════════════════════════════════════════════════
  // SEO: FAQ Schema (JSON-LD)
  // ═══════════════════════════════════════════════════════════════════════════
  // This schema must match the exact FAQ data shown on the page
  // It helps Google display rich FAQ snippets in search results
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // STRUCTURE: PAGE LAYOUT (DO NOT EDIT UNLESS CHANGING DESIGN)
  // ═══════════════════════════════════════════════════════════════════════════

  return (
    <div className="min-h-screen">
      {/* SEO: Inject FAQPage JSON-LD schema */}
      <JsonLd data={faqSchema} />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* STRUCTURE: Page Header */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-950 to-blue-900 py-16">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src={headerBackgroundImage}
            alt="Ocean background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* SEO: Main H1 heading */}
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
      {/* STRUCTURE: Main Content Section */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <SectionHeader 
          title={sectionTitle}
          subtitle={sectionSubtitle}
        />

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* ENGAGEMENT: FAQ Accordion List */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* ENGAGEMENT: Click any question to see the answer */}
        {/* ENGAGEMENT: Clicking a different question auto-closes the previous one */}
        <div className="space-y-8">
          {faqSections.map((section, sectionIndex) => {
            // Calculate the starting index for FAQs in this section
            const startIndex = faqSections
              .slice(0, sectionIndex)
              .reduce((sum, s) => sum + s.faqs.length, 0);
            
            return (
              <div key={sectionIndex}>
                {/* SEO: H2 Section Header */}
                <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-cyan-500/30">
                  {section.sectionTitle}
                </h2>
                
                {/* FAQ Items for this section */}
                <div className="space-y-4">
                  {section.faqs.map((faq, faqIndex) => {
                    const globalIndex = startIndex + faqIndex;
                    return (
                      <FAQItem
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === globalIndex}
                        onToggle={() => handleToggle(globalIndex)}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* ENGAGEMENT: Still Have Questions Box */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* Directs users to additional resources */}
        <div className="mt-12">
          <Card className="bg-cyan-950/30" glow>
            <div className="text-center">
              <HelpCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                {helpBoxTitle}
              </h3>
              <p className="text-gray-400 mb-6">
                {helpBoxContent}
              </p>
              {/* ENGAGEMENT: Two buttons linking to related pages */}
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/guides"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/30"
                >
                  {helpBoxButton1Text}
                </a>
                <a
                  href="/how-to-play"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
                >
                  {helpBoxButton2Text}
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* ENGAGEMENT: Browse by Topic Categories */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* Category cards for easier navigation */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {topicSectionTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicCategories.map((category, index) => (
              <Card key={index} hover className="text-center cursor-pointer">
                <h3 className="text-white font-semibold mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {category.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
