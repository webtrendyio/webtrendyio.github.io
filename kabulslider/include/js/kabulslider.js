/*
 * Kabul Slider
 * Version: 1.0
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "Caught by our own thoughts, we worry about everything." -Rumi
 *
 */

let UID = {
	_current: 0,
	getNew: function() {
		this._current++;
		return this._current;
	}
}
HTMLElement.prototype.pseudoStyle = function(element, prop, value) {
	let _this = this;
	let _sheetId = "pseudoStyles";
	let _head = document.head || document.getElementByTagName('head')[0];
	let _sheet = document.getElementById(_sheetId) || document.createElement('style');
	_sheet.id = _sheetId;
	let className = "pseudoStyle" + UID.getNew();
	_this.className += " " + className;
	_sheet.innerHTML += " ." + className + ":" + element + "{" + prop + ":" + value + "}";
	_head.appendChild(_sheet);
	return this;
}

let kabulSlider = function() {
	let options = {
		duration: 3000,
		captionBackgrounds: ['#ffd870', '#a2eaf2', '#ffded6', '#f1d6ff', '#d6ecff', '#dcffd6', '#d6ffff','#ffefd6'],
		layout: 'layout1',
	}

	Object.assign(options, arguments[0]);
	
	let wrapper = document.querySelectorAll('#kabul-slider');
	wrapper.forEach(function(e) {
		e.classList.add(options.layout);
	});
	let slides = document.querySelectorAll('#kabul-slider .slide');
	slides[0].classList.add('in');
	let slide_txt = 1;
	slides.forEach(function(e){
		let slide_no = document.createElement('span');
		slide_no.className = "nav-no";

		let slide_total = document.createElement('span');
		slide_total.className = "nav-total";

		

		let nav_prev = document.createElement('div');
		nav_prev.className = "prev";
		nav_prev.addEventListener('click', function(){
			previousSlide();
		});

		let nav_next = document.createElement('div');
		nav_next.className = "next";
		nav_next.addEventListener('click', function(){
			nextSlide();
		});


		let cap = e.querySelector('.caption');
		let cap_div = e.querySelector('.caption > div');

		cap_div.insertBefore(slide_no, e.querySelector('.nav-subtitle'));
		cap_div.insertBefore(slide_total, e.querySelector('.nav-subtitle'));
		cap_div.appendChild(nav_prev);
		cap_div.appendChild(nav_next);

		cap.pseudoStyle('before', 'background-color', options.captionBackgrounds[slide_txt - 1]);
		

		slide_no.innerHTML = slide_txt;
		slide_total.innerHTML = " of " + slides.length;
		slide_txt++;


	});
	let currentSlide = 0;
	let slideInterval = setInterval(nextSlide,options.duration);

	function nextSlide() {
	    goToSlide(currentSlide+1);
	}

	function previousSlide() {
	    goToSlide(currentSlide-1);
	}

	function goToSlide(n) {
	    slides[currentSlide].className = 'slide out';
	    slides[currentSlide].addEventListener('transitionend', function(){
	    	this.classList.remove('out');
	    }, {once: true});

	    currentSlide = (n+slides.length)%slides.length;
	    slides[currentSlide].className = 'slide in';
	    
	}
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
/* 26 Aug 2019*/