---
date: 2011-09-12
title: Jekyll 和 GitHub Pages
layout: post
tags:
    - Blog
    - Jekyll
    - GitHub
categories:
    - 电脑
---
##简介

现在这个blog托管在github上，由[Jekyll](https://github.com/mojombo/jekyll)生成。Jekyll最大的好处是快，无需数据库，所有页面均为静态。工作流程如下：

1. 本地安装[Jekyll](https://github.com/mojombo/jekyll)，然后在硬盘上生成blog站点。比如放在[Dropbox](http://db.tt/H7ei7k2)里，双重保险。

2. 在[GitHub Pages](http://pages.github.com)上创建自己的页面，然后将步骤1里创建的站点上传到这个页面对应的仓库。那么每次你在本地修改了blog的源文件，包括写了新文章，或者修改了某个页面，只要用<code>git push</code>到github，那么你的blog会跟着自动更新。非常方便。也就是说，完全可以只用终端来操作这个blog。当然，如果你不喜欢*.github.com这样的域名的话，也可以绑定自己的。只需要在你的blog文件夹添加一个写着你的域名的名为CNAME的文件，然后再修改域名的DNS设置就可以了。

##尝试

如果你已经有了github账号，可以[3分钟建立一个Jekyll Blog](http://ztpala.com/2012/01/12/zero-to-hosted-jekyll-blog-in-3-minutes/)。

##特点

因为生成的blog全为静态页面，所以和WordPress等blog系统相比有以下几点不同：

1. 不支持原生评论系统，你可以选择[Disqus](http://disqus.com)作为评论系统。

2. 对服务器没有数据库和PHP上的要求。虽然使用[Jekyll](https://github.com/mojombo/jekyll)需要Ruby、git等，但生成的blog文件则全是html，你可以把它打包上传到你自己的服务器。甚至你想只在自己电脑上看看，那么运行一下<code>jekyll --server</code>，然后在浏览器上访问http://localhost:4000就可以了。

3. 速度快。维护方便。

4. 写新文章时可以随便找个编辑器，Vim，textedit什么的都可以，模版语言是Markdown，简单清爽。

5. 可以用git来管理整个blog的进化历程。

##搬家

Jekyll的[Wiki](https://github.com/mojombo/jekyll/wiki/blog-migrations)上给了从WordPress，Drupal，Blogger，Posterous，Tumblr等网站的搬家方法，另外在github上也有很多网友自己写的搬家工具。

##参考
Jekyll完全是开源的，托管到GitHub Pages上的站点也完全是开源的，[这里](https://github.com/mojombo/jekyll/wiki/Sites)有个不完全站点列表，基本上都可以看到源代码。

[octopress](https://github.com/imathis/octopress)是Jekyll的改进版，加入了很多更加高级的功能及更漂亮的模版文件。你可以去它的[官网](http://octopress.org/docs/)看看效果。

##历史

至于Jekyll是怎么发展起来的，可以参考它的作者Tom Preston-Werner（同时也是github的Cofounder）的文章：[Blogging Like a Hacker](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html)
