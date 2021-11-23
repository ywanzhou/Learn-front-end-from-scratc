function inheritPrototype(ChildClass, ParentClass) {
  var prototype = Object.create(ParentClass.prototype) // 创建对象，创建父类原型的一个副本
  // 修改创建的父类原型副本的 constructor 并将子类的 prototype 指向这个类，形成与父类无关联的类
  prototype.constructor = ChildClass
  ChildClass.prototype = prototype
}

// 父类初始化实例属性和原型属性
function ParentClass(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}
ParentClass.prototype.sayName = function () {
  console.log(this.name)
}

// 借用构造函数传递增强子类实例属性（支持传参和避免篡改）
function ChildClass(name, age) {
  // 拷贝父类所有自有属性
  ParentClass.call(this, name)
  this.age = age
}

// 将父类原型指向子类
inheritPrototype(ChildClass, ParentClass)

// 新增子类原型属性
ChildClass.prototype.sayAge = function () {
  console.log(this.age)
}

var instance1 = new ChildClass('一碗周', 19)
var instance2 = new ChildClass('一碗甜', 18)

instance1.colors.push('black')
console.log(instance1.colors) // [ 'red', 'blue', 'green', 'black' ]
instance1.sayName() // 一碗周
instance2.colors.push('yellow')
console.log(instance2.colors) // [ 'red', 'blue', 'green', 'yellow' ]
