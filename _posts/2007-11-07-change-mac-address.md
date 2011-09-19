--- 
categories: WordPressBackup
date: 2007-11-07 00:57:00 -05:00
layout: post
title: 修改网卡Mac地址
---
<pre class="code">sudo gedit /etc/network/interfaces</pre>
你会看到网卡配置,大致如下:

auto eth0   iface eth0 inet dhcp

添加一行如下:

auto eth0   iface eth0 inet dhcp   hwaddress ether 01:02:03:04:05:06

当然你会选择其他地址,不过格式都是一样的

sudo /etc/init.d/networking restart
<pre class="code"></pre>
