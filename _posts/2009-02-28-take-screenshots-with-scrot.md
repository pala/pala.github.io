--- 
categories: WordPressBackup
date: 2009-02-28 23:57:28 -05:00
layout: post
title: "用 scrot 截屏"
---
Linux for Human Beings -Ubuntu

<!--more-->Ubuntu自带一个截屏程序, 很好用, 但是不支持鼠标选取. <a href="http://linuxbrit.co.uk/scrot/" target="_blank">scrot</a>是一个很灵巧的截屏程序, 支持自定义文件名, 倒计时, 图片精度设定, 选取屏幕及整个屏幕的截屏等.

<span style="color:#3366ff;">$scrot</span>

没有参数的情况下将对整个屏幕截屏, 并在home目录下生成 时间_分辨率_scrot.png 的图片

<span style="color:#3366ff;">$scrot test.png -d 5 -c</span>

则会倒计时5秒后截屏并命名为test.png. -c的意思是像定时炸弹一样显示还剩几秒.

<span style="color:#3366ff;">$scrot -s</span>

-s即用鼠标选取屏幕某一区域截图. 这也是我最想要的功能.

为了方便你可以把这个命令做成一个脚本, 如下:

<span style="color:#3366ff;">#!/bin/sh
scrot -s</span>

接着加上执行权限

<span style="color:#3366ff;">chmod a+x 文件名.sh </span>

然后再放个图标到Panel就行了, 以后每次截屏点击一下, 选取, 完成. 简单方面, 无需打开任何窗口. 至于其他高级功能, 请参考man页面.

另外LDCN介绍了另外一个强大的截图工具: <a href="http://shutter-project.org/" target="_blank">Shutter</a>，有兴趣的可以去<a href="http://linuxdesktop.cn/2009/03/06/shutter.html" target="_blank">看看</a>.
