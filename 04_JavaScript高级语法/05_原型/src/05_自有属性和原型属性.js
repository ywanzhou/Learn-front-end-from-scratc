//构造函数
function Fun() {}
//添加原型属性和方法
Fun.prototype.name = '一碗粥'
Fun.prototype.print = function () {
  console.log('this is function')
}

//通过构造函数创建对象
var fun = new Fun()
//为对象添加属性和方法
fun.name = '一碗周'
fun.SayMe = function () {
  console.log('this is SayMe')
}

//访问属性和方法
console.log(fun.name) // 一碗周
fun.SayMe() // this is SayMe
fun.print() // this is function
