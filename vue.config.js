const path = require('path')
const isDev = process.env.NODE_ENV === 'development'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: isDev ? '' : '/trial/',
  outputDir: 'dist',
  assetsDir: 'static',
  pages: {
    index: {
      entry: './src/main.js',
      template: './public/index.html'
    }
  },
  lintOnSave: true,
  configureWebpack: config => {
    config.devtool = isDev
      ? 'cheap-module-eval-source-map'
      : 'hidden-source-map'

    config.resolve.alias = {
      '@': resolve('src'),
      '@views': resolve('src/views'),
      '@com': resolve('src/components'),
      '@utils': resolve('src/utils')
    }

    config.resolve.extensions = ['.vue', '.ts', '.js', '.less', '.css', '.png']
  }
}
