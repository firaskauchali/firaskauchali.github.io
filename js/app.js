/*/jslint browser: true*/
/*global $, jQuery, alert, Foundation*/
$(document).foundation();

$('.accordion-title').on('click', function () {
    'use strict';
    $(this).parent().prependTo(".accordion");
});

/*$('.accordion-title').on('click', function () {
    'use strict';
    if ($(this).parent().is('.is-active')) {
        $(this).parent().prependTo('.accordion');
    } else {
        $(this).parent().appendTo('.accordion');
    }
});*/

$(".accordion-title").click(function () {
    'use strict';
    setTimeout(function () {
        if (Foundation.MediaQuery.atLeast('medium')) {
            $('html,body').animate({scrollTop: $('.is-active').offset().top - $('header').height()}, 500);
            return false;
        } else {
            $('html,body').animate({scrollTop: $('.is-active').offset().top}, 620);
        }
    }, 0);
});

$(window).bind("load", function () {
    'use strict';
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