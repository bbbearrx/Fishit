/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FISH IT DATABASE — AUTHORITATIVE DATASET
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * CRITICAL: This dataset is the SINGLE SOURCE OF TRUTH for all fish data.
 * 
 * DO NOT:
 * - Modify fish names, spellings, or casing
 * - Change rarity names
 * - Alter location names
 * - Convert "???" to actual values
 * - Change "Event Only", "Event/Quest", "Quest", "Boss/Event" labels
 * - Modify value descriptions (keep "~", "+", parentheses, "Invaluable" exactly)
 * 
 * This data is used by:
 * - Fish Database page (/fish-database)
 * - Location pages (/fish-database/[location])
 * - Fish detail pages (/fish/[fish-slug])
 * - Rarity pages (/rarities/[rarity])
 * - Secret Fish page (/secret-fish)
 */

export interface FishEntry {
  "Fish Name": string;
  "Rarity": string;
  "Location": string;
  "Chance": string;
  "Value": string;
}

export const fishData: FishEntry[] = [
  {"Fish Name":"Clownfish","Rarity":"Common","Location":"Fisherman Island","Chance":"1 in 2","Value":"Low (~5-10 coins)"},
  {"Fish Name":"Azure Damsel","Rarity":"Common","Location":"Fisherman Island","Chance":"1 in 3","Value":"Low (~5-10 coins)"},
  {"Fish Name":"Pygmy Goby","Rarity":"Common","Location":"Fisherman Island","Chance":"1 in 4","Value":"Low (~8 coins)"},
  {"Fish Name":"Herring Fish","Rarity":"Common","Location":"Fisherman Island","Chance":"1 in 5","Value":"Low (~10 coins)"},
  {"Fish Name":"Strawberry Dotty","Rarity":"Common","Location":"Fisherman Island","Chance":"1 in 5","Value":"Low (~12 coins)"},
  {"Fish Name":"Copperband Butterfly","Rarity":"Common","Location":"Fisherman Island","Chance":"1 in 8","Value":"Low (~15 coins)"},
  {"Fish Name":"Yellow Damsel","Rarity":"Common","Location":"Fisherman Island","Chance":"1 in 10","Value":"Low (~15 coins)"},
  {"Fish Name":"Gar Fish","Rarity":"Uncommon","Location":"Fisherman Island","Chance":"1 in 20","Value":"Medium (~25-40 coins)"},
  {"Fish Name":"Bandit Angelfish","Rarity":"Uncommon","Location":"Fisherman Island","Chance":"1 in 25","Value":"Medium (~30-50 coins)"},
  {"Fish Name":"Flame Angelfish","Rarity":"Uncommon","Location":"Fisherman Island","Chance":"1 in 35","Value":"Medium (~45-60 coins)"},
  {"Fish Name":"Watanabei Angelfish","Rarity":"Uncommon","Location":"Fisherman Island","Chance":"1 in 40","Value":"Medium (~50-70 coins)"},
  {"Fish Name":"White Tang","Rarity":"Uncommon","Location":"Fisherman Island","Chance":"1 in 50","Value":"Medium (~60-80 coins)"},
  {"Fish Name":"Korean Angelfish","Rarity":"Rare","Location":"Fisherman Island","Chance":"1 in 150","Value":"High (~150+ coins)"},
  {"Fish Name":"Ballina Angelfish","Rarity":"Rare","Location":"Fisherman Island","Chance":"1 in 200","Value":"High (~200+ coins)"},
  {"Fish Name":"Barracuda Fish","Rarity":"Rare","Location":"Fisherman Island","Chance":"1 in 250","Value":"High (~250+ coins)"},
  {"Fish Name":"Frog","Rarity":"Rare","Location":"Fisherman Island","Chance":"1 in 300","Value":"High (~300+ coins)"},
  {"Fish Name":"Darwin Clownfish","Rarity":"Rare","Location":"Fisherman Island","Chance":"1 in 350","Value":"High (~350+ coins)"},
  {"Fish Name":"Dorhey Tang","Rarity":"Epic","Location":"Fisherman Island","Chance":"1 in 1,200","Value":"Very High (~1,000+ coins)"},
  {"Fish Name":"Unicorn Tang","Rarity":"Epic","Location":"Fisherman Island","Chance":"1 in 1,500","Value":"Very High (~1,500+ coins)"},
  {"Fish Name":"Lined Cardinal Fish","Rarity":"Epic","Location":"Fisherman Island","Chance":"1 in 4,500","Value":"Very High (~3,500+ coins)"},
  {"Fish Name":"Yellowfin Tuna","Rarity":"Legendary","Location":"Fisherman Island","Chance":"1 in 7,500","Value":"Jackpot (~10,000+ coins)"},
  {"Fish Name":"Dotted Stingray","Rarity":"Mythic","Location":"Fisherman Island","Chance":"1 in 91,000","Value":"Jackpot (~100,000+ coins)"},

  {"Fish Name":"Yellowtail Angelfish","Rarity":"Common","Location":"The Ocean","Chance":"1 in 5","Value":"Low (~10)"},
  {"Fish Name":"Vintage Blue Tang","Rarity":"Common","Location":"The Ocean","Chance":"1 in 8","Value":"Low (~12)"},
  {"Fish Name":"Masked Angelfish","Rarity":"Common","Location":"The Ocean","Chance":"1 in 10","Value":"Low (~15)"},
  {"Fish Name":"Conspi Angelfish","Rarity":"Common","Location":"The Ocean","Chance":"1 in 12","Value":"Low (~15)"},
  {"Fish Name":"Skunk Tilefish","Rarity":"Uncommon","Location":"The Ocean","Chance":"1 in 20","Value":"Medium (~25)"},
  {"Fish Name":"Fade Tang","Rarity":"Uncommon","Location":"The Ocean","Chance":"1 in 25","Value":"Medium (~30)"},
  {"Fish Name":"Blue-Banded Goby","Rarity":"Uncommon","Location":"The Ocean","Chance":"1 in 30","Value":"Medium (~35)"},
  {"Fish Name":"Tricolore Butterfly","Rarity":"Uncommon","Location":"The Ocean","Chance":"1 in 35","Value":"Medium (~40)"},
  {"Fish Name":"Vintage Damsel","Rarity":"Rare","Location":"The Ocean","Chance":"1 in 50","Value":"High (~100)"},
  {"Fish Name":"Jewel Tang","Rarity":"Rare","Location":"The Ocean","Chance":"1 in 75","Value":"High (~120)"},
  {"Fish Name":"Candy Butterfly","Rarity":"Rare","Location":"The Ocean","Chance":"1 in 100","Value":"High (~150)"},
  {"Fish Name":"Cow Clownfish","Rarity":"Rare","Location":"The Ocean","Chance":"1 in 150","Value":"High (~200)"},
  {"Fish Name":"Moorish Idol","Rarity":"Epic","Location":"The Ocean","Chance":"1 in 500","Value":"Very High (~800)"},
  {"Fish Name":"Chrome Tuna","Rarity":"Epic","Location":"The Ocean","Chance":"1 in 1,000","Value":"Very High (~1,500)"},
  {"Fish Name":"Manta Ray","Rarity":"Legendary","Location":"The Ocean","Chance":"1 in 5,000","Value":"Jackpot (~5,000+)"},
  {"Fish Name":"Hammerhead Shark","Rarity":"Legendary","Location":"The Ocean","Chance":"1 in 7,500","Value":"Jackpot (~7,500+)"},
  {"Fish Name":"Swordfish","Rarity":"Legendary","Location":"The Ocean","Chance":"1 in 8,000","Value":"Jackpot (~8,000+)"},
  {"Fish Name":"Ghost Shark","Rarity":"Mythic","Location":"The Ocean","Chance":"1 in 150,000","Value":"Jackpot (~75,000+)"},
  {"Fish Name":"Megalodon","Rarity":"Mythic","Location":"The Ocean","Chance":"1 in 200,000","Value":"Jackpot (~100,000+)"},
  {"Fish Name":"Worm Fish","Rarity":"Secret","Location":"The Ocean","Chance":"???","Value":"Invaluable"},

  {"Fish Name":"Reef Chromis","Rarity":"Common","Location":"Kohana Island","Chance":"1 in 2","Value":"Low (~5)"},
  {"Fish Name":"Jennifer Dottyback","Rarity":"Common","Location":"Kohana Island","Chance":"1 in 4","Value":"Low (~8)"},
  {"Fish Name":"Zoster Butterfly","Rarity":"Common","Location":"Kohana Island","Chance":"1 in 5","Value":"Low (~10)"},
  {"Fish Name":"Boa Angelfish","Rarity":"Common","Location":"Kohana Island","Chance":"1 in 8","Value":"Low (~12)"},
  {"Fish Name":"Shrimp Goby","Rarity":"Uncommon","Location":"Kohana Island","Chance":"1 in 15","Value":"Medium (~25)"},
  {"Fish Name":"Blumato Clownfish","Rarity":"Uncommon","Location":"Kohana Island","Chance":"1 in 20","Value":"Medium (~30)"},
  {"Fish Name":"Banded Butterfly","Rarity":"Uncommon","Location":"Kohana Island","Chance":"1 in 25","Value":"Medium (~35)"},
  {"Fish Name":"Fire Goby","Rarity":"Rare","Location":"Kohana Island","Chance":"1 in 50","Value":"High (~100)"},
  {"Fish Name":"Kau Cardinal","Rarity":"Rare","Location":"Kohana Island","Chance":"1 in 75","Value":"High (~120)"},
  {"Fish Name":"Sushi Cardinal","Rarity":"Rare","Location":"Kohana Island","Chance":"1 in 100","Value":"High (~150)"},
  {"Fish Name":"Longnose Butterfly","Rarity":"Epic","Location":"Kohana Island","Chance":"1 in 1,500","Value":"Very High (~2,000)"},
  {"Fish Name":"Bumblebee Grouper","Rarity":"Legendary","Location":"Kohana Island","Chance":"1 in 5,000","Value":"Jackpot (~6,000)"},
  {"Fish Name":"Lobster","Rarity":"Legendary","Location":"Kohana Island","Chance":"1 in 25,000","Value":"Jackpot (~10,000)"},
  {"Fish Name":"Loggerhead Turtle","Rarity":"Mythic","Location":"Kohana Island","Chance":"1 in 55,000","Value":"Jackpot (~40,000)"},
  {"Fish Name":"Prismy Seahorse","Rarity":"Mythic","Location":"Kohana Island","Chance":"1 in 88,000","Value":"Jackpot (~60,000)"},
  {"Fish Name":"Lochness Monster","Rarity":"Secret","Location":"Kohana Island","Chance":"Event Only","Value":"Invaluable"},

  {"Fish Name":"Volcanic Basslet","Rarity":"Common","Location":"Kohana Volcano","Chance":"1 in 2","Value":"Medium (~20)"},
  {"Fish Name":"Magma Goby","Rarity":"Uncommon","Location":"Kohana Volcano","Chance":"1 in 55","Value":"Medium (~50)"},
  {"Fish Name":"Lava Butterfly","Rarity":"Uncommon","Location":"Kohana Volcano","Chance":"1 in 125","Value":"High (~100)"},
  {"Fish Name":"Rockform Cardinal","Rarity":"Rare","Location":"Kohana Volcano","Chance":"1 in 250","Value":"High (~300)"},
  {"Fish Name":"Volsail Tang","Rarity":"Rare","Location":"Kohana Volcano","Chance":"1 in 300","Value":"High (~350)"},
  {"Fish Name":"Firecoal Damsel","Rarity":"Epic","Location":"Kohana Volcano","Chance":"1 in 2,500","Value":"Very High (~3,000)"},
  {"Fish Name":"Lavafin Tuna","Rarity":"Legendary","Location":"Kohana Volcano","Chance":"1 in 9,999","Value":"Jackpot (~12,000)"},
  {"Fish Name":"Blueflame Ray","Rarity":"Mythic","Location":"Kohana Volcano","Chance":"1 in 93,000","Value":"Jackpot (~80,000)"},
  {"Fish Name":"Magma Shark","Rarity":"Mythic","Location":"Kohana Volcano","Chance":"1 in 200,000","Value":"Jackpot (~150,000)"},

  {"Fish Name":"Corazon Damsel","Rarity":"Common","Location":"Coral Reef Island","Chance":"1 in 3","Value":"Low (~8)"},
  {"Fish Name":"Speckled Butterfly","Rarity":"Common","Location":"Coral Reef Island","Chance":"1 in 5","Value":"Low (~10)"},
  {"Fish Name":"Sail Tang","Rarity":"Common","Location":"Coral Reef Island","Chance":"1 in 8","Value":"Low (~12)"},
  {"Fish Name":"Orangy Goby","Rarity":"Uncommon","Location":"Coral Reef Island","Chance":"1 in 15","Value":"Medium (~20)"},
  {"Fish Name":"Salmon","Rarity":"Uncommon","Location":"Coral Reef Island","Chance":"1 in 20","Value":"Medium (~25)"},
  {"Fish Name":"Tricolore Butterfly","Rarity":"Uncommon","Location":"Coral Reef Island","Chance":"1 in 25","Value":"Medium (~30)"},
  {"Fish Name":"Maze Angelfish","Rarity":"Rare","Location":"Coral Reef Island","Chance":"1 in 50","Value":"High (~100)"},
  {"Fish Name":"White Clownfish","Rarity":"Rare","Location":"Coral Reef Island","Chance":"1 in 75","Value":"High (~120)"},
  {"Fish Name":"Scissortail Dartfish","Rarity":"Rare","Location":"Coral Reef Island","Chance":"1 in 100","Value":"High (~150)"},
  {"Fish Name":"Panther Grouper","Rarity":"Epic","Location":"Coral Reef Island","Chance":"1 in 500","Value":"Very High (~1,000)"},
  {"Fish Name":"Domino Damsel","Rarity":"Epic","Location":"Coral Reef Island","Chance":"1 in 800","Value":"Very High (~1,200)"},
  {"Fish Name":"Starjam Tang","Rarity":"Epic","Location":"Coral Reef Island","Chance":"1 in 1,000","Value":"Very High (~1,500)"},
  {"Fish Name":"Greenbee Grouper","Rarity":"Legendary","Location":"Coral Reef Island","Chance":"1 in 5,000","Value":"Jackpot (~6,000)"},
  {"Fish Name":"Blue Lobster","Rarity":"Legendary","Location":"Coral Reef Island","Chance":"1 in 8,000","Value":"Jackpot (~9,000)"},
  {"Fish Name":"Hawks Turtle","Rarity":"Mythic","Location":"Coral Reef Island","Chance":"1 in 30,000","Value":"Jackpot (~35,000)"},
  {"Fish Name":"Monster Shark","Rarity":"Mythic","Location":"Coral Reef Island","Chance":"1 in 80,000","Value":"Jackpot (~70,000)"},
  {"Fish Name":"Eerie Shark","Rarity":"Secret","Location":"Coral Reef Island","Chance":"???","Value":"Invaluable"},

  {"Fish Name":"Ash Basslet","Rarity":"Common","Location":"Esoteric Depths","Chance":"1 in 3","Value":"Medium (~20)"},
  {"Fish Name":"Rockfish","Rarity":"Common","Location":"Esoteric Depths","Chance":"1 in 5","Value":"Medium (~25)"},
  {"Fish Name":"Coal Tang","Rarity":"Uncommon","Location":"Esoteric Depths","Chance":"1 in 15","Value":"Medium (~40)"},
  {"Fish Name":"Charmed Tang","Rarity":"Uncommon","Location":"Esoteric Depths","Chance":"1 in 25","Value":"Medium (~50)"},
  {"Fish Name":"Astra Damsel","Rarity":"Rare","Location":"Esoteric Depths","Chance":"1 in 60","Value":"High (~150)"},
  {"Fish Name":"Enchanted Angelfish","Rarity":"Rare","Location":"Esoteric Depths","Chance":"1 in 100","Value":"High (~200)"},
  {"Fish Name":"Magic Tang","Rarity":"Epic","Location":"Esoteric Depths","Chance":"1 in 500","Value":"Very High (~1,000)"},
  {"Fish Name":"Abyss Seahorse","Rarity":"Epic","Location":"Esoteric Depths","Chance":"1 in 1,200","Value":"Very High (~2,000)"},
  {"Fish Name":"Brown Megalodon","Rarity":"Legendary","Location":"Esoteric Depths","Chance":"1 in 8,000","Value":"Jackpot (~10,000)"},
  {"Fish Name":"Armored Shark","Rarity":"Mythic","Location":"Esoteric Depths","Chance":"1 in 120,000","Value":"Jackpot (~90,000)"},

  {"Fish Name":"Orange Basslet","Rarity":"Common","Location":"Tropical Grove","Chance":"1 in 3","Value":"Low (~10)"},
  {"Fish Name":"Racoon Butterfly Fish","Rarity":"Uncommon","Location":"Tropical Grove","Chance":"1 in 15","Value":"Medium (~30)"},
  {"Fish Name":"Scissortail Dartfish","Rarity":"Uncommon","Location":"Tropical Grove","Chance":"1 in 25","Value":"Medium (~40)"},
  {"Fish Name":"Pufferfish","Rarity":"Rare","Location":"Tropical Grove","Chance":"1 in 60","Value":"High (~120)"},
  {"Fish Name":"Thresher Shark","Rarity":"Legendary","Location":"Tropical Grove","Chance":"1 in 4,000","Value":"Jackpot (~5,000)"},
  {"Fish Name":"Great Whale","Rarity":"Mythic","Location":"Tropical Grove","Chance":"1 in 50,000","Value":"Jackpot (~45,000)"},

  {"Fish Name":"Pilot Fish","Rarity":"Common","Location":"Crater Island","Chance":"1 in 3","Value":"Low (~10)"},
  {"Fish Name":"Red Snapper","Rarity":"Common","Location":"Crater Island","Chance":"1 in 5","Value":"Low (~15)"},
  {"Fish Name":"Parrot Fish","Rarity":"Uncommon","Location":"Crater Island","Chance":"1 in 15","Value":"Medium (~30)"},
  {"Fish Name":"Blackcap Basslet","Rarity":"Uncommon","Location":"Crater Island","Chance":"1 in 20","Value":"Medium (~40)"},
  {"Fish Name":"Catfish","Rarity":"Uncommon","Location":"Crater Island","Chance":"1 in 30","Value":"Medium (~50)"},
  {"Fish Name":"Sheepshead Fish","Rarity":"Rare","Location":"Crater Island","Chance":"1 in 75","Value":"High (~150)"},
  {"Fish Name":"Coney Fish","Rarity":"Rare","Location":"Crater Island","Chance":"1 in 100","Value":"High (~200)"},
  {"Fish Name":"Silver Tuna","Rarity":"Legendary","Location":"Crater Island","Chance":"1 in 6,000","Value":"Jackpot (~7,000)"},
  {"Fish Name":"Axolotl","Rarity":"Mythic","Location":"Crater Island","Chance":"1 in 45,000","Value":"Jackpot (~50,000)"},

  {"Fish Name":"Dead Fish","Rarity":"Common","Location":"Lost Isle","Chance":"1 in 2","Value":"Low (~5)"},
  {"Fish Name":"Skeleton Fish","Rarity":"Common","Location":"Lost Isle","Chance":"1 in 4","Value":"Low (~10)"},
  {"Fish Name":"Swordfish","Rarity":"Uncommon","Location":"Lost Isle","Chance":"1 in 15","Value":"Medium (~40)"},
  {"Fish Name":"Spotted Lantern Fish","Rarity":"Uncommon","Location":"Lost Isle","Chance":"1 in 25","Value":"Medium (~50)"},
  {"Fish Name":"Electric Eel","Rarity":"Rare","Location":"Lost Isle","Chance":"1 in 60","Value":"High (~150)"},
  {"Fish Name":"Boar Fish","Rarity":"Rare","Location":"Lost Isle","Chance":"1 in 80","Value":"High (~180)"},
  {"Fish Name":"Dark Eel","Rarity":"Rare","Location":"Lost Isle","Chance":"1 in 100","Value":"High (~200)"},
  {"Fish Name":"Viperfish","Rarity":"Epic","Location":"Lost Isle","Chance":"1 in 400","Value":"Very High (~1,000)"},
  {"Fish Name":"Jellyfish","Rarity":"Epic","Location":"Lost Isle","Chance":"1 in 600","Value":"Very High (~1,500)"},
  {"Fish Name":"Vampire Squid","Rarity":"Epic","Location":"Lost Isle","Chance":"1 in 800","Value":"Very High (~1,800)"},
  {"Fish Name":"Angler Fish","Rarity":"Legendary","Location":"Lost Isle","Chance":"1 in 3,000","Value":"Jackpot (~5,000)"},
  {"Fish Name":"Deep Sea Crab","Rarity":"Legendary","Location":"Lost Isle","Chance":"1 in 4,500","Value":"Jackpot (~8,000)"},
  {"Fish Name":"Giant Squid","Rarity":"Legendary","Location":"Lost Isle","Chance":"1 in 6,000","Value":"Jackpot (~9,000)"},
  {"Fish Name":"Panther Eel","Rarity":"Legendary","Location":"Lost Isle","Chance":"1 in 7,000","Value":"Jackpot (~9,500)"},
  {"Fish Name":"Blob Fish","Rarity":"Mythic","Location":"Lost Isle","Chance":"1 in 50,000","Value":"Jackpot (~50,000)"},
  {"Fish Name":"Kraken","Rarity":"Mythic","Location":"Lost Isle","Chance":"1 in 100,000","Value":"Jackpot (~100,000)"},
  {"Fish Name":"King Crab","Rarity":"Secret","Location":"Lost Isle","Chance":"???","Value":"Invaluable"},
  {"Fish Name":"Queen Crab","Rarity":"Secret","Location":"Lost Isle","Chance":"???","Value":"Invaluable"},
  {"Fish Name":"Robot Kraken","Rarity":"Secret","Location":"Lost Isle","Chance":"Event/Quest","Value":"Invaluable"},

  {"Fish Name":"Ancient Arapiama","Rarity":"Common","Location":"Ancient Jungle","Chance":"1 in 3","Value":"Medium (~25)"},
  {"Fish Name":"Abyshorn Fish","Rarity":"Common","Location":"Ancient Jungle","Chance":"1 in 5","Value":"Medium (~30)"},
  {"Fish Name":"Red Goatfish","Rarity":"Uncommon","Location":"Ancient Jungle","Chance":"1 in 15","Value":"Medium (~50)"},
  {"Fish Name":"Zebra Snakehead","Rarity":"Uncommon","Location":"Ancient Jungle","Chance":"1 in 20","Value":"Medium (~60)"},
  {"Fish Name":"Freshwater Piranha","Rarity":"Rare","Location":"Ancient Jungle","Chance":"1 in 60","Value":"High (~150)"},
  {"Fish Name":"Mossy Fishlet","Rarity":"Rare","Location":"Ancient Jungle","Chance":"1 in 80","Value":"High (~180)"},
  {"Fish Name":"Drippy Tucunare","Rarity":"Rare","Location":"Ancient Jungle","Chance":"1 in 100","Value":"High (~200)"},
  {"Fish Name":"Parrot Fish","Rarity":"Rare","Location":"Ancient Jungle","Chance":"1 in 120","Value":"High (~220)"},
  {"Fish Name":"Sail Fish","Rarity":"Epic","Location":"Ancient Jungle","Chance":"1 in 500","Value":"Very High (~1,200)"},
  {"Fish Name":"Water Snake","Rarity":"Epic","Location":"Ancient Jungle","Chance":"1 in 700","Value":"Very High (~1,500)"},
  {"Fish Name":"Thinker Fish","Rarity":"Epic","Location":"Ancient Jungle","Chance":"1 in 900","Value":"Very High (~1,800)"},
  {"Fish Name":"Viperangler Fish","Rarity":"Legendary","Location":"Ancient Jungle","Chance":"1 in 4,000","Value":"Jackpot (~6,000)"},
  {"Fish Name":"Spear Guardian","Rarity":"Legendary","Location":"Ancient Jungle","Chance":"1 in 6,000","Value":"Jackpot (~8,000)"},
  {"Fish Name":"Goliath Tiger","Rarity":"Legendary","Location":"Ancient Jungle","Chance":"1 in 8,000","Value":"Jackpot (~10,000)"},
  {"Fish Name":"Skeleton Angler Fish","Rarity":"Mythic","Location":"Ancient Jungle","Chance":"1 in 50,000","Value":"Jackpot (~50,000)"},
  {"Fish Name":"Moai Statue Fish","Rarity":"Mythic","Location":"Ancient Jungle","Chance":"1 in 75,000","Value":"Jackpot (~80,000)"},
  {"Fish Name":"Temple Spokes Tuna","Rarity":"Secret","Location":"Ancient Jungle","Chance":"Quest","Value":"Invaluable"},

  {"Fish Name":"Classic Goldfish","Rarity":"Common","Location":"Classic Island","Chance":"1 in 3","Value":"Medium (~20)"},
  {"Fish Name":"Guest Guppy","Rarity":"Common","Location":"Classic Island","Chance":"1 in 5","Value":"Medium (~25)"},
  {"Fish Name":"Builderman Guppy","Rarity":"Uncommon","Location":"Classic Island","Chance":"1 in 15","Value":"High (~80)"},
  {"Fish Name":"Violet Divafish","Rarity":"Uncommon","Location":"Classic Island","Chance":"1 in 20","Value":"High (~100)"},
  {"Fish Name":"Leaf Fin","Rarity":"Uncommon","Location":"Classic Island","Chance":"1 in 25","Value":"High (~110)"},
  {"Fish Name":"Cantelope Puffer","Rarity":"Rare","Location":"Classic Island","Chance":"1 in 60","Value":"High (~200)"},
  {"Fish Name":"Beach Ball","Rarity":"Rare","Location":"Classic Island","Chance":"1 in 80","Value":"High (~250)"},
  {"Fish Name":"Lady Luminelle","Rarity":"Rare","Location":"Classic Island","Chance":"1 in 100","Value":"High (~300)"},
  {"Fish Name":"Angry Rocky","Rarity":"Epic","Location":"Classic Island","Chance":"1 in 400","Value":"Very High (~1,500)"},
  {"Fish Name":"Yellow Spinefin","Rarity":"Epic","Location":"Classic Island","Chance":"1 in 500","Value":"Very High (~1,800)"},
  {"Fish Name":"Happy Sunfish","Rarity":"Epic","Location":"Classic Island","Chance":"1 in 600","Value":"Very High (~2,000)"},
  {"Fish Name":"Tree Frog","Rarity":"Legendary","Location":"Classic Island","Chance":"1 in 3,000","Value":"Jackpot (~8,000)"},
  {"Fish Name":"Gumball Whale","Rarity":"Legendary","Location":"Classic Island","Chance":"1 in 5,000","Value":"Jackpot (~10,000)"},
  {"Fish Name":"Steelfin Marlin","Rarity":"Legendary","Location":"Classic Island","Chance":"1 in 7,000","Value":"Jackpot (~12,000)"},
  {"Fish Name":"Classic Dorhey Tang","Rarity":"Mythic","Location":"Classic Island","Chance":"1 in 50,000","Value":"Jackpot (~60,000)"},
  {"Fish Name":"Ancient Crawler","Rarity":"Mythic","Location":"Classic Island","Chance":"1 in 80,000","Value":"Jackpot (~80,000)"},
  {"Fish Name":"Studded Dolphin","Rarity":"Mythic","Location":"Classic Island","Chance":"1 in 100,000","Value":"Jackpot (~100,000)"},
  {"Fish Name":"Hacker Shark","Rarity":"Secret","Location":"Classic Island","Chance":"1 in 500,000","Value":"Invaluable"},
  {"Fish Name":"Retro Maja","Rarity":"Secret","Location":"Classic Island","Chance":"Boss/Event","Value":"Invaluable"}
];

