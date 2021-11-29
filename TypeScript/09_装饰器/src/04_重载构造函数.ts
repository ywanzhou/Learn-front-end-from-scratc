// * 重载构造函数
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T,
) {
  return class extends constructor {
    name = '一碗周'
    hobby = 'coding'
  }
}
@classDecorator
class Person {
  age = 18
  name: string
  constructor(name: string) {
    this.name = name
  }
}
const person = new Person('一碗周')
console.log(person)
/* 执行结果如下：
{
  age: 18,
  name: '一碗周',
  hobby: 'coding',
}
*/
export {}
