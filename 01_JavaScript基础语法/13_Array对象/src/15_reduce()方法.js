var arr = ['red', 'blue', 'black', 'green', 'yellow']

var result = arr.reduce(function (accumulator, currentValue) {
    return accumulator + ' ' + currentValue + ' '
})
console.log(result) // red blue  black  green  yellow 