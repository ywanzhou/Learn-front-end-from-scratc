# JavaScript中的基本数据类型

## 写在前面

本篇文章我们将来学习JavaScript中的基础数据类型，阅读本篇文章你可以掌握如下内容

![](image/JavaScript%E4%B8%AD%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B(%E5%AF%BC%E8%AF%BB).png)

## 什么是数据类型

### 概述

在上一篇文章[JavaScript中的变量](https://www.wolai.com/mRvBYucYRSzie23uzo9RKs)中我们知道了变量是用来存储数据信息的，我们把这些被存储的数据信息进行不同类别的划分，这些不同的数据类别就被称为**数据类型** 。

由于JavaScript是一个弱类型的脚本语言，也就是说在定义变量的时候不需要指定变量的存储类型，它只有在执行的时候才会确定数据类型。

### 数据类型的分类

在ECMAScript5之前的版本中，存在着6种数据类型，分为基础数据类型和复杂类型，具体如下所示：

**基础数据类型** ：

- `number`数字类型：整数或小数，并在 `±(2 ** 53 - 1)`的范围内。

- `string`字符串类型：一个字符串可以包含 0 个或多个字符。

- `boolean`布尔类型：该类型具有两个特殊的值，即`true`和`false`。

- `null`一个特殊的数据类型，用于未知的值。

- `undefined`一个特殊的数据类型，用于未定义的值。

**复杂的数据类型** 为`Object`类型，一个Object类型又可以细分为三个类型：

- 狭义的`object`类型，即对象类型

- `Array`类型（数组）

- `Function`类型（函数）

&ensp;&ensp;&ensp;&ensp;> 这些数据类型我们将在后面的文章中单独学习


> 新版的ECMAScript还新增了`symbol`类型以及`bigint`类型，我们会在**ECMAScript新特性** 中学习


## 基本数据类型

### 布尔类型

布尔类型即`boolean`类型相比于其他数据类型而言，是JavaScript中视频频率最高的数据类型，该数据类型中只有两个值，即`true`和`false`，这两个值通常用来指代真或假、开或关、是或否等场景。

示例代码如下：

```JavaScript
var flag = true

var lost = false

console.log(flag) // true
console.log(lost) // false
```


### 数字类型

数字类型即`number`类型，`number`类型又可以细分为正数类型和浮点数（小数）类型。JavaScript中的`number`类型的数据是在`±(2 ** 53 - 1)` 区间内的，大于这个位数后面的数组将会显示为`0`。示例代码：

```JavaScript
999999999999999111111
// 999999999999999100000
```


定义一个变量为number类型的示例代码如下：

```JavaScript
var num = 1 // 整数
var float = 1.2 // 浮点数
```


### 特殊的值

JavaScript中的数值还存在两个比较特殊的值，分别是NaN和Infinity。

#### NaN

NaN是一个简写形式，全称为Not a Number，译为不是一个数字值，该值通常用来表示经计算之后的结果不是一个数字值。

NaN本身存在着两个特点，具体如下：

- 任何涉及到NaN的操作都会返回NaN

- NaN与任何值都不相等，包括NaN本身

JavaScript针对NaN的特性提供了`isNaN()`函数，该函数用于检测一个数值为NaN，并返回一个布尔值，示例代码如下：

```JavaScript
var notANumber = NaN
var number = 10

console.log(isNaN(notANumber)) // true
console.log(isNaN(number)) // false
```


#### Infinity

JavaScript中的number类型的能够表示数值的范围是`2 ** 1024`到`2 ** - 1023`，超出这个范围则会得道两个值，分别是`Infinity`和`-Infinity`，表示无穷大和无穷小。

除了上面超出范围得到`Infinity`的情况，还有就是可以通过非`NaN`的数值`/`0得到`Infinity`，示例代码如下：

```JavaScript
 1 /  0  //  Infinity
 1 / -0  // -Infinity
-1 / -0  //  Infinity
```


`Infinity`具有以下特性：

- `Infinity`和`-Infinity`两者是不相等的。

- `Infinity`大于一切数值（除了`NaN`），`-Infinity`小于一切数值（除了`NaN`）。

- `NaN`与`Infinity`是永远不相等的。

`Infinity`是可以进行四则运算的，其**运算规则如下** ：

- `Infinity`与`undefined`，无论使用什么运算，都会得到`NaN`

- `0 * Infinity`得到`NaN`；`0/Infinity`得到`0`；`Infinity / 0`得到`Infinity`

- `Infinity`与`null`进行计算时，`null`会被转换成0，所以`Infinity`与`null`的计算与`Infinity`与0的计算是相同的。

- `Infinity`加或者乘一个`Infinity`的话，得到的是一个`Infinity`

- `Infinity`减或者除一个`Infinity`的话，得到的是一个`NaN`

### 字符串类型

字符串类型又称`string`类型，是由0个或者多个字符组成的，该字符且有单引号(`''`)或者双引号(`""`)进行包裹。示例代码如下：

```JavaScript
var str1 = '' // 定义一个空字符串
var str2 = "" // 使用双引号定义一个空字符串，与单引相同

var str3 = 'this is str'
```


如果想要在字符串中使用单引号(`''`)或者双引号(`""`)，示例代码如下：

```JavaScript
var str1 = '"a"' // "a"
var str2 = "'a'" // 'a'
```


除了上面这种方法，JavaScript还提供了转义字符，具体会在下面介绍

#### 转义字符

|转义字符|含义|
|---|---|
|`\n`|换行符|
|`\t`|制表符|
|`\b`|退格符|
|`\r`|回车符|
|`\f`|换页符|
|`\\`|斜杠|
|`\'`|单引号（`'`），在用单引号表示的字符串中使用|
|`\"`|双引号（`"`），在用双引号表示的字符串中使用|



示例代码如下：

```JavaScript
var str = '\"这是一个\t字符串\"'

console.log(str)  // "这是一个  字符串"
```


### undefined

undefined类型只有一个值，就是`undefined`，表示未定义。一般情况下，我们不会将一个变量赋值为`undefined`，但是JavaScript并不会阻止我们将一个变量赋值为`undefined`，示例代码如下：

```JavaScript
let v = undefined
console.log(v) // undefined
```


除了主动赋值，JavaScript还有以下几种情况会得到`undefined`，具体如下：

- 声明变量但未初始化值时，该变量的值为`undefined`

- 声明变量并初始化值为 undefined 时，该变量的值为`undefined`

- 函数中的return语句的默认返回值为`undefined`

- 函数中的return语句的返回值设置为`undefined`

- 访问某一个对象中不存在的属性时，得到的结果为`undefined`

在JavaScript中有这么多种情况会得到`undefined`，有一下两种方法可以判断当前值是否为`undefined`，具体如下：

- 使用全等号(`===`)来判断当前变量的值是否为`undefined`。

&ensp;&ensp;&ensp;&ensp;> 关于运算符将在下一篇文章进行介绍


- 可以使用typeof运算符来判断变量的值是否为`undefined`。

### typeof运算符

JavaScript中提供的typeof运算符可以判断当前变量是什么数据类型的，它会返回一个字符串。

typeof运算符可以判断的类型主要有以下几种：

- `number`类型，将会返回一个`'number'`的字符串。

- `string`类型，将会返回一个`'``string``'`的字符串。

- `boolean`类型，将会返回一个`'``boolean``'`的字符串。

- `undefined`类型，将会返回一个`'``undefined``'`的字符串。

- 其他数据类型将会返回一个`'object'`的字符串。

示例代码如下：

```JavaScript
var str = '',
    num = 0,
    bool = true,
    u = undefined

console.log(typeof str) // string 
console.log(typeof num) // number
console.log(typeof bool) // boolean
console.log(typeof u) // undefined
```


### null

null类型在JavaScript中也仅有一个值，即`null`，表示一个空指针。这就导致使用`typeof`运算符去判断`null`的类型得到的结构是undefined。

```JavaScript
console.log(typeof null) // object
```


`null`值在实际开发中主要完成的工作内容如下：

- 当声明一个变量但不进行初始化的话，可以将该变量的值赋值为`null`。这样做的好处是**该变量不会占用内存空间** 。

- 当一个变量不再使用时，需要将该变量的值赋值为`null`。这样做表示将**该变量从内存空间进行释放出来** 。

## 类型转换

由于JavaScript是弱类型脚本语言，只有在执行时才会确定其数据类型，从而运行时会根据使用情况来进行类型的转换。

JavaScript中的类型转换主要分为两种，分别是隐式类型转换和显式类型转换。

### 隐式类型转换

所谓的隐式类型转换就是通过特定的表达式来实现从一个类型转换为另一个类型的。

#### 转换为boolean类型

将要将其他的数据类型转换为布尔类型的话，只需要在最前面增加两个感叹号(`!!`)即可。示例代码如下：

```JavaScript
var str = 'this is string'

console.log(!!str) // true
```


其他类型转换布尔值的转换规则如下：

|数据类型|转换为 true 值|转换为 false 值|
|---|---|---|
|boolean类型|`true`|`false`|
|string类型|任何非空字符串|`""`（空字符串）|
|number类型|任何非零数字值（包括无穷大）|`0`、`0.0` 和 `NaN`|
|object类型|任何对象|null|
|undefined| |`undefined`|



#### 转换为number类型

如果其他数据类型想要转换为number类型，只需要在前面增加一个加号(`+`)即可，示例代码如下：

```JavaScript
/**
 * 如果将字符串转换为数字的话，如果转换失败的话会得到NaN
 */
console.log(+'10') // 10
console.log(+'str') // NaN 

/**
 * 布尔类型转换为数字的话，true = 1， false = 0
 */

console.log(+true) // 1
console.log(+false) // 0

```


#### 转换为string类型

如果其他数据类型想要转换为string类型的话，在前面或者后面拼接一个空字符即可，拼接字符串使用的是加号(`+`)，示例代码如下：

```JavaScript
var str1 = '' + true
console.log(typeof str1) // string
var str2 = '' + 100
console.log(typeof str2) // string
```


> 除了以上的那几种情况，在调用函数时，如果函数接收的是一个字符串类型，你传递的一个数字类型，也会进行类型转换；还有就是`if`后面的小括号中的内容也会进行类型转换。(关于函数和`if`语句，我们会在以后学习)


### 显式类型转换

所谓显式类型转换，就是JavaScript对应的函数或者方法来完成数据类型之间的转换。

#### 转换为boolean类型

显式的将其他数据类型转换为boolean类型，使用的是JavaScript提供的`Boolean()`函数，示例代码如下：

```JavaScript
var str = '123'
var num = 1

var bool1 = Boolean(str)
var bool2 = Boolean(num)

console.log(typeof bool1) // boolean 
console.log(typeof bool2) // boolean
```


#### 转换为number类型

JavaScript提供的将其他类型转换为number类型有三种，具体如下：

- `Number()`函数，如果转换的变量无法转换为数字类型，结果则为`NaN`。

- `parseInt()`函数，该函数可以将string类型的值转换为一个整数或者NaN。

- `parseFloat()`函数，该函数可以将string类型的值转换为一个浮点数或者NaN（如果转换的是一个整数的话则会返回一个整数）。

示例代码如下：

```JavaScript
var str1 = '10'
var str2 = 'str'

// 使用 Number
console.log(Number(str1)) // 10
console.log(Number(str2)) // NaN

// 使用parseInt
console.log(parseInt(str1)) // 10
console.log(parseInt(str2)) // NaN
// 如果转换的是一个浮点数，最终不会保留小数点
console.log(parseInt(10.5)) // 10

// 使用parseFloat
console.log(parseFloat(str1)) // 10
console.log(parseFloat(str2)) // NaN 
console.log(parseFloat(10.5)) // 10.5

```


#### 转换为string类型

JavaScript提供的将其他类型转换为string类型有两种，具体如下：

- `String()`函数

- `Object`对象提供的`toString()`方法

&ensp;&ensp;&ensp;&ensp;> 关于对象与方法这里仅做了解，后面讲解


示例代码如下：

```JavaScript
var bool = true
var num = 123

// 使用String()函数
var str1 = String(bool)
var str2 = String(num)

console.log(typeof str1) // string
console.log(typeof str2) // string

// 使用 Object.toString()方法

var str3 = Object.toString(bool)
var str4 = Object.toString(num)

console.log(typeof str3) // string
console.log(typeof str4) // string
```


## 总结

![](image/JavaScript%E4%B8%AD%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B(%E6%80%BB%E7%BB%93).png)


