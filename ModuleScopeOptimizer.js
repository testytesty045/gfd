/**
 * ModuleScopeOptimizer - A custom webpack plugin to optimize module scopes
 * This helps in removing unused exports and optimizing module scope
 */
class ModuleScopeOptimizer {
  constructor(options = {}) {
    this.options = {
      enabled: process.env.NODE_ENV === 'production',
      ...options
    };
  }

  apply(compiler) {
    // Only apply in production mode by default
    if (!this.options.enabled) return;

    // Add optimization hooks
    compiler.hooks.thisCompilation.tap('ModuleScopeOptimizer', (compilation) => {
      // Add optimization for JavaScript modules
      compilation.hooks.optimizeModules.tap('ModuleScopeOptimizer', (modules) => {
        modules.forEach(module => {
          if (module.constructor && module.constructor.name === 'NormalModule') {
            // Mark module as optimized to enable tree shaking
            module.buildInfo = module.buildInfo || {};
            module.buildInfo.moduleConcatenationBailout = undefined;
          }
        });
      });
      
      // Additional optimization for chunks
      compilation.hooks.afterOptimizeChunks.tap('ModuleScopeOptimizer', (chunks) => {
        chunks.forEach(chunk => {
          // Try to prevent duplicate code in multiple chunks
          if (chunk.hasRuntime()) {
            chunk.filenameTemplate = '[name].[chunkhash].js';
          }
        });
      });
    });
  }
}

module.exports = ModuleScopeOptimizer; 