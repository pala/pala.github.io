--- 
layout: post
title: Git Submodule
date: 2012-01-20
categories:
    - 电脑
tags:
    - Git
    - GitHub
---
现在用git管理的project里经常会用到其他同样用git管理的project，那么怎么在一个项目里管理两者呢。这就需要用到git submodule。

简单来说submodule就像其名字一样，把一个git project作为一个模块加入到另一个里面。这里假设我有一个project叫作pala，它要用到另外一个托管在github的project叫作subpala，那么我可以在pala的根目录下运行：

`git submodule add git://github.com/pala/subpala.git subpala`

接着查看git的状态：

<pre class="prettyprint linenums">
$ git status
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#      new file:   .gitmodules
#      new file:   subpala
</pre>

这时subpala已经被clone到pala的目录下。目录名为subpala。

`.gitmodules` 文件里存储这所有submodule的信息：

<pre class="prettyprint linenums">
$ cat .gitmodules 
[submodule "subpala"]
      path = subpala
      url = git://github.com/pala/subpala.git
</pre>

虽然subpala是pala的子目录，但pala的git并不会去追踪subpala里具体文件的情况而只会记录subpala这个项目的commit。如果你去pala的github页面看，subpala作为一个超链接链接到自己的github页面。

如果要submodule使用特定的branch，需要到submodule的目录运行：

`git checkout -b aBranch origin/aBranch`

这样，你就可以在subpala里用git单独管理，虽然它是另一个git项目的子目录。

[Pro Git的详细教程](http://progit.org/book/ch6-6.html)