/*!
 * Veronica | HTML Product Landing Page
 * Author: Web_Trendy
 * Copyright 2021 © Web_Trendy (https://themeforest.net/user/web_trendy/portfolio)
 * Licensed under Envato (https://themeforest.net/licenses/standard)
 *
 * "Love is out mother, we are born of LOVE!" --Rumi
 *
 */

 
(function () {
	var scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
	    smooth: true,
	    repeat: true,
	});

	// let product_link = document.querySelector('#menu_product'),
	// 	how_link = document.querySelector('#menu_how'),
	// 	feature_link = document.querySelector('#menu_feature'),
	// 	review_link = document.querySelector('#menu_review');

	// product_link.addEventListener('click', ()=>{
	// 	scroll.scrollTo('#product_section');
	// });
	// how_link.addEventListener('click', ()=>{
	// 	scroll.scrollTo('#how_section');
	// });
	// feature_link.addEventListener('click', ()=>{
	// 	scroll.scrollTo('#feature_section');
	// });
	// review_link.addEventListener('click', ()=>{
	// 	scroll.scrollTo('#review_section');
	// });

	let searchWrapper = $('#search_wrapper');

	$('#nav_search').on('click', function(){
		searchWrapper.addClass('active');
	});

	$('#search_close').on('click', function(){
		searchWrapper.removeClass('active');
	});
})();