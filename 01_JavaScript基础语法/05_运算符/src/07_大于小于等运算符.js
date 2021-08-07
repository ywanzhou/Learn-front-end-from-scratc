
console.log(10 > 8) // true

// true 会被自动转换为number类型1，false会被自动转换为number类型0
console.log(true > false) // true

// string类型比较的是 Unicode 码的大小
console.log('A' > 'a') // false

// 这里的字符串111 会被自动转换为 number 类型
console.log(123 > '111') // true