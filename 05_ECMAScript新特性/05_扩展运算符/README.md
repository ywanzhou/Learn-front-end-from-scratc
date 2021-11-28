# 扩展运算符

扩展运算符是三个点`...` , 允许将一个表达式原地展开，当需要多个参数(比如函数的调用时) 或者多个值(比如数组)它会将其转为用逗号分隔的参数序列。

示例代码如下所示：

```JavaScript
// 定义一个数组
let arr = [1, 2, 3, 4, 5, 6]
// 使用 ... 扩展运算符展开
console.log(...arr); // 1 2 3 4 5 6

// 定义一个函数
function fun(...item) {
  console.log(...item);
}
// 调用函数
fun(1, 2, 3, 4, 5, 6) // 1 2 3 4 5 6

// 与表达式配合使用
let x = 10
arr = [
  ...(x > 0 ? ['a'] : []),
  'b',
];
console.log(...arr); //a b
```


## 替代apply()方法

由于扩展运算符可以展开数组，所以不再需要`apply`方法，将数组转为函数的参数了。

示例代码如下所示：

```JavaScript
// 定义一个函数
function fun(a, b, c, d, e) {
  console.log(a, b, c, d, e);
}
// 定义一个数组
let arr = [1, 2, 3, 4, 5]
// ES5 调用方式
fun.apply(null, arr) //1 2 3 4 5
// ES6 调用方式
fun(...arr) // 1 2 3 4 5
```


假如我们在实际开发中取出数组中的最大值，采用的方式如下所示：

```JavaScript
let arr = [1, 20, 30, 50, 3, 88, ]
// ES5的写法
let max = Math.max.apply(null, arr)
console.log(max); // 88
```


E的写法如下所示：

```JavaScript
let arr = [1, 20, 30, 50, 3, 88, ]
// ES6 的写法
let max = Math.max(...arr)
console.log(max); // 88
```


## 扩展运算符的应用

扩展数组的应用主要表现在以下几个方面

1. 复制数组

&ensp;&ensp;&ensp;&ensp;在ECMAScript 2015之前中如果仅仅是简单的将`arr1`赋值给`arr2`，修改`arr2`时，`arr1`也会进行变化，这就是所谓的**浅复制** ，示例代码如下所示：

&ensp;&ensp;&ensp;&ensp;> 先来理解一下深浅复制的概念：
&ensp;&ensp;&ensp;&ensp;   
&ensp;&ensp;&ensp;&ensp;   深复制：复制数组中的元素内容
&ensp;&ensp;&ensp;&ensp;   
&ensp;&ensp;&ensp;&ensp;   浅复制：复制数组元素内容的内存地址


```JavaScript
let arr1 = [1, 2, 3, 4, 5]
let arr2 = arr1
console.log(arr2); // [ 1, 2, 3, 4, 5 ]
// 修改 arr2 的数据内容
arr2[2] = 6;
// 两者都会发生改变
console.log(arr1, arr2); // [ 1, 2, 6, 4, 5 ] [ 1, 2, 6, 4, 5 ]
```


&ensp;&ensp;&ensp;&ensp;如果想要完成深复制，示例代码如下所示：

```JavaScript
let arr1 = [1, 2, 3, 4, 5]
let arr2 = []
// ES5 写法
for (let i = 0; i < arr1.length; i++) {
  arr2[i] = arr1[i];
}
arr2[2] = 6;
// 仅仅 arr2 改变
console.log(arr1, arr2); // [ 1, 2, 3, 4, 5 ] [ 1, 2, 6, 4, 5 ]

// ES6 写法
arr2 = [...arr1]
arr2[2] = 6;
// 仅仅 arr2 改变
console.log(arr1, arr2); // [ 1, 2, 3, 4, 5 ] [ 1, 2, 6, 4, 5 ]
```


2. 合并数组

&ensp;&ensp;&ensp;&ensp;扩展运算符提供了数组合并的新写法。示例代码如下所示：

```JavaScript
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5 的合并数组
console.log(arr1.concat(arr2, arr3)); // [ 'a', 'b', 'c', 'd', 'e' ]


// ES6 的合并数组
console.log([...arr1, ...arr2, ...arr3]); // [ 'a', 'b', 'c', 'd', 'e' ]
```


&ensp;&ensp;&ensp;&ensp;> 值得注意的是，这两种方式都是浅复制


3. 与解耦赋值结合使用

&ensp;&ensp;&ensp;&ensp;扩展运算符可以与解构赋值结合起来，用于生成数组(用于取剩余数据)。**注意** ：只能将扩展运算符放置最后。

&ensp;&ensp;&ensp;&ensp;示例代码如下所示：

```JavaScript
// 场景分析：取数组中的第一个值和最后一个值
let arr = [1, 2, 3, 4, 5]
let first, rest;
// ES5 的写法：借用 Array.slice() 函数
first = arr[0]
rest = arr.slice(1)
console.log(first, rest); // 1 [ 2, 3, 4, 5 ]
// ES6 的写法
[first, ...rest] = arr
console.log(first, rest); // 1 [ 2, 3, 4, 5 ]
```


4. 将字符串拆分为数组

&ensp;&ensp;&ensp;&ensp;扩展运算符还可以将字符串转为真正的数组。示例代码如下所示：

```JavaScript
let str = '狐妖小红娘'
console.log([...str]); // [ '狐', '妖', '小', '红', '娘' ]
```


