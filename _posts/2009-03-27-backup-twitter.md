--- 
categories: WordPressBackup
date: 2009-03-27 19:47:39 -04:00
layout: post
title: 备份Twitter的小程序
---
说明：

1. 根据每一页显示20条推，然后用总推数/20即可以翻到第一条推那一页。不过发现推数过多的话是翻不到最后一页的，也就是无法备份所有的推。不过我自己总共才有两千多条，所以目前还可以全部下载下来。

2. 没有使用twitter的API(事实我也没去研究有没有API可以获取所有的推)，直接用Python下载网页源代码里最主要的部分，再加上twitter的css就完工了，很方便，而且显示效果我很满意。

主要代码如下：

<!--more-->
<pre>import urllib
from BeautifulSoup import BeautifulSoup
// 搜索beautifulsoup python 可以得到这个包的介绍，处理HTML很方便
import re

def getPage(u):
	"""get html of the url"""
	response = urllib.urlopen(u)
	source = response.read()
	response.close()
	return source

for i in range(1, 118): //118由推数除以20得到
	u = 'http://twitter.com/ztpala?max_id=1399687141&amp;page=%s&amp;twttr=true' % i
        //这个地址你可以右击你主页最下面的‘more’，复制链接地址
	soup = BeautifulSoup(getPage(u))
	soup.prettify()
	data = str(soup.find('ol', id="timeline"))

	file = open('twitter.html', 'a')
	file.write(data)
	file.close()</pre>
我这两千多条下载下来生成的html文件大概1m，你可以用自己的方式修改一下此代码，比如设定一个文件存多少条推，加上css链接blablabla。
