--- 
categories: WordPressBackup
date: 2008-11-03 22:10:00 -05:00
layout: post
title: "学习Python 2 Strings"
---
1.换行

Python里string的换行需要用n来标明,如:

<span style="color:#0000ff;">tem= '1st linen</span>

<span style="color:#0000ff;">second line</span>

<span style="color:#0000ff;">third line'</span>

print tem的结果将会是:

<span style="color:#0000ff;">1st line</span>

<span style="color:#0000ff;">second linethird lie</span>

如果你在字符串前加上r,即r"string"的话,那么所有转义将被取消

2.slice

<span style="color:#0000ff;">&gt;&gt;&gt; 'string'[2:]</span> <span style="color:#800000;">#string里除了前两个字符以外的所有字符</span>
<span style="color:#0000ff;">'ring'
&gt;&gt;&gt; 'string'[:2]</span> <span style="color:#800000;">#string里的前两个字符</span>
<span style="color:#0000ff;">'st'</span>

当然'string'[2:]+'string'[:2]始终='string'

<span style="color:#0000ff;">&gt;&gt;&gt; 'string'[-2:] <span style="color:#800000;">#string里最后两个字符,注意和前面的区别</span>
'ng'
&gt;&gt;&gt; 'string'[:-2] <span style="color:#800000;">#string里除了最后两个字符之外的所有字符</span>
'stri'</span>

3.修改字符串

string里的字符不能被修改:

<span style="color:#0000ff;">&gt;&gt;&gt; 'string'[0]='a'
Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
TypeError: 'str' object does not support item assignment</span>

但是你可以用建立新string的方法来实现这个目的:

<span style="color:#0000ff;">&gt;&gt;&gt; new = 'a'+'string'[1:]
&gt;&gt;&gt; new
'atring'</span>
