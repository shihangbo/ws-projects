
# 测试项目

### commander
- commander：提供了命令行输入和参数解析功能
- 最佳实践
```js
#! node
const program = require('commander')
program
  .version(`ws-cli 0.0.0`)     // 默认指定版本号
  .usage(`<command> [options]`) // 默认指定使用方式 命令+参数

program
  .command(`create <app-name>`) // 添加一个命令 <必须按参数>
  .description('create a new project powered by vue-cli-service') // vue-cli-service 封装了编译/启动服务等
  .active(appName => {
    // 业务处理 todo...
    console.log(appName)
  })

program.parse(process.argv)
```


### inquirer
- 一个交互式命令行
- 最佳实践
```js
const inquirer = require('inquirer')
const prompts = [
  presetPrompt,
  featurePrompt
]
;(async function(){
  let result = await inquirer.prompt(prompts)
  // 业务处理 todo...
  console.log(result)
})()
```

### execa
- 可以调用 shell 和本地外部程序。他会启动子进程执行，是对 child_process.exec 的封装
- 最佳实践
```js
const execa = require('execa')
;(async function(){
  const { stdout } = await execa('echo', ['hello'])
  console.log(stdout)
})()
```

### chalk
- 可以修改控制台字符串的样式，包括字体样式，颜色，背景颜色等
- 最佳实践
```js
const chalk = require('chalk')
console.log(chalk.blue('hello world'))
```

### 其他包
- ejs 是js模版引擎
- slash 将windows反斜杠路径转化成斜杠路径
- globby 根据模式字符串匹配文件名


### isbinaryfile
- 检测文件是否是二进制文件
- 最佳实践
```js
const path = require('path')
const { isBinaryFileSync } = require('isbinaryfile')
let main = path.join(__dirname, '/main.js')
let isBinary = isBinaryFileSync(main)
console.log(isBinary)
```

### ora
- 实现node命令环境的loading效果，和显示各种状态的图标等
- 最佳实践
```js
const ora = require('ora')
const spinner = ora()
exports.logWithSpinner = msg => {
  spinner.text = msg
  spinner.start()
}
exports.stopSpinner = () => {
  spinner.stop()
}
exports.logWithSpinner('npm install')
setTimeout(()=>{
  exports.stopSpinner()
},3000)
```