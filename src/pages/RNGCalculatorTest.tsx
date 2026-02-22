/**
 * MINIMAL TEST VERSION - Finding the error
 */

import { useState } from 'react';
import { fishData } from '../data/fishData';

export default function RNGCalculatorTest() {
  console.log('🧪 TEST: Component starting to render');
  console.log('🧪 TEST: fishData exists?', !!fishData);
  console.log('🧪 TEST: fishData length:', fishData.length);
  console.log('🧪 TEST: fishData[0]:', fishData[0]);
  
  const [selectedFish] = useState(fishData[0]);
  
  console.log('🧪 TEST: State initialized, selectedFish:', selectedFish);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-white mb-4">
          🧪 RNG Calculator Test
        </h1>
        <p className="text-xl text-cyan-400 mb-8">
          If you see this, the basic component works!
        </p>
        <div className="bg-slate-800/50 p-6 rounded-lg">
          <p className="text-white">Selected Fish: {selectedFish?.['Fish Name'] || 'None'}</p>
          <p className="text-cyan-300">Total Fish in Database: {fishData.length}</p>
        </div>
      </div>
    </div>
  );
}
