const TerserPlugin = require('terser-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const ModuleScopeOptimizer = require('./ModuleScopeOptimizer');

module.exports = {
  webpack: {
    // Handle duplicate packages with DuplicatePackageCheckerPlugin instead of aliases
    // CRA doesn't allow imports from outside src/ directory
    alias: {},
    configure: (webpackConfig, { env, paths }) => {
      if (env === 'production') {
        // Use TerserPlugin with optimized settings
        webpackConfig.optimization.minimizer = [
          new TerserPlugin({
            terserOptions: {
              parse: {
                // Parse ecma 8 code - needed for async/await
                ecma: 8,
              },
              compress: {
                ecma: 5,
                warnings: false,
                comparisons: false,
                inline: 2,
                drop_console: true,
                pure_funcs: ['console.log', 'console.info', 'console.debug'],
                // Remove dead code
                dead_code: true,
                // Remove unused variables
                unused: true,
              },
              mangle: {
                safari10: true,
              },
              output: {
                ecma: 5,
                comments: false,
                ascii_only: true,
              },
            },
            parallel: true,
            extractComments: false,
          }),
        ];

        // Enable analyzer when ANALYZE env variable is set
        if (process.env.ANALYZE) {
          webpackConfig.plugins.push(
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              reportFilename: 'report.html',
            })
          );
        }
      }

      // Check for duplicate packages
      webpackConfig.plugins.push(new DuplicatePackageCheckerPlugin({
        verbose: true,
        emitError: false,
        showHelp: true,
      }));
      
      // Add custom scope optimizer
      webpackConfig.plugins.push(new ModuleScopeOptimizer());

      return webpackConfig;
    },
  },
}; 