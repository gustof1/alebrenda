$(document).ready(main);

var contador = 1;
var x = document.getElementById('dis');

function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('nav').animate({
				top: '0'
			});
			x.style.display = 'block';
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				top: '-100%'
			});
			x.style.display = 'none';
		}

	});

};
$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});

});