--- 
layout: post
title: 新Jekyll主题
date: 2012-02-02 03:11:32
categories:
    - 电脑
tags:
    - Jekyll
    - Bootstrap
---
今天[Bootstrap 2.0](http://twitter.github.com/bootstrap/)发布，所以也应景<del>做</del>临摹了个新Jekyll主题。修改自Bootstrap给的示例[Fluid layout](http://twitter.github.com/bootstrap/examples/fluid.html)。

主页只展示文章列表：

![](http://pic.ztpala.com/wp-content/uploads/2012/02/pala-blue.png)

Responsive Design，在小屏幕上访问时，侧边栏会跑到页面顶部：

![](http://pic.ztpala.com/wp-content/uploads/2012/02/pala-blue-responsive.png)

源代码在[GitHub](https://github.com/pala/pala.github.com)

切换主题可以用Jekyll Bootstrap的[脚本](http://jekyllbootstrap.com/usage/jekyll-theming.html)，或者手动修改 `_layouts` 里的文件，及 `index.html` (可选，仅影响主页的文章显示方式)。

>发现这个blog的代码最近四个礼拜在GitHub上被克隆了[101次](https://github.com/pala/pala.github.com/graphs/clones)，这个数据可靠吗？