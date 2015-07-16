/*
	jQuery 选项卡插件
	
	start_index: 初始显示标签页 (start from 1)
	transition_time： 动画时间
*/

;(function($){
	//写入jQuery prototype
	$.fn.tabs = function(options){
		options = $.extend({
			start_index: 1,
			transition_time: 400
		},options);

		return this.each(function(){
			var $this 		= $(this),
					$menu 		= $this.find('.examples-tabs-menu'),
					$menu_li 	= $menu.find('li'),
					$menu_a 	= $menu_li.find('a'),
					$contents = $this.find('.examples-tabs-content'),
					support_features = !Modernizr.opacity || !Modernizr.csstransitions;

			//向该DOM元素添加选项卡样式
			$this.addClass('examples-tabs');

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

		});
	}
})(jQuery);