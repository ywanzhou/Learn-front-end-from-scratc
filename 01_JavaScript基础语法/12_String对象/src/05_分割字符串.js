var str = 'Lucy,Mary,Lily,Emma'

// 以字符串作为分割符号
var result1 = str.split(',')
// 限定返回两个
var result2 = str.split(',', 2)

console.log(result1, result2) // [ 'Lucy', 'Mary', 'Lily', 'Emma' ] [ 'Lucy', 'Mary' ]