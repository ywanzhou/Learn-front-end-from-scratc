;(function () {
  // 定义一个对象，里面包含 MyName 和 age 两个属性，其中 MyName 为 string 类型 age 为number 类型
  let obj: {
    MyName: string
    age: number
  }
  // 对象的赋值，如果不按上面指定的类型进行赋值会抛出异常
  obj = {
    MyName: '一碗周',
    age: 18,
  }
  console.log(obj) // { MyName: '一碗周', age: 18 }
})()
