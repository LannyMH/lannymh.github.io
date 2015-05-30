---
layout: post
title:  "Jekyll Pagination and Recent Posts"
date:   2015-05-14
tags: ['Jekyll','Liquid']
---

Jekyll有内置分页功能, [Jekyll Pagination Docs][jekyll-pg].

[jekyll-pg]: http://jekyllrb.com/docs/pagination/

以下代码实现主页分页与只显示今年的文章。

{% highlight liquid %}
{% raw %}

{% capture site_year %}{{ site.time | date: "%Y" }}{% endcapture %}
<ul class="post-list">
  {% for post in paginator.posts %}
    {% capture post_year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% if post_year == site_year %}
      <!--文章链接-->
      <li><span>{{post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a><br/>
        <!--文章摘要-->
       <div class="archive-excerpt">{{ post.excerpt }}</div>
      </li>
    {% endif %}
  {% endfor %}
</ul>
<!--当有分页时显示导航按钮-->
{% if paginator.total_pages > 1 %}
  <nav>
    <ul class="pager">
      {% if paginator.previous_page %}
        <li><a href="{{ BASE_PATH }}{{paginator.previous_page_path}}">Previous</a></li>
      {% endif %}
      {% if paginator.next_page %}
        <li><a href="{{ BASE_PATH }}{{paginator.next_page_path}}">Next</a></li>
      {% endif %}
      <span class="page_number ">Page: {{ paginator.page }} of {{ paginator.total_pages }}</span>
    </ul>
  </nav>
{% endif %}

{% endraw %}
{% endhighlight %}