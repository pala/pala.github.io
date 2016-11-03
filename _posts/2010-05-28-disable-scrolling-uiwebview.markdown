--- 
layout: post
title: UIWebView加载本地图片和禁止滚屏
date: 2010-05-28
categories:
    - 电脑
tags:
    - iOS
---
<pre class="prettyprint">
NSString *path = [[NSBundle mainBundle] bundlePath];
NSURL *url = [NSURL fileURLWithPath:path];
[webView loadHTMLString:htmlString baseURL:url];
</pre>

如此htmlString里即可包含iPhone本地图片

CSS也一样 上文说到UIWebView不是继承自UIScrollView，所以不能使用scrollEnable=NO来禁用滚屏。目前我找到最简单的方法是在htmlString里包含如下代码：

<pre class="prettyprint">
document.ontouchmove = function(event) {
if (document.body.scrollHeight == document.body.clientHeight) event.preventDefault();
}
</pre>

有javascript达人来解释一下？
还有一种方法是将UIWebView放在UIScrollView里，以后再说。
