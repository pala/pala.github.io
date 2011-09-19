--- 
categories: WordPressBackup
date: 2011-06-16 02:02:33 -04:00
layout: post
title: 自定义WordPress的文章浏览顺序
---
将WordPress升级到3.2-RC1，发现在后台可以按照评论数排列文章了。顺便介绍一下怎么在浏览WordPress站点时按照特定的顺序来阅读，做法很简单：在blog链接后面加上若干参数，比如
<ul>
	<li>域名+?order=asc 升序排列，即从最老的日志开始浏览。</li>
	<li>域名+?orderby=comment_count 按照评论数量降序排列，即评论数最多的在最前面。</li>
	<li>域名+?orderby=title&amp;order=asc 则按照标题排列并遵循字符顺序，排在最前面的一般都是以数字或标点开头的文章。</li>
	<li>域名+/tag/***/ + 以上参数便可以浏览某个特定Tag的文章。</li>
	<li>可以尝试其他各种参数</li>
</ul>
<div>主要就这几种，互相结合一下就可以有很多浏览方式。想去某人blog考古的可以用它来试试。</div>
<div>另外很喜欢马上就要正式版的3.2，比如这个新的默认主题TwentyEleven，比如新设计的超酷全屏编辑模式。</div>
<div>如果你想直接升级的话，可以安装此<a title="WordPress Beta Tester" href="http://wordpress.org/extend/plugins/wordpress-beta-tester/">Beta Tester插件</a>来允许WordPress自动升级到非正式版本。</div>
