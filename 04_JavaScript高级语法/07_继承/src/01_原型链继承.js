function ParentClass() {
  this.name = '一碗周'
}
ParentClass.prototype.getName = function () {
  return this.name
}

// 定义子类，将来用于继承父类
function ChildClass() {}

// * 将子类的原型指向父类的实例化，子类拥有父类实例化后的内容
ChildClass.prototype = new ParentClass()

// 将子类进行实例化
var child = new ChildClass()

console.log(child.getName()) // 一碗周
