const fse = require('fs-extra')
const chalk = require('chalk')
const path = require('path')
const args = require('minimist')(process.argv)._.slice(2)
const [componentPath] = args
const componentName = componentPath.split('/').slice(-1)[0]

// 读取并处理 tmeplate
let template = fse.readFileSync(path.join(__dirname, '../template/component.vue'))
template = template.toString().replace(/component/g, componentName)

const targetPath = path.join(__dirname, '../src/views', componentPath + '.vue')
fse.ensureFile(targetPath).then(() => {
  // 写入 template
  fse.outputFileSync(targetPath, template)

  const newRouteString = `
    {
        path: '${componentPath}',
        name: '${componentPath}',
        component: () => import('@views/${componentPath}.vue')
    }
   `
  console.log(chalk.cyanBright('此次新增路由'))
  console.log(chalk.green(newRouteString))
  require('clipboardy').writeSync(newRouteString)
  console.log(chalk.cyanBright('路由已经复制到剪贴板'))
})
