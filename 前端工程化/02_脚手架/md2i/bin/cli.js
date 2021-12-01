#!/usr/bin/env node

const cac = require('cac')  // 导入一个处理命令行参数的包
const md2I = require('..')  // 这行代码的作用就是导入 lib 下的index.js
const { name, version } = require('../package')


const cli = cac(name)   // Lz 喜欢

// 处理命令行参数  commander
// console.log(process.argv)

cli
  .command('<filename>', 'Sample cli program')  // 表示我们当要配置的命令，只要配置了就必须赋值，不然就会报错
  .option('--output <output>', 'Sample options')  // 配置--key value 的参数 ，如果想要配置多个就多调用几个 option 
  .option('--width <width>', 'Sample options')
  .example(`  $ md2i w --host zce.me`)
  .action((filename, options) => {
    // 1 在 cli.js 中一般只处理命令行参数，不写业务逻辑
    // 2 当前我们要用的就是拿到 md2i 使用时传入的参数 
    // 3 将拿到的参数传给 md2I 函数--》 在lib下的 index.js 中使用数据完成最终的功能业务
    md2I(filename, options)
  })

cli.help().version(version).parse()

/* 
  1 caz 下载 nm 项目
  2 cli.js 内部使用了 cac 包，可以处理命令行参数
  3 cli.js 中导入了 lib下的index.js ，可以调用 md2i 函数

  4 md2i 调用时传入的参数来自于哪？（语感）
*/