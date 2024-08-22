const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../../tsconfig.base.json'), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: 'products',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: 'module' },

      // For remotes (please adjust)
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductModule':
          './apps/remotes/products/src/app/product-list/product-list.module.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "eCommerce": "http://localhost:5200/remoteEntry.js",
      //     "primeVideo": "http://localhost:4200/remoteEntry.js",
      //     "orders": "http://localhost:4201/remoteEntry.js",
      //     "payments": "http://localhost:4200/remoteEntry.js",
      //     "profile": "http://localhost:4200/remoteEntry.js",

      // },

      shared: share({
        '@angular/core': {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
        },
        '@angular/common': {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
        },
        '@angular/common/http': {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
        },
        '@angular/router': {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
        },

        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
