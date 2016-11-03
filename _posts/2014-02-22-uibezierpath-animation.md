---
layout: post
title: UIBezierPath Animation
tags:
    - iOS
    - Cocoa
---
I use the following code to animate a `CAShapeLayer`'s path property.

{% highlight objc %}
CGPathRef oldPath = self.shapeLayer.path;
CGPathRef newPath = [self myNewPath];
CABasicAnimation *animation = [CABasicAnimation animationWithKeyPath:@"path"];
[animation setFromValue:(__bridge id)oldPath];
[animation setToValue:(__bridge id)newPath];
[animation setDuration:0.5];
[animation setBeginTime:CACurrentMediaTime() + delay];
[animation setFillMode:kCAFillModeBackwards];
[animation setTimingFunction:[CAMediaTimingFunction functionWithName:kCAMediaTimingFunctionEaseInEaseOut]];
[self.shapeLayer addAnimation:animation forKey:@"path"];
self.shapeLayer.path = newPath;
{% endhighlight %}

### Pitfalls
1. If the two paths have a different number of control points or segments the results are undefined. - [docs](https://developer.apple.com/library/mac/documentation/GraphicsImaging/Reference/CAShapeLayer_class/Reference/Reference.html#//apple_ref/doc/uid/TP40008314-CH1-SW20)

2. If you delay the start of an animation, you might also want to set the fillMode property to `kCAFillModeBackwards`. This fill mode causes the layer to display the animation’s start value, even if the layer object in the layer tree contains a different value. Without this fill mode, you would see a jump to the final value before the animation starts executing. - [docs](https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/CoreAnimation_guide/AdvancedAnimationTricks/AdvancedAnimationTricks.html#//apple_ref/doc/uid/TP40004514-CH8-SW2)
