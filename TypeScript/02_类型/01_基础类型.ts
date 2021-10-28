;(function () {
  /*
   * 在 TS 中可以通过 let 变量名: 数据类型 = 变量值值得方式定义数据类型(类型注解)
   * 也可以在定义的时候不指定数据类型，TS 自身会推断该数据类型
   */
  // 布尔型
  let boo: boolean = false // 赋值非布尔值将会抛出异常

  // 数字类型
  let num: number = 100

  // 字符串
  let str: string = '字符串' // 使用单引号或者双引号定位
  str = `模板字符串` // 使用模板字符串定义

  // Any 类型 -> 表示该类型可以为动态的类型，该类型在编译的时候移除了类型检查
  let AnyType: any = 123
  AnyType = true // 重复赋值不会抛出异常

  // Void 类型 -> 通常用于没有返回值的函数类型
  function demo(): void {
    console.log('测试void类型')
  }
  demo()

  // 还有两个比较特殊的类型，就是 null 和 undefined
  // 这两个类型是所有类型的子类型，也就是说可以将这两个两个类型赋值给 number、string 等类型
  let u: undefined = undefined
  num = u // 将 number 类型的变量赋值为 undefined
  let n: null = null
  boo = n // 将 boolean 类型的变量赋值为 null
})()
