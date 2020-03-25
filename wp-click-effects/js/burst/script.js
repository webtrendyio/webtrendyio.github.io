/*
 * WP Click Effects
 * Version: 1.0.0
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy/portfolio)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "Wherever you are, and whatever you do, be in love." -Rumi
 *
 */ 


let jsClickEffect = function(selector, effect, options) {
	let settings = {
		selector: '.fvw-slider',
		duration: 4000,
		audio: false,
		audioSrc: null,
		controls: true,
		autoplay: true,
		layout: 'layout1',
		colorPallet: ['', '#fec771', '#e6e56c', '#64c4ed','#39bdc8','#ffb961']
	}

	Object.assign(settings, options);

	let elements = document.querySelectorAll(selector);
	
	elements.forEach(function(el){
		el.addEventListener('click', function(e){
			let coords = { x: e.pageX, y: e.pageY };
			let randomCoords = { x: 'rand('+(e.pageX-30)+', '+(e.pageX+30)+')', y: 'rand('+(e.pageY-30)+', '+(e.pageY+30)+')' };
			switch (effect) {
				case 'style-1':
					e1sh1.tune(coords).replay();
			    	e1sh2.tune(coords).replay();
		    	break;

		    	case 'style-2':
		    		e2sh1.tune(coords).replay();
		    	break;

		    	case 'style-3':
		    		e3sh1.tune(coords).replay();
			    	e3sh2.tune(coords).replay();
		    	break;

		    	case 'style-4':
		    		e4sh1.tune(coords).replay();
		    	break;

		    	case 'style-5':
		    		e5sh1.tune(coords).generate().replay();
					e5sh2.tune(coords).replay();
		    	break;

		    	case 'style-6':
		    		e6sh1.tune(coords).replay();
		    	break;

		    	case 'style-7':
		    		e7sh1.tune(coords).replay();
			    	e7sh2.tune(coords).replay();
		    	break;

		    	case 'style-8':
		    		e8sh1.tune(coords).replay();
			    	e8sh2.tune(coords).replay();
			    	e8sh3.tune(coords).replay();
		    	break;

		    	case 'style-9':
		    		e9sh1.tune(coords).replay();
		    	break;

		    	case 'style-10':
		    		e10sh1.tune(coords).replay();
			    	e10sh2.tune(coords).replay();
		    	break;

		    	case 'style-11':
		    		e11sh1.tune(coords).replay();
			    	e11sh2.tune(coords).replay();
		    	break;

		    	case 'style-12':
		    		e12sh1.tune(randomCoords).generate().replay();
		    		e12sh2.tune(randomCoords).generate().replay();
		    		e12sh3.tune(randomCoords).generate().replay();
		    	break;

		    	case 'style-13':
		    		e13sh1.tune(coords).generate().replay();
		    	break;

		    	case 'style-14':
		    		e14sh1.tune(coords).generate().replay();
		    		e14sh2.tune(coords).generate().replay();
		    		e14sh3.tune(coords).replay();
		    	break;

		    	case 'style-15':
		    		e15sh1.tune(coords).replay();
		    		e15sh2.tune(coords).replay();
		    	break;
			}
		});
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

let CIRCLE_RADIUS = 20;

// Effect 1
let e1sh1 = new mojs.Burst({
	left: 0, top: 0,
	radius:   { 10: 30 },
	angle:    45,
	children: {
		shape:        'line',
		radius:       3,
		scale:        1,
		stroke:       '#FD7932',
		strokeDasharray: '100%',
		strokeDashoffset: { '-100%' : '100%' },
		duration:     700,
		easing:       'quad.out',
		delay: 150
	}
});
let e1sh2 = new mojs.Shape({
  left: 0, top: 0,
  stroke:   { '#E5214A' : '#FD7932' },
  strokeWidth: { [1*CIRCLE_RADIUS] : 0 },
  fill:       'none',
  scale:      { 0: 1 },
  radius:     CIRCLE_RADIUS,
  duration:   400,
  easing:     'cubic.out'
});

// Effect 2
let e2sh1 = new mojs.Burst({
	left: 0, top: 0,
	radius: {5 : 20},
	count: 10,
	children: {
		radius: 3
	}
});

// Effect 3
let e3sh1 = new mojs.Burst({
	left: 0, top: 0,
	radius: {10 : 25},
	count: 6,
	angle: 45,
	children: {
		radius: 3,
		easing:       'quad.out',
	}
});
let e3sh2 = new mojs.Burst({
	left: 0, top: 0,
	radius: {25 : 10},
	count: 6,
	children: {
		radius: 3,
		fill: 'orange',
		easing:       'quad.out',
	}
});

// Effect 4
let e4sh1 = new mojs.Burst({
	left: 0, top: 0,
	radius:   { 10: 25 },
	angle:    45,
	children: {
		shape:        'line',
		radius:       3,
		scale:        1,
		stroke:       '#FD7932',
		strokeDasharray: '100%',
		strokeDashoffset: { '-100%' : '100%' },
		duration:     700,
		easing:       'quad.out',
	}
});

// Effect 5
let e5sh1 = new mojs.Burst({
  left: 0, top: 0,
  radius:   10,
  count:    3,
  timeline: { delay: 20 },
  children: {
    stroke:       'black',
    fill:         'none',
    scale:        1,
    strokeWidth:  { 0: 4 },
    radius:       { 'rand(10, 15)' : 0 },
    degreeShift:  'rand(-50, 50)',
    duration:     450,
    delay:        'rand(0, 250)',
  }
});
let e5sh2 = new mojs.Burst({
	left: 0, top: 0,
	radius:   { 10: 25 },
	angle:    0,
	count: 9,
	children: {
		shape:        'line',
		radius:       3,
		scale:        1,
		stroke:       'green',
		strokeDasharray: '100%',
		strokeDashoffset: { '-100%' : '100%' },
		duration:     300,
		easing:       'quad.out',
	}
});

// Effect 6
let e6sh1 = new mojs.Shape({
  left: 0, top: 0,
  stroke:   { '#E5214A' : '#CC8EF5' },
  strokeWidth: { [2*CIRCLE_RADIUS] : 0 },
  fill:       'none',
  scale:      { 0: 1 },
  radius:     CIRCLE_RADIUS,
  duration:   400,
  easing:     'cubic.out'
});

// Effect 7
let e7sh1 = new mojs.Shape({
  left: 0, top: 0,
  stroke:   { '#E5214A' : '#CC8EF5' },
  strokeWidth: { [2*CIRCLE_RADIUS] : 0 },
  fill:       'none',
  scale:      { 0: 1 },
  radius:     CIRCLE_RADIUS,
  duration:   400,
  easing:     'cubic.out'
});
let e7sh2 = new mojs.Shape({
  left: 0, top: 0,
  stroke:   { '#E5214A' : '#CC8EF5' },
  strokeWidth: { [2*CIRCLE_RADIUS] : 0 },
  fill:       'none',
  scale:      { 0: 1 },
  radius:     CIRCLE_RADIUS,
  duration:   400,
  easing:     'cubic.out',
  delay: 300
});

// Effect 8
let e8sh1 = new mojs.Burst({
	left: 0, top: 0,
	radius:   { 10: 25 },
	angle:    45,
	count: 4,
	children: {
		shape:        'line',
		radius:       3,
		scale:        1,
		stroke:       '#FD7932',
		strokeDasharray: '100%',
		strokeDashoffset: { '-100%' : '100%' },
		duration:     700,
		easing:       'quad.out',
		delay: 150
	}
});
let e8sh2 = new mojs.Burst({
	left: 0, top: 0,
	radius:   { 10: 25 },
	angle:    0,
	count: 4,
	children: {
		shape:        'line',
		radius:       3,
		scale:        1,
		stroke:       'green',
		strokeDasharray: '100%',
		strokeDashoffset: { '-100%' : '100%' },
		duration:     300,
		easing:       'quad.out',
	}
});
let e8sh3 = new mojs.Shape({
  left: 0, top: 0,
  stroke:   { '#E5214A' : '#FD7932' },
  strokeWidth: { [1*CIRCLE_RADIUS] : 0 },
  fill:       'none',
  scale:      { 1: 0 },
  radius:     CIRCLE_RADIUS,
  duration:   400,
  easing:     'cubic.out'
});

// Effect 9
let e9sh1 = new mojs.Burst({
  left: 0, top: 0,
  degree:   180,
  angle:    -90,
  radius:   { 10: 25 },
  count:    5,
  children: {
    shape:        'line',
    radius:       3,
    radiusY:      0,
    scale:        1,
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    stroke:       '#555555' ,
    easing:       'cubic.out',
    duration:     600
  }
});

// Effect 10
let e10sh1 = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 10: 25 },
  count:    10,
  children: {
    shape:        'line',
    radius:       2,
    radiusY:      0,
    scale:        1,
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    stroke:       '#555555' ,
    easing:       'cubic.out',
    duration:     600
  }
});
let e10sh2 = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 10: 25 },
  count:    10,
  children: {
    shape:        'line',
    radius:       2,
    radiusY:      0,
    scale:        1,
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    stroke:       '#ff1111' ,
    easing:       'cubic.out',
    delay: 	300,
    duration:     600
  }
});

