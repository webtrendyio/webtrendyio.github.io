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
		window.addEventListener('DOMContentLoaded', function(event) {
			window.addEventListener('load', function(event) {

				let cursors = [{
					cursor_type: 'image',
					cursor_shape: 1,
					cursor_image: 'img/cursor.svg',
					cursor_text: '',
					click_point: '5, 5',
					default_cursor: 0,
					hide_tablet: 'on',
					hide_mobile: 'on',
					hover_cursors: '[{"selector":[".hover-1"],"cursor":"1","cursorText":"Explore","cursorIcon":"","bgColor":"#fdc100","width":"100"},{"selector":[".hover-2"],"cursor":"2","cursorText":"Explore","cursorIcon":"","bgColor":"#fdc100","width":"100"},{"selector":[".hover-3"],"cursor":"3","cursorText":"Explore","cursorIcon":"","bgColor":"#fdc100","width":"100"},{"selector":[".hover-4"],"cursor":"4","cursorText":"Explore","cursorIcon":"","bgColor":"#fdc100","width":"100"},{"selector":[".hover-5"],"cursor":"5","cursorText":"Explore","cursorIcon":"","bgColor":"#fdc100","width":"100"},{"selector":[".hover-6"],"cursor":"6","cursorText":"Explore","cursorIcon":"","bgColor":"#fdc100","width":"100"},{"selector":[".hover-7"],"cursor":"7","cursorText":"Explore","cursorIcon":"","bgColor":"#fdc100","width":"100"},{"selector":[".hover-8"],"cursor":"8","cursorText":"Explore","cursorIcon":"","bgColor":"#fdc100","width":"100"},{"selector":[".hover-9"],"cursor":"9","cursorText":"Explore","cursorIcon":"","bgColor":"#fdc100","width":"100"},{"selector":[".hover-10"],"cursor":"10","cursorText":"Explore","cursorIcon":"","bgColor":"#fdc100","width":"100"},{"selector":[".hover-11"],"cursor":"11","cursorText":"Explore","cursorIcon":"","bgColor":"#fdc100","width":"100"},{"selector":[".hover-12"],"cursor":"12","cursorText":"Explore","cursorIcon":"","bgColor":"#fdc100","width":"100"},{"selector":[".hover-13"],"cursor":"13","cursorText":"Explore","cursorIcon":"","bgColor":"#fdc100","width":"100"},{"selector":[".hover-14"],"cursor":"14","cursorText":"Explore","cursorIcon":"","bgColor":"#fdc100","width":"100"},{"selector":[".hover-15"],"cursor":"15","cursorText":"Explore","cursorIcon":"","bgColor":"#fdc100","width":"100"}]',
					activate_on: 0,
					selector_type: 'class',
					selector_data: 'cursor-1',
					color: '#ffffff',
					width: 80,
					blending_mode: 'normal',
				},{
					cursor_type: 'shape',
					cursor_shape: 1,
					cursor_image: '',
					default_cursor: 0,
					activate_on: 1,
					selector_type: 'class',
					selector_data: 'cursor-1',
					color: '#ff3313',
					width: 30,
					blending_mode: 'normal',
					cursor_text: '',
					click_point: '50, 50',
					hide_tablet: 'on',
					hide_mobile: 'on',
					hover_cursors: '',
				},{
					cursor_type: 'shape',
					cursor_shape: 2,
					cursor_image: '',
					default_cursor: 0,
					body_activation: 0,
					activate_on: 1,
					selector_type: 'class',
					selector_data: 'cursor-2',
					color: '#ff3313',
					width: 40,
					blending_mode: 'normal',
					cursor_text: '',
					click_point: '50, 50',
					hide_tablet: 'on',
					hide_mobile: 'on',
					hover_cursors: '',
				},{
					cursor_type: 'shape',
					cursor_shape: 3,
					cursor_image: 0,
					default_cursor: 0,
					body_activation: 0,
					activate_on: 1,
					selector_type: 'class',
					selector_data: 'cursor-3',
					color: '#ff3313',
					width: 40,
					blending_mode: 'normal',
					cursor_text: '',
					click_point: '50, 50',
					hide_tablet: 'on',
					hide_mobile: 'on',
					hover_cursors: '',
				},{
					cursor_type: 'shape',
					cursor_shape: 4,
					cursor_image: 0,
					default_cursor: 0,
					body_activation: 0,
					activate_on: 1,
					selector_type: 'class',
					selector_data: 'cursor-4',
					color: '#ff3313',
					width: 80,
					blending_mode: 'normal',
					cursor_text: '',
					click_point: '50, 50',
					hide_tablet: 'on',
					hide_mobile: 'on',
					hover_cursors: '',
				},{
					cursor_type: 'shape',
					cursor_shape: 5,
					cursor_image: 0,
					default_cursor: 0,
					body_activation: 0,
					activate_on: 1,
					selector_type: 'class',
					selector_data: 'cursor-5',
					color: '#ff3313',
					width: 40,
					blending_mode: 'normal',
					cursor_text: '',
					click_point: '50, 50',
					hide_tablet: 'on',
					hide_mobile: 'on',
					hover_cursors: '',
				},{
					cursor_type: 'shape',
					cursor_shape: 6,
					cursor_image: 0,
					default_cursor: 0,
					body_activation: 0,
					activate_on: 1,
					selector_type: 'class',
					selector_data: 'cursor-6',
					color: '#ff3313',
					width: 40,
					blending_mode: 'normal',
					cursor_text: '',
					click_point: '50, 50',
					hide_tablet: 'on',
					hide_mobile: 'on',
					hover_cursors: '',
				},{
					cursor_type: 'shape',
					cursor_shape: 7,
					cursor_image: 0,
					default_cursor: 0,
					body_activation: 0,
					activate_on: 1,
					selector_type: 'class',
					selector_data: 'cursor-7',
					color: '#ff3313',
					width: 40,
					blending_mode: 'normal',
					cursor_text: '',
					click_point: '50, 50',
					hide_tablet: 'on',
					hide_mobile: 'on',
					hover_cursors: '',
				},{
					cursor_type: 'shape',
					cursor_shape: 8,
					cursor_image: 0,
					default_cursor: 0,
					body_activation: 0,
					activate_on: 1,
					selector_type: 'class',
					selector_data: 'cursor-8',
					color: '#ff3313',
					width: 40,
					blending_mode: 'normal',
					cursor_text: '',
					click_point: '50, 50',
					hide_tablet: 'on',
					hide_mobile: 'on',
					hover_cursors: '',
				},
				{
					cursor_type: 'image',
					cursor_shape: 1,
					cursor_image: 'img/cursor-2.png',
					cursor_text: '',
					click_point: '5, 5',
					default_cursor: 0,
					hide_tablet: 'on',
					hide_mobile: 'on',
					hover_cursors: '',
					activate_on: 1,
					selector_type: 'class',
					selector_data: 'cursor-type-image',
					color: '#ffffff',
					width: 180,
					blending_mode: 'normal',
				},
				{
					cursor_type: 'text',
					cursor_shape: 1,
					cursor_image: '',
					cursor_text: 'WP Custom Cursor Plugin V3',
					click_point: '5, 5',
					default_cursor: 1,
					hide_tablet: 'on',
					hide_mobile: 'on',
					hover_cursors: '',
					activate_on: 1,
					selector_type: 'class',
					selector_data: 'cursor-type-text',
					color: 'orange',
					width: 100,
					blending_mode: 'normal',
				}];

				const getMousePosition = function(e) {
			        let posx = 0;
			        let posy = 0;
			        posx = e.clientX;
		            posy = e.clientY;
			        return { x : posx, y : posy }
			    }

			    let mousePosition = {x:0, y:0};

				let body = document.querySelector('body'),
					frames = document.querySelectorAll('iframe'),
					activeElements = [],
					svgIcons = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z"/></g></svg>',
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></g></svg>',
						'<svg width="17px" height="10px" viewBox="0 0 17 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="arrow-left-right-line" transform="translate(-4.000000, -12.000000)"><polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon><polygon id="Shape" fill="#000000" fill-rule="nonzero" points="16.05 12.05 21 17 16.05 21.95 14.636 20.536 17.172 17.999 4 18 4 16 17.172 16 14.636 13.464"></polygon></g></g></svg>',
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M14 12l-4 4V8z"/></g></svg>',
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"/></g></svg>',
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></g></svg>',
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M10.13 15.842l-.788 2.94-1.931-.518.787-2.939a10.988 10.988 0 0 1-3.237-1.872l-2.153 2.154-1.415-1.415 2.154-2.153a10.957 10.957 0 0 1-2.371-5.07l.9-.165A16.923 16.923 0 0 0 12 10c3.704 0 7.131-1.185 9.924-3.196l.9.164a10.957 10.957 0 0 1-2.37 5.071l2.153 2.153-1.415 1.415-2.153-2.154a10.988 10.988 0 0 1-3.237 1.872l.787 2.94-1.931.517-.788-2.94a11.072 11.072 0 0 1-3.74 0z"/></g></svg>',
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></g></svg>',
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 5c-.513 0-1.007.077-1.473.22a2.5 2.5 0 1 1-3.306 3.307A5 5 0 1 0 12 7z"/></g></svg>',
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></g></svg>',
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V3l10 8-10 8v-5z"/></g></svg>',
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.514 3.514 0 0 1 0 1.458l5.11 2.787a3.5 3.5 0 1 1-.958 1.755z"/></g></svg>',
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"/></g></svg>',
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"/></g></svg>',
						'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M4.52 5.934L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066zm10.237 10.238l-1.464-1.464a3 3 0 0 1-4.001-4.001L7.828 9.243a5 5 0 0 0 6.929 6.929zM7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592l-3.86-3.86a5 5 0 0 0-5.68-5.68L7.974 3.761z"/></g></svg>'];

				body.addEventListener('pointermove', function(ev) {mousePosition = getMousePosition(ev)});
	 
				// IFrame Stop Cursor
				if (frames.length > 0) {
					[...frames].forEach(function(frame){
						frame.addEventListener('mouseenter', function(){
							body.classList.add('iframe-hover');
						});
						frame.addEventListener('mouseleave', function(){
							body.classList.remove('iframe-hover');
						});
					});
				}


				// For Each Cursor
				[...cursors].forEach(function(cursor) {
					let elements = null;

					// Activate Cursor on Body
					if (cursor.activate_on == 0) {
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

					if (elements != null && elements.length > 0) {
						[...elements].forEach(function(element){
							createCursor(element, cursor);
						});
					}

				});

				function createCursor(element, cursor) {
					let cursorWrapper = document.createElement('div'),
						cursorEl1 = document.createElement('div'), 
						cursorEl2 = document.createElement('div'),
						hoverCursors = cursor.hover_cursors ? JSON.parse(cursor.hover_cursors) : null,
						mouseEntered = false;

					cursorEl1.classList.add('cursor-el1');
					cursorEl2.classList.add('cursor-el2');
					switch(cursor.cursor_type) {
						case 'shape':
							cursorWrapper.classList.add(`cursor-${cursor.cursor_shape}`);
					    break;
						case 'image':
					    	let imageCursor = document.createElement('img');

							imageCursor.setAttribute('src', cursor.cursor_image);
							cursorEl1.appendChild(imageCursor);
								
							cursorWrapper.classList.add('cursor-image');

					    break;
					  	case 'text':
					    	let svgTextCursor = `<svg viewBox="0 0 500 500"><path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle" fill="none"></path><text dy="25" style=" font-size:70px;"><textPath xlink:href="#textcircle">${cursor.cursor_text}</textPath></text></svg>`;
					    	cursorEl1.innerHTML = svgTextCursor;
					    	cursorWrapper.classList.add('cursor-text');
					    break;
					}


					// Mobile & Tablet Hide
					if (cursor.hide_tablet == "on") {
						cursorWrapper.classList.add('hide-tablet');						
					}

					if (cursor.hide_mobile == "on") {
						cursorWrapper.classList.add('hide-mobile');						
					}

					cursorWrapper.classList.add('wpcc-cursor');
					cursorWrapper.classList.add('no-transition');
					
					cursorWrapper.appendChild(cursorEl1);
					cursorWrapper.appendChild(cursorEl2);

					body.appendChild(cursorWrapper);

					cursorWrapper.style.setProperty('--cursor-width', cursor.width + "px");
					cursorWrapper.style.setProperty('--color', cursor.color);
					cursorWrapper.style.setProperty('--blending-mode', cursor.blending_mode);

					let cpx = (cursor.click_point.split(",")[0])*-1 + "%";
					let cpy = (cursor.click_point.split(",")[1])*-1 + "%";
					cursorWrapper.style.setProperty('--click-point-x', cpx);
					cursorWrapper.style.setProperty('--click-point-y', cpy);

					// Show Normal Cursor
					if ( !Number(cursor.default_cursor) ) {
						element.classList.add('no-cursor');
					}
					else {
						element.classList.add('default-cursor');
					}

					if (hoverCursors) {
						hoverCursors.forEach(function(hoverCursor) {
							let hoverCursorWrapper = document.createElement('div'),
								hoverCursorIcon = document.createElement('div'), 
								hoverCursorText = document.createElement('div');
							
							hoverCursorWrapper.classList.add('hover-cursor');
							hoverCursorWrapper.classList.add(`hc-${hoverCursor.cursor}`);
							hoverCursorIcon.classList.add('hover-cursor-icon');

							if (hoverCursor.cursor == 1) {
								if (hoverCursor.cursorIcon) {
									let hoverCursorIconFile = document.createElement('img');
									hoverCursorIconFile.setAttribute('src', hoverCursor.cursorIcon);
									hoverCursorIcon.appendChild(hoverCursorIconFile);
								}
								else {
									hoverCursorIcon.innerHTML = svgIcons[hoverCursor.cursor - 1];
								}
							}
							else {
								hoverCursorIcon.innerHTML = svgIcons[hoverCursor.cursor - 1];
							}

							hoverCursorText.classList.add('hover-cursor-text');
							hoverCursorText.innerHTML = hoverCursor.cursorText;

							hoverCursorWrapper.appendChild(hoverCursorIcon);
							hoverCursorWrapper.appendChild(hoverCursorText);
							body.appendChild(hoverCursorWrapper);
							hoverCursorWrapper.style.setProperty('--hc-bgcolor', hoverCursor.bgColor);
							hoverCursorWrapper.style.setProperty('--hc-width', hoverCursor.width + "px");

							requestAnimationFrame(function() {renderHoverCursor()});
							function renderHoverCursor() {
					   			hoverCursorWrapper.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
								requestAnimationFrame(function() { renderHoverCursor()});
							}

							hoverCursor.selector.forEach(function(hoverSelector){
								let hoverElements = document.querySelectorAll(`${hoverSelector}`);
								[...hoverElements].forEach(function(el){
									el.addEventListener('mouseenter', function(){
										hoverCursorWrapper.classList.add('active');
										cursorWrapper.classList.remove('active');
									});
									el.addEventListener('mouseleave', function(){
										hoverCursorWrapper.classList.remove('active');
										cursorWrapper.classList.add('active');
									});
								});
							});
						});
					}

					else {
						let innerLinks = element.querySelectorAll('a');
						[...innerLinks].forEach(function(link) {
					        link.addEventListener('mouseenter', function() {
					        	cursorWrapper.classList.add('link-hover');
					        } );
					        link.addEventListener('mouseleave', function() {
					        	cursorWrapper.classList.remove('link-hover');
					        } );
					    }); 
					}

					element.addEventListener('mouseenter', function() {
						mouseEntered = true;
						cursorWrapper.classList.add('active');
						activeElements.forEach(function(activeEl){
							activeEl.classList.remove('active');
						});
						activeElements.push(cursorWrapper);
					});

					element.addEventListener('mouseleave', function() {
						mouseEntered = false;
						cursorWrapper.classList.remove('active');
						activeElements.pop();
						activeElements.forEach(function(activeEl){
							activeEl.classList.add('active');
						});
					}); 

					element.addEventListener('pointermove', function() {

						if (!mouseEntered) {
							mouseEntered = true;
							cursorWrapper.classList.add('active');
							activeElements.forEach(function(activeEl){
								activeEl.classList.remove('active');
							});
							activeElements.push(cursorWrapper);
						}

						requestAnimationFrame(function() {renderCursor()});
						function renderCursor() {
				   			cursorEl1.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
				   			cursorEl2.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;

							requestAnimationFrame(function() { renderCursor()});
						}
						
						window.setTimeout(function(){
							cursorWrapper.classList.remove('no-transition');
						}, 1000);
						
					});

					var innerInputs = element.querySelectorAll('input[type="text"], input[type="email"], input[type="search"], input[type="number"], input[type="password"], input[type="url"], input[type="date"], input[type="range"], textarea');	
				    [...innerInputs].forEach(function(input) {
				        input.addEventListener('mouseenter', function() {
				        	cursorWrapper.classList.add('input-hover');
				        } );
				        input.addEventListener('mouseleave', function() {
				        	cursorWrapper.classList.remove('input-hover');
				        } );
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