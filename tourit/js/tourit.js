/*!
 * Tourit Product Tour & Guide
 * Version: 1.0.0
 * Created: 12 Nov 2019
 * Last Update: 12 Nov 2019
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "We carry inside us the wonders we seek outside us." -Rumi
 *
 */ 


class tourIt {
	constructor(options){
		
		this.settings = {
			dotWidth: null,
			overlayColor: null,
			overlayOpacity: null,
			stepMinWidth: null,
			stepBackground: null,
		};

		Object.assign(this.settings, options);

		let overlay, dots_wrapper, 
		active_step = 1,
		step_dots = document.querySelectorAll('[data-toggle="tourit"]'),
		step_cards = document.querySelectorAll('.tourit-wrapper .single-step'),
		body = document.querySelector('body'),
		docElem = document.documentElement;

		docElem.style.setProperty('--tourit-dot-width', this.settings.dotWidth);
		docElem.style.setProperty('--tourit-overlay-color', this.settings.overlayColor);
		docElem.style.setProperty('--tourit-overlay-opacity', this.settings.overlayOpacity);
		docElem.style.setProperty('--tourit-step-min-width', this.settings.stepMinWidth);
		docElem.style.setProperty('--tourit-step-background', this.settings.stepBackground);

		overlay = document.createElement('div');
		overlay.className = "tourit-overlay";

		dots_wrapper = document.createElement('div');
		dots_wrapper.className = "dots-wrapper";

		body.appendChild(dots_wrapper);
		body.appendChild(overlay);

		[...step_dots].forEach(function(el){
			
			let stepNumber, dotLeft, dotTop, dotPos, elWidth, elHeight, dotWidth, 
			dot = document.createElement('div');
			dot.className = "tourit-dot";

			dots_wrapper.appendChild(dot);

			dotTop = Number(el.getBoundingClientRect().y.toFixed()) + window.scrollY; 
			dotLeft = Number(el.getBoundingClientRect().x.toFixed()) + window.scrollX;

			if (el.hasAttribute('data-dot-location')) {
				
				dotPos = el.getAttribute('data-dot-location');
				elWidth = Number(el.getBoundingClientRect().width.toFixed());
				elHeight = Number(el.getBoundingClientRect().height.toFixed());
				dotWidth = dot.getBoundingClientRect().width;

				let dotPosArray = ['topright', 'topleft', 'topcenter', 'bottomright', 'bottomleft', 'bottomcenter'];

				if (dotPosArray.includes(dotPos.toLowerCase())) {
					switch(dotPos.toLowerCase()) {
						case 'topright':
							dotLeft = dotLeft+elWidth;
							dotTop = dotTop-dotWidth;
						break;

						case 'topleft':
							dotLeft = dotLeft-dotWidth;
							dotTop = dotTop-dotWidth;
						break;

						case 'topcenter':
							dotLeft = dotLeft+(elWidth/2-(dotWidth/2));
							dotTop = dotTop-dotWidth;
						break;

						case 'bottomright':
							dotLeft = dotLeft+elWidth;
							dotTop = dotTop+elHeight;
						break;

						case 'bottomleft':
							dotLeft = dotLeft-dotWidth;
							dotTop = dotTop+elHeight;
						break;

						case 'bottomcenter':
							dotLeft = dotLeft+(elWidth/2-(dotWidth/2));
							dotTop = dotTop+elHeight;
						break;
					}
				}
				else {
					dotLeft = dotLeft + Number(el.getAttribute('data-dot-location').split(',')[0]);
					dotTop = dotTop + Number(el.getAttribute('data-dot-location').split(',')[1]);
				}	
			}

			if (el.hasAttribute('data-step')) {

				stepNumber = el.getAttribute('data-step');
				dot.setAttribute('data-order', stepNumber);

				try {
					if (step_cards[stepNumber-1]) {
						step_cards[stepNumber-1].style.top = dotTop + "px";
						step_cards[stepNumber-1].style.left = dotLeft + "px";
					}
					else {
						throw new Error("No HTML markup is defined for step " + (stepNumber));
					}
				}
				catch(ex) {
					console.log("Markup Error: " + ex.message);
				}
			}

			if (el.hasAttribute('data-step-location')) {
				let stepLocation = el.getAttribute('data-step-location');

				try {
					if (step_cards[stepNumber-1]) {
						switch(stepLocation.toLowerCase()) {
							case 'bottom':
								step_cards[stepNumber-1].classList.add('bottom-align');
							break;
							case 'top':
								step_cards[stepNumber-1].classList.add('top-align');
							break;
							case 'left':
								step_cards[stepNumber-1].classList.add('left-align');
							break;
							case 'right':
								step_cards[stepNumber-1].classList.add('right-align');
							break;
						}
					}
					else {
						throw new Error("No HTML markup is defined for step " + (stepNumber));
					}
				}
				catch(ex) {
					console.log("Markup Error: " + ex.message);
				}
				
			}

			dot.style.left = dotLeft + "px";
			dot.style.top = dotTop + "px";
			
		});

		let step_counter = 0;
		[...step_cards].forEach(function(el){
			step_counter++;
			let nav = document.createElement('div'),
			counter = document.createElement('div'),
			links = document.createElement('div'),
			close = document.createElement('span'),
			header = el.children[0],
			
			currentStep = document.createElement('span'),
			separator = document.createElement('span'),
			total = document.createElement('span'),
			next = document.createElement('span'),
			prev = document.createElement('span');

			nav.className = "step-nav";
			counter.className = "step-counter";
			next.className = "step-next";
			prev.className = "step-prev";
			close.className = "step-close";
			currentStep.textContent = step_counter;
			separator.textContent = " of ";
			total.textContent = step_cards.length;
			links.className = "step-links";
			next.textContent = "Next";
			prev.textContent = "Prev";

			next.addEventListener('click', nextStep);
			prev.addEventListener('click', prevStep);
			close.addEventListener('click', closeStep);

			el.appendChild(nav);
			counter.appendChild(currentStep);
			counter.appendChild(separator);
			counter.appendChild(total);
			header.appendChild(close);
			nav.appendChild(counter);
			links.appendChild(prev);
			links.appendChild(next);
			nav.appendChild(links);
		});

		function nextStep() {
			let this_step_card, this_step_dot, next_step_dot;
			if (active_step < step_cards.length && active_step > 0) {
				this_step_card = step_cards[active_step-1];

				this_step_dot = document.querySelector('.tourit-dot[data-order="'+active_step+'"]');
				next_step_dot = document.querySelector('.tourit-dot[data-order="'+(active_step+1)+'"]');
				this_step_dot.classList.add('out');
				next_step_dot.classList.add('in');

				this_step_card.classList.add('out');
				step_cards[active_step].classList.add('in');
				
				window.setTimeout(()=>{
					this_step_card.classList.remove('out');
					this_step_card.classList.remove('in');

					this_step_dot.classList.remove('out');
					this_step_dot.classList.remove('in');
				}, 500);

				++active_step;
			}
	    }

	    function prevStep() {
	    	let this_step_card, this_step_dot, prev_step_dot;
			if (active_step <= step_cards.length && active_step > 1) {
				--active_step;
				this_step_card = step_cards[active_step];

				this_step_dot = document.querySelector('.tourit-dot[data-order="'+(active_step+1)+'"]');
				prev_step_dot = document.querySelector('.tourit-dot[data-order="'+active_step+'"]');
				this_step_dot.classList.add('out');
				prev_step_dot.classList.add('in');

				this_step_card.classList.add('out');
				step_cards[active_step-1].classList.add('in');

				window.setTimeout(()=>{
					this_step_card.classList.remove('out');
					this_step_card.classList.remove('in');

					this_step_dot.classList.remove('out');
					this_step_dot.classList.remove('in');
				}, 500);
				
			}
	    }

	    function closeStep() {
	    	let this_step_card, this_step_dot; 
	    	this_step_card = step_cards[active_step-1];
	    	this_step_dot = document.querySelector('.tourit-dot[data-order="'+active_step+'"]');
	    	this_step_card.classList.remove('in');
	    	this_step_dot.classList.remove('in');
	    	overlay.classList.remove('in');
	    	active_step = 1;
	    }
		
	}

	run() {
		document.querySelector('.tourit-overlay').classList.add('in');
		document.querySelectorAll('.tourit-wrapper .single-step')[0].classList.add('in');
		document.querySelector('.tourit-dot[data-order="1"]').classList.add('in');
    }
}




/* :) Let's meke internet BEAUTIFUL*/
/*
 _       __     __       ______                    __
| |     / /__  / /_     /_  __/_______  ____  ____/ /_  __
| | /| / / _ \/ __ \     / / / ___/ _ \/ __ \/ __  / / / /
| |/ |/ /  __/ /_/ /    / / / /  /  __/ / / / /_/ / /_/ /
|__/|__/\___/_.___/    /_/ /_/   \___/_/ /_/\__,_/\__, /
                                                 /____/
*/