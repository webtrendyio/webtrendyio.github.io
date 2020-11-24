/*!
* Template Main JavaScript File
* This file is mainly used for initialization of plugins and adding event listeners

* Go Night Dark Mode/ Night Mode WordPress Plugin
* Author: Web_Trendy
* Copyright 2020 © Web_Trendy (https://codecanyon.net/user/web_trendy/portfolio)
* Licensed under Envato (https://codecanyon.net/licenses/standard)
*
* "Life is balance of holding on and letting go." --Rumi
*
*/ 

	

$(document).ready(function(){

	let body = $('body'),
		isDark = false;

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

	$('.gn-button-wrapper').on('click', function() {
		toggleDarkMode();
	});

	

	function toggleDarkMode() {
		if (isDark) {
			goLight();
		}
		else {
			goDark();
		}
	}

	function goDark() {
		body.addClass('active');
		isDark = true;
	}

	function goLight() {
		body.removeClass('active');	
		isDark = false;
	}

});