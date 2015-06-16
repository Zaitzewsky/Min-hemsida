$(document).ready(function(){
		$("#about-me-link").click(function(){
		$('html, body').animate({
		scrollTop: $("#1").offset().top -100
		}, 600);
	});
		$("#portfolio-link").click(function() {
		$('html, body').animate({
		scrollTop: $("#2").offset().top -40
		}, 600);
	});
		$("#contact-link").click(function() {
		$('html, body').animate({
		scrollTop: $("#3").offset().top -40
		}, 600);
	});
});