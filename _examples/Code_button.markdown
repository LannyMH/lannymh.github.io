---
layout: example
title: Buttons
type: Code
categories: ['HTML5+CSS3']
---

[Live Demo](/examples/button.html)

####使用CSS来美化&lt;a&gt;，使其看上去像按钮

1. 使用 padding: xxxem xxxem + font-size来设置按钮大小
2. 给按钮加上背景色，阴影，边框
3. 给 a:hover a:focus加上另一种颜色，设计出高亮效果

```css
/* LESS 代码 */
.examples-button{
	text-decoration: none !important; //加上!important使其不受内嵌css影响
	cursor: pointer; //设置指针为手指
	border: 1px solid #ccc;
	padding: 1em 1.5em;  //根据字体大小来变化按钮大小
	background-color: #e0e0e0;
	color:#232323;
	font: 14px/1 Verdana, Arial;
	text-shadow:1px 1px #f2f2f2;
	.inset-box-shadow(0px,0px,4px,#787878); //使用内阴影
	.button-gradient; //渐变

	//添加 & 来支持嵌套与扩展
	&:hover,&:focus{ 
		outline: 0;
		.button-gradient(#eee,none,#fff,#c0c0c0);
	}

	&.examples-ko {font-family: 'Nanum Gothic','Dotum','Sans-Serief'}
	&.examples-xx-small{font-size: 10px;}
	&.examples-x-small{font-size: 11px;}
	&.examples-small{font-size: 12px;}
	&.examples-big{font-size: 18px;}
	&.examples-x-big{font-size: 20px;}
	&.examples-xx-big{font-size: 22px;}

	&.examples-round{.border-radius(5px);}
	&.examples-rounder{.border-radius(15px);}
	&.examples-roundest{.border-radius(30px);}

	//颜色扩展类，包括其hover与focus变化
	&.examples-red {
		border: 1px solid #8C484F; 
		color: #121212 !important;
		.button-gradient(@red_bc, none, @red_bc, @red_ec);
		&:hover, &:focus { 
			.button-gradient(@red_bc, none, lighten(@red_bc, 10%), lighten(@red_ec, 10%)); 
		}
	}

	&.examples-orange {
		border: 1px solid #89614A;
		color: #121212 !important;
		.button-gradient(@orange_bc, none, @orange_bc, @orange_ec);
		&:hover, &:focus {
			.button-gradient(@orange_bc, none, lighten(@orange_bc, 10%), lighten(@orange_ec, 10%)); 
		}
	}

	&.examples-yellow {
		border: 1px solid #d1c78c; 
		color: #121212 !important;
		.button-gradient(@yellow_bc, none, @yellow_bc, @yellow_ec);
		&:hover, &:focus { 
			.button-gradient(@yellow_bc, none, lighten(@yellow_bc, 10%), lighten(@yellow_bc, 10%)); 
		}
	}

	&.examples-green {
		border: 1px solid #6c8e3b; 
		color: #121212 !important;
		.button-gradient(@green_bc, none, @green_bc, @green_ec);
		&:hover, &:focus { 
			.button-gradient(@green_bc, none, lighten(@green_bc, 10%), lighten(@green_bc, 10%)); 
		}
	}

	&.examples-blue {
		border: 1px solid #3665ac; 
		color: #121212 !important;
		.button-gradient(@blue_bc, none, @blue_bc, @blue_ec);
		&:hover, &:focus { 
			.button-gradient(@blue_bc, none, lighten(@blue_ec, 10%), lighten(@blue_ec, 10%)); 
		}
	}

	&.examples-navy {
		border: 1px solid #45596d; 
		color: #121212 !important;
		.button-gradient(@navy_bc, none, @navy_bc, @navy_ec);
		&:hover, &:focus { 
			.button-gradient(@navy_bc, none, lighten(@navy_bc, 10%), lighten(@navy_ec, 10%)); 
		}
	}
	
	&.examples-purple {
		border: 1px solid #7c4073; 
		color: #121212 !important;
		.button-gradient(@purple_bc, none, @purple_bc, @purple_ec);
		&:hover, &:focus { 
			.button-gradient(@purple_bc, none, lighten(@purple_bc, 10%), lighten(@purple_ec, 10%)); 
		} 
	}

	&.examples-pink {
		border: 1px solid #af6783; 
		color: #121212 !important;
		.button-gradient(@pink_bc, none, @pink_bc, @pink_ec);
		&:hover, &:focus { 
			.button-gradient(@pink_bc, none, lighten(@pink_bc, 10%), lighten(@pink_ec, 10%)); 
		}
	}
}
```

####使用到的Less函数，能自动生成不同浏览器的前缀

```css
/* LESS 函数 */
//外部阴影
.box-shadow(@x:1px, @y:1px, @blur:0px, @color: #212121){
	-webkit-box-shadow:@arguments;
	-moz-box-shawdow:@arguments;
	box-shadow: @arguments;
}

//内部阴影
.inset-box-shadow(@x:1px, @y:1px, @blur:0px, @color: #212121){
	-webkit-box-shadow:inset @x @y @blur @color;
	-moz-box-shawdow:inset @x @y @blur @color;
	box-shadow: inset @x @y @blur @color;
}

//渐变
//@bs：开始颜色，@be：结束颜色
.button-gradient(@bgc:#e5e5e5, @img_url:none, @bs: #fff, @be:#cecece){
	background-color: @bgc;
	background-image: @img_url, @img_url, -webki-gradient(linear, left top, left bottom, from(@bs), to(@be));
	background-image: @img_url, @img_url, -moz-linear-gradient(@bs,@be);
	background-image: @img_url, @img_url, -o-linear-gradient(@bs,@be);
	background-image: @img_url, @img_url, -ms-linear-gradient(@bs,@be);
	background-image: @img_url, @img_url, linear-gradient(@bs,@be);
}

//圆角
.border-radius(@radius:8px){
	-webkit-border-radius:@radius;
	-moz-border-radius:@radius;
	-khtml-border-radius:@radius;
	border-radius:@radius;
}
```
