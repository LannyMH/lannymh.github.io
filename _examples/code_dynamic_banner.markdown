---
layout: example
title: Dynamic Banner
type: Code
categories: ['HTML5+CSS3']
---

###Dynamic Banner Code Details

[Live Demo](/examples/dynamic_banner.html)

1. 将各个显示元素设定好开始的位置
2. 在hover与focus中设定元素最后的位置
3. 使用css3的transition来设定动画效果

```html
<a class="banner" href="#">
	<img class="banner-logo"  ... />
	<p class="banner-desc">
		...
	</p>
	<p class="banner-desc-extra">
		...
	</p>
</a>
```

```css
a.banner {
	position: relative;
	display: block;
	width: 600px;
	height: 176px;
	border: 1px solid #555;	
	background: url(../../img/banner/banner-arrow.png) no-repeat -100px 140px,
				url(../../img/banner/banner-09.png) no-repeat -20px -380px,
				url(../../img/banner/banner-bg.png) no-repeat 0 0;
	transition:background-position .2s ease-in .2s;
}

a.banner:hover, a.banner:focus{
	background-position: 20px 140px,
						-20px 90px,
			 			0 0;
}

a.banner .banner-desc{
	...
	position: absolute;
	top:35px;
	left:170px;
	opacity: 0;
	transition:all .2s ease-in .2s;
}

a.banner:hover .banner-desc,
a.banner:focus .banner-desc{
	opacity: 1;
}
```
