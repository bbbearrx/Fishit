/**
 * ═══════════════════════════════════════════════════════════════════════════
 * UPDATES PAGE — FISH IT 2026 PATCH NOTES
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /updates
 * 
 * PURPOSE:
 * Comprehensive archive of all official Fish It updates released since January 2026.
 * Updates are sorted newest to oldest with exact dates, times, and patch notes.
 * 
 * DATA SOURCE:
 * Official Fish It Discord announcements. No content modified or invented.
 * 
 * EDITABLE CONTENT RULES:
 * - Add new updates at the TOP of the updates array (newest first)
 * - Copy exact wording from official patch notes
 * - Remove Discord tags like @everyone but keep all content
 * - Do NOT modify feature descriptions
 * - Do NOT add mechanics explanations
 * - Do NOT speculate on stats or bonuses
 */

import { Calendar, Clock, Flame, Gem, Fish, Anchor, TrendingUp } from 'lucide-react';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import Breadcrumbs from '../components/seo/Breadcrumbs';
import { Link } from 'react-router';

export default function Updates() {
  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Update History
  // ═══════════════════════════════════════════════════════════════════════════
  // Add new updates at the TOP of this array (newest first)
  
  const updates = [
    {
      title: "Lava Basin Expansion Update 🔥",
      date: "2/7/26",
      time: "6:48 PM",
      link: "/updates/lava-basin-expansion",
      gradient: "from-orange-500 to-red-600",
      sections: [
        {
          emoji: "🌋",
          title: "New Area",
          content: "Discover the newly expanded Lava Basin"
        },
        {
          emoji: "🔨",
          title: "Charm Crafting",
          content: "You can now craft various charms using resources found!"
        },
        {
          emoji: "💎",
          title: "New Crafting Resources",
          content: "Resources used for crafting charms can now be fished up and extracted from new crystals"
        },
        {
          emoji: "📜",
          title: "New Quests",
          content: "New quests that unlock new areas of the map and tease a new sneak peak"
        },
        {
          emoji: "🛠️",
          title: "QoL Improvements",
          content: "Bug & Tutorial Fixes + Minor Quality Of Life changes\n\nNew anti-cheat measures have been added!"
        }
      ]
    },
    {
      title: "Kohana Event 🌋",
      date: "1/31/26",
      time: "5:49 PM",
      gradient: "from-orange-500 to-yellow-600",
      sections: [
        {
          emoji: "🌋",
          title: "Volcano Event",
          content: "Every four hours, Kohana erupts, creating temporary lava boosted zones if you can find one in time!"
        },
        {
          emoji: "🏝️",
          title: "Kohana Island Revamp",
          content: "Kohana Island has been refreshed with new updated areas to explore!"
        },
        {
          emoji: "🎯",
          title: "Fish Bounties",
          content: "New bounty boards let you hunt specific fish and turn them in for rewards!"
        },
        {
          emoji: "🎒",
          title: "Event Quest System",
          content: "A new event quest system is live with challenges and event rewards!"
        },
        {
          emoji: "🍀",
          title: "Lucky Charm",
          content: "Increases your luck when fishing!"
        },
        {
          emoji: "🌋",
          title: "The Lava Charm",
          content: "Boosts your odds of catching a Magma Shark"
        },
        {
          emoji: "🧪",
          title: "Hazmat Descent",
          content: "A special suit allows access to a locked underground area beneath the volcano..."
        },
        {
          emoji: "🚤",
          title: "Exclusive Event Boat",
          content: "A limited-time boat is available during the event. Surf over to the new expansion!"
        },
        {
          emoji: "🔥",
          title: "Crescendo Scythe Skin",
          content: "A limited skin can be unlocked during this update, comes with a custom Bobber Skin!"
        },
        {
          emoji: "🛠️",
          title: "Improvements & Fixes",
          content: "Bug fixes and early game improvements"
        }
      ]
    },
    {
      title: "Crystal Depths Update",
      date: "1/24/26",
      time: "6:25 PM",
      gradient: "from-cyan-500 to-blue-600",
      sections: [
        {
          emoji: "📍",
          title: "Crystal Depths",
          content: "The new Elpirate Gran Maja can now be found in the Crystal Depths!"
        },
        {
          emoji: "🍃",
          title: "Sacred Temple",
          content: "The Viridis Lurker has emerged and now lurks deep within the Sacred Temple"
        },
        {
          emoji: "✨",
          title: "Charms",
          content: "The all new Charms have now appeared in world"
        },
        {
          emoji: "🗺️",
          title: "Lost Isle",
          content: "The Algae Charm can be found at Lost Isle for boosted odds on Cryoshade Glider"
        },
        {
          emoji: "🗺️",
          title: "Ancient Jungle",
          content: "The Bone Charm can be found at Ancient Jungle for boosted odds on the Bone Whale"
        },
        {
          emoji: "🎣",
          title: "New Bait",
          content: "Complete the quest at Crystal Depths to unlock the Aetherion Bait"
        },
        {
          emoji: "📜",
          title: "New Quests",
          content: "More special items to earn at Kohana Island and Crystal Depths\n\nFixed bugs and quality of life improvements"
        }
      ],
      note: "MEGA LUCK was reactivated once players rejoined."
    },
    {
      title: "Crystal Depths & Leviathan Update",
      date: "1/17/26",
      time: "7:42 PM",
      gradient: "from-purple-500 to-blue-600",
      sections: [
        {
          emoji: "📍",
          title: "Crystal Depths",
          content: "New area only accessible with the Advanced Diving Tank\n\nSpecial 💎 Crystalized mutation for farming Crystals with a pickaxe"
        },
        {
          emoji: "🔮",
          title: "Leviathan Den",
          content: "Complete the Forgotten Scale quest once daily, and search for Artifacts across the world to open the Leviathan's Den"
        },
        {
          emoji: "🐉",
          title: "Leviathan Hunt",
          content: "Catch the LEVIATHAN from the new questline at the TNT Cave on Pirate Cove\n\nEarn up to 1 Leviathan Scale per day to activate the event"
        },
        {
          emoji: "📜",
          title: "New Quests",
          content: "More special items to earn at Pirate Cove"
        },
        {
          emoji: "🐟",
          title: "+20 NEW FISH AND A NEW SECRET",
          content: "Some special fish require certain weather conditions"
        }
      ],
      note: "Mega Luck hosted for 3 hours at launch."
    },
    {
      title: "Pirate Cove Update",
      date: "Early January 2026",
      time: "",
      gradient: "from-amber-600 to-orange-700",
      sections: [
        {
          emoji: "🏝️",
          title: "New Island: Pirate Cove",
          content: "35+ NEW Fish\n\nNew Mutation: Leviathan's Rage"
        },
        {
          emoji: "📜",
          title: "Pirate Event Pass (Free-to-Play rewards)",
          content: "Complete daily event quests to unlock limited-time skins\n\nFinal reward: Banana Pirate Raft"
        },
        {
          emoji: "🌸",
          title: "New LIMITED Skin: Eternal Flower",
          content: "New Pirate Crate"
        },
        {
          emoji: "🗺️",
          title: "New Quests",
          content: "Quests spread around the island"
        },
        {
          emoji: "👀",
          title: "Secret Areas",
          content: "Find TNT to access hidden areas\n\nLeviathan's Lair opened in following update"
        }
      ],
      note: "Admin Leviathan Hunt Event hosted at 7:00 AM"
    },
    {
      title: "Diamond Rod Update 💎",
      date: "1/3/26",
      time: "4:09 PM",
      gradient: "from-cyan-400 to-blue-500",
      sections: [
        {
          emoji: "🌌",
          title: "New LIMITED Skin",
          content: "New cosmetic skin released"
        },
        {
          emoji: "💎",
          title: "New Endgame Rod",
          content: "Owners of the Element Rod can begin a mission for the Diamond Rod\n\nTalk to the Diamond Researcher NPC to begin"
        },
        {
          emoji: "🗺️",
          title: "New Quests",
          content: "12 quests added\n\nQuest NPCs now display an orange icon"
        },
        {
          emoji: "🎄",
          title: "Christmas Cave Changes",
          content: "Duration increased from 30 minutes to 1.5 hours\n\nOpens every 3 hours instead of every 2 hours"
        },
        {
          emoji: "🎁",
          title: "Code",
          content: "USE CODE: 3BILLION\n\nReward: x2 Luck II Potions"
        }
      ]
    }
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // STRUCTURE: PAGE LAYOUT
  // ═══════════════════════════════════════════════════════════════════════════

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Updates', href: '/updates' }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-950 via-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-semibold">Official Patch Notes</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fish It Updates (2026 Patch Notes)
          </h1>
          
          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto">
            All official Fish It updates released since January 2026.
          </p>
        </div>
      </section>

      {/* Updates List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader 
          title="2026 Updates (Since New Year)"
          subtitle="Complete chronological archive of Fish It patches"
        />

        {/* SEO: Patch Notes Disclaimer */}
        <Card className="mb-8 bg-yellow-900/20 border-yellow-500/30">
          <p className="text-yellow-200 text-sm leading-relaxed">
            <strong className="font-semibold">Note:</strong> Patch notes are shown as posted by developers. Some features and locations mentioned may require rejoining a new server to appear, as server updates may be staggered. Check individual update entries for details on availability and timing.
          </p>
        </Card>

        <div className="space-y-8">
          {updates.map((update, index) => (
            <Card key={index} className="border-l-4 border-cyan-500">
              {/* Update Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-3xl font-bold text-white">
                    {update.title}
                  </h2>
                  {update.link && (
                    <Link 
                      to={update.link}
                      className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-semibold transition-colors whitespace-nowrap"
                    >
                      Full Details →
                    </Link>
                  )}
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{update.date}</span>
                  </div>
                  {update.time && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span>{update.time}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Update Content */}
              <div className="space-y-4">
                {update.sections.map((section, sIndex) => (
                  <div key={sIndex} className="flex items-start gap-3">
                    <div className="text-2xl flex-shrink-0 mt-0.5">
                      {section.emoji}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {section.title}
                      </h3>
                      <p className="text-gray-300 whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Optional Note */}
              {update.note && (
                <div className="mt-6 p-3 bg-cyan-900/20 border border-cyan-500/30 rounded-lg">
                  <p className="text-cyan-300 text-sm italic">
                    Note: {update.note}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Archive Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="bg-slate-900/50 border-slate-700/50">
          <p className="text-gray-400 text-center">
            Updates listed here reflect official patch notes since January 2026.
          </p>
        </Card>
      </section>

      {/* Related Pages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader 
          title="Related Pages"
          subtitle="Explore more Fish It content"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            to="/fish-database"
            className="block group"
          >
            <Card hover className="h-full">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Fish className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Fish Database
              </h3>
              <p className="text-gray-400">
                Complete catalog of all fish in Fish It
              </p>
            </Card>
          </Link>

          <Link 
            to="/fishing-rods"
            className="block group"
          >
            <Card hover className="h-full">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Fishing Rods
              </h3>
              <p className="text-gray-400">
                All fishing rods with stats and progression
              </p>
            </Card>
          </Link>

          <Link 
            to="/rod-tier-list"
            className="block group"
          >
            <Card hover className="h-full">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Rod Tier List
              </h3>
              <p className="text-gray-400">
                Data-driven rod ranking and analysis
              </p>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}