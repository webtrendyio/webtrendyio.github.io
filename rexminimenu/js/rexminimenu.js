/*
 * Rex Mini Menu
 * Version: 1.0.0
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "We carry inside us the wonders we seek outside us." -Rumi
 *
 */ 


let toggler = document.querySelector('#menu_toggler');
let menu = document.querySelector('.rexminimenu');
let menu_items = menu.querySelectorAll('nav ul li');
let menu_width = 20;

for (var i = 0; i < menu_items.length; i++) {
 	menu_width += parseInt(window.getComputedStyle(menu_items[i]).getPropertyValue('width'));
}

menu.style.setProperty('--menu-width', menu_width+"px");

 

toggler.addEventListener('click', toggle);

function toggle() {
 	this.parentNode.classList.toggle('open');
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
/* 14 Sep 2019*/