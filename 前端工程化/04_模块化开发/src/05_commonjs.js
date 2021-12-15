// 引入自定义的模块
const person = require('./component/module_c')
// 引入 Node.js 提供的模块
const fs = require('fs')

console.log(person.getName()) // 一碗周
person.setName('一碗粥')
console.log(person.name) // 一碗周

console.log(person.getName()) // 一碗粥
