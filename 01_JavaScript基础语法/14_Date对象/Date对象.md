# Date对象

## 写在前面

本篇文章我们将来学习JavaScript中的`Array`对象，通过本篇文章的学习可以掌握什么知识呢？如下图：

![](image/%E5%AF%BC%E8%AF%BB.png)

JavaScript中的Date对象主要用于处理时间，每一个Date实例表示某个时间段。JavaScript的Date对象使用UTC（Coordinated Universal Time，国际协调时间）1970年1月1日 零时开始的毫秒数来保存日期，可以表示的时间范围是前后各一亿天。

## 创建Date对象

JavaScript中的Date对象提供了一系列的属性和方法允许我们可以在开发中获取、设置以及格式化日期，但这一切都需要创建一个Date对象来实现。

创建一个 Date 类型的对象，可以有如下 3 种方式：

- 初始化为当前系统时间

- 初始化为指定的年月日

- 初始化为距离1970年1月1日指定毫秒数的时间

### 初始化为当前系统时间

JavaScript中的`Date`不仅仅是一个构造函数，还是一个普通函数，既可以使用`new Date()`的方式初始化为当前系统时间，也可以使用`Date()`函数的方式。

示例代码如下：

```JavaScript
// 1. 使用构造函数方式
var newDate = new Date()

// 2. 使用函数方式
var date = Date()

// 返回的是一个Date对象
console.log(newDate)
// 返回的是表示当前时间的字符串
console.log(date);
```


### 初始化为指定的年月日

通过Date对象初始化时间为指定的年月日可以将年、月、日、小时、分和秒等信息作为参数传递给 Date，如下语法结构所示：

```JavaScript
var date = new Date(year, month [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
```


- `year`参数：使用四位数年份，比如`2000`。如果写成两位数或个位数，则加上`1900`，即`10`代表1910年。如果是负数，表示公元前。

- `month`参数：`0`表示一月，依次类推，`11`表示12月。

- `day`参数：`1`到`31`。默认值为`0`

- `hours`参数：`0`到`23`。`0`时表示午夜。

- `minutes`参数：`0`到`59`。默认值为`0`。

- `seconds`参数：0到59。默认值为`0`。

- `milliseconds`参数：`0`到`999`。默认值为 0。

示例代码如下：

```JavaScript
var date1 = new Date(2021, 0)
var date2 = new Date(2021, 0, 1)
var date3 = new Date(2021, 0, 1, 0)
var date4 = new Date(2021, 0, 1, 0, 0, 0, 0)

console.log(date1) // Fri Jan 01 2021 00:00:00 GMT+0800
console.log(date2) // Fri Jan 01 2021 00:00:00 GMT+0800
console.log(date3) // Fri Jan 01 2021 00:00:00 GMT+0800
console.log(date4) // Fri Jan 01 2021 00:00:00 GMT+0800
```


> 上面四种方式创建的时间是相等的。


### 初始化为指定毫秒数

Date对象还可以接收一个毫秒数，用于初始化时间，示例代码如下：

```JavaScript
var date = new Date(0)

console.log(date) // Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)
```


我们传入0毫秒不是应该显示`1970年1月1日0点0分`嘛，为什么会显示为`8`点呢？这是因为中国处于东八区，所以时间会比标准时间早8小时。

## 静态方法

Date对象提供了几个静态方法，可以用来获取距离指定日期的时间戳。

### Date.now()方法

`Date.now()`方法可以获取自1970年1月1日0点至现在的时间戳。示例代码如下：

```JavaScript
console.log(Date.now()) // 1629085050614
```


### Date.parse()方法

`Date.parse()`方法传入一个日期字符串，并返回该时间距离1970年1月1日0点的时间戳。示例代码如下：

```JavaScript
var date = Date()

console.log(Date.parse(date)) // 1629085764000
```


> 如果解析失败会返回`NaN`。


### Date.UTC()方法

`Date.UTC()`接收年、月、日、时、分、秒、毫秒作为参数，并返回该时间距离1970年1月1日0点的时间戳。

示例代码如下：

```JavaScript
console.log(Date.UTC(2021, 8, 16, 11, 58, 50)) // 1631793530000
```


