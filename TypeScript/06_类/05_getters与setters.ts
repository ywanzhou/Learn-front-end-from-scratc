// 定义一个 Person 类
class Person {
  // 约定 私有成员一般采用 _ 开头
  private _name: string
  // 属性初始化
  constructor(name: string) {
    this._name = name
  }
  // 获取 私有的 _name 属性值
  get getName(): string {
    return this._name
  }
  // 设置 私有的 _name 属性值
  set setName(name: string) {
    this._name = name
  }
}
// 实例化类
const person = new Person('一碗粥')
// 通过 getName 的方式获取
console.log(person.getName) // 一碗粥
// 通过 setName 的方式设置 _name 的值
person.setName = '一碗周'
// 重新获取
console.log(person.getName) // 一碗周

export {}
