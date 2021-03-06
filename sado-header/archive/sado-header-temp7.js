/*
 * Sado Hero Header Effects - Template 7
 * Version: 1.0
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "Pain is where light enters you!" -Rumi
 *
 */

(function() {

	// Define Variables
	var header = document.querySelector('.sado-header');
	var im = document.querySelector('.header-image');
	var co = document.querySelector('.header-content');
	var docElem = window.document.documentElement, noTrans = false, stTrans, a1, a2;

	var imgWrap1 = document.createElement("div");
	var imgWrap2 = document.createElement("div");

	imgWrap1.classList.add("left-half");
	imgWrap2.classList.add("right-half");

	var cloneImg = im.children[0].cloneNode();
	imgWrap1.appendChild(im.children[0]);
	imgWrap2.appendChild(cloneImg);
	im.appendChild(imgWrap1);
	im.appendChild(imgWrap2);

	// On Scroll Function
	function scrollPage() {
		var scroll = scrollY();
		a1 = im.getBoundingClientRect().height + im.getBoundingClientRect().top;
		a2 = co.getBoundingClientRect().height + co.getBoundingClientRect().top;
		a2 = a2.toFixed();
		a1 -= 50;

		// Add active class
		if (scroll > 20 && !header.classList.contains('active')) {
			header.classList.add('active');
		}

		// Remove active class
		if (scroll < 20 && header.classList.contains('active')) {
			header.classList.remove('active');
		}
		
		// Stop Translating Title
		if (a1 < a2 && !noTrans) {
			noTrans = true; stTrans = a1; 
		}

		// Translate for scroll up
		if (a1 > stTrans && noTrans) {
			noTrans = false;
		}

		// Translate Title
		if (!noTrans) {
			co.style.transform = 'translateY('+ (10+scroll*10)/10 +'px)';
		}
	}

	// Get Scroll Amount
	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	// Attach Scroll Event Listener
	window.addEventListener( 'scroll', scrollPage );

	// Refreshing The Page
	var scrolled = scrollY();

	// Smooth scroll to top, when refreshed the page
	(function smoothscroll(){
	    var currentScroll = scrollY();
	    if (currentScroll > 0) {
	         window.requestAnimationFrame(smoothscroll);
	         window.scrollTo (0,currentScroll - (currentScroll/5));
	    }
	})();

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
/*24 May 2019*/