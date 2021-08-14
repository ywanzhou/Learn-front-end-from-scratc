var data = '若彼岸繁华落尽，谁陪我看落日流年'
// search() 返回匹配正则表达式的字符串的索引
console.log(data.search(/繁华/)) //3

// match() 返回匹配正则表达式的字符串
console.log(data.match(/繁华/)) // [ '繁华', index: 3, input: '若彼岸繁华落尽，谁陪我看落日流年', groups: undefined ]

// replace() 方法用于替换匹配正则表达式的内容
console.log(data.replace(/繁华/, '繁華')) // 若彼岸繁華落尽，谁陪我看落日流年