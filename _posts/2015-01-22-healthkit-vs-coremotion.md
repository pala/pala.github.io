---
layout: post
title: HealthKit vs CoreMotion
tags: iOS
---
对于用`CoreMotion`获取步数，走动距离等数据的Fitness程序，比如[Wander][1]，在 iOS 8 增加了`HealthKit`后可以说是多了一种选择。这里写一下这两者的区别和各自的特点。

`CoreMotion`里用于获取这些数据的Class分别是 `CMPedometer` 和 `CMMotionActivityManager`，下文均用`CoreMotion`代替。

`HealthKit`则用app名称`Health`代替。

### 设备

1. `CoreMotion`需要设备搭载了M7或者M8运动协处理器：

	iPad mini 2, iPad Air, iPhone 5s或者更新机型。

	对于爬楼梯这种数据，则需要气压计：

	iPad Air 2, iPhone 6 (Plus)

2. 至于`Health`，网站上写的很清楚：

	健康功能适用于 iPhone 4s 或更新机型以及 iPod touch (第五代)。

### 历史数据

`CoreMotion`很简单，只能获取当前设备最多过去七天的数据。

而`Health`里有你所有的健康相关数据（Fitness只是其中一小部分）。如果你打开`Health`查看所有记录的话，每一条历史数据都会显示它的来源，比如某天某时你走了15步，这15步你是拿着iPhone走的还是戴着Wantch走的。

WWDC里特地提到了`Health`里不同数据来源的问题，它可以自动为你综合这些数据，而不是你拿着iPhone戴着Watch走15步，你的app看到的就变成了30步。

看到上面这些好像`Health`完胜`CoreMotion`，不过他们还有以下区别。

### 实时性

如果你的app是实时反馈用户当前状态的话，比如「正在走」，那么`Health`不是一个好选择。当然，它也有一些实时通知的机制，但延迟比较大。

比方说`HealthStore`有以下函数：

```swift
func enableBackgroundDeliveryForType(type: HKObjectType!, frequency: HKUpdateFrequency, withCompletion completion: ((Bool, NSError!) -> Void)!)
```

这里就算你把requency设置为`Immediate`，它仍会每小时才通知一次：

> Some data types, such as step counts, have a minimum frequency of HKUpdateFrequencyHourly. This frequency is enforced transparently. [link][2]

所以`Health`最好用来展现和分析历史数据。

而`CoreMotion`的反馈则非常及时，一般在你开始运动后3-5秒便能识别出来。

### 限制

`Health`不可以用在extension里，这里包括了`Today Widgets`，`WatchKit`（这两者恰恰是需要实时更新的）。所以你必须直接用`CoreMotion`，或者通过`App Groups`来共享数据。

### 易用性

`CoreMotion`的API非常简单，相比较`Health`就比较复杂，哪怕是仅仅获取步数等简单数据。

假如你想获取今天的步数并且实时更新这个数字，如果用`CoreMotion`的话，只需要一句：

```swift
pedometer.startPedometerUpdatesFromDate(startOfToday) {
    data, error in
    // handle data	
}
```

如果用`HealthKit`的话，首先你要建一个`HKObserverQuery`，每次收到数据变化通知时再用`HKStatisticsQuery`获取今天的步数。此处省略代码40行。

### 其他

因为健康数据相当敏感，所以如果你要使用`Health`的话，则必须在某处声明一个隐私条款。

## 总结

这里只是大概的总结了一下`CoreMotion`和`HealthKit`在处理Fitness相关数据时的一些不同之处，比较完美的解决方法是综合两者的长处。但在用户体验上面需要小心对待，不要上来弹出一堆权限请求吓跑了用户。

[1]: https://itunes.apple.com/app/wander-for-iphone-5s/id774474904?&mt=8

[2]: https://developer.apple.com/library/prerelease/ios/documentation/HealthKit/Reference/HKHealthStore_Class/index.html#//apple_ref/occ/instm/HKHealthStore/
