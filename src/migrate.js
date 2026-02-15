/**
 * Fish It - Vite Project Structure Migration Script
 * 
 * This script completes the migration to a standard Vite + React structure
 * by copying all source files from root to /src and cleaning up.
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Fish It project migration...\n');

// Helper function to copy directory recursively
function copyDirRecursive(src, dest) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read source directory
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy subdirectory
      copyDirRecursive(srcPath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
      console.log(`  ✓ Copied: ${srcPath} → ${destPath}`);
    }
  }
}

// Helper function to remove directory recursively
function removeDirRecursive(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`  ✓ Removed: ${dirPath}`);
  }
}

// 1. Copy /components to /src/components
console.log('📁 Copying /components → /src/components...');
copyDirRecursive('components', 'src/components');
console.log('');

// 2. Copy /pages to /src/pages
console.log('📁 Copying /pages → /src/pages...');
copyDirRecursive('pages', 'src/pages');
console.log('');

// 3. /data and /styles already copied, skip

// 4. Delete old root-level directories
console.log('🧹 Cleaning up old directories...');
removeDirRecursive('components');
removeDirRecursive('pages');
removeDirRecursive('data');
removeDirRecursive('styles');
console.log('');

// 5. Delete old root-level files
console.log('🧹 Cleaning up old files...');
if (fs.existsSync('App.tsx')) {
  fs.unlinkSync('App.tsx');
  console.log('  ✓ Removed: App.tsx');
}
if (fs.existsSync('routes.ts')) {
  fs.unlinkSync('routes.ts');
  console.log('  ✓ Removed: routes.ts');
}
console.log('');

console.log('✅ Migration complete!\n');
console.log('📋 Next steps:');
console.log('  1. Run: npm install');
console.log('  2. Run: npm run dev');
console.log('  3. Test the application');
console.log('  4. Run: npm run build\n');
