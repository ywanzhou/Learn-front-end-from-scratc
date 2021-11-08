# 表单

本篇文章将来介绍HTML中原生表单的内容，本篇文章的内容大纲如下：

## 写在前面

HTML表单主要作用你是用于收集不同类型的用户输入并与服务端进行交互。

HTML表单是由一个或多个小部件组成的。这些小部件可以是文本字段(单行或多行)、选择框、按钮、复选框或单选按钮。大多数情况下，这些小部件与描述其目的的标签配对——正确实现的标签能够清楚地指示视力正常的用户和盲人用户输入表单输入的内容。

HTML表单和常规HTML文档的主要区别在于，大多数情况下，表单收集的数据被发送到web服务器。在这种情况下，您需要设置一个web服务器来接收和处理数据。

目前表单可以完成的工作包括但不限于下面这些，例如：

- 网站的用户注册和登录功能

- 搜索功能中的搜索框

- 写博客的发布功能

我们可以将表单划分为两个部分：

- `<form>`元素：表单容器的元素

- 表单组件元素：真正用来接收用户输入的信息的元素，包括但不限于`<input>`、`<textarea>`等。

## form元素

`<form>`元素定义HTML表单，HTML表单用于收集用户输入，与服务端进行通信。

该元素有几个常用的属性，具体如下：

- `action`属性：设置提交表单的服务端地址

- `method`属性：设置提交表单时的请求类型

&ensp;&ensp;&ensp;&ensp;- GET：默认方式，发送敏感信息时不可使用！GET最适合短，非敏感，一定量数据，因为它有大小限制太。

&ensp;&ensp;&ensp;&ensp;- POST：如果表单数据包含敏感或个人信息，则总是使用POST。POST方法在页地址字段中不显示提交的表单数据；POST没有大小限制，可以用来发送大量的数据。

- `enctype`属性：设置表单提交时的MIME类型.(主要可实现文件上传)

## input元素

`<input>`是一个空元素，最重要的表单元素。该元素的功能比较强大，常用属性有如下几个：

|属性|描述|
|---|---|
|`type`|设置输入框的类型|
|`value`|设置输入框的默认值|
|`disabled`|设置输入框是否可用(仅设置属性名)|
|`readonly`|设置输入框是否为只读|
|`autofocus`|设置输入框自动获取焦点|
|`placeholder`|设置输入框的默认提示信息(代替value向用户展示信息)|



`type`属性可用的值如下，每一个值都代表了一个类型的组件：

|值|描述|值|描述|
|---|---|---|---|
|`text`|单行文本框|`password`|密码框|
|`radio`|单选框|`checkbox`|复选框|
|`button`|按钮|`reset`|重置按钮|
|`submit`|提交按钮|`file`|文件域|
|`hidden`|隐藏域|`email`|电子邮件|
|`url`|URL地址|`search`|搜索框|
|`date`|日期控件|`week`|星期控件|
|`month`|月控件|`color`|颜色控件|
|`number`|数字控件| | |



如下代码展示了部分组件的使用，代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>input元素</title>
</head>

<body>
  <form method="GET"
        action="#">
    <!-- 
      disabled 属性，设置为禁用的
      readonly 属性，设置为只读
      autofocus 属性，自动获取焦点
      placeholder 属性，设置提示信息
      -->
    <input type="text"
           value="我是一段文本">
    <br>
    <!--
      单选框或者复选框要为其定义相同的name属性，表示为一组 
      checked 属性：表示当前选框默认被选中 
    -->
    <input type="radio"
           name="like"
           checked>我是单选1号
    <input type="radio"
           name="like">我是单选2号
    <input type="radio"
           name="like">我是单选3号

    <br>

    <input type="button"
           value="普通按钮">

    <br>
    <!-- 可以选择多个文件 -->
    <input type="file"
           multiple>
    <!-- 设置选择文件的类型 -->
    <input type="file"
           accept="video/*">
    <!-- 一般用来存储一些不想用户知道的数据内容, 比如用户ID -->
    <input type="hidden">

  </form>
</body>

