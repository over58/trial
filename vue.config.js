const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
// const fse = require('fs-extra')
const chalk = require('chalk')

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

    config.plugins.push(function () {
      this.hooks.done.tap('done', (stats) => {
        // fse.appendFile('./test.txt', stats)
        console.log('\thash:', chalk.cyanBright(stats.hash))
      })
    })
  },
  pluginOptions: {
    dll: {
      // 入口配置
      entry: {
        libs: ['vue', 'vue-router', 'axios', 'vuex', 'clipboard', 'element-ui', 'gsap']
      },
      // 输出目录
      output: path.join(__dirname, './public/libs'),
      cacheFilePath: path.join(__dirname, './public/libs'),
      // mordern模式 针对非module模块插入会有问题，所以手动插入
      inject: true
    }
  }
}
