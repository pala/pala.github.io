---
layout: post
title: Mac下用「命令行＋系统通知」定时
tags: 
    - Mac
    - iOS
    - Tips
---
>为革命，保护视力

今天戴隐形眼镜一直不舒服，然后去Quora上看看有什么好的眼药水推荐，结果看到一个眼科医生推荐的[20-20-20法则](http://qr.ae/n63zB )，即

**每20分钟，远望至少20ft（约6米）的距离，20秒以上。**

然后用iPhone自带的Timer定时，发现这货到了时间就响铃，哪怕你改了震动。接着想既然iTerm开机就运行，能不能在命令行实现一个简单易用的计时工具，搜索了一下果然找到一个好的[解决方法](http://apple.stackexchange.com/a/115373/51944)：

首先，我想在命令行能引发一个系统通知，方法如下：

``` sh
osascript -e 'display notification "Lorem ipsum dolor sit amet" with title "Title"'
```
后半部分其实是 `AppleScript` ，`osascript`则用于在命令行运行 `AppleScript`。

接着用 `sleep` 命令设置多久后运行，所以最终的命令如下：

```sh
sleep 1200; osascript -e 'display notification "赶快走开" with title "休息时间" sound name "Sosumi"'
```
1200的单位是秒，即20分钟。

<img src="/images/timeline-timer.png" width="350">

接下来可以把这个命令写入[dotfiles](https://github.com/pala/dotfiles/blob/master/bin/zz)，方便的定制时间，显示文字以及声音。

### 通知的显示

和其他程序的通知一样，你也可以在系统设置里调整此通知的显示方式：

System Preferences - Notifications - AppleScript Editor

比如选择通知方式为**Alerts**，这样上面的通知框不会自动消失。

##其他方式

如果你不想用系统通知的方式，则可以用一个简单的 `say` 命令让电脑念一段文字：

```sh
sleep 1200; say "nnnnnnnnnnn  nnnnnnnnnn  mmmmmmm m. gan, g ba, fa dong bu chi lai"
```

只不过冷不丁的听到机器人似的声音挺吓人的。

## Google

如果你Google一下 set timer for x minutes，它會自動為你在網頁上設置一個timer。

## f.lux

底下有朋友留言提到了[f.lux](http://justgetflux.com)，它的作用是根据你的作息，在临睡前几小时会慢慢将你电脑屏幕中的蓝光去掉变为暖色，有助入睡。

刚开始用flux时可能对这种暖色屏幕不太适应，但稍微使用后再将屏幕调回正常模式感觉非常刺眼，有兴趣的可以[下载](http://justgetflux.com)试用一下。支持Mac Windows Linux iOS（需破解）。免费:punch:

## iOS的睡眠模式

上面说到Timer到时总会响铃，想只要震动的话一个解决方法就是自己做一个没声音的铃声:trollface:

另外后知后觉发现iOS内置了一个睡眠模式，在Timer计时结束后停止播放音乐视频等，只要在选择铃声时选择 **Stop Playing** 即可：

<img src="/images/iOSStopPlaying.png" width="320">
