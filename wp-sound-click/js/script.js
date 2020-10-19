/*!
* Template Main JavaScript File
* This file is mainly used for initialization of plugins and adding event listeners

* WP Sound Click | WordPress Audio Plugin
* Author: Web_Trendy
* Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy/portfolio)
* Licensed under Envato (https://codecanyon.net/licenses/standard)
*
* "Life is balance of holding on and letting go." --Rumi
*
*/ 

	

$(document).ready(function(){

	lax.setup();

	const update = () => {
		lax.update(window.scrollY);
		window.requestAnimationFrame(update);
	}

	window.requestAnimationFrame(update);

	let w = window.innerWidth;
	window.addEventListener("resize", function() {
		if(w !== window.innerWidth) {
		  lax.updateElements();
		}
	});

	// Ion Sounds
	 ion.sound({
        sounds: [
            {
                alias: "beer",
                name: "beer_can_opening",
                volume: 0.9,
                preload: false
            },
            {
                name: "bell_ring",
                volume: 0.2
            },
            {name: "branch_break", volume: 0.3},
            {name: "button_click"},
            {name: "button_click_on"},
            {name: "button_push"},
            {name: "button_tiny", volume: 0.6},
            {name: "camera_flashing"},
            {name: "camera_flashing_2"},
            {name: "cd_tray"},
            {name: "computer_error"},
            {name: "door_bell"},
            {name: "door_bump", volume: 0.3},
            {name: "glass"},
            {name: "keyboard_desk"},
            {name: "light_bulb_breaking", volume: 0.2},
            {name: "metal_plate"},
            {name: "metal_plate_2"},
            {name: "pop_cork"},
            {name: "snap"},
            {name: "staple_gun"},
            {name: "tap"},
            {name: "water_droplet"},
            {name: "water_droplet_2"},
            {name: "water_droplet_3"}
        ],
        path: "js/sounds/",
        preload: true,
        multiplay: true
    });



	$("#beer_can").on('click', ()=>{
		ion.sound.play('beer');
	});
	$("#big_button").on('click', ()=>{
		ion.sound.play('button_push');
	});
	$("#computer_error").on('click', ()=>{
		ion.sound.play('computer_error');
	});
	$("#light_bulb_breaking").on('click', ()=>{
		ion.sound.play('light_bulb_breaking');
	});
	$("#staple_gun").on('click', ()=>{
		ion.sound.play('staple_gun');
	});
	$("#bell_ring").on('click', ()=>{
		ion.sound.play('bell_ring');
	});
	$("#tiny_button").on('click', ()=>{
		ion.sound.play('button_tiny');
	});
	$("#door_bell").on('click', ()=>{
		ion.sound.play('door_bell');
	});
	$("#metal_plate").on('click', ()=>{
		ion.sound.play('metal_plate');
	});
	$("#tap").on('click', ()=>{
		ion.sound.play('tap');
	});
	$("#branch_break").on('click', ()=>{
		ion.sound.play('branch_break');
	});
	$("#camera_flashing").on('click', ()=>{
		ion.sound.play('camera_flashing');
	});
	$("#door_bump").on('click', ()=>{
		ion.sound.play('door_bump');
	});
	$("#metal_plate_2").on('click', ()=>{
		ion.sound.play('metal_plate_2');
	});
	$("#water_droplet_1").on('click', ()=>{
		ion.sound.play('water_droplet');
	});
	$("#button_click").on('click', ()=>{
		ion.sound.play('button_click');
	});
	$("#camera_flashing_2").on('click', ()=>{
		ion.sound.play('camera_flashing_2');
	});
	$("#glass").on('click', ()=>{
		ion.sound.play('glass');
	});
	$("#pop_cork").on('click', ()=>{
		ion.sound.play('pop_cork');
	});
	$("#water_droplet_2").on('click', ()=>{
		ion.sound.play('water_droplet_2');
	});
	$("#keyboard_click").on('click', ()=>{
		ion.sound.play('button_click_on');
	});
	$("#cd_tray").on('click', ()=>{
		ion.sound.play('cd_tray');
	});
	$("#keyboard_desk").on('click', ()=>{
		ion.sound.play('keyboard_desk');
	});
	$("#snap").on('click', ()=>{
		ion.sound.play('snap');
	});
	$("#water_droplet_3").on('click', ()=>{
		ion.sound.play('water_droplet_3');
	});

});