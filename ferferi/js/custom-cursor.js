/* 
Custom Cursor JS | By Web_Trendy
December 17, 2019 14:12 - 😎 
*/

const getMousePos = (e) => {
    let posx = 0;
    let posy = 0;
    posx = e.clientX;
    posy = e.clientY;
    return { x : posx, y : posy }
}


class CustomCursor {
	constructor(el){

		this.settings = {
			mousePos: {x:0, y:0},
			cursorWidth: 30,
			shape : 1,
			shapeClass: 'cursor-',
			color : '#000000',
			blending: 'normal',
			body: document.querySelector('body'),
			cursor: document.createElement('div'),
			cursorEl1: document.createElement('div'),
			cursorEl2: document.createElement('div'),
			link: document.querySelectorAll('a, input, textarea, .btn, label'),
		};

		Object.assign(this.settings, el);

		this.settings.shapeClass += this.settings.shape;  

		this.settings.body.style.setProperty('--cursor-width', this.settings.cursorWidth + "px");
		this.settings.body.style.setProperty('--color', this.settings.color);
		this.settings.body.style.setProperty('--blending-mode', this.settings.blending);

		this.init();

		this.settings.body.classList.add('custom-cursor'); 

		this.settings.cursor.classList.add('cursor');
		this.settings.cursorEl1.classList.add('cursor-el1');
		this.settings.cursorEl2.classList.add('cursor-el2');
		this.settings.cursor.appendChild(this.settings.cursorEl1);
		this.settings.cursor.appendChild(this.settings.cursorEl2);
		this.settings.body.appendChild(this.settings.cursor);
		
		this.settings.body.classList.add(this.settings.shapeClass);

		requestAnimationFrame(() => this.renderCursor());
		
	}

	init(){
		window.addEventListener('mousemove', ev => this.settings.mousePos = getMousePos(ev));
		[...this.settings.link].forEach((link) => {
	        link.addEventListener('mouseenter', () => this.enter() );
	        link.addEventListener('mouseleave', () => this.leave() );
	        link.addEventListener('click', () => this.click() );
	    });
	}

	renderCursor() {
			this.settings.cursorEl1.style.transform = `translate(${this.settings.mousePos.x}px, ${this.settings.mousePos.y}px)`;
			this.settings.cursorEl2.style.transform = `translate(${this.settings.mousePos.x}px, ${this.settings.mousePos.y}px)`;
		requestAnimationFrame(() => this.renderCursor());
	}

	enter() {
        this.settings.body.classList.add('onlink');
    }
    leave() {
        this.settings.body.classList.remove('onlink');
    }

    click() {
        // Feature for version 1.6
    }
}