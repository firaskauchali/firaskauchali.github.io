/*/jslint browser: true*/
/*global $, jQuery, alert, Foundation*/
$(document).foundation();

$(".accordion-title").click(function () {
    'use strict';
    setTimeout(function () {
        if (Foundation.MediaQuery.atLeast('medium')) {
            $('html,body').animate({scrollTop: $('.is-active').offset().top - $('header').height()}, 620);
            return false;
        } else {
            $('html,body').animate({scrollTop: $('.is-active').offset().top}, 620);
        }
    }, 310);
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