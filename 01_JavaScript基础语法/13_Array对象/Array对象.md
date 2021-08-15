# Array对象

## 写在前面

本篇文章我们将来学习JavaScript中的`Array`对象，通过本篇文章的学习可以掌握什么知识呢？如下图：

![](image/%E5%AF%BC%E8%AF%BB.png)

JavaScript中的数组，也就是`Array`对象，该对象提供了一系列属性和方法来进行数组的操作，具体操作如下所示：

- 检测是否为数组

- 转换方法

- 进出栈方法

- 队列方法

- 拼接方法

- 操作方法

- 递归方法

- 归并方法

## 检测是否为数组

我们在进行数组操作之前，如果可以先确定操作的一定是数组的话，会减少很多不必要的错误。检测是否为数组的方法如下所示：

- 使用`instanceof`运算符

- `Array.isArray()`方法

- `Array.prototype.isPrototypeOf()`方法

使用`instanceof`运算符来判断当前是否为一个数组，示例代码如下：

```JavaScript
var arr = [1, 2, 3, 4, 5]

// 通过 instanceof 来判断是否为一个数组，运算符右侧为一个构造函数
console.log(arr instanceof Array) // true
```


我们还可以使用`Array.isArray()`方法来检测是否为一个数组，该方法接收一个参数，如果传递的参数，是一个数组的话返回值为true，否则为false。示例代码如下：

```JavaScript
var arr = [1, 2, 3, 4, 5]

// Array.isArray() 可以传递一个需要
console.log(Array.isArray(arr)) // true
```


Object类型提供了一个`isPrototypeOf()`方法，该方法用来检测一个对象是否在另一个对象的原型链上。由于Object是所有引用类型的父级，所以Object提供的方法所有引用类型都可以直接使用。如下示例代码所示：

```JavaScript
var arr = [1, 2, 3, 4, 5]


// 检测 arr 是否处于Array的原型链上
console.log(Array.prototype.isPrototypeOf(arr)) // true
```


> 关于原型链将在《JavaScript高级语法》中学习


## 转换方法

在讲解数据类型转换的时候，我们掌握了`toString()`方法可以将其他数据类型转换为`string`类型。而Array除了提供了`toString()` 方法之外，还提供了`valueOf()`方法，如下所示：

### valueOf()方法

`valueOf()`方法是一个所有对象都拥有的方法，得到当前对象的原始值。如果是数组的话，`valueOf`方法返回数组本身。示例代码如下：

```JavaScript
var arr = [1, 2, 3, 4, 5]

// valueOf() 得到数组本身 继承与Object
console.log(arr.valueOf()) // [ 1, 2, 3, 4, 5 ]
```


### toString()方法

`toString()`方法用于将一个数组转换为字符串，数组中的元素之间使用逗号（`,`）进行分隔。示例代码如下：

```JavaScript
var arr = [1, 2, 3, 4, 5]

console.log(arr.toString()) // 1,2,3,4,5
```


**值得注意的是** 如果数组中的元素存储的数据内容为null或者undefined的话，那么`toString()`方法或者`valueOf()`方法得到的结果为空字符串。

## 进出栈方法

JavaScript中的数组提供了类似于数据结构中的栈的操作特点，栈是一种**LIFO（Last In First Out，后进先出）** 的**数据结构** 。所谓的后进先出，指的是**最后添加的数据内容最先进行删除** 。换句话讲，最先添加的数据内容只能最后才能删除。栈是一种用来限制添加和删除数据内容的数据结构。

### push()方法

`push()`方法用于将一个或者多个数据添加到数组的末尾，并返回新的数组的长度。示例代码如下：

```JavaScript
var arr = [100, true, '这是一个字符串']

var count = arr.push(200)
console.log(arr) // [ 100, true, '这是一个字符串', 200 ]
console.log('添加新元素之后的数组长度为: ' + count) // 添加新元素之后的数组长度为: 4

```


### pop()方法

`push()`方法会删除数组的最后一项内容，并返回删除的数组，该方法会修改原数组。示例代码如下：

```JavaScript
var arr = [100, true, '这是一个字符串']

// 删除数组最后一个元素
var result = arr.pop()
console.log('数组删除的元素为: ' + result) // 数组删除的元素为: 这是一个字符串
console.log(arr) // [ 100, true ]
```


