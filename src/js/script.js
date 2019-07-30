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
	$('.trainers-container.owl-carousel').owlCarousel({
		loop:true,
		
		autoplay: true,
		autoplayTimeout:2000,
		autoplayHoverPause: true,
		margin:25,
		nav:true,
		responsive : {
			// breakpoint from 0 up
			0 : {
				items: 1
			},
			768 : {
				items: 2
			},
			991 : {
				items:3
			}
			
		}
		
	});
	$('.slider.owl-carousel').owlCarousel({
		loop:true,
		margin:25,
		nav:false,
		dots: true,
		autoplay: true,
		autoplayTimeout:2000,
		autoplayHoverPause: true,
		responsive : {
			// breakpoint from 0 up
			0 : {
				items: 1
			},
			768 : {
				items: 2
			},
			991 : {
				items:3
			}
			
		}
	});
	
	
	var slider1 = $('#gallery-slider.owl-carousel');
	
	slider1.owlCarousel({
		loop:true,
		autoplay: true,
		autoplayTimeout:2000,
		autoplayHoverPause: true,
		nav:false,
		dots:true,
		items: 1
		
	});
	
	new WOW().init();
	
});
function WHCreateCookie(name, value, days) {
	var date = new Date();
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	var expires = "; expires=" + date.toGMTString();
	document.cookie = name + "=" + value + expires + "; path=/";
}

function WHReadCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

window.onload = WHCheckCookies;

function WHCheckCookies() {
	if (WHReadCookie('cookies_accepted') != 'T') {
		var message_container = document.createElement('div');
		message_container.id = 'cookies-message-container';
		var html_code = '<div id="cookies-message" style="padding: 10px 0px; font-size: 14px; line-height: 22px; border-bottom: 1px solid #cda737; text-align: center; position: fixed; top: 0px; background-color: #000000; width: 100%; z-index: 999;">Ta strona używa ciasteczek (cookies), dzięki którym nasz serwis może działać lepiej. <a href="http://wszystkoociasteczkach.pl" target="_blank">Dowiedz się więcej</a><a href="javascript:WHCloseCookiesWindow();" id="accept-cookies-checkbox" name="accept-cookies" style="background-color: #cda737; padding: 5px 10px; color: #FFF; border-radius: 4px; -moz-border-radius: 4px; -webkit-border-radius: 4px; display: inline-block; margin-left: 10px; text-decoration: none; cursor: pointer;">Rozumiem</a></div>';
		message_container.innerHTML = html_code;
		document.body.appendChild(message_container);
	}
}

function WHCloseCookiesWindow() {
	WHCreateCookie('cookies_accepted', 'T', 365);
	document.getElementById('cookies-message-container').removeChild(document.getElementById('cookies-message'));
}

// $(function(){
// 	$("#header").load('components/header.html');
// 	$("#footer").load("components/footer.html");
// });
