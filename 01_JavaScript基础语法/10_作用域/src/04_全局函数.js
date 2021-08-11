function fun () {  // 声明且初始化
    console.log('我是fun函数')
}
// 调用全局函数
fun()  // 我是fun函数
function fn () {
    fun() // 在fn函数体中访问全局函数
}
fn()  // 我是fun函数