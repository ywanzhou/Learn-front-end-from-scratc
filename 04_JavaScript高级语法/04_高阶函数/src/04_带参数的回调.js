function multiplyByTwo(list, callback) {
  list.forEach(function (v, i) {
    callback(v * 2, i)
  })
}
var list = [1, 2, 3]
multiplyByTwo(list, function (v, i) {
  list[i] = v
})
console.log(list) // [ 2, 4, 6 ]
