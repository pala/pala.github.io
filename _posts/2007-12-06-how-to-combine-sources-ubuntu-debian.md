--- 
categories: WordPressBackup
date: 2007-12-06 23:45:36 -05:00
layout: post
title: "Howto:合并使用Ubuntu和Debian的源"
---
<span id="ctl00_MainContentPlaceholder_ctl01_ctl00_lblEntry">有时我们需要一些Debian源里有可Ubuntu源里没有的包，这个方法就是说明如何合并两者,但不确定是否会造成系统的安全隐患。

打开/etc/apt/sources.list,添加如下两行：

<code style="margin:0;"> deb http://ftp.us.debian.org/debian testing main non-free contrib
deb http://ftp.us.debian.org/debian unstable main non-free contrib</code>

添加Debian的gpg keyring：

<code style="margin:0;">$ wget http://ftp-master.debian.org/archive-key-4.0.asc</code>

<code style="margin:0;">$ gpg --import archive-key-4.0.asc
gpg: key 6070D3A1: "Debian Archive Automatic Signing Key (4.0/etch) &lt;ftpmaster@debian.org&gt;" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1</code>

<code style="margin:0;">$ gpg --fingerprint 6070D3A1
pub   1024D/6070D3A1 2006-11-20 [expires: 2009-07-01]
Key fingerprint = A999 51DA F9BB 569B DB50  AD90 A70D AF53 6070 D3A1
uid                  Debian Archive Automatic Signing Key (4.0/etch) &lt;ftpmaster@debian.org&gt;</code>

<code style="margin:0;">$gpg --armor --export 6070D3A1 | sudo apt-key add -
OK</code>

接着创建/etc/apt/apt.conf，并添加：

<code style="margin:0;">APT::Default-Release "gutsy";</code>

这样可以优先选择gutsy的源，而不管版本新旧。接着update，然后就可以安装Debian源里unstable或者testing的包了

<code style="margin:0;">$ sudo apt-get install -t unstable packagename</code>

<code style="margin:0;">$ sudo apt-get install -t testing packagename</code> </span>
