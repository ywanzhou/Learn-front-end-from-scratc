# CSS选择器

## 写在前面

本篇文章将来学习CSS中的选择器，通过本篇文章可以掌握什么内容呢？如下图：

![](image/00_%E5%AF%BC%E8%AF%BB.png)

本篇文章大概万字，阅读完大概会花费半小时的时间，建议点赞收藏慢慢读。

## CSS选择器概述

### 什么是选择器

**CSS选择器** 的作用是**按照CSS规则定位HTML页面的一个或多个元素** 。浏览器在解析HTML页面时，会根据CSS规则中的选择器定位HTML页面的元素，并为对应的元素设定样式。

CSS选择器作为CSS中的支柱，其作用好比人类的脊柱，与THML结构、浏览器行为、用户行为都相互依存相互作用，这就导致CSS选择器是非常重要的一个部分。

这里的 “**选择器** ” 指的就是平常使用的CSS声明块前面的标签、类名等。如下代码所示：

```css
div {
  color: lightcoral;
    font-size: 24px;
}
```


> 这里的`div`就是一个选择器。


### 选择器的分类

CSS从第一版本发展到第三版本，导致CSS选择器的种类越来越复杂。目前，CSS选择器的分类具体如下：

- 基本选择器：共有5个基本选择器，是CSS选择器的最为基本的用法。

- 层级选择器：共有4个层级选择器，是根据HTML元素之间的关系来定位HTML元素。

- 组合选择器：具有交集和并集两种用法，是将之前基本选择器和层级选择器进行组合。

- 伪类选择器：允许未包含在HTML页面中的状态信息选定位HTML元素。

- 伪元素选择器：定位所有未被包含HTML的实体。

### 选择器的优先级别

CSS选择器的优先级别有着严格的规定，我们可以将其划分为`0~5`这6个级别，在这6个级别中，前4个的等级由CSS选择器决定，后两个等级由我们书写的形式和特性语法决定。具体如下所示

- 0级：**通配符选择器优先级为0** (通配选择器写作星号 `*` )。代码如下所示：

```css
* {
    color: #000; 
}
```


- 1级：**类型（元素）选择器的优先级为1** 

- 2级：**类选择器和属性选择器的优先级为10** 

- 3级：**ID选择器的优先级为100** 

- 4级：**内联样式的优先级为1000** 

- 5级：`!important` 特殊规则

&ensp;&ensp;&ensp;&ensp;> `!important`是选择器优先级比较特殊的存在，优先级别为最高。**值得注意的是** ，使用`!important`会破坏原有的选择器类型权重规则


## 基本选择器

CSS的**基本选择器** 是选择器所有种类中最为基础的用法，**基本选择器** 共有5种具体用法，如下：

- 类型选择器/元素选择器

- 类选择器

- ID选择器

- 通用选择器/通配符选择器

- 属性选择器

### 类型选择器

**类型选择器** 又称为**元素选择器** ，这种基本选择器是通过HTML页面的元素名定位具体HTML元素。如果类型选择器单独使用的话，会定位当前HTML页面中所有该元素名的元素。

语法结构如下所示：

```css
元素名 {  
  属性 : 属性值;  
 }
```


**值得注意是** 类型选择器的元素名是不区分大小写的。

示例代码如下：

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>类型选择器</title>
    <style>
        /* 选择标签名为 h1 的元素，设置字体的颜色为红色 */
        h1 {
            color: lightcoral;
        }
    </style>
</head>

<body>
    <h1>一级标题</h1>
    <h2>二级标题</h2>
</body>