// Effect 11
let e11sh1 = new mojs.Burst({
	left: 0, top: 0,
    radius:   { 0: 20 },
    count:    7,
    angle:    { 0: 90 },
    children: {
    	fill: 'orange'
    }
});
let e11sh2 = new mojs.Burst({
	left: 0, top: 0,
    radius:   { 0: 20 },
    count:    7,
    angle:    { 0: 80 },
    children: {
    	fill: 'red',
    	delay: 300,
    }
});

// Effect 12
let e12sh1 = new mojs.Burst({
	left: 0, top: 0,
    radius:   { 0: 50 },
    count:    7,
    opacity:  { 1: 0 },
    children: {
    	fill: 'red',
    	radius: 2.5,
    	delay: 100,
    }
});
let e12sh2 = new mojs.Burst({
	left: 0, top: 0,
    radius:   { 0: 40 },
    count:    7,
    opacity:  { 1: 0 },
    children: {
    	fill: 'orange',
    	radius: 2.5,
    	delay: 50,
    }
});
let e12sh3 = new mojs.Burst({
	left: 0, top: 0,
    radius:   { 0: 30 },
    count:    7,
    opacity:  { 1: 0 },
    children: {
    	fill: 'green',
    	radius: 2.5
    }
});

// Effect 13
let e13sh1 = new mojs.Burst({
	left: 0, top: 0,
	radius:   25,
	count:    3,
	children: {
		stroke:       'black',
		fill:         'none',
		scale:        1,
		strokeWidth:  { 8: 0 },
		radius:       { 0 : 'rand(8, 12)' },
		degreeShift:  'rand(-50, 50)',
		duration:     400,
		delay:        'rand(0, 250)',
	}
});

