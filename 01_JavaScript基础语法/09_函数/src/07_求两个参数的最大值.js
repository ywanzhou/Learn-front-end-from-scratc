function max (a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}
var result1 = max(10, 20)
var result2 = max(40, 20)
console.log(result1) // 20
console.log(result2) // 40

function max (a, b) {
    return a > b ? a : b
}