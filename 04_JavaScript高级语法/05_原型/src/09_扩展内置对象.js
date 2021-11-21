// 为 Object 扩展属性和方法
// 使用第一种方式
Object.prototype.MyPrint = function () {
  console.log('this is MyPrint()')
}
// 使用第二种方式
Object.defineProperty(Object.prototype, 'MyInput', {
  value: function () {
    console.log('this is MyInput()')
  },
})
// 调用
Object.prototype.MyPrint() // this is MyPrint()
Object.prototype.MyInput() // this is MyInput()
