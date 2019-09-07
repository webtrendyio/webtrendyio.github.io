/*
 * FVW Slider
 * Version: 1.0.0
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "Wherever you are, and whatever you do, be in love." -Rumi
 *
 */ 


let fvwSlider = function(options) {
	let settings = {
		selector: '.fvw-slider',
		duration: 4000,
		audio: false,
		audioSrc: null,
		controls: true,
		autoplay: true,
		layout: 'layout1',
		captionBackground: ['#eb7070', '#fec771', '#e6e56c', '#64c4ed','#39bdc8','#ffb961']
	}

	Object.assign(settings, options);

	if (settings.duration < 3000) {settings.duration = 3000;}
	
	let wrapper = document.querySelectorAll(settings.selector);
	let isAnimating = false;
	let slideInterval = null;

	wrapper.forEach(function(slider){
		slider.classList.add(settings.layout);
		slider.classList.add('forward');
		let slides = slider.querySelectorAll('.fvw-slide');

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
			slider.appendChild(controls_nav);
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
			slider.appendChild(audio_wrapper);
		}

		
		slides[0].classList.add('slide-current');
		slides[1].classList.add('slide-in');
		let slide_no = 0;

		slides.forEach(function(e){

			let slide_img = e.querySelector('.slide-img');
			let slide_title = e.querySelector('.slide-title');
			let slide_info = e.querySelector('.slide-info');

			slide_img.className = '';
			slide_title.className = '';
			slide_info.className = '';

			slide_img.setAttribute('alt', slide_title.innerText);

			let div_slide_img = document.createElement('div');
			div_slide_img.className = "slide-img";

			let div_slide_title = document.createElement('div');
			div_slide_title.className = "slide-title";

			let div_slide_info = document.createElement('div');
			div_slide_info.className = "slide-info";

			let div_slide_desc = document.createElement('div');
			div_slide_desc.className = "slide-desc";

			let div_slide_no = document.createElement('div');
			div_slide_no.className = "slide-no";

			let span_slide_no = document.createElement('div');
			span_slide_no.innerText = "#" + (slide_no + 1);

			div_slide_desc.setAttribute('style','background-color: ' + settings.captionBackground[slide_no]);

			div_slide_img.appendChild(slide_img);
			div_slide_title.appendChild(slide_title);
			div_slide_no.appendChild(span_slide_no);
			div_slide_desc.appendChild(slide_info);
			div_slide_info.appendChild(div_slide_no);
			div_slide_info.appendChild(div_slide_desc);

			e.appendChild(div_slide_img);
			e.appendChild(div_slide_title);
			e.appendChild(div_slide_info);

			slide_no = (slide_no+1)%settings.captionBackground.length;
		});

		let currentSlide = 0;
		let prevSlide = slides.length - 1;
		let nxtSlide = 1;

		if (settings.autoplay) {
			slideInterval = setInterval(nextSlide,settings.duration);	
		}

		function nextSlide() {
			if (slider.classList.contains('backward')) {
				slider.classList.remove('backward');
				slider.classList.add('forward');
			}
		    goToSlide(currentSlide, 1);
		}

		function previousSlide() {
			if (slider.classList.contains('forward')) {
				slider.classList.remove('forward');
				slider.classList.add('backward');
			}
		    goToSlide(currentSlide, -1);
		}

		function goToSlide(n, dir) {

			isAnimating = true;
		
			if (slides[nxtSlide].classList.contains('slide-in')) {
		    	slides[nxtSlide].classList.remove('slide-in');
		    }

			if (slides[prevSlide].classList.contains('slide-out')) {
		    	slides[prevSlide].classList.remove('slide-out');
		    }
			
			slides[currentSlide].classList.remove('slide-current');
			slides[currentSlide].classList.add('slide-out');
		    
		    currentSlide = ((n+dir)+slides.length)%slides.length;

		    if (dir == 1) {
				prevSlide = ((n+dir-1)+slides.length)%slides.length;
				nxtSlide = ((n+dir+1)+slides.length)%slides.length;
			}
			else {
				prevSlide = ((n+dir+1)+slides.length)%slides.length;
				nxtSlide = ((n+dir-1)+slides.length)%slides.length;
			}

		    slides[nxtSlide].classList.add('slide-in');
		    slides[currentSlide].classList.add('slide-current');   

		    if (slides[currentSlide].classList.contains('slide-in')) {
		    	slides[currentSlide].classList.remove('slide-in');
		    }

		    slides[currentSlide].addEventListener('animationend', ()=> {
		    	isAnimating = false;
		    }, {once: true});
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
/* 08 Sep 2019*/