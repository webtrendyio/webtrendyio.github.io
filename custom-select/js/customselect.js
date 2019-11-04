/*!
 * Custom Select | Advanced Select Inputs for Forms
 * Version: 1.0.0
 * Created: 05 Nov 2019
 * Last Update: 05 Nov 2019
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "We carry inside us the wonders we seek outside us." -Rumi
 *
 */ 


class CustomSelect {
	constructor(options){
		
		this.settings = {
			bgColor: null,
			hoverColor: null,
			fontSize: null,
			listHeight: null,
			elements: document.querySelectorAll('select.cs-input'),
		};

		Object.assign(this.settings, options);
		let documentobj = document.documentElement;

		documentobj.style.setProperty('--bgColor', this.settings.bgColor);
		documentobj.style.setProperty('--hoverColor', this.settings.hoverColor);
		documentobj.style.setProperty('--fontSize', this.settings.fontSize);
		documentobj.style.setProperty('--listHeight', this.settings.listHeight);

		[...this.settings.elements].forEach((selectItem) => {

	        let placeholder = selectItem.getAttribute('data-placeholder') || 'Please Select One';
	        let optionsArray = [...selectItem.querySelectorAll('option')];

	        let csBuilt = document.createElement("div");
	        csBuilt.className = selectItem.classList.value;
	        csBuilt.classList.add('cs-built');

	        let csWrapper = document.createElement("div");
	        csWrapper.className = "cs-wrapper";

	        let csPlaceholder = document.createElement("div");
	        csPlaceholder.className = "cs-placeholder";
	        csPlaceholder.textContent = placeholder;

	        let csOptions = document.createElement("ul");
	        csOptions.className = "cs-options";

	        for (var i = 0; i < optionsArray.length; i++) {
	        	let currentOption = document.createElement("li");
	        	currentOption.textContent = optionsArray[i].textContent;

	        	if (optionsArray[i].getAttribute('data-image')) {
					let currentImage = document.createElement("img");
		        	currentImage.setAttribute('src', optionsArray[i].getAttribute('data-image'));
		        	currentOption.appendChild(currentImage);
	        	}

	        	currentOption.setAttribute('data-value', optionsArray[i].value);

	        	csOptions.appendChild(currentOption);
	        }
	        csWrapper.appendChild(csPlaceholder);
	        csWrapper.appendChild(csOptions);
	        csBuilt.appendChild(csWrapper);
	        selectItem.insertAdjacentElement('beforebegin',csBuilt);

	        csWrapper.addEventListener('click', openSelect); 
	    });

	    function openSelect(e) {

	    	let selectInput = this.parentNode.nextSibling;
	    	let placeholder = this.firstChild;
	    	let placeholderText;
	    	
	    	if (e.target.classList.contains('cs-placeholder') || e.target.classList.contains('cs-wrapper')) {
        		this.classList.toggle('active');
        	}
	    
	    	else {
	    		selectInput.value = e.target.getAttribute('data-value');
	    		placeholder.classList.add('selected');

	    		if (e.target.textContent == "") {
	    			if (e.target.hasAttribute('data-value')) {
	    				placeholderText = e.target.getAttribute('data-value');	
	    			}
	    			else {
	    				placeholderText = e.target.parentNode.getAttribute('data-value');
	    			}
	    		}
	    		else {
	    			placeholderText = e.target.textContent;
	    		}
	    		placeholder.textContent = placeholderText;
	    		this.classList.remove('active');
	    	}

	    }

	    function closeOther() {
	    	let other = document.querySelectorAll('.cs-wrapper.active');
	    	[...other].forEach((item) => {
	    		item.classList.remove('active');
	    	});
	    }

	    

	    document.addEventListener('click', function out(e) {
        	if (!e.target.classList.contains('cs-placeholder') && !e.target.classList.contains('cs-wrapper') && e.target.nodeName != 'LI' ) {
        		closeOther();
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