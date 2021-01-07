$(function(){
	includeHTML();
	include_nav_menu();
	menu();
});

function menu(){
	//$('.sub_wrap.on>ul').show();
	$('.sub_wrap .main_menu').on('click', function (){
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

function include_nav_menu(){
	var $this = $('.category .item').eq(1).text();
	$('.main_menu').find($this).parent('.sub_wrap').removeClass('off');
	$('.main_menu').find($this).parent('.sub_wrap').addClass('on');
}