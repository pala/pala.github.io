--- 
categories: WordPressBackup
date: 2007-11-07 00:48:48 -05:00
layout: post
title: "Ubuntu 上 Wine CS"
---
<div class="level1">

1. 安装最新版本的wine

wget -q <a class="urlextern" title="http://wine.budgetdedicated.com/apt/387EE263.gpg" rel="nofollow" href="http://wine.budgetdedicated.com/apt/387EE263.gpg" target="_blank">http://wine.budgetdedicated.com/apt/387EE263.gpg</a> -O- | sudo apt-key add - sudo wget <a class="urlextern" title="http://wine.budgetdedicated.com/apt/sources.list.d/gutsy.list" rel="nofollow" href="http://wine.budgetdedicated.com/apt/sources.list.d/gutsy.list" target="_blank">http://wine.budgetdedicated.com/apt/sources.list.d/gutsy.list</a> -O /etc/apt/sources.list.d/winehq.list sudo apt-get update sudo apt-get install wine

2. 安装字体

wget <a class="urlextern" title="http://www.rzs.rs.ba/Fontovi/Tahoma.TTF" rel="nofollow" href="http://www.rzs.rs.ba/Fontovi/Tahoma.TTF" target="_blank">http://www.rzs.rs.ba/Fontovi/Tahoma.TTF</a> mv Tahoma.TTF ~/.wine/drive_c/windows/fonts/

3.安装cs

wine <strong></strong>*

4.运行

首先要把wine改成窗口模式，反正在我及几个朋友这里全屏模式都是无法正常运行的

WINEDEBUG=”fixme-all” wine cs.exe

然后在Video Modes里Display mode改为OpenGL

(测试机器: Thinkpad x61,t61)</div>
