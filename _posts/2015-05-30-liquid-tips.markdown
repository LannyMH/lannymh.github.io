---
layout: post
title:  "Liquid and Jekyll Tips"
date:   2015-05-14
tags: ['Liquid','Jekyll']
---

一些使用Jekyll与Liquid的Tips。

在Post中高亮代码:

{% highlight liquid %}
{% raw %}
<!--XXX is the language that supported in Pygments or Rouge-->
{% highlight XXX %}
<!--Code snippet-->
{% endhighlight %}
{% endraw %}
{% endhighlight %}

Escape Liquid codes in Jekyll:

{% highlight liquid %}
{{ "{% raw " }}%}
<!--some codes-->
{{ "{% endraw " }}%}
{% endhighlight %}