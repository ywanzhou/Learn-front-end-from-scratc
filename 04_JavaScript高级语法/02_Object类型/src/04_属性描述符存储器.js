var obj = {}
// 辅助变量，用于赋值和获取操作
var value = '一碗粥'

Object.defineProperty(obj, 'name', {
  get: function () {
    // 通过辅助变量获取属性值
    return value
  },
  set: function (newValue) {
    // 通过修改辅助变量，完成赋值操作
    value = newValue
  },
})
console.log(obj.name) // 一碗粥
obj.name = '一碗周'
console.log(obj.name) // 一碗周

// 辅助变量，用于赋值和获取操作
var value = '一碗粥'

var obj = {
  // 存取描述符中的get
  get attr() {
    // 表示当前目标属性名称
    return value
  },
  // 存取描述符中的set
  set attr(newValue) {
    // 表示当前目标属性名称
    value = newValue
  },
}
console.log(obj.attr) // 一碗粥
obj.attr = '一碗周'
console.log(obj.attr) // 一碗周
