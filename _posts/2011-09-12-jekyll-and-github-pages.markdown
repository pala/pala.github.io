---
layout: post
title: "Jekyll and GitHub Pages"
date: 2011-09-12 23:07
comments: true
categories:
  - Blog
  - Jekyll
---

现在这个blog由[Jekyll](https://github.com/mojombo/jekyll)生成。Jekyll最大的好处是无需数据库，所有页面均为静态，所以你将所有源代码文件保存在dropbox上或者push到github上，然后将生成的静态html再deploy到服务器。

如果你是github的用户，那么可以在pages.github.com上创建自己的页面。Github Pages支持Jekyll，如果你创建了一个repo名字是yourusername.github.com并且将Jekyll的代码发布上去，那么github会自动在yourusername.github(不支持插件).com这个地址通过Jekyll为你自动生成一个站点。

> Real World Example: github.com/pages/pages.github.com → http://pages.github.com/.

同时这个站点也支持自己绑定的域名，详情请参阅[GitHub Pages 页面](http://pages.github.com).

Pros:
无需数据库，php，纯静态，便于用git管理

Cons:
某些地方稍微复杂，比如文章编写，没有wordpress的富文本编辑器，但用vim+markdown还是能快速的写完一篇日志的。

目前还只有最近几篇文章，老文章以后再说，虽然已经有人写出了很好的wordpress文章导出转换工具。

Update:

目前GitHub Pages还不支持Jekyll插件，如果你的站点需要插件，则必须只能push生成好的站点文件，也就是_site/里的文件到yourname.github.com，而Jekyll则需另建一个新的repo来管理。