</html>
```


代码运行结果如下图所示：

![](image/01_%E7%B1%BB%E5%9E%8B%E9%80%89%E6%8B%A9%E5%99%A8.png)

类型选择器是最简单的一个选择器，直接通过元素名来使用。

### 类选择器

**类选择器** 是通过HTML元素的`class`属性的值定位具体HTML元素。这种基本选择器的用法是 `.类名`形式。

语法结构如下所示：

```JavaScript
.类名 {
  属性 : 属性值;
}
```


示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>类选择器</title>
    <style>
        /* 设置所有带有 title 类名的元素 */
        .title {
            color: lightsalmon;
        }
    </style>
</head>

<body>
    <!-- 为 h1 h2 h3 元素增加一个 title 的类名，可以通过类选择器统一控制 -->
    <h1 class="title">一级标题</h1>
    <h2 class="title">二级标题</h2>
    <h3 class="title">二级标题</h3>
</body>

</html>
```


代码运行结果如下图所示：

![](image/02_%E7%B1%BB%E9%80%89%E6%8B%A9%E5%99%A8.png)

下图展示了类选择器的分析结构：

![](image/03_%E7%B1%BB%E9%80%89%E6%8B%A9%E5%99%A8%E7%9A%84%E5%88%86%E6%9E%90%E7%BB%93%E6%9E%84.png)

在HTML中可以为一个元素添加多个类名，示例代码如下：

```JavaScript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>类选择器</title>
    <style>
        .title {
            color: lightsalmon;
        }

        /* 任意选择一个类名设置即可 */
        .h3 {
            color: lawngreen;
        }
    </style>
</head>

<body>
    <h1 class="title">一级标题</h1>
    <h2 class="title">二级标题</h2>
    <!-- 多个类型通过空格进行分割 -->
    <h3 class="title h3">二级标题</h3>
</body>

</html>
```


代码运行结果如下图所示：

![](image/04_%E4%B8%BA%E5%85%83%E7%B4%A0%E8%AE%BE%E7%BD%AE%E5%A4%9A%E4%B8%AA%E7%B1%BB%E5%90%8D.png)

`<h3>`元素的字体与前面不一样的原因是因为相同优先级时，越靠后优先级越高。

### ID选择器

**ID选择器** 和**类选择器** 类似，都是根据某个属性来匹配HTML元素的，类选择器匹配的是`class`选择器，而ID选择器匹配的是`id`属性。值得注意的是，**ID属性在整个页面中是唯一不可重复的** 。

语法结构如下：

```JavaScript
#ID {
  属性 : 属性值;
}
```


用法与类选择器类似，这里不做赘述。只需要注意`id`属性唯一不可重复即可。

### 通用选择器

**通用选择器** 又称为**通配符选择器** ，是一个星号（`*`），这个选择器是一个特殊的标签选择器，它可以指代所有类型的标签元素，包括自定义元素，以及`<script>`、`<style>`、`<title>`等元素，但是不包括伪元素。

语法结构如下所示：

```css
* {
  属性 : 属性值;
}
```


示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>通配符选择器</title>
    <style>
        * {
            color: lightskyblue;
        }

        /* 由于通配符选择器的优先级最低，可以随意覆盖 */
        p {
            color: #333;
        }
    </style>
</head>

<body>
    <h1>一级标题</h1>
    <h2>二级标题</h2>
    <p>段落文本</p>
</body>

