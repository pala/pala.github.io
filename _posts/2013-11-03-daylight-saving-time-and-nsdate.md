---
layout: post
title: Daylight Saving Time and NSDate
categories: 电脑
tags: iOS
---
刚刚在写关于`NSDate`的一段程序，大概就是从今天凌晨零点开始，每次加一小时，然后往一个数组里加一个数，直到当前时间结束。结果发现数组长度总是多1。用`@"EEEE, MMMM d, HH:mm:ss"`格式打印那个`NSDate`变量，发现凌晨1点打印了两遍，才醒悟是夏令至的问题。

之前还一直在程序里放了一个**Magic Number**：`HoursPerDay = 24` -,-!

计算两个日期之前相差多少小时可以用以下方法：

```objc
NSDate* date1 = someDate;
NSDate* date2 = someOtherDate;
NSTimeInterval distanceBetweenDates = [date1 timeIntervalSinceDate:date2];
double secondsInAnHour = 3600;
NSInteger hoursBetweenDates = distanceBetweenDates / secondsInAnHour;  
```

[via StackOverFlow](http://stackoverflow.com/a/4084356)

特殊的时间运行特殊的程序发现了特殊的bug。
