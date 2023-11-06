const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        // Here we specify the scss resources to load globally.
        primeIcons: `@import "~primeicons/primeicons.css";`,
        additionalData: `@import "~@/styles/variables.scss";`,
      },
    },
  },
});