</html>
```


运行效果如下所示：

![](image/01_input%E5%85%83%E7%B4%A0.png)

## label元素

HTML中的`<label>`元素用于表示用户界面中的某个元素的说明，一般配合`input`使用，在使用的时候需要给`<input>`一个`id`属性。而`<label>`需要一个`for`属性，其值和input的`id`一样。

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
  <title>label元素</title>
</head>


<body>
  <!-- 
    <label>元素：一般配合<input元素一起使用>
      * 作用：为某个文本框增加内容提示
      * 属性：
        * for 属性：设置的值必须与<input>元素的id值一致
    -->
  <form action="#">
    <div>
      <label for="username">用户名：</label>
      <input type="text"
             class="username"
             id="username"
             placeholder="请输入你的用户名">
    </div>
    <div>
      <label for="passwd">密码：</label>
      <input type="text"
             class="passwd"
             id="passwd"
             placeholder="请输入你的密码">
    </div>
  </form>
</body>

</html>
```


代码运行结果如下所示：

![](image/02_label%E5%85%83%E7%B4%A0.png)

## textarea元素

HTML提供的`<textarea>`元素表示一个多行纯文本编辑控件，该元素支持表单中的大部分属性，除此之外，还有两个特色属性，如下所示：

- `cols`：文本域的可视宽度。必须为正数，默认为20

- **rows** ：元素的输入文本的行数（显示的高度）

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
  <title>textarea元素</title>
</head>

<body>
  <textarea name="test"
            id="test"
            cols="30"
            rows="10"></textarea>
</body>

</html>
```


代码运行结果如下所示：

![](image/03_textarea%E5%85%83%E7%B4%A0.png)

`<textarea`元素默认是可以拖动大小的，我们可以通过`resize`属性，将其值设置为`none`来关闭调整大小。

## 下拉列表

HTML提供的`<select>`、`<option>`和`<optgroup>`元素可以实现一个下拉列表的功能，具体如下：

- `<select>`：表示一个提供选项菜单的控件

- `<option>`：表示菜单项

- `<optgroup>`：为`<select>`元素中的选项创建分组。

`<select>`元素有常用的属性如下：

- `multiple`：是否支持多选，默认单选

- `size`：设置同时可见的行数

`<option>`元素的常用属性如下：

- `selected`：默认选中的列表项

- `value`：表示该选项被选中时提交给表单的值，如果省略了这个属性，值就从选项元素的文本内容中获取

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
  <title>下拉列表</title>
</head>

<body>

  <body>
    <form action="#">
      <!-- 
        <select>元素：下拉列表
          * 默认为单选
          * 通过multiple属性来设置是否支持多选
          * 通过size属性设置同时可见的行数
            * 可以通过Ctrl和Shift键进行多选
          * <option>元素：列表项
            * disabled属性：表示不可选
            * selected属性：表示默认选择
            * value属性：表示该选项被选中时提交给表单的值，如果省略了这个属性，值就从选项元素的文本内容中获取。
          * <optgroup> 为<select> 元素中的选项创建分组。
       -->
      <select>
        <option value="xiaoming">小明</option>
        <option value="xiaobai"
                selected>小白</option>
        <option value="xiaolv">小绿</option>
        <option value="xiaohua"
                disabled>小花</option>
      </select>
      <select multiple
              size="4">
        <option value="xiaoming">小明</option>
        <option value="xiaobai"
                selected>小白</option>
        <option value="xiaolv">小绿</option>
        <option value="xiaohua"
                selected>小花</option>
      </select>
      <select>
        <optgroup>
          <option value="xiaoming">小明</option>
          <option value="xiaobai"
                  selected>小白</option>
          <option value="xiaolv">小绿</option>
          <option value="xiaohua"
                  disabled>小花</option>
        </optgroup>
        <optgroup>
          <option value="xiaoming">小明</option>
          <option value="xiaobai">小白</option>
          <option value="xiaolv">小绿</option>
          <option value="xiaohua">小花</option>
        </optgroup>
      </select>
    </form>
  </body>
</body>

</html>
```


代码运行结果如下所示：

![](image/04_%E4%B8%8B%E6%8B%89%E5%88%97%E8%A1%A8.gif)

## **fieldset>** 元素

HTML**<fieldset>** 元素用于对表单中的控制元素进行分组（也包括 label 元素）。

**<fieldset>** 元素的`disabled`属性子表单也会继承该属性。

还有就是HTML提供的 **<legend>**  元素用于表示其父元素 **<fieldset>**  的内容标题。

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
  <title>组合表单元素</title>
  <style>
    input {
      outline: none;
      border: none;
      border-bottom: 1px solid lightsalmon;
      margin: 10px 30px 10px -5px;

    }
  </style>
