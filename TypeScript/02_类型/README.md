# 类型

TS 的静态类型可以人为的分为两类：

- 基础类型：像布尔值(`boolean`)、数字(`number`)、字符串(`string`)、`Any`(任意类型)、`Void`(无类型)、`Null`、 `Undefined`、`Never`(无值类型)

- 对象类型：像数组、函数、对象、枚举、元组。

## 基础类型

TS的类型定义主要通过以下示例代码中演示的方式进行定义：

```TypeScript
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

```


> 基础类型比较简单，特别类似于JavaScript，简单看来就是比JavaScript多了一个类型定义


TS 中还有一个Never类型。该类型表示的是那些永远不会存在的值得类型。例如，`never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。

## 对象类型

### 数组

TS中的数组不同于JS中的数组，在TS中使用数组不仅可以将一个变量定义为数组，也可以定位数组中的类型。

示例代码如下所示：

```TypeScript
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

```


### 元组

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 示例代码如下所示：

```TypeScript
;(function () {
  // 定义一个值分别被 string 和 number 的元组
  let tuple: [string, number] = ['123', 123]
  console.log(tuple) // [ '123', 123 ]
  // 通过索引赋值
  tuple[0] = 'string'
  console.log(tuple) // [ 'string', 123 ]
  // 赋值其他类型
  // tuple[0] = true
  // console.log(tuple) // 抛出异常
})()

```


> 元组的主要作用就是约束数组中的每一项，及其数组的长度。 


元组和数组是可以可以嵌套的，语法结构如下所示：

```TypeScript
// 元组和数组的嵌套
let tuples: [string, number][] = [
    ['123', 123],
    ['456', 456],
]

```


上面的代码中，`[string, number]`表示一个元组，在后面增加`[]`，就表示这个一个存放元组的数组。

### 对象

一个对象中可以包含以上所有的类型，示例代码如下所示：

```TypeScript
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


```


在TS中我们并不需要在每个地方标注类型，因为**类型推断** 可以帮助我们在不编写额外代码的，即可获得其功能。但是你想让你的代码可读性更好一些，可以写上每个的类型。

## 类型推断

在TypeScript中有的时候并需要明确指定类型，编译器会自动推断出合适的类型，比如下面这段代码：

```TypeScript
;(function () {
  let myName = '一碗周'
  myName = true // 错误：不能将类型“boolean”分配给类型“string”
})()


```


我们定义`myName`变量时，并没有指定其数据类型，只是为他赋了一个字符串的值，但是我们如果将这个值重新赋值为要给非`string`类型的值时，编译器将会抛出异常。

这就是TypeScript中最简单的类型推断，根据右侧的值来推测变量的数据类型。

### 类型联合中的类型推断

什么是类型联合请参考：[联合类型、交叉类型和类型保护](https://www.wolai.com/guFCEu697DwrCJ8HyarcKz)

若一个变量可能具有多个类型的值时，TypeScript 会将多个类型合并起来，组成一个联合类型，示例代码如下：

```TypeScript
let arr = [1, '2'] // 定义一个包含字符串和数字的一个数组
// 为上面定义的数组重新赋值
// arr = [true, false] // 错误 不能将类型“boolean”分配给类型“string | number”

// 还有如下例子
let val = arr.length === 0 ? 0 : '数组长度不是0'
// val = false //  错误 不能将类型“boolean”分配给类型“string | number”
```


### 上下文类型

在这之前介绍的例子可能都是按照`=`右边的值来推断`=`左边的类型。现在要介绍的上下文类型就与之前的类型推断不同，编译器会根据当期变量所处的上下文环境来推断出变量的类型。示例代码如下：

```TypeScript
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
    console.log(item.hobby) // 类型“Person”上不存在属性“hobby”
  })
})()


```


在上面的代码中，我们首先定义了一个`Person`的接口，然后用这个接口定义一个数组，遍历该数组时编译器推断`item`为`Person`类型，所以编译器抛出异常。

如果我们为函数表达式的参数添加类型注解，上下文类型将会被忽略到，也就不会在报错了。示例代码如下：

```TypeScript
// 如果在上下文中明确类型信息，上下文将会被忽略。
arr.forEach((item: any) => {
    // 根据当前所处的环境，编译器自动推断出 item 为 hobby 类型且不具有 hobby 属性
    console.log(item.hobby) // 类型“Person”上不存在属性“hobby”
})

```


## 类型断言

所谓的类型断言就是你来告诉TS这个值得数据类型就是某样的，你不需要做检查。

这样做得话他在运行是不会影响，只有在编译的时候回影响。示例代码如下：

```TypeScript
let SomeValue: any = 'this is a string'
// 语法一
let StrLength1: number = (<string>SomeValue).length
// 语法二 as 语法
let StrLength2: number = (SomeValue as string).length

```


> 值得注意的是，在TS中使用JSX时，只有第二种语法是被支持的。


