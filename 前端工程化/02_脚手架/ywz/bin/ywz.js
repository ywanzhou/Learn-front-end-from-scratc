#! /usr/bin/env node
const { program } = require('commander')
const { version } = require('../package.json')

program
  // 定义命令
  .command('create')
  // 定义别名
  .alias('crt')
  // 定义参数
  .argument('<projectName>')
  // 定义命令处理方法
  .action(projectName => {
    // 该方法接受一个回调函数，回调函数的参数名称就是我们前面定义的参数
    console.log(projectName)
  })

// .version() 方法用于设置版本号，当在命令行中执行 --version 或者 -V 时，显示的版本
// .parse() 用于解析命名行参数，默认值为 process.argv * 重要
program.version(version).parse()
