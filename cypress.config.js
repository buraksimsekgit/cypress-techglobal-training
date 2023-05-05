const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: 'mochawesome',
  env:{
    url: "http://www.techglobal-training.com/"
  },
  projectId: "af63yr",
  retries:{
    runMode: 1
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    // viewportWidth: 1920,
    // viewportHeight: 1080
  },
});
