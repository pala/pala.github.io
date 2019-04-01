---
layout: post
title: AVAssetImageGenerator Error
categories:
tags:
---

用 `AVAssetImageGenerator` 获取视频缩略图出错：This media cannot be used, Code=-12431.

在把出错视频保存到系统相册，同样没有缩略图，播放都是正常的。最后发现是trimmer的问题。

在导出视频时选择preset：

```swift
let supportHEVC = AVAssetExportSession.exportPresets(compatibleWith: asset).contains(AVAssetExportPresetHEVCHighestQuality)
let preferredPreset = supportHEVC ? AVAssetExportPresetHEVCHighestQuality : AVAssetExportPresetHighestQuality
```

把 `AVAssetExportPresetHEVCHighestQuality` 修改为 `AVAssetExportPresetPassthrough`可以正常获取缩略图。

现在越来越多bug出现了，解决了，但不知道真正原因为何😔
