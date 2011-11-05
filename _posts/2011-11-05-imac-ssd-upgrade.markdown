--- 
layout: post
title: 给iMac(late 2009)升级SSD
date: 2011-11-05
published: true
comments: true
categories:
  - Computer
  - iMac
  - Apple
---
前几天在twitter上[抱怨](https://twitter.com/#!/ztpala/status/130083508831002624)了一下iMac的硬盘开始一直“吱吱响个不停，卡的让人抓狂。动不动就假死”。前天终于提醒SMART Status: failing。似乎是好多坏扇区。不过查到很多人是升级到Lion以后才提醒这个错误的。有人给出建议是重新彻底装一下雪豹，如果没有错误则是Lion的误报。重装后发现错误依旧，并且无法再重装回Lion，因为它会先检测SMART Status，如果状态是failing则强迫你换硬盘再升级。无奈只好准备给iMac换硬盘。

>注：经查此硬盘已经工作了7482个小时，也算倒在工作岗位上了。

首选当然SSD。不过对于没有预留相关接口的09年版iMac来说，升级SSD有些麻烦，更不用提它还是个没有机箱概念的一体机。

最后在网上查了一下相关过程，参考了[ifixit](http://www.ifixit.com/Guide/iMac-Intel-27-Inch-Hard-Drive-Replacement/1634/1)的升级报告，开始动手。

具体过程可以参考上面图文并茂的攻略，这里只列一下准备工具：

![](https://lh3.googleusercontent.com/-CpauMmuF09Y/TrTuEOOKmYI/AAAAAAABh4E/Ow0gdHMOzNY/s640/IMG_3314.jpg)

1. 2.5英寸[SSD一块](http://amzn.com/B004W2JKWG)

2. 2.5转3.5[硬盘盒一个](http://amzn.com/B002Z2QDNE) 可选，你可以用超强的胶布把这个硬盘粘在上面。

3. [吸盘一个](http://www.walmart.com/ip/Bondo-Double-Handle-Locking-Suction-Cup-Dent-Puller/17130354) 因为iMac没有所谓的可拆机箱，要换硬盘，只能先把屏幕拿掉，这个吸盘这是用来拿掉最上面的玻璃面板。本来最担心这一步，怕一不小心用力过度把那么大一块玻璃弄碎了，谁知拿下时非常容易，玻璃后面四周有一圈金属圈，用来吸附到iMac里的磁铁上。这个吸盘貌似还可以吸汽车撞痕。

![](https://lh4.googleusercontent.com/-yropBLTEBaM/TrTuEAoXSwI/AAAAAAABh4U/-d5H0UYH6fY/s640/IMG_3316.jpg)

拿掉玻璃面板之后：

![](https://lh4.googleusercontent.com/-yw6eYJ6rLfQ/TrTuEBTrfWI/AAAAAAABh4I/Rx9m2_W0wyo/s640/IMG_3318.jpg)

4. 螺丝刀，需要T8和T10两种。恰好上次用0.99刀收过一副小螺丝刀，刚好能用上。

5. 曲别针一个，用来拿掉玻璃面板后把液晶屏勾出来。

6. 一小段导线。

因为原来的HDD会连着一段风扇用的导线，不过SSD没有发热问题所以不需要风扇，也就没有这段导线的接口，但如果这段导线放那什么都不连的话则会导致风扇狂转（不知道它是不是以为硬盘温度高的读不出来）。[MacRumors](http://forums.macrumors.com/showthread.php?t=808178)上面有人发现只要用一小段导线把它绝缘便可以解决这个问题。我用了一段订书钉，最后发现无效，不知道是不是不导电，最后还是得用软件解决。有人推荐用[HDD Fan Control](http://www.hddfancontrol.com/)，试用了一下果然效果很好，马上转速由5000多恢复正常，不过这个小软件售价29.95刀。还有人推荐smcFanControl，我这里根本不工作。最后还是在上面那个MacRumors的主题下有人分享了自己写的一个免费小程序，叫[SSD Fan Control](http://exirion.net/ssdfanctrl/Site/SSD_Fan_Control.html)，果然很好用，超级感激那位网友。

现在电脑一切工作正常，附一下SSD读写速度测试：

![](https://lh5.googleusercontent.com/-4eBRZkYYbaw/TrSIhaaphbI/AAAAAAABh3k/3YWIcocYe-U/s718/Screen%2BShot%2B2011-11-04%2Bat%2B8.45.35%2BPM.png)

