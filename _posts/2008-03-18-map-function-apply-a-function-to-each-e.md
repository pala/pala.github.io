--- 
categories: WordPressBackup
date: 2008-03-18 13:27:58 -04:00
layout: post
title: "map function"
---
<b>map function</b>: apply a function to each element of a list
<b>usage</b>: map(function,list)
<b>example</b>:
&gt;&gt;&gt; a=['1','2','3']
&gt;&gt;&gt; b=map(int,a)
&gt;&gt;&gt; b
[1, 2, 3]
you can use map with functions of two lists:
&gt;&gt;&gt; def add(a,b):
	return a+b

&gt;&gt;&gt; a=[2,4,6]
&gt;&gt;&gt; b=[1,2,3]
&gt;&gt;&gt; c=map(add,a,b)
&gt;&gt;&gt; c
[3, 6, 9]
