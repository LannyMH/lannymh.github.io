---
layout: page
---

## Blog Posts

<ul class="post-list">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

## To-Do

1. Add Local Comment Provider!
2. Add other Nav pages
