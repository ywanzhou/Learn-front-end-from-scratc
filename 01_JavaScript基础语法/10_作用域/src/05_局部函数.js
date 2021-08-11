function fun () {  // 声明且初始化
    function fn () {
        console.log('我是fn函数')
    }
    fn()  // 我是fn函数
}
// 调用全局函数
fun()  // 我是fn函数
function f () {
    fn() // 在f函数体中访问内部函数
}
  // f()  // 抛出异常