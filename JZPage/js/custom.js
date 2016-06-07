$(document).ready(function(){
		$("#about-me-link").click(function(event){
		event.preventDefault();
		$('html, body').animate({
		scrollTop: $("#1").offset().top -100
		}, 1600);
	});
		$("#portfolio-link").click(function(event){
		event.preventDefault();
		$('html, body').animate({
		scrollTop: $("#2").offset().top -90
		}, 1600);
	});
		$("#contact-link").click(function(event){
		event.preventDefault();
		$('html, body').animate({
		scrollTop: $("#3").offset().top -90
		}, 1600);
	});
	
	$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
    });
});