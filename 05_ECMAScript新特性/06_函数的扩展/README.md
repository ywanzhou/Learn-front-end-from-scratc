# 函数的扩展

## 函数参数的默认值

### 函数参数指定默认值

在ECMAScript 2015中，允许为函数的参数添加默认值，将默认值直接写在参数的后面即可。示例代码如下所示：

```JavaScript
// 函数参数指定默认值
function fun(a = 1, b = 2) {
  console.log(a + b);
}
fun() // 3
```


值得注意的是：参数变量是默认声明的，所以不能用`let`或`const`再次声明, 否则会抛出异常。

还有就是默认参数的位置都是在参数列表的最后面，否则会引发歧义，该省略的参数不能省略，如下代码示例：

```JavaScript
// 默认参数的位置应该是在最后面
function fun(a = 1, b) {
  console.log(a, b);
}
// 调用函数，传递一个参数
fun(20); // 20 undefined
```


### 与解耦赋值配合使用

参数默认值可以与解构赋值的默认值，结合起来使用。可以通过两种方式为其设置默认值。示例代码如下所示：

```JavaScript
function fun([a, b = 5] = [3]) {
  console.log(a, b);
}
fun() // 3 5
```


### 函数参数的作用域

一旦设置了参数的默认值，函数进行声明初始化时，参数会**形成一个单独的作用域** 。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。

示例代码如下所示：

```JavaScript
let x = 5

function fun(y = x) {
  x = 10
  console.log(y);
}
fun() // 5
```


## rest参数

ECMAScript 2015引入rest参数（形式为`...变量名`），用于获取函数的多余参数，这样就不需要使用`arguments`对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

示例代码如下所示：

```JavaScript
// 使用 arguments 对象最传入的参数求出最大值
function max1() {
  return Math.max.apply(null, arguments)
}

console.log(max1(1, 5, 6, 33, 65, 35, 15)); // 65

// 使用 rest 参数
function max2(...arg) {
  return Math.max(...arg)
}
console.log(max2(1, 5, 6, 33, 65, 35, 15)); // 65
```


## 箭头函数

### 什么是箭头函数

ECMAScript 2015新增了箭头函数(又称胖剪头函数), 相比函数表达式具有较短的语法并以词法的方式绑定`this` 。箭头函数在大多数情况下都是匿名的。

箭头函数的语法结构如下所示：

```JavaScript
// 基本语法结构
(参数1, 参数2, ..., 参数N) => {函数声明}
(参数1, 参数2, ..., 参数N) => 表达式(单一)
// 相当于:(参数1, 参数2, ..., 参数N) => {return 表达式}

// 当只有一个参数时，小可号是可选的
(参数) => {函数声明}
// 或者
参数 => {函数声明}

// 没有参数应该写一对小括号
() => {函数声明}

// 可以配合 rest 参数和默认参数
(参数1, 参数2, ...rest) => {函数声明}
(参数1, 参数2, ..., 参数N = 默认值N) => {函数声明}
```


箭头函数也可以为其定义函数名，语法结构如下所示：

```JavaScript
let funName = (参数1, 参数2, ..., 参数N) => {函数声明}
```


示例代码如下所示：

```JavaScript
let sum = (a, b) => {
  return a + b
}
console.log(sum(10, 20)); //30
```


### 箭头函数的注意事项

箭头函数有几个使用注意点。

1. 函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。

&ensp;&ensp;&ensp;&ensp;示例代码如下所示：

```JavaScript
// ES5 写法
let fun1 = function () {
  console.log(this.id);
}
// ES6 箭头函数写法
let fun2 = () => {
  console.log(this.id);
}

let obj1 = {
  id: 666,
  fun: fun1
}
let obj2 = {
  id: 666,
  fun: fun2
}
obj1.fun() // 666
obj2.fun() // undefined
```


&ensp;&ensp;&ensp;&ensp;由代码我们可以看出，普通函数的`this`是调用时确定的，而我们的箭头函数的`this`是在定义时就确定了的。

2. 不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误。

3. 不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用[rest参数](https://www.wolai.com/fhWSGLfDYhSXynAGLsQixF)代替。

## 函数的尾调用

尾调用是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。

示例代码如下所示：

```JavaScript
let x = (x) => {
  return 2 * x
}

let y = function (y) {
  return x(y)
}

console.log(y(20)); // 40
```

