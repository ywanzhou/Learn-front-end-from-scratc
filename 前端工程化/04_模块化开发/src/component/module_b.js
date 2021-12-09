// let moduleB = {
//   name: '一碗粥',
//   handle() {
//     console.log(this.name)
//   },
// }

;(function () {
  let name = '一碗粥'
  function handle() {
    console.log(name)
  }
  window.moduleB = { handle }
})()
