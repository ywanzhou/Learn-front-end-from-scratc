// let moduleB = {
//   name: '一碗粥',
//   handle() {
//     console.log(this.name)
//   },
// }

// ;(function () {
//   let name = '一碗粥'
//   function handle() {
//     console.log(name)
//   }
//   window.moduleB = { handle }
// })()

;(function (m) /* 形参 */ {
  let name = '一碗周'
  function sayName() {
    // 使用其他模块的成员
    m.printName(name)
  }
  window.moduleB = { sayName }
})(moduleA) // 实参
