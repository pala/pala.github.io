---
layout: post
title: Jekyll的代码高亮
date: 2011-10-27
published: true
comments: true
tags:
    - Jekyll
    - Blog
---
Jekyll对在文章里高亮代码有着非常好的支持。

## Inline Code

如果是在一句话中标记`Code`，像这样，则只需要用反引号 \` 包含相关文字就可以了。

## Pygments

Jekyll通过[Pygments](http://pygments.org/)支持超过[百种语言](http://pygments.org/languages/)的代码高亮，标记非常简单，基本就是highlight+语言名称:

{% highlight text %}
{% raw %}
{% highlight ruby linenos %}
def foo
  puts 'foo'
end
{% endhighlight %}
{% endraw %}
{% endhighlight %}

效果：

{% highlight ruby linenos %}
def foo
  puts 'foo'
end
{% endhighlight %}

详情见[官方文档](http://jekyllrb.com/docs/templates/)。

CSS的写法可以参考[这里](https://github.com/mojombo/tpw/blob/master/css/syntax.css)

## gist嵌入

<s>不用插件的话可以直接用官方gist嵌入方法</s> 现在可以直接插入gist，方法如下：

{% highlight text %}
{% raw %}
{% gist 12345 %}
{% endraw %}
{% endhighlight %}
