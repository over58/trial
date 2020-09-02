const config = require('./vue.config')
const rawArgv = process.argv.slice(2)
const args = rawArgv.join(' ')
const { run } = require('runjs')
const chalk = require('chalk')

if (args.includes('--report')) {
  run(`vue-cli-service build ${args}`)

  const port = 9526
  const publicPath = config.publicPath || '/'

  const connect = require('connect')
  const serveStacic = require('serve-static')
  const app = connect()

  app.use(
    publicPath,
    serveStacic('./dist', {
      index: ['index.html', '/']
    })
  )

  app.listen(port, function () {
    console.log(chalk.green(`> Preview at  http://localhost:${port}${publicPath}`))
    if (args.includes('--report')) {
      console.log(chalk.green(`> Report at  http://localhost:${port}${publicPath}/report.html`))
    }
  })
} else {
  run(`vue-cli-service build ${args}`)
}
