--- 
categories: WordPressBackup
date: 2008-11-18 16:48:58 -05:00
layout: post
title: 将域名从Lunarpages转移到GoDaddy
---
在lunarpages买的域名,无论是买空间送的还是单买的,管理起来都不是很方便.比如,如果你想给域名添加一个CNAME项,还必须给客服写邮件让他们帮你修改,相当麻烦.所以昨天我将此网站的域名从Lunarpages转移到了GoDaddy.这里写一下转移的过程.

<!--more-->

1.费用

转移域名本身是不收费的,不过由于域名每次转移,有效期也会在原来的基础上自动扩展一年,这样你需要付给GoDaddy一年的域名费用,一般5-10美元不等.

2.转移过程

在GoDaddy主页上选择转移域名, Domains -&gt; Transfer Domains to GoDaddy, 填写你要转移的域名, 接着GoDaddy会给出一系列的相关折扣诱惑你,忽略,当然你也可以把相关域名如org,info全都给买了.

所有填写完毕后就是付钱.域名的转移如果没成功的话这个钱不会从你的卡中扣除.

接下来你会收到三封来自GoDaddy的信,分别是收据,转移通知和转移确认.

在转移通知里,GoDaddy会给你一个链接,详细讲解了域名转移的整个过程.接着会给你两个号码:Transaction ID和Security Code. 根据讲解过程进行域名转移,中间会让你填写这两个号码.

另外一个需要填写的号码是authorization code.如果你是在lunarpages买的域名,则需要登录你的域名管理网站:http://manage.opensrs.net. 填写域名,用户名及密码. 然后到Domain Extras里复制Domain Auth Code.

一切填写完毕后就是等待,这时转移状态上会显示"Pending Current Registrar Approval",我以为需要联系lunarpages的客服进行approve,然后发了封email过去,被告知填写Auth Code后只要等待就可以了.

第二天,你会收到原来的域名管理网站(OpenSRS)的邮件问你是否确定转移域名,确认无误后很快就会收到GoDaddy的转移完成邮件.

3.修改DNS

转移后的域名默认的DNS是lunarpages的.当然你可以保留,这样的话仍然不能自己进行增加CNAME等操作.如果这个域名仍然要映射到lunarpages的空间,那么可以将DNS改为GoDaddy的,然后将A记录修改为指向lunarpages的IP或者你自己的独立IP.接下来此域名的管理完全在GoDaddy这里.
