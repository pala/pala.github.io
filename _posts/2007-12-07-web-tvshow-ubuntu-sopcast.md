--- 
categories: WordPressBackup
date: 2007-12-07 00:53:00 -05:00
layout: post
title: 用Ubuntu看网络电视
---
在这里，我们用sopcast的Linux版来实现。

1.下载sopcast的源码
<pre class="code">http://www.sopcast.org/download/</pre>
2.解压缩
<pre class="code">sudo cp sp-sc-auth /usr/local/bin/sp-sc</pre>
3.下载GUI
<pre class="code">http://code.google.com/p/gsopcast/</pre>
4.安装
<pre class="code">./configure</pre>
<pre class="code">make</pre>
<pre class="code">sudo make install</pre>
此过程可能出现以下几个错误：
<pre class="code">a.No package gtk+2.0 found
解决：sudo apt-get install libgtk2.0-dev</pre>
<pre class="code">b.Sufficiently new version of libasound not found.
解决：sudo apt-get install libasound2 libasound-dev</pre>
<pre class="code">c.make[2]: *** [es.gmo] Error 127
解决：sudo apt-get install  intltool checkinstall automake1.9 autoconf</pre>
接着就应该没有什么问题，可以开始用mplayer看网络电视了。

当然，你也可以用VirtualBox模拟ppstream，效果很好。
