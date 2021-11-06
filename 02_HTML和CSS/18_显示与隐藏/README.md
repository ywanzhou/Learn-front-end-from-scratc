# 显示与隐藏

## 写在前面

本篇文章介绍CSS中的显示与隐藏，主要包括两个内容，一个是`display`属性的`none`属性值，另一个就是`visibility`属性。

## display属性

CSS中提供的`display`属性用来设置HTML元素的显示类型，该属性有一个特殊的值，该值就是`none`。如果为某个元素设置该值，该元素将不会在页面中显示，且不占用任何空间。还有就是其子元素也会被隐藏。

值得注意的是如果是正常的文档流的话，该元素隐藏之后会影响后面元素显示的。

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
  <title>display属性</title>
  <style>
    body {
      margin: 0;
    }

    .box {
      box-sizing: border-box;
      height: 400px;
      width: 400px;
      background-color: lightcoral;
      border: 1px solid #000;
      margin: 0 auto;
      /* 文字设置 */
    }

    /* 凡是带有 hidden 的 class 元素都将不会进行显示 */
    .hidden {
      display: none;
    }
  </style>
</head>

<body>
  <div class="box hidden">1</div>
  <div class="box">2</div>
</body>

</html>
```


运行代码如下所示：

![](image/01_display%E5%B1%9E%E6%80%A7.png)

`:hover`伪类配合`display: none`可以完成很多悬停显示的案例，例如鼠标悬停展示二维码，代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>鼠标悬停展示二维码</title>
  <!-- 引入一个花里胡哨的按钮 -->
  <link rel="stylesheet"
        href="./button.css">
  <style>
    .qr-code {
      width: 200px;
      height: 200px;
      line-height: 200px;
      background-color: gray;
      text-align: center;
      font-size: 64px;
      margin-left: 140px;
      /* 默认隐藏 */
      display: none;
    }

    .btn:hover~.qr-code {
      display: block;
    }
  </style>
</head>

<body>
  <button class="btn">
    ⛱️ 悬停展示二维码
  </button>
  <div class="qr-code">
    二维码
  </div>
</body>

</html>
```


运行效果如下所示：

![](image/02_%E6%82%AC%E5%81%9C%E5%B1%95%E7%A4%BA%E4%BA%8C%E7%BB%B4%E7%A0%81.gif)

上面就是关于`display: none`的一个实际用途，当前它的实际用处绝对不止这么一种。

## visibility属性

CSS的`visibility`属性用来设置HTML元素显示或者隐藏，而不更改HTML页面的布局；也就是说`visibility`属性仅仅有隐藏元素的效果，并不会改变页面的布局.该属性还可以隐藏`<table>`表格中的行或列。

该属性常用的值就两个一个是默认值`visible`显示元素，另一个是`hidden`隐藏元素

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
  <title>visibility属性</title>
  <style>
    div {
      width: 200px;
      height: 200px;
    }

    .box1 {
      background-color: red;
      /* 
          设置 visibility 属性为 hidden 时，该元素在隐藏，但是在HTML页面中所占区域依然存在。
          此属性默认值为(visible) 
          */
      visibility: hidden;
    }

    .box2 {
      background-color: blueviolet;
    }
  </style>
</head>

<body>
  <div class="box1"></div>
  <div class="box2"></div>
</body>

</html>
```


代码执行效果如下：

![](image/03_visibility%E5%B1%9E%E6%80%A7.png)

## opacity属性

除了前面介绍的两个隐藏元素的方法，CSS中提供的`opacity`属性也可以实现元素隐藏的效果。

`opacity`属性实际上是用来设置元素的透明度，接受一个`0~1`的值，当元素的值不为1时，会将元素放在一个新的层叠上下文中。

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
  <title>opacity属性</title>
  <style>
    div {
      width: 200px;
      height: 200px;
    }

    .box1 {
      background-color: red;

      /* 将元素设置为完全透明 */
      opacity: 0;
    }

    .box2 {
      background-color: blueviolet;
    }
  </style>
</head>

<body>
  <div class="box1"></div>
  <div class="box2"></div>
</body>

</html>
```


效果与上面的那张图是一样的。

{完}

