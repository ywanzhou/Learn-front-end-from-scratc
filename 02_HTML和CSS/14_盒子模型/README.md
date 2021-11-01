# 盒子模型

## 写在前面

本篇文章将来学习盒子模型，本篇文章内容较多，具体如下图所示：

![](image/%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B(%E5%AF%BC%E8%AF%BB).png)

## 什么是盒子模型

CSS在HTML页面中的应用除了可以为HTML元素设置显示样式之外，还有另一个重要的功能就是实现HTML页面的布局。在CSS中HTML页面中的**每一个元素都是一个盒子** 或者**被一个盒子所包裹着** 。

理解和掌握CSS中的盒子是实现HTML页面布局和处理元素排列的关键。

### 盒子模型的组成部分

在CSS中一个完整的盒子模型需要如下4个部分：

- 内容区（content）：用来在HTML页面中显示内容的区域，可以是文本、图片、视频或者另一个盒子模型。

- 内边距（padding）：指的是内容区至边框之间的空白区域

- 边框（border）：包含内容区和内边距的边界。

- 外边距（margin）：指的是当前盒子模型的边框至其他盒子模型的边框之间的区域。

如下图展示了CSS盒子模型中的各个组成部分：

![](image/01_%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%E5%90%84%E4%B8%AA%E7%BB%84%E6%88%90%E9%83%A8%E5%88%86.png)

如上图所示，展示了两个水平方向相邻元素的盒子模型的情况。

下面的代码展示了CSS盒子模型具体的用法：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>盒子模型概述</title>
    <style>
        .box {
            width: 200px;
            height: 100px;
            padding: 50px;
            border: 10px solid lightcoral;
            margin: 50px;
        }
    </style>
</head>

<body>
    <div class="box"></div>
</body>

</html>
```


上述代码的运行效果如下图所示：

![](image/02_%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%E6%A6%82%E8%BF%B0.png)

上图中`lightcoral`颜色以外，存在一个外边距、`lightcoral`颜色属于边框、内部包含内边距和内容区。

### 使用调试工具查看盒子模型

我们通过浏览器为我们提供的开发工具可以更好的观察和理解CSS中的盒子模型，我们这里以Edge浏览器为例。

1. 打开【开发者工具】，可以通过按【F12】打开，除此之外还有别的方式，请自己研究。

2. 点击【元素/Elements】选项卡中的【样式/styles】选项卡，滚动到最下方就可以查看，如下图所示：

![](image/03_%E4%BD%BF%E7%94%A8%E8%B0%83%E8%AF%95%E5%B7%A5%E5%85%B7%E6%9F%A5%E7%9C%8B%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B.png)

&ensp;&ensp;&ensp;&ensp;上图中右下角展示的就是`<div>`的盒子模型。

## 元素的类型

CSS中的盒子模型的类型主要分为三种，具体如下：

- 块级元素：每个元素独占一行，块级元素之间是垂直方向排列。

- 内联元素：每个元素不会一行，内联元素之间是水平方向排列，元素高度与宽度由内容撑起。

- 行内块级元素：每个元素不会独占一行，行内块级元素之前也是水平排列，与内联元素不同的是可以单独设置行内块级的高度与宽度。

我们在学习这几个元素的类型之前需要先来学习一下CSS的`display`属性，该属性用于定义盒子模型的**显示类型** ；该属性还可以设置子元素的布局方式，例如将值设置为`flex`或者`grid`，这里的内容我们以后学习。

我们我们主要学习该属性的四个值，具体如下：

- `none`：将`display`的属性设置为`none`时，该盒子模型将不会进行显示。

- `inline`：该值表示将盒子模型设置为内联元素。

- `block`：该值表示将盒子模型设置为块级元素。

- `inline-block`：该值表示将盒子模型设置为行内块级元素。

除这些值外，还有`list-item`、`table`等，这些值在现在的开发中很少去用了，但是`display`的值为`list-item`、`table`等也表示块级元素，**不一定只有将** `display`**设置为** `block`**才表示块级元素** 。

现在我们来看一下三种元素的类型在HTML中的表现。

### 块级元素

块级元素的表现就是每一个元素都会产生换行，简单的说就是每一个元素独占一行；所以说块级元素是垂直排列的。例如我们之前学习的`<h1>`~`<h6>`标题元素、`<p>`段落元素和`<div>`元素等都是块级元素。

下面代码展示了块级元素的表现：

CSS代码

```css
.p1 {
    background-color: lightpink;
}

