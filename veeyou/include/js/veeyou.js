/*
 * VeeYou list grid view plugin
 * Version: 1.0.0
 * Created: 04 Nov 2019
 * Last Update: 04 Nov 2019
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "Wherever you are, and whatever you do, be in love." -Rumi
 *
 */ 


class veeyou {
	constructor(options){
		this.settings = {
			listImgWidth: null,
			gridItems: null,
			hideOnGrid: [],
		};
		Object.assign(this.settings, options);
		let documentobj = document.documentElement;
		if (this.settings.hideOnGrid.length > 0) {
			this.settings.hideOnGrid.forEach(function(el){
				el = '.'+el;
				let obj = document.querySelectorAll(el);
				if (obj.length > 0) {
					[...obj].forEach(function(element){
						element.classList.add('hide-on-grid');	
					});
				}
				
			});
		}
		documentobj.style.setProperty('--veeyou-list-img-width', this.settings.listImgWidth);
		documentobj.style.setProperty('--veeyou-grid-items', this.settings.gridItems);
		this.init();
	}
	init(){
		let listbtn = document.querySelector('#veeyou_list_view');
		let gridbtn = document.querySelector('#veeyou_grid_view');
		let contents = document.querySelector('.veeyou-contents');
		listbtn.addEventListener('click', function(){
			if (!contents.classList.contains('view-list')) {
				contents.classList.add('view-list');
				contents.classList.remove('view-grid');
			}
		});
		gridbtn.addEventListener('click', function(){
			if (!contents.classList.contains('view-grid')) {
				contents.classList.add('view-grid');
				contents.classList.remove('view-list');
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