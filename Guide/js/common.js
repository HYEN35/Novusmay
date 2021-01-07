$(function(){
	initial();
	menu();
	all_menu();
	sub_menu();
	sub_close();
})
function initial(){
	$(window).ready(function(){
		$('.container section').addClass('on');
	});
}

function menu(){
	$('.menu>ol>li>a').on('click', function(){
		$('.menu>ol>li').removeClass('click');
		$(this).parents('li').addClass('click');

		var section_name = $(this).attr('href');
		$('.container section').removeClass('on');
		$(section_name).addClass('on');
	})
}

function all_menu(){
	$('h1').on('click', function(){
		$('.container section').addClass('on');
		$('.menu>ol>li').removeClass('click');
		$('.title').removeClass('click');
		$('.content').removeClass('on');
	})
}

function sub_close(){
	$('section>h3').on('click', function(){
		$('.content').removeClass('on');
		$('.title').removeClass('click');
	})
}

function sub_menu(){
	$('.item .title').on('click', function(){
		$('.title').removeClass('click');
		$(this).addClass('click');
		$('.content').removeClass('on');
		$('section').removeClass('on');
		$(this).siblings('.content').addClass('on');
		$(this).parents('section').addClass('on');

		var tab_id = $(this).parents('section').attr('id');
		var $menu = $('.menu>ol>li');
		var menu_data = $menu.attr('data-tab');
		if($menu.has(tab_id) != -1){
			$menu.find(tab_id).addClass('click')
		}

		console.log(tab_id)
	})
}