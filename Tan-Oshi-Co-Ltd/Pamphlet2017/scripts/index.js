jQuery(function ($) {
    'use strict';

    let $loading = $('<div>', { 'class': 'loading' }).appendTo('body');

    WebFont.load({
        custom: {
            families: ['azuki', 'KFhimajiILLUST', 'mini-convenie', 'RiiMonakaBLt']
        },
        loading: function () {
            console.log('全てのWebフォントのロードが開始されたとき');
        },
        active: function () {
            $loading.remove();
            $loading = null;
            console.log('全てのWebフォントのロードが成功したとき');
        },
        inactive: function () {
            console.log('全てのWebフォントのロードが失敗したとき');
        }
    });

    setTimeout(function () {
        $.scrollify({
            section: ".page",
        });
    }, 1000);

    $('.your-name').on('click', function (e) {
        e.preventDefault();
        $(this).blur();
        setTimeout(() => {
            const inputName = prompt('おなまえは？', $('#your-name').val());
            if (inputName) {
                localStorage.setItem('user-name', inputName);
                $('#your-name').val(inputName);
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

    let startTimestamp;
    $('body').on('touchstart', function (e) {
        startTimestamp = new Date().getTime();
    });

    $('body').on('touchend', function (e) {
        const $target = $(e.target);
        //if ($target.is('input, label')) return;
        let memo;
        if ($target.is('.memo')) {
            // if (confirm('はずす？')) {
            //     localStorage.removeItem('memo' + $target.prop('memo-id'));
            //     $target.remove();

            //     if (!$('.memo').length) {
            //         localStorage.setItem('memo-count', 0);
            //     }
            // }
            memo = $target.text();
        }

        const holdTime = new Date().getTime() - startTimestamp;
        if (holdTime < 500) return;

        // TODO: 使い物になるまで封印
        //return;

        while (true) {
            memo = prompt('付箋', memo);
            if (memo) {
                if (memo.length > 24) {
                    alert('メモが長すぎます！');
                    continue;
                }
                const memoCount = Number(localStorage.getItem('memo-count'));
                localStorage.setItem('memo-count', memoCount + 1);
                const memoObj = {
                    memo: memo,
                    pageX: e.changedTouches[0].pageX - 20,
                    pageY: e.changedTouches[0].pageY - 15,
                    hue: Math.random() * 360,
                    deg: Math.random() * 4 - 2
                };
                localStorage.setItem('memo' + memoCount, JSON.stringify(memoObj));
                $('<div>')
                    .addClass('memo')
                    .prop('memo-id', memoCount)
                    .css({
                        'left': memoObj.pageX,
                        'top': memoObj.pageY,
                        'border-color': `hsla(${memoObj.hue}, 79%, 41%, 0.533)`,
                        'transform': `rotate(${memoObj.deg}deg)`
                    })
                    .text(memo)
                    .appendTo('body');
            } else {
                localStorage.removeItem('memo' + $target.prop('memo-id'));
                $target.remove();

                if (!$('.memo').length) {
                    localStorage.setItem('memo-count', 0);
                }
            }
            break;
        }
    });

    if (true) {
        const memoCount = Number(localStorage.getItem('memo-count'));
        for (let i = 0; i < memoCount || 0; i++) {
            const memoObj = JSON.parse(localStorage.getItem('memo' + i));
            if (memoObj) {
                $('<div>')
                    .addClass('memo')
                    .prop('memo-id', i)
                    .css({
                        'left': memoObj.pageX,
                        'top': memoObj.pageY,
                        'border-color': `hsla(${memoObj.hue}, 79%, 41%, 0.533)`,
                        'transform': `rotate(${memoObj.deg}deg)`
                    })
                    .text(memoObj.memo)
                    .appendTo('body');
            }
        }
    }

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