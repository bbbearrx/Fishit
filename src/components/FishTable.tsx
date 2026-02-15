/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FISH TABLE COMPONENT — REUSABLE DATABASE TABLE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Displays fish data in a sortable, filterable, searchable table format.
 * Used on multiple pages: Fish Database, Location pages, Rarity pages, Secret Fish page.
 * 
 * FEATURES:
 * - Search by fish name (client-side)
 * - Filter by location and/or rarity
 * - Sort by: Chance (ascending), Fish Name (A-Z), Rarity (Common → Secret)
 * - Responsive table design
 * - Links to fish detail pages and location pages
 * 
 * PROPS:
 * - data: FishEntry[] - The fish data to display
 * - showLocationFilter: boolean - Whether to show location filter dropdown
 * - showRarityFilter: boolean - Whether to show rarity filter dropdown
 * - defaultLocation: string - Pre-select a location filter (optional)
 * - defaultRarity: string - Pre-select a rarity filter (optional)
 */

import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Search, ArrowUpDown } from 'lucide-react';
import { FishEntry, getFishSlug, getLocationSlug, getRaritySlug, parseChance, getUniqueLocations, getUniqueRarities } from '../data/fishData';
import Badge from './Badge';

interface FishTableProps {
  data: FishEntry[];
  showLocationFilter?: boolean;
  showRarityFilter?: boolean;
  defaultLocation?: string;
  defaultRarity?: string;
}

export default function FishTable({ 
  data, 
  showLocationFilter = true, 
  showRarityFilter = true,
  defaultLocation = '',
  defaultRarity = ''
}: FishTableProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState(defaultLocation);
  const [rarityFilter, setRarityFilter] = useState(defaultRarity);
  const [sortBy, setSortBy] = useState<'chance' | 'name' | 'rarity'>('chance');

  const locations = useMemo(() => getUniqueLocations(), []);
  const rarities = useMemo(() => getUniqueRarities(), []);

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = data;

    // Apply search filter (fish name only)
    if (searchQuery) {
      filtered = filtered.filter(fish =>
        fish["Fish Name"].toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply location filter
    if (locationFilter) {
      filtered = filtered.filter(fish => fish.Location === locationFilter);
    }

    // Apply rarity filter
    if (rarityFilter) {
      filtered = filtered.filter(fish => fish.Rarity === rarityFilter);
    }

    // Apply sorting
    const sorted = [...filtered];
    if (sortBy === 'chance') {
      sorted.sort((a, b) => {
        const chanceA = parseChance(a.Chance);
        const chanceB = parseChance(b.Chance);
        
        // Put null values (???, Event Only, etc.) at the end
        if (chanceA === null && chanceB === null) return 0;
        if (chanceA === null) return 1;
        if (chanceB === null) return -1;
        
        return chanceA - chanceB;
      });
    } else if (sortBy === 'name') {
      sorted.sort((a, b) => a["Fish Name"].localeCompare(b["Fish Name"]));
    } else if (sortBy === 'rarity') {
      const rarityOrder = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic', 'Secret'];
      sorted.sort((a, b) => {
        const indexA = rarityOrder.indexOf(a.Rarity);
        const indexB = rarityOrder.indexOf(b.Rarity);
        return indexA - indexB;
      });
    }

    return sorted;
  }, [data, searchQuery, locationFilter, rarityFilter, sortBy]);

  // Get rarity badge variant
  const getRarityVariant = (rarity: string): 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'default' => {
    const map: Record<string, 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic'> = {
      'Common': 'common',
      'Uncommon': 'uncommon',
      'Rare': 'rare',
      'Epic': 'epic',
      'Legendary': 'legendary',
      'Mythic': 'mythic',
    };
    return map[rarity] || 'default';
  };

  return (
    <div>
      {/* Filters and Search */}
      <div className="mb-6 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search fish by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>

        {/* Filters and Sort Row */}
        <div className="flex flex-wrap gap-3">
          {/* Location Filter */}
          {showLocationFilter && (
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
            >
              <option value="">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          )}

          {/* Rarity Filter */}
          {showRarityFilter && (
            <select
              value={rarityFilter}
              onChange={(e) => setRarityFilter(e.target.value)}
              className="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
            >
              <option value="">All Rarities</option>
              {rarities.map(rarity => (
                <option key={rarity} value={rarity}>{rarity}</option>
              ))}
            </select>
          )}

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'chance' | 'name' | 'rarity')}
            className="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
          >
            <option value="chance">Sort by Chance (Best First)</option>
            <option value="name">Sort by Name (A-Z)</option>
            <option value="rarity">Sort by Rarity (Common → Secret)</option>
          </select>

          {/* Results Count */}
          <div className="flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-300 text-sm">
            <ArrowUpDown className="w-4 h-4 mr-2" />
            {filteredAndSortedData.length} fish
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-slate-900/30 border border-cyan-500/20 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-cyan-500/30 bg-slate-800/50">
              <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-300">Fish Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-300">Rarity</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-300">Location</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-300">Chance</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-300">Value</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-cyan-300">View</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedData.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                  No fish found matching your criteria
                </td>
              </tr>
            ) : (
              filteredAndSortedData.map((fish, index) => (
                <tr 
                  key={index} 
                  className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors"
                >
                  {/* Fish Name */}
                  <td className="px-4 py-3">
                    <Link 
                      to={`/fish/${getFishSlug(fish["Fish Name"])}`}
                      className="text-white hover:text-cyan-400 transition-colors font-medium"
                    >
                      {fish["Fish Name"]}
                    </Link>
                  </td>

                  {/* Rarity */}
                  <td className="px-4 py-3">
                    <Badge variant={getRarityVariant(fish.Rarity)}>
                      {fish.Rarity}
                    </Badge>
                  </td>

                  {/* Location */}
                  <td className="px-4 py-3">
                    <Link 
                      to={`/fish-database/${getLocationSlug(fish.Location)}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {fish.Location}
                    </Link>
                  </td>

                  {/* Chance */}
                  <td className="px-4 py-3 text-gray-300 text-sm">
                    {fish.Chance}
                  </td>

                  {/* Value */}
                  <td className="px-4 py-3 text-gray-300 text-sm">
                    {fish.Value}
                  </td>

                  {/* View Button */}
                  <td className="px-4 py-3 text-center">
                    <Link
                      to={`/fish/${getFishSlug(fish["Fish Name"])}`}
                      className="inline-block px-3 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded text-cyan-400 text-xs transition-colors"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
