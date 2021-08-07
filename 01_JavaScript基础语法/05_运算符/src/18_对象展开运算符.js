// 定义一个对象
var person = {
    name: '彼岸繁華',
    hobby: 'coding',
    age: 18
}

// 深拷贝一个对象
var person2 = { ...person }


// 结构赋值时，接受剩余的值
var { name, ...obj } = person
console.log(name, obj) // 彼岸繁華 { hobby: 'coding', age: 18 }