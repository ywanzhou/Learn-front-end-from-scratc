function func () {
    var v = 100; // 定义局部变量
    console.log(v)  // 访问局部变量
}
func()
console.log(v) // 在函数体外访问局部变量。。抛出异常：v is not defined
function fun () {
    console.log(v) // 在其他函数中访问局部变量。。抛出异常：v is not defined
}
fun()