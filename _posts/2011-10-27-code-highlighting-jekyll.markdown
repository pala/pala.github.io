--- 
layout: post
title: Jekyll的代码高亮
date: 2011-10-27
published: true
comments: true
categories:
  - Jekyll
  - Blog
---
Jekyll对在文章里高亮代码有着非常好的支持。

1. 语言无关的小片段

	比如上篇文章写的Xcode的某个参数设置等，可以直接用markdown自己的格式，即在需要标记为code的地方缩进一个tab，那么在生成html时便会自动加上code标记。

2. 语言相关
	
	Jekyll通过[Pygments](http://pygments.org/)支持超过[百种语言](http://pygments.org/languages/)的代码高亮，标记非常简单，基本就是highlight+语言名称[这种格式](https://github.com/mojombo/jekyll/wiki/Liquid-Extensions/)，至于CSS的写法可以参考[这里](https://github.com/mojombo/tpw/blob/master/css/syntax.css)

3. gist嵌入

	不用插件的话可以直接用官方gist嵌入方法，如果用[这个插件](https://gist.github.com/1027674)的话则仅需要写上gist+gist id即可，更加方便。

	


