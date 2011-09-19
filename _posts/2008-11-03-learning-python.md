--- 
categories: WordPressBackup
date: 2008-11-03 05:18:00 -05:00
layout: post
title: "学习Python 1"
---
1.Python语言
Python和其他语言如C++,Java被称为高级语言(high-level language).
把高级语言变为低级语言(low-level)有两种方法: interpreters 和 compilers.
前者是一次读取程序的一部分,然后执行.而后者则是将高级程序全部转换后执行.这里被转换后的程序杯称为object code 或者 executable.一旦程序被编译,则可以重复执行而无需再次转换.
许多现代程序语言同时使用这两种方法. 它们先被编译成低级语言(byte code),然后在被虚拟机解析(interpret).这两种方法也都被Python所使用,不过它通常被认为是解析形语言(interpreted language)
Python解析器有两种使用方法:shell模式和脚本模式.
在shell模式里,你只需输入Python语句然后解析器会立刻打印结果,如:
<span style="color:#3366ff;"><code>$python
Python 2.5 (r25:51918, Sep 19 2006, 08:49:13)
[GCC 4.0.1 (Apple Computer, Inc. build 5341)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
&gt;&gt;&gt; print 1+1
2</code></span>
至于脚本模式,就是将程序写在一个文件里,然后用解析器执行此文件.
2.错误及debugging
错误大致可以分为三种:语法错误,运行时错误,语义错误
语法错误很容易被发现,Python在你执行程序之前就会告诉你这些错误,但是在编程初期,修改语法错误仍旧会占用很多时间.
运行时错误则只有在你运行程序时才会出现,这些错误也被叫做exceptions.
第三类错误则最难寻找及修复.因为它不会影响到程序执行,但是你也不会得到希望的结果.
当这些错误交织在一起,debug就成了一项非常有挑战性的工作,有时会让人很抓狂,但是不可避免.
debug像是科学实验.一旦你觉得某些地方出错,你会修改程序然后重新执行.如果你的假设是对的,那么你会得到预期的结果,然后便会接近最终正确的程序,但如果你的假设是错的,那就要重新假设."When you have eliminated the impossible, whatever remains, however improbable, must be truth."(Sherlock Holmes)
对很多人来说,编程和debug是一回事.意思是编程就是不断的debug一个程序然后使它按自己的想法工作.你写一段程序让它完成某些任务,接着修改,debug,如此渐进.
Linux的诞生也是源自于一些很小的程序:"one of Linus's earlier projects was a program that would switch between printing AAAA and BBBB. This later evolved to Linux"(The Linux Users' Guide Beta Version 1).
