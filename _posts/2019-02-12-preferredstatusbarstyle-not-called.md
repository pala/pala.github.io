---
layout: post
title: preferredStatusBarStyle not called
categories: 电脑
tags: iOS
---

The `UINavigationController`, `UISplitViewController` and `UITabBarController` do not forward on `preferredStatusBarStyle` calls to its child view controllers.

Extensions should fix the problem.

```swift
extension UISplitViewController {
    override open var childForStatusBarStyle: UIViewController? {
        return self.viewControllers.first
    }
}

extension UINavigationController {
    override open var childForStatusBarStyle: UIViewController? {
        return self.topViewController
    }
}
```