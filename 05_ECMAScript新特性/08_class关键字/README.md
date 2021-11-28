# class关键字

## 类的声明

### 类是什么

ECMAScript6提供了更接近传统开发语言的手法，引入了类(`Class`)的概念。类作为对象的模板，在JavaScript中只是一个语法糖。

`class`关键字只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

示例代码如下：

```JavaScript
// ES 5 中定义对象的方式
// 定义一个构造函数
const Hero1 = function () {
  this.name = 'ywanzhou',
    this.print = () => {
      console.log('this is ywanzhou');
    }
}
// 通过构造函数创建对象
const hero1 = new Hero1();
console.log(hero1.name); // ywanzhou

// 通过 ES6 的方式定义构造函数
class Hero2 {
  // 构造器
  constructor() {
    this.name = 'ywanzhou',
      this.print = () => {
        console.log('this is ywanzhou');
      }
  }
}
// 通过类创建对象
const hero2 = new Hero2();
console.log(hero2.name); // ywanzhou
```


上面的代码仅供参考，会在下面进行讲解

### 类的声明

类的声明具有两种方式：

第一种是类的声明方式，语法结构如下所示：

```JavaScript
class name [extends] {
  // class body
}
```


参数说明：

- `name`：表示类名

- `extends`：可选，用于类的继承

使用类的声明方式声明类是不允许再次声明已经存在的类的，否则会抛出一个异常。

示例代码如下所示：

```JavaScript
// 类的声明方式
class Hero {
  constructor() {
    this.print = () => {
      console.log('this is Hero');
    }
  }
}
// 如果声明已经存在的类会抛出异常
// class Hero {} // SyntaxError: Identifier 'Hero' has already been declared
const hero = new Hero()
hero.print() // this is Hero
```


第二种是类的表达式方式，语法结构如下所示：

```JavaScript
const MyClassName = class [className] [extends] {
  // class body
}
```


参数说明：

- `MyClassNmae`：用于后面代码逻辑调用的类名

- `className`：用于当前类的内部使用

- `extends`：可选，用于类的继承

和函数表达式相同的一点是，类表达式可以是命名也可以是匿名的。如果是命名类表达式，这个名字只能在类体内部才能访问到。

示例代码如下所示：

```JavaScript
// 类的表达式方式
const Hero = class heros {
  /*
   * Hero 用于后面代码逻辑
   * heros 用于当前类中
   */
  constructor() {
    this.print = () => {
      console.log('this is Hero');
    }
  }
}
// 创建对象
const hero = new Hero();
hero.print() // this is Hero
```


### 构造函数

构造函数/构造器(`Constructor`)是用于创建和初始化类中创建的一个对象的一种特殊方法。

语法结构如下所示：

```JavaScript
constructor([arguments]) { ... }
```


参数`arguments`表示传入的形参，实参是创建类的时候传入的。

在一个类中只能有一个名为`constructor`的特殊方法。一个类中出现多次构造函数(`constructor`)方法将会抛出一个`SyntaxError`错误。

在一个构造方法中可以使用`super`关键字来调用一个父类的构造方法。

如果没有显式指定构造方法，则会添加默认的`constructor`方法。

如果不指定一个构造函数(constructor)方法，则使用一个默认的构造函数(constructor)。

### 注意事项

1. 在类的内部，默认就是严格模式，所以不需要手动开启严格模式

2. 类不存在声明提前，这一点与ES5完全不同。

3. 声明类时，是不存在重复声明的。如果一个类被重复声明的话，则引起解析错误。

## 静态方法

### 什么是静态方法

类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上`static`关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为**静态方法** 。

### 静态方法的语法

`static`关键字为一个类定义了一个静态方法。静态方法不会在类的实例上被调用，相反被类本身调用。语法结构如下所示：

```JavaScript
static methodName() { ... }
```


参数`methodName`表示指定类中的静态方法名称。

示例代码如下所示：

```JavaScript
class Hero {
  constructor() {
    this.name = 'ywanzhou'
  }
  // 声明一个静态方法
  static method() {
    console.log('这是一个静态方法');
  }
}
```


### 静态方法的调用