.p2 {
    background-color: lightskyblue;
}

p {
    /* 块级元素可以单独设置元素的宽度与高度 */
    width: 500px;
    height: 200px;
    line-height: 200px;
    font-size: 24px;
    text-align: center;
}
```


HTML结构

```html
<p class="p1">这是一个块</p>
<p class="p2">这是另一个块</p>
```


代码运行结果如下图所示：

![](image/04_%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0.png)

我们通过效果可以看到块级元素可以设置元素的高度与宽度。

### 内联元素

内联元素又称**行内元素** 。每一个**内联元素都不会产生换行且不可以设置宽度与高度** ，元素的大小由内容撑开。例如我们的`<a>`元素就是内联元素。

下面代码展示了内联元素的表现：

CSS代码

```css
.a1 {
    background-color: lightpink;
}

.a2 {
    background-color: lightskyblue;
}

p {
    /* 内联元素设置宽度与高度失效，元素高度由内容撑起 */
    width: 500px;
    height: 200px;
    line-height: 100px;
    font-size: 24px;
    text-align: center;
}
```


HTML结构

```html
<a class="a1" href="#">第一个链接</a>
<a class="a2" href="#">第二个链接</a>
```


代码运行结果如下图所示：

![](image/05_%E5%86%85%E8%81%94%E5%85%83%E7%B4%A0.png)

### 行内块级元素

行内块级元素与内联元素类似，都是水平排列。与之不同的是，内联元素可以设置元素的高度与宽度。如下代码展示了行内元素元素的表现：

CSS代码

```css
.a1 {
    background-color: lightpink;
}

.a2 {
    background-color: lightskyblue;
}

a:any-link {
    /* 将元素设置为行内块级元素 */
    display: inline-block;
    /* 设置为行内块级元素后 高度与宽度生效 */
    width: 300px;
    height: 200px;
    line-height: 200px;
    font-size: 32px;
    text-align: center;
}
```


HTML结构

```html
<a class="a1" href="#">第一个链接</a>
<a class="a2" href="#">第二个链接</a>
```


代码运行结果如下图所示：

![](image/06_%E8%A1%8C%E5%86%85%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0.png)

需要注意的是，上面代码中两个元素之间的间隙是我们无法去掉的，这就是行内块级元素带给我们的问题。

## 元素的高度与宽度

CSS中提供控制元素的高度与宽度的属性可以分为两组，如下所示：

- `heigth`、`min-height`和`max-height`控制元素高度的属性

- `width`、`min-width`和`max-width`控制元素宽度的属性

这两组属性**会受到** `box-sizing`**属性的影响** ，`box-sizing`属性后面会详细讲解。

关于`height`和`width`属性的用法如下代码所示：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>height和width的基础用法</title>
  <style>
    .box {
      /* 
        height 和 width 接受的属性值有两种，
        * 第一种是具体的像素值
        * 第二种是百分值，例如 100% 100vh 3rem 等
      */
      height: 300px;
      width: 300px;
      background-color: lightskyblue;
    }
  </style>
</head>

<body>
  <div class="box"></div>
</body>

</html>
```


代码运行结果如下图所示：

![](image/07_height%E5%92%8Cwidth%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95.png)

CSS和提供了`min-height`、`max-height`、`min-width`和`max-width`4个属性，这4个属性的优先级是大于`height`和`width`的。这4个元素分别表示了元素的最小宽度、最小高度、最大宽度和最大高度。

示例代码如下所示：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>最大最小高宽</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
    }

    .box {
      /* 设置盒子为视口的宽度和高度 */
      width: 100vw;
      height: 100vh;
      /* 盒子的最小宽度和高度不可以小于600px */
      min-width: 600px;
      min-height: 600px;
      background-color: lightskyblue;
    }
  </style>
</head>

<body>
  <div class="box"></div>
</body>

