;(function () {
  // 定义一个基类，又称超类
  class Person {
    // 在基类中定义一个name属性
    constructor(public name: string) {}
  }
  // 定义一个派生类，又称子类，继承于基类
  class Programmer extends Person {
    constructor(name: string, public hobby: string) {
      // 通过 super 调用基类的构造函数
      super(name)
    }
  }
  // 实例化子类
  const programmer = new Programmer('一碗周', 'coding')
  console.log(programmer.name, programmer.hobby) // 一碗周 coding
})()
