--- 
layout: post
title: no ARC flag
date: 2011-10-27
published: true
comments: true
categories:
    - 电脑
tags:
    - Xcode
---
如果你的程序启用了[ARC](http://clang.llvm.org/docs/AutomaticReferenceCounting.html)但是包含的第三方framework，比如asi-http-request还未启用，则需要在那些文件上禁用ARC

打开Build Phases - Compile Sources，选择相关文件，加上以下Compiler Flag:

<code>-fno-objc-arc</code>
