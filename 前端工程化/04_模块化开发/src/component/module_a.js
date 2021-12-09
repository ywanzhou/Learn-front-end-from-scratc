// let moduleA = {
//   name: '一碗周',
//   handle() {
//     console.log(this.name)
//   },
// }

;(function () {
  let name = '一碗周'
  function handle() {
    console.log(name)
  }
  window.moduleA = { handle }
})()
