--- 
categories: WordPressBackup
date: 2008-11-04 01:39:00 -05:00
layout: post
title: 遍历List并remove某些元素
---
前两天在写一个猜数字游戏,在比较猜的数字和正确答案时使用了List,刚开始的想法是通过遍历比较,相同位置上的相同元素remove掉最后得出猜的数有几个正确的位和几个正确数字但是不在正确位置上.运行程序时发现List总是out of range,今天把这个问题研究了一下,发现了一些微妙的问题.

实验一:

<span style="color:#0000ff;">&gt;&gt;&gt; a
[1, 2, 3]
&gt;&gt;&gt; for i in range(len(a)):
...   if a[i] == 2:
...     a.remove(a[i])
...     print len(a)
...
2
Traceback (most recent call last):
File "&lt;stdin&gt;", line 2, in &lt;module&gt;
IndexError: list index out of range</span>

此时a[1]被remove掉,但是出现out of range错误.

结论:虽然range里用的是len(a),但是这个长度是被预先读取的,虽然remove掉一个元素,len(a)减少1,但是对于range来说并没有任何变化.

实验二:

<span style="color:#0000ff;">&gt;&gt;&gt; a=[1,2,2,3,4]
&gt;&gt;&gt; for i in range(len(a)):
...     if a[i] == 2:
...             a.remove(a[i])
...     print len(a)
...
5
4
4
4
Traceback (most recent call last):
File "&lt;stdin&gt;", line 2, in &lt;module&gt;
IndexError: list index out of range
&gt;&gt;&gt; a
[1, 2, 3, 4]</span>

这里我选择了两个相邻的元素都符合remove的要求,结果是第一个被remove掉,最后报错.

结论:当遍历过程中一个元素被remove后,剩下的元素的index自动减少1,由于实验一的结论,range不变,所以当i=4时,最初的最后一个元素a[4]已经变成了a[3]了,所以才会报错.

实验三:

<span style="color:#0000ff;">&gt;&gt;&gt; a=[1,2,2,3,4,5]
&gt;&gt;&gt; for i in a:
...     if i == 2:
...             a.remove(i)
&gt;&gt;&gt; a
[1, 2, 3, 4, 5]</span>

此时并没有报错,但是第二个"2"仍然没有被remove.这个错误让人更难以察觉.虽然我们在遍历list,但遍历过程中如果删除某个元素,那么此元素后面的那个元素就会被跳过,因为它会自动"前移一位"而占据已经被遍历且删除的元素的位置. 这很让人迷惑,但是如果没有运行时错误,那么将会产生很难以察觉的bug.

所以正确的方法应该是从后往前遍历,这样就避免了remove某元素后会跳过下一元素的问题,

<span style="color:#0000ff;">&gt;&gt;&gt; a
[1, 2, 2, 3, 4]
&gt;&gt;&gt; i=4
&gt;&gt;&gt; while i &gt; -1:
...     if a[i]==2:
...             a.remove(a[i])
...     i=i-1
...
&gt;&gt;&gt; a
[1, 3, 4]</span>

这篇文章的主要目的不是讨论怎么实现最初的那个删除元素的任务,而是从中看出一切其他问题:"想当然"的程序设计中经常出现的各种语义错误(比如把条件语句中的i==1写成i=1),其中一些很小的问题可能会带来几个钟头的令人郁闷的debug.

所以,考虑全面些,思维缜密些.
