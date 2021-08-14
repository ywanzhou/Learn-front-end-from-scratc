var email = 'seecode@qq.com'

// indexOf() 接受两个参数，第一个表示需要检索的字符串，第二个表示开始的位置，默认为0

// 在email字符串中查找是否包含qq这个字符串
console.log(email.indexOf('qq')) // 8
// 在email字符串中查找是否包含o这个字符串
console.log(email.indexOf('o')) // 4
// 在email字符串中查找是否包含o这个字符串，在索引为8的位置开始查找
console.log(email.indexOf('o', 8)) // 12

// lastIndexOf() 查找最后一个匹配的字符串索引
console.log(email.lastIndexOf('o')) // 12