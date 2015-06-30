/*
	jQuery 动态导航栏插件

	gap： 高亮按钮上下高度
	speed： 动画时间
	reset： 高亮回到原位时间
	bgColor： 背景色

*/

;(function($){
	//写入jQuery prototype
	$.fn.navigator = function(options){
		options = $.extend({
			gap: 20,
			speed:400,
			//easing:'easeInOutElastic', //需要jQuery UI
			reset:2000, //毫秒
			bgColor: '#eee'
		},options);

		return this.each(function(){
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
		});
	}
})(jQuery);