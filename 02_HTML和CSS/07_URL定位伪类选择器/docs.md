# 与超链接(a元素)息息相关的伪类选择器

本篇文章我们将来学习与超链接(a元素)息息相关的哪些伪类选择器，本篇文章涉及的内容如下所示：

![](image/%E5%AF%BC%E8%AF%BB.png)

## :link伪类选择器

CSS中提供的`:link`伪类选择器用于选中那些没有被访问过的`<a>`元素，且`<a>`元素必须包含`href`属性。如下示例代码展示了`:link`伪类选择器的用法：

```css
a:link {
    color: red;
}
```


其实上面的用于直接使用`a`标签选择器也是可以实现的，示例代码如下：

```css
a {
    color: red;
}
```


代码运行结果如下所示：

![](image/01_link%E4%BC%AA%E7%B1%BB.png)

其实在实际的开发中`:link`伪类很少使用，一般都是使用`a`标签选择器直接代替。

> **tips** ：可以通过使用`:link`伪类选择器来实现`<a>`元素是否被禁用的效果(被禁用时移除`href`属性)。


## :visited伪类选择器

CSS提供的`:visited`伪类选择器用于选中已经被访问过的链接。该伪类选择器限制非常的多，具体如下：

- 允许使用的CSS属性非常有限，只允许使用一些颜色相关的属性，例如`color`、`background-color`、`border-color`等。

- 设置颜色时，如果使用`rgba()`或者`hsla()`设置透明的颜色时，`a`即`αlpha`的有效值只有`0`和`1`

- 该元素设置的属性必须是链接元素本身有的属性。也就是说`:visited`伪类选择器只能对链接的样式进行重置而不能自己设置。

如下代码展示了`:visited`伪类选择器的用法：

HTML结构如下：

```html
<body>
    <a href="" class="visited1">该元素设置了background-color属性</a>
    <hr />
    <a href="" class="visited2">该元素没有设置background-color属性</a>
</body>
```


CSS代码如下：

```css
.visited1 {
    color: violet;
}
.visited2 {
    color: violet;
    /* 设置一个背景颜色，不然 :visited伪类的背景颜色会失效 */
    background-color: red;
}

a:visited {
    color: #666;
    background-color: lawngreen;
}
```


代码运行结果如下所示：

![](image/02_visited%E4%BC%AA%E7%B1%BB.png)

> tips：这里的访问过与没有访问过主要在于`href`属性的值是否为空。


还有就是由于CSS中是存在着优先级的概念，为了防止有些伪类的效果被覆盖，约定的一个顺序就是`:link` — `:visited` — `:hover` — `:active`。

> 关于`:hover`伪类的`:active`伪类我们后面学习。


## :any-link伪类选择器

CSS中提供的`:any-link`选择器会匹配所有包含`href`属性的元素，不管有么有被访问过。

包含`href`属性的元素有`<a>`、`<link>`和`<area>`元素。由于`<link`元素是隐藏不显示的(准确的说其`display`属性值为`none`)，`<area>`元素基本不用。所有说`:any-link`伪类使用的只用`<a>`元素。

如下代码展示了`:any-link`伪类的用法：

```css
a:any-link {
    color: tomato;
}
```


代码运行结果如下所示：

![](image/03_any-link%E4%BC%AA%E7%B1%BB.png)

其实webkit内核的浏览器`<a>`元素的默认样式就是通过`any-link`伪类的实现的，如下图：

![](image/04_webkit%E5%86%85%E6%A0%B8a%E5%85%83%E7%B4%A0%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F.png)

## :target伪类选择器

CSS中提供的`:target`伪类是与锚点最为密切的一个伪类选择器，该伪类会匹配与当前锚点一致的那个元素。

> 关于什么是锚点以及用法在上一篇文章有所介绍，传送门[锚点](https://www.wolai.com/tgegBh4uTSQCXpWz4eEC8f)


如下代码展示了`:target`伪类的用法：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>target伪类</title>
        <style>
            h1:target {
                color: lightcoral;
                font-size: 2.4em;
            }
        </style>
    </head>
    <body>
        <a href="#third">跳转到第三个h标签</a>
        <h1>第一个h标签</h1>
        <h1>第二个h标签</h1>
        <h1 id="third">第三个h标签</h1>
        <h1>第四个h标签</h1>
        <h1>第五个h标签</h1>
    </body>
</html>
```


代码运行结果如下所示：

![](image/05_target%E4%BC%AA%E7%B1%BB.gif)

## 总结


