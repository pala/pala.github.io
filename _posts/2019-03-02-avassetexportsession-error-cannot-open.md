---
layout: post
title: AVAssetExportSession Error Cannot Open
categories: 电脑
tags: iOS
---

在用 `AVAssetExportSession` 导出无声视频时出错：Cannot Open. AVFoundationErrorDomain Code=-11822.

在检查有音轨后再创建 `compositionAudioTrack` 不再出错。

```swift
do {
    try compositionVideoTrack.insertTimeRange(timeRange, of: assetVideoTrack, at: CMTime.zero)
    compositionVideoTrack.preferredTransform = assetVideoTrack.preferredTransform
    if let assetAudioTrack = asset.tracks(withMediaType: .audio).first {
        let compositionAudioTrack = composition.addMutableTrack(withMediaType: .audio,
                                                                preferredTrackID: kCMPersistentTrackID_Invalid)!
        try compositionAudioTrack.insertTimeRange(timeRange, of: assetAudioTrack, at: CMTime.zero)
    }
    
} catch {
	print(error.localizedDescription)
}
 ```
