//构造函数
function Fun() {}
//直接为构造函数添加属性和方法
Fun.prototype.str = '这是一个字符串'
Fun.prototype.fn = function () {
  console.log('这是一个方法')
}
//通过 defineProperty 添加属性或者方法
Object.defineProperty(Fun.prototype, 'MyFun', {
  value: function () {
    console.log('this is MyFun')
  },
})
//测试
console.log(Fun.prototype.str)
Fun.prototype.fn()
Fun.prototype.MyFun()
var fun = new Fun()
fun.MyFun()
//直接为其定义个对象覆盖到之前的原型上
Fun.prototype = {
  name: '一碗周',
  fun: function () {
    console.log('this is function')
  },
}
Fun.prototype.fun()
var fun = new Fun()
fun.fun()
