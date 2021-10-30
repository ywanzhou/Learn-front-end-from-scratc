// 通过 abstract 关键字 定义一个抽象类，该类不必进行初始化，仅作为基类使用
abstract class Department {
  // 初始化name成员，参数属性
  constructor(public name: string) {}

  printName(): void {
    console.log('部门名称: ' + this.name)
  }
  // 抽象方法必须包含 abstract 关键字
  abstract printMeeting(): void // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super('会计部') // 在派生类的构造函数中必须调用super()
  }

  printMeeting(): void {
    console.log('会计部是负责管钱的部门')
  }
}

// const department = new Department() // 抛出异常：不能创建一个抽象类的实例
// 实例化抽象子类
const department = new AccountingDepartment()
// 调用抽象类中的方法
department.printName() // 部门名称: 会计部
// 调用在派生类实现的抽象方法
department.printMeeting() // 会计部是负责管钱的部门
