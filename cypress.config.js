const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://sanlorenzo.com.ar',
    supportFile : false
  },
})