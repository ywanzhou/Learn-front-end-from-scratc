var person = {
    name: '彼岸繁華',
    hobby: 'coding'
}
// 使用 . 的方式新增
person.name = '彼岸繁華'
// 使用 [] 方式访问 [任意字符串]
person['hobby'] = 'coding'

console.log(person.name) // 彼岸繁華
console.log(person['hobby']) // coding
