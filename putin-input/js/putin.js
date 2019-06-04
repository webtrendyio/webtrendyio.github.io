/*
 * Putin Text Input Effects
 * Version: 1.0
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "Be melting snow, wash yourself of yourself" -Rumi
 *
 */

(function(){
	document.querySelectorAll('input.input-field').forEach(function(e){
		if( e.value.trim() !== '' ) {
			e.parentElement.classList.add('active');
		}
		e.addEventListener('focus', focus);
		e.addEventListener('blur', blur);
	});
	function focus(e) {
		e.target.parentElement.classList.add('active')
	}
	function blur(e) {
		if( e.target.value.trim() === '' ) {
			e.target.parentElement.classList.remove('active' );
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
/*1 Jun 2019*/