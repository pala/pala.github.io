---
layout: post
title: 兩個debug教訓
categories: 电脑
tags: iOS
---
記錄一下今天犯的兩個特二的錯誤，都和**tableView**裏的**seperator**有關。

**tl;dr** 如果`tableView`有`seperator`，則cell的`contentView`的高度比cell本身小1。

##錯誤一，高度計算

iOS 6後計算 `NSAttributedString` 的固定寬度下的高度應該使用以下方法

``` objc
- (CGRect)boundingRectWithSize:(CGSize)size options:(NSStringDrawingOptions)options context:(NSStringDrawingContext *)context
```
如果是多行字符串，需要在 `options` 裏傳入 `NSStringDrawingUsesLineFragmentOrigin`。另外在根據這個高度設定如 `UILabel` 的大小時，需要將計算的高度取 `ceilf` 值。

今天在IB裏直接畫一個 `Prototype Cell`，然後在上面加了一個 `UILabel`，設定好位置後，回到 `UITableViewController` 計算Cell高度時老是出錯，導致字符串顯示不完全。接著先入為主以為是上面的高度計算有問題，因為之前看到說上面那個函數並不一定會嚴格遵循你設置的固定寬度。結果搜了半天發現了最終特sb的原因：

總所周知在IB裏按住 `option` 鍵，可以看到一個view相對於superview的位置，上下左右各有多少距離。在上面的 `Prototype Cell` 裏，這個位置時是相對於 `contentView` 的，而 `contentView` 的高度是比cell本身要小1，所以在返回 `heightForRowAtIndexPath` 時也就沒有返回正確的值。由於我偷懶直接在IB預設值好那個label是 `UIViewAutoresizingFlexibleHeight`，所以也就無法完全顯示字符串了。

##錯誤二，separatorInset

在 iOS 7裏可以設置 `tableView` 或者 `tableViewCell` 的 `separatorInset`，這樣seperator則可以有左右的縮進。**注**：左右縮進的部分的顔色 == `cell.backgroundColor`

我的cell是暗色背景，seperator的顔色是白色。在設置cell的背景色時用了

``` objc
cell.contentView.backgroundColor = someColor;
```
而忘記了應該直接設置cell的backgroundColor，默認為白色。同時我把seperator的顔色也設置成了白色。

結果在設置 `separatorInset` 時無效，總是顯示和tableView等寬的seperator。後來就是想為什麼 `separatorInset` 無效，因為 `tableView` 和 `tableViewCell` 均可以設置此值，並且後者會覆蓋前者。後來把seperator的顔色改為其他顔色才發現，原來是cell本身的背景色為白色。`separatorInset` 的效果完全正常。

![](https://dl.dropbox.com/s/pciih2thjhrsmyy/Screen%20Shot%202013-10-07%20at%2012.33.12%20AM.png)

##教訓

debug時總是先入為主複雜化，以為錯誤出現在使用的新東西上面，懷疑是否錯誤理解了什麼，而忘記了最基本的東西的特性，比如 `contentView`。這個1的高度差好像在多年前那個斯坦福iOS開發課程裏就講過，現在完全不記得。

一個新app基本完工，預計這兩天傳上去。

![](https://dl.dropbox.com/s/layq8eoklbwwfxf/AppIcon76x76%402x.png)
