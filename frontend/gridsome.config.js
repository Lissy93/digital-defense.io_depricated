// Gridsome project configuration
// See Docs: https://gridsome.org/docs/config

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        typeName: 'dd_',
        apiURL: 'http://localhost:1337',
        queryLimit: 1000,
        contentTypes: ['Checklist-Item', 'Checklist-Section'],
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ]
}
