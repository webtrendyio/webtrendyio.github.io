/*
 * Poya 3D Image Hover Effect | JavaScript Hover Animation Plugin
 * Author: Web_Trendy
 * Copyright 2020 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "Life is balance of holding on and letting go." -Rumi
 *
 */ 


	const rotateCoords = (e, el, pow) => {
		let posX = e.clientX - el.offset().left + $(window).scrollLeft();
        let posY = e.clientY - el.offset().top + $(window).scrollTop();

        let rotY = map(posX, 0, el.width(), -pow, pow);
        let rotX = map(posY, 0, el.height(), -pow, pow);

        return {x:rotX,  y:rotY}
	}

	function map(x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

	class ImageHover3d {
		constructor(el) {
			this.settings = {
				el: $("img"),
				intensity: 17,
				reverse: false,
				pivot: 'center',
				radius: 15,
				hue: false,
				saturate: false,
				contrast: false,
				zoom: false
			}
			Object.assign(this.settings, el);
			this.init();
		}
		init() {
			let pow = this.settings.intensity;

			this.settings.el.css('--wt-border-radius', this.settings.radius + "px");

			switch(this.settings.pivot) {
				case 'center': 
				break;
				case 'BottomLeft': 
					this.settings.el.children('.wt-image').css("transform-origin", "bottom left");
				break;
				case 'BottomRight': 
					this.settings.el.children('.wt-image').css("transform-origin", "bottom right");
				break;
				case 'TopLeft': 
					this.settings.el.children('.wt-image').css("transform-origin", "top left");
				break;
				case 'TopRight': 
					this.settings.el.children('.wt-image').css("transform-origin", "top right");
				break;
			}

			if (this.settings.reverse) {
				this.settings.el.on('mousemove', function(e){
					let coords = rotateCoords(e, $(this), pow);
					$(this).children('.wt-image').css("transform", "rotateY(" + -coords.y + "deg)" + " " + "rotateX(" + coords.x + "deg)");
				});
			}
			else {
				this.settings.el.on('mousemove', function(e){
					let coords = rotateCoords(e, $(this), pow);
					$(this).children('.wt-image').css("transform", "rotateY(" + coords.y + "deg)" + " " + "rotateX(" + -coords.x + "deg)");
				});
			}

			if (this.settings.hue) {
				this.settings.el.on('mousemove', function(e){
					let coords = rotateCoords(e, $(this), pow);
					$(this).find('img').css({
				    	filter: "hue-rotate(" + coords.x*coords.y + "deg)"
				    });
				});

				this.settings.el.on('mouseleave', function(e){
					let coords = rotateCoords(e, $(this), pow);
					$(this).find('img').css({
				    	filter: "hue-rotate(" + 0 + "deg)"
				    });
				});
			}

			if (this.settings.saturate) {
				this.settings.el.on('mousemove', function(e){
					let coords = rotateCoords(e, $(this), pow);
					$(this).find('img').css({
				    	filter: "saturate(" + coords.y/2*coords.x/2 + ")"
				    });
				});

				this.settings.el.on('mouseleave', function(e){
					let coords = rotateCoords(e, $(this), pow);
					$(this).find('img').css({
				    	filter: "saturate(" + 1 + ")"
				    });
				});
			}

			if (this.settings.contrast) {
				this.settings.el.on('mousemove', function(e){
					let coords = rotateCoords(e, $(this), pow);
					let no = 2 + coords.y*coords.x;
					$(this).find('img').css({
				    	filter: "contrast(" + no + ")"
				    });
				});

				this.settings.el.on('mouseleave', function(e){
					let coords = rotateCoords(e, $(this), pow);
					$(this).find('img').css({
				    	filter: "contrast(" + 1 + ")"
				    });
				});
			}

			if (this.settings.zoom) {
				this.settings.el.on('mouseenter', function(e){
					$(this).css({
				    	transform: "scale(" + 1.1 + ")"
				    });
				});

				this.settings.el.on('mouseleave', function(e){
					$(this).css({
				    	transform: "scale(" + 1 + ")"
				    });
				});
			}

			

			this.settings.el.on('mouseenter', function(e){
				$(this).children('.wt-image').css({
			    	transition: "all " + 0.05 + "s" + " linear"
			    });
			});

			this.settings.el.on('mouseleave', function(e){
				$(this).children('.wt-image').css({
			    	transition: "all " + 0.2 + "s" + " linear"
			    });
			    $(this).children('.wt-image').css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)");
			});
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