</html>
```


当视口的宽度和高度小于600px时，盒子模型和运行效果如下：

![](image/08_%E6%9C%80%E5%B0%8F%E9%AB%98%E5%BA%A6%E5%92%8C%E9%AB%98%E5%BA%A6.png)

最大宽度和高度同理，不过需要注意的是**最小宽度、高度的优先级大于最大高度、宽度** 。

## 盒子模型的边距

### 内边距

CSS使用`padding`来表示元素内部空出的空间，也就是内边距。

`padding`属性可以拆分为如下4个属性：

- `padding-bottom`

- `padding-left`

- `padding-right`

- `padding-top`

上述4个属性表示具体某个边的内边距，`padding`属性还可以可以接受1~4个值作为参数，具体情况如下：

- 当只指定**一个** 值时，该值会统一应用到**全部四个边** 的内边距上。


- 指定**两个** 值时，第一个值会应用于**上边和下边** 的内边距，第二个值应用于**左边和右边** 。


- 指定**三个** 值时，第一个值应用于**上边** ，第二个值应用于**右边和左边** ，第三个则应用于**下边** 的内边距。


- 指定**四个** 值时，依次（顺时针方向）作为**上边** ，**右边** ，**下边** ，和**左边** 的内边距。

关于padding的最终效果，也会受`box-sizing`属性的影响，具体有哪些影响在下面学习。

示例代码如下所示：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>padding属性</title>
  <style>
    span {
      /* 为文字设置一个边框 */
      border: 1px solid lightcoral;
      display: inline-block;
    }

    .box {
      width: 400px;
      background-color: lightskyblue;
      /* 4 个边的内边距都为40px */
      padding: 40px;
      /* 上下20px 左右40px */
      padding: 20px 40px;
      /* 上20px 左右30px 下40px */
      padding: 20px 30px 40px;
      /* 上20px 右20px 下30px 左30px */
      /* padding: 20px 20px 30px 40px; */
    }
  </style>
</head>

<body>
  <div class="box">
    <span>这是一段文本内容，有很多很多内容~有很多很多内容~有很多很多内容~有很多很多内容~有很多很多内容~有很多很多内容~有很多很多内容~有很多很多内容~</span>
  </div>
</body>

</html>
```


代码运行效果如下所示：

![](image/09_padding%E5%B1%9E%E6%80%A7.png)

### 外边距

`marign`属性用于设置盒子模型的外边距，也就是外部空出的空间，可以设置的值与`padding`一样，都可以接受1~4个值。`margin`属性也可以拆分为以下4个属性：

- `marign-bottom`

- `marign-left`

- `marign-right`

- `marign-top`

含义同`padding`一样，都是单独控制4个边。

示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>margin属性</title>
  <style>
    .box {
      width: 400px;
      background-color: lightskyblue;
    }

    span {
      /* 为文字设置一个边框 */
      border: 1px solid lightcoral;
      display: inline-block;
      /* 4 个边的内边距都为40px */
      margin: 40px;
      /* 上下20px 左右40px */
      margin: 20px 40px;
      /* 上20px 左右30px 下40px */
      margin: 20px 30px 40px;
      /* 上20px 右20px 下30px 左30px */
      /* margin: 20px 20px 30px 40px; */
    }
  </style>
</head>

<body>
  <div class="box">
    <span>这是一段文本内容，有很多很多内容~有很多很多内容~有很多很多内容~有很多很多内容~有很多很多内容~有很多很多内容~有很多很多内容~有很多很多内容~</span>
  </div>
</body>

</html>
```


代码运行结果如下所示：

![](image/10_margin%E5%B1%9E%E6%80%A7.png)

茶色区域即外边距部分。

#### 外边距重叠

外边距重叠只发生在块级元素上，例如 `<div>`、`<p>` 等，并不会发生在脱离文档流的元素上，例如：设置 `float` 属性，或者 `position` 的值为 `absolute` 时。

出现外边距传递问题的代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge" />
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0" />
  <title>相邻兄弟元素的外边距重叠</title>
  <style>
    .box {
      width: 600px;
      height: 100px;
      line-height: 50px;
      text-align: center;
      color: #333;
    }

    .box1 {
      background-color: #f60;
      margin-bottom: 100px;
    }

    .box2 {
      background-color: #a90;
      margin-top: 100px;
    }
  </style>
</head>

<body>
  <div class="box box1">box1</div>
  <div class="box box2">box2</div>
</body>

</html>
```


代码运行结果如下：

