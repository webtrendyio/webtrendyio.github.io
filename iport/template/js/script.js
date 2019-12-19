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

	// Initiate Aos
	AOS.init();
});