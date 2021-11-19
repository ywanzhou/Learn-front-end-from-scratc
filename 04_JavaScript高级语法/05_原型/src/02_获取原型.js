// 构造函数
function Person(name) {
  this.name = name
}

// 指向构造函数的原型
var p1 = Person.prototype

var person = new Person('一碗周')

// 指向构造函数的原型
var p2 = Object.getPrototypeOf(person)

console.log(p1 === p2) // true
