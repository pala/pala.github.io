---
date: 2010-08-12 15:38:00
title: GAE 上备份微博的 Python 程序
layout: post
tags:
    - blog
    - Python
categories:
    - 电脑
---
程序目的：每天定时将当天发布的微博整理下来发送到邮箱

主程序：
<pre>
#!/usr/bin/python
# -*- coding: utf-8 -*-
import urllib2
from datetime import datetime, date, time
import base64
import cgi
from google.appengine.api import mail
from google.appengine.ext import db #如果你要存到GAE数据库的话

try:
    from django.utils import simplejson  # GAE上使用json的方法
    parse_json = lambda s: simplejson.loads(s.decode("utf-8"))
except ImportError:
    import json #GAE 不支持 json
    parse_json = lambda s: json.load(s)

class Twitter(object):
    def __init__(self, nickname=None, password=None):
        self.nickname = nickname;
        self.password = password;
    def fetch_feed(self):
        request = urllib2.Request("请求地址，详情参阅twitter，新浪微博文档")
        if self.nickname and self.password
            pair = "%s:%s" % (self.nickname, self.password)
            token = base64.b64encode(pair)
            request.add_header("Authorization", "Basic %s" % token)

        stream = urllib2.urlopen(request)
        results = parse_json(stream.read())
        return results

def _fetchTweets():
    session = Twitter("你的id", "你的密码")
    feed = session.fetch_feed()
    html = "" #用来存放html版的结果然后发到Gmail

    #中间parse返回结果的代码就不写了，总之就是处理字符串

    if len(html)&gt;0:
        mail.send_mail(sender="发送方email",
                to="接收方email",
                subject="标题",
                body="正文，上面这四个是必须参数，html则为html版正文",
                html=html.encode("utf-8"))

if __name__ == "__main__":
    _fetchTweets()
</pre>
定义Cron Job的cron.yaml
cron:
- description: tweets backup
  url: /tweetsbackup/.*
  schedule: every day 00:00
  timezone: America/New_York

如果你想发送到wordpress或其他支持xmlrpc的blog，则可以参考以下代码（未经验证）：
<pre>
import xmlrpclib
username = "admin"
password = "password"
blog_url = "blog地址"+"/xmlrpc.php"
title="TITLE OF POST"
content="内容"
wp = xmlrpclib.ServerProxy(blog_url)
post = {'title':title, 'description':content}
wp.metaWeblog.newPost('',username,password,post,1)
</pre>
