---
date: 2009-03-19 14:29:24
title: Enable Ctrl-Alt-Backspace in Ubuntu 9.04
layout: post
categories:
    - 网志
---
1. Edit /etc/X11/xorg.conf

    <pre class="prettyprint">Section "ServerFlags"
Option	"DontZap"	"<strong>False</strong>"
EndSection
</pre>
2. via command

    `dontzap --disable`

<a href="http://www.ubuntu.com/testing/jaunty/alpha6#Known%20issues" target="_blank">via</a>
