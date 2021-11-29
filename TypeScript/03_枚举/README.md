# 枚举类型

## 概述

所谓的枚举类型就是为一组数值赋予名字。

`enum`类型在C++、Java语言中比较常见，TypeScript在JavaScript原有的类型基础上也增加了`enum`类型。

比如我们需要定义一组角色，需要使用数字表示，就可以使用如下代码定位：

```TypeScript
enum role{
    STUDENT,
    TEACHER,
    ADMIN
}
```


> 上面代码中我们定义了`role`为一个枚举类型，这个里面有是三个值，TypeScript会为每个值自动的分配序号，默认从0开始依次排列，它们的值依次为0 1 2。


当然我们也可以自定义每个值，如果非全部定义则后面的值会根据前面的值自增。示例代码如下：

```TypeScript
enum role1 {
    student = 1,
    // 后面两个值依次为2 3
    teacher,
    admin,
}
enum role2 {
    // 每个名具有指定的值
    student = 1,
    teacher = 3,
    admin = 6,
}

```


## 数字枚举

我们上面介绍的例子就是数字枚举类型，但是还有一个注意点就是如果**某个字段使用了常量或者计算后的值** ，我们就**必须设置紧跟着字段的初始值** ，否则将会抛出异常。示例代码如下：

```TypeScript
;(function () {
  // 定义一个函数
  const getValue: () => number = (): number => {
    return 0
  }

  enum role1 {
    student = getValue(),
    // teacher, // error 枚举成员必须具有初始化表达式。
    // admin, // error 枚举成员必须具有初始化表达式。
  }
  const TEACHER_ROLE: number = 3
  // 每个名具有指定的值
  enum role2 {
    student,
    teacher = TEACHER_ROLE,
    // admin, // error 枚举成员必须具有初始化表达式。
  }
})()


```


### 反向映射

所谓的反向映射就是可以通过`key`访问到`value`，通过`value`访问到`key`。

我们可以通过`.名称`或者`['名称']`的方式取到每个具体的值，也可以通过`[数值]`的方式取到每个数值对应的名称，示例代码如下：

```TypeScript
enum role {
    student,
    teacher,
    admin,
}
console.log(role.admin) // 2
console.log(role['teacher']) //1
console.log(role[0]) //‘student’

```


其实TypeScript中的枚举类型编译成JavaScript代码之后就是一个对象，我们将上面那个枚举类型编译一下，编译后的代码如下：

```JavaScript
"use strict";
var role;
(function (role) {
    role[role["student"] = 0] = "student";
    role[role["teacher"] = 1] = "teacher";
    role[role["admin"] = 2] = "admin";
})(role || (role = {}));
```


这样看我们可能好理解，其实就是通过一个自调函数将值赋值给`role`对象，赋值之后如下：

```JavaScript
var role = {
    "student": 0,
    "teacher": 1,
    "admin"  : 2, 
    0: "student", 
    1: "teacher", 
    2: "admin", 
} 
```


**值得注意的是** 反向映射仅仅支持在*数字枚举* 中，不支持在2.4版本中新增的*字符串枚举* 中。

## 字符串枚举

所谓的字符串枚举就是枚举中的每个字段的值必须都是字符串，或者是枚举中的其他字段，示例代码如下：

```TypeScript
enum Person {
  name = '一碗周',
  hobby = 'coding',
  // 设置枚举中的字段作为值
  myName = name,
}
console.log(Person.name, Person.myName) // 一碗周 一碗周

```


## `const`枚举

在我们定义了普通枚举之后，被编译成JavaScript代码之后会创建一个对应的对象，如果使用枚举是增了增加程序的可读性，且并不需要编译之后的对象。在TypeScript1.4中增加了`const`枚举。

`const`枚举被翻译为**完全嵌入枚举** ，所谓的完全嵌入枚举就是编译之后没有对应的对象，只是从枚举中拿到对应你的值然后进行替换。定义`const`枚举只需要在普通枚举前面加上`const`关键字。示例代码如下：

```TypeScript
const enum role {
    student,
    teacher,
    admin,
}
let admin = role.admin

```


如上代码会被编译为如下：

```JavaScript
let admin = 2 /* admin */;
```


## 总结

这篇文章介绍了两种基本的枚举类型：**数字枚举** 和**字符串枚举** ，数组枚举还有一个反射映射的概念，就是可以通过`key`访问`value`，通过`value`可以访问`key`；最后我们还介绍了`const`枚举，就是编译后不生成所谓的枚举对象。


