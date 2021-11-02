# 浮动

## 写在前面

本篇文章将来学习CSS中的浮动，本篇文章的内容大纲如下：

![](image/00%E5%AF%BC%E8%AF%BB.png)

## 概述

CSS中的浮动，指的是`float`属性，`float`的诞生之初并不是为了完成某种高级的布局，而是为了完成一个简单的文字环绕。

`float`属性官方给的定义是指定某一个元素沿着其容器的左侧或右侧放置，允许文本和内联元素环绕它。为元素设置该元素后，元素会脱离文档流。

> 注：关于脱离文档流的内容，将会在下一篇文章《定位》中做解释。


## 基本用法

CSS中提供的`float`的属性，其常用你的属性值主要有三个：

- `left`：元素向左浮动

- `right`：元素向右浮动

- `none`：元素不进行浮动

> 注：开启浮动的元素称之为浮动元素


示例代码如下所示：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge" />
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0" />
  <title>float属性的基本用法</title>
  <style>
    .container {
      width: 1640px;
      margin: 0 auto;
    }

    .content {
      width: 800px;
      background-color: #3498db;
      margin: 10px;
      float: left;
    }

    .item {
      height: 300px;
      width: 300px;
      background-color: #2ecc71;
      font-size: 100px;
      line-height: 300px;
      color: #eee;
    }

    p {
      margin: 5px;
    }

    /* 开启浮动 */
    .item-l {
      float: left;
    }

    .item-r {
      float: right;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="content">
      <div class="item item-l">左浮动</div>
      <p>我如果爱你——绝不像攀援的凌霄花，借你的高枝炫耀自己；</p>
      ...
    </div>
    <div class="content">
      <div class="item item-r">右浮动</div>
      <p>我如果爱你——绝不像攀援的凌霄花，借你的高枝炫耀自己；</p>
      ...
    </div>
  </div>
</body>

</html>
```


代码运行结果如下图所示：

![](image/01_float%E5%B1%9E%E6%80%A7%E7%9A%84%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95.png)

开启浮动的元素会具有两个**基本特性** ：

- 包裹性：所谓的包裹性就是指元素的宽度会收缩到与内容一致。

- 破坏性：所谓的破坏性指的就是父元素的高度塌陷

## 清除浮动

要掌握什么是清除浮动首先我们需要了解为什么要清除浮动，是因为浮动元素具有其破坏性，导致父元素的**高度塌陷** ，所以需要清除浮动来解决高度塌陷。

清除浮动有以下几个方式：

### 使用带clear属性的空元素

在浮动元素后使用一个空元素如`<div class="clear"></div>` ，并在CSS中赋予`.clear{clear:both;}`属性即可清理浮动。亦可使用`<br class="clear" />`或`<hr class="clear" />`来进行清除。

示例代码如下所示：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge" />
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0" />
  <title>使用带 clear 属性的空元素</title>
  <style>
    .news {
      background-color: #ff4757;
      border: solid 1px #eccc68;
      width: 1000px;
      margin: 0 auto;
    }

    .news img {
      float: left;
      width: 700px;
    }

    .news h1 {
      float: right;
    }

    /* 清除浮动元素 */
    .clear {
      clear: both;
    }
  </style>
</head>

<body>
  <div class="news">
    <img src="../image/img.jpg" />
    <h1>some text</h1>
    <div class="clear"></div>
  </div>
</body>

</html>
```


使用该方法的优点是简单，代码少，浏览器兼容性好；缺点是需要添加大量无语义的HTML元素，代码不够优雅，后期不容易维护。

### 使用CSS的overflow属性

为浮动元素的容器元素添加`overflow:hidden;`或`overflow:auto;`可以达到清除浮动的效果。

示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge" />
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0" />
  <title>使用 CSS 的 overflow 属性</title>
  <style>
    .news {
      background-color: #ff4757;
      border: solid 1px #eccc68;
      width: 1000px;
      margin: 0 auto;
      /* 通过添加 overflow: hidden; 实现清除浮动效果 */
      overflow: hidden;
    }

    .news img {
      float: left;
      width: 700px;
    }

    .news h1 {
      float: right;
    }
  </style>
</head>

<body>
  <div class="news">
    <img src="../image/img.jpg" />
    <h1>some text</h1>
    <div class="clear"></div>
  </div>
</body>

</html>
```


该方法的优点是简单，代码少，浏览器支持好；缺点是不适用于高度固定的盒子，内容超出时会被隐藏。

### 使用CSS的:after伪元素

使用CSS的`:after`伪元素清除浮动伪元素是一种固定的写法，具体如下所示：

```css
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge" />
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0" />
  <title>使用 CSS 的 :after 伪元素</title>
  <style>
    .news {
      background-color: #ff4757;
      border: solid 1px #eccc68;
      width: 1000px;
      margin: 0 auto;
    }

    .news img {
      float: left;
      width: 700px;
    }

    .news h1 {
      float: right;
    }

    /* 为父容器添加一个 class  */
    .clearfix:after {
      content: '';
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
  </style>
</head>

<body>
  <div class="news clearfix">
    <img src="../image/img.jpg" />
    <h1>some text</h1>
  </div>
</body>

</html>
```


使用该方法的优点是浏览器支持好，不容易出现怪问题；缺点是代码量偏多。

在实际开发中推荐使用该方式，可以设置一个公共类，在使用的时候直接引入，可以减少CSS的代码。

{完}

