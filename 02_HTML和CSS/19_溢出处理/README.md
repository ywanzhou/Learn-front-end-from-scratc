# 溢出处理

本篇文章介绍CSS中内容溢出的处理，主要包括对**块溢出** 和**文字溢出** 两种溢出的处理。

## 写在前面

所谓的溢出就是**当元素里的内容** （包括文本内容、图片、视频等内容）**的大小超出盒子的大小区域时，内容区域会有一部分显示在盒子所在区域的外部** ，这就是内容给溢出。

这里讲解的溢出处理主要包含两种，第一种是对块溢出的处理，第二种是对文字溢出的处理。

## 块溢出

CSS中对块溢出处理的属性是`overflow`属性，该属性是`overflow-x`和`overflow-y`属性的简写。该属性常用的值有如下4个：

|值|描述|
|---|---|
|`visible`|默认值。内容不会被修剪，超出部分会溢出到元素容器外面。|
|`hidden`|内容会被修剪，并且其余内容是不可见的。|
|`scroll`|内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。|
|`auto`|如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。|



这里需要注意是`overflow`的值为`scroll`时，滚动条是始终显示的。

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
  <title>overflow属性</title>
  <style>
    body {
      margin: 0;
      display: flex;
    }

    .overflow {
      width: 300px;
      height: 400px;
      background-color: lightskyblue;
      margin-left: 30px;
      margin-top: 30px;
    }

    .box {
      width: 240px;
      height: 500px;
      background-color: lightcoral;
    }

    .visible {
      overflow: visible;
    }

    .hidden {
      overflow: hidden;
    }

    .scroll {
      overflow: scroll;
    }

    .auto {
      overflow: auto;
    }

    code {
      display: block;
      text-align: center;
      font-size: 18px;
    }
  </style>
</head>

<body>
  <div class="overflow visible">
    <code>overflow: visible;</code>
    <div class="box"></div>
  </div>
  <div class="overflow hidden">
    <code>overflow: hidden;</code>
    <div class="box"></div>
  </div>
  <div class="overflow scroll">
    <code>overflow: scroll;</code>
    <div class="box"></div>
  </div>
  <div class="overflow auto">
    <code>overflow: auto;</code>
    <div class="box"></div>
  </div>
</body>

</html>
```


运行结果如下所示：

![](image/01_overflow%E5%B1%9E%E6%80%A7.png)

## 文字溢出

### 单行文字溢出

CSS中提供的`text-overflow`属性用来设置当文本内容溢出时，要如何进行处理，该属性有三个值，如下表所示：

|值|描述|
|---|---|
|`clip`|修剪文本。|
|`ellipsis`|显示省略符号来代表被修剪的文本。|
|`<string>`|使用给定的字符串来代表被修剪的文本。|



这里需要**注意** 的是`text-overflow`属性必须配合`overflow`属性来使用，而且`overflow`属性为非`visible`，否则`text-overflow`属性将无效。

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
  <title>单行文本溢出</title>
  <style>
    div {
      width: 80px;
      border: 1px solid #4e4e4e;
      /* 强制文本内容一行输出 */
      white-space: nowrap;
      /* overflow属性来处理内容溢出的情况 */
      overflow: hidden;
      /* 
        text-overflow属性必须配合overflow属性来使用
        - text-overflow属性具体处理文本显示的情况
       */
      text-overflow: ellipsis;
    }
  </style>
</head>

<body>
  <div>这是一个很长很长的内容</div>
</body>

</html>
```


代码运行结果如下所示：

![](image/02_%E5%8D%95%E8%A1%8C%E6%96%87%E5%AD%97%E6%BA%A2%E5%87%BA%E5%A4%84%E7%90%86.png)

> 页面缩放至500%


### 多行文字溢出

CSS中对多行文字的溢出其实就是一个固定写法，可以将其封装为一个公共的class，在使用的时候直接引用这个className就好。

核心代码如下：

```css
div{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  }
```


详细代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>多行文字溢出处理</title>
  <style>
    div {
      height: 60px;
      width: 400px;
      margin: 0 auto;
      border: 0.5px solid black;
      line-height: 20px;

      overflow: hidden;
      text-overflow: ellipsis;
      /* 
          display属性值为带前缀的值: 不同浏览器提供的显示效果
          * -webkit-box: Chrome\Edge\Safari浏览器提供
        */
      display: -webkit-box;
      /* 
          -webkit-line-clamp属性:
          * 注意: 该属性是Webkit内核的私有属性(其他浏览器可能提供不同的属性)
          * 作用: 设置文本内容显示的行数
        */
      -webkit-line-clamp: 3;
      /* 
          -webkit-box-orient属性:
          * 作用: 在父元素设置,子元素的排列方式
          * 值:
              * vertical: 表示垂直
              * horizontal: 表示水平
        */
      -webkit-box-orient: vertical;
    }
  </style>
</head>

<body>
  <div>
    所谓的溢出就是当元素里的内容（包括文本内容、图片、视频等内容）的大小超出盒子的大小区域时，内容区域会有一部分显示在盒子所在区域的外部，这就是内容给溢出。

    这里讲解的溢出处理主要包含两种，第一种是对块溢出的处理，第二种是对文字溢出的处理。
  </div>
</body>

</html>
```


代码运行结果如下：

![](image/03_%E5%A4%9A%E8%A1%8C%E6%96%87%E6%9C%AC%E6%BA%A2%E5%87%BA%E5%A4%84%E7%90%86.png)

{完}


