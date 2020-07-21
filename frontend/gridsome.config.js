// Gridsome project configuration

const path = require('path');

/**
 * Loads global SASS stylesheet assets
 * @param {*} rule 
 */
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/_color-pallet.scss'),
        path.resolve(__dirname, './src/assets/styles/_globals.scss'),
        path.resolve(__dirname, './src/assets/styles/_reset.scss'),
        path.resolve(__dirname, './src/assets/styles/_media-queries.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Digital Defense 🔐',
  siteUrl: 'https://digital-defense.io',
  siteDescription: 'Tools, Guides and Resources for Preserving Privacy and Strengthening Security Online.',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        typeName: 'dd_',
        apiURL: 'http://localhost:1337',
        queryLimit: 1000,
        contentTypes: ['Checklist-Item', 'Checklist-Section', 'Navigation-Menus', 'Site-Meta-Data'],
      }
    },
    {
      use: 'gridsome-plugin-typescript',
    }
  ],
  // Loads variables for all vue-files
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	}
}