// Effect 14
let e14sh1 = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 0: 30 },
  angle:    'rand(0, 360)',
  timeline: { delay: 50 },
  children: {
    shape:        'line',
    stroke:       'black',
    fill:         'none',
    scale:        1,
    scaleX:       { 1: 0 },
    // easing:       'cubic.out',
    duration:     650
  }
});
let e14sh2 = new mojs.Burst({
  left: 0, top: 0,
  radius:   28,
  count:    3,
  timeline: { delay: 200 },
  children: {
    stroke:       'black',
    fill:         'none',
    scale:        1,
    strokeWidth:  { 8: 0 },
    radius:       { 0 : 'rand(6, 10)' },
    degreeShift:  'rand(-50, 50)',
    duration:     450,
    delay:        'rand(0, 250)',
  }
});
let e14sh3 = new mojs.Shape({
  left: 0, top: 0,
  radius:       { 0: 16, easing: 'sin.out' },
  fill:         'none',
  stroke:       'black',
  strokeWidth:  { 10: 0 },
  duration:     450,
  easing:       'cubic.out'
});

// Effect 15
let e15sh1 = new mojs.Shape({
	left: 0, top: 0,
	stroke:   { '#E5214A' : '#CC8EF5' },
	strokeWidth: { [2*CIRCLE_RADIUS] : 0 },
	fill:       'none',
	scale:      { 0: 1 },
	radius:     CIRCLE_RADIUS,
	duration:   400,
	easing:     'cubic.out'
});
let e15sh2 = new mojs.Burst({
	left: 0, top: 0,
	radius:   { 4: 32 },
	angle:    45,
	count:    14,
	children: {
		radius:       2.5,
		fill: 
			[
				{ '#9EC9F5' : '#9ED8C6' },
			    { '#91D3F7' : '#9AE4CF' },
			  
			    { '#DC93CF' : '#E3D36B' },
			    { '#CF8EEF' : '#CBEB98' },
			  
			    { '#87E9C6' : '#1FCC93' },
			    { '#A7ECD0' : '#9AE4CF' },
			  
			    { '#87E9C6' : '#A635D9' },
			    { '#D58EB3' : '#E0B6F5' },
			  
			    { '#F48BA2' : '#CF8EEF' },
			    { '#91D3F7' : '#A635D9' },

			    { '#CF8EEF' : '#CBEB98' },
			    { '#87E9C6' : '#A635D9' },
		    ],
		scale:        { 1: 0, easing: 'quad.in' },
		pathScale:    [ .8, null ],
		degreeShift:  [ 13, null ],
		duration:     [ 500, 700 ],
		easing:       'quint.out'
	}
});



