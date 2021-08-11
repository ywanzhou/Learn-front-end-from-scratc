var v = 100; // 定义全局变量
console.log(v) // 访问变量 v
function fun () {
    console.log(v) // 在局部作用域中访问全局变量 v
}
fun() // 100