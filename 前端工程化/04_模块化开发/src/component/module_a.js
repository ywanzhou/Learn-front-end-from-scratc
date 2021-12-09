// let moduleA = {
//   name: '一碗周',
//   handle() {
//     console.log(this.name)
//   },
// }

// ;(function () {
//   let name = '一碗周'
//   function handle() {
//     console.log(name)
//   }
//   window.moduleA = { handle }
// })()
;(function () {
  function printName(name) {
    console.log(name)
  }
  // 暴露一个打印的方法
  window.moduleA = { printName }
})()
