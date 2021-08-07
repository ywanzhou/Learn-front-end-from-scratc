console.log(true == 1) // true

console.log(2 == '2') // true

console.log(1 == true) // true

console.log([] == '') // true

console.log(typeof String([])) // string

var str = '1'
var num = 1

// 条件语句
if (str == num) {
    console.log(str + num) // 11
}

console.log(str === num) // false