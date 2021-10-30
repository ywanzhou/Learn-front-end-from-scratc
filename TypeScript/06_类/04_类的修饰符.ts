// 定义一个 Person 类，其中包含 public 成员 private 成员和 protected 成员。
class Person {
  public name: string
  // 约定 私有成员一般采用 _ 开头
  private _age: number
  protected hobby: string
  // 属性初始化
  constructor(name: string, age: number, hobby: string) {
    this.name = name
    this._age = age
    this.hobby = hobby
  }
  sayMy() {
    console.log(this.name, this._age, this.hobby)
  }
}

// 实例化 Person 类
const person = new Person('一碗周', 18, 'coding')

console.log(person.name) // 一碗周
// 类外访问私有成员 抛出异常
// console.log(person._age) // 报错
// 类外访问保护成员 抛出异常
// console.log(person.hobby) // 报错

// private 成员和 protected 成员可以在类内访问
person.sayMy() // 一碗周 18 coding

// 定义一个类继承与 Person 类
class Programmer extends Person {
  constructor(name: string, age: number, hobby: string) {
    super(name, age, hobby)
  }
  sayMy() {
    console.log(this.name) // 一碗周
    // 在子类不可以访问父类的私有成员
    // console.log(this._age) // 报错
    // 在子类可以访问受保护的成员
    console.log(this.hobby) // coding
  }
}

// 实例化 Programmer 类
const programmer = new Programmer('一碗周', 18, 'coding')
programmer.sayMy()

// 确保跟其他代码中的成员冲突
export {}
