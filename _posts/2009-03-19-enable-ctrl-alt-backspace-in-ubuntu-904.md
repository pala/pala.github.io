--- 
categories: WordPressBackup
date: 2009-03-19 14:29:24 -04:00
layout: post
title: "Enable Ctrl-Alt-Backspace in Ubuntu 9.04"
---
In Ubuntu 9.04, Ctrl-Alt-Backspace (shortcut to restart X Window) is disabled . You can enable it in two ways:

1. Edit /etc/X11/xorg.conf

Section "ServerFlags"
Option	"DontZap"	"<strong>False</strong>"
EndSection

2. via command
dontzap --disable

<a href="http://www.ubuntu.com/testing/jaunty/alpha6#Known%20issues" target="_blank">via</a>
