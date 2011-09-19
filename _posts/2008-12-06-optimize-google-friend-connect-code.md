--- 
categories: WordPressBackup
date: 2008-12-06 17:33:19 -05:00
layout: post
title: "优化Google Friend Connect 嵌入代码"
---
加入<a href="http://ztnote.com/2008/12/try-google-friend-connect/" target="_blank">Google Friend Connect</a>(以下简称GFC)后用<a href="https://addons.mozilla.org/en-US/firefox/addon/1843" target="_blank">Firebug</a>测试发现网页加载速度稍慢了一些, 为了不影响网页其他元素的加载, 可以通过把GFC的javascript代码放入footer的方式去除这种影响. 如果网页上同时使用了多个Gadgets, 也可以合并部分相同代码.

<!--more-->

下面这些是Members Gadgets的嵌入代码, 其中红色部分用来显示你的Gadget, 这样我们可以把除此部分的其他代码放入到WordPress的Footer里.

<span style="color:#003366;">&lt;!-- Include the Google Friend Connect javascript library. --&gt;
&lt;script type="text/javascript" src="http://www.google.com/friendconnect/script/friendconnect.js"&gt;&lt;/script&gt;</span>

<span style="color:#003366;">&lt;!-- Define the div tag where the gadget will be inserted. --&gt;
<span style="color:#ff0000;">&lt;div id="div-***" style="width:282px;border:1px solid #cccccc;"&gt;&lt;/div&gt;</span>
&lt;!-- Render the gadget into a div. --&gt;
&lt;script type="text/javascript"&gt;
var skin = {};
skin['HEIGHT'] = '385';
skin['BORDER_COLOR'] = '#cccccc';
skin['ENDCAP_BG_COLOR'] = '#e0ecff';
skin['ENDCAP_TEXT_COLOR'] = '#333333';
skin['ENDCAP_LINK_COLOR'] = '#0000cc';
skin['ALTERNATE_BG_COLOR'] = '#ffffff';
skin['CONTENT_BG_COLOR'] = '#ffffff';
skin['CONTENT_LINK_COLOR'] = '#0000cc';
skin['CONTENT_TEXT_COLOR'] = '#333333';
skin['CONTENT_SECONDARY_LINK_COLOR'] = '#7777cc';
skin['CONTENT_SECONDARY_TEXT_COLOR'] = '#666666';
skin['CONTENT_HEADLINE_COLOR'] = '#333333';
google.friendconnect.container.setParentUrl('/' /* location of rpc_relay.html and canvas.html */);
google.friendconnect.container.renderMembersGadget(
{ id: 'div-****',
site: '****'},
skin);
&lt;/script&gt;</span>

如果你同时使用了多个Gadgets, 那么可以发现他们的大部分代码都是相似的, 比如显示什么颜色等. 以Wall Gadgets为例, 你也可以只保留红色部分在需要显示的地方:

<span style="color:#003366;">&lt;!-- Include the Google Friend Connect javascript library. --&gt;
&lt;script type="text/javascript" src="http://www.google.com/friendconnect/script/friendconnect.js"&gt;&lt;/script&gt;</span>

&lt;!-- Define the div tag where the gadget will be inserted. --&gt;
<span style="color:#ff0000;">&lt;div id="div-****" style="width:282px;border:1px solid #cccccc;"&gt;&lt;/div&gt;</span>
&lt;!-- Render the gadget into a div. --&gt;
&lt;script type="text/javascript"&gt;
var skin = {};
skin['BORDER_COLOR'] = '#cccccc';
skin['ENDCAP_BG_COLOR'] = '#e0ecff';
skin['ENDCAP_TEXT_COLOR'] = '#333333';
skin['ENDCAP_LINK_COLOR'] = '#0000cc';
skin['ALTERNATE_BG_COLOR'] = '#ffffff';
skin['CONTENT_BG_COLOR'] = '#ffffff';
skin['CONTENT_LINK_COLOR'] = '#0000cc';
skin['CONTENT_TEXT_COLOR'] = '#333333';
skin['CONTENT_SECONDARY_LINK_COLOR'] = '#7777cc';
skin['CONTENT_SECONDARY_TEXT_COLOR'] = '#666666';
skin['CONTENT_HEADLINE_COLOR'] = '#333333';
<span style="color:#008000;">skin['DEFAULT_COMMENT_TEXT'] = '- add your comment here -';
skin['HEADER_TEXT'] = 'Comments';
skin['POSTS_PER_PAGE'] = '5';
google.friendconnect.container.setParentUrl('/' /* location of rpc_relay.html and canvas.html */);
google.friendconnect.container.renderWallGadget(
{ id: '*****',
site: '****',
'view-params':{"scope":"SITE","features":"video,comment"}
},
skin);</span>
&lt;/script&gt;

从上可以看出, 两段嵌入代码有大量重复. 如果你需要风格一样的Members Gadget和Wall Gadget, 那么仅仅需要将上面代码的绿色部分粘贴到Members Gadget代码的对应位置即可. 完全不需要重复定义颜色和插入两次friendconnect.js.
