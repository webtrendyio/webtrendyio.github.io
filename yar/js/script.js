/*
 * Sadaf Khan Portfolio | Summer 2019
 * Version: 1.0
 * "Always do what you are afraid to do!"
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
		container = document.getElementById( 'home' ),
		trigger = container.querySelector( '#scroll' );

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}
	
	function scrollPage() {
		scrollVal = scrollY();
		
		if( noscroll && !ie ) {
			if( scrollVal < 0 ) return false;
			// keep it that way
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

		// simulating the end of the transition:
		setTimeout( function() {
			isRevealed = !isRevealed;
			isAnimating = false;
			if( reveal ) {
				noscroll = false;
				enable_scroll();
			}
		}, 600 );
	}

	// refreshing the page...
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


/*
 _______          __        ___   ___ ___ __
|   _   .---.-.--|  .---.-.'  _| |   Y   |  |--.---.-.-----.
|   1___|  _  |  _  |  _  |   _| |.  1  /|     |  _  |     |
|____   |___._|_____|___._|__|   |.  _  \|__|__|___._|__|__|
|:  1   |                        |:  |   \
|::.. . |                        |::.| .  )
`-------'                        `--- ---'

Thursday 18 July - 17:59 (* **** ***)
*/