--- 
layout: post
title: Sublime Text 2 配置与技巧
date: 2012-01-31 12:29:59
categories:
    - 电脑
tags:
    - Sublime
    - OSX
    - 软件
---
Sublime Text 2是一款非常强大的多平台支持编辑器。虽然是收费软件，但免费版有无限时间试用期，不同点就是当你保存文件时，会偶尔弹出对话框问你是否购买，完全不影响使用。

[效果图](http://cl.ly/2W3R3o1K0F0e0a0h3s2S)

在这里记录一下自己的配置与修改(Mac版)，以备查用。

##Dev Builds
更新很频繁，下载页面在[这里](http://www.sublimetext.com/dev)。

##图标替换
默认图标真的很丑，GitHub上有个稍微漂亮点的：[链接](https://github.com/dmatarazzo/Sublime-Text-2-Icon)

##命令行
比如包管理，或下载某个文件等，非常强大。快捷键为 `Shift + Cmd + p`

##快速打开文件
`Cmd + p`

##包管理
利用[Sublime Package Control](http://wbond.net/sublime_packages/package_control)可以方便的安装下载管理Sublime Text 2的软件包。它支持自动升级，GitHub，BitBucket。安装很简单，先用 <code>Ctrl + `</code> 打开console，然后粘贴以下命令：

```
import urllib2,os; pf='Package Control.sublime-package'; ipp=sublime.installed_packages_path(); os.makedirs(ipp) if not os.path.exists(ipp) else None; urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler())); open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read()); print 'Please restart Sublime Text to finish installation'
```

或者你也可以去它的网站看[手动安装方法](http://wbond.net/sublime_packages/package_control/installation)。

##对齐插件
效果如下

``` javascript
// Before
var joe = 'joe';
var johnny = 'johnny';
var quaid = 'quaid';
 
// After
var joe    = 'joe';
var johnny = 'johnny';
var quaid  = 'quaid';
```

安装：

1. `Shift + Cmd + p`

2. 先保证安装了上条提到的包管理，然后输入"install"，接着选择 `Package Control: Install Package`

3. 找到"Alignment"，回车安装

4. 然后就可以用 `Shift + Cmd + a` 进行代码对齐

此插件和上面的包管理均来自同一开发者

##主题

目前比较流行的是[Soda主题](https://github.com/buymeasoda/soda-theme)，它托管在GitHub，所以安装起来很简单，只需在Sublime Text 2的Packages(Sublime Text 2/Packages)目录下运行

`git clone https://github.com/buymeasoda/soda-theme/ "Theme - Soda"`

要激活此主题则要打开首选项文件：`Sublime Text 2 -> Preferences -> Global Settings - User`，添加以下内容：

```
{
	"theme": "Soda Light.sublime-theme"
	//或者"theme": "Soda Dark.sublime-theme"
}
```

##利用Nettuts+Fetch获取远端文件
比如下载最新的jQuery等，直接一个命令即可。

[安装与使用](http://net.tutsplus.com/articles/news/introducing-nettuts-fetch/)

##命令行启动

`ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" ~/bin/subl`

这里要保证 `~/bin` 在你的路径里。 » [更多操作](http://www.sublimetext.com/docs/2/osx_command_line.html)

<span class="label label-info">Jekyll用户</span> 如果你在用[这个Gist](https://gist.github.com/1223405)来写新post而又想自动打开Sublime的话，只需将最后一行的 `system("vim #{filepath}")` 替换成 `system("subl #{filepath}")`

>待补充

» [更多信息](http://net.tutsplus.com/tutorials/tools-and-tips/sublime-text-2-tips-and-tricks/)
