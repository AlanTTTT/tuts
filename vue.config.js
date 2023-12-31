const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
        sassOptions: {
          // Enable Sass's indented syntax if you prefer
          indentedSyntax: true,
        },
      },
    },
  },
  transpileDependencies: true,
});
