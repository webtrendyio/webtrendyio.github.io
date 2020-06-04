/*!
* Template Main JavaScript File
* This file is mainly used for initialization of plugins and adding event listeners

* Trendex | HTML Product Landing Page
* Author: Web_Trendy
* Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy/portfolio)
* Licensed under Envato (https://codecanyon.net/licenses/standard)
*
* "Life is balance of holding on and letting go." --Rumi
*
*/ 

	

$(document).ready(function(){

	lax.setup();

	const update = () => {
		lax.update(window.scrollY);
		window.requestAnimationFrame(update);
	}

	window.requestAnimationFrame(update);

	let w = window.innerWidth;
	window.addEventListener("resize", function() {
		if(w !== window.innerWidth) {
		  lax.updateElements();
		}
	});

});