$(document).ready(init);

function init(){
	hideLabel();
	addRequiredStar();
	altPlaceholder();
}

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