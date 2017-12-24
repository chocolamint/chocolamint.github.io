jQuery(function ($) {
    'use strict';

    var $h1 = $('h1');
    var $window = $(window);
    var initialHeight = window.innerHeight;
    $window.on('scroll', function () {

        var scrollTop = $window.scrollTop() + (window.innerHeight - initialHeight);
        var innerHeight = window.innerHeight;
        var percent = scrollTop / innerHeight;

        $h1.css({
            'opacity': Math.max(1 - percent, 0),
            //'font-size': `${Math.min(140 / Math.max(1 - percent, 0), 300)}%`
        });
    });
    $window.trigger('scroll');

    setInterval(function () {
        $('#bar').text(window.innerHeight);
        var scrollTop = window.innerHeight - initialHeight;
        if (scrollTop == 0) return;
        var innerHeight = window.innerHeight;
        var percent = scrollTop / innerHeight;
        $('h1').css({
            'height': `${window.innerHeight}px`,
            'opacity': 1 - percent
        });

    }, 15);
});