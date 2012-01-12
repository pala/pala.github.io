--- 
layout: post
title: 3分钟建立一个Jekyll Blog
date: 2012-01-12
categories:
    - 电脑
tags:
    - Jekyll
    - git
---

如果你正考虑用[Jekyll](https://github.com/mojombo/jekyll)作为Blog系统，那么可以参考一下[Jekyll-Bootstrap](http://jekyllbootstrap.com/)，上面有从入门到精通的教程。如果你想快速的建一个站看看，那么下面几步可以让你在三分钟里建立一个运行在github上的blog，前提是你已经有了[github](https://github.com/)账号和[配置好了git](http://help.github.com/mac-set-up-git/)。

###一. 建立一个新的repository
名字为**你的用户名.github.com**
###二. 安装Jekyll-Bootstrap-Core
<pre>
$ git clone https://github.com/plusjade/jekyll-bootstrap.git 你的用户名.github.com
$ cd 你的用户名.github.com
$ git remote set-url origin git@github.com:你的用户名/你的用户名.github.com.git
$ git push origin master
</pre>
###三. 额，没有三了
等一会去访问一下**http://你的用户名.github.com**，github已经为你生成了一个站点。
