/*
Template Main JavaScript File
This file is mainly used for initialization of plugins and adding event listeners
*/
$(document).ready(function(){
	// Initiate Custom Cursor
	const cursor = new CustomCursor({
		color: '#fff',
		blending: 'difference',
	});

	// Lax Init
	lax.setup();

	const updateLax = () => {
		lax.update(window.scrollY);
		window.requestAnimationFrame(updateLax);
	}

	window.requestAnimationFrame(updateLax);

	// Update on resize
	window.addEventListener("resize", function() {
		lax.updateElements();
	});
});