---
layout: post
title: 用Dropbox選擇性同步Jekyll
tags:
  - Jekyll
  - Dropbox
  - Tips
---
如果你用[Dropbox](http://db.tt/H7ei7k2)存放和同步[Jekyll]({% post_url 2011-09-12-jekyll-and-github-pages %})的代碼和文章，那麼最好進行一些設置防止運行Jekyll時Dropbox大量更新而~~燒毀~~燒熱你的電腦。

Dropbox的 **Selective Sync** 可以讓你選擇性的同步某些文件夾：

`Preferences` - `Advanced` - `Selective Sync` - `Change Settings`

Jekyll用 `_site` 這個文件夾來存放生成好的靜態文件，這也是為什麼 `.gitignore` 里會默認加入它。

所以最好也在上述的Dropbox選擇性同步里將這個文件夾排除，以防止每次build網站時都同步大量的新文件，這天已經夠熱的了:

>RealFeel 40°，我去 [#天氣](https://twitter.com/search?q=%23%E5%A4%A9%E6%B0%94&amp;src=hash) <small>[@ztpala](https://twitter.com/ztpala/statuses/357578857265643520) 3:13 PM - 17 Jul 2013</small>

[Dropbox Beta版下載](https://forums.dropbox.com/?tag=beta)
