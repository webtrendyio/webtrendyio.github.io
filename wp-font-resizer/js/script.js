/*
 * WP Font Resizer | WordPress Accessibility Plugin
 * Template Main JavaScript File
 * This file is mainly used for initialization of plugins and adding event listeners
 *
 *
 * "Life is balance of holding on and letting go." --Rumi
 *
 */
 
$(document).ready(function(){

	let doc = document.documentElement, body = $('body'), fontSize = 14;

	$(".wpfr-up").on('click', () => {
		++fontSize;
		doc.style.setProperty('--wpfr-font-size', fontSize + "px");
	});

	$(".wpfr-down").on('click', () => {
		--fontSize;
		doc.style.setProperty('--wpfr-font-size', fontSize + "px");
	});

});