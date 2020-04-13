/*!
 * WP Post Filter View | WPBakery Page Builder Addon
 * Author: Web_Trendy
 * Copyright 2019 © Web_Trendy (https://codecanyon.net/user/web_trendy/portfolio)
 * Licensed under Envato (https://codecanyon.net/licenses/standard)
 *
 * "Open your hands if you want to be held." -Rumi
 *
 */
 
$(document).ready(function(){

	let buttons = $(".pfv-button"), row = $(".pfv-row");

	buttons.on('click', function() {
		let dataFilter = $(this).attr("data-filter-button");
		buttons.removeClass("active");
		$(this).addClass("active");
		row.attr("data-filter-view", dataFilter);
	});

});