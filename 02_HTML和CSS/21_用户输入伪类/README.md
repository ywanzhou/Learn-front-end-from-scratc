# 在表单中常用的伪类选择器

本篇文件介绍关于表单输入的伪类，主要介绍三种常用的，具体如下：

- `:enabled`和`:disabled`

- `:read-only`和`:read-write`

- `:checked`

## :enabled和:disabled

`:enabled`和`:disabled`一这组伪类选择器分别表示禁用状态与可用状态，这组为了使完全对立的。

`:enabled`伪类的实际用处并不大，因为大多元素默认都是可用的，所以写不写意义并不大。

如下代码展示了`:enabled`和`:disabled`的用法：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>:enabled和:disabled的用法</title>
  <style>
    input:enabled {
      outline: none;
    }

    input:disabled {
      /* 禁用状态背景为灰色 */
      background-color: gray;
    }
  </style>
</head>

<body>
  <input type="text"
         placeholder="可用状态">
  <input type="text"
         disabled
         placeholder="禁用状态">
</body>

</html>
```


代码运行结果如下所示：

![](image/01_enabled%E5%92%8Cdisabled%E7%9A%84%E7%94%A8%E6%B3%95.png)

由上图我们看到禁用状态的`<input>`的背景颜色为灰色。

## :read-only和:read-write

`:read-only`和`:read-write`一这组伪类选择器分别表示只读和可写状态，同样的`:read-write`也很鸡肋，因为默认就是可读写，示例代码如下所示：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>:read-only和:read-write</title>
  <style>
    input:read-write {
      outline: none;
    }

    /* 只读状态 */
    input:read-only {
      color: red;
      outline: none;
    }
  </style>
</head>

<body>
  <input type="text"
         value="读写状态">
  <input type="text"
         readonly
         value="只读状态">
</body>

</html>
```


代码运行结果如下所示：

![](image/02_read-only%E5%92%8Cread-write%E4%BC%AA%E7%B1%BB.png)

我们可以看到，只读的`<input>`的文字颜色为红色。

## :checked

`:checked`伪类可以说是众多伪类选择器中使用频率很高的一个伪类选择器，该选择器表示选中的状态，就比如下面这个例子：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible"
        content="IE=edge">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>checked伪类</title>
  <style>
    input:checked {
      /* 为选中的增加阴影 */
      box-shadow: 2px 2px 2px 2px lightcoral;
    }
  </style>
</head>

<body>
  <input type="checkbox">
  <input type="checkbox"
         checked>
</body>

</html>
```


![](image/03_checked%E4%BC%AA%E7%B1%BB.png)

关于`:checked`伪类，最佳实践是配合`<label>`元素来实现，现在我们就通过`:checked`和`<label>`元素来实现一个开关的效果。

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
  <title>开关</title>
  <style>
    [type="checkbox"] {
      width: 44px;
      height: 26px;
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }

    /* 开关样式 */
    .cs-switch {
      display: inline-block;
      width: 44px;
      height: 26px;
      border: 2px solid;
      border-radius: 26px;
      background-color: currentColor;
      box-sizing: border-box;
      color: silver;
      transition: all .2s;
      cursor: pointer;
    }

    .cs-switch::before {
      content: "";
      display: block;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: #fff;
      transition: margin-left .2s;
    }


    :checked+.cs-switch {
      color: blueviolet;
    }

    /* 选中移动 */
    :checked+.cs-switch::before {
      margin-left: 18px;
    }

    /* 禁用状态 */
    :disabled+.cs-switch {
      opacity: .4;
      cursor: not-allowed;
    }
  </style>
</head>

<body>
  <!-- 普通状态 -->
  <input type="checkbox"
         id="switch">
  <label class="cs-switch"
         for="switch"></label>
  <!-- 选中状态 -->
  <input type="checkbox"
         id="switch1"
         checked>
  <label class="cs-switch"
         for="switch1"></label>
  <!-- 禁用状态 -->
  <input type="checkbox"
         id="switch2"
         disabled>
  <label class="cs-switch"
         for="switch2"></label>
  <!-- 选中禁用状态 -->
  <input type="checkbox"
         id="switch3"
         checked
         disabled>
  <label class="cs-switch"
         for="switch3"></label>
</body>

</html>
```


运行效果如下所示：

![](image/04_%E5%BC%80%E5%85%B3.png)

{完}

