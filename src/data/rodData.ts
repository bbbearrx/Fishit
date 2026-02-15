/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FISHING RODS DATABASE — AUTHORITATIVE DATASET
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * CRITICAL: This dataset is the SINGLE SOURCE OF TRUTH for all fishing rod data.
 * 
 * DO NOT:
 * - Modify rod names, spellings (keep "Demascus Rod", "Fish' It", "Trav. Merchant", etc.)
 * - Change type names
 * - Alter stat values
 * - Change price or location text
 * - Modify notes text (including typos like "Road" instead of "Rod")
 * 
 * This data is used by:
 * - Fishing Rods page (/fishing-rods)
 * - Rod detail pages (/fishing-rods/[rod-slug])
 */

export interface RodEntry {
  "Rod Name": string;
  "Type": string;
  "Luck": string;
  "Speed": string;
  "Kg": string;
  "Price": string;
  "Location": string;
  "Notes & Requirements": string;
}

export const rodData: RodEntry[] = [
  {"Rod Name":"Starter Rod","Type":"Common","Luck":"0","Speed":"0","Kg":"10","Price":"Free","Location":"Auto-Unlock","Notes & Requirements":"Received immediately upon joining."},
  {"Rod Name":"Luck Rod","Type":"Common","Luck":"50%","Speed":"2%","Kg":"15","Price":"325","Location":"Rod Store","Notes & Requirements":"A small luck boost for beginners."},
  {"Rod Name":"Carbon Rod","Type":"Common","Luck":"30%","Speed":"4%","Kg":"20","Price":"750","Location":"Rod Store","Notes & Requirements":"The XP King. Low luck, but fast. Best for grinding to Lvl 50."},
  {"Rod Name":"Toy Rod","Type":"Common","Luck":"30%","Speed":"3%","Kg":"18","Price":"Free","Location":"Group Reward","Notes & Requirements":"Must Like & Join the Community Group."},
  {"Rod Name":"Grass Rod","Type":"Uncommon","Luck":"55%","Speed":"5%","Kg":"250","Price":"1.50K","Location":"Rod Store","Notes & Requirements":"Decent upgrade for weight capacity."},
  {"Rod Name":"Demascus Rod","Type":"Uncommon","Luck":"80%","Speed":"4%","Kg":"400","Price":"3K","Location":"Rod Store","Notes & Requirements":"Strong durability for mid-game."},
  {"Rod Name":"Ice Rod","Type":"Uncommon","Luck":"60%","Speed":"7%","Kg":"750","Price":"5K","Location":"Rod Store","Notes & Requirements":"Good for heavy fish."},
  {"Rod Name":"Lava Rod","Type":"Uncommon","Luck":"30%","Speed":"2%","Kg":"100","Price":"Free","Location":"Kohana Volcano","Notes & Requirements":"Talk to the fisherman inside the volcano."},
  {"Rod Name":"Lucky Rod","Type":"Rare","Luck":"140%","Speed":"7%","Kg":"5K","Price":"15K","Location":"Rod Store","Notes & Requirements":"Great for catching Rare fish."},
  {"Rod Name":"Midnight Rod","Type":"Rare","Luck":"100%","Speed":"10%","Kg":"10K","Price":"50K","Location":"Rod Store","Notes & Requirements":"Balanced stats for night fishing."},
  {"Rod Name":"Steampunk Rod","Type":"Epic","Luck":"225%","Speed":"19%","Kg":"25K","Price":"215K","Location":"Rod Store","Notes & Requirements":"High speed and good luck."},
  {"Rod Name":"Chrome Rod","Type":"Epic","Luck":"280%","Speed":"23%","Kg":"90K","Price":"437K","Location":"Rod Store","Notes & Requirements":"Excellent for farming coins."},
  {"Rod Name":"Fluorescent Rod","Type":"Legendary","Luck":"300%","Speed":"23%","Kg":"160K","Price":"715K","Location":"Store / Merchant","Notes & Requirements":"Can be bought at store or Traveling Merchant."},
  {"Rod Name":"Astral Rod","Type":"Legendary","Luck":"380%","Speed":"43%","Kg":"125K","Price":"1M","Location":"Rod Store","Notes & Requirements":"High tier store rod."},
  {"Rod Name":"Hazmat Rod","Type":"Legendary","Luck":"380%","Speed":"32%","Kg":"300K","Price":"1M","Location":"Trav. Merchant","Notes & Requirements":"Only available from Traveling Merchant."},
  {"Rod Name":"Ares Rod","Type":"Mythic","Luck":"455%","Speed":"56%","Kg":"400K","Price":"3M","Location":"Tropical Grove","Notes & Requirements":"Found in the Tropical Grove area."},
  {"Rod Name":"Angler Rod","Type":"Mythic","Luck":"530%","Speed":"71%","Kg":"500K","Price":"8M","Location":"Lost Isle","Notes & Requirements":"Found on the Lost Isle."},
  {"Rod Name":"Ghostfinn Rod","Type":"Mythic","Luck":"610%","Speed":"118%","Kg":"600K","Price":"Quest","Location":"Deep Sea","Notes & Requirements":"Quest Steps:\n1. Catch 300 Rare/Epic in Treasure Room.\n2. Catch 3 Mythics at Sisyphus Statue.\n3. Catch 1 Secret at Sisyphus Statue.\n4. Earn 1M coins."},
  {"Rod Name":"Bamboo Rod","Type":"Mythic","Luck":"760%","Speed":"98%","Kg":"500K","Price":"12M","Location":"Ancient Jungle","Notes & Requirements":"End-game rod located in Ancient Jungle area."},
  {"Rod Name":"Element Rod","Type":"Secret","Luck":"1111%","Speed":"130%","Kg":"900K","Price":"Quest","Location":"Element Quest","Notes & Requirements":"Quest Steps:\n1. Must own Ghostfinn Rod.\n2. Catch 1 Secret at Ancient Jungle.\n3. Catch 1 Secret at Sacred Temple.\n4. Create 3 Transcended Stones."},
  {"Rod Name":"Angelic Rod","Type":"Gamepass","Luck":"180%","Speed":"29%","Kg":"75K","Price":"Robux","Location":"Shop","Notes & Requirements":"Premium rod. Instant unlock."},
  {"Rod Name":"Gold Rod","Type":"Gamepass","Luck":"110%","Speed":"7%","Kg":"800","Price":"Robux","Location":"Shop","Notes & Requirements":"Premium rod. Good starter boost."},
  {"Rod Name":"Hyper Rod","Type":"Gamepass","Luck":"130%","Speed":"13%","Kg":"1K","Price":"Robux","Location":"Shop","Notes & Requirements":"Premium rod. High speed focus."}
];

/**
 * Helper function to generate rod slug from rod name
 */
export function getRodSlug(rodName: string): string {
  return rodName
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove punctuation except hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-'); // Replace multiple hyphens with single hyphen
}

/**
 * Get all unique rod types from the dataset
 */
export function getUniqueRodTypes(): string[] {
  const types = new Set(rodData.map(rod => rod.Type));
  // Return in order: Common, Uncommon, Rare, Epic, Legendary, Mythic, Secret, Gamepass
  const order = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic', 'Secret', 'Gamepass'];
  return order.filter(t => types.has(t));
}

/**
 * Get rods by type
 */
export function getRodsByType(type: string): RodEntry[] {
  return rodData.filter(rod => rod.Type === type);
}

/**
 * Get all occurrences of a rod by name (exact match)
 */
export function getRodByName(rodName: string): RodEntry | undefined {
  return rodData.find(rod => rod["Rod Name"] === rodName);
}

/**
 * Get rod by slug
 */
export function getRodBySlug(slug: string): RodEntry | undefined {
  return rodData.find(rod => getRodSlug(rod["Rod Name"]) === slug);
}
