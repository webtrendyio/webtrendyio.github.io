/*!
 * iPort Personal Portfolio
 * Version: 1.0
 * Created: 20 Sep 2019
 * Last Update: 20 Sep 2019
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "Your heart knows the way. Run in that direction." -Rumi
 *
 */


(function() {

	// Custom Cursor
	let body = document.body;
	let cursor = document.querySelector('.cursor');

	const get_mouse_pos = (e) => {
        let posx = 0;
        let posy = 0;
        if (!e) e = window.event;
        if (e.clientX || e.clientY) 	{
            posx = e.clientX;
            posy = e.clientY;
        }
        return { x : posx, y : posy }
    }

	body.addEventListener('mouseenter', function(e){
		this.classList.add('active');
	});
	body.addEventListener('mouseleave', function(e){
		this.classList.remove('active');
	});
	body.addEventListener('mousemove', function(e){
		if (e.target.nodeName == "A" || e.target.parentNode.nodeName == "A") {this.classList.remove('active');}
		else {this.classList.add('active');}
		this.style.setProperty('--top', get_mouse_pos(e).y + "px");
        this.style.setProperty('--left', get_mouse_pos(e).x + "px");
	});


			
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
		container = document.getElementById( 'home' ),
		trigger = container.querySelector( '#scroll' );

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