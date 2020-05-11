/*!
 * Template Main JavaScript File
 * This file is mainly used for initialization of plugins and adding event listeners

 * Lustra | HTML Organizational Template
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy/portfolio)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "Life is balance of holding on and letting go." --Rumi
 *
 */

$(document).ready(function(){
	// Responsive Menu Initialization
	$("#demoMenu").aceResponsiveMenu();

	// Home Page Top Carousel Initialization
	$(".owl-carousel-home").owlCarousel({
		items: 4,
		loop: true,
		autoplay: true,
		margin: 10,
		nav: true,
		dots: false,
		navText: ['<i class="ri-arrow-left-line"></i>','<i class="ri-arrow-right-line"></i>'],
		// responsive: {
		// 	0 : {
		//         items: 2,
		//     },
		//     480 : {
		//         items: 3,
		//     },
		//     768 : {
		//         items: 4,
		//     }
		// }
	});

	// Testimonial Carousel Initialization
	$(".owl-carousel-testimonial-1").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
	});

	$(".owl-carousel-testimonial-2").owlCarousel({
		items: 2,
		loop: true,
		autoplay: true,
	});

	// Lax Init
	lax.setup({
		breakpoints: { small: 0, large: 992 },
	});

	const updateLax = () => {
		lax.update(window.scrollY);
		window.requestAnimationFrame(updateLax);
	}

	window.requestAnimationFrame(updateLax);

	lax.updateElements();

	// Update on resize
	window.addEventListener("resize", function() {
		lax.updateElements();
	});


	// Counter Up Initialization
	const countUp1 = new CountUp('stat-1', 5234);
	const countUp2 = new CountUp('stat-2', 14);
	const countUp3 = new CountUp('stat-3', 360);

	// Activate counters when scrolled into view
	// Counter Item 1
	if (!countUp1.error) {
		var waypoint = new Waypoint({
		  element: document.getElementById('stat-1'),
		  handler: function(direction) {
		    countUp1.start();
		  },
		  offset: '80%'
		});
	} else {
	  console.error(countUp1.error);
	}
	// Counter Item 2
	if (!countUp2.error) {
		var waypoint = new Waypoint({
		  element: document.getElementById('stat-2'),
		  handler: function(direction) {
		    countUp2.start();
		  },
		  offset: '80%'
		});
	} else {
	  console.error(countUp2.error);
	}
	// Counter Item 3
	if (!countUp3.error) {
		var waypoint = new Waypoint({
		  element: document.getElementById('stat-3'),
		  handler: function(direction) {
		    countUp3.start();
		  },
		  offset: '80%'
		});
	} else {
	  console.error(countUp3.error);
	}

	// Post Like/ Comment Like Script (Add class "liked")
	$('#like_post, #like_comment').on('click', function() {
		$(this).toggleClass('liked');
	});


	// Color Select
	if ($('#colors')) {
		let colors = $('#colors'), selector = $('#colors .color-select');
		colors.on('click', '.color-select', function(e){
			if ($(this).hasClass('active')) {
				$(this).removeClass('active')
			}
			else {
				selector.removeClass('active');
				$(this).addClass('active')
			}
		});
	}

	// Size Select
	if ($('#size')) {
		let size = $('#size'), item = $('#size span');
		size.on('click', '.size-select', function(e){
			if ($(this).hasClass('active')) {
				$(this).removeClass('active')
			}
			else {
				item.removeClass('active');
				$(this).addClass('active')
			}
		});
	}


});