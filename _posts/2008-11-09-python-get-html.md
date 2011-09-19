--- 
categories: WordPressBackup
date: 2008-11-09 01:04:00 -05:00
layout: post
title: 用Python处理html文件
---
今天帮zhenhai同学写了个程序,大体流程是:

1.从一个表格文件的某列逐行读取一组数据

2.每读取一个单元格,即将此字符串作为一个查询关键字提交到某一生物学网站

3.从此网站生成的搜索结果页面中提取出关键字相关的url

4.分析url所指引的网站内容,如果有关于mRNA(其实我不懂什么是mRNA)的序列信息,就将此信息(三列)逐行提取,并用tab分隔没一行的不同内容,再写入一txt文件.如果没有要查找的序列,则返回2循环.

5.据他说此网站如果发现有计算机程序在获取它的数据,就会封IP.所以每次循环要间隔一定时间.

整个程序的功能的实现上没什么难度,可郁闷的是要处理HTML文件.这意味着写出来的程序不会像处理xml文件那样容易重用.这也是aza同学抱怨的每次找的数据格式都不一样,每次都要写新的正则表达式来处理.

下面来看看程序本身,此文也像前面写过的一样,属于记录一下模板程序,以后再有类似的问题会熟练很多.

<!--more-->
import sys
import urllib
from sgmllib import SGMLParser
import time
from BeautifulSoup import BeautifulSoup #用这咚咚处理HTML会省你很多时间

<strong>类和函数</strong>
<pre>class URLFinder(SGMLParser):
	def reset(self):
		SGMLParser.reset(self)
		self.url = ''
	def start_a(self, attrs):
		for k, v in attrs:
			if k=='href' and v.startswith('***'): #注释1
				self.url = v
				break</pre>
函数start_a用来寻找tag a.注释1那里有些取巧,因为此网站的搜索结果链接是固定的,所以只要从tag a中寻找开头与目标url相符的.
<pre>def getPage(u):
	"""get html of the url"""
	response = urllib.urlopen(u)
	data = response.read()
	response.close()
	return data</pre>
函数getPage用上面的url获取相关的html文件.
再往下的处理比较烦人.就是先判断有没有所需数据,如果有的话提取.最麻烦的一点是此html包含了格式完全一样的但不需要的数据,如下所示:
<span style="color:#008080;">mRNA sequences
所需数据(表格)
其他 sequences
不需要的数据(表格)</span>
这里的处理我觉得应该有很好的方法,欢迎高手留言指教,我先把自己的实现写在这里:
1.先查找子字符串"mRNA sequences",如果有的话标记index
参照上图我们可以看出,所需数据是存在此字符串后面的第一个table标记里.所以我先把从这个index开始出现的第一个table的html先找出来:
<pre>indexOfmRNA = resultPage.find('mRNA sequences')
if indexOfmRNA != -1:
	ltableindex = resultPage[indexOfmRNA:].find('TABLE') + indexOfmRNA
	rtableindex = resultPage[ltableindex+5:].find('TABLE') + ltableindex #注释2
	htmlOfmRNA = resultPage[ltableindex:rtableindex]</pre>
写这一段的时候犯了好多次"语义错误".第一次是在计算table的左右index时忘记上面赋值语句的"+***".
第二个错误是注释2那行,前面有个+5.这是因为如果没有的话两次查找会返回同一个index!
获得所需数据的表格后就要把数据从表格中拿出来,这里使用了开头说的BeautifulSoup,这里就不贴代码了,因为处理方式完全是基于具体的html.
最后,循环读取关键词:
<pre>file = open('key.txt', 'r')
for line in file.readlines():
	getData(line)
	time.sleep(30) #循环一次睡30秒
file.close()
sys.exit(0)</pre>
<strong>总结陈词</strong>:
此程序应该还是应用到了处理html时最基本的一些东西.不过由于XML有更统一的数据存储格式,觉得这样的程序并不会频繁使用.话又说回来,一直听他们搞生信的说得到的数据总是各式各样,写的程序总是不能重复使用,为啥没有一个组织来把这些数据进行一下标准化,提供更友好的共享方式呢?
