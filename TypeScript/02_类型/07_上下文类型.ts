;(function () {
  // 定义一个接口
  interface Person {
    name: string
    age: number
  }
  // 通过上面定义的接口定义一个数组
  let arr: Person[] = [{ name: '一碗周', age: 18 }]
  // 遍历定义的数组
  arr.forEach(item => {
    // 根据当前所处的环境，编译器自动推断出 item 为 hobby 类型且不具有 hobby 属性
    // console.log(item.hobby) // 类型“Person”上不存在属性“hobby”
  })
})()