![](image/11_%E5%A4%96%E8%BE%B9%E8%B7%9D%E9%87%8D%E5%8F%A01.png)

如果按照我们正常的思维逻辑的话`box1`和`box2`中间的边距应该是`200px`，但事实并不是这样的，两者之间只有`100px`的边距。

或者下面这种情况，代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge" />
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0" />
  <title>父级与子级的外边距重叠</title>
  <style>
    .box {
      line-height: 50px;
      text-align: center;
      color: #333;
    }

    .parent {
      width: 600px;
      height: 100px;
      background-color: #f60;
      margin-top: 100px;
    }

    .child {
      width: 600px;
      height: 50px;
      background-color: #a90;
      margin-top: 50px;
    }
  </style>
</head>

<body>
  <div class="box parent">
    <div class="box child">child</div>
  </div>
</body>

</html>
```


运行效果如下所示：

![](image/11_%E5%A4%96%E8%BE%B9%E8%B7%9D%E9%87%8D%E5%8F%A02.png)

如果仅仅只看我们的代码的话，父级的`margin-top`为`100px` ，子级的`margin-top`为`50px`，如果相加的话为`150px`，但实际结果为`100px`。这种父级与子级的情况有时也称**外边距传递** 。

出现外边距重叠的问题必须没有以下任意一项才可以实现：

1. 父级元素不是 [BFC](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context) 元素。

2. 父元素没有`border-top`或者`border-bottom`属性

3. 父元素没有`padding-top`或者`border-bottom`属性

4. 父元素与第一个子元素之间没有 行内元素 进行分割。

> 注：当`margin-top`重叠时，父元素没有`border-top`或者`padding-top`；`margin-bottom`则没有`border-bottom`或者`border-bottom`。


**外边距重叠的计算规则如下：** 

1. 两个正数的外边距取最大的边距作为外边距。

2. 如果一个为正数，一个为负数，最终的外边距为两者之和。

3. 如果两个值都是负数的话，最终的外边距取绝对值最大的值。

既然存在外边距重叠的问题，那么我们在实际开发中就要好好的利用这一特性，例如在写一个列表的时候，尽量不要仅仅只写上外边距或者下外边距，尽量两者都一起写上，避免我们的底部或者头部的布局不是我们想要的效果

## 盒子模型的边框

在CSS中控制盒子模型的边框的属性为`border`，该属性可以拆分为如下3个属性：

- `border-width`：取值可以使用相对单位或者绝对单位

- `border-style`：`none`、`hidden`、`dotted`、`dashed`、`solid`、`double`、`groove`、`ridge`、`inset`或者`outset`。

- `border-color`：有效的颜色单位

border属性同`marign`和`padding`一样，也可以拆分为4个边。示例代码如下所示：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>border属性</title>
  <style>
    .box {
      background-color: lightcoral;
      height: 300px;
      width: 300px;
      border: 10px solid lightgreen;
      /* 
      设置上边框
      border-top: 20px solid lightgreen;
      设置上边框颜色
      border-top-color: red;
       */
    }
  </style>
</head>

<body>
  <div class="box"></div>
</body>

</html>
```


代码运行结果如下所示：

![](image/12_border%E5%B1%9E%E6%80%A7.png)

## box-sizing属性

CSS中提供的`box-sizing`属性规定了如何计算一个盒子的总宽度它具有两个值，如下所示：

- `content-box`：默认值。如果你设置一个元素的宽为`100px`，那么这个元素的内容区会有`100px`宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。

- `border-box`：如果设置该值，假如元素宽为`100px`，则元素就是固定为`100px`，包含`border`和`padding`，内容区的实际宽度是`width`减去`(border`+`padding`)的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。

示例代码如下所示：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>box-sizing属性</title>
  <style>
    .box1 {
      height: 100px;
      width: 300px;
      background-color: lightcoral;
      padding: 50px;
      border: 40px solid #f60;
      margin: 10px;
    }

    .box2 {
      box-sizing: border-box;
      height: 100px;
      width: 300px;
      background-color: lightgreen;
      padding: 50px;
      border: 40px solid #f60;
      margin: 10px;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="box1"></div>
    <div class="box2"></div>
  </div>
</body>

</html>
```


运行代码如下所示：

![](image/13_box-sizing%E5%B1%9E%E6%80%A7.png)

{完}