</head>

<body>
  <form action="#">
    <fieldset>
      <legend>这是一个输入账号和密码的表单</legend>
      <label for="username">用户名：</label>
      <input type="text"
             class="username"
             id="username"
             placeholder="请输入你的用户名">
      <label for="passwd">密码：</label>
      <input type="text"
             class="passwd"
             id="passwd"
             placeholder="请输入你的密码">
    </fieldset>
  </form>
</body>

</html>
```


代码运行结果如下所示：

![](image/05_%E7%BB%84%E5%90%88%E8%A1%A8%E5%8D%95%E5%85%83%E7%B4%A0.png)

## datalist元素

`<datalist>`元素包含一组`<option>`元素，这些元素表示其它表单控件可选值。该元素通常与`<input>`元素配合使用，需要为`<input>`元素设置一个`list`属性，并与`<datalist>`的`id`属性对应。

还有就是`<datalist>`元素是可以复用的，示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>datalist元素</title>
</head>

<body>
  <form action="#">
    <!-- 
      <input>元素与<datalist>元素配合使用
      * <input>元素设置list属性: 值与<datalist>元素的id属性值一致
      * <datalist>元素设置id属性
    -->
    <input list="list"
           placeholder="信息">
    <!-- 
      <datalist>元素:
      * 作用: 提供了一组列表项
      与<select>元素的区别:
      * <select>元素: 必须在该元素内部定义<option>元素
      * <datalist>元素: 是一个独立的列表项
        * 允许复用的
    -->
    <datalist id="list">
      <option value="一碗周"></option>
      <option value="掘金"></option>
      <option value="https://juejin.cn/user/3350967174838701"></option>
    </datalist>
  </form>
</body>

</html>
```


代码运行结果如下所示：

![](image/06_datalist%E5%85%83%E7%B4%A0.png)

## 进度条

HTML提供的`<meter>`元素用来显示已知范围的标量值或者分数值。其常用属性如下：

- `min`属性：最小界限值，默认为0

- `max`属性：最大界限值，默认为1

- `value`属性：当前的数值，如果设置了最小值和最大值，必须介于两者之间，否则的话它的值就等于它最接近的一端的值。

- `low`属性：设置刻度的最小界限值

- `high`属性：设置刻度的最大界限值

HTML中的`<progress>` 元素用来显示一项任务的完成进度.

属性：

- `max`属性：最大界限值

- `value`属性：当前的数值

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
  <title>进度条</title>
  <style>
    meter,
    progress {
      display: block;
    }
  </style>
</head>

<body>
  <form action="#">
    <meter min="0"
           max="100"
           low="40"
           high="80"
           value="30"></meter>
    <meter min="0"
           max="100"
           low="40"
           high="80"
           value="50"></meter>
    <meter min="0"
           max="100"
           low="40"
           high="80"
           value="90"></meter>

    <progress max="100"
              value="30"></progress>
    <progress max="100"
              value="50"></progress>
    <progress max="100"
              value="90"></progress>
  </form>
</body>

</html>
```


代码运行结果如下所示：

![](image/07_%E8%BF%9B%E5%BA%A6%E6%9D%A1.png)

## 表单验证

HTML5新增了一些有关表单验证的内容，具体如下：

- 提供一系列可用于验证的元素或类型, 比如`<input type="email/url">`

- 提供一系列用于验证的属性:

&ensp;&ensp;&ensp;&ensp;- `required`属性: 验证是否为空

&ensp;&ensp;&ensp;&ensp;- `pattern`属性: 验证与指定正则表达式是否一致

&ensp;&ensp;&ensp;&ensp;- `min`属性: 验证是否小于最小值

&ensp;&ensp;&ensp;&ensp;- `max`属性: 验证是否大于最大值

&ensp;&ensp;&ensp;&ensp;- `step`属性: 验证是否符合步长

&ensp;&ensp;&ensp;&ensp;- `minlength`属性: 验证内容的长度是否小于最小长度

&ensp;&ensp;&ensp;&ensp;- `maxlength`属性: 验证并限制内容的长度是否大于最大长度

&ensp;&ensp;&ensp;&ensp;值得注意的是验证是在提交表单时进行验证，一般情况下还需要与DOM(visibility对象)配合使用。