</html>
```


代码运行结果如下图所示：

![](image/05_%E9%80%9A%E9%85%8D%E7%AC%A6%E9%80%89%E6%8B%A9%E5%99%A8.png)

### 属性选择器

**属性选择器** 是通过HTML元素已经存在属性名或属性值来定位具体HTML元素，在官方文档中类选择器和ID选择器都属于属性选择器，因为本质上类选择器是HTML元素中`class`的属性值，ID选择器是 HTML 元素中`id`的属性值。

CSS中的属性选择器还可以分为两种，如下所示

- 属性值直接匹配选择器

- 属性值正则匹配选择器

接下来我们将分别讨论这两类属性选择器

#### 属性值直接匹配选择器

属性值直接匹配选择器还可以分为4种，如下所示：

- `[attr]`：表示属性名匹配

- `[attr= "value"]`：表示键值对匹配

- `[attr~="value"]`：表示是属性值单词完全匹配选择器，专门用来匹配属性中的单词，其中，`～=`用来连接属性和属性值。

- `[attr|="value"]`：表示属性值起始片段完全匹配选择器，表示具有`attr`属性的元素，其值要么正好是`value` ，要么以`value`外加短横线`-`开头，`|=`用于连接需要匹配的属性和属性内容。

`[attr]`**属性选择器** 

`[attr]`属性选择器是众多属性选择器中的最简单用法，其中`attr`表示的是HTML元素的属性名。`[attr]`属性选择器是通过`HTML`元素的`attr`属性名来定位一个或多个HTML元素，而不关注该属性的值是什么。

语法结构如下所示：

```css
[attr] {
  属性 : 属性值;
}
```


示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>属性选择器</title>
    <style>
        /* 选中所有id属性 */
        [id] {
            color: cornflowerblue;
        }
    </style>
</head>

<body>
    <h1 id="title1">白月初</h1>
    <h1 id="title2">东方月初</h1>
    <h1 id="title3">涂山苏苏</h1>
    <h1 id="title4">涂山红红</h1>
    <h1 id="title5">涂山雅雅</h1>
    <h1 id="title6">王权富贵</h1>
</body>

</html>
```


代码运行结果如下图所示：

![](image/06_%E5%B1%9E%E6%80%A7%E9%80%89%E6%8B%A9%E5%99%A81.png)

`[attr=value]`**属性选择器** 

`[attr=value]`属性选择器是通过`HTML`元素的`attr`属性名属性值为`value`来定位一个或多个HTML元素。

语法结构如下所示：

```css
[attr=value] {
  属性 : 属性值;
}
```


示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>属性选择器</title>
    <style>
        /* 选择 id 属性为 title1 的元素 */
        [id=title1] {
            color: cornflowerblue;
        }
    </style>
</head>

<body>
    <h1 id="title1">白月初</h1>
    <h1 id="title2">东方月初</h1>
    <h1 id="title3">涂山苏苏</h1>
    <h1 id="title4">涂山红红</h1>
    <h1 id="title5">涂山雅雅</h1>
    <h1 id="title6">王权富贵</h1>
</body>

</html>
```


代码运行结果如下图所示：

![](image/06_%E5%B1%9E%E6%80%A7%E9%80%89%E6%8B%A9%E5%99%A82.png)

`[attr~=value]`**属性选择器** 

`[attr~=value]`属性选择器是通过HTML元素的`attr`属性名，属性值是一个以空格分隔的列表并且`value`值是该值列表中的之一，来定位一个或多个HTML元素。

`[attr|=value]`**属性选择器** 

`[attr|=value]`属性选择器通过HTML元素的`attr`属性名并且属性值为`value`或者以`value-`为前缀来定位一个或多个HTML元素。

示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>属性选择器</title>
    <style>
        /* 匹配所有id属性中包含 name4 的元素 */
        [class~=name4] {
            color: cornflowerblue;
        }

        /* [class |="name"] 会选择 class 属性以属性值为 name 或者 name-开头的属性 */
        [class |="name"] {
            color: lawngreen;
        }
    </style>
</head>

<body>
    <h1 id="title1" class="name-1 title ">白月初</h1>
    <h1 id="title2" class="name2 title ">东方月初</h1>
    <h1 id="title3" class="name-3 title ">涂山苏苏</h1>
    <h1 id="title4" class="name4 title ">涂山红红</h1>
    <h1 id="title5" class="name-5 title ">涂山雅雅</h1>
    <h1 id="title6" class="name">王权富贵</h1>
</body>

</html>
```


代码运行结果如下图所示：

![](image/06_%E5%B1%9E%E6%80%A7%E9%80%89%E6%8B%A9%E5%99%A83.png)

#### 属性值正则匹配选择器

属性值正则匹配选择器还可以分为3种，如下所示：

- `[attr^=val]`属性选择器：通过HTML元素的`attr`属性名并且属性值是**以** **value** **为开头** 来定位具体HTML元素。

- `[attr$=val]`属性选择器：通过HTML元素的 `attr`属性名并且属性值是**以 ** **value ** **为结束** 来定位具体 HTML 元素。

