---
layout: post
title: Burst Images
categories: 电脑
tags:
 - iOS
 - Swift
---

最近[White Border](https://apps.apple.com/app/white-border/id1232787087)收到不少一星，原因是app显示图片正常保存后相册里并没有出现保存的图片。经反馈，是连拍快照的问题。

## Reproduce Bug

首先获得连拍快照的Data：

```swift

PHImageManager.default().requestImageDataAndOrientation(for: asset, options: options) { 
	(data, _, _, _) in
	self.processImageData(data)
}

```

再用此Data生成新的图片并且保存：

```swift
PHPhotoLibrary.shared().performChanges({
    let request = PHAssetCreationRequest.forAsset()
    request.addResource(with: .photo, data: data, options: nil)
    
}, completionHandler: nil)
```

用此种方法处理图片会保留原有的Metadata，也是此Bug出现的原因。因为Burst Image里包含一个 `burstIdentifier` ，相册会把新生成的图片放到原来的Burst Image stack里去。这样，在最近项目或是所有照片里，均看不到新生成的图片。

## 诡异行为一

当你在快照里点击"选择..."，然后选择新生成的图片，再点击确定时，相册会自动把这张照片变为一张独立的照片，并且跳转到此照片。如果你删除此照片，系统也会提醒你，它属于某个连拍快照。

## 诡异行为二

如果本身那个连拍快照之前就被挑选剩了一张照片，那么新生成的图片并不会出现在stack里，事实上，任何地方都找不到它。

除了相簿 - 地点 那个地图上能看到一个缩略图。

Burst Image有 `representsBurst` 属性，当你清除的只剩一张时，它会变为 `false`，但 `burstIdentifier` 仍然存在，所以要避开上面的坑，需要两个判断：

```swift
if asset.representsBurst || asset.burstIdentifier != nil {}
```

用了两天时间发现这个坑，之前一直在纠缠为什么 `PHPhotoLibrary.shared().performChanges` 不报错。

现在iOS系统已经不鼓励拍连拍了，默认长按拍照会变成拍视频，如果还想连拍，可以在设置里讲增音量键变为连拍键。

