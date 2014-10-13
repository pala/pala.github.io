---
layout: post
title: 改变UIScrollView的分页大小
tags:
    - iOS
    - Cocoa
---
众所周知UIScrollView是可以分页的，只要设置如下变量：

``scrollView.pagingEnabled = YES;``

效果就是Photo那种一页一页的看照片。

默认的话，一页的尺寸就等于 `scrollView.bounds.size`，但对于iPad这种大屏幕来讲，经常会遇到需要一页要小于这个数值，比如我希望能同时看到3张照片，但又同时想slide的时候scrollView一次只移动一张照片的宽度 `(scrollView.bounds.size.width/3)`，而不是一页的大小 `(scrollView.bounds.size.width)`。

解决这个问题的方法就是将要显示的所有页面内容放到同一个容器view，然后在第一次slide scrollView的同时，将这个容器view向右移动两张照片的宽度，即 `scrollView.bounds.size.width*2/3`。为什么说是第一次？因为往右移动的距离也当前scrollView的contentOffset有关，简单的数学问题，不再详述。实现代码：

{% highlight objc %}
- (void) scrollViewDidScroll:(UIScrollView *)ascrollView {
    CGFloat offset = ascrollView.contentOffset.x*2/3;
    CGAffineTransform transform = CGAffineTransformMakeTranslation(offset, 0);
    //所以这里不能简单的移动scrollView.bounds.size.width*2/3，要计算当前的contentOffset
    [containerView setTransform:transform];
}
{% endhighlight %}

别忘了设置好scrollView的delegate。另外如果是支持屏幕旋转而照片宽度又是固定显示的话，这里不能简单用 `contentOffset.x*2/3` 来计算，因为竖屏的时候显示3张照片，横屏的时候会显示3*1024/768张，此时的containerView的移动距离也要相应改变。具体可以画个几何图形计算一下。

在支持屏幕旋转的情况下，除了要改变移动距离外，保证当前浏览的页面在旋转后仍然在屏幕中这点很重要，你不想在竖屏时看到第五张然后一横屏直接跳到前面前面去了，至于这种情况，甚至是那种单张照片被放大了，然后旋转后当前中心点仍然保持在中心的复杂情况，请参阅去年WWDC的Session 104。

最后还有一个细节问题，就是当你slide到最后时，会发现有2/3页面的空白。因为当显示到倒数第三张照片的时候，最后两张是不需要再占据页面的，这里就需要在设置scrollView.

contentSize的时候减去两个页面的宽度，因为contentSize的宽度直接决定scrollView被分了多少页。通用代码如下：

{% highlight objc %}
scrollView.contentSize = CGSizeMake(width*(photoCount-(photosPerpage-1)), height);
{% endhighlight %}

如果再复杂一点，可以设计成twitter for iPad那样，所有照片“堆积”在最左侧，只要计算的清楚。当然，作者也可能是搞了个自己的UIScroollView出来，就像当初tweetie的[自定义UITabBarController](http://stackoverflow.com/questions/576764/tab-bar-controller-inside-a-navigation-controller-or-sharing-a-navigation-root-v)一样，有更好的想法欢迎留言。

### 2012-2-6 03:08 update

另外有個超簡方法，就是把 `scrollView` 的寬度設置成想要的page寬度，然後設置 `clipsToBounds = NO`。接著再定義 `scrollView` 所在的 `UIView` 的 `hitTest`：

{% highlight objc %}
- (UIView *)hitTest:(CGPoint)point withEvent:(UIEvent *)event {
    if ([self pointInside:point withEvent:event]) {
        return _scrollView;
    }
    return nil;
}
{% endhighlight %}

如果 `scrollView` 所在的View有其他subView的話，可以用以下代碼：

{% highlight objc %}
- (UIView *)hitTest:(CGPoint)point withEvent:(UIEvent *)event {
    UIView *child = [super hitTest:point withEvent:event];

    if (child == self) {
        return self.scrollView;
    }

    return child;
}
{% endhighlight %}

[via](http://blog.proculo.de/archives/180-Paging-enabled-UIScrollView-With-Previews.html)
