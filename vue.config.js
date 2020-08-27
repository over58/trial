const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: isDev ? '' : 'https://over58.github.io/trial/'
}
