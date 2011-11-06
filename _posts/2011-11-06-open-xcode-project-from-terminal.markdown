--- 
layout: post
title: open Xcode project from Terminal
date: 2011-11-06
published: true
comments: true
categories:
  - Xcode
  - Tips
---
只需在Terminal里运行

   open YourProject.xcodeproj

如果想要更方便一些可以用以下方法保存成一个命令：

<pre>
echo 'alias xcode="open *xcodeproj"' >> ~/.profile
</pre>


[via](http://www.codeography.com/2009/10/28/open-xcode-project-from-the-command-line.html)
