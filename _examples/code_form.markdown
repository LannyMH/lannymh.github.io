---
layout: example
title: Fancy Form
type: Code
categories: ['HTML5+CSS3']
---

####HTML5 + CSS3 Form

[Live Demo](/examples/form.html)

####基本的HTML结构
1. HTML5中可以直接使用placeholder与required属性，同时也要考虑用javascript来实现非HTML5支持时以及无js支持时的场景。
2. HTML5中支持直接使用type来进行相应的验证。

```html
<form id="example-reg-form" method="post" action="#">
	<p>
		<label for="exmaple-f-name">Name</label>
		<input id="exmaple-f-name" name="exmaple-f-name" type="text" placeholder="Name" required />
	</p>
	<p>
		<label for="exmaple-f-phone">Phone</label>
		<input id="exmaple-f-phone" name="exmaple-f-phone" type="tel" placeholder="Phone" required />
	</p>
	<p>
		<label for="exmaple-f-email">Email</label>
		<input id="exmaple-f-email" name="exmaple-f-email" type="email" placeholder="Email" required />
	</p>
	<p>
		<label for="exmaple-f-website">Website</label>
		<input id="exmaple-f-website" name="exmaple-f-website" type="url" placeholder="WebSite" />
	</p>
	<p>
		<label for="exmaple-f-password">Password</label>
		<input id="exmaple-f-password" name="exmaple-f-password" type="password" placeholder="Password" required />
	</p>
	<p>
		<input id="exmple-f-terms" name="exmple-f-terms" type="checkbox" />
		<lable for="exmple-f-terms">
			I agree with this <strong><a href="#" target="_blank" rel="external">term</a></strong>!
		</label>
	</p>
	<p id="exmple-submit-wrap">
		<button type="submit" id="exmple-f-submit" title="Submit">+</button>
	</p>
</form>
```

####CSS设计
* 让登入窗口居中（demo里未添加）

1. 让窗口左上角定点移动到屏幕的中心（position+top+left）
2. 使用负值margin将窗口中心移到屏幕中心 （margin-top，margin-left）

```css
/* LESS */
@winHeight: 300px;
@winWidth: 400px;
.example-reg-form{
	position:absolute; 
	top:50%; 
	left:50%;
	width:@winWidth;
	min-height:@winHeight;
	margin-top: -1 * @winHeight/2;
	margin-left: -1* @winWidth/2;
}
```

* 动态icon - 将icon做成长条形图片，通过:focus控制background-position来显示相应的图标
* 动态输入框 - 添加:focus来控制width, border-color, background-color

```css
/* LESS */
#example-form-wrap input:not([type=checkbox]){
	width: 20em;
	border: 1px solid #cdcdcd;
	padding: 0.9em 0.5em 0.9em 2.5em;
	background: #f8f8f8 url(../../img/form/u_icons_splite.png) no-repeat;
	.box-shadow(inset 0px 0px 4px #dcdcdc);
	.border-radius(5px);
	.transition(all .1s);
}

#example-form-wrap input:not([type=checkbox]):focus{
	width: 25em;
	border-color: #7ccbe8;
	background-color: #fff;
}

@bg_init: 6px; //输入框背景初始位置
@bg_gap: 28px; //输入框背景间隔

#example-form-wrap #exmaple-f-name 				{background-position: 0 @bg_init;}
#example-form-wrap #exmaple-f-name:focus 	{background-position: 0 @bg_init - @bg_gap;}
#example-form-wrap #exmaple-f-phone 			{background-position: 0 @bg_init - @bg_gap * 2;}
...

/* 如果有placeholder或者javascript, 将label用blind隐藏 */
.blind{
  visibility: hidden;
  position: absolute;
  top: -10000px;
  height: 1px;
  width: 1px;
}
```

####JavaScript设计
1. 一个能隐藏label的函数
2. 给必填项的添加符号
3. 如果在不支持placeholder的浏览器里，使用input标签的value属性动态显示每个字段的名字

```javascript
function hideLabel(){
	$('label','#example-form-wrap').not('[for=exmple-f-terms]').addClass('blind');
}

function addRequiredStar(){
	var target = $('[required]','#example-form-wrap');

	$('<span/>', {
		text: '*',
		css:{
			'color':'#ff4248',
			'font':'bold 12px Verdana',
			'vertical-align':'middle',
			'margin-left':'5px'
		}
	}).insertAfter(target);
}

function altPlaceholder(){
	if(Modernizr.input.placeholder) return;

	$('input:not(:checkbox)').each(function(){
			var $this = $(this),
					input_holder=$this.attr('placeholder'); 

			$this
				.val(input_holder)
				.bind('focus', function(){
					if($this.val() !== '') $this.val('');
				})
				.bind('blur', function(){
					if($this.val() === '') $this.val(input_holder);
				});
	})
}
```















