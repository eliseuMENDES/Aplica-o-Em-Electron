const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],  
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    },
  },  
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin()
    ],    
  },
});

  // resolve: {fallback: {"fs": false}}    
  // configureWebpack: {
  //   plugins: [
  //     new NodePolyfillPlugin()
  //   ],
  // },
  // resolve: {fallback: {"fs":false}}
  // resolve: {fallback: {"fs":true}}    
  // **********************************************
  // configureWebpack: (config, { isServer }) => {
  //   if(!isServer) {
  //     config.node = {
  //       fs: 'empty'
  //     }
  //   }
  // **********************************************
  //   return config
  // },
  // **********************************************
  // resolve: {
  //     fallback: {
  //      "fs": false
  //     }
  // }  
  // ********************************************** 
  // configureWebpack:
  //  (config) => {
  //   config.resolve.fallback = { fs: false };
  // **********************************************
  //   return config;
  // },
  // build: {
  //   extend(config, {}) {
  //     config.node = {
  //       fs: 'empty'
  //     }
  //   }
  // }