jQuery(function ($) {
    'use strict';

    $.scrollify({
        section: ".page",
    });

    // $('.schedule dt').each(function () {
    //     const $dt = $(this);
    //     const hm = $dt.text().split(':');
    //     const time = (hm[0] - 7) * 60 + hm[1];
    //     const percentage = time / ((24 - 7) * 60);
    //     $dt.css('margin-top', percentage + '%');
    // });
    //setInterval(function () {
    //    $('#bar').text(window.innerHeight);
    //    var scrollTop = window.innerHeight - initialHeight;
    //    if (scrollTop == 0) return;
    //    var innerHeight = window.innerHeight;
    //    var percent = scrollTop / innerHeight;
    //    $('h1').css({
    //        'height': `${window.innerHeight}px`,
    //        'opacity': 1 - percent
    //    });

    //}, 15);
});