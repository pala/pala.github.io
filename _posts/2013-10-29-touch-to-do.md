---
layout: post
title: 发布Touch To-Do
tags:
  - iOS
  - Dropbox
---
前几天在整理dot files的时候，发现有人用一种很特别的方式管理[ToDo list](https://github.com/holman/dotfiles/blob/master/bin/todo)，也就是每次需要建立新项目，就用命令 `touch "task name"` 在桌面上新建一个文件，每次完成这个项目，只要删除这个文件即可。

上礼拜突然觉得可以用Dropbox同步这些文件，然后就可以在手机上同步这个list了，虽然用这种方式无法把相关文件放在桌面，但对会用terminal的用户完全不是问题。接着就开始研究了一下Dropbox API，然后就写了 **[Touch To-Do](https://itunes.apple.com/us/app/touch-to-do-task-list-for/id731295625?mt=8)**, 一个用Dropbox同步和备份的To-Do List app。你可以在手机上新建和删除任务，然后Dropbox会创建相关的文件并且同步到你所有电脑上，如此以来你就可以在任意能访问Dropbox的平台上管理To-Do List了。

第一版的功能还是很简单，所以先半价，也就是$0.99销售。

感恩节圣诞节在即，所以最近一直在做新app，估计假日期间会有5款app上架，有免费也有收费。欢迎下载。

App Store链接 https://itunes.apple.com/us/app/touch-to-do-task-list-for/id731295625?mt=8

另外 Missing Word这两天限免，想玩的速下，过期不候：）

https://itunes.apple.com/app/the-missing-word/id716259978?mt=8

更多玩法请参阅azalea的[blog](http://azaleasays.com/2014/02/19/simple-to-do-list-using-shell)
