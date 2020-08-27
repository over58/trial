const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: isDev ? '' : '/trial/',
  lintOnSave: true,
  configureWebpack: config => {
    config.devtool = isDev
      ? 'cheap-module-eval-source-map'
      : 'hidden-source-map'
  }
}
