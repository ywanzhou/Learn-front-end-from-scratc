var arr = ['red', 'blue', 'black', 'green', 'yellow']

newArr = arr.filter(function (current, index) {
    // 将元素的长度为5，组成一个新的数组
    return current.length === 5
})
console.log(newArr) // [ 'black', 'green' ]