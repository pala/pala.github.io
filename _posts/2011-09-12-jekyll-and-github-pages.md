---
date: 2011-09-12
title: Jekyll介绍
layout: post
tags:
    - Blog
    - Jekyll
    - GitHub
---
现在这个blog托管在GitHub上，由[Jekyll]生成。

## 优势

Jekyll可以将你用Markdown写成的文章快速的生成一个blog站点。相比传统的blog平台，如WordPress，这种方式有很多好处：

### 简单
无需数据库，无需复杂的安装，升级，你要做的仅仅是blog最重要的事：**写文章**。

对主机完全没要求，不需要数据库，不需要PHP，不需要任何配置。如果你自己没主机，可以用[GitHub Pages]托管，可以绑定自己的域名，免费。
### 静态==快速
你的文章就是一个个Markdown文件（或者是Textile），你可以把它放在任何地方，比如Dropbox。最后由Jekyll为你生成整个静态的blog站点。站点访问速度相比较其他平台快速很多。
### 完整待用的blog系统
定制永久链接，文章分类，标签，自定义模板，统统包含。
### 超高的可定制性
如果你懂一点点的HTML，CSS，那么可以轻松打造自己独一无二的站点。
### 管理
因为生成blog的所有文件都在自己电脑上，所以管理起来也是很方便，比如本地搜索文章。

## 使用流程
以下步骤让你几秒钟就能在本地搭起来一个Jekyll blog

{% highlight sh %}
~ $ gem install jekyll
~ $ jekyll new my-awesome-site
~ $ cd my-awesome-site
~/my-awesome-site $ jekyll serve
# => Now browse to http://localhost:4000
{% endhighlight %}

想托管到[GitHub Pages]试试？参考[这篇文章]({% post_url 2012-01-12-zero-to-hosted-jekyll-blog-in-3-minutes %})。

## 特点

因为生成的blog全为静态页面，所以和WordPress等blog系统相比有以下几点不同：

1. 不支持原生评论系统，你可以选择[Disqus](http://disqus.com)作为评论系统。

2. 写新文章时可以随便找个编辑器，Vim，textedit什么的都可以。因为文章格式是Markdown，不会像其他编辑器一样产生乱七八糟的html。以后搬家备份也会方便很多。

3. 可以用git来管理整个blog的进化历程。如果你托管在GitHub上，那么可以看到自己的[更新习惯](https://github.com/pala/pala.github.com/graphs/punch-card)。

## 搬家

官网上给了从WordPress，Drupal，Blogger，Posterous，Tumblr等网站的[搬家方法](http://jekyllrb.com/docs/migrations/)。

## 历史

至于Jekyll是怎么发展起来的，可以参考它的作者Tom Preston-Werner（同时也是github的Cofounder）的文章：[Blogging Like a Hacker](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html)

[Jekyll]: http://jekyllrb.com/
[GitHub Pages]: http://pages.github.com/
