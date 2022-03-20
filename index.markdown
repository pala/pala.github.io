---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

{% for post in site.categories['Passion'] limit: 1 %}<h2><a href="{{ post.url }}">Passion</a></h2>
{% endfor %}

{% for post in site.categories['PeopleOnStreet'] limit: 1 %}<h2><a href="{{ post.url }}">街头遇到的人们</a></h2>
{% endfor %}

{% for post in site.categories['DocumentaryPortraits'] limit: 1 %}<h2><a href="{{ post.url }}">肖像纪录片</a></h2>
{% endfor %}

{% for post in site.categories['Things'] limit: 1 %}<h2><a href="{{ post.url }}">万物有灵且美</a></h2>
{% endfor %}

<a href="/documentaryportraits/2021/09/10/guangzhou.html">![](/assets/EditorSelections/Cover.jpg)</a>
