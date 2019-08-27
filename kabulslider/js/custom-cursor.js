/*
 * Sado Custom Cursor Pack
 * Version: 1.0
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "Open your hands if you want to be held." -Rumi
 *
 */

(function(){
	document.querySelectorAll('.custom-cursor').forEach(function(e){
		let root = document.documentElement;
		let cursor = e.querySelector('.cursor');
		let link = e.querySelectorAll('a');
		
		link.forEach(function(e){
			e.addEventListener('mouseenter', function(){
				cursor.classList.add("onlink");
			});
			e.addEventListener('mouseleave', function(){
				cursor.classList.remove("onlink");
			});
		});
		
		let dot = cursor.children[0];
		e.addEventListener('mousemove', function(ev){
			e.style.setProperty('--top', ev.clientY + "px");
            e.style.setProperty('--left', ev.clientX + "px");
		});
		e.addEventListener('mouseenter', function(){
			e.classList.add('active');
		});
		e.addEventListener('mouseleave', function(){
			e.classList.remove('active');
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
/*19 Jun 2019*/