---
layout: post
title: 用Gollum搭建基于Git的Wiki
date: 2012-02-01 16:57:14
tags:
    - Git
    - GitHub
---
[Gollum](http://github.com/github/gollum)是一个简单的基于Git的wiki系统，GitHub的Wiki即是由它生成。

它和[Jekyll](http://mojombo.github.com/jekyll)一样，支持用markdown编写。

它同时带有一个本地的前端，你可以在浏览器里编写保存页面，系统会在背后自动commit。因为它是一个Git repo，所以你也可以把它push到GitHub。只要在你的已有repository的地址后加上 `.wiki`，那么你push过去之后它便成为你那个repository的wiki。这是你在这个前端里的保存也会被Gollum自动push到GitHub。

要在本地运行这个wiki，你需要在它的目录下运行 `gollum`，然后即可以在[http://localhost:4567](http://localhost:4567)访问你的wiki了。

如果你想更加简单些，不想每次都输入命令。那么可以利用37signals的开源项目[pow](https://github.com/37signals/pow)，一个运行在Mac OS X上的完全不需要配置的Rack Server。

安装pow后，需要在wiki目录下新建文件 `config.ru`，内容如下：

{% highlight ruby %}
require 'rubygems'
require "gollum/frontend/app"

Precious::App.set(:gollum_path, File.dirname(__FILE__))
Precious::App.set(:wiki_options, {})
run Precious::App
#https://github.com/tecnh/gollum/wiki/Gollum-and-Passenger
{% endhighlight %}

接着把wiki链接到.pow下：
{% highlight sh %}
cd ~/.pow
ln -s ~/path/to/wiki wiki
{% endhighlight %}

这样以后只要在浏览器里访问[http://wiki.dev](http://wiki.dev)就行了。xxx.dev的xxx代表着你链接到.pow里的目录名，这里就是wiki。

Gollum和Jekyll不一样，你如果把它当成一个普通的repository，而不是上文说的地址后加上.wiki，push到GitHub，它不会为你自动生成一个类似http://xxx.github.com的静态站点，它和GitHub Pages不是一个概念，如果你想在一个把这个wiki作为一个站点的话，那么只能利用另一个工具[gollum-site](https://github.com/dreverri/gollum-site)把它生成一个静态网站再上传到服务器。
