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
	$('.trainers-container.owl-carousel').owlCarousel({
		loop:true,
		margin:25,
		nav:true,
		items:2
		
	});
	$('.slider.owl-carousel').owlCarousel({
		loop:true,
		margin:25,
		nav:true,
		items:3,
		autoplay: true,
		autoplayTimeout:100,
		autoplayHoverPause: true
	});
});

// $(function(){
// 	$("#header").load('components/header.html');
// 	$("#footer").load("components/footer.html");
// });
