/*!
 * Template Main JavaScript File
 * This file is mainly used for initialization of plugins and adding event listeners

 * Nima | Personal Portfolio HTML Template
 * Author: Web_Trendy
 * Copyright 2020 © Web_Trendy (https://themeforest.net/user/web_trendy/portfolio)
 * Licensed under Envato (https://themeforest.net/licenses/standard)
 *
 * "Life is balance of holding on and letting go." --Rumi
 *
 */

$(document).ready(function(){

	// Work Hover Scripts
	const getMousePosition = (e, elw = 0) => {
        let posx = 0;
        let cx = 0;
        let posy = 0;
        posx = e.offsetX - elw;
        cx = e.offsetX;
        posy = e.offsetY;
        return { x : posx, y : posy, cx : cx }
    };

	let workItems = $('.work-item'),
		movable = {
			x: 0,
			y: 0,
			image: null,
			imgWidth: 0,
			rotate: 0
		}; 
		position = {x: 0, y: 0}, 
		image = null,
		imgWidth = 0,
		rotate = 0,
		placeholder = $('.work-title-placeholder');



	workItems.each(function(el){
		$(this).on('mouseenter', function(){
			movable.image = $(this).find('img');
			movable.imgWidth = $(this).find('img').width();
			movable.image.addClass('active');
			$(this).addClass('active');

			if (placeholder.length > 0) {
				placeholder.html($(this).attr('data-title'));
				placeholder.addClass('active');
			}
		});
		$(this).on('mouseleave', function(){
			movable.image.removeClass('active');
			$(this).removeClass('active');
			if (placeholder.length > 0) {
				placeholder.removeClass('active');
			}
		});
		$(this).on('mousemove', function(e){
			movable.position = getMousePosition(e, movable.imgWidth/2);
			movable.rotate = ((movable.position.cx+$(this).width()) - ($(this).width()*1.5)) / ($(this).width()/2) * 5;
			moveImage();
		}); 
	});

	function moveImage() {
		movable.image.css('transform', `translate(${movable.position.x}px, ${movable.position.y}px) rotate(${movable.rotate}deg)`);
	}

	// Locomotive Initialization
	let scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
	    smooth: true,
	});



});