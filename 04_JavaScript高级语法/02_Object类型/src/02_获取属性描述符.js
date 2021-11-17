var obj = new Object({
  name: '一碗周',
})
var result = Object.getOwnPropertyDescriptor(obj, 'name')
console.log(result)

// * 获取该属性的值
console.log(result.value) // 一碗周
// * 返回该属性是否可枚举
console.log(result.enumerable) // true