## 队列方法

JavaScript中的数组在提供了类似栈的操作方法基础上，还提供了类似数据结构中的队列的操作方法，队列就是一种**FIFO（First In First Out，先进先出）** 的**数据结构** 。所谓先进先出，指的是**最先添加的数据内容最先删除** 。队列与栈类似，都是一种用来限制添加和删除数据内容的数据结构。

### shift()方法

`shift()`方法与`push()`方法可以实现这种操作，`push()`方法在数组末尾添加而`shift()`方法用于删除第一个元素。示例代码如下：

```JavaScript
var arr = [100, true, '这是一个字符串']

// 在数组末尾添加一个元素
var count = arr.push(200)
console.log(arr) // [ 100, true, '这是一个字符串', 200 ]

// 删除第一个元素
var result = arr.shift()
console.log(arr) // [ true, '这是一个字符串', 200 ]

// result为删除的元素
console.log(result) // 100
```


### unshift()方法

`unshift()`方法与`push()`方法也可以实现队列操作，`push()`方法是删除数组的最后一项，而`unshift()`方法是在最前面添加数组元素。示例代码如下：

```JavaScript
var arr = [100, true, '这是一个字符串']

// 在数组最前面添加一个元素
var count = arr.unshift(200)
console.log(arr) // [ 200, 100, true, '这是一个字符串' ]

// 删除最后一个元素
var result = arr.pop()
console.log(arr) // [ 200, 100, true ]

// result为删除的元素
console.log(result) // 这是一个字符串
```


## 拼接数组concat()方法

JavaScript是使用`concat()`方法将多个数组（值）合并为要给数组，该方法不会改变原数组，而是返回一个新的数组。示例代码如下：

```JavaScript
var arr = [100, true, '这是一个字符串']

// concat()方法将多个数组（值）合并为要给数组
var newArr = arr.concat([200, false], '这是另一个字符串', 300)

console.log(newArr) // [ 100, true, '这是一个字符串', 200, false, '这是另一个字符串', 300 ]
```


## 操作方法

### slice()方法（截取数组）

`slice()`方法用于从某个数组中截取指定的数据内容，并返回。该方法接受两个参数，第一个为开始截取的索引，第二个为结束的位置，默认为最后一个。示例代码如下：

```JavaScript
var arr = ['red', 'blue', 'black', 'green', 'yellow']
// 从索引1开始截取到索引3，包括索引1不包括索引3
var result = arr.slice(1, 3)

console.log(result) // [ 'bison', 'camel' ]
```


### `splice()`方法

`splice()`方法可以用于删除某个数组中的元素、替换某个数组中的元素，增加某个数组中的元素，并将改变后的数组返回。该方法的第一个参数表示要改变数组的索引，第二个参数表示需要删除的数量，后面的参数表示从第一个参数的位置添加的元素。

**删除数组中的元素** ，示例代码如下：

```JavaScript
var arr = ['red', 'blue', 'black', 'green', 'yellow']

// 从索引2开始 删除3个元素
arr.splice(2, 3)
console.log(arr) // [ 'red', 'blue' ]
```


**添加数组中的元素** ，示例代码如下：

```JavaScript
var arr = ['red', 'blue', 'black', 'green', 'yellow']

// 将索引为2的元素位置添加 orange
arr.splice(2, 0, 'orange')
console.log(arr) // [ 'red', 'blue', 'orange', 'black', 'green', 'yellow' ]
```


**替换数组中的元素** ，示例代码如下：

```JavaScript
var arr = ['red', 'blue', 'black', 'green', 'yellow']

// 将索引为2的元素替换为 orange
arr.splice(2, 1, 'orange')
console.log(arr) // [ 'red', 'blue', 'orange', 'green', 'yellow' ]
```


> 其实上面的操作是删除后添加


## 迭代方法

Array提供的迭代方法有以下五个，如下表：

