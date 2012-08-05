--- 
layout: post
title: UIToolbarPosition
date: 2012-08-05 13:29:30
categories:
    - 电脑
tags:
    - iOS
---
<pre class="prettyprint">
[[UIToolbar appearance] setBackgroundImage:[UIImage imageNamed:@"toolbarBackgroundImage"]
                            forToolbarPosition:UIToolbarPositionTop
                                    barMetrics:UIBarMetricsDefault]
</pre>

上面这句只有当`UIToolbar`在屏幕的最顶端时才有效，而非它所在的view的最顶端。如果`UIToolbar`在一个view的顶端而这个view就像是twitterbot的timeline一样上面有一定的空间，那么此toolbar的位置仍然不是`UIToolbarPositionTop`。如果系统是iOS6的话，这点区别就会有很大的不同，因为默认的`shadowImage`只有在toolbar的位置为`UIToolbarPositionTop`的时候才会出现在下方。所以toolbar如果不在屏幕的顶端的话，你看到的阴影始终在它上面。