# 函数

## 函数定义

### JavaScript中的函数

在学习TypeScript中的函数前我们先来回顾一下JavaScript中的函数定义常用的包含以下几种

第一种：使用`function`关键字声明函数

```JavaScript
function add1 (x, y) {
    return x + y
}
```


第二种：使用字面量方式声明函数

```JavaScript
const add2 = function (x, y) {
    return x + y
}
```


第三种：使用箭头函数声明函数

```JavaScript
const add3 = (x, y) => {
    return x + y
}
```


### TypeScript中的函数

TS中的函数声明方式与JS类似，唯一不同的就是固定了参数类型了返回值类型，如果没有返回值其返回值类型必须为`void`而不是留空。

接下来用 TS 的方式重新声明以上是三个函数：

第一种：使用`function`关键字声明函数：

```TypeScript
/*
 语法结构如下
 function 函数名(形参1: 类型, 形参2: 类型,...): 返回值类型 {
     函数体
 }
 */
function add4(x: number, y: number): number {
    return x + y
}
```


第二种：使用字面量方式声明函数

```TypeScript
/*
 语法结构如下
 const 函数名 = function (形参1: 类型, 形参2: 类型,...): 返回值类型 {
     函数体
 }
 */
const add5 = function (x: number, y: number): number {
    return x + y
}
```


第三种：使用箭头函数声明函数

```TypeScript
/*
 语法结构如下
 const 函数名 = (形参1: 类型, 形参2: 类型,...): 返回值类型  => {
     函数体
 }
 */
// 3. 使用箭头函数声明函数
const add6 = (x: number, y: number): number => {
    return x + y
}
```


以上就是在TS中声明函数的方式。JS中还有一种参数解耦赋值的情况，这种在TS中怎么指定参数类型呢？示例代码如下：

```TypeScript
const add7 = ({ x, y }: { x: number; y: number }): number => {
    return x + y
}

```


在TS中还有一种可读性更高的写法，如下所示：

```TypeScript
const add8: (baseValue: number, increment: number) => number = function (
    x: number,
    y: number
): number {
    return x + y
}

```


这种方式将函数分为两个部分，`=`前面是函数的类型的返回值类型，后半部分才是函数定义的地方。

其实前半部分也就是为了增加代码的可读性，没有太大的实际意义。

## 可选参数和默认参数

TypeScript 里的每个函数都是必须。这并不代表不能传递`null`和`undefined`作为参数，而是是否为每个参数都传递了值，如果不一一对应，则会抛出异常。简单的说就是形参个数与实参个数一致。

示例代码如下所示：

```TypeScript
function add(x: number, y: number): number {
    return x + y
}
let result1 = add(1) //  Expected 2 arguments, but got 1.
let result2 = add(1, 2)
let result3 = add(1, 2, 3) //  Expected 2 arguments, but got 3

```


在JS中每个参数都是可选的，可传递也可不传递，如果不传递的时候，它将是默认的`undefined` 。

在TS中也是可以实现的，我们只需要在**参数名后面添加** `?`**即可实现可选参数** 的功能。如下代码

```TypeScript
// 实现可选参数功能
// 参数名旁加一个?即可
function add(x: number, y?: number): number {
  return x + y
}
let result1 = add(1)
let result2 = add(1, 2)
// let result3 = add(1, 2, 3) //  Expected 2 arguments, but got 3

```


> 如上代码就实现了**可选参数** 


在TS中实现默认参数与JS实现默认参数是相同的，只需要为其赋值即可。示例代码如下所示：

```TypeScript
;(function () {
  function add(x: number, y: number = 2): number {
    return x + y
  }
  let result1 = add(1) // 3
  let result2 = add(1, 2) // 3
})()

```


> 当然，如果不为`y`指定类型就与JS中一样一样了。


## 剩余参数

所谓的剩余参数就是函数定义时需要传递两个参数，而函数调用时传递了3个参数；此时就多余出一个参数，该参数就是剩余参数。

在 JS 中我们可以使用`arguments`来访问多余传递的参数。那在TS中怎么访问剩余参数呢？

实际上TS中可以将所有的参数存储在一个变量中，该变量实际上一个解耦的一个数组。示例代码如下：

```TypeScript
function fun(x: number, ...numbers: number[]): void {
    console.log(numbers)
}
fun(1, 2, 3, 4) // [ 2, 3, 4 ]
```



