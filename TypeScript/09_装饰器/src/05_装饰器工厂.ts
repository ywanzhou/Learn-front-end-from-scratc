// 定义一个装饰器工厂
function classDecorator(_name: string) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      name = _name
      hobby = 'coding'
    }
  }
}
@classDecorator('一碗周')
class Person {
  age = 18
  name: string
  constructor(name: string) {
    this.name = name
  }
}
const person = new Person('一碗粥')
console.log(person)
/* 执行结果如下：
{
  age: 18,
  name: '一碗周',
  hobby: 'coding',
}
*/
export {}
