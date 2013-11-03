---
layout: post
title: 开源与社会化的blog
categories: 网志
tags:
  - Jekyll
  - Blog
  - GitHub
---
细心的读者（画外音：根本没几个读者好吧，别再分类成细心不细心了！）应该可以发现本站每篇文章的下面多了一个 `编辑本文` 链接。

一般人可能会想，如果任何人都可以编辑的话这不就乱套了吗？其中的~~汰渍~~奥妙要从本站的基础设施：GitHub和Jekyll说起。

##GitHub

GitHub的[自我介绍](https://github.com/about)如下：

>**GitHub is the best place to share code** with friends, co-workers, classmates, and complete strangers.

也就是说，你在GitHub上面新建了一个开源项目，任何用户都可以随意复制一份到自己的账号下面（fork），然后修补bug，添加新功能等。接着，此用户可以选择将自己的更新发送给你（send pull request）。然后你可以查看此用户修改了什么地方，然后决定是否将这些修改应用到你自己的项目里（merge）。如果merge成功，那么你自己的项目里所有的贡献者（contributors）里就会出现此用户的名字。

如果你的项目非常流行，那么会有很多人会愿意fork一个版本，然后为这个项目贡献代码，从而产生了一个包含了集体智慧的优秀开源项目。

##Jekyll

[Jekyll](http://jekyllrb.com/)是GitHub上最流行的项目之一，但这里说的不是Jekyll本身，而是你用Jekyll生成的blog，不了解的话可以看我以前的[介绍]({% post_url 2011-09-12-jekyll-and-github-pages %})。

简单来说就是你按Jekyll的格式要求把自己blog的原始文章与模板文件等作为一个普通的开源项目托管到GitHub，然后GitHub会在自己服务器上通过Jekyll为你生成一个blog站点。因为本质上你的blog和其他GitHub上的开源项目无异，自然其他人也可以修改你的文章，然后向你发送pull request。

因为现在GitHub是支持在线编辑文件的，所以如果你有GitHub账号，点击文章底部的 `编辑本文` 的话，浏览器会自动转到此文章在GitHub上的源文件。从而很方便的在线编辑并且提交你的修改。

##举个栗子

假设你去了一个很美的地方，回来后写了一篇详细的攻略介绍此次出行，并且留下了很多个人的宝贵经验，比如怎么找旅馆，坐车等常遇到的问题。很多人Google到了你的文章并作为旅行参考。

再假设几个月后那个很美的地方已经被拆迁的大变样了，所以你这篇游记的价值已经大打折扣，甚至会起反作用。

再再假设有另外一个人刚好看过了你的blog，去了那个大变样的地方，因为你的游记遇到很多麻烦事，他/她回来后会怎样？在心里大骂你消息不准！

或者，他/她本着造福后来人的高尚想法，按照最新的经历编辑你的游记并向你提交修改。你动动手指头接受了这次编辑，bang！一篇紧跟时代并且符合事实的高质量新游记就出炉了。包含了你和那个陌生人的亲身经历（aka集体智慧）。如果你愿意，你可以通过一定的设置来把此文章的作者显示为你们两个人。

经常写技术blog的朋友，你是否也囤积了一些早就过期的教程呢？

##延伸与设想

[Ted](http://www.ted.com/)有个我很喜欢的口号： **Ideas worth spreading**。对于每一个普普通通的人，可能在心里都有不少 **Ideas worth spreading and upgrading**。很多人有着类似的ideas，类似的爱好，类似的经验等。如果能像开源软件一样将这些值得分享与总结的攻略，故事，经验等综合起来，相信也是非常有价值的。

Quora在这方面做的很好，但有一个问题是，如果没人问某个特定问题，某些故事可能会永远地埋在某个人的心里。比如前几天我在上面看到的类似「911那天在世贸大楼里是怎样的感觉」等。如果能将Quora反过来，让每个普通人主动去分享自己的故事或见解，其他人可以给予自己的修改与补充，相信也挺不错的。听起来很熟悉？这不就是传统意义上blog的作用吗，想到一些东西写了出来，或者看到一些我感兴趣的东西，我跑去留言说了句顶。

GitHub和Jekyll的出现已经让传统的blog有了再进化的可能，比如fork，比如上文说的「修改文章」，另外也不用担心服务器突然挂掉或者blog被不可知的力量删除。

现在的SNS巨人fb有个问题是我follow了一个人，就基本上follow了这个人所分享的一切（当然，fb上可以通过很难用的设置来过滤一些内容）。承认吧，相对于「某个人」来说，你可能对「某个话题」更感兴趣，你的fb好友里有多少是那种「他/她分享的东西我完全不感兴趣」类型的。

现在在GitHub上，你可以follow一个人，也可以不follow而只关注他/她的某个项目，甚至只是Star而不Watch这个项目（Watch会在timeline里看到所有的commit）。如果能将这些操作修改一下并应用到普通的SNS上，比如我只关心朋友A分享的「游记」而不关心A每天吃了什么。我便可以只关注朋友A的分享和话题「游记」这两者之间的交集，其中包括他/她写了什么「游记」和给别人的「游记」做了什么补充。作为内容发布者，我可能完全不需要一个严格意义上的blog，我只是偶尔写一点东西，在某个话题下发表一些自己的想法。[Medium](https://medium.com/about/9e53ca408c48)？

##问题与局限性

1. <a href="http://www.zazzle.com/no_one_cares_about_your_stupid_blog_tshirt-235414440311158567"><img src= "http://rlv.zcache.com/no_one_cares_about_your_stupid_blog_tshirt-r4509c5184c86419eb44bacfe373442cf_vjfew_325.jpg"></a>

2. 门槛，操作复杂性。但fb超便利的分享操作也是造成大量垃圾无趣信息的根源之一。

3. 隐私问题，你发表的东西可能永远也删除不了了。

等等等等。

##题外话

![](https://dl.dropbox.com/s/499yp8dh89g9rin/Photo%20on%207-6-13%20at%207.30%20PM.jpg)

最近在[Coursera](https://www.coursera.org/)上一门公开课：[Startup Engineering](https://www.coursera.org/course/startup)。这门课会教做Startup的各种相关知识，技术上的，思想上的。最后的大作业是自己搞一个网站出来，募集BitCoin。目前打算根据上述乱七八糟的想法做一个原型出来。
