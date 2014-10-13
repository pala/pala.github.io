---
layout: post
title: 3分钟建立一个Jekyll Blog
tags:
    - Blog
    - Jekyll
    - Git
    - GitHub
---

前提是你已经有了[GitHub](https://github.com/)账号和[配置好了git](http://help.github.com/mac-set-up-git/)。

## 建立一个新的repo

名字为`USERNAME.github.io`, **USERNAME** 为你的github用户名

## 克隆本站主题

2014-3-7 更新：因为本站原主题不再维护，转而使用另外一个开源主题 Lanyon，请按以下步骤建站：

{% highlight sh %}
# 请将下面操作中的USERNAME替换为你的GitHub用户名
$ git clone git@github.com:poole/lanyon.git USERNAME.github.io
$ cd USERNAME.github.io
$ git remote set-url origin git@github.com:USERNAME/USERNAME.github.io.git
{% endhighlight %}

最后push到github

{% highlight sh %}
$ git push origin master
{% endhighlight %}

## 完工

请访问 `USERNAME.github.io`

## 原主题

注：本站原主题现在放在 [pala](https://github.com/pala/pala.github.com/tree/pala) branch 下。如果想使用可以用以下方法：

{% highlight sh %}
git clone -b pala git@github.com:pala/pala.github.com.git USERNAME.github.io
{% endhighlight %}

### 预览

![](https://dl.dropbox.com/s/ak4f8dpyx9qqngq/blog.png)
