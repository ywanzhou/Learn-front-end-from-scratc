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

// 通过Object.prototype.hasOwnProperty(prop)方法检测是否为自有属性
console.log(fun.hasOwnProperty('name')) // true
console.log(fun.hasOwnProperty('print')) // false
// 如果一个不存在的属性检测结果也是为false
console.log(fun.hasOwnProperty('SayMe')) // true

// 通过 in 运算符
console.log('name' in fun) // true
console.log('print' in fun) // true
console.log('SayMe' in fun) // true
