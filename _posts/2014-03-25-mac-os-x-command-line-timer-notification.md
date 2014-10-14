---
layout: post
title: Mac下用「命令行＋系統通知」定時
tags: 
    - Mac
    - iOS
    - Tips
---
>為革命，保護視力

今天戴隱形眼鏡一直不舒服，然後去Quora上看看有什麼好的眼藥水推薦，結果看到一個眼科醫生推薦的[20-20-20法則](http://qr.ae/n63zB )，即

**每20分鐘，遠望至少20ft（約6米）的距離，20秒以上。**

然後用iPhone自帶的Timer定時，發現這貨到了時間就響鈴，哪怕你改了震動。接著想既然iTerm開機就運行，能不能在命令行實現一個簡單易用的計時工具，搜索了一下果然找到一個好的[解決方法](http://apple.stackexchange.com/a/115373/51944)：

首先，我想在命令行能引發一個系統通知，方法如下：

{% highlight sh %}
osascript -e 'display notification "Lorem ipsum dolor sit amet" with title "Title"'
{% endhighlight %}
後半部分其實是 `AppleScript` ，`osascript`則用於在命令行運行 `AppleScript`。

接著用 `sleep` 命令設置多久後運行，所以最終的命令如下：

{% highlight sh %}
sleep 1200; osascript -e 'display notification "趕快走開" with title "休息時間" sound name "Sosumi"'
{% endhighlight %}
1200的單位是秒，即20分鐘。

<img src="/images/timeline-timer.png" width="350">

接下來可以把這個命令寫入[dotfiles](https://github.com/pala/dotfiles/blob/master/bin/zz)，方便的定制時間，顯示文字以及聲音。

### 通知的顯示

和其他程序的通知一樣，你也可以在系統設置里調整此通知的顯示方式：

System Preferences - Notifications - AppleScript Editor

比如選擇通知方式為**Alerts**，這樣上面的通知框不會自動消失。

## 其他方式

如果你不想用系統通知的方式，則可以用一個簡單的 `say` 命令讓電腦念一段文字：

{% highlight sh %}
sleep 1200; say "nnnnnnnnnnn  nnnnnnnnnn  mmmmmmm m. gan, g ba, fa dong bu chi lai"
{% endhighlight %}

只不過冷不丁的聽到機器人似的聲音挺嚇人的。

## Google

如果你Google一下 set timer for x minutes，它會自動為你在網頁上設置一個timer。

## f.lux

底下有朋友留言提到了[f.lux](http://justgetflux.com)，它的作用是根據你的作息，在臨睡前幾小時會慢慢將你電腦屏幕中的藍光去掉變為暖色，有助入睡。

剛開始用flux時可能對這種暖色屏幕不太適應，但稍微使用後再將屏幕調回正常模式感覺非常刺眼，有興趣的可以[下載](http://justgetflux.com)試用一下。支持Mac Windows Linux iOS（需破解）。免費👊

## iOS的睡眠模式

上面說到Timer到時總會響鈴，想只要震動的話一個解決方法就是自己做一個沒聲音的鈴聲

另外後知後覺發現iOS內置了一個睡眠模式，在Timer計時結束後停止播放音樂視頻等，只要在選擇鈴聲時選擇 **Stop Playing** 即可：

<img src="/images/iOSStopPlaying.png" width="320">
