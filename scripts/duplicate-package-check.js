/**
 * Script to check for duplicate packages in node_modules
 * Run with "node scripts/duplicate-package-check.js"
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// For ESM chalk versions, create a fallback
const log = {
  blue: (text) => chalk.blue ? chalk.blue(text) : text,
  green: (text) => chalk.green ? chalk.green(text) : text,
  red: (text) => chalk.red ? chalk.red(text) : text,
  yellow: (text) => chalk.yellow ? chalk.yellow(text) : text
};

// Common packages that often have duplicates
const packagesToCheck = [
  'react',
  'react-dom',
  '@emotion/react',
  '@emotion/styled',
  'framer-motion',
  '@mui/material',
  'styled-components'
];

console.log(log.blue('🔍 Checking for duplicate packages...'));

const nodeModulesPath = path.join(__dirname, '../node_modules');
const packageLockPath = path.join(__dirname, '../package-lock.json');

// Read package-lock.json to find duplicates
try {
  const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
  const dependencies = packageLock.packages || packageLock.dependencies || {};
  
  const versions = {};
  const duplicates = [];
  
  // Check for duplicates in package-lock.json
  Object.keys(dependencies).forEach(dep => {
    const packageName = dep.replace('node_modules/', '');
    
    // Only check packages we're interested in
    const basePackageName = packageName.split('/')[0];
    if (!packagesToCheck.includes(basePackageName)) {
      return;
    }
    
    const version = dependencies[dep].version;
    if (!versions[packageName]) {
      versions[packageName] = [version];
    } else if (!versions[packageName].includes(version)) {
      versions[packageName].push(version);
      duplicates.push({ name: packageName, versions: versions[packageName] });
    }
  });
  
  // Print results
  if (duplicates.length === 0) {
    console.log(log.green('✅ No duplicates found for the packages we checked.'));
  } else {
    console.log(log.yellow('⚠️ Found duplicate packages:'));
    duplicates.forEach(dup => {
      console.log(`  ${log.red(dup.name)}: ${dup.versions.join(', ')}`);
    });
    
    console.log('\n' + log.blue('Suggestions for fixing duplicates:'));
    console.log(`
1. Use 'npm ls <package-name>' to see where duplicates are coming from
2. Add resolutions in package.json:

   "resolutions": {
     "${duplicates[0]?.name}": "${duplicates[0]?.versions[0]}"
   }

3. Try using 'npm dedupe' to remove duplicates
4. Update packages that might be causing the duplication
`);
  }
  
} catch (err) {
  console.error(log.red('❌ Error reading package-lock.json:'), err);
}

// Check physical duplicates in node_modules
console.log(log.blue('\n🔍 Checking physical duplicates in node_modules...'));

const findDuplicatePackages = () => {
  const result = {};
  
  const scanDir = (dir, packageMap = {}) => {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      // Skip dot files and directories
      if (item.startsWith('.')) continue;
      
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Check if this is a package directory (has package.json)
        const packageJsonPath = path.join(fullPath, 'package.json');
        
        if (fs.existsSync(packageJsonPath)) {
          try {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            const name = packageJson.name;
            const version = packageJson.version;
            
            // Only check packages we're interested in
            if (!packagesToCheck.includes(name.split('/')[0])) {
              continue;
            }
            
            if (!packageMap[name]) {
              packageMap[name] = [];
            }
            
            const existing = packageMap[name].find(p => p.version === version);
            if (!existing) {
              packageMap[name].push({ version, path: fullPath });
            }
            
          } catch (err) {
            // Skip on error
          }
        }
        
        // If this is node_modules, skip scanning inside it again
        if (item === 'node_modules') {
          continue;
        }
        
        // If this is a scope directory (@something), scan inside
        if (item.startsWith('@')) {
          scanDir(fullPath, packageMap);
          continue;
        }
      }
    }
    
    return packageMap;
  };
  
  return scanDir(nodeModulesPath);
};

try {
  const duplicates = findDuplicatePackages();
  
  let hasDuplicates = false;
  
  Object.entries(duplicates).forEach(([name, instances]) => {
    if (instances.length > 1) {
      hasDuplicates = true;
      console.log(log.yellow(`\nFound ${instances.length} versions of ${log.red(name)}:`));
      instances.forEach(inst => {
        console.log(`  ${inst.version} at ${inst.path}`);
      });
    }
  });
  
  if (!hasDuplicates) {
    console.log(log.green('✅ No physical duplicates found in node_modules.'));
  }
  
} catch (err) {
  console.error(log.red('❌ Error scanning node_modules:'), err);
}

console.log(log.blue('\n📝 Next steps:'));
console.log(`
1. Review the warnings and optimize imports
2. Run 'npm dedupe' to try automatic deduplication
3. Consider adding resolutions in package.json for problematic packages
4. Build again with 'npm run build' to see if bundle size improved
`); 