--- 
layout: post
title: Responsive design
date: 2012-01-31 04:21:32
categories:
    - 电脑 
tags:
    - Bootstrap
---
Responsive design就是让网页根据浏览器分辨率的不同而有不同的排版，从而在iPhone，iPad等移动设备上有更好的浏览体验。

比如这个网站 [FOOD SENSE](http://foodsense.is/)，在各种浏览器宽度的变化下有着不同的布局。

[Bootstrap](https://github.com/twitter/bootstrap)里给了很好的示例，最简单的例子如下，只要根据不同的宽度设置不同的CSS就可以了。

<pre class="prettyprint linenums">
// http://twitter.github.com/bootstrap/
// Landscape phones and down
@media (max-width: 480px) { ... }

// Landscape phone to portrait tablet
@media (max-width: 768px) { ... }

// Portrait tablet to landscape and desktop
@media (min-width: 768px) and (max-width: 940px) { ... }

// Large desktop
@media (min-width: 1200px) { .. }
</pre>