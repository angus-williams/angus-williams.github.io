$(document).ready(function(){
	console.log('hello world');


	$('.logo').click(function(){
		$('.slidemenu').addClass('active');
		$('.screen').addClass('active');

	});

	$('.x').click(function(){
		$('.slidemenu').removeClass('active');
		$('.screen').removeClass('active');
	});

	$('.frame').hover(function(){
		$('.bio').toggleClass('active');
		$('.frame').toggleClass('active');
	});

	$('.bio').hover(function(){
		$('.bio').toggleClass('active');
		$('.frame').toggleClass('active');
	});

});