/*
 * Title Animo | Animated Page Titles
 * Created: 05 Jan 2020
 * Last Update: 05 Jan 2020
 * Version: 1.0.0
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "Wherever you are, and whatever you do, be in love." -Rumi
 *
 */ 


let titleAnimo = function(options) {
	let settings = {
		title: 'Welcom to Title Animo | Animated Page Titles',
		type: 1,
		speed: 1000,
	}

	Object.assign(settings, options);

	let titleTag = document.querySelector('head > title');

	if (settings.type == 1) {
		slideTitle(settings.title, settings.speed, titleTag);
	}

	if (settings.type == 2) {
		blinkTitle(settings.title, settings.speed, titleTag);
	}

	if (settings.type == 3) {
		typeTitle(settings.title, settings.speed, titleTag);
	}

	if (settings.type == 4) {
		jumboTitle(settings.title, settings.speed, titleTag);
	}


	let tab = document.querySelector("#wt-browser-title");
	typeTitle('Welcome to Title Animo! ', settings.speed/4, tab);

	function slideTitle(title, speed, wrapper) {
		let pageTitle = title.split(""), newTitle;
		pageTitle.push(" ");

		window.setInterval(function(){
			pageTitle.push(pageTitle[0]);
			pageTitle.shift();
			newTitle = pageTitle.join("");
			wrapper.textContent = newTitle;
		}, speed);
	}

	function blinkTitle(title, speed, wrapper) {
		let pageTitle = title.split(","), index = 0;

		window.setInterval(function(){
			if (index >= pageTitle.length) {
				index = 0;
			}
			wrapper.textContent = pageTitle[index];
			index++;
		}, speed);
	}

	function typeTitle(title, speed, wrapper) {
		let pageTitle = title.split(""), newTitle = "", index = 0;

		window.setInterval(function(){
			if (index >= pageTitle.length) {
				index = 0;
				newTitle = "";
			}
			newTitle += pageTitle[index];
			wrapper.textContent = newTitle;
			index++;
		}, speed);
	}

	function jumboTitle(title, speed, wrapper) {
		let pageTitle = title.split(""), newTitle = [], index = 0, jumboTimer = 0, interval, random = 0, chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","~","`","!","@","#","$","%","^","&","*","(",")","å","∫","ç","∂","©","˙","∆","˚","¬","µ","ø","π","œ","®","ß","†","√","∑","≈","¥","Ω"];

		window.setInterval(function(){

			if (index >= pageTitle.length) {
				index = 0;
				newTitle = [];
			}	

				
			
				interval = window.setInterval(()=>{
					random = Math.floor(Math.random()*chars.length);	
					newTitle[index] = chars[random];
					wrapper.textContent = newTitle.join("");
					jumboTimer++;

					if (jumboTimer >= speed/200) {
						window.clearInterval(interval);
						jumboTimer = 0;
					}
				}, speed/5);
				


			newTitle[index] = pageTitle[index];
			wrapper.textContent = newTitle.join("");
			index++;
		}, speed);
	}


}



/* :) Let's make internet BEAUTIFUL*/
/*
 _       __     __       ______                    __
| |     / /__  / /_     /_  __/_______  ____  ____/ /_  __
| | /| / / _ \/ __ \     / / / ___/ _ \/ __ \/ __  / / / /
| |/ |/ /  __/ /_/ /    / / / /  /  __/ / / / /_/ / /_/ /
|__/|__/\___/_.___/    /_/ /_/   \___/_/ /_/\__,_/\__, /
                                                 /____/
*/