/*
 * Tweet Selection Twitter Highlighter
 * Version: 1.0.0
 * Created: 30 Sep 2019
 * Last Update: 30 Sep 2019
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "These pains you feel are messengers. Listen to them." -Rumi
 *
 */ 

 class tweetSelection {
	constructor(options) {   
	    this.config = {
        	title: 'Share on Twitter',
        	size: 'normal',
        	backgroundColor: '#333',
        	textColor: 'white',
        	via: false,
        	showLink: true,
	    };

	    this.base = 'https://twitter.com/intent/tweet?text=';
		this.location = window.location.href;

	    Object.assign(this.config, options);

	    document.body.style.setProperty('--bgColor', this.config.backgroundColor);
	    document.body.style.setProperty('--txtColor', this.config.textColor);

	    this.tooltip = document.createElement('div');
	    this.tooltip.classList.add('tweet-selection-wrapper');
	    this.tooltip.classList.add(this.config.size);
	    this.tooltip.setAttribute('aria-active', false);

	    this.icon = document.createElement('span');
		this.icon.classList.add('tweet-selection-icon');

		this.link = document.createElement('a');
		this.link.innerText = this.config.title;
		this.link.setAttribute('target', '_blank');

		this.link.appendChild(this.icon);
		this.tooltip.appendChild(this.link);
		document.body.appendChild(this.tooltip);

	    this.initEvents();
	}

	initEvents() {
	    document.addEventListener( "mouseup", () => {
	    	if (window.getSelection().toString() && window.getSelection().getRangeAt(0).endOffset > 0) {
	    	 	
	    		let uri = encodeURIComponent('"' + window.getSelection().toString() + '"');
				let attribute = `${this.base}${uri}`;
				if (this.config.showLink) {
					attribute += ` (${this.location})`;
				}
				if (this.config.via) {
					attribute += `&via=${this.config.via}`;
				}
				
				this.tooltip.setAttribute('aria-active', true);
				this.link.setAttribute('href', attribute);

				let pos_top = window.getSelection().getRangeAt(0).getBoundingClientRect().top + window.scrollY + "px";
				let pos_left = window.getSelection().getRangeAt(0).getBoundingClientRect().left + window.getSelection().getRangeAt(0).getBoundingClientRect().width/2 + "px";

				document.body.style.setProperty('--top', pos_top);
				document.body.style.setProperty('--left', pos_left);
	    	}
		});

		document.addEventListener("mousedown", (e) => {
			if (e.target != this.link && this.tooltip.getAttribute('aria-active')) {
				this.tooltip.setAttribute('aria-active', false);
			}
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