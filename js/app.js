/*/jslint browser: true*/
/*global $, jQuery, alert, Foundation*/
$(document).foundation();

$(".accordion-title").click(function () {
    'use strict';
    setTimeout(function () {
        if (Foundation.MediaQuery.atLeast('medium')) {
            $('html,body').animate({scrollTop: $('.is-active').offset().top - $('header').height()}, 'slow');
        } else {
            $('html,body').animate({scrollTop: $('.is-active').offset().top}, 'slow');
        }
    }, 310);
});

$('.close').click(function () {
	$('.accordion').foundation('up', $('.accordion-content'));
});

$(window).bind("load", function () {
    "use strict";
    var footer = $(".footer"),
        pos = footer.position(),
        height = $(window).height();
    height = height - pos.top;
    height = height - footer.height();
    if (height > 0) {
        footer.css({
            'margin-top': height + 'px'
        });
    }
});