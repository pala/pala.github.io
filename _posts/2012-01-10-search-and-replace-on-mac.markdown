--- 
layout: post
title: Search and Replace on Mac
date: 2012-01-10
categories:
    - 电脑
tags:
    - OSX
---
在命令行可以方便的查找并替换一个字符串，命令如下

<code>find ./ -type f -exec sed -i "" 's/oldsite.com\/old/newsite.com\/new/' {} \;</code>

网址里的斜杠需要转义。

另外似乎Linux下不需要那个引号，但是Mac如果不加则会出现以下错误：

<code>sed invalid command code .</code>
