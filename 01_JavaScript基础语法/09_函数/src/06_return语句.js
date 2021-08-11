// function print () {
//     console.log('这是一个函数');
// }

// var result = print()

// console.log(result) // undefined

// function print () {
//     console.log('这是一个函数');
//     return '这是函数的返回值'
// }

// var result = print()

// console.log(result) // 这是函数的返回值

function print () {
    return '这是函数的返回值'
    console.log('这是一个函数');
}

var result = print()
/**
 执行结果为空
 */