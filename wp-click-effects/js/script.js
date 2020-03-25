/*
 * Ishida | Multipurpose HTML Presentation and Product Landing Page Template
 * Template Main JavaScript File
 * This file is mainly used for initialization of plugins and adding event listeners
 *
 * Version: 1.0.1
 * Created: 10 Feb 2020
 * Last Update: 17 March 2020
 * Author: gren8
 * Copyright 2020 © gren8 (https://wrapbootstrap.com/user/gren8)
 * Licensed under WrapBootstrap (https://wrapbootstrap.com/help/licenses)
 *
 * "Life is balance of holding on and letting go." --Rumi
 *
 */
 
$(document).ready(function(){

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