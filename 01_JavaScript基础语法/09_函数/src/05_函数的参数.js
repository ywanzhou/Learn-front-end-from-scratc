// 定义一个函数
function print (x, y) {
    console.log(x)
    console.log(y)
}

// 形参数量大于实参数量 
print(10)
/*
 函数的定义中具有两个形参，这里只传递一个形参。执行结果如下
 10
 undefined
 */

// 实参数量大于形参数量 
print(10, 20, 30)
/*
 函数的定义中具有两个形参，这里却传递三个形参。执行结果如下
 10
 20
 */