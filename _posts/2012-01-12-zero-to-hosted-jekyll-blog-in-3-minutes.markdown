--- 
layout: post
title: 3分钟建立一个Jekyll Blog
date: 2012-01-12
categories:
    - 电脑
tags:
    - Blog
    - Jekyll
    - git
---

如果你正考虑用[Jekyll](https://github.com/mojombo/jekyll)作为Blog系统，那么可以参考一下[Jekyll-Bootstrap](http://jekyllbootstrap.com/)，上面有从入门到精通的教程。如果你想快速的建一个站看看，那么下面几步可以让你在三分钟里建立一个运行在github上的blog，前提是你已经有了[github](https://github.com/)账号和[配置好了git](http://help.github.com/mac-set-up-git/)。

<form class='alert-message block-message warn' action='#' id='generate_code'>你的github用户名：<input id='github_username' type='text' /> <button class='btn success'>显示建站过程</button>
</form>

###一. 建立一个新的github repository

名字为<strong id='repo_name'>USERNAME.github.com</storng>

<h3 id="2__install_jekyllbootstrapcore">二. 安装Jekyll-Bootstrap-Core</h3>
<pre>
$ git clone https://github.com/plusjade/jekyll-bootstrap.git USERNAME.github.com
$ cd USERNAME.github.com
$ git remote set-url origin git@github.com:USERNAME/USERNAME.github.com.git
$ git push origin master
</pre>
###三. 额，没有三了

等一会去访问一下<a href='http://USERNAME.github.com' id='blog_link'>http://USERNAME.github.com</a>，github已经为你生成了一个站点。

