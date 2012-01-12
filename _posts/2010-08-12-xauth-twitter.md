---
date: 2010-08-12 15:33:22
title: XAuth twitter 及第三方图床服务的验证
layout: post
tags:
    - iOS
    - twitter
categories:
    - 电脑
---
从本月16号twitter就只能用OAuth来进行帐号验证，XAuth是给例如iOS之类不方便用OAuth的平台提供的一个特殊验证方法。用此方法添加帐号时，用户仍需要输入用户名密码，接着程序就用此信息去twitter换取access_token，然后用户名密码就不再需要了，以后的工作和OAuth无异。

注：要使用XAuth，需要发右键给api@twitter.com索取一个Consumer key

至于如何不保存用户名密码使用第三方图床服务，如twitpic，则有些麻烦。twitter搞出了一个名为<a href="http://dev.twitter.com/pages/oauth_echo">OAuth Echo</a>的东西，这里简单介绍一下：

由于不保存用户名密码，所以你需要将本来用于发送到twitter的OAuth验证信息，如
<ul>
	<li>oauth_consumer_key,</li>
	<li>oauth_token</li>
	<li>oauth_signature_method</li>
	<li>oauth_signature</li>
	<li>oauth_timestamp</li>
	<li>oauth_nonce</li>
	<li>oauth_version</li>
</ul>
发送到twitpic，然后twitpic再用这个信息跑去twitter来验证一下你的资料，如果无误，则将你的图片发布并返回给你相关信息，但twitpic不能用上面的验证信息代替你发推，你需要再用twitpic返回给你的消息提取自己需要的，如图片地址，然后再发送到twitter，这样两边的信息显示都是"via 你的程序"。

详情请参考<a href="http://dev.twitter.com/pages/oauth_echo">此页面</a>。
