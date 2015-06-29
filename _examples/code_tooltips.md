---
layout: example
title: Tooltip
type: Code
categories: ['HTML5+CSS3']
---

###Tooltip Code Details

[Live Demo](/examples/tooltips.html)

* 每一个Tooltip就是一个div元素，有背景颜色，边框，预先设定透明度为0，之后利用CSS3 transition + hover与focus伪类来动态显示整个框

```css
a.example-tooltip .example-tooltip-box{
	opacity: 0;
	width: 20em;
	padding: .8em;
	background-color:#111;
	position: absolute;
	bottom: 110px;
	margin-left: -10.4em;
	left:50%;
	border-radius: 15px 0px;
	transition:all .4s ease-in .3s;
}

a.example-tooltip:hover .example-tooltip-box,
a.example-tooltip:focus .example-tooltip-box {
	opacity: 1;
	bottom:100px;
}
```

* 使用border-radius来实现圆形块状元素

```css
	border-radius: 55px;
	-webkit-border-radius:55px;
	-khtml-border-radius:55px;
	-moz-border-radius:55px;
```

* 使用hover与focus来做边框高亮

```css
a.example-tooltip:hover, a.example-tooltip:focus {
	border-color: #fff;
}
```

* 使用:before与content(在所有该元素之前插入一个content所设的内容)来做tooltip的底部三角块

```css
a.example-tooltip .example-tooltip-box:before {
	content: '';
	position: absolute;
	bottom:-10px;
	left:155px;
	border-top: 10px solid #111;
	border-left: 10px solid transparent;
	border-right:10px solid transparent; 
}
```




