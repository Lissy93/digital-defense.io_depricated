// Gridsome project configuration
// See Docs: https://gridsome.org/docs/config

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000,
        contentTypes: [],
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ]
}
