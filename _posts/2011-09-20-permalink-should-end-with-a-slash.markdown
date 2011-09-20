--- 
layout: post
title: 无文件扩展名的网址结尾应该加上/
date: 2011-09-20
published: true
comments: true
categories:
  - Jekyll
  - Blog
  - Disqus
---
如果网站的永久链接的形式是"ztnote.com/apost"而不是"ztnote.com/apost.html，那么最好在前者的最后加上/。不太清楚这个/到底有多少影响（网上有不少文章介绍），但如果不加，那么Disqus的评论数量脚本则不能正常工作。

Disqus用来显示评论数量的方法是在合适地方加上以下代码：

{% highlight html %}
<a href="http://example.com/article.html#disqus_thread">Second article</a>
{% endhighlight %}

但如果网址结尾没有.html的话，那么需要在permalink里加上/，否则评论数永远显示0。

Jekyll可以在_config里设置：

{% highlight yaml %}
permalink: /:year/:month/:day/:title/
{% endhighlight %}

