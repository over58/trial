const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: isDev ? '' : '/trial/'
}