// Effect 1
let we1sh1 = new mojs.Burst({
	left: 0, top: 0,
	radius:   { 10: 30 },
	angle:    45,
	children: {
		shape:        'line',
		radius:       3,
		scale:        1,
		stroke:       'white',
		strokeDasharray: '100%',
		strokeDashoffset: { '-100%' : '100%' },
		duration:     700,
		easing:       'quad.out',
		delay: 150
	}
});
let we1sh2 = new mojs.Shape({
  left: 0, top: 0,
  stroke:   { 'white' : 'white' },
  strokeWidth: { [1*CIRCLE_RADIUS] : 0 },
  fill:       'none',
  scale:      { 0: 1 },
  radius:     CIRCLE_RADIUS,
  duration:   400,
  easing:     'cubic.out'
});

// Effect 2
let we2sh1 = new mojs.Burst({
	left: 0, top: 0,
	radius: {5 : 20},
	count: 10,
	children: {
		radius: 3,
		fill: 'white'
	}
});

// Effect 3
let we3sh1 = new mojs.Burst({
	left: 0, top: 0,
	radius: {10 : 25},
	count: 6,
	angle: 45,
	children: {
		radius: 3,
		easing:       'quad.out',
	}
});
let we3sh2 = new mojs.Burst({
	left: 0, top: 0,
	radius: {25 : 10},
	count: 6,
	children: {
		radius: 3,
		fill: 'white',
		easing:       'quad.out',
	}
});

// Effect 4
let we4sh1 = new mojs.Burst({
	left: 0, top: 0,
	radius:   { 10: 25 },
	angle:    45,
	children: {
		shape:        'line',
		radius:       3,
		scale:        1,
		stroke:       'white',
		strokeDasharray: '100%',
		strokeDashoffset: { '-100%' : '100%' },
		duration:     700,
		easing:       'quad.out',
	}
});

