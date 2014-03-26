---
layout: post
title: 用Dropbox选择性同步Jekyll
tags:
  - Jekyll
  - Dropbox
  - Tips
---
如果你用[Dropbox](http://db.tt/H7ei7k2)存放和同步[Jekyll]({% post_url 2011-09-12-jekyll-and-github-pages %})的代码和文章，那么最好进行一些设置防止运行Jekyll时Dropbox大量更新而~~烧毁~~烧热你的电脑。

Dropbox的 **Selective Sync** 可以让你选择性的同步某些文件夹：

`Preferences` - `Advanced` - `Selective Sync` - `Change Settings`

Jekyll用 `_site` 这个文件夹来存放生成好的静态文件，这也是为什么 `.gitignore` 里会默认加入它。

所以最好也在上述的Dropbox选择性同步里将这个文件夹排除，以防止每次build网站时都同步大量的新文件，这天已经够热的了:

>RealFeel 40°，我去 [#天气](https://twitter.com/search?q=%23%E5%A4%A9%E6%B0%94&amp;src=hash) <small>[@ztpala](https://twitter.com/ztpala/statuses/357578857265643520) 3:13 PM - 17 Jul 2013</small>

[Dropbox Beta版下载](https://forums.dropbox.com/?tag=beta)
