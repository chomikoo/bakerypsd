
$(document).ready(function(){

	'use strict';

 	$('.header').height($(window).height());

 	// Paralax
 	$(window).scroll(function(){
 		paralax();
 	});

 	function paralax() {
 		let wScroll = $(window).scrollTop();
 		console.log(`wScroll ${wScroll}`);

 		$('.header').css('opacity', `${1-(wScroll * 0.001)}`);
 	}

 	// INIT SLIDER

 	$('.menu__carousel').slick({
	 	slidesToShow: 1,
	 	slidesToScroll: 1,
	 	arrows: false,
	 	fade: true,
	 	asNavFor: '.slide_nav',
	 	adaptiveHeight: true,
	 	infinite: false,
		useTransform: true,
	 	speed: 400,
 	});

 	$('.slide_nav').slick({
 		slidesToShow: 2,
 		slidesToScroll: 1,
 		asNavFor: '.menu__carousel',
 		centerMode: false,
 		variableWidth: true,
 		centerMode: true,
 		arrows: true,
 		dots: false,
 		prevArrow: $('.slide_nav-prev'),
 		nextArrow: $('.slide_nav-next'),
 		focusOnSelect: true,
 	});


 	// Smooth Scroll 

 	// Select all links with hashes
	$('a[href*="#"]')
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && location.hostname == this.hostname ) {
	      let target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });


 	// Aniamtion on scroll
 	window.sr = ScrollReveal();

 	sr.reveal('#head .reveal', {
 		orgin: 'bottom'
 	}, 50);

 	sr.reveal('.reveal-left', {
 		origin: 'left',
 	});

 	sr.reveal('.reveal-right', {
 		origin: 'right',
 	});

 	sr.reveal('.reveal_gallery', {
 		duration: 2000
 	}, 50);

 	sr.reveal('.dish', {
 		duration: 2000
 	}, 50);


 	// sr.reveal('.star', {
 	// 	duration: 1000
 	// }, 50);

})