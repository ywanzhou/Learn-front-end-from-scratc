在学习块级作用域之前需要我们对作用域有个了解，所谓的作用域就是代码当中的某个成员起作用的范围。

## 块级作用域是什么

所谓的**块级作用域**，就是该变量只能在声明时的代码块或者子代码块中使用。在ECMAScript 2015以前的版本中是不存在块级作用域的，而ECMAScript 2015提供的`let`关键字，使JavaScript出现了块级作用域，示例代码如下所示

```JavaScript
/*
 * 块级作用域只能使用 let 关键字
 * let关键字不仅可以声明块级作用域， 还可以用在全局作用域和函数作用域
 */
// 全局作用域
let a = 100; // 全局变量
(function () {
  // 函数作用域
  let b = 200; // 局部变量
})()
if (true) {
  // 块级作用域
  let c = 300; // 局部变量
}
console.log(a); // 100
console.log(b); // 抛出异常
console.log(c); // 抛出异常
```

## 为什么需要块级作用域

ECMAScript 5只存在全局作用域和函数作用域，没有块级作用域。这种情况出现一些问题:

1. 局部变量可能会覆盖全局变量

```JavaScript
var v = 100;
(function(){
  console.log(v); // undefined 
  var v = 200;
})
```

1. 在循环体中用于计数的变量泄露为全局变量

```JavaScript
// 定义一个循环体
for (var v = 0; v < 10; v++) {
  console.log("这是一个 for 循环"); // 这是一个 for 循环 * 10
}
console.log(v); // 10
```

  > 在循环完毕之后如果不手动释放此变量，其生命周期跟随此脚本生存，占用内存。

## 与函数声明

ECMAScript5标准规定函数的声明只能在全局作用域和函数作用域中，不能再块级作用域中声明。

1. 情况一：

```JavaScript
if (true) {
  function f() {}
}
```

1. 情况二：

```JavaScript
try {
  function f() {}
} catch(e) {
  // ...
}
```

上面两种函数声明，根据ECMAScript5的规定都是非法的。

而 ECMAScript 2015标准规定在块级作用域声明函数类似于使用了`var`关键字，即在当前块级作用域外无法访问。

```JavaScript
{
  function fun() {
    console.log('this is fun');
  }
}
fun(); // this is fun
// 上面的等同于下面的函数
{
  var fn = function () {
    console.log('this is fn');
  }
}
fn(); // this is fn
// 如果使用 let 关键字 则在块级作用域外无法访问
{
  let f = function () {
    console.log('this is f');
  }
}
f(); // 抛出异常 描述信息为 ReferenceError: f is not defined
```