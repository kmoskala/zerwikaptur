$(document).ready(function () {
	$('#header').height($(window).height());
	
	$('#header .navbar-menu').click(function () {
		$('.hidden-menu').slideToggle();
	});
	$('.go-down').click(function () {
		$('html, body').animate({
			scrollTop: ($('.content').offset().top)
		},500);
	});
});

// $(function(){
// 	$("#header").load('components/header.html');
// 	$("#footer").load("components/footer.html");
// });
