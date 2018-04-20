/* global $, document, window */

$(document).ready(function () {

	if ($(window).width() < 600) {
		$('.marquee').marquee({
			speed: 150,
			duplicated: true,
			gap: 10,
			delayBeforeStart: 500
		});
	} else {
		$('.marquee').marquee({
			speed: 250,
			duplicated: true,
			gap: 10,
			delayBeforeStart: 500
		});
	}

});
