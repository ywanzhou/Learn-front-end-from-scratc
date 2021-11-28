# let与const关键字

## let关键字

### 基本用法

`let`是ECMAScript 2015新增的一个关键字，用于声明变量，其用法类似于`var`，与之不同的是声明的变量只能在所在的代码块中使用。

语法结构如下所示：

```JavaScript
let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]];
```


参数说明：

- `var1, var2, …, varN`：变量名。必须是合法的标识符。

- `value1, value2, …, valueN`：变量的初始值。可以是任意合法的表达式。

示例代码如下所示：

在全局作用域是定义变量

```JavaScript
// 定义全局变量
var a = 100; // 使用 var 关键字
let b = 200; // 使用 let 关键字
console.log(a); // 100
console.log(b); // 200
```


我们发现简单的定义一个全局变量两者并没有什么区别。

在块作用域中定义变量

> 关于[块级作用域](https://www.wolai.com/kcWafjywQLKLGzgztwKsct)可以参考这篇。


```JavaScript
// 在块作用域中定义变量
{
  var a = 100; // 使用 var 关键字
  let b = 200; // 使用 let 关键字
}
console.log(a); // 100
console.log(b); // 抛出异常，描述信息为 ReferenceError: b is not defined
```


如果`let`是在代码块中使用的，其代码块则是一个全新的作用域，在作用域外则无法访问其变量。

ES6 提供的`let`关键字，特别适合在作为`for`循环计算器的变量使用，如果这样做的话，其变量只能在循环体内使用，出了这个循环体就会抛出异常，示例代码如下所示：

```JavaScript
// 定义一个循环体
for (let v = 0; v < 10; v++) {
  console.log("这是一个 for 循环"); // 这是一个 for 循环 * 10
}
console.log(v); // 抛出异常，描述信息为：ReferenceError: v is not defined
```


值得注意的是，`for`循环还有一个特别之处，那就是设置循环变量的那一部分是一个父作用域，而循环体又是一个单独的子作用域，示例代码如下所示：

```JavaScript
for (let v = 0; v < 10; v++) {
  let v = 10
  console.log(v); // 100 * 10
}
```


> 得出上面的那种结果就表示两个`v`并不是处于同一个作用域。


### 不存在变量提升

如果使用`var`定义变量，就会发生所谓的变量提成，如下代码所示：

```JavaScript
console.log(v); // undefined
var v = 100;
```


我们在变量声明之前使用这个值，其并不会报错，而结果是`undefined`，这是一个奇怪的逻辑，按照一般的逻辑如果这样使用的话，其应该会抛出异常。

在ECMAScript 2015中，`let`关键字就解决了这个奇怪的现象，如下代码所示：

```JavaScript
console.log(v); // 抛出异常 描述信息为 ReferenceError: Cannot access 'v' before initialization
let v = 100;
```


在上述代码中，则会抛出异常，描述信息为 在声明之前不能使用某变量。

### 暂时性死区

只要块级作用域中存在`let`关键字定义的变量，他所声明的变量就**绑定** 这个区域，不会再受外界的影响。示例代码如下所示：

```JavaScript
let v = 100; 
{
  console.log(v); // 抛出异常 描述信息为 ReferenceError: Cannot access 'v' before initialization
  // 此变量绑定在该块级作用域中，该作用域只能只用此变量
  let v = 200;
}
```


ECMAScript 2015明确规定，如果区块中存在`let`关键字，则这个区块对这些命令声明的变量从一开始就形成封闭作用域。只要在声明之前使用这些变量，就会报错。

总的来说，在块级作用域中，使用`let`关键字声明变量之前，该变量是不可用的，这在语法上称为**暂时性死区** ，英文*temporal dead zone* 简称TDZ。

### 不允许重复声明

ECMAScript 2015提供的`let`关键字是不允许进行重复声明，这点与`var`又不相同，示例代码如下所示：

```JavaScript
// 使用 var 声明变量
var a = 100;
console.log(a); // 100
var a = 1000; // 重复声明
console.log(a); // 1000

// 使用 let 声明变量
let b = 100;
console.log(b); // 100
let b = 1000; // 重复声明
console.log(b); // 抛出异常 描述信息为：SyntaxError: Identifier 'b' has already been declared
```


如果重复声明会抛出`SyntaxError`异常

### 与函数的关系

我们在的函数参数相当于使用`let`关键字定义的变量，如果在函数体中重新使用`let`关键字重新声明一个与参数名一样的变量则会抛出`SyntaxError`异常，当然，函数体中使用`let`也不允许出现变量提升

```JavaScript
// 使用 let 声明变量
let a = 100;
// 定义一个函数
function fun(b) {
  // let b = 10; // 抛出异常，描述信息为：SyntaxError: Identifier 'b' has already been declared
  console.log(a); // 抛出异常，描述信息为：ReferenceError: Cannot access 'a' before initialization
  let a = 200;
}
fun(20)
```


## const关键字

### 基础用法

`const`关键字用于声明一个常量，我们可以将`const`关键字生成的常量理解为不可变的`let`变量，这里因为const关键字具有`let`关键字的所有特性，在原基础上增加了不可变这个特性。

所谓的常量就是初始化之后不可变，且声明时必须初始化，示例代码如下：

```JavaScript
const a = 2
a = 3 // 抛出异常

const b // 未初始化抛出异常 
```


但是我们通过`const`去初始化一个对象或者数组，我们可改变里面的值，它并不是报错，示例代码如下：

```JavaScript
const arr = []
arr[0] = 100 
console.log(arr) // [100]
const obj = {}
obj.name = '一碗周'
console.log(obj) // {name: "一碗周"}
```


出现这种问题的原因是因为`const`关键字实际上保证的并不是变量的值不能被改动，而是变量所指向的那个内存地址不被改动，对于简单的数据类型，例如String、Number、Boolean，这些值就保存在变量所指向的那个内存地址，所以它不可以进行二次修改。

但是对于复合类型的数据，主要指Array和Object，变量指向的内存地址，保存的只是一个指针，`const`只能保证这个指针指向的内存地址是固定的，至于它指向的内存地址中保存的数据结构是不是可变的，就完全不能控制了。

在实际的开发中，我们避免使用`var`关键字，而是使用`cosnt`关键字，需要使用变量时，我们使用`let`关键字。

