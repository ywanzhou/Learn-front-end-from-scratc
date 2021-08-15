# String对象

## 写在前面

本篇文章我们将来学习JavaScript中的`String`对象，通过本篇文章的学习可以掌握什么知识呢？如下图：

![](image/%E5%AF%BC%E8%AF%BB.png)

`String`对象可以用来定义字符串，基本数据类型类型`string`也可以使用`String`对象提供的方法。`String`对象提供的一系列方法可以完成各种各样的功能，具体可以分为如下几种：

- 大小写转换

- 获取指定位置的字符串

- 检索字符串

- 截取字符串

- 分割字符串

- 连接字符串

- 正则匹配

## 大小写转换

`String`对象提供的大小写转换(一般指英文的大小写转换)的方法主要是以下两个：

- `toUpperCase()`：将字符串转换成大写并返回转换后的结果

- `toLowerCase()`：将字符串转换成小写并返回转换后的结果

示例代码如下：

```JavaScript
var msg = 'Hello World'

var lowerMsg = msg.toLowerCase()
var upperMsg = msg.toUpperCase()

console.log(msg);// Hello World
console.log(lowerMsg);// hello world
console.log(upperMsg);// HELLO WORLD
```


值得注意的是，中文是不需要区分大小写的。所以，上述大小写转换的方法应该用于除中文以外的需要大小写形式的字符中。

## 获取指定位置的字符串

`String`对象提供了三个根据索引值获取某个字符串中对应位置上的字符的方法。这些方法常用来取出指定字符之后进行逻辑判断等应用场景。具体方法如下表所示：

|方法|描述|
|---|---|
|`charAt()`|返回特定位置的字符|
|`charCodeAt()`|返回表示给定索引的字符的Unicode值|
|`codePointAt()`|返回使用UTF-16编码的给定位置的值的非负整数|



如下示例代码展示了上述方法的具体用法：

```JavaScript
var str = 'Hello World!'

var charAt = str.charAt(2)
var charCodeAt = str.charCodeAt(2)
var codePointAt = str.codePointAt(2)

console.log(charAt, charCodeAt, codePointAt)  // l 108 108
```


由上面的代码我们得知，`Hello World`字符串中索引值为2的是`l` 字符，其Unicode值为108。

## 检索字符串

`String`对象除了提供了在某个字符串中根据索引值查找字符的方法之外，还提供了两个根据字符或子字符串来查找对应的索引值。如果在某个字符串中并不存在指定的字符或子字符串的话，则查找的结果为`-1`。

### indexOf()方法

`String`对象提供的`indexOf`方法用于从字符串中查找首个与给定值一致的首字母的索引值，如果没有找到则返回`-1`。该方法接受连个参数，第一个表示需要被查找的字符串；第二个参数为开始的位置，这是一个可选项，默认为0。

示例代码如下：

```JavaScript
var email = 'seecode@qq.com'

// indexOf() 接受两个参数，第一个表示需要检索的字符串，第二个表示开始的位置，默认为0

// 在email字符串中查找是否包含qq这个字符串
console.log(email.indexOf('qq')) // 8
// 在email字符串中查找是否包含o这个字符串
console.log(email.indexOf('o')) // 4
// 在email字符串中查找是否包含o这个字符串，在索引为8的位置开始查找
console.log(email.indexOf('o', 8)) // 12
```


### lastIndexOf()方法

`String`对象提供的`lastIndexOf()`方法与`indexOf`方法基本类似，不一样的是该方法查找的是最后一个匹配的字母，并返回索引。

示例代码如下：

```JavaScript
var email = 'seecode@qq.com'

// lastIndexOf() 查找最后一个匹配的字符串索引
console.log(email.lastIndexOf('o')) // 12
```


## 截取字符串

`String`对象提供了两个用来截取某个字符串的方法，这两个方法会返回按照规则截取的子字符串，并且不会改变原有字符串的内容。

### slice()方法

`slice()`方法会根据开始截取的位置和结束截取的位置来截取某个字符串的内容，并将截取的子字符串作为一个新的字符串返回。该方法接收两个参数，一个是开始的索引另一个是结束的索引。

> 值得注意的是，该方法允许传递一个负数的索引，传递一个负数的话，会被当做字符串的长度加负数使用。


示例代码如下：

