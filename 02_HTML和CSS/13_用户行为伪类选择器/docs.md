# 通过一个按钮来学习关于用户行为的伪类选择器

## 写在前面

本篇文章将来学习用户行为伪类选择器，该篇文章中的主要内容如下图所示：

![](image/00_%E5%AF%BC%E8%AF%BB.png)

## 按钮元素

在HTML中的按钮元素，一般情况下指的就是`<button>`元素，这是一个双标签元素，如下代码展示了`<button>`元素的用法：

```html
<button>这是一个按钮</button>
```


代码的运行结果如下所示：

![](image/01_button%E5%85%83%E7%B4%A0.png)

该元素还存在一个`disabled`属性，该属性表示按钮为是否为禁用状态，`disabled`属性的用法如下所示：

```html
<button disabled>这是一个禁用的按钮</button>
```


代码的运行结果如下所示：

![](image/02_disabled%E5%B1%9E%E6%80%A7.png)

在前端页面中的按钮的功能非常的强大，可以说按钮无处不在，例如我们注册时需要点击【注册】按钮，登录时需要点击【登录】按钮等等。按钮的主要功能就是帮助我们完成某种交互。

## button元素中可以使用的伪类选择器

一个按钮可以使用的伪类选择器有`:hover`、`:active`、`focus`等，如下动图展示`:hover`和`:active`伪类选择器的效果：

![](image/03_%E6%8C%89%E9%92%AE%E5%85%83%E7%B4%A0%E5%8C%85%E5%90%AB%E7%9A%84%E4%BC%AA%E7%B1%BB%E9%80%89%E6%8B%A9%E5%99%A8.gif)

其中，鼠标悬停时的状态为`:hover`，鼠标按下到松手的状态为`:active`。现在我们就来逐步学习一下这几个伪类选择器。

### :hover伪类

`:hover`伪类的出发时机是用户悬停的某个元素上，我们可以通过`:hover`伪类来修改元素的显示与隐藏，字体或者背景颜色等内容，需要提一嘴的是，触摸屏不支持`:hover`伪类选择器。

现在我们就可以通过`:hover`来修改一下文字的颜色，示例代码如下所示：

```css
button {
    /* 取消边框的样式 */
    border: none;
}

button:hover {
    background-color: #66B1FF;
}
```


代码的运行结果如下所示：

![](image/04_hover%E4%BC%AA%E7%B1%BB.gif)

### :active伪类

`:active`伪类代表的是用户按下按键和松开按键之间的时间，一般用于`<a>`元素和`<button>`元素，但是不限于这两个元素使用。

如下代码展示`:active`伪类的用法：

```css
button {
    border: none;
}

button:active {
    background-color: #3A8EE6;
}
```


代码的运行结果如下所示：

![](image/05_active%E4%BC%AA%E7%B1%BB.gif)

### :hocus伪类

`:hocus`伪类的触发时机为获取焦点后触发。如下代码展示`:hocus`伪类选择器的用法：

```css
button {
    border: none;
}

button:focus {
    background-color: #3A8EE6;
}
```


代码的运行结果如下所示：

![](image/05_focus%E4%BC%AA%E7%B1%BB.gif)

一个页面中只存在一个元素获取焦点。

### :disabled伪类

`:disabled`伪类表示按钮处于禁用状态，`:disabled`伪类不仅仅只有按钮可以使用，像后面学习的`<input>`等也具有`:disabled`伪类。

如下代码展示`:disabled`伪类的用法

```css
button {
    border: none;
}

button:disabled {
    background-color: #A0CFFF;
    /* 修改鼠标悬停时的状态 */
    cursor: no-drop;
}
```


代码的运行结果如下所示：

![](image/06_disabled%E4%BC%AA%E7%B1%BB.png)

## 案例：一个朴素按钮

现在我们就要通过上面学习的内容来制作一个朴素按钮，示例代码如下：

```css
button {
    border: none;
    color: #409eff;
    background: #ecf5ff;
    cursor: pointer;
    border: 1px solid #b3d8ff;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    padding: 12px 20px;
}

/* 值得注意的是 :hover和:active的顺序就是 hover 在前 active 在后 */
button:hover,
button:focus {
    background: #409EFF;
    border-color: #409EFF;
    color: #fff;
}

button:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
}

```


代码运行结构如下所示：

![](image/07_%E6%9C%B4%E7%B4%A0%E6%8C%89%E9%92%AE.gif)

## 总结

![](image/%E6%80%BB%E7%BB%93.png)

