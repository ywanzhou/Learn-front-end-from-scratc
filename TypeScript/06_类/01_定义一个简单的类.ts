// ;(function () {
//   // 定义类
//   class Person {
//     // 公共属性，默认可以不写
//     public name: string
//     // 构造函数
//     constructor(name: string) {
//       // 初始化name属性
//       this.name = name
//     }
//   }
//   // 实例化类
//   const person = new Person('一碗周')
//   console.log(person.name) // 一碗周
// })()

// 简写形式
;(function () {
  class Person {
    constructor(public name: string) {}
  }
  // 实例化类
  const person = new Person('一碗周')
  console.log(person.name) // 一碗周
})()
