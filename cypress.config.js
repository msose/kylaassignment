const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: "https://react-redux.realworld.io/"



  },


  

});