```JavaScript
var str = 'JavaScript'

var result1 = str.slice(0, 4)
// JavaScript这个字符串的长度为10，-10 + 10 = 0，即开始索引为0，结束索引-6 + 10 = 4即开始索引为4
var result2 = str.slice(-10, -6)

console.log(result1, result2) // Java Java
```


### substring()方法

`substring()`方法与`slice()`方法的功能和参数都是一样的，唯一不同的是，该方法传递一个负数会当做0来使用。

示例代码如下：

```JavaScript
var str = 'JavaScript'

// 传递负数会被当做0来使用 最终结果为空
var result1 = str.substring(0, -1)
var result2 = str.substring(0, 4)
console.log(result1, result2) //  Java

```


值得注意的是，`substring()`方法的两个参数有以下几种特性：

- 如果开始的索引等于结束的索引，返回一个空字符串。

- 如果省略结尾的索引，则一直提取到字符串结尾。

- 如果人以参数小于0或者为`NaN`，则被当做0来使用。

- 任何一个参数大于字符串的长度，最终的值为字符串的长度。

- 如果开始的索引大于结束的索引，则开始的索引与结束的索引位置互换。

## 分割字符串`split()`方法

分割字符串采用的是`split()`方法，该方法用来按照指定分割符来将某个字符串分割为一个数组。该方法接收两个参数，第一个参数可以是一个字符串或者是一个正则表达，表示分割字符串的分隔符；另一个参数表示限定返回分割片段的数量，这是一个可选项。

示例代码如下：

```JavaScript
var str = 'Lucy,Mary,Lily,Emma'

// 以字符串作为分割符号
var result1 = str.split(',')
// 限定返回两个
var result2 = str.split(',', 2)

console.log(result1, result2) // [ 'Lucy', 'Mary', 'Lily', 'Emma' ] [ 'Lucy', 'Mary' ]
```


## 连接字符串

`String`对象提供的`concat()`方法用于将一个或多个字符串与原有字符串连接合并在一起，形成一个新的字符串并返回。该方法接收N多个参数，将字符串的拼接结果返回。示例代码如下：

```JavaScript
var str = 'JavaScript '
var result = str.concat('Python ', 'Go')
console.log(result) // JavaScript Python Go
```


> 值得注意的是，使用字符串连接符也就是`+`号的性能优于`concat()`方法


## 正则匹配

正则表达式主要是配合字符串来使用的，JavaScript中的`String`对象提供了三个关于正则表达式有关的方法。

> 关于正则表达式我们将在《RegExp对象》文章讲解


### search()方法

`search()`方法用来在某个字符串中查找是否存在与指定正则表达式的子字符串。如果存在则返回首次匹配的索引值，如果不存在则返回`-1`。

示例代码如下：

```JavaScript
var data = '若彼岸繁华落尽，谁陪我看落日流年'

console.log(data.search(/繁华/)) //3
```


### match()方法

`match()`方法与`search()`方法的区别就是，而是将匹配的结果进行返回。示例代码如下：

```JavaScript
var data = '若彼岸繁华落尽，谁陪我看落日流年'

// match() 返回匹配正则表达式的字符串
console.log(data.match(/繁华/)) // [ '繁华', index: 3, input: '若彼岸繁华落尽，谁陪我看落日流年', groups: undefined ]
```


该方法如果匹配失败的话返回`null`。匹配成功后返回一个数组，数组的第一项表示匹配的文字内容，后面包含索引和全部内容

### replace()方法

`replace()`方法用来在某个字符串中根据指定正则表达式进行检索，并将其匹配的进行替换，最终将替换后的新字符串进行返回。该方法接受两个参数，第一个为正则表达式，第二个为需要替换的内容。

示例代码如下：

```JavaScript
var data = '若彼岸繁华落尽，谁陪我看落日流年'
// replace() 方法用于替换匹配正则表达式的内容
console.log(data.replace(/繁华/, '繁華')) // 若彼岸繁華落尽，谁陪我看落日流年
```


## 总结

![](image/%E6%80%BB%E7%BB%93.png)

除`String`对象外，还存在`Boolean`对象和`Number`对象，同样的`boolean`类型和`number`类型的变量也可以使用他们提供的属性和方法，但是这两个本身没有提供太多有常用的属性和方法，这里就不做讲解了。

