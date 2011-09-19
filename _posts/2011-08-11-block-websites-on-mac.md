--- 
categories: WordPressBackup
date: 2011-08-11 03:10:40 -04:00
layout: post
title: 在Mac上屏蔽某些网站
---
<code>sudo vim /etc/hosts</code>
接着在127.0.0.1 localhost那行后面加上想屏蔽的域名，用空格分隔，比如：
127.0.0.1       localhost sanguosha.com
保存，然后这些网站就无法访问了
