$(function(){
	menu();
});

function menu(){
	$('body').on('click', 'nav .sub_wrap .main_menu' , function (){
		var $sub_wrap = $(this).parent('.sub_wrap').children('ul');

		$('.main_menu').removeClass('click');
		$(this).addClass('click');
		$(this).parents('.sub_wrap').toggleClass('on off');
		$(this).children('.i_arr').toggleClass('on off');

		$sub_wrap.slideToggle();

		if($('.main_menu').not(this)){
			$('.sub_wrap').children('ul').not($sub_wrap).slideUp();
			$('.i_arr').not($(this).children('.i_arr')).addClass('off').removeClass('on');
			$('.sub_wrap').not($(this).parents('.sub_wrap')).addClass('off').removeClass('on');
		}
	});
}

