--- 
layout: post
title: Jekyll的代码高亮
date: 2011-10-27
published: true
comments: true
tags:
    - Jekyll
    - Blog
categories:
    - 电脑
---
Jekyll对在文章里高亮代码有着非常好的支持。

##2013-07-05更新

Jekyll现在已经支持用[Redcarpet](https://github.com/vmg/redcarpet)来处理markdown，并且在1.1以后的版本中， `Jekyll new` 新建的站点也将默认采用Redcarpet。目前只要在`_config.yml`中进行类似如下相关设置：

{% highlight yaml %}
markdown: redcarpet
redcarpet:
    extensions: ["fenced_code_blocks", "autolink", "tables", "strikethrough"]
{% endhighlight %}

以后的的代码高亮均可以采用如下格式：

{% highlight text %}
{% raw %}
{% highlight ruby %}
require 'rubygems'

def foo
puts 'foo'
end

#comment
{% endhighlight %}
{% endraw %}
{% endhighlight %}

显示效果如下：

{% highlight ruby %}
require 'rubygems'

def foo
  puts 'foo'
end

#comment
{% endhighlight %}

至于CSS的写法可以参考[这里](https://github.com/mojombo/tpw/blob/master/css/syntax.css)

##Inline Code

如果是在一句话中标记`Code`，像这样，则只需要用反引号 \` 包含相关文字就可以了。

##Pygments

Jekyll通过[Pygments](http://pygments.org/)支持超过[百种语言](http://pygments.org/languages/)的代码高亮，标记非常简单，基本就是highlight+语言名称:

{% highlight text %}
{% raw %}
{% highlight ruby %}
def foo
  puts 'foo'
end
{% endhighlight %}
{% endraw %}
{% endhighlight %}

详情见[官方文档](http://jekyllrb.com/docs/templates/)。

##gist嵌入

<s>不用插件的话可以直接用官方gist嵌入方法</s> 现在可以直接插入gist，方法如下：

{% highlight text %}
{% raw %}
{% gist 12345 %}
{% endraw %}
{% endhighlight %}

##Bootstrap

另外推荐twitter的开源项目[Bootstrap](http://twitter.github.com/bootstrap/)，利用它外加[Prettyprint](http://code.google.com/p/google-code-prettify/)可以方便快速的显示高亮代码。本站就是采用这个方案。
