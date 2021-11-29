// let sign = null
// function setName() {
//   return function (constructor: Function) {
//     sign = constructor
//   }
// }
// @setName()
// class Info {
//   constructor() {}
// }
// console.log(sign === Info) // true
// console.log(sign === Info.prototype.constructor) // true

// * 通过装饰器 修改原型对象与构造函数
// function addName(constructor: { new (): any }) {
//   constructor.prototype.name = '一碗周'
// }
// @addName
// class Person {}
// const person = new Person()
// // console.log(person.name) // error 类型“A”上不存在属性“name”
// export {}

function addName(constructor: { new (): any }) {
  constructor.prototype.name = '一碗周'
}
@addName
class Person {}
const person = new Person()
// 1. 类型断言
// console.log((person as any).name) // 一碗周

// 2. 定义同名接口，声明合并
interface Person {
  name: string
}

console.log(person.name) // 一碗周
