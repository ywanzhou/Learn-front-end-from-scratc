// 通过 define() 方法定义
define(() => {
  let name = '一碗周'
  console.log('this is module')
  return {
    name,
    getName() {
      return name
    },
    setName(n) {
      name = n
    },
  }
})
