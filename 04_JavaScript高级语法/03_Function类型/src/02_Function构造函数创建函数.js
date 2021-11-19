// 无参的函数
var fun = new Function('console.log("这是一个函数")')
fun() // 这是一个函数
// 带一个参数的函数
var fun = new Function('a', 'console.log("这个函数带一个参数：" + a)')
fun(100) // 这个函数带一个参数：100
// 带两个参数的函数
var fun = new Function(
  'a, b',
  'console.log("这是带两个参数的函数，分别是" + a + "和" + b);',
)
fun(100, 200) // 这是带两个参数的函数，分别是100和200
