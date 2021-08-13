var person = {
    name: '彼岸繁華',
    hobby: 'coding'
}
// 使用 . 的方式访问
console.log(person.name) // 彼岸繁華

// 使用 [] 方式访问
console.log(person['hobby']) // coding

var header = {
    'charset': 'UTF-8',
    'Content-Type': 'text/html'
}

console.log(header["Content-Type"]) // text/html
// console.log(header.Content-Type) // 报错