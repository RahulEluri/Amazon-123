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
    uniqueName: 'ecommerce',
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
      // name: "ecommerce",
      // filename: "remoteEntry.js",
      // exposes: {
      //     './Component': './apps/hosts/ecommerce/src/app/app.component.ts',
      // },

      // For hosts (please adjust)
      remotes: {
        orders: 'http://localhost:4201/remoteEntry.js',
        products: 'http://localhost:4202/remoteEntry.js',
        payments: 'http://localhost:4203/remoteEntry.js',
        profile: 'http://localhost:4204/remoteEntry.js',
      },

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