- `[attr*=val]`属性选择器：通过HTML元素的`attr`属性名并且属性值是**包含** **value** 来定位具体HTML元素。

语法结构如下所示：

```css
[attr^=value] {
  属性 : 属性值;
}
[attr$=value] {
  属性 : 属性值;
}

[attr*=value] {
  属性 : 属性值;
}

```


示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>属性选择器</title>
    <style>
        /* 匹配以 name 开头的元素，设置字体颜色为蓝色 */
        [class ^=name] {
            color: blue;
        }

        /* 匹配以 human 结尾的元素，设置字体大小为 2.6rem */
        [class $=human] {
            font-size: 2.6rem;
        }

        /* 匹配包含 em 的元素，设置字体颜色为红色 */
        [class *=em] {
            color: red;
        }
    </style>
</head>

<body>
    <h1 class="name human">白月初</h1>
    <h1 class="name human">东方月初</h1>
    <h1 class="name demon">涂山苏苏</h1>
    <h1 class="name demon">涂山红红</h1>
    <h1 class="name demon">涂山雅雅</h1>
    <h1 class="name human">王权富贵</h1>
</body>

</html>
```


代码运行结果如下图所示：

![](image/06_%E5%B1%9E%E6%80%A7%E9%80%89%E6%8B%A9%E5%99%A84.png)

## 层级选择器

CSS**层级选择器** 是根据HTML节点树之间的关系提供的选择器用法，所以说如果想要很好的学习**层级选择器** 首先要搞清楚HMTL元素之间的关系是什么样子的。先看下面这段HTML代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML测试代码</title>
</head>

<body>
    <div>
        <p></p>
        <p></p>
    </div>
    <div>
        <span></span>
        <button></button>
        <span></span>
    </div>
</body>

</html>
```


将如上代码可以画成如下节点树，如下图所示

![](image/07_HTML%E8%8A%82%E7%82%B9%E6%A0%91.png)

现在来我们看一个HTML元素之间的关系，在HTML页面中元素之间的关系存在着如下所示的三种关系：

- **父级与子级之间的关系** ：在上述代码中，左边`<div>`元素是`<p>`元素的的父级元素，反之`<p>`是`<div` 的子级元素，当然这种父子结构还有跟多。

- **兄弟之间的关系** ：在上述代码代码中，`<p>`元素和`<p>`元素是兄弟元素，`<span>`元素和`<button>` 元素也是兄弟元素。

- **祖先与后代之间的关系** ：在上述代码代码中，`<p>`元素是`<body>`元素的后代元素，反之`<body>`元素是`<p>`元素的祖先元素。

### 层级选择器种类

根据HTML元素之间的3种关系，CSS的层级选择器提供了如下4种用法：

- 后代选择器：将某个元素当做祖先元素，定位该元素的所有后代元素。

- 子级选择器：将某个元素当做父级元素，定位该元素的所有子级元素。

- 相邻兄弟选择器：将某个元素作为目标元素，定位与该目标元素拥有同一个父级元素的下一个指定元素

- 普通兄弟选择器：是将某个元素作为目标元素，定位与该目标元素拥有同一个父级元素的之后任意指定元素。

### 选择符

&ensp;&ensp;&ensp;&ensp;CSS提供的4个选择符，对应着CSS层级选择题的四种用法，如下所示

&ensp;&ensp;&ensp;&ensp;- 表示后代关系的空格（` `）

&ensp;&ensp;&ensp;&ensp;- 表示父子关系的尖括号（`>`）

&ensp;&ensp;&ensp;&ensp;- 表示相邻兄弟关系的加号（`+`）

&ensp;&ensp;&ensp;&ensp;- 表示兄弟关系的波浪号（`~`）

示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>层级选择器</title>
    <style>
        /* body下后代字体大小为28px */
        body .child {
            font-size: 28px;
        }

        /* body的子级div字体大小为34px */
        body>div {
            font-size: 34px;
        }

        /* 设置.child的兄弟元素字体颜色为红色 */
        .child1~.child {
            color: red;
        }

        /* 设置.child的响铃兄弟字体变粗 */
        .child1+.child {
            font-weight: bold;
        }
    </style>
