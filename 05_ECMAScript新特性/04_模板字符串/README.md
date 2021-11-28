# 模板字符串

## 模板字符串是什么

模板字符串( *Template String*  )是增强版的字符串，使用反引号(```)来代替谱通字符串中的用双引号和单引号。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。

普通用法如下所示：

```JavaScript
// 使用 ` 符号包裹的字符串称为模板字符串
let str = `this is str`
console.log(typeof str, str); //string this is str
```


## 多行模板字符串

ECMAScript 2015提供的模板字符串与普通字符串的不同的是模板字符串中的空格、缩进、换行都会被保留。示例代码如下所指示：

```JavaScript
let str = `this 
      is str`
console.log(typeof str, str);
/*
  string this 
      is str
*/
```


### 带表达式的模板字符串

模板字符串是支持嵌入表达式的，语法结构如下所示：

```JavaScript
`${expression}`
```


示例代码如下所示：   

```JavaScript
let str1 = `this is str1`
let str2 = `this is str2`
// 只需要将表达式写入 ${} 中
let and = `${str1} and ${str2}`
console.log(and); // this is str1 and this is str2
```


## 带标签的模板字符串

模板字符串的功能，不仅仅是上面这些。它可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为**标签模板** 功能（*tagged template* ）。

```JavaScript
let str = 'str'
console.log`this is ${str}`;
// 等同于
console.log(['this is ', ''], str);
```


标签模板其实不是模板，而是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。

## 原始字符串

在标签函数的第一个参数中，存在一个特殊的属性`raw`，可以通过它来访问模板字符串的原始字符串，而不是经过特殊替换的字符。示例代码如下所示：

```JavaScript
/*
  原始字符串 应用在带标签的模板字符串中
  * 在函数的第一个参数中存在 raw 属性，该属性可以获取字符串的原始字符串。
  * 所谓的原始字符串，指的是模板字符串被定义时的内容，而不是处理之后的内容
*/
function tag(string) {
  console.log(string.raw[0]);
}
tag `string test line1 \n string test line2` // string test line1 \n string test line2
```


另外，使用`String.raw()`方法出功能键原始字符串和默认模板函数和字符串连接创建是一样的。示例代码如下所示：

```JavaScript
let str = String.raw `Hi\n${2+3}!`;
// ，Hi 后面的字符不是换行符，\ 和 n 是两个不同的字符
console.log(str); // Hi\n5!
```


## 判断是否包含某字符串

### includes()方法

`includes()`方法用于判断一个字符串是否包含在另一个字符串中，根据判断结果返回`true`或`false`。语法结构如下所示：

```JavaScript
str.includes(searchString[, position])
```


参数说明

- `searchString`：要在此字符串中搜索的字符串。

- `position`：(可选) 从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 0。

值得注意的是`includes()`方法是区分大小写的。

示例代码如下所示：

```JavaScript
let str = 'abcdef';
console.log(str.includes('c')); // true
console.log(str.includes('d')); // true
console.log(str.includes('z')); // false
console.log(str.includes('A')); // false
```


ECMAScript 2015提供的这个`includes()`方法是区分大小写的，现在我们自己扩展一个不区分大小写的，示例代码如下所示：

```JavaScript
String.prototype.MyIncludes = function (searchStr, index = 0) {
  // 将需要判断的字符串全部改成小写形式
  let str = this.toLowerCase()
  // 将传入的字符串改成小写形式
  searchStr = searchStr.toLowerCase();
  return str.includes(searchStr, index)
}
let str = 'abcdef';
console.log(str.MyIncludes('c')); // true
console.log(str.MyIncludes('d')); // true
console.log(str.MyIncludes('z')); // false
console.log(str.MyIncludes('A')); // true
```


### startsWith()方法

`startsWith()`方法用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回`true` 或`false`。语法结构如下所示：

```JavaScript
str.startsWith(searchString[, position])
```


参数说明

- `searchString`：要在此字符串中搜索的字符串。

- `position`：(可选) 从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 0。

值得注意的是`startsWith()`方法是区分大小写的。

示例代码如下所示：

```JavaScript
let str = 'abcdef';

/*
  * startsWith() 方法用来判断当前字符串是否以另外一个给定的子字符串开头， 并根据判断结果返回 true 或 false。
  * str.startsWith(searchString[, position])
    参数说明
      searchString: 要在此字符串中搜索的字符串。 
      position: (可选) 从当前字符串的哪个索引位置开始搜寻子字符串， 默认值为 0。
  !值得注意的是startsWith() 方法是区分大小写的。
*/
console.log(str.startsWith('a')); // true
console.log(str.startsWith('c', 2)); // true
console.log(str.startsWith('c')); // flase
```


### endsWith()方法

`endsWith()`方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 `true` 或 `false`。语法结构如下所示：

```JavaScript
str.endsWith(searchString[, position])
```


参数说明

- `searchString`：要在此字符串中搜索的字符串。

- `position`：(可选) 从当前字符串的哪个索引位置开始搜寻子字符串，默认值为0。

值得注意的是`endsWith()`方法是区分大小写的。

示例代码如下所示:

```JavaScript
let str = 'abcdef';

console.log(str.endsWith('f')); // true
console.log(str.endsWith('c', 3)); // true
console.log(str.endsWith('c')); // flase
```


以下这两个方法通过可以自己扩展一个不区分大小写的。

