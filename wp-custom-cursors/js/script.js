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

	(function(){
		
		let cursors = [{
			cursor_type: 1,
			cursor_shape: 1,
			cursor_image: 'img/cursor.svg',
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 1,
			element_activation: 0,
			selector_type: 'class',
			selector_data: 'cursor-1',
			color: '#ffffff',
			width: 80,
			blending_mode: 'normal',
		},{
			cursor_type: 0,
			cursor_shape: 1,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-1',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 2,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-2',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 3,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-3',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 4,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-4',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 5,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-5',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 6,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-6',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 7,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-7',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 8,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-8',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 9,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-9',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 10,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-10',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 11,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-11',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 12,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-12',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 13,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-13',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 14,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-14',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 15,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-15',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 16,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-16',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 17,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-17',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		},{
			cursor_type: 0,
			cursor_shape: 18,
			cursor_image: 0,
			default_cursor: 'none',
			hover_effect: 'plugin',
			body_activation: 0,
			element_activation: 1,
			selector_type: 'class',
			selector_data: 'cursor-18',
			color: '#ff3313',
			width: 40,
			blending_mode: 'multiply',
		}];



		window.addEventListener('load', (event) => {
			const getMousePosition = (e) => {
		        let posx = 0;
		        let posy = 0;
		        posx = e.clientX;
	            posy = e.clientY;
		        return { x : posx, y : posy }
		    }

		    let mousePosition = {x:0, y:0};

			// Create Cursor Element
			let body = document.querySelector('body'),
			cursorWrapper = document.createElement('div'),
			cursorEl1 = document.createElement('div'),
			cursorEl2 = document.createElement('div');

			cursorWrapper.classList.add('cursor');
			cursorEl1.classList.add('cursor-el1');
			cursorEl2.classList.add('cursor-el2');
			cursorWrapper.appendChild(cursorEl1);
			cursorWrapper.appendChild(cursorEl2);
			body.appendChild(cursorWrapper);



			body.addEventListener('mousemove', (ev) => mousePosition = getMousePosition(ev));

			requestAnimationFrame(() => renderCursor());

			function renderCursor() {
	   			
	   			cursorEl1.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
	   			cursorEl2.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;

				requestAnimationFrame(() => renderCursor());
			}


			// For Each Cursor
			cursors.forEach((cursor) => {
				let elements = null;

				// If SVG Cursor
				if (cursor.cursor_shape == 18) {
					let blob = '<svg viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Blob</title><desc>WP Custom Cursors.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path class="fillmeinside" d="M14.8965404,0 C24.3319123,0 33.3750903,16.1924411 28.754397,24.2923631 C24.1337037,32.3922852 5.09134123,31.3965374 1.0386837,24.2923631 C-3.01397383,17.1881889 5.46116844,1.13466707e-15 14.8965404,0 Z" id="blob" fill="#D8D8D8"></path></g></svg>';
					cursorEl1.innerHTML = blob;
				}

				// Activate Cursor on Body
				if (cursor.body_activation == 1) {
					elements = document.querySelectorAll("body");
				} 

				// Activate Cursor on Elements
				else {
					switch (cursor.selector_type) {
						case 'tag':
							elements = document.querySelectorAll(cursor.selector_data);
					    break;

					    case 'class':
						    elements = document.querySelectorAll("." + cursor.selector_data);
					    break;

					    case 'id':
						    elements = document.querySelectorAll("#" + cursor.selector_data);
					    break;

					    case 'attribute':
						    elements = document.querySelectorAll("[" + cursor.selector_data + "]");
					    break;
					}
				}

				if (elements.length > 0) {
					
					elements.forEach((element) => {
						let shapeClass = "cursor-", 
							imageClass = "cursor-img",
							removedClass = "", 
							removedCursorColor = "",
							removedCursorWidth = "",
							removedCursorBlending = "",
							removedDefaultCursor = "",
							removedCursorHover = "",
							removedImgClass = "",
							firedMouseEnter = false;

						
						if (cursor.cursor_type == 0) {
							shapeClass += cursor.cursor_shape;
						}

						else {
							let imageCursor = document.createElement('img');
							imageCursor.setAttribute('src', cursor.cursor_image);
							cursorEl2.appendChild(imageCursor);
						}

						element.classList.add('cursor-element');

						element.addEventListener('mousemove', () => {
							if (!firedMouseEnter) {
								mouseEntered();
							}
						});

						element.addEventListener('mouseenter', () => {
							mouseEntered();
						});

						element.addEventListener('mouseleave', () => {
							// Handle Classes
							cursorWrapper.classList.remove(shapeClass);
							if (removedCursorHover != cursor.hover_effect) {
								cursorWrapper.classList.remove(cursor.hover_effect);
								cursorWrapper.classList.add(removedCursorHover);
							}
							if (removedClass != shapeClass) {
								cursorWrapper.classList.add(removedClass);
							}

							// Set Old CSS Variables
							if (removedCursorColor.length > 0) {
								body.style.setProperty('--cursor-width', removedCursorWidth);
								body.style.setProperty('--color', removedCursorColor);
								body.style.setProperty('--blending-mode', removedCursorBlending);
								body.style.setProperty('--default-cursor', removedDefaultCursor);
							}

							if (cursor.cursor_type == 1) {
								cursorWrapper.classList.remove(imageClass);
							}
							if (removedImgClass) {
								cursorWrapper.classList.add('cursor-img');
							}
						});

						function mouseEntered() {

							firedMouseEnter = true;

							// Get Old CSS Variables
							removedCursorWidth = body.style.getPropertyValue('--cursor-width');
							removedCursorColor = body.style.getPropertyValue('--color');
							removedCursorBlending = body.style.getPropertyValue('--blending-mode');
							removedDefaultCursor = body.style.getPropertyValue('--default-cursor');

							// Handle Classes
							cursorWrapper.classList.add(cursor.hover_effect);
							cursorWrapper.classList.add(shapeClass);
							removedCursorHover = cursorWrapper.classList.item(1);
							removedClass = cursorWrapper.classList.item(2);

							if (cursorWrapper.classList.contains('cursor-img')) {
								removedImgClass = true;
								cursorWrapper.classList.remove('cursor-img');
							}

							if (removedClass != shapeClass) {
								cursorWrapper.classList.remove(removedClass);
							}
							if (removedCursorHover != cursor.hover_effect) {
								cursorWrapper.classList.remove(removedCursorHover);
							}
							if (cursor.cursor_type == 1) {
								cursorWrapper.classList.add(imageClass);
							}

							// Update New CSS Variables
							body.style.setProperty('--cursor-width', cursor.width + "px");
							body.style.setProperty('--color', cursor.color);
							body.style.setProperty('--blending-mode', cursor.blending_mode);
							body.style.setProperty('--default-cursor', cursor.default_cursor);
						}

						let innerLinks = element.querySelectorAll('a, button, input[type="checkbox"], input[type="radio"], input[type="button"], input[type="submit"], input[type="file"], select, .rs-waction'),
							innerInputs = element.querySelectorAll('input[type="text"], input[type="email"], input[type="search"], input[type="number"], input[type="password"], input[type="url"], input[type="date"], input[type="range"], textarea');

						[...innerLinks].forEach((link) => {
					        link.addEventListener('mouseenter', () => {elementEnter('link-hover')} );
					        link.addEventListener('mouseleave', () => {elementLeave('link-hover')} );
					    });

					    [...innerInputs].forEach((input) => {
					        input.addEventListener('mouseenter', () => {elementEnter('input-hover')} );
					        input.addEventListener('mouseleave', () => {elementLeave('input-hover')} );
					    });

						function elementEnter(className) {
					        cursorWrapper.classList.add(className);
					    }
					    function elementLeave(className) {
					        cursorWrapper.classList.remove(className);
					    }

					});
				}

			});
		});
		
	})();	

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