---
layout: page
title: Categories
permalink: /category/
---
{% for category in site.categories %}[{{ category | first }}](#{{ category | first }}) {% endfor %}

{% for category in site.categories %}
<a name="{{ category | first }}"><h2>#{{ category | first }}</h2></a>

{% for post in category.last %}[{{ post.title }}]({{ post.url }}) <span style="float:right">{{ post.date | date_to_long_string }}</span>

{% endfor %}

{% endfor %}
