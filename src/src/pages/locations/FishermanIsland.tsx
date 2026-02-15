/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FISHERMAN ISLAND LOCATION PAGE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROUTE: /fish-database/fisherman-island
 * 
 * PURPOSE:
 * Displays all fish found at Fisherman Island location with exact stats.
 * 
 * DATA: Uses fishData.ts, filtered by Location = "Fisherman Island"
 */

import { MapPin } from 'lucide-react';
import Card from '../../components/Card';
import Badge from '../../components/Badge';
import SectionHeader from '../../components/SectionHeader';
import FishTable from '../../components/FishTable';
import { getFishByLocation, getUniqueLocations, getLocationSlug } from '../../data/fishData';
import { Link } from 'react-router';

export default function FishermanIsland() {
  const locationName = "Fisherman Island";
  const fish = getFishByLocation(locationName);
  const allLocations = getUniqueLocations().filter(loc => loc !== locationName);
  
  // Get unique rarities present in this location
  const raritiesInLocation = [...new Set(fish.map(f => f.Rarity))];
  const rarityOrder = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic', 'Secret'];
  const sortedRarities = raritiesInLocation.sort((a, b) => 
    rarityOrder.indexOf(a) - rarityOrder.indexOf(b)
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-950 via-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm">
            <Link to="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
            <span className="text-gray-500 mx-2">›</span>
            <Link to="/fish-database" className="text-cyan-400 hover:text-cyan-300">Fish Database</Link>
            <span className="text-gray-500 mx-2">›</span>
            <span className="text-gray-400">{locationName}</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {locationName}
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mb-8">
            All fish available at {locationName}. Browse exact drop rates and values for each fish at this location.
          </p>

          {/* Location Stats */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg px-6 py-3">
              <div className="text-3xl font-bold text-cyan-400">{fish.length}</div>
              <div className="text-sm text-gray-400">Fish at this location</div>
            </div>
            <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg px-6 py-3">
              <div className="flex flex-wrap gap-1">
                {sortedRarities.map(rarity => (
                  <Badge 
                    key={rarity}
                    variant={
                      rarity === 'Common' ? 'common' :
                      rarity === 'Uncommon' ? 'uncommon' :
                      rarity === 'Rare' ? 'rare' :
                      rarity === 'Epic' ? 'epic' :
                      rarity === 'Legendary' ? 'legendary' :
                      rarity === 'Mythic' ? 'mythic' : 'default'
                    }
                  >
                    {rarity}
                  </Badge>
                ))}
              </div>
              <div className="text-sm text-gray-400 mt-2">Rarities present</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fish Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader 
          title={`Fish at ${locationName}`}
          subtitle="Complete list with drop chances and values"
        />

        <FishTable 
          data={fish} 
          showLocationFilter={false}
          defaultLocation={locationName}
        />
      </section>

      {/* Related Locations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader 
          title="Other Fishing Locations"
          subtitle="Explore fish from other areas"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allLocations.map(location => (
            <Link
              key={location}
              to={`/fish-database/${getLocationSlug(location)}`}
              className="block"
            >
              <Card hover className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold text-sm">
                  {location}
                </h3>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link 
            to="/fish-database"
            className="inline-block px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-lg text-cyan-400 font-semibold transition-colors"
          >
            ← Back to Full Database
          </Link>
        </div>
      </section>
    </div>
  );
}
