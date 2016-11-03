---
layout: post
title: Tile Tale的故事
tags:
  - iOS
  - 設計
---
## tl;dr

前幾天[最美應用](http://zuimeia.com/)的編輯說想推薦一下[Tile Tale](https://itunes.apple.com/us/app/tile-tale/id577675173?ls=1&mt=8)，讓我大概寫一下開發中的故事，比如idea的產生，中間遇到的趣事和~~苦難~~困難等。

昨天，最美應用已經發表了推薦文章：

>一款非常親民的 puzzle 類遊戲。

>Tile Tale 讓小美一上手就欲罷不能，連續幾天，公交車、蹲廁所、走路都在玩，終於通關。

[最美應用評測](http://zuimeia.com/app/219/)

[App Store下載鏈接](https://itunes.apple.com/us/app/tile-tale/id577675173?ls=1&mt=8)

[豆瓣頁面](http://www.douban.com/subject/20512589/)

## Idea的產生

2012年上半年，Draw Something正火，自己和周圍的朋友都很喜歡玩這個遊戲，當時Game Center已經支持了Turn Based Game，於是自己也想寫一個此類小遊戲玩玩。正好當時自己也在玩一種Puzzle類小遊戲 - [Nonogram](http://en.wikipedia.org/wiki/Nonogram)。所以初步想法就是寫一個可以兩個人玩的Nonogram。

這個Nonogram遊戲開發到可以玩的階段後發現自己隨意設計出來的Puzzle解決起來並不是很有樂趣，要不特別難，要不無解，所以開發進展緩慢。接著App Store上出現了一個很流行的遊戲叫做[Flow](https://itunes.apple.com/us/app/flow-free/id526641427?mt=8)。玩了幾次發現這個遊戲的玩法太適合目前的項目了。然後我將這個未完成的遊戲按Flow的玩法修改了一下，變成了後來的Tile Tale。玩法和Flow是一樣的，只是賣點在界面不同和主力推薦Turn Based的玩法，也就是玩家可以設計自己的Puzzle。

## 開發中的故事

因為整個界面的風格是有些像素化的，所以自己很想用一種獨有的風格展現所有的Puzzle。考慮到遊戲本身的特點，比如每關都是正方形，於是為了統一風格，決定每一個難度的Puzzle數量都是一個平方數，展現出來如下：

![](https://dl.dropbox.com/s/ox2mqnvqials22b/Photo%20Aug%2008%2C%201%2024%2052%20PM.jpg)

但總覺得用數字寫第幾關很無趣。後來想既然都是正方形，為何不在Puzzle展示的時候直接顯示縮略圖呢，所有Puzzle放在一起一定很壯觀。接著就有了現在的選關風格。n²難度的Puzzle有n²關，完成後會顯示結果縮略圖，這樣解決所有10x10的Puzzle後會看到一個有10000個小單元格的彩色正方形。

此種展示方式的困難在於怎麼樣快速的畫出這幾百個小的彩色單元格，並且要計算好每個單元格的寬度都是整數，防止出現類似78.6px寬這種情況，會讓單元格的顯示有些模糊。還有要選擇一些比較搭的顏色放在一起，讓玩家看著比較舒服。這裡要感謝一下[Adobe Kuler](https://kuler.adobe.com/)這個工具。

另外一個最大的困難是怎麼用不怎麼好用的Game Center讓玩家很容易的給朋友設計和開心的玩別人發過來的Puzzle，並且還可以用iCloud保存和同步自己設計過的Puzzle，方便發給多個朋友。這一塊的工作量佔據了此遊戲開發的多數時間。目前版本(2.1)的多人遊戲還有不少bug，將要發佈的下一版本應該能改進很多。

因為考慮到要內置5²+6²+...+10²=355個Puzzle。所以Tile Tale最先寫好的是Turn Based遊戲中設計Puzzle的部分，這樣可以一邊測試Puzzle設計界面及雙人遊戲，一邊將自己設計的Puzzle直接保存成後來內置的單人遊戲。在2.0版本的更新中又多加了100個10x10的Puzzle，其中絕大多數都是後來玩多人遊戲時保存的。

在設計這些單人遊戲的時候，有時既要考慮到遊戲難度，又要使每一關完成後的圖案盡量好看一些。我的特約Puzzle設計師[@azaleasays](https://twitter.com/azaleasays)同學很多時候還堅持在如此有限的單元格里畫出點有意義的東西，而不是完全隨機的顏色線條。比如下面這個例子：

![](https://dl.dropboxusercontent.com/s/sc8xh0bygsec97t/Screenshot%202013-08-08%2015.22.57.png)

完成之後就變成了

![](https://dl.dropboxusercontent.com/s/9luqxp7u7r4a4t0/Screenshot%202013-08-08%2015.24.12.png)

當然還有其他好多我自己怎麼也看不出來畫的什麼的抽象圖案。

## 其他

有人問過我這個遊戲是不是參考了很多[Letterpress](https://itunes.apple.com/us/app/letterpress-word-game/id526619424?mt=8)的設計，比如Puzzle的展示風格和Letterpress的主界面很像。其實Tile Tale在界面設計基本完成之後Letterpress還沒有發佈，兩者的相似真的完全是一個巧合。要說參考和模仿，那就是玩法本身從[Flow](https://itunes.apple.com/us/app/flow-free/id526641427?mt=8)而來。

雖然此遊戲最初的出發點是想做一個好玩的Turn Based Game，但由於是建立在Game Center的基礎上，似乎多數人還是不怎麼用它來玩遊戲，所以絕大多數人都只玩單人遊戲。我個人認為，自己設計Puzzle和玩別人發給我的Puzzle樂趣更多。

由於此遊戲是我一個人在做，所以還有很多不足，比如沒有聲音，Game Center有一堆bug，字體太不易讀等等。這些不足都會在接下來的更新中慢慢改進。很感謝所有玩家的反饋。
