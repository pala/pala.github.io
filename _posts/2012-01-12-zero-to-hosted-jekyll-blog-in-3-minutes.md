--- 
layout: post
title: 3分钟建立一个Jekyll Blog
date: 2012-01-12
categories:
    - 电脑
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

```sh
# 请将下面操作中的USERNAME替换为你的GitHub用户名
$ git clone git@github.com:pala/pala.github.com.git USERNAME.github.io
$ cd USERNAME.github.io
$ ./cleanup #will delete all my posts and pages
$ git remote set-url origin git@github.com:USERNAME/USERNAME.github.io.git
```

接着请按需要编辑以下文件：

1. _config.yml

2. CNAME (如果不绑定域名请删除)

3. _layouts/default.html (修改顶部导航超链接)

最后push到github

```sh
$ git push origin master
```

##完工

请访问 `USERNAME.github.io`
