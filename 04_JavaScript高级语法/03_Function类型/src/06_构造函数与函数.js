function Hero() {
  // 当作是一个函数来使用
  var v = 100 // 局部变量
  // 当作是一个构造函数来使用
  this.set = function (value) {
    v = value
  }
  this.get = function () {
    return v
  }
}
// 直接调用
Hero()
// 通过构造函数创建对象
var hero = new Hero()
// 当做对象为其添加属性和方法
Hero.n = '一碗周'
console.log(Hero.n) // 一碗周
