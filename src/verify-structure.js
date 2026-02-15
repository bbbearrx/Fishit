/**
 * Verification script to check if migration was successful
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying project structure...\n');

const requiredFiles = [
  'package.json',
  'vite.config.ts',
  'tsconfig.json',
  'tsconfig.node.json',
  'index.html',
  'README.md',
  'LICENSE',
  '.gitignore',
  'src/main.tsx',
  'src/App.tsx',
  'src/routes.ts',
  'src/styles/globals.css',
  'src/data/fishData.ts',
  'src/data/rodData.ts',
  'public/robots.txt',
  'public/sitemap.xml'
];

const requiredDirs = [
  'src',
  'src/components',
  'src/pages',
  'src/data',
  'src/styles',
  'public'
];

const shouldNotExist = [
  'components',
  'pages',
  'data',
  'styles',
  'App.tsx',
  'routes.ts'
];

let allGood = true;

// Check required files
console.log('✓ Checking required files...');
for (const file of requiredFiles) {
  if (fs.existsSync(file)) {
    console.log(`  ✓ ${file}`);
  } else {
    console.log(`  ✗ MISSING: ${file}`);
    allGood = false;
  }
}

console.log('\n✓ Checking required directories...');
for (const dir of requiredDirs) {
  if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
    console.log(`  ✓ ${dir}/`);
  } else {
    console.log(`  ✗ MISSING: ${dir}/`);
    allGood = false;
  }
}

console.log('\n✓ Checking old files are removed...');
for (const item of shouldNotExist) {
  if (!fs.existsSync(item)) {
    console.log(`  ✓ ${item} (removed)`);
  } else {
    console.log(`  ✗ STILL EXISTS: ${item} (should be removed)`);
    allGood = false;
  }
}

console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('✅ All checks passed! Project structure is correct.\n');
  console.log('Next steps:');
  console.log('  1. Run: npm install');
  console.log('  2. Run: npm run dev');
  console.log('  3. Run: npm run build\n');
} else {
  console.log('❌ Some checks failed. Please review the migration.\n');
  process.exit(1);
}
