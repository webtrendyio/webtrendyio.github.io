/*
 * Ishida | Multipurpose HTML Presentation and Product Landing Page Template
 * Template Main JavaScript File
 * This file is mainly used for initialization of plugins and adding event listeners
 *
 * Version: 1.0.0
 * Created: 10 Feb 2020
 * Last Update: 10 Feb 2020
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy/portfolio)
 * Licensed under Envato (https://codecanyon.net/licenses)
 *
 * "Life is balance of holding on and letting go." --Rumi
 *
 */
 
$(document).ready(function(){
	// Initiate Custom Cursor
	const cursor = new CustomCursor({
		color: '#fff',
		blending: 'difference',
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
});