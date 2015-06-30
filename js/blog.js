
//Add Bootstrap table class to markdown tables
;(function($){
	$(function(){
		$(".post-content").find("table").addClass('table table-striped');
	})
})(jQuery);