静态方法的调用是直接在类上进行，不能再类的实例上进行调用。示例代码如下所示：

```JavaScript
class Hero {
  constructor() {
    this.name = 'ywanzhou'
  }
  // 声明一个静态方法
  static method() {
    console.log('这是一个静态方法');
  }
}
const hero = new Hero()
// 通过实例来调用静态方法
// hero.method() // 抛出异常 TypeError: hero.method is not a function
// 通过类的调用静态方法
Hero.method() // 这是一个静态方法
```


从另一个静态方法调用静态方法的时候，可以使用`this`关键字，测试代码如下所示：

```JavaScript
class Hero {
  constructor() {
    this.name = 'ywanzhou'
  }
  // 声明一个静态方法
  static method1() {
    console.log('这是一个静态方法');
  }
  static method2() {
    // 通过 this 调用静态方法
    this.method1()
  }
}
Hero.method2() // 这是一个静态方法
```


从类的构造函数和其他方法中调用是不能使用`this`关键字来访问的。需要使用类名来调用，或者通过构造函数的属性来调用该方法，示例代码如下所示：

```JavaScript
class Hero {
  constructor() {
    this.name = 'ywanzhou'
    Hero.method1(); // 通过类名调用
    this.constructor.method1() // 通过构造函数的属性来调用
  }
  // 声明一个静态方法
  static method1() {
    console.log('这是一个静态方法');
  }
}
const hero = new Hero() // 这是一个静态方法 * 2
```


## 类的继承

### 实现类的继承

`detends`关键字用于类声明或者类表达式中，以创建一个类，该类作为另一个类子类。语法结构如下所示：

```JavaScript
class ChildClass extends ParentClass {...}
```


`extends`关键字用来创建一个普通类或者内建对象的子类。

值得注意的是，继承的`.prototype`必须是一个`Object`或者`null`

实现继承的代码如下所示：

```JavaScript
// 定义一个父类
class Parent {
  constructor(name) {
    this.name = name
  }
  // 普通方法
  print() {
    console.log(this.name);
  }
}
// 定义子类，继承于父类
class Child extends Parent {
  constructor(name, age) {
    // 代表父类的构造函数
    super(name)
    this.age = age
  }
  prints() {
    console.log(this.name, this.age);
  }
}
// 实例化子类
const child = new Child('ywanzhou', 18)
// 调用父类方法
child.print(); // ywanzhou
// 调用子类方法
child.prints(); // ywanzhou 18
```


### 继承于内置对象

JavaScript中的内置对象也是可以继承的，例如`Date`对象。示例代码如下所示：

```JavaScript
class myDate extends Date {
  constructor() {
    super()
    // 定义一个返回当前日期的方法
    this.getFormattedDate = () => {
      return `${this.getFullYear()}-${this.getMonth()}-${this.getDate()}`
    }
  }
}
const my_date = new myDate();
console.log(my_date.getFormattedDate()); // 2020-11-26
```


### super关键

`super`关键字，既可以当做函数使用，也可以当做对象使用。在这两种情况下，他的用法完全不同。

`super`关键字作为函数调用时，代表父类的构造函数。ECMAScript6要求子类的构造函数必须执行一次`super`函数。
示例代码如下所示：
值得注意的是，`super`虽然代表父类A的构造函数，但是返回的是子类B的实例，即`super`内部的`this`指的是B，因此`super()`在这里相当于`A.prototype.constructor.call(this)`

```JavaScript
class A {}; // 父类

// 子类继承父类
class B extends A {
  constructor() {
    super()
  }
}
```


`super`作为对象时，在普通方法中，指向父类的原型对象；在静态方法中指向父类。
值得注意的是，由于`super`指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过 `super`调用的。

```JavaScript
class A {
  p() {
    return 2
  }
}
class B extends A {
  constructor() {
    super()
    console.log(super.p()); // 2
  }
}
const b = new B()
```


## 总结

在ECMAScript6中新增了类的概念，并增加了一个`class`关键字，但实际上ES6中的类仅仅是一个语法糖，JavaScript中创建对象始终无法脱离原型链这个概念。

但是在ES6中添加了类的这个概念之后，在JS中编写类方便了也简单了许多。


