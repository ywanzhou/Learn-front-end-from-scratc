function func () {
    var v = 100; // 我是函数中的变量
    console.log(v) // 打印变量v
}
// 在函数体外访问变量 v
console.log(v) // 抛出异常： v is not defined