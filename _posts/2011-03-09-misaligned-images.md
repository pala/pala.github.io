---
date: 2011-03-09 15:37:25
title: Misaligned Images
layout: post
tags:
    - iOS
categories:
    - 电脑
---
<!--more-->

在Instruments - Core Animation里有个选项叫做"Color Misaligned Images"，如果勾选此项，iOS设备上未精准对齐像素的元素都会被标记出来：

<img class="alignnone" title="iPhone" src="https://lh4.googleusercontent.com/-8gSUG67EmdU/TXfjkehfeLI/AAAAAAABifI/DuucDYURCfg/s800/IMG_1536.PNG" alt="" width="320" height="480" />

比如，你在计算UITableViewCell高度时返回了类似54.321这样的值，然后再用drawAtPoint显示文字时，系统就会进行一些类似反锯齿的操作，一来影响性能，二来看起来会让文字有些糊，如下图：

<img src="https://lh3.googleusercontent.com/-U3NtBbfJS_o/TXfgq5rEpBI/AAAAAAABifI/-0Rjfs0Mvzw/s800/Screen%252520shot%2525202011-03-09%252520at%2525203.08.24%252520PM.png" alt="" /><img src="https://lh5.googleusercontent.com/-Va0Ra6ErHR4/TXfgqzBm3MI/AAAAAAABifI/dNMsQVjXPiE/s800/Screen%252520shot%2525202011-03-09%252520at%2525203.08.09%252520PM.png" alt="" />
用DigitalColor Meter放大看一下会更清楚
<img src="https://lh5.googleusercontent.com/-1MuvzCMqxW4/TXfgq0uud9I/AAAAAAABifI/lshhPtSj_ic/s800/Screen%252520shot%2525202011-03-09%252520at%2525203.10.42%252520PM.png" alt="" /><img src="https://lh6.googleusercontent.com/-5ZflrddXS08/TXfgqV7dI1I/AAAAAAABifI/O9Ubl1fRTRk/s800/Screen%252520shot%2525202011-03-09%252520at%2525203.09.23%252520PM.png" alt="" />
此时就需要再计算各种位置坐标时将之转换成“整数”（虽然都是需要CGFloat值）：
<code>floorf(0.5f + height)</code>