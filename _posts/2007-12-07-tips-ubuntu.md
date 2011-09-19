--- 
categories: WordPressBackup
date: 2007-12-07 01:01:00 -05:00
layout: post
title: 几条Ubuntu小技巧
---
文件夹转ISO
<pre>mkisofs -A -I -J -L -r -o filename.iso /directory</pre>
use an ISO image
<pre>  sudo mkdir /media/iso
  sudo modprobe loop
  sudo mount filename.iso /media/iso -t iso9660 -o loop</pre>
You should be able to navigate to the /media/iso folder and see the contents of the ISO image. If you want to unmount the iso, use the following command:
<pre>  sudo umount /media/iso</pre>
列出加载模块
<pre class="code">lsmod 是列出目前系统中已加载的模块的名称及大小等；另外我们还可以查看 /proc/modules</pre>
查找含有某个字符串的文件
<pre class="code"> find . -type f -regex ".*" -print -exec grep "string" {} ;</pre>
禁止开机时的进度条
<pre class="code">sudo vim /boot/grub/menu.lst
splash 改为 nosplash</pre>
修改GRUB Menu Timeout值
<pre class="code">  sudo gedit /boot/grub/menu.lst</pre>
你会发现类似下面的一段:
<pre class="code">  ## timeout sec
  # Set a timeout, in SEC seconds, before automatically booting the default entry
  # (normally the first entry defined).
  timeout 3</pre>
timeout以秒计,重启后你就有相应的时间来选择你需要的菜单项.
显示已安装包的相关信息
<pre class="code">dpkg -s &lt;packagename&gt;</pre>
去掉”最近的文档”
<pre class="code">rm ~/.recently-used.xbel
mkdir ~/.recently-used.xbel</pre>
