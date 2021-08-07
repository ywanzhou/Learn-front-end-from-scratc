# JavaScript词法结构

> Hello 大家好，我是[彼岸繁華🌸](https://juejin.cn/user/3350967174838701/posts)，一个想进大厂的大三学生，为了有一个完整的前端知识体系，现在我要从头开始学习、梳理、总结。


> 本系列文章在掘金首发，编写不易转载请获得允许


## 写在前面

本篇文章来学习JavaScript中的词法结构。词法结构是一门开发语言的基础规则，用来描述如何使用JavaScript语言来编写程序。

这篇文章包含了如下内容：

- 标识符的规范

- 语句和表达式

- 分号

- 注释

- 代码块

- 关键字与保留字

## 标识符

所谓的**标识符** 指的就是用来识别各种值的合法名称。最常见的标识符就是变量名、函数名。JJavaScript 语言是一种区分大小写的语言，也就是说`hello`、`Hello`和`HELLO`是不同的标识符。

每一种语言都有一套属于自己的标识符命名规则，如果遇到非法标识符就会报错。JavaScript的标识符命名规则如下：

- 第一个字符必须是任意Unicode字母，或者美元符号(`$`)、下划线(`-`)。

- 第二个字符及以后，除满足第一个规则外，该可以使用数字。

- JavaScript中还支持中文变量，但是不建议这么做。

- 关键字和保留字也不允许作为标识符使用

示例代码如下：

```JavaScript
var a = 1 // 合法
var $ = true // 合法
var _ = '彼岸繁華' // 合法
var a1 = '1' // 合法
var $_a = '正常人不这么写' // 合法
var 1a = '完犊子' // 变量第一个字符不能是数字
var 彼岸繁華 = ‘’ // 也合法
```


## 语句和表达式

JavaScript中的语句简单的说就是一行代码，例如：

```JavaScript
console.log('Hello World')
```


上面就是一个语句，将会在命名行中输出`'Hello World'`，通常情况下，JavaScript中的每一条语句独占一行。

JavaScript中的表达式是用于得到某个返回值的计算式，例如`1+2`，这就是一个表达式。

表达式与语句的区别就是语句用于执行某种操作，而表达式用于得到一个值。

## 可选的分号

一般情况下，JavaScript语言会使用分号（`;`）作为一条语句的结束，这对JavaScript语言的可读性和整洁性是非常重要的。

如下示例代码展示了使用分号作为一条语句的结束：

```javascript
var sum = a + b;
var diff = a - b;
```


上述示例代码也可以编写为如下所示：

```javascript
var sum = a + b;var diff = a - b;
```


通过上述两个示例代码，我们可以看出当使用分号作为语句的结束时，无论是将两条语句编写在两行还是一行都是允许的。

但在JavaScript语言中的分号也并不是必不可少的。如果JavaScript语言中的每一条语句都独占一行的话，那么用来表示结束的分号就可以省略。

如下示例代码展示了省略分号的用法：

```javascript
var sum = a + b
var diff = a - b
```


但需要注意的是，如下示例代码如果省略了分号，运行时会报错：

```javascript
var sum = a + bvar diff = a - b;
```


## 代码块

JavaScript语言中可以将多行语句组合为一个代码块，代码块通常开始使用左花括号（`{`），结束使用右花括号（`}`）。示例代码如下

```JavaScript
{
  console.log('我在一个代码块中.')
}
```


上述代码在ECMAScript 5版本以及之前版本中，运行后是不会报错的，但并不推荐这种写法。因为ECMAScript 2015版本之后就出现了块级作用域的概念和用法。

## 注释

与任何一种语言一样，JavaScript 语言同样是注释，其作用与任何一种语言都是类似的，用来描述一段代码的含义或者作用的。

JavaScript 语言中支持2种格式的注释：

- 单行注释：使用`//`表示注释的开始。

- 多行注释：使用`/*`作为注释的开始，使用`*/`作为注释的结束。

如下示例代码展示了JavaScript语言的2种格式的注释的用法：

```javascript
// 这里是单行注释

/*
   这里是多行注释
 */
```


值得注意的是，多行注释是不能进行嵌套的，如下示例代码所示：

```javascript
/* 然而, 你不能, /* 嵌套注释 */ 语法错误 */
```


## 关键字与保留字

所谓关键字，就是在JavaScript语言中具有特殊用途的一组标识符，这些标识符是不能被用作变量名或者函数名的。关键字是由ECMA-262标准定制的，不同版本的ECMA-262标准中的关键字可能会有差异。

所谓保留字，就是目前在JavaScript语言中还没有明确的特殊用途，将来可能会成为关键字的一组标识符。

JavaScript中关键字和保留字如下表所示：

|break|break|catch|volatile|transient|
|---|---|---|---|---|
|class|const|continue|synchronized|short|
|debugger|default|delete|native|long|
|do|else|export|int| |
|extends|finally|for|float|goto|
|function|if|import|double|final|
|in|instanceof|new|boolean|byte|
|return|super|switch|static|await|
|this|throw|try|abstract|enum|
|typeof|var|void|char|package|
|while|with|yield|protected|private|
|enum|implements|let| | |



## 总结

![](image/JavaScript%E8%AF%8D%E6%B3%95%E7%BB%93%E6%9E%84.png)

**预告** ：下一篇文章我们将来学习JavaScript中的变量


