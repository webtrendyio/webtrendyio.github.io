/*
 * Sado Hero Header Effects 
 * Version: 3.0
 * Created: 24 May 2019
 * Last Update: 3 Oct 2019
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "We are born of LOVE, lover is our mother." -Rumi
 *
 */


(function() { 

			
	var ie = (function(){
		var undef,rv = -1; 
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf('MSIE ');
		var trident = ua.indexOf('Trident/');

		if (msie > 0) {
			rv = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		} else if (trident > 0) {
			var rvNum = ua.indexOf('rv:');
			rv = parseInt(ua.substring(rvNum + 3, ua.indexOf('.', rvNum)), 10);
		}
		return ((rv > -1) ? rv : undef);
	}());


	var keys = [32, 37, 38, 39, 40], wheelIter = 0;

	function preventDefault(e) {
		e = e || window.event;
		if (e.preventDefault)
		e.preventDefault();
		e.returnValue = false;  
	}

	function keydown(e) {
		for (var i = keys.length; i--;) {
			if (e.keyCode === keys[i]) {
				preventDefault(e);
				return;
			}
		}
	}

	function touchmove(e) {
		preventDefault(e);
	}

	function wheel(e) {
		// for IE 
		//if( ie ) {
			//preventDefault(e);
		//}
	}

	function disable_scroll() {
		window.onmousewheel = document.onmousewheel = wheel;
		document.onkeydown = keydown;
		document.body.ontouchmove = touchmove;
	}

	function enable_scroll() {
		window.onmousewheel = document.onmousewheel = document.onkeydown = document.body.ontouchmove = null;  
	}

	var docElem = window.document.documentElement,
		scrollVal,
		isRevealed, 
		noscroll, 
		isAnimating,
		container = document.getElementById( 'sado-header' ),
		trigger = container.querySelector( '#scroll' );
	let header_height = container.getBoundingClientRect().height;
	let im = document.querySelector('.sado-header-img');
	let header = document.querySelector('.sado-header-content');
	docElem.style.setProperty('--header-height', header_height+"px");

	let imgWrap1 = document.createElement("div");
	let imgWrap2 = document.createElement("div");
	imgWrap1.classList.add("top-half");
	imgWrap2.classList.add("bottom-half");

	let cloneImg = im.cloneNode();
	imgWrap1.appendChild(im);
	imgWrap2.appendChild(cloneImg);

	container.insertBefore(imgWrap1, header);
	container.insertBefore(imgWrap2, header);


	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}
	
	function scrollPage() {
		scrollVal = scrollY();
		
		if( noscroll && !ie ) {
			if( scrollVal < 0 ) return false;
			window.scrollTo( 0, 0 );
		}

		if(container.classList.contains('notrans')) {
			container.classList.remove('notrans');
			return false;
		}

		if( isAnimating ) {
			return false;
		}
		
		if( scrollVal <= 0 && isRevealed ) {
			toggle(0);
		}
		else if( scrollVal > 0 && !isRevealed ){
			toggle(1);
		}
	}

	function toggle( reveal ) {
		isAnimating = true;
		
		if( reveal ) {
			container.classList.add('active');
		}
		else {
			noscroll = true;
			disable_scroll();
			container.classList.remove('active');
		}

		setTimeout( function() {
			isRevealed = !isRevealed;
			isAnimating = false;
			if( reveal ) {
				noscroll = false;
				enable_scroll();
			}
		}, 600 );
	}

	var pageScroll = scrollY();
	noscroll = pageScroll === 0;
	
	disable_scroll();
	
	if( pageScroll ) {
		isRevealed = true;
		container.classList.add('notrans');
		container.classList.add('active');
	}
	
	window.addEventListener( 'scroll', scrollPage );
	trigger.addEventListener( 'click', function() { toggle( 'reveal' ); } );
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