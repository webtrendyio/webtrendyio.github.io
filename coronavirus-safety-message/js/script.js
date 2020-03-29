/*
 * Coronavirus Safety Messages WordPress Plugin
 * Template Main JavaScript File
 * This file is mainly used for initialization of plugins and adding event listeners
 *
 * Version: 1.0.1
 * Created: 01 March 2020
 * Last Update: 01 March 2020
 *
 * "Life is balance of holding on and letting go." --Rumi
 *
 */
 
$(document).ready(function(){

	// Carousel Initialization
	let owl = $(".coronavirus-carousel"), next = $('.coronavirus-nav .next'), prev = $('.coronavirus-nav .prev'), close = $('.coronavirus-close'), container = $('.coronavirus-container');
	owl.owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 10000,
		margin: 30,
	});

	next.on('click', function(){
		owl.trigger('next.owl.carousel');
	});
	prev.on('click', function(){
		owl.trigger('prev.owl.carousel');
	});

	close.on('click', function(){
		container.addClass('closed');
	});
});