/*
 * Holy Carousel
 * Version: 1.0.0
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "Life is balance of holding on and letting go." -Rumi
 *
 */ 


let holyCarousel = function(options) {
	let settings = {
		selector: '.holy-carousel',
		duration: 5000,
		audio: false,
		audioSrc: null,
		controls: true,
		autoplay: true,
		layout: 'layout1',
	}

	Object.assign(settings, options);

	if (settings.duration < 3000) {settings.duration = 3000;}
	
	let wrapper = document.querySelectorAll(settings.selector);
	let isAnimating = false;
	let slideInterval = null;

	wrapper.forEach(function(carousel){
		carousel.classList.add(settings.layout);
		let slides = carousel.querySelectorAll('.hc-slide');

		if (settings.controls) {
			let controls_nav = document.createElement('div');
				controls_nav.className = "nav";

			let btn_prev = document.createElement('button');
				btn_prev.setAttribute('id', 'prev');
				btn_prev.setAttribute('type', 'button');
				btn_prev.setAttribute('title', 'Previous Slide');

			let btn_next = document.createElement('button');
				btn_next.setAttribute('id', 'next');
				btn_next.setAttribute('type', 'button');
				btn_next.setAttribute('title', 'Next Slide');

				btn_next.addEventListener('click', function(){
					if (!isAnimating) {
						if (slideInterval) {
							window.clearInterval(slideInterval);
						}
						nextSlide();
						if (settings.autoplay) {
							slideInterval = setInterval(nextSlide,settings.duration);
						}
					}
				});
				btn_prev.addEventListener('click', function(){
					if (!isAnimating) {
						if (slideInterval) {
							window.clearInterval(slideInterval);
						}
						previousSlide();
						if (settings.autoplay) {
							slideInterval = setInterval(nextSlide,settings.duration);
						}
					}
				});

			controls_nav.appendChild(btn_prev);
			controls_nav.appendChild(btn_next);
			carousel.appendChild(controls_nav);
		}

		if (settings.audio && settings.audioSrc) {
			let audio = document.createElement('audio');
			audio.src = settings.audioSrc;
			audio.autoplay = true;
			audio.loop = true;
			audio.classList.add('hc-audio');

			let audio_wrapper = document.createElement('div');
				audio_wrapper.className = "audio-wrapper";
			let audio_icon = document.createElement('img');
				audio_icon.src = './img/partials/music-2-fill.svg';

			let audio_bars = document.createElement('ul');
				audio_bars.className = "bars paused";
				audio_bars.setAttribute('id', 'bars');
				audio_bars.setAttribute('title', 'Click to Play/Pause Audio');

			audio_bars.addEventListener('click', function(){
			    if (audio.duration > 0 && !audio.paused) {
				    audio.pause(); 
				    this.classList.add('paused');
				    if (this.classList.contains('played')) {
				    	this.classList.remove('played');
				    }
				} 
				else {
				    audio.play(); 
				    this.classList.add('played');
				    if (this.classList.contains('paused')) {
				    	this.classList.remove('paused');
				    }
				}
			});

			let bar1 = document.createElement('li');
			let bar2 = document.createElement('li');
			let bar3 = document.createElement('li');
			let bar4 = document.createElement('li');
			let bar5 = document.createElement('li');
			let bar6 = document.createElement('li');
			let bar7 = document.createElement('li');

			audio_bars.appendChild(audio_icon);
			audio_bars.appendChild(bar1);
			audio_bars.appendChild(bar2);
			audio_bars.appendChild(bar3);
			audio_bars.appendChild(bar4);
			audio_bars.appendChild(bar5);
			audio_bars.appendChild(bar6);
			audio_bars.appendChild(bar7);

			audio_wrapper.appendChild(audio_bars);
			carousel.appendChild(audio_wrapper);
		}

		slides[0].classList.add('slide-current');
		let slide_no = 1;

		slides.forEach(function(e){

			let hc_img = e.querySelector('.hc-img')
			let hc_name = e.querySelector('.hc-name')
			let hc_title = e.querySelector('.hc-title')
			let hc_subtitle = e.querySelector('.hc-subtitle')
			let hc_desc = e.querySelector('.hc-desc')

			let hc_img_wrapper = document.createElement('div');
				hc_img_wrapper.className = "hc-img-wrapper";

			let img_reveal = document.createElement('div');
				img_reveal.className = "img-reveal";

			let hc_info = document.createElement('div');
				hc_info.className = "hc-info";

			let slide_identity = document.createElement('div');
				slide_identity.className = "slide-identity";

			let hc_id = document.createElement('div');
				hc_id.className = "hc-id";

			let hc_title_wrapper = document.createElement('div');
				hc_title_wrapper.className = "hc-title-wrapper";

			let title_reveal = document.createElement('div');
				title_reveal.className = "title-reveal";

			let hc_subtitle_wrapper = document.createElement('div');
				hc_subtitle_wrapper.className = "hc-subtitle-wrapper";

			let subtitle_reveal = document.createElement('div');
				subtitle_reveal.className = "subtitle-reveal";

			let just_div = document.createElement('div');

			hc_id.innerHTML = slide_no;

			hc_img_wrapper.appendChild(hc_img);
			hc_img_wrapper.appendChild(img_reveal);

			slide_identity.appendChild(hc_id);
			slide_identity.appendChild(hc_name);

			hc_title_wrapper.appendChild(hc_title);
			hc_title_wrapper.appendChild(title_reveal);

			hc_subtitle_wrapper.appendChild(hc_subtitle);
			hc_subtitle_wrapper.appendChild(subtitle_reveal);

			just_div.appendChild(hc_subtitle_wrapper);

			hc_info.appendChild(slide_identity);
			hc_info.appendChild(hc_title_wrapper);
			hc_info.appendChild(just_div);
			hc_info.appendChild(hc_desc);

			e.appendChild(hc_img_wrapper);
			e.appendChild(hc_info);

			slide_no++;
		});

		let currentSlide = 0;

		if (settings.autoplay) {
			slideInterval = setInterval(nextSlide,settings.duration);	
		}

		function nextSlide() {
		    goToSlide(currentSlide, 1);
		}

		function previousSlide() {
		    goToSlide(currentSlide, -1);
		}

		function goToSlide(n, dir) {

			isAnimating = true;
			if (dir == 1) {
				slides[((n+dir+1)+slides.length)%slides.length].classList.remove('slide-out');
			}
			else {
				slides[((n+dir-1)+slides.length)%slides.length].classList.remove('slide-out');
			}

			slides[currentSlide].classList.remove('slide-current');
			slides[currentSlide].classList.add('slide-out');
		    
		    currentSlide = ((n+dir)+slides.length)%slides.length;
		    slides[currentSlide].classList.add('slide-current');
		    if (slides[currentSlide].classList.contains('slide-out')) {
		    	slides[currentSlide].classList.remove('slide-out')
		    }
		    window.setTimeout(()=> {isAnimating = false;}, 1500);
		}

	});
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
/* 03 Sep 2019*/