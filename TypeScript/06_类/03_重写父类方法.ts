// 定义一个 Person类
class Person {
  constructor(public name: string) {}
  // 定义一个方法
  sayMy() {
    console.log(`我的名字: ${this.name}`)
  }
}
// 定义一个 Adult 类继承于 Person 类
class Adult extends Person {
  constructor(public age: number) {
    super('一碗周')
  } // 重写父类方法
  sayMy() {
    console.log(`我的名字: ${this.name} 年龄: ${this.age}`)
  }
}
// 定义一个 Programmer 类继承于 Adult 类
class Programmer extends Adult {
  constructor(public hobby: string) {
    super(18)
  } // 重写父类方法
  sayMy() {
    console.log(`我的名字: ${this.name} 年龄: ${this.age} 爱好: ${this.hobby}`)
  }
}
// 类的实例化
const programmer = new Programmer('coding')
programmer.sayMy() // 我的名字: 一碗周 年龄: 18 爱好: coding
