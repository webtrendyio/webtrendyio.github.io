$(document).ready(function(){
	// Navbar Initialization
	$("#mainMenu").aceResponsiveMenu({
		resizeWidth: '767',
	});

	// Home Page Carousel Initialization
	$(".owl-carousel-home").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		dots: false,
		onTranslated: activeTitle,
	});

	// Single Portfolio Carousel Initialization
	$(".owl-carousel-single-portfolio").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		dots: false,
	});

	// Home Page Carousel Title Change Function
	function activeTitle(e) {
		if (e.item) {
			var index = e.item.index - 1;
			var count = e.item.count;
			if (index > count) {
				index -= count;
			}
			if (index <= 0) {
				index += count;
			}
			$('.slide-list').find('.slide-link').removeClass('active');
			$('.slide-list').children('div').eq(index-1).addClass('active');

			$('.slide-no').children('span').removeClass('active');
			$('.slide-no').children('span').eq(index-1).addClass('active');

			$('.slide-name').children('span').removeClass('active');
			$('.slide-name').children('span').eq(index-1).addClass('active');

			$('.slide-category').children('span').removeClass('active');
			$('.slide-category').children('span').eq(index-1).addClass('active');
		}
	}


	// Go to slide when clicked on slide title
	$('.slide-link').on('click', function(){
		var slide_index = $(this).attr('data-slide'); 
		$('.owl-carousel').trigger('to.owl.carousel', slide_index-1);
	});


	// Home Service 1 Scripts
	$('.service-title').on('click', function(){
		$('.service-title, .service-description').removeClass('active');
		$(this).addClass('active');
		let descItem;
		try {
			if ($(this).attr('data-description')) {
				descItem = $(this).attr('data-description');
				if (document.getElementById(descItem)) {
					document.getElementById(descItem).classList.add('active');
				}
				else {
					throw new Error("No description for the service '" + $(this).html().trim() + "' or the description does not have an id of '" + descItem + "'.");
				}
			}
			else {
				throw new Error("The service '" + $(this).html().trim() + "' does not have an associated 'data-description' attribute.");
			}
		}
		catch(e) {
			console.log(e.message);
		}
	});

	// Home Service 2 Scripts
	$('.service-image').each(function(e){
		$(this).children('img').css('height', $(this).children('img').height()/2+"px").clone().appendTo($(this));
	});

	// Home Servicee 3 Scripts
	$('.service-wrapper').each(function(e){
		let imageHeight = $(this).find('img').height();
		$(this).find('img').css('height', imageHeight/2 + "px");
		$(this).find('.image-wrapper').css('height', imageHeight/2 + "px");
		$(this).on('mouseenter', function(){
			$(this).find('img').css('height', imageHeight + "px");
		});
		$(this).on('mouseleave', function(){
			$(this).find('img').css('height', imageHeight/2 + "px");
		});
	});


});