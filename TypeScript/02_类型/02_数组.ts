;(function () {
  // 定义一个仅仅为数字的数组类型
  let arr1: number[] = [1, 2, 3]
  console.log(arr1)
  // 定义一个可以为 数字 字符串 布尔值的数组
  let arr2: (number | string | boolean)[] = ['1', '2', true]
  console.log(arr2)
  // 定义一个任意类型的数组
  let arr3 = [1, ['1', '2', true], true]
  console.log(arr3)

  // 定义个对象类型的数组，对象中必须有 name 和 age 两个属性
  const objectArray: { name: string; age: number }[] = [
    { name: '一碗周', age: 18 },
  ]
  // 或者通过 type alias 类型别名的方式声明
  // 通过 type 定义一个类型别名
  type User = { name: string; age: number }
  const objectArr: User[] = [{ name: '一碗周', age: 18 }]
})()
