// vue.config.js
module.exports = {
    // publicPath: '/digital-defense.io/',
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: [
                        {
                            loader: 'html-loader'
                        },
                        {
                            loader: 'markdown-loader',
                            options: {}
                        }
                    ]
              }
            ]
        }
    }
  }