// Effect 5
let we5sh1 = new mojs.Burst({
  left: 0, top: 0,
  radius:   10,
  count:    3,
  timeline: { delay: 20 },
  children: {
    stroke:       'white',
    fill:         'none',
    scale:        1,
    strokeWidth:  { 0: 4 },
    radius:       { 'rand(10, 15)' : 0 },
    degreeShift:  'rand(-50, 50)',
    duration:     450,
    delay:        'rand(0, 250)',
  }
});
let we5sh2 = new mojs.Burst({
	left: 0, top: 0,
	radius:   { 10: 25 },
	angle:    0,
	count: 9,
	children: {
		shape:        'line',
		radius:       3,
		scale:        1,
		stroke:       'white',
		strokeDasharray: '100%',
		strokeDashoffset: { '-100%' : '100%' },
		duration:     300,
		easing:       'quad.out',
	}
});

// Effect 6
let we6sh1 = new mojs.Shape({
  left: 0, top: 0,
  stroke:   { 'white' : 'white' },
  strokeWidth: { [2*CIRCLE_RADIUS] : 0 },
  fill:       'none',
  scale:      { 0: 1 },
  radius:     CIRCLE_RADIUS,
  duration:   400,
  easing:     'cubic.out'
});

// Effect 7
let we7sh1 = new mojs.Shape({
  left: 0, top: 0,
  stroke:   { 'white' : 'white' },
  strokeWidth: { [2*CIRCLE_RADIUS] : 0 },
  fill:       'none',
  scale:      { 0: 1 },
  radius:     CIRCLE_RADIUS,
  duration:   400,
  easing:     'cubic.out'
});
let we7sh2 = new mojs.Shape({
  left: 0, top: 0,
  stroke:   { 'white' : 'white' },
  strokeWidth: { [2*CIRCLE_RADIUS] : 0 },
  fill:       'none',
  scale:      { 0: 1 },
  radius:     CIRCLE_RADIUS,
  duration:   400,
  easing:     'cubic.out',
  delay: 300
});

// Effect 8
let we8sh1 = new mojs.Burst({
	left: 0, top: 0,
	radius:   { 10: 25 },
	angle:    45,
	count: 4,
	children: {
		shape:        'line',
		radius:       3,
		scale:        1,
		stroke:       'white',
		strokeDasharray: '100%',
		strokeDashoffset: { '-100%' : '100%' },
		duration:     700,
		easing:       'quad.out',
		delay: 150
	}
});
let we8sh2 = new mojs.Burst({
	left: 0, top: 0,
	radius:   { 10: 25 },
	angle:    0,
	count: 4,
	children: {
		shape:        'line',
		radius:       3,
		scale:        1,
		stroke:       'white',
		strokeDasharray: '100%',
		strokeDashoffset: { '-100%' : '100%' },
		duration:     300,
		easing:       'quad.out',
	}
});
let we8sh3 = new mojs.Shape({
  left: 0, top: 0,
  stroke:   { 'white' : 'white' },
  strokeWidth: { [1*CIRCLE_RADIUS] : 0 },
  fill:       'none',
  scale:      { 1: 0 },
  radius:     CIRCLE_RADIUS,
  duration:   400,
  easing:     'cubic.out'
});

// Effect 9
let we9sh1 = new mojs.Burst({
  left: 0, top: 0,
  degree:   180,
  angle:    -90,
  radius:   { 10: 25 },
  count:    5,
  children: {
    shape:        'line',
    radius:       3,
    radiusY:      0,
    scale:        1,
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    stroke:       'white' ,
    easing:       'cubic.out',
    duration:     600
  }
});

// Effect 10
let we10sh1 = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 10: 25 },
  count:    10,
  children: {
    shape:        'line',
    radius:       2,
    radiusY:      0,
    scale:        1,
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    stroke:       'white' ,
    easing:       'cubic.out',
    duration:     600
  }
});
let we10sh2 = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 10: 25 },
  count:    10,
  children: {
    shape:        'line',
    radius:       2,
    radiusY:      0,
    scale:        1,
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    stroke:       'white' ,
    easing:       'cubic.out',
    delay: 	300,
    duration:     600
  }
});