## 获取日期方法

Date对象提供了一系列方法用来获取日期和时间，具体方法如下表所示：

|方法|描述|
|---|---|
|`getDate()`|返回Date对象“日期”部分数值（1 ~ 31）|
|`getDay()`|返回Date对象“星期”部分的数值（0 ~ 6）|
|`getFullYear()`|返回Date对象“年份”部分的实际数值|
|`getHours()`|返回Date对象“小时”部分的数值（0 ~ 23）|
|`getMilliseconds()`|返回Date对象“毫秒”部分的数值（0 ~ 999）|
|`getMinutes()`|返回Date对象“分钟”部分的数值（0 ~ 59）|
|`getMonth()`|返回Date对象“月份”部分的数值（0 ~ 11）|
|`getSeconds()`|返回Date对象“秒”部分的数值（0 ~ 59）|
|`getTime()`|返回Date对象与UTC时间1970年1月1日午夜之间相差的毫秒数|



示例代码如下：

```JavaScript
var date = new Date()
// 获取日期
console.log(date.getDate()) // 16
// 获取今天周几
console.log(date.getDay()) // 1
// 获取哪年
console.log(date.getFullYear()) // 2021
// 获取时间戳
console.log(date.getTime()) // 1629093204493
```


## 设置日期方法

Date 类型除了提供了一系列获取日期和时间的方法之外，同样提供了一系列设置日期和时间的方法，如下表所示：

|方法|描述|
|---|---|
|`setDate()`|设置Date对象中“日期”部分的数值（1 ~ 31）|
|`setFullYear()`|设置Date对象中“年份”部分的实际数值|
|`setHours()`|设置Date对象中“小时”部分的数值（0 ~ 23）|
|`setMilliseconds()`|设置Date对象中“毫秒”部分的数值（0 ~ 999）|
|`setMinutes()`|设置Date对象中“分钟”部分的数值（0 ~ 59）|
|`setMonth()`|设置Date对象中“月份”部分的数值（0 ~ 11）|
|`setSeconds()`|设置Date对象中“秒”部分的数值（0 ~ 59）|
|`setTime()`|通过距离1970年1月1日00:00:00的毫秒是设置Date对象|



如下示例代码展示了以`setDate()`方法为例的一系列设置日期和时间的方法的用法：

```JavaScript
var date = new Date()
console.log('当前时间: ' + date) // 当前时间: Mon Aug 16 2021 13:56:58 GMT+0800 (中国标准时间)

date.setDate(24)
console.log('修改后的时间: ' + date) // 修改后的时间: Tue Aug 24 2021 13:56:58 GMT+0800 (中国标准时间)
```


## 日期格式化方法

Date 类型除了提供了获取和设置日期和时间的一系列方法之外，还提供了将日期和时间格式化指定格式的一系列方法。如下表所示：

|方法|描述|
|---|---|
|`toString()`|返回Date对象的字符串形式|
|`toDateString()`|返回Date对象“日期”部分（*年月日* ）的字符串形式|
|`toTimeString()`|返回Date对象“时间”部分（*时分秒* ）的字符串形式|
|`toLocaleString()`|基于本地时间格式，返回Date对象的字符串形式|
|`toLocaleDateString()`|基于本地时间格式，返回Date对象“ 日期”部分（*年月日* ）的字符串形式|
|`toLocaleTimeString()`|基于本地时间格式，返回Date对象“时间”部分（*时分秒* ）的字符串形式|
|`toGMTString()`|基于GMT时间格式，返回Date对象的字符串形式|
|`toUTCString()`|基于UTC时间格式，返回Date对象的字符串形式|



如下示例代码展示了以 `toString()` 方法为例的一系列格式化日期和时间的方法的用法：

```JavaScript
var date = new Date().toString()
console.log('toString()方法得到的时间为:' + date + ',类型为: ' + typeof date) // toString()方法得到的时间为:Mon Aug 16 2021 14:06:11 GMT+0800 (中国标准时间),类型为: string
```


## 总结

![](image/%E6%80%BB%E7%BB%93.png)

