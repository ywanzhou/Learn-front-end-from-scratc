# 什么是JavaScript

## 写在前面

> Hello 大家好，我是[彼岸繁華🌸](https://juejin.cn/user/3350967174838701/posts)，一个想进大厂的大三学生，为了有一个完整的前端知识体系，现在我们从头开始学习、梳理、总结。


> 本系列文章在掘金首发，编写不易转载请获得允许


## JavaScript语言的简介

JavaScript首先是一门编程语言，这门语言是一门弱类型、基于原型的直译式脚本语言，运行于JavaScript解释器/引擎，所谓的**脚本语言** （*script language* ），指的是它**不具备开发操作系统的能力** ，而是**只用来编写控制其他大型应用程序** （比如浏览器）的“脚本”。

JavaScript解释器/引擎最早是浏览器核心的一部分，广泛地被用来支持客户端的脚本语言（*不仅包含 JavaScript 语言* ），最早是支持HTML页面的运行。

JavaScript语言本身提供的核心语法并不算多，只能用来做一些数学和逻辑运算。一些复杂的操作，例如 I/O（输入/输出），JavaScript并不提供相关的API，都是由宿主环境去提供。常见的宿主环境有如下两种：

- 服务端环境，也就是Node环境

- 浏览器环境

JavaScript的核心语法比较单一，仅仅包含两个部分，分别是：基础语法（比如运算符、语句和数据类型）和标准库（所谓的标准库就是具有各种功能的对象比如`Array`、`Date`、`Math`等）。其他的操作全部需要依赖宿主管径额外提供的API，以便JavaScript使用。

## JavaScript的前世今生

JavaScript诞生于1995年，其主要的作用是用来替代之前由服务器端语言（*如Java语言等* ）负责的一些输入验证等操作。但JavaScript的发展历史远不止于此，如下所示：

- 1992 年，Nombas公司为自己的CEnvi软件开发了一款脚本语言ScriptEase，可以嵌入在网页中。

- 1995 年， Netscape公司为自己的Navigator2.0浏览器开发了另一种客户端脚本语言Livescript，后来因为Netscape公司与SUN公司合作，NetScape公司的管理层希望该语言看起来像Java语言，因此后改名为JavaScript。

- 1996 年，Microsoft公司为了取得技术上的优势，在IE3 中加入了JScript（*为避开JavaScript的版权问题* ）。

- 1997 年，JavaScript 1.1作为草案提交给ECMA（*称为 European Computer Manufacturers Association，译为欧洲计算机制造商协会* ），完成了 ECMA-262 —— 定义了名为ECMAScript的脚本语言标准。

- 1998年6月，ECMAScript 2.0版发布。

- 1999年12月，ECMAScript 3.0版发布，成为 JavaScript 的通行标准，得到了广泛支持。

- 2009年12月，ECMAScript 5.0版发布。

- 2011年6月，ECMAScript 5.1版发布，并且成为ISO国际标准（ISO/IEC 16262:2011）。到了2012年底，所有主要浏览器都支持ECMAScript 5.1版的全部功能。

- 2015年6月，ECMAScript 6正式发布，并且更名为“ECMAScript 2015”。从这以后计划以后每年发布一个ECMAScript的版本，下一个版本在2016年发布，称为“ECMAScript 2016”，2017年发布“ECMAScript 2017”，以此类推。

## JavaScript的组成部分

虽然大部分经常把 JavaScript 和 ECMAScript 划为同一个概念，但实际上 JavaScript 语言所包含的内容要比 ECMAScript 多得多。这是因为JavaScript是ECMAScript的一种实现。完整的JavaScript语言（浏览器）其实是由三个部分组成的，如下所示：

- ECMAScript：JavaScript语言的核心，是ECMA-262标准化的脚本语言的名称。

- DOM：全称为Document Object Model，译为**文档对象模型** ，是用来W3C组织制定的标准接口规范。

- BOM：全称为Browser Object Model，译为**浏览器对象模型** ，提供了一系列对象可以与浏览器窗口进行交互。

### ECMAScript

ECMAScript是一种语言规范，其内容内容包含了语法、类型、语句、关键字和操作符等内容。

### 文档对象模型（DOM）

**DOM** 是一个简写，其全称为Document Object Model，译为**文档对象模型** ，是针对XML但经过扩展用于HTML的应用程序编程接口。

DOM会把整个HTML页面映射为一个多层的节点结构，HTML页面中的每一个组成部分都是这个节点结构中的某种类型的节点。

如下示例代码展示了简单的 HTML 页面源代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM示例</title>
</head>

<body>
  <h1>这是一个页面示例</h1>
</body>

</html>
```


> 上面的代码结构由VScode自动生成



DOM映射上述HTML页面为一个节点结构如下所示：

![](image/%E6%96%87%E6%A1%A3%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B%EF%BC%88DOM%EF%BC%89.png)

### 浏览器对象模型（BOM）

**BOM** 同样是一个简写，全称为Browser Object Model，译为**浏览器对象模型** ，是允许开发人员访问和修改浏览器窗口的对象集合。

BOM提供了一系列与浏览器窗口进行互动的对象，如下所示：

- window对象：代表浏览器窗口，可以修改浏览器窗口显示的大小等功能。

- navigator对象：该对象提供了当前浏览器的详细信息，包含了浏览器名称、浏览器版本、当前操作系统信息等。

- screen对象：代表当前显示器，提供了用户显示器分辨率等信息。

## JavaScript的应用

JavaScript语言最初的作用是运行在浏览器中，完成浏览器窗口中输入验证的一些操作。但JavaScript发展到目前为止，已经远不止于此。JavaScript的应用主要如下：

- 运行在客户端，这里的客户端主要指Web浏览器。

- 运行在服务端，这里的服务端主要指Node环境。

- 物联网，可以通过国产厂商推出的`Ruff.js`来实现。

- 人工智能，可以通过Google公司提供的TensorFlow开发框架。

- 各种小程序，现在很火的各种客户端的小程序就是通过JavaScript来编写用户脚本的。

- 数据库操作，自从有了NoSQL数据库这个概念之后，大部分 NoSQL 数据库允许 JavaScript 直接操作。

## JavaScript的优点

JavaScript的优点可以总结为以下几点：

- 具有操作浏览器的能力，这个也是JavaScript最主要的作用。

- 具有广泛的应用范围，正如我们前面所介绍的这样。

- 具有比较强大的性能，这是因为JavaScript语法灵活表示力更强，还有就是可以事件驱动和非阻塞式设计。

## JavaScript的运行环境

JavaScript中具有两种比较常见的运行环境，具体如下：

- 独立的Node运行环境：也就是在运行的设备上安装一个独立的Node.js，具体安装也非常的简单具体如下：

&ensp;&ensp;&ensp;&ensp;1. 打开浏览器，在地址栏中输入 [https://nodejs.org/en/](https://nodejs.org/en/)，访问Node.js的官网网站。

&ensp;&ensp;&ensp;&ensp;2. 选择一个适合的版本

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;- LTS版本：这个版本是Node.js长期支持版本。建议使用这个版本！

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;- Current版本：这个版本是 Node.js 目前的最新版本。

&ensp;&ensp;&ensp;&ensp;3. 下载之后一直点击下一步安装即可完成。

&ensp;&ensp;&ensp;&ensp;4. 最后打开命令行/终端工具输入`node -v`命名，来验证是否安装成功。如果安装成功会打印`node.js`的版本号。

&ensp;&ensp;&ensp;&ensp;5. 使用的话直接`node JavaScript脚本的路径`命令即可。

- 各个浏览器集成的环境，其实现在主流浏览器都已经支持了JavaScript运行环境，这里推荐使用Chromium内核的浏览器，例如最新版的Edge浏览器和Chrome浏览器。浏览器中运行JavaScript脚本的位置处于【开发者工具】→【控制台】

&ensp;&ensp;&ensp;&ensp;进入【控制台】的常用途径如下：

&ensp;&ensp;&ensp;&ensp;- 直接进入：按下`Ctrl + Shift + J`

&ensp;&ensp;&ensp;&ensp;- 开发者工具进入：开发者工具的快捷键是 F12，或者`Ctrl + Shift + I`，然后选择 Console 面板

现在我们就可以来运行下面这段代码：

```JavaScript
function sayMe (name) {
  console.log('Hello ' + name);
}

sayMe('彼岸繁華')
```


## 总结

通过本节我们主要学习了如下内容：

- JavaScript是一个弱类型的编程语言，以及JavaScript和ECMAScript的区别和历史。

- JavaScript的组合部分。

- JavaScript优点应用以及运行环境。

下篇我们将来学习JavaScript的语法结构


