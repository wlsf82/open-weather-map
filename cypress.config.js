const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    env: {
      API_URL: 'https://api.openweathermap.org/data/2.5/forecast',
      requestMode: true,
    },
    fixturesFolder: false,
  },
})