/**
 * Helper function to generate fish slug from fish name
 * Lowercase, replace spaces with hyphens, remove punctuation except existing hyphens
 */
export function getFishSlug(fishName: string): string {
  return fishName
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove punctuation except hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-'); // Replace multiple hyphens with single hyphen
}

/**
 * Helper function to generate location slug from location name
 */
export function getLocationSlug(location: string): string {
  return location
    .toLowerCase()
    .replace(/\s+/g, '-');
}

/**
 * Helper function to generate rarity slug from rarity name
 */
export function getRaritySlug(rarity: string): string {
  return rarity.toLowerCase();
}

/**
 * Get all unique locations from the dataset
 */
export function getUniqueLocations(): string[] {
  const locations = new Set(fishData.map(fish => fish.Location));
  return Array.from(locations).sort();
}

/**
 * Get all unique rarities from the dataset
 */
export function getUniqueRarities(): string[] {
  const rarities = new Set(fishData.map(fish => fish.Rarity));
  // Return in order: Common, Uncommon, Rare, Epic, Legendary, Mythic, Secret
  const order = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic', 'Secret'];
  return order.filter(r => rarities.has(r));
}

/**
 * Get fish by location
 */
export function getFishByLocation(location: string): FishEntry[] {
  return fishData.filter(fish => fish.Location === location);
}

/**
 * Get fish by rarity
 */
export function getFishByRarity(rarity: string): FishEntry[] {
  return fishData.filter(fish => fish.Rarity === rarity);
}

/**
 * Get all occurrences of a fish by name (exact match)
 * Some fish appear in multiple locations
 */
export function getFishOccurrences(fishName: string): FishEntry[] {
  return fishData.filter(fish => fish["Fish Name"] === fishName);
}

/**
 * Get secret fish only
 */
export function getSecretFish(): FishEntry[] {
  return fishData.filter(fish => fish.Rarity === 'Secret');
}

/**
 * Parse chance string to numeric value for sorting
 * Returns null for non-numeric chances (???, Event Only, etc.)
 */
export function parseChance(chance: string): number | null {
  const match = chance.match(/^1 in ([\d,]+)$/);
  if (match) {
    return parseInt(match[1].replace(/,/g, ''));
  }
  return null;
}
