var arr = ['red', 'blue', 'black', 'green', 'yellow']

some = arr.some(function (current, index) {
    // 长度是否等于5
    return current.length === 5
})
every = arr.every(function (current, index) {
    // 长度是否等于5
    return current.length === 5
})
console.log(some) // true
console.log(every) // false