---
layout: post
title: 發佈Touch To-Do
tags:
  - iOS
  - Dropbox
---
前幾天在整理dot files的時候，發現有人用一種很特別的方式管理[ToDo list](https://github.com/holman/dotfiles/blob/master/bin/todo)，也就是每次需要建立新項目，就用命令 `touch "task name"` 在桌面上新建一個文件，每次完成這個項目，只要刪除這個文件即可。

上禮拜突然覺得可以用Dropbox同步這些文件，然後就可以在手機上同步這個list了，雖然用這種方式無法把相關文件放在桌面，但對會用terminal的用戶完全不是問題。接著就開始研究了一下Dropbox API，然後就寫了 **[Touch To-Do](https://itunes.apple.com/us/app/touch-to-do-task-list-for/id731295625?mt=8)**, 一個用Dropbox同步和備份的To-Do List app。你可以在手機上新建和刪除任務，然後Dropbox會創建相關的文件並且同步到你所有電腦上，如此以來你就可以在任意能訪問Dropbox的平台上管理To-Do List了。

第一版的功能還是很簡單，所以先半價，也就是$0.99銷售。

感恩節聖誕節在即，所以最近一直在做新app，估計假日期間會有5款app上架，有免費也有收費。歡迎下載。

App Store鏈接 https://itunes.apple.com/us/app/touch-to-do-task-list-for/id731295625?mt=8

另外 Missing Word這兩天限免，想玩的速下，過期不候：）

https://itunes.apple.com/app/the-missing-word/id716259978?mt=8

更多玩法請參閱azalea的[blog](http://azaleasays.com/2014/02/19/simple-to-do-list-using-shell)
