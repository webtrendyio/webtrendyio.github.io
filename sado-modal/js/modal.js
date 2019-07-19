/*
 * Sado Modal/Popup Window Pack
 * Version: 1.0
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "Love is the bridge between you and everything." -Rumi
 *
 */

(function(){
	// Variables
	let overlay = document.createElement('div');
	let dataBody = null;
	let dataOverlay = null;

	// Insert overlay element
	overlay.classList.add('overlay');
	document.querySelector('body').appendChild(overlay);

	// Button click function
	document.querySelectorAll('[data-modal^="modal"]').forEach(function(e){
		e.addEventListener('click', (ev)=> {
			let dataModal = e.getAttribute('data-modal');
			let modal = document.getElementById(dataModal);

			if (modal.getAttribute('data-body')) {
				dataBody = modal.getAttribute('data-body');			
			}

			if (modal.getAttribute('data-overlay')) {
				dataOverlay = modal.getAttribute('data-overlay');			
			}

			addClass(modal);
			ev.preventDefault();
		});
	});

	// Close button function
	document.querySelectorAll('.modal').forEach(function(e) {
		let close = e.querySelector('span.close');
		close.addEventListener('click', function(){
			removeClass(e);
		});
	});

	// Overlay click function
	overlay.addEventListener('click', function(){
		let currentModal = document.querySelector('.modal.active');
		removeClass(currentModal);
	});

	// Scape button keydown function
	window.addEventListener('keydown', function(e){
		if (e.keyCode === 27 && overlay.classList.contains('active')) {
			let currentModal = document.querySelector('.modal.active');
			removeClass(currentModal);
		}	
	});

	// Show modal
	function addClass(el) {
		el.classList.add("active");
		overlay.classList.add('active');
		if (dataBody) {
			document.querySelector('body').classList.add(dataBody);
		}
		if (dataOverlay) {
			document.querySelector('body').classList.add(dataOverlay);
		}
	}

	// Close modal
	function removeClass(el) {
		el.classList.remove("active");
		overlay.classList.remove('active');
		if (dataBody) {
			document.querySelector('body').classList.remove(dataBody);
			dataBody = null;
		}

		if (dataOverlay) {
			document.querySelector('body').classList.remove(dataOverlay);
			dataOverlay = null;
		}
	}

})();

/* :) Let's meke internet BEAUTIFUL*/
/*
 _       __     __       ______                    __
| |     / /__  / /_     /_  __/_______  ____  ____/ /_  __
| | /| / / _ \/ __ \     / / / ___/ _ \/ __ \/ __  / / / /
| |/ |/ /  __/ /_/ /    / / / /  /  __/ / / / /_/ / /_/ /
|__/|__/\___/_.___/    /_/ /_/   \___/_/ /_/\__,_/\__, /
                                                 /____/
*/
/*2 Jul 2019*/