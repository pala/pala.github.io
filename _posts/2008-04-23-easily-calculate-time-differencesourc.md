--- 
categories: WordPressBackup
date: 2008-04-23 23:35:53 -04:00
layout: post
title: "Easily calculate time difference: Sourc ..."
---
Easily calculate time difference:
Source: <a href="http://hi.baidu.com/tigerjgh/blog/item/ac53416643db2e21aa184ce4.html" target="_blank">sys</a>

#How many days between two dates:

&gt;&gt;&gt; import datetime
&gt;&gt;&gt; d1 = datetime.datetime(2005, 2, 16)
&gt;&gt;&gt; d2 = datetime.datetime(2004, 12, 31)
&gt;&gt;&gt; (d1 - d2).days
47

#Runtime:

import datetime
starttime = datetime.datetime.now()
endtime = datetime.datetime.now()
print (endtime - starttime).seconds

#Get the time in 10 hours:

&gt;&gt;&gt; d1 = datetime.datetime.now()
&gt;&gt;&gt; d3 = d1 + datetime.timedelta(hours=10)
&gt;&gt;&gt; d3.ctime()
