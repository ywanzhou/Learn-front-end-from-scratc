// 定义一个函数
function fn(a) {
  console.log('this is ' + a)
}
fn.apply(null, ['函数']) // this is 函数

// 上面的调用方式等同于下面这种方式
fn('函数') // this is 函数
