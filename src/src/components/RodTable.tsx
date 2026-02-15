/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ROD TABLE COMPONENT — REUSABLE DATABASE TABLE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Displays fishing rod data in a sortable, filterable, searchable table format.
 * 
 * FEATURES:
 * - Search by rod name (client-side)
 * - Filter by type
 * - Sort by: Luck, Speed, Price, Name
 * - Responsive table design
 * - Links to rod detail pages
 */

import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Search, ArrowUpDown } from 'lucide-react';
import { RodEntry, getRodSlug, getUniqueRodTypes } from '../data/rodData';
import Badge from './Badge';

interface RodTableProps {
  data: RodEntry[];
  showTypeFilter?: boolean;
  defaultType?: string;
}

export default function RodTable({ 
  data, 
  showTypeFilter = true,
  defaultType = ''
}: RodTableProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState(defaultType);
  const [sortBy, setSortBy] = useState<'luck' | 'speed' | 'price' | 'name'>('name');

  const types = useMemo(() => getUniqueRodTypes(), []);

  // Helper to parse numeric values from strings like "50%", "1.50K", "1M", "Free", "Robux", "Quest"
  const parseNumeric = (value: string): number => {
    if (value === 'Free') return 0;
    if (value === 'Robux' || value === 'Quest') return 999999999; // Put at end
    
    // Remove % sign
    let num = value.replace('%', '');
    
    // Handle K (thousands)
    if (num.includes('K')) {
      return parseFloat(num.replace('K', '')) * 1000;
    }
    
    // Handle M (millions)
    if (num.includes('M')) {
      return parseFloat(num.replace('M', '')) * 1000000;
    }
    
    return parseFloat(num) || 0;
  };

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = data;

    // Apply search filter (rod name only)
    if (searchQuery) {
      filtered = filtered.filter(rod =>
        rod["Rod Name"].toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply type filter
    if (typeFilter) {
      filtered = filtered.filter(rod => rod.Type === typeFilter);
    }

    // Apply sorting
    const sorted = [...filtered];
    if (sortBy === 'luck') {
      sorted.sort((a, b) => parseNumeric(b.Luck) - parseNumeric(a.Luck));
    } else if (sortBy === 'speed') {
      sorted.sort((a, b) => parseNumeric(b.Speed) - parseNumeric(a.Speed));
    } else if (sortBy === 'price') {
      sorted.sort((a, b) => parseNumeric(a.Price) - parseNumeric(b.Price));
    } else if (sortBy === 'name') {
      sorted.sort((a, b) => a["Rod Name"].localeCompare(b["Rod Name"]));
    }

    return sorted;
  }, [data, searchQuery, typeFilter, sortBy]);

  // Get type badge variant
  const getTypeVariant = (type: string): 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'default' => {
    const map: Record<string, 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic'> = {
      'Common': 'common',
      'Uncommon': 'uncommon',
      'Rare': 'rare',
      'Epic': 'epic',
      'Legendary': 'legendary',
      'Mythic': 'mythic',
    };
    return map[type] || 'default';
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
            placeholder="Search rods by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>

        {/* Filters and Sort Row */}
        <div className="flex flex-wrap gap-3">
          {/* Type Filter */}
          {showTypeFilter && (
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
            >
              <option value="">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          )}

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'luck' | 'speed' | 'price' | 'name')}
            className="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
          >
            <option value="name">Sort by Name (A-Z)</option>
            <option value="luck">Sort by Luck (Highest First)</option>
            <option value="speed">Sort by Speed (Highest First)</option>
            <option value="price">Sort by Price (Lowest First)</option>
          </select>

          {/* Results Count */}
          <div className="flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-300 text-sm">
            <ArrowUpDown className="w-4 h-4 mr-2" />
            {filteredAndSortedData.length} rods
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-slate-900/30 border border-cyan-500/20 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-cyan-500/30 bg-slate-800/50">
              <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-300">Rod Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-300">Type</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-300">Luck</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-300">Speed</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-300">Kg</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-300">Price</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-300">Location</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-cyan-300">Notes & Requirements</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedData.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-gray-500">
                  No rods found matching your criteria
                </td>
              </tr>
            ) : (
              filteredAndSortedData.map((rod, index) => (
                <tr 
                  key={index} 
                  className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors"
                >
                  {/* Rod Name */}
                  <td className="px-4 py-3">
                    <Link 
                      to={`/fishing-rods/${getRodSlug(rod["Rod Name"])}`}
                      className="text-white hover:text-cyan-400 transition-colors font-medium"
                    >
                      {rod["Rod Name"]}
                    </Link>
                  </td>

                  {/* Type */}
                  <td className="px-4 py-3">
                    <Badge variant={getTypeVariant(rod.Type)}>
                      {rod.Type}
                    </Badge>
                  </td>

                  {/* Luck */}
                  <td className="px-4 py-3 text-gray-300 text-sm">
                    {rod.Luck}
                  </td>

                  {/* Speed */}
                  <td className="px-4 py-3 text-gray-300 text-sm">
                    {rod.Speed}
                  </td>

                  {/* Kg */}
                  <td className="px-4 py-3 text-gray-300 text-sm">
                    {rod.Kg}
                  </td>

                  {/* Price */}
                  <td className="px-4 py-3 text-gray-300 text-sm">
                    {rod.Price}
                  </td>

                  {/* Location */}
                  <td className="px-4 py-3 text-gray-400 text-sm">
                    {rod.Location}
                  </td>

                  {/* Notes */}
                  <td className="px-4 py-3 text-gray-400 text-sm max-w-xs">
                    <div className="line-clamp-2" title={rod["Notes & Requirements"]}>
                      {rod["Notes & Requirements"]}
                    </div>
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
