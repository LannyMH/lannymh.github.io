---
layout: example
title: Tab Panel 
type: Code
categories: ['HTML5+CSS3']
---

选项卡需要javascript支持，如果浏览器未开启JS，则按列表显示每一个标签页内容。

[Live Demo](/examples/tabpanel.html)

####基本的HTML结构
```html
<div id="examples-tabs-panel" class="examples-tabs">
	<!--标签部分-->
	<nav class="examples-tabs-menu examples-clearfix">
		<ul>
			<li><a href="#IDA">标签A</a></li>
			....
		</ul>
	</nav>
	<!--内容部分-->
	<div class="examples-tabs-content">
		<ul>
			<li id="IDA">
				<h3>内容题目</h3>
				<p>具体内容</p>
			</li>
			...
		</ul>
	</div>
</div>
```

####CSS设计

* 标签部分

1. 设置li的float使其水平对齐
2. 给a添加padding使其变大
3. 给a添加背，圆角，阴影
4. 设计hover与fucus, 已经class=active的高亮
5. 添加transition动画效果

```css
/* LESS */
.examples-tabs .examples-tabs-menu li {
	float: left;
	position: relative;
	margin-right: 2px;
}

.examples-tabs .examples-tabs-menu li a {
	display: block;
	padding: 0.5em 1.5em;
	background: #e5e9ea;
	color:#607291;
	font-size: 16px;
	.border-radius(7px 7px 0 0);
	.transition(all .2s);
}

.examples-tabs .examples-tabs-menu li:hover a,
.examples-tabs .examples-tabs-menu li a:focus,
.examples-tabs .examples-tabs-menu li.active a{
	padding-left: 2.2em;
	padding-right: 0.8em;
	background: #f9f9f9;
	.box-shadow(1px -1px 2px #5c5c5c);
}
```

* 内容部分

1. 外层div加上padding, 背景色，以及min-height，并设置position为relative
2. 给每一个li加上border与margin，并设置min-height
3. 在js开启的情况下，去掉border与margin，设置li的position为absolute，并重叠在一起
4. 在js开启的情况下，给active类加上z-index，将选中的内容放到最前面显示

```css
/* LESS */
.examples-tabs .examples-tabs-content{
	position: relative;
	min-height: 144px;
	padding: 2em;
	color:#607291;
	background: #f9f9f9;
	.box-shadow(2px 2px 2px #5c5c5c);
  .box-sizing(content-box); /* 不要将padding算入高度 */
}

.examples-tabs .examples-tabs-content li{
	min-height: 144px;
	margin-bottom: 20px;
	border-bottom: 1px solid #ededed;
	background:#f9f9f9;
}

.js .examples-tabs .examples-tabs-content li{
	position: absolute;
	top: 35px;
	left:15px;
	width: 95%;
	margin-bottom: 0;
	border-bottom: 0;
}

.js .examples-tabs .examples-tabs-content li.active{
	z-index: 10px;
}
```

####jQery部分

1. 设计一个可以初始化显示标签页的变量, 第一次打开时，向其内容与标签添加active class
2. 给标签中的&lt;a&gt;添加点击事件，删除所有acitve class，给选中项添加active class
3. 添加动画效果

```javascript
//将选项卡标签与内容捆绑，一起添加active class
$menu.add($contents).find('li:nth-child(' + options.start_index + ')').addClass('active');

//点击事件，激活某个选项卡
$menu_a.click(function(e){

	var $this = $(this),
			target = $this.attr('href'); //href里保存了相应的examples-tabs-content li的id

	$menu_li.removeClass('active');
	$this.parent().addClass('active');

	//fadeTo中的0与1是指opacity, 需要CSS支持opacity与transition
	$contents.find('li').fadeTo(options.transition_time,0,function(){
		$(this).removeClass('active').filter(target).addClass('active').fadeTo(options.transition_time, 1);
	});

	e.preventDefault(); //阻止默认的链接跳转动作
});
```











