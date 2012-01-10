---
date: 2009-03-24 02:57:33
title: Dropbox的使用技巧
layout: post
tags:
    - 贴士
categories:
    - 电脑
---
利用多个电脑自动同步的特点，可以实现很多方便功能：
<h3>1. 自动BT下载</h3>
如果你家里有一台一直开机用来BT下载的电脑，那么你可以在Dropbox文件夹里建立一个专门存放torrent文件的文件夹，然后设置bt下载工具自动添加此文件夹里的torrent文件。这样你就可以在任何地方用其他绑定了的电脑添加或者在Dropbox网页上上传torrent文件，那么家里用来下载的电脑则会立即同步这些文件并开始下载。
<h3>2. 在多台OSX上同步safari的收藏夹</h3>
<p class="line874">1. 将 ~/Library/Safari 移动到Dropbox文件夹</p>
<p class="line874">2. 做个链接回去</p>
ln -s ~/Dropbox/Safari/ ~/Library/Safari

这里先举这两个例子，更多技巧，比如同步密码，建立wiki等高级功能请参考 <a href="http://wiki.getdropbox.com/TipsAndTricks" target="_blank">http://wiki.getdropbox.com/TipsAndTricks</a>

注册请使用这个地址：<a href="http://www.dropbox.com/referrals/NTE1MDExNTk">http://www.dropbox.com/referrals/NTE1MDExNTk</a> 可以多获取250m的空间，当然我的空间也会增加这么多:)