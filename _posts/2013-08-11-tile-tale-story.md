---
layout: post
title: Tile Tale的故事
tags:
  - iOS
  - 设计
---
## tl;dr

前几天[最美应用](http://zuimeia.com/)的编辑说想推荐一下[Tile Tale](https://itunes.apple.com/us/app/tile-tale/id577675173?ls=1&mt=8)，让我大概写一下开发中的故事，比如idea的产生，中间遇到的趣事和~~苦难~~困难等。

昨天，最美应用已经发表了推荐文章：

>一款非常亲民的 puzzle 类游戏。

>Tile Tale 让小美一上手就欲罢不能，连续几天，公交车、蹲厕所、走路都在玩，终于通关。

[最美应用评测](http://zuimeia.com/app/219/)

[App Store下载链接](https://itunes.apple.com/us/app/tile-tale/id577675173?ls=1&mt=8)

[豆瓣页面](http://www.douban.com/subject/20512589/)

## Idea的产生

2012年上半年，Draw Something正火，自己和周围的朋友都很喜欢玩这个游戏，当时Game Center已经支持了Turn Based Game，于是自己也想写一个此类小游戏玩玩。正好当时自己也在玩一种Puzzle类小游戏 - [Nonogram](http://en.wikipedia.org/wiki/Nonogram)。所以初步想法就是写一个可以两个人玩的Nonogram。

这个Nonogram游戏开发到可以玩的阶段后发现自己随意设计出来的Puzzle解决起来并不是很有乐趣，要不特别难，要不无解，所以开发进展缓慢。接着App Store上出现了一个很流行的游戏叫做[Flow](https://itunes.apple.com/us/app/flow-free/id526641427?mt=8)。玩了几次发现这个游戏的玩法太适合目前的项目了。然后我将这个未完成的游戏按Flow的玩法修改了一下，变成了后来的Tile Tale。玩法和Flow是一样的，只是卖点在界面不同和主力推荐Turn Based的玩法，也就是玩家可以设计自己的Puzzle。

## 开发中的故事

因为整个界面的风格是有些像素化的，所以自己很想用一种独有的风格展现所有的Puzzle。考虑到游戏本身的特点，比如每关都是正方形，于是为了统一风格，决定每一个难度的Puzzle数量都是一个平方数，展现出来如下：

![](https://dl.dropbox.com/s/ox2mqnvqials22b/Photo%20Aug%2008%2C%201%2024%2052%20PM.jpg)

但总觉得用数字写第几关很无趣。后来想既然都是正方形，为何不在Puzzle展示的时候直接显示缩略图呢，所有Puzzle放在一起一定很壮观。接着就有了现在的选关风格。n²难度的Puzzle有n²关，完成后会显示结果缩略图，这样解决所有10x10的Puzzle后会看到一个有10000个小单元格的彩色正方形。

此种展示方式的困难在于怎么样快速的画出这几百个小的彩色单元格，并且要计算好每个单元格的宽度都是整数，防止出现类似78.6px宽这种情况，会让单元格的显示有些模糊。还有要选择一些比较搭的颜色放在一起，让玩家看着比较舒服。这里要感谢一下[Adobe Kuler](https://kuler.adobe.com/)这个工具。

另外一个最大的困难是怎么用不怎么好用的Game Center让玩家很容易的给朋友设计和开心的玩别人发过来的Puzzle，并且还可以用iCloud保存和同步自己设计过的Puzzle，方便发给多个朋友。这一块的工作量占据了此游戏开发的多数时间。目前版本(2.1)的多人游戏还有不少bug，将要发布的下一版本应该能改进很多。

因为考虑到要内置5²+6²+...+10²=355个Puzzle。所以Tile Tale最先写好的是Turn Based游戏中设计Puzzle的部分，这样可以一边测试Puzzle设计界面及双人游戏，一边将自己设计的Puzzle直接保存成后来内置的单人游戏。在2.0版本的更新中又多加了100个10x10的Puzzle，其中绝大多数都是后来玩多人游戏时保存的。

在设计这些单人游戏的时候，有时既要考虑到游戏难度，又要使每一关完成后的图案尽量好看一些。我的特约Puzzle设计师[@azaleasays](https://twitter.com/azaleasays)同学很多时候还坚持在如此有限的单元格里画出点有意义的东西，而不是完全随机的颜色线条。比如下面这个例子：

![](https://dl.dropboxusercontent.com/s/sc8xh0bygsec97t/Screenshot%202013-08-08%2015.22.57.png)

完成之后就变成了

![](https://dl.dropboxusercontent.com/s/9luqxp7u7r4a4t0/Screenshot%202013-08-08%2015.24.12.png)

当然还有其他好多我自己怎么也看不出来画的什么的抽象图案。

## 其他

有人问过我这个游戏是不是参考了很多[Letterpress](https://itunes.apple.com/us/app/letterpress-word-game/id526619424?mt=8)的设计，比如Puzzle的展示风格和Letterpress的主界面很像。其实Tile Tale在界面设计基本完成之后Letterpress还没有发布，两者的相似真的完全是一个巧合。要说参考和模仿，那就是玩法本身从[Flow](https://itunes.apple.com/us/app/flow-free/id526641427?mt=8)而来。

虽然此游戏最初的出发点是想做一个好玩的Turn Based Game，但由于是建立在Game Center的基础上，似乎多数人还是不怎么用它来玩游戏，所以绝大多数人都只玩单人游戏。我个人认为，自己设计Puzzle和玩别人发给我的Puzzle乐趣更多。

由于此游戏是我一个人在做，所以还有很多不足，比如没有声音，Game Center有一堆bug，字体太不易读等等。这些不足都会在接下来的更新中慢慢改进。很感谢所有玩家的反馈。
