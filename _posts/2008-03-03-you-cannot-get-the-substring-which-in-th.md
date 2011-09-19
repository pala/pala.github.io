--- 
categories: WordPressBackup
date: 2008-03-03 13:09:00 -05:00
layout: post
title: substring
---
You cannot get the substring which is in the tail  using a negative index like this:
<font color="#3366ff"> a = "1234"
b = a[-2:0]</font>

This is the right statement:

<font color="#3366ff">b = a[-2:]</font>

Differently, you'll feel free when you use the positive indexes:

<font color="#3366ff">b = a[2:4]</font>

The second index can be replaced by any positive number which is bigger than len(a), and it can be ignored too:

<font color="#3366ff">b = a[2:]</font>

Actually, this is the recommend solution.
It's a tricky problem, you should be very carefully when you calculate the indexes.
