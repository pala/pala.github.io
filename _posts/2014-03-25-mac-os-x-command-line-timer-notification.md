---
layout: post
title: Mac下用「命令行＋系统通知」定时
tags: Mac
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
sleep 1200; osascript -e 'display notification "赶快走开" with title "休息时间"'
```
1200的单位是秒，即20分钟。

<img src="/images/timeline-timer.png" width="350">

接下来可以把这个命令写入[dotfiles](https://github.com/pala/dotfiles)，方便的定制时间与显示文字。

当然，你也可以用声音代替系统通知：

```sh
sleep 1200; say "nnnnnnnnnnn  nnnnnnnnnn  mmmmmmm m. gan, g ba, fa dong bu chi lai"
```

只不过冷不丁的听到机器人似的声音挺吓人的。
