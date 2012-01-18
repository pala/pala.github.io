--- 
layout: post
title: Jekyll的代码高亮
date: 2011-10-27
published: true
comments: true
tags:
    - Jekyll
    - Blog
categories:
    - 电脑
---
Jekyll对在文章里高亮代码有着非常好的支持。

##小片段

比如某个参数设置等，可以直接用markdown自己的格式，即在需要标记为`<code>`的地方缩进一个tab，那么在生成html时便会自动加上`<pre><code>`标记。如果是在一句话中标记Code，像上句这样，则只需要用反引号(`)包含相关文字就可以了

##语言相关
	
Jekyll通过[Pygments](http://pygments.org/)支持超过[百种语言](http://pygments.org/languages/)的代码高亮，标记非常简单，基本就是highlight+语言名称[这种格式](https://github.com/mojombo/jekyll/wiki/Liquid-Extensions/)，至于CSS的写法可以参考[这里](https://github.com/mojombo/tpw/blob/master/css/syntax.css)

##gist嵌入

不用插件的话可以直接用官方gist嵌入方法，如果用[这个插件](https://gist.github.com/1027674)的话则仅需要写上gist+gist id即可，更加方便。

##CSS

另外推荐twitter的开源项目[Bootstrap](http://twitter.github.com/bootstrap/)，利用它外加[Prettyprint](http://code.google.com/p/google-code-prettify/)可以方便快速的显示高亮代码。本站就是采用这个方案。
