/*
 * Sado CSS Hamburger Menu Collection
 * Version: 1.0
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "Stop acting so small. You are the universe in ecstatic motion" -Rumi
 *
 */

(function(){
	document.querySelectorAll('.hamburger').forEach(function(e){
		e.addEventListener('click', function(){
			if(!e.classList.contains('active')) {
				e.classList.add('active');
			}
			else {
				e.classList.remove('active');
			}
		});
	});
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
/*18 Jun 2019*/