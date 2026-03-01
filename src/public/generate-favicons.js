/**
 * FAVICON GENERATION SCRIPT
 * 
 * This Node.js script generates all required favicon files for the Fish It website.
 * 
 * DEPENDENCIES:
 * npm install sharp (for PNG generation)
 * npm install to-ico (for ICO conversion)
 * 
 * USAGE:
 * node public/generate-favicons.js
 * 
 * OUTPUT:
 * - favicon-16x16.png
 * - favicon-32x32.png
 * - apple-touch-icon.png (180x180)
 * - favicon-512x512.png
 * - favicon.ico (converted from 32x32)
 */

const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

// Configuration
const OUTPUT_DIR = path.join(__dirname);
const SIZES = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 512, name: 'favicon-512x512.png' }
];

// SVG template with Fish It branding
const generateSVG = (size) => `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2563eb;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Rounded rectangle background -->
  <rect width="${size}" height="${size}" rx="${size * 0.15}" fill="url(#bg)"/>
  
  <!-- Fish icon (simplified) -->
  <g transform="translate(${size / 2}, ${size / 2}) scale(${size / 48})">
    <!-- Fish body -->
    <ellipse cx="0" cy="0" rx="12" ry="6" fill="white"/>
    
    <!-- Tail -->
    <path d="M -12 0 L -18 -6 L -18 6 Z" fill="white"/>
    
    <!-- Dorsal fin -->
    <path d="M 0 -6 L 2 -12 L 4 -6 Z" fill="white"/>
    
    <!-- Eye -->
    <circle cx="6" cy="-1" r="1.5" fill="#0f172a"/>
  </g>
</svg>
`.trim();

async function generateFavicons() {
  console.log('🐟 Generating Fish It favicons...\n');

  const pngBuffers = [];

  // Generate PNG files
  for (const { size, name } of SIZES) {
    try {
      const svg = generateSVG(size);
      const buffer = await sharp(Buffer.from(svg))
        .png()
        .toBuffer();

      const outputPath = path.join(OUTPUT_DIR, name);
      fs.writeFileSync(outputPath, buffer);
      
      console.log(`✓ Generated ${name} (${size}x${size})`);

      // Store 16x16 and 32x32 for ICO generation
      if (size === 16 || size === 32) {
        pngBuffers.push(buffer);
      }
    } catch (error) {
      console.error(`✗ Failed to generate ${name}:`, error.message);
    }
  }

  // Generate ICO file from 16x16 and 32x32 PNGs
  try {
    const icoBuffer = await toIco(pngBuffers);
    const icoPath = path.join(OUTPUT_DIR, 'favicon.ico');
    fs.writeFileSync(icoPath, icoBuffer);
    console.log('✓ Generated favicon.ico (multi-resolution)');
  } catch (error) {
    console.error('✗ Failed to generate favicon.ico:', error.message);
    console.log('  → You can convert favicon-32x32.png manually at https://www.favicon-generator.org/');
  }

  console.log('\n✅ Favicon generation complete!');
  console.log('\nFiles created in /public/:');
  console.log('  - favicon.ico');
  console.log('  - favicon-16x16.png');
  console.log('  - favicon-32x32.png');
  console.log('  - apple-touch-icon.png');
  console.log('  - favicon-512x512.png');
  console.log('\nThe favicons are ready for deployment! 🎉');
}

// Check if dependencies are installed
try {
  require.resolve('sharp');
  require.resolve('to-ico');
  generateFavicons();
} catch (error) {
  console.error('❌ Missing dependencies!');
  console.error('\nPlease install required packages:');
  console.error('  npm install sharp to-ico');
  console.error('\nThen run:');
  console.error('  node public/generate-favicons.js');
  process.exit(1);
}
