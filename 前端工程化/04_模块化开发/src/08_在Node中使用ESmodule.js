// 导入自定义的成员
import { foo, bar } from './module.js'
console.log(foo, bar)

// 通过 ES Module 导入内置模块
import fs from 'fs'
fs.writeFileSync('./test.txt', '一碗周')
// 导入模块内的成员
import { writeFileSync } from 'fs'
writeFileSync('./text.txt', '一碗周')
// 导入第三方模块
import _ from 'lodash'
_.camelCase('ES Module')

// 有些第三方模块不支持内部成员的导入，因为模块直接导出默认成员
// import { camelCase } from 'lodash'
// console.log(camelCase('ES Module'))