</head>

<body>
    <!-- 
        目前结构中，我们将 body 元素作为祖先元素
        body与.parent为父子关系
        .parent与.child为父子关系
        body与.child为祖先关系
        .child1与.child2为相邻兄弟关系
        .child2与.child3为相邻兄弟关系
        .child1与.child3为普通兄弟关系
     -->
    <div class="parent">
        父级元素
        <div class="child child1">子级1</div>
        <div class="child child2">子级2</div>
        <div class="child child3">子级3</div>
    </div>
</body>

</html>
```


代码运行结果如下图所示：

![](image/08_%E5%B1%82%E7%BA%A7%E9%80%89%E6%8B%A9%E5%99%A8.png)

## 组合选择器

**组合选择器** 是将之前学习的CSS选择器用法综合在一起的一种用法，从定位HTML元素的结果上可分为如下2种：

- 组合（并集）选择器

- 组合（交集）选择器

### 组合（并集）选择器

**组合（并集）选择器** 就是不同选择器的相同CSS声明合并在一起，从而得到更为简洁的样式表。例如如果要为`<h1>`至`<h6>`标题元素设定相同的背景颜色，可以如下示例代码所示：

```css
h1 { color:blue; }
h2 { color:blue; }
h3 { color:blue; }
h4 { color:blue; }
h5 { color:blue; }
h6 { color:blue; }
```


这时我们可以看到上述CSS使用了**类型选择器** ，但元素名称不同，并且CSS声明完全一致。那么，上述示例代码可以通过**组合（并集）选择器** 进行改写如下所示：

```css
h1, h2, h3, h4, h5, h6 { color:blue; }
```


上述两段示例代码的作用是一致的，第二段示例代码展示的就是**组合（并集）选择器** 的用法。

**组合（并集）选择器** 是使用逗号（`,`）分隔不同的选择器，并为这些不同的选择器定义相同的CSS声明。**组合（并集）选择器** 的语法结构如下所示：

```css
选择器1, 选择器2, ... ... {
  属性 : 属性值;
}
```


### 组合（交集）选择器

**组合（交集）选择器** 就是先通过第一个选择器定位HTML元素集，再通过第二个选择器从上述HTML元素集再次筛选定位HTML元素集，如此反复，直到最后一个选择器执行完毕。

例如如果我们要为所有`class`属性值为`cls`的`<p>`元素设定CSS样式的话，具体实现的代码如下所示：

```css
p.cls {
  color: blueviolet;
}
```


如上述示例所示，展示了**组合（交集）选择器** 的用法。

**组合（交集）选择器** 在多个选择器之间**不需要任何分隔符进行分隔** ，**只需要将多个选择器依次编写即可** 。**组合（交集）选择器** 的语法结构如下所示：

```css
选择器1选择器2... ... {
  属性 : 属性值;
}
```


值得注意的是，**组合（交集）选择器中多个选择器的执行顺序是按照编写的先后顺序执行的** 。

## 伪元素选择器

CSS中**伪元素选择器** 的是在指定CSS选择器增加关键字。用来描述某个指定元素的特定部分设定样式。

语法结构如下所示：

```css
/* CSS3 语法 */
选择器::伪元素 {
  属性 : 属性值;
}
/* CSS2 过时语法 (仅用来支持 IE8) */
选择器:伪元素 {
  属性 : 属性值;
}
```


现在应该都采用两个冒号的方式，除非你还兼容IE8。

### ::before和::after伪元素

**::before** **伪元素** 的作用是作为定位的HTML元素的第一个子级元素，**::after** ** 伪元素** 的作用是作为定位的 HTML元素的最后一个子级元素。

如下示例代码展示了`::before`和`::after`伪元素的用法：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>::before和::after伪元素</title>
    <style>
        p::before {
            content: "♥";
        }

        p::after {
            content: "♥";
        }
    </style>
</head>

<body>
    <p>这是一段测试内容</p>
</body>

</html>
```


