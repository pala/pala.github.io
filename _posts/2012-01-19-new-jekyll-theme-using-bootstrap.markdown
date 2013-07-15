--- 
layout: post
title: 用Bootstrap设计blog界面
date: 2012-01-19
categories:
    - 电脑
tags:
    - Jekyll
    - Blog
    - Bootstrap
    - 设计
---
[Bootstrap](http://twitter.github.com/bootstrap/)是[Twitter](https://twitter.com)设计并开源的用于开发网页与网络程序的工具套件。用它可以方便快捷地设计各种很漂亮的网页元素，比如字体，表单，按钮导航等。

因为多数[Jekyll](http://jekyllrb.com/)用户都是先fork别人的一套主题，然后根据自己需要再修改。但如果不懂CSS的话，比如我，这个工作是相当头疼和漫长的。这时，强大的Bootstrap就成了Jekyll在界面设计上非常完美的补充。

Jekyll本身的理念是快速方便的用自己喜欢的编辑器发布内容，用Git管理整个站点。Bootstrap则用类似的理念在界面设计上对网站建设提供了强大的支持，把上面说到的修改主题的头疼工作简化到不可思议的程度。

Bootstrap用起来超级简单，只需要在你的网页里包含如下一句：

```html
<link rel="stylesheet" href="http://twitter.github.com/bootstrap/assets/css/bootstrap.min.css">
```

然后在HTML元素里加上合适的class名字就可以了，比如下面各种标签：

<span class="label">Default</span> <span class="label label-success">Success</span> <span class="label label-warning">Warning</span> <span class="label label-important">Important</span> <span class="label label-info">Info</span>

另外Bootstrap支持[LESS](http://lesscss.org/)，一种CSS预处理工具，可以把上面已经很简单的工作再简化。

比如在less文件里有如下定义：

```css
@blue:              #049CDB;
@green:             #46a546;
@red:               #dc322f;
@yellow:            #ffc40d;
@linkColor:         @blue
@linkColorHover:    darken(@linkColor, 15);
```

我想就算完全不懂CSS也能很容易的理解和修改。(个人理解LESS就像是CSS的CSS，不知道对不对)

Bootstrap里给了三个挺漂亮的实例，你可以直接拿来用，尤其是[这个](http://twitter.github.com/bootstrap/examples/container-app.html)固定宽度并居中的页面，风格上和twitter主页一样，顶部有个黑色导航条。

![](https://lh3.googleusercontent.com/-QO0oNYoziVA/TxjKcvnQvfI/AAAAAAABixY/sTK3w74GnfU/s800/Screen%252520Shot%2525202012-01-19%252520at%2525208.58.15%252520PM.png)

Jekyll和Bootstrap给了用户很大的自由去定义自己的内容，不喜欢黑色导航条？没关系，几秒钟变本站现在用的红色，只要把导航条改成 `nav pills` 类，然后把上面less文件里的 `@linkColor` 从 `@blue` 改成 `@red`即可。

除了HTML样式上的定制，Bootstrap还提供了十几种jQuery插件，比如下拉菜单，见本文右下角的分享，比如合拢与展开列表，见本站的存档，等等等等。

<span class="label label-info">Notice</span> 目前Bootstrap的开发已经到了2.0版，但它的master branch和主页里仍旧是1.4.0版，如果你想试用2.0版，请看它的[2.0-wip](https://github.com/twitter/bootstrap/tree/2.0-wip)这个分支。