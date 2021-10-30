// 定义一个类，且具有一个只读属性
class Person {
  // readonly name: string
  // 等同于
  // public readonly name: string
  // constructor(name: string) {
  //     this.name = name
  // }
  // 或者
  constructor(public readonly name: string) {}
}
// 实例化
const person = new Person('一碗周')
console.log(person.name) // 一碗周
// 修改name的值
// person.name = '一碗周' // 错误! name 是只读的.