代码运行结果如下图所示：

![](image/09_after%E5%92%8Cbefore.png)

如上述示例代码所示，`::before`伪元素和`::after`伪元素通常会配合`content`属性来为该元素增加装饰内容。

`content`属性用于在元素的`::before`伪元素和`::after`伪元素中插入内容。该属性具有的值如下所示：

- `none`：不会产生伪类元素。

- `normal`：`::before`伪元素和`::after`伪类元素中会被视为 none。

- `text`：文本内容。

- `url`：格式为`url()`，指定一个外部资源（比如图片）。如果该资源或图片不能显示，它就会被忽略或显示一些占位。

### ::first-letter和::first-line伪元素

`::first-letter`和`::first-line`伪元素分别匹配文本的第一个字和第一行的样式内容。示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>::first-letter和::first-line伪元素</title>
    <style>
        /* 匹配第一行 */
        p::first-line {
            background-color: lightcoral;
        }

        /* 匹配第一个字 */
        p::first-letter {
            font-size: 130%;
        }
    </style>
</head>

<body>
    <p>我如果爱你——绝不像攀援的凌霄花，借你的高枝炫耀自己；</p>
</body>

</html>
```


代码运行结果如下图所示：

![](image/10_first-letter%E5%92%8Cfirst-line%E4%BC%AA%E5%85%83%E7%B4%A0.png)

值得注意的是`::first-letter`和`::first-line`伪元素可以使用的CSS属性是有限制的，可以点击查看`::first-letter`、`::first-line`

### ::selection伪元素

`::selection`伪元素的作用是匹配用户在HTML页面选中的文本内容（比如使用鼠标或其他选择设备选中的部分）设置高亮效果。如下示例代码展示了`::selection`伪元素的用法：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>::first-letter和::first-line伪元素</title>
    <style>
        p::selection {
            color: gold;
            background-color: red;
        }
    </style>
</head>

<body>
    <p>我如果爱你——绝不像攀援的凌霄花，借你的高枝炫耀自己；</p>
</body>

</html>
```


代码运行结果如下图所示：

![](image/11_selection%E4%BC%AA%E5%85%83%E7%B4%A0.gif)

## **伪类选择器** 

**伪类选择器** 是一种允许通过未包含在HTML元素的状态信息来定位HTML元素的用法。**伪类选择器** 的具体用法就是向已有的选择器增加关键字，表示定位的HTML元素的状态信息。

例如`:hover`伪类选择器可以用来在用户将鼠标悬停在按钮上时改变按钮的颜色。如下示例代码所示：

```css
/* 所有用户指针悬停的按钮 */  
 button:hover {  
  color: blue;  
 }
```


**伪类选择器** 的语法结构如下所示：

```css
选择器:伪类 {  
  属性 : 属性值;  
 }
```


**伪类选择器** 的具体语法格式为 `:伪类`，这里一定不要忘记 `:`。

### 伪类选择器的分类

CSS 版本从第一版本发展到第三版本，提供的**伪类选择器** 的数量已经很庞大了。尤其CSS3版本新增了大量的**伪类选择器** 。

**伪类选择器** 的数量这么多，为了更好地梳理**伪类选择器** ，我们可以按照用途的不同分为如下 5 种类型：

- 用户行为伪类：指与用户行为相关的一些伪类，例如，悬停`:hover`、按下`:active`以及获取焦点`:focus`等。

- URL定位伪类：用于定位HTML页面中的元素

- 输入伪类：与表单控件相关的伪类

- 树结构伪类：主要用于定位目标元素

- 逻辑组合伪类：用于逻辑操作的，例如`:not()`，就表示不是某元素。

由于CSS中的伪类选择器的数据过于庞大，我们会在以后拿出专项来讲解具体的用法。

## 总结

![](image/99_%E6%80%BB%E7%BB%93.png)