|方法|描述|
|---|---|
|`forEach()`|遍历数组中每一个元素时，会执行一个给定的函数。该方法没有返回值。|
|`map()`|遍历数组中每一个元素，在给定函数中对每一个元素进行处理，并创建一个新数组进行返回|
|`filter()`|遍历数组中每一个元素，将满足给定函数条件的每一个元素组成一个新数组，并返回。|
|`every()`|遍历数组中每一个元素，判断每一个元素是否满足给定函数的条件。如果满足则返回`true`，否则返回`false`。|
|`some()`|遍历数组中每一个元素，如果有一个元素满足给定函数的条件，则返回`true`，否则返回`false`。|



上述五个迭代方法都是接收两个参数，一个是给定的函数，一个是调用给定函数时的`this`值（可选项）。而给定的函数还接收三个参数，如下所示：

- `currentValue`参数：当前遍历数组所得到的元素。

- `index`参数：当前遍历数组得到的元素所在的索引值。

- `array`参数：正在遍历的数组。

### forEach()方法

`forEach()`方法遍历指定数组中的每一个元素，并执行给定的函数，不返回任何值。示例代码如下：

```JavaScript
var arr = ['red', 'blue', 'black', 'green', 'yellow']

arr.forEach(function (current, index) {
    console.log('当前索引为' + index + '元素为：' + current)
})

/* 执行结果如下
当前索引为0元素为：red
当前索引为1元素为：blue
当前索引为2元素为：black
当前索引为3元素为：green
当前索引为4元素为：yellow
*/
```


### map()方法

`map()`方法与`forEach()`方法基本类似，不同的是，`map()`方法会将数组中的每一项执行指定函数，然后将其结果组成数组并返回。示例代码如下：

```JavaScript
var arr = ['red', 'blue', 'black', 'green', 'yellow']

newArr = arr.map(function (current, index) {
    return current = index + current
})
console.log(newArr) // [ '0red', '1blue', '2black', '3green', '4yellow' ]
```


### filter()方法

`filter()`方法同样会迭代一个数组，并将数组中的每一项执行指定函数，将符合指定函数规则的数组重新返回一个新的数组。示例代码如下：

```JavaScript
var arr = ['red', 'blue', 'black', 'green', 'yellow']

newArr = arr.filter(function (current, index) {
    // 将元素的长度为5，组成一个新的数组
    return current.length === 5
})
console.log(newArr) // [ 'black', 'green' ]
```


### some()和every()方法

`some()`和`every()`方法非常的类似，最主要的区别就是，根据指定函数的条件，`some()`只要有一个满足就返回`true`而`every()`方法全部满足才会返回`true`。示例代码如下：

```JavaScript
var arr = ['red', 'blue', 'black', 'green', 'yellow']

some = arr.some(function (current, index) {
    // 长度是否等于5
    return current.length === 5
})
every = arr.every(function (current, index) {
    // 长度是否等于5
    return current.length === 5
})
console.log(some) // true
console.log(every) // false
```


## 归并方法

所谓的归并，就是指遍历数组中每一个元素，并调用给定的函数，将最终的结果进行返回。

### `reduce()`方法

`reduce()`方法会从左至右地遍历数组中每一个元素，调用给定的函数，并将最终的结果返回。该方法接受两个参数，第一个为指定回调函数，第二个为第一次调用给定函数传递的给定函数的第一个参数值（可选）。

而给定的函数接收 4 个参数，如下所示：

- `accumulator`参数：上一次调用给定函数得到的结果。

- `currentValue`参数：当前遍历数组所得到的元素。

- `index`参数：当前遍历数组得到的元素所在的索引值。

- `array`参数：正在遍历的数组。

示例代码如下：

```JavaScript
var arr = ['red', 'blue', 'black', 'green', 'yellow']

var result = arr.reduce(function (accumulator, currentValue) {
    return accumulator + ' ' + currentValue + ' '
})
console.log(result) // red blue  black  green  yellow 
```


上面代码的执行流程如下：

1. 我们第一个调用回调函数时，由于没有指定第二个参数，则回调函数的第一个参数为空，并将` red `返回。

2. 第二次调用回调函数时，回调函数的第一个参数为` red `，然后拼接字符串并返回。

3. 以此类推，

### `reduceRight()`方法

`reduceRight()`方法`reduce()`方法的区别仅在于`reduceRight()`方法是从右至左地遍历数组，`reduce()`方法是从左至右地遍历数组而已。

## 总结

![](image/%E6%80%BB%E7%BB%93.png)

