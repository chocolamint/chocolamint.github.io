jQuery(function ($) {
    'use strict';

    var $h1 = $('h1');
    var $window = $(window);
    //var lastScrolledAt = 0;
    //var lastScrollTop = 0;
    $window.on('scroll', function () {

        var scrollTop = $window.scrollTop();
        var innerHeight = window.innerHeight;
        var percent = scrollTop / innerHeight;

        //console.log(percent);

        $h1.css({
            'opacity': Math.max(1 - percent, 0),
            'font-size': `${Math.min(140 / Math.max(1 - percent, 0), 300)}%`
        });

        //console.log(Date.now() - lastScrolledAt);
        //if (Date.now() - lastScrolledAt < 20) {
        //    if (percent < 0.4 && scrollTop < lastScrollTop) {
        //        $window.scrollTop(scrollTop - 10)
        //    }
        //    if (0.6 < percent && percent < 1.0 && lastScrollTop < scrollTop) {
        //        $window.scrollTop(scrollTop + 10)
        //    }
        //    if (1.0 < percent && percent < 1.4 && scrollTop < lastScrollTop) {
        //        $window.scrollTop(scrollTop - 10)
        //    }
        //    if (percent > 1.6 && percent < 2.0 && lastScrollTop < scrollTop) {
        //        $window.scrollTop(scrollTop + 10)
        //    }
        //}
        //
        //lastScrolledAt = Date.now();
        //lastScrollTop = scrollTop;

        $('h1,.summary,.schedule').css('height', `${innerHeight}px`);
        $('#foo').text(innerHeight.toString());
    });
    //$window.on('touchend', function () {

    //    var scrollTop = $window.scrollTop();
    //    var innerHeight = $window.innerHeight();
    //    var percent = scrollTop / innerHeight;

    //    if (percent < 0.5) {
    //        $('body').animate({ scrollTop: 0 }, 200);
    //    }
    //    if (0.5 <= percent && percent < 1.0) {
    //        $('body').animate({ scrollTop: innerHeight }, 200);
    //        //$window.scrollTop(innerHeight);
    //    }
    //    if (1.0 < percent && percent < 1.5) {
    //        $('body').animate({ scrollTop: innerHeight }, 200);
    //        //$window.scrollTop(innerHeight);
    //    }
    //    if (1.5 <= percent && percent < 2.0) {
    //        $('body').animate({ scrollTop: innerHeight * 2 }, 200);
    //        //$window.scrollTop(innerHeight * 2);
    //    }
    //});
    $window.trigger('scroll');

});