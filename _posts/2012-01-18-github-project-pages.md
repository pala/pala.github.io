---
layout: post
title: GitHub Project Pages
tags:
    - GitHub
    - Git
---
[GitHub Pages](http://pages.github.com/)除了支持[建立个人页面](http://ztpala.com/2011/09/12/jekyll-and-github-pages/)外，还可以建立项目页面。

比如你在GitHub建了个项目叫作 `wiki` ，那么只需在这个项目下新建一个**root branch**叫作 `gh-pages` ，那么push到这个branch里的内容都会发布到http://你的用户名.github.com/wiki。现成的例子如[http://twitter.github.com/bootstrap/](http://twitter.github.com/bootstrap/)。

在每个项目的Admin页面里都有一个选项叫做 `GitHub Pages` ，勾选此选项则会自动为你生成上述的branch。

具体操作可以参阅[GitHub Pages主页](http://pages.github.com/)。当然，这个项目页面也和个人主页一样支持自定义域名，只需建立一个名为 `CNAME` 的文件并包含所映射的域名，然后修改DNS设置就可以了。所以理论上你可以绑定任意数量的域名到GitHub。绑定域名后 http://你的用户名.github.com/projectname 和 你绑定的域名都能访问这个站点。
