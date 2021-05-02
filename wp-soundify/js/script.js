/*!
* Template Main JavaScript File
* This file is mainly used for initialization of plugins and adding event listeners

* WP Soundify | WordPress Audio Plugin
* Author: Web_Trendy
* Copyright 2019 - 2021 © Web_Trendy (https://codecanyon.net/user/web_trendy/portfolio)
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
            {name: "beer_can_opening"},
            {name: "bell_ring"},
            {name: "branch_break"},
            {name: "button_click"},
            {name: "button_click_on"},
            {name: "button_push"},
            {name: "button_tiny"},
            {name: "camera_flashing"},
            {name: "camera_flashing_2"},
            {name: "cd_tray"},
            {name: "computer_error"},
            {name: "door_bell"},
            {name: "door_bump"},
            {name: "glass"},
            {name: "keyboard_desk"},
            {name: "light_bulb_breaking"},
            {name: "metal_plate"},
            {name: "metal_plate_2"},
            {name: "pop_cork"},
            {name: "snap"},
            {name: "staple_gun"},
            {name: "tap"},
            {name: "water_droplet"},
            {name: "water_droplet_2"},
            {name: "water_droplet_3"},
            
            {name: "jingles_1"},
            {name: "high_up"},
            {name: "high_down"},
            {name: "low_down"},
            {name: "low_down"},
            {name: "one_shot_2"},
            {name: "one_shot_3"},
            {name: "orchestral_phrase_1"},
            {name: "orchestral_phrase_10"},
            {name: "orchestral_phrase_20"},
            {name: "pep_sound_1"},
            {name: "pep_sound_2"},
            {name: "percussive_elements_1"},
            {name: "percussive_elements_2"},
            {name: "percussive_elements_3"},
            {name: "percussive_elements_4"},
            {name: "percussive_elements_5"},
            {name: "phaser_down_1"},
            {name: "phaser_down_2"},
            {name: "power_up_3"},
            {name: "signature_1"},
            {name: "signature_2"},
            {name: "signature_sound_1"},
            {name: "space_trash_1"},
            {name: "tech_6"},
            {name: "three_tone_2"},
        ],
        path: "js/sounds/",
        preload: true,
        multiplay: true,
        volume: 1
    });



	$("#beer_can").on('click', ()=>{
		ion.sound.play('beer_can_opening');
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

	$("#jingles_1").on('click', ()=>{
		ion.sound.play('jingles_1');
	});
	$("#high_up").on('click', ()=>{
		ion.sound.play('high_up');
	});
	$("#high_down").on('click', ()=>{
		ion.sound.play('high_down');
	});
	$("#low_down").on('click', ()=>{
		ion.sound.play('low_down');
	});
	$("#one_shot_2").on('click', ()=>{
		ion.sound.play('one_shot_2');
	});
	$("#one_shot_3").on('click', ()=>{
		ion.sound.play('one_shot_3');
	});
	$("#orchestral_phrase_1").on('click', ()=>{
		ion.sound.play('orchestral_phrase_1');
	});
	$("#orchestral_phrase_10").on('click', ()=>{
		ion.sound.play('orchestral_phrase_10');
	});
	$("#orchestral_phrase_20").on('click', ()=>{
		ion.sound.play('orchestral_phrase_20');
	});
	$("#pep_sound_1").on('click', ()=>{
		ion.sound.play('pep_sound_1');
	});
	$("#pep_sound_2").on('click', ()=>{
		ion.sound.play('pep_sound_2');
	});
	$("#percussive_elements_1").on('click', ()=>{
		ion.sound.play('percussive_elements_1');
	});
	$("#percussive_elements_2").on('click', ()=>{
		ion.sound.play('percussive_elements_2');
	});
	$("#percussive_elements_3").on('click', ()=>{
		ion.sound.play('percussive_elements_3');
	});
	$("#percussive_elements_4").on('click', ()=>{
		ion.sound.play('percussive_elements_4');
	});
	$("#percussive_elements_5").on('click', ()=>{
		ion.sound.play('percussive_elements_5');
	});
	$("#phaser_down_1").on('click', ()=>{
		ion.sound.play('phaser_down_1');
	});
	$("#phaser_down_2").on('click', ()=>{
		ion.sound.play('phaser_down_2');
	});
	$("#power_up_3").on('click', ()=>{
		ion.sound.play('power_up_3');
	});
	$("#signature_1").on('click', ()=>{
		ion.sound.play('signature_1');
	});
	$("#signature_2").on('click', ()=>{
		ion.sound.play('signature_2');
	});
	$("#signature_sound_1").on('click', ()=>{
		ion.sound.play('signature_sound_1');
	});
	$("#space_trash_1").on('click', ()=>{
		ion.sound.play('space_trash_1');
	});
	$("#tech_6").on('click', ()=>{
		ion.sound.play('tech_6');
	});
	$("#three_tone_2").on('click', ()=>{
		ion.sound.play('three_tone_2');
	});

	document.getElementById("cp_year").innerHTML = new Date().getFullYear();

});