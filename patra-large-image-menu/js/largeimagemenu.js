/*!
 * Patra Large Image Menu | JavaScript Menu Plugin
 * Author: Web_Trendy
 * Copyright 2020 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "We carry inside us the wonders we seek outside us." -Rumi
 *
 */ 

const getMousePosition = function(e) {
    let posx = 0,
    posy = 0,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    posx = e.clientX;
    posy = e.clientY + scrollTop;
    return { x : posx, y : posy }
}

let mousePosition = {x:0, y:0};


let patraMenu = function(options) {
	let settings = {
		layout: 'layout-1',
		hamburger: 'hamburger-18',
		imageSize: [250,350],
		titleFontSize: {
			desktop: 54,
			tablet: 40,
			mobile: 26
		},
		subtitleFontSize: {
			desktop: 16,
			tablet: 15,
			mobile: 14,
		},
		linkHoverColor: '#ec0101',
		menuBgColor: '#f5f5dc',
	}

	Object.assign(settings, options);

	let menu = $('.patra-menu-wrapper'),
		hamburger = $('.hamburger');
	hamburger.each(function(index){
		$(this).addClass(settings.hamburger);
	});
	menu.each(function(index){
		let menuLists = $(this).find('li');

		let titleFontSize, subtitleFontSize;
		switch (true) {
			case screen.width >= 320 && screen.width <= 480:
				titleFontSize = settings.titleFontSize.mobile;
				subtitleFontSize = settings.subtitleFontSize.mobile;
			break;

			case screen.width > 480 && screen.width <= 768:
				titleFontSize = settings.titleFontSize.tablet;
				subtitleFontSize = settings.subtitleFontSize.tablet;
			break;

			case screen.width > 768:
				titleFontSize = settings.titleFontSize.desktop;
				subtitleFontSize = settings.subtitleFontSize.desktop;
			break;			
		}

		$(this).css({"--wt-image-width" : settings.imageSize[0]+"px" , "--wt-image-height" : settings.imageSize[1]+"px" , "--wt-link-hover-color" : settings.linkHoverColor, "--wt-menu-bg-color" : settings.menuBgColor, "--wt-title-font-size" : titleFontSize+"px", "--wt-subtitle-font-size" : subtitleFontSize+"px"});
		$(this).find('.patra-menu').addClass(settings.layout);

		menuLists.each(function(index){
			let menuImage = $(this).find('.patra-menu-image'),
			menuImageHalfHeight = menuImage.height()/2,
			menuImageHalfWidth = menuImage.width()/2;

			
			$(this).on('mousemove', function(ev){
				mousePosition = getMousePosition(ev);
			});

			requestAnimationFrame(function() {moveImage()});

			function moveImage() {
	   			menuImage.css('transform', `translate(${mousePosition.x - menuImageHalfWidth}px, ${mousePosition.y - menuImageHalfHeight}px`);
				requestAnimationFrame(function() { moveImage()});
			}

			// Mouse Enter List Item
			$(this).on('mouseenter', function(ev){
				$(this).addClass('in');
			});

			// Mouse Leave List Item
			$(this).on('mouseleave', function(ev){
				$(this).removeClass('in');
			});
				
		});
		
		
		
	});
	
}


document.querySelectorAll('.hamburger').forEach(function(e){
	e.addEventListener('click', function(){
		if(!e.classList.contains('active')) {
			e.classList.add('active');
		}
		else {
			e.classList.remove('active');
		}
	});
});



/* :) Let's meke internet BEAUTIFUL*/
/*
 _       __     __       ______                    __
| |     / /__  / /_     /_  __/_______  ____  ____/ /_  __
| | /| / / _ \/ __ \     / / / ___/ _ \/ __ \/ __  / / / /
| |/ |/ /  __/ /_/ /    / / / /  /  __/ / / / /_/ / /_/ /
|__/|__/\___/_.___/    /_/ /_/   \___/_/ /_/\__,_/\__, /
                                                 /____/
*/