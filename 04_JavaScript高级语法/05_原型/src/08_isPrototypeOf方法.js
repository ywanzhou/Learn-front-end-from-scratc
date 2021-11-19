// 定义一个对象，用于赋值给原型对象
var obj = function () {
  this.name = '一碗周'
}
var Hero = function () {} // 定义构造函数
// 将定义的对象赋值给构造函数的原型
Hero.prototype = obj

// 通过Hero创建对象
var hero1 = new Hero()
var hero2 = new Hero()
// 判断创建的两个对象是否在 obj 的原型链中
console.log(obj.isPrototypeOf(hero1)) // true
console.log(obj.isPrototypeOf(hero2)) // true
