jQuery(function ($) {
    'use strict';

    $.scrollify({
        section: ".page",
    });

    $('#your-name').on('focus', function (e) {
        e.preventDefault();
        $(this).blur();
        setTimeout(() => {
            const inputName = prompt('おなまえは？', $(this).val());
            if (inputName) {
                localStorage.setItem('user-name', inputName);
                $(this).val(inputName);
            }
        });
    });
    const savedName = localStorage.getItem('user-name');
    if (savedName) {
        $('#your-name').val(savedName);
    }

    $('input[type="checkbox"]').on('change', function () {
        localStorage.setItem($(this).attr('id'), $(this).prop('checked'));
    });

    $('input[type="checkbox"]').each(function () {
        const v = localStorage.getItem($(this).attr('id'));
        $(this).prop('checked', v == 'true');
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