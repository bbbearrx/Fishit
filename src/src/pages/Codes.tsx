/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CODES PAGE — FISH IT CODES (JANUARY 2026)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /codes
 * 
 * PURPOSE:
 * Complete list of all active and expired Fish It codes for January 2026.
 * Provides free rewards including Luck Totems, Exclusive Baits, Luck II Potions,
 * Rod Skins, Presents, and Quest Progress boosts.
 * 
 * DATA SOURCE:
 * Official Fish It Discord announcements and in-game code redemption system.
 * 
 * EDITABLE CONTENT RULES:
 * - NEVER modify code text, capitalization, or spelling
 * - Add new codes at the TOP of the workingCodes array
 * - Move expired codes to expiredCodes array (maintain exact text)
 * - Update lastUpdated date when codes change
 * - Do NOT invent or guess code rewards
 * - Do NOT correct apparent typos in code names
 * 
 * SEO STRATEGY:
 * - Target: "fish it codes", "fish it roblox codes", "fish it codes 2026"
 * - Long-tail: "working fish it codes", "how to redeem fish it codes"
 * - Update frequency: Regular (codes page requires frequent updates)
 */

import { useState } from 'react';
import { Copy, Check, Gift, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import Breadcrumbs from '../components/seo/Breadcrumbs';
import JsonLd from '../components/seo/JsonLd';
import { Link } from 'react-router';

export default function Codes() {
  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Working Codes Data
  // ═══════════════════════════════════════════════════════════════════════════
  // WARNING: Do NOT modify code text. Add new codes at TOP. Keep exact capitalization.
  
  const workingCodes = [
    { code: 'GO2026', reward: 'Rod Skin' },
    { code: 'HAPPY2026', reward: 'Luck Totem' },
    { code: 'GIFTGIVING', reward: 'Epic Present' },
    { code: '2BILLION', reward: 'Free Rewards' },
    { code: 'FREEPRESENTS', reward: 'Rare Present' },
    { code: 'CELEBRATE', reward: 'Rare Present' },
    { code: 'SORRYQUEST', reward: 'Luck Totem' },
    { code: 'COUNTTRANSCENDEDSTONES', reward: 'Update Element Rod Quest Progress' },
    { code: 'LUCKYTOTEM', reward: 'Luck Totem' },
    { code: 'TOTEMREFUND', reward: 'Luck Totem' },
    { code: 'PURPLEMOON', reward: 'Exclusive Bait' },
    { code: 'CRYSTALS', reward: 'Luck II Potions' },
    { code: 'BLAMETALON', reward: 'Luck II Potions' },
    { code: 'SORRY', reward: 'Exclusive Bait' },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Expired Codes
  // ═══════════════════════════════════════════════════════════════════════════
  // WARNING: Do NOT modify code text. Keep exact capitalization and spelling.
  
  const expiredCodes = [
    'TRAVEL', 'MEGA', 'ARMOR', 'SHARKSSS', '100M', 'MUTATE', 'WOWSPINS', 
    'SORRYSPINS', 'FREEBIES', 'THEWHEEL', 'INDO', 'LOST', 'HUNTING', 
    'EGGS', 'FISHING', 'BIGUPD', 'LOBSTAH', 'CONSOLE', 'VALENTINE', 'XMAS2024'
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Last Updated Date
  // ═══════════════════════════════════════════════════════════════════════════
  
  const lastUpdated = 'January 12, 2026';

  // ═══════════════════════════════════════════════════════════════════════════
  // INTERACTION: Copy to Clipboard
  // ═══════════════════════════════════════════════════════════════════════════
  
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = code;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          setCopiedCode(code);
          setTimeout(() => setCopiedCode(null), 2000);
        }
      } catch (fallbackErr) {
        console.error('Copy failed:', fallbackErr);
      }
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // SEO: Structured Data
  // ═══════════════════════════════════════════════════════════════════════════

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://fishit.gg/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Codes",
        "item": "https://fishit.gg/codes"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Fish It Codes (January 2026) - All Working & Expired Codes",
    "description": "Complete list of all working and expired Fish It codes for January 2026. Get free Luck Totems, Exclusive Baits, Luck II Potions, Rod Skins, Presents, and Quest Progress.",
    "author": {
      "@type": "Organization",
      "name": "fishit.gg"
    },
    "publisher": {
      "@type": "Organization",
      "name": "fishit.gg"
    },
    "dateModified": lastUpdated,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fishit.gg/codes"
    }
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />

      <div className="min-h-screen">
        {/* STRUCTURE: Page Header */}
        <div className="relative pt-24 pb-16 px-4 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
          <div className="max-w-6xl mx-auto">
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Codes', href: '/codes' }
              ]}
            />

            <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Fish It Codes (January 2026)
            </h1>

            <p className="text-xl text-gray-300 mb-6">
              All Working & Expired Fish It Codes – Updated Regularly
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-green-500 bg-green-500/10">
                <Calendar className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-green-400">Updated Today</span>
              </div>
              <div className="text-sm text-gray-400">
                Last verified: {lastUpdated}
              </div>
            </div>
          </div>
        </div>

        {/* STRUCTURE: Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
          
          {/* Introduction */}
          <section>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Looking for the latest Fish It codes? This page lists every active and expired code for January 2026, updated regularly so you can claim free rewards fast.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Fish It codes provide instant boosts that help you progress faster without extra grinding. Whether you're working toward high-tier rods like the <Link to="/fishing-rods/ghostfinn-rod" className="text-cyan-400 hover:text-cyan-300 underline">Ghostfinn Rod</Link>, farming coins for major upgrades, or hunting trophy fish at difficult locations, redeeming active codes gives you free items that would otherwise require significant time investment.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Code rewards in Fish It include:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
                <li><strong className="text-white">Luck Totems</strong> — Temporarily increase catch rates for rare fish</li>
                <li><strong className="text-white">Exclusive Baits</strong> — Special baits that improve targeting</li>
                <li><strong className="text-white">Luck II Potions</strong> — High-tier luck boosts for Mythic and Secret hunting</li>
                <li><strong className="text-white">Rod Skins</strong> — Cosmetic upgrades for your fishing rod</li>
                <li><strong className="text-white">Presents</strong> — Mystery reward boxes with bonus items</li>
                <li><strong className="text-white">Quest Progress</strong> — Instant completion credits for multi-stage quests</li>
              </ul>

              <p className="text-lg text-gray-300 leading-relaxed">
                Combine code rewards with the <Link to="/rod-tier-list" className="text-cyan-400 hover:text-cyan-300 underline">Rod Tier List</Link> to plan your next rod purchase, then use the <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300 underline">Fish Database</Link> to filter fish by location and rarity.
              </p>
            </div>
          </section>

          {/* Working Codes */}
          <section>
            <SectionHeader 
              title="All New Fish It Codes – Last Updated January 2026"
              subtitle="Redeem these codes to claim free rewards instantly"
              icon={Gift}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {workingCodes.map((item, index) => (
                <Card 
                  key={index}
                  className="group hover:scale-105 transition-all duration-300 bg-slate-800/50 border-cyan-500/30"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-cyan-400" />
                        <span className="font-mono font-bold text-lg tracking-wider text-cyan-400">
                          {item.code}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-gray-200">Reward:</span> {item.reward}
                    </p>

                    <button
                      onClick={() => handleCopy(item.code)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all border-2 bg-cyan-500/10 border-cyan-500 text-cyan-400 hover:bg-cyan-500/20"
                    >
                      {copiedCode === item.code ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy Code
                        </>
                      )}
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Expired Codes */}
          <section>
            <SectionHeader 
              title="Expired Fish It Codes"
              subtitle="These codes are no longer active but kept for reference"
            />

            <Card className="mt-6 bg-slate-800/30 border-gray-600">
              <p className="text-gray-400 font-mono text-sm md:text-base leading-relaxed">
                {expiredCodes.join(' | ')}
              </p>
            </Card>
          </section>

          {/* How to Redeem */}
          <section>
            <SectionHeader 
              title="How to Redeem Fish It Codes"
              subtitle="Follow these simple steps to claim your free rewards"
            />

            <Card className="mt-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Redeeming codes in Fish It is simple:
                </p>

                <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6 ml-4">
                  <li className="text-lg">Click the cart icon at the top center of your screen.</li>
                  <li className="text-lg">Scroll down to the "Redeem Codes" section.</li>
                  <li className="text-lg">Enter the code exactly as shown.</li>
                  <li className="text-lg">Click Redeem.</li>
                </ol>

                <p className="text-lg text-gray-300 leading-relaxed">
                  If the code is active, your rewards will instantly appear in your inventory.
                </p>
              </div>
            </Card>
          </section>

          {/* Related Pages */}
          <section>
            <SectionHeader 
              title="Related Pages"
              subtitle="Continue exploring Fish It resources"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <Link to="/fishing-rods" className="group">
                <Card className="h-full transition-all duration-300 hover:scale-105 bg-blue-500/10 border-blue-500/30">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors text-blue-400">
                    Fishing Rods Database
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Complete database of all fishing rods in Fish It with stats, locations, and unlock requirements.
                  </p>
                </Card>
              </Link>

              <Link to="/rod-tier-list" className="group">
                <Card className="h-full transition-all duration-300 hover:scale-105 bg-purple-500/10 border-purple-500/30">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-300 transition-colors text-purple-400">
                    Rod Tier List
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Competitive tier rankings for all fishing rods based on performance, value, and progression impact.
                  </p>
                </Card>
              </Link>

              <Link to="/fish-database" className="group">
                <Card className="h-full transition-all duration-300 hover:scale-105 bg-green-500/10 border-green-500/30">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors text-green-400">
                    Fish Database
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Complete catalog of every fish species with rarities, locations, base sell values, and catch rates.
                  </p>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
