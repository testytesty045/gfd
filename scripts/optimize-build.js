/**
 * Script to run optimizations on the build
 * This script can be run with `node scripts/optimize-build.js`
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const chalk = require('chalk') || { green: t => t, red: t => t, yellow: t => t, blue: t => t };

console.log(chalk.blue('🔍 Starting build optimization...'));

// Run the build with analyzer
console.log(chalk.yellow('1️⃣ Building with bundle analyzer...'));
try {
  execSync('cross-env ANALYZE=true npm run build', { stdio: 'inherit' });
  console.log(chalk.green('✅ Build successful! Bundle analysis report generated.'));
} catch (err) {
  console.error(chalk.red('❌ Build failed.'), err);
  process.exit(1);
}

// Check for bundle size
console.log(chalk.yellow('2️⃣ Checking bundle sizes...'));
const buildStats = path.join(__dirname, '../build/bundle-stats.json');
if (fs.existsSync(buildStats)) {
  const stats = JSON.parse(fs.readFileSync(buildStats, 'utf8'));
  
  // Log the largest chunks
  console.log(chalk.blue('Largest chunks:'));
  const chunks = stats.assets
    .filter(a => a.name.endsWith('.js'))
    .sort((a, b) => b.size - a.size)
    .slice(0, 5);
  
  chunks.forEach((chunk, i) => {
    const size = (chunk.size / 1024).toFixed(2);
    console.log(`${i+1}. ${chunk.name}: ${size} KB`);
  });
}

// Suggested next steps
console.log(chalk.blue('\n🚀 Next steps for optimization:'));
console.log(`
1. Check the bundle analysis report and look for:
   - Large modules
   - Duplicate modules
   - Unused code

2. For duplicate modules, update the aliases in craco.config.js:
   Example:
   alias: {
     'problematic-module': path.resolve('./node_modules/problematic-module')
   }

3. Use code splitting for large pages:
   - Import components using the lazyLoad utility
   - Split heavy routes using React.lazy
   
4. Remove unused dependencies from package.json

5. Run the build again to see improvements:
   npm run build
`);

console.log(chalk.green('✨ Optimization suggestions complete!')); 