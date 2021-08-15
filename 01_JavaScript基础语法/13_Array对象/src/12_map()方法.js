var arr = ['red', 'blue', 'black', 'green', 'yellow']

newArr = arr.map(function (current, index) {
    return current = index + current
})
console.log(newArr) // [ '0red', '1blue', '2black', '3green', '4yellow' ]