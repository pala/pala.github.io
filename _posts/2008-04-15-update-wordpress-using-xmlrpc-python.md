--- 
categories: WordPressBackup
date: 2008-04-15 13:40:00 -04:00
layout: post
title: "xmlrpc + Python更新wordpress"
---
基本框架就是这样

[sourcecode language='py']

import xmlrpclib
username = "admin"
password = "password"
blog_url = "YOUR URL"+"/xmlrpc.php"
title="TITLE OF POST"
content="CONTENT OF POST"
wp = xmlrpclib.ServerProxy(blog_url)
post = {'title':title, 'description':content}
wp.metaWeblog.newPost('',username,password,post,1)

[/sourcecode]
