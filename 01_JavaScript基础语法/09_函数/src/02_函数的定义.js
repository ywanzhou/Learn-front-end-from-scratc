// 函数声明方式
function print () {
    console.log('这是一个函数');
}

// 字面量方式
var print = function () {
    console.log('这是一个函数');
}

var print = new Function(
    "console.log('这是一个函数')"
)
