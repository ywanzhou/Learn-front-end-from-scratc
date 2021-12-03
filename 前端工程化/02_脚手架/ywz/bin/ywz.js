#! /usr/bin/env node
const { program } = require('commander')
const { version } = require('../package.json')

// .version() 方法用于设置版本号，当在命令行中执行 --version 或者 -V 时，显示的版本
// .parse() 用于解析命名行参数，默认值为 process.argv * 重要
program.version(version).parse()
