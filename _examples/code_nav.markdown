---
layout: example
title: Navigator
type: Code
categories: ['HTML5+CSS3']
---

###Navigtor Code Details

[Live Demo](/examples/navigator.html)

##CSS Part
```html
<nav id="examples-navigator">
	<ul class="examples-clearfix">
		<li class="examples-focus"><a href="#">Homepage</a></li>
		<li><a href="#">Post</a></li>
		<li><a href="#">Examples</a></li>
		<li><a href="#">Link</a></li>
	</ul>
</nav>
```

* Set each &lt;li&gt; float to left and use :last-child to remove the last border

```css
#examples-navigator li{
	list-style: none;
	float:left;
	border-right:1px solid #D0D0D0;
}

#examples-navigator li:last-child{ border:0; }
```

* Set background and color change in each &lt;a&gt;'s:hover and :focus

```css
#examples-navigator li a:hover,
#examples-navigator li a:focus,
#examples-navigator li.examples-focus a,{
	-webkit-border-radius: 6px;
	-khtml-border-radius: 6px;
	-moz-border-radius: 6px;		
	border-radius: 6px;
	box-shadow: 0px 0px 2px #69635a;
	/* 渐变 */
	background-image: -webkit-gradient(linear, left top, left bottom, from(#887963), to(#0b0a09));
	background-image: -webkit-linear-gradient(-90deg, #887963, #0b0a09);
	background-image: -moz-linear-gradient(-90deg, #887963, #0b0a09);
	background-image: -o-linear-gradient(-90deg, #887963, #0b0a09);
	background-image: -ms-linear-gradient(-90deg, #887963, #0b0a09);	
	background-image: linear-gradient(-90deg,#887963,#0b0a09); /* 90 度方向，从X颜色到Y颜色渐变*/	
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#776a57', endColorstr='#12100e',GradientType=0 );/* IE6-9 */ 
}
```

##jQuery
1. 创建一个新的&lt;li&gt;元素来实现高亮功能
2. 给新的&lt;li&gt;元素添加CSS效果, 让其位于初始位置
3. 添加mouseover与focus事件，让其移动
4. 添加click事件，删除和添加相应的高亮class

```javascript
var $nav = $(this),
		$current_item = $nav.find('.examples-focus'),
		$highlight = $('<li class="examples-highlight"/>'),
		reset;
$nav
	.css({position:'relative'})
	.find('a').css({
		position:'relative',
		zIndex:1 //避免被高亮框挡住
	});

//高亮框
$highlight.css({
	width:$current_item.outerWidth(),
	height:$current_item.outerHeight() + options.gap, //让其居中
	top:$current_item.position().top - (options.gap/2), //让其居中
	left:$current_item.position().left,
	backgroundColor: options.bgColor,
	position:'absolute'
}).appendTo($nav.find('ul'));

$nav.find('li')
	//获得焦点
	.bind('mouseover focusin', function(){
		clearTimeout(reset);
		$highlight.animate({
			left:$(this).position().left, //设成当前导航栏按钮的位置
			width:$(this).outerWidth() //设成当前导航栏按钮的大小
		}, { 
			duration: options.speed,
			queue: false
		});
	})
	//失去焦点
	.bind('mouseout focusout',function(){
		reset = setTimeout(function(){ //高亮框自动退回当前选择项
			$highlight.animate({
				left:$current_item.position().left, //设成当前导航栏按钮的位置
				width:$current_item.outerWidth() //设成当前导航栏按钮的大小
			},options.speed);
		},options.reset);
	})
	//点击
	.click(function() {	
		$(this)
			.siblings().removeClass('focus')
			.end().addClass('focus'); //end()将对象还原到$(this)
		$current_item = $(this);
	});
```




