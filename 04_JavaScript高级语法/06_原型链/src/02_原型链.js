function Person(name) {
  this.name = name
}

var PP = Person.prototype
var PPC = PP.constructor
// 验证与构造函数是否相同
console.log(PPC === Person) // true

// 实例化 Person
var person = new Person('一碗周')
// 获取 Person 实例化后的对象的原型
var pP = Object.getPrototypeOf(person)
// 验证 Person 实例化后的对象的原型是否指向构造函数的 prototype
console.log(pP === PP) // true

// 实际上所有的构造函数默认都是继承与 Object 的，如下代码测试

// 获取 Person.prototype 的原型
var PPP = Object.getPrototypeOf(PP)
var OP = Object.prototype
// 判断两者是否相等
console.log(PPP === OP) // true
