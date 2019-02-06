---
layout: post
title: Gapless AVQueuePlayer
categories: 电脑
tags: iOS
---
If you use `AVQueuePlayer` and `AVPlayerLooper` to loop videos, you may notice some gaps(blank frames).

To resolve this issue, check the durations of the video and the audio (if any), and use the shorter one:

```swift
var duration: CMTime = asset.duration

if let videoTrack = asset.tracks(withMediaType: .video).first,
    videoTrack.timeRange.duration < duration {
    duration = videoTrack.timeRange.duration
}

if let audioTrack = asset.tracks(withMediaType: .audio).first,
    audioTrack.timeRange.duration < duration {
    duration = audioTrack.timeRange.duration
}

let timeRange = CMTimeRange(start: .zero, duration: duration)

self.playerLooper = AVPlayerLooper(player: player,
                                   templateItem: playerItem,
                                   timeRange: timeRange)
player.play()
```

You have no ideas how many hours I spent on this fxxxing issue.
