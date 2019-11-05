/*!
 * iRead Article Reading Progress
 * Version: 1.0.0
 * Created: 06 Nov 2019
 * Last Update: 06 Nov 2019
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "We carry inside us the wonders we seek outside us." -Rumi
 *
 */ 


class iRead {
	constructor(options){
		
		this.settings = {
			articleId: null,
			svg: document.getElementById('iread_indicator'),
		};

		Object.assign(this.settings, options);

		let scrollY,
		docElem = window.document.documentElement;

		this.articleHeight = document.getElementById(this.settings.articleId).clientHeight;
		this.articleOffset = document.getElementById(this.settings.articleId).offsetTop;
		this.windowHeight = window.innerHeight;
		this.percentage;
		this.reversePercentage;

		this.init();
		requestAnimationFrame(() => this.render());
	}



	init() {
		window.addEventListener( 'scroll', scrollUpdate);

    }

    render() {
		this.percentage = (((scrollY+this.windowHeight)-this.articleOffset)*100/this.articleHeight).toFixed();
		this.reversePercentage = (100 - this.percentage);
		if (this.percentage > 0 && this.percentage <= 100) {
			this.settings.svg.setAttribute('stroke-dashoffset', this.reversePercentage*2);
		}
		requestAnimationFrame(() => this.render());
    }


}

function scrollUpdate() {
	scrollY = window.pageYOffset;
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