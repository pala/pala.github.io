---
title: 在Mac上屏蔽某些网站
layout: post
tags:
    - Mac
---
`sudo vim /etc/hosts`

接着在127.0.0.1 localhost那行后面加上想屏蔽的域名，用空格分隔，比如：

`127.0.0.1 localhost sanguosha.com`

保存，然后这些网站就无法访问了