// Effect 11
let we11sh1 = new mojs.Burst({
	left: 0, top: 0,
    radius:   { 0: 20 },
    count:    7,
    angle:    { 0: 90 },
    children: {
    	fill: 'white'
    }
});
let we11sh2 = new mojs.Burst({
	left: 0, top: 0,
    radius:   { 0: 20 },
    count:    7,
    angle:    { 0: 80 },
    children: {
    	fill: 'white',
    	delay: 300,
    }
});

// Effect 12
let we12sh1 = new mojs.Burst({
	left: 0, top: 0,
    radius:   { 0: 50 },
    count:    7,
    opacity:  { 1: 0 },
    children: {
    	fill: 'white',
    	radius: 2.5,
    	delay: 100,
    }
});
let we12sh2 = new mojs.Burst({
	left: 0, top: 0,
    radius:   { 0: 40 },
    count:    7,
    opacity:  { 1: 0 },
    children: {
    	fill: 'white',
    	radius: 2.5,
    	delay: 50,
    }
});
let we12sh3 = new mojs.Burst({
	left: 0, top: 0,
    radius:   { 0: 30 },
    count:    7,
    opacity:  { 1: 0 },
    children: {
    	fill: 'white',
    	radius: 2.5
    }
});

// Effect 13
let we13sh1 = new mojs.Burst({
	left: 0, top: 0,
	radius:   25,
	count:    3,
	children: {
		stroke:       'white',
		fill:         'none',
		scale:        1,
		strokeWidth:  { 8: 0 },
		radius:       { 0 : 'rand(8, 12)' },
		degreeShift:  'rand(-50, 50)',
		duration:     400,
		delay:        'rand(0, 250)',
	}
});

// Effect 14
let we14sh1 = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 0: 30 },
  angle:    'rand(0, 360)',
  timeline: { delay: 50 },
  children: {
    shape:        'line',
    stroke:       'white',
    fill:         'none',
    scale:        1,
    scaleX:       { 1: 0 },
    // easing:       'cubic.out',
    duration:     650
  }
});
let we14sh2 = new mojs.Burst({
  left: 0, top: 0,
  radius:   28,
  count:    3,
  timeline: { delay: 200 },
  children: {
    stroke:       'white',
    fill:         'none',
    scale:        1,
    strokeWidth:  { 8: 0 },
    radius:       { 0 : 'rand(6, 10)' },
    degreeShift:  'rand(-50, 50)',
    duration:     450,
    delay:        'rand(0, 250)',
  }
});
let we14sh3 = new mojs.Shape({
  left: 0, top: 0,
  radius:       { 0: 16, easing: 'sin.out' },
  fill:         'none',
  stroke:       'white',
  strokeWidth:  { 10: 0 },
  duration:     450,
  easing:       'cubic.out'
});

// Effect 15
let we15sh1 = new mojs.Shape({
	left: 0, top: 0,
	stroke:   { 'white' : 'white' },
	strokeWidth: { [2*CIRCLE_RADIUS] : 0 },
	fill:       'none',
	scale:      { 0: 1 },
	radius:     CIRCLE_RADIUS,
	duration:   400,
	easing:     'cubic.out'
});
let we15sh2 = new mojs.Burst({
	left: 0, top: 0,
	radius:   { 4: 32 },
	angle:    45,
	count:    14,
	children: {
		radius:       2.5,
		fill: 
			[
				{ 'white' : 'white' },
			    { 'white' : 'white' },
			  
			    { 'white' : 'white' },
			    { 'white' : 'white' },
			  
			    { 'white' : 'white' },
			    { 'white' : 'white' },
			  
			    { 'white' : 'white' },
			    { 'white' : 'white' },
			  
			    { 'white' : 'white' },
			    { 'white' : 'white' },

			    { 'white' : 'white' },
			    { 'white' : 'white' },
		    ],
		scale:        { 1: 0, easing: 'quad.in' },
		pathScale:    [ .8, null ],
		degreeShift:  [ 13, null ],
		duration:     [ 500, 700 ],
		easing:       'quint.out'
	}
});

