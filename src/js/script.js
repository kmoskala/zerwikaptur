$(document).ready(function () {
	$('.header-class').height($(window).height());
	
	$('#header .navbar-menu').click(function () {
		$('.hidden-menu').slideToggle();
	});
	$('.go-down').click(function () {
		$('html, body').animate({
			scrollTop: ($('.content').offset().top)
		},500);
	});
	$('#loadMore').click(function () {
		
		console.log("klikam");
		var beforeClick = $(".one-item.hide").length;
		console.log(beforeClick);
		$(".one-item.hide").each(function () {
			var afterClick = $(".one-item.hide").length;
			if (beforeClick - afterClick < 6) {
				$(this).removeClass("hide").addClass("open_item");
			}
			if (afterClick === 1) {
				$('#loadMore').css("display", "none");
			}
		});
		$(".open_item").show("fast").animate({
			opacity: 1.0
		}, "slow");
		
	});
	var allPanels = $('.group-item > .group-description').hide(1000);
	$('.group-item .slide-down').click(function () {
		
		allPanels.slideUp().parents(".group-item").find("i").css("transform", "rotate(45deg)");
		var hideEl = $(this).parents(".group-item").find(".group-description");
		if(hideEl.hasClass("hide")) {
			hideEl.removeClass("hide").slideDown(1000);
			$(this).css("transform", "rotate(225deg)");
		} else {
			hideEl.addClass("hide").hide(1000);
			$(this).css("transform", "rotate(45deg)");
		}
	});
	//jssor_1_slider_init();

	/*$('.trainers-container.owl-carousel').owlCarousel({
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
	});*/
	
	
});

// $(function(){
// 	$("#header").load('components/header.html');
// 	$("#footer").load("components/footer.html");
// });
