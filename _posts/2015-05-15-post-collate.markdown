---
layout: post
title:  "Jekyll Posts 按时间分类"
date:   2015-05-15
tags: ['Jekyll','Liquid']
---

遍历所有的site.posts，并按年与月从新到旧显示。注意，site.posts会返回一个按年月排序的Array (A reverse chronological list of all Posts.)，所以核心代码只需要考虑如果分辨年月并显示。

{% highlight liquid %}
{% raw %}
<!-- Create a new var to hold the posts -->
{% assign posts_collate = site.posts %}

{% for post in posts_collate  %}
	<!--Some codes inside-->
{% endfor %}
<!--Clean the variable-->
{% assign posts_collate = nil %}
{% endraw %}
{% endhighlight %}

新建四个变量来保存年月数据
{% highlight liquid %}
{% raw %}

<!-- variables for post's year and month -->
{% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
{% capture this_month %}{{ post.date | date: "%B" }}{% endcapture %}
{% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}
{% capture next_month %}{{ post.previous.date | date: "%B" }}{% endcapture %}

{% endraw %}
{% endhighlight %}

{% highlight liquid %}
{% raw %}
<!--Show Year & Month if it is the first post-->
{% if forloop.first %}
  <h2>{{this_year}}</h2>
  <h3>{{this_month}}</h3>
  <ul>
{% endif %}
<!--显示文章链接-->
<li><span>{{ post.date | date: "%B %e, %Y" }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>

{% if forloop.last %}
  </ul>
{% else %}
  <!--显示上一个年或月-->
  {% if this_year != next_year %}
    </ul>
    <h2>{{next_year}}</h2>
    <h3>{{next_month}}</h3>
    <ul>
  {% else %}    
    {% if this_month != next_month %}
      </ul>
      <h3>{{next_month}}</h3>
      <ul>
    {% endif %}
  {% endif %}
{% endif %}

{% endraw %}
{% endhighlight %}

如果想从旧到新排列所有Posts，

1. Change the for loop to this:
  => 'for post in site.posts reversed'
2. Next make sure to change 'post.previous.date' to:
  => 'post.next.date'

Codes are based on [JekyllBoostrap](http://jekyllbootstrap.com/).
