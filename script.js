$(document).ready(function () {
    $('.show').on('click', function () {
        $('.cols').fadeIn(500);
    });

    $('.hide').on('click', function () {
        $('.cols').fadeOut(500);
    });

    $('.one-by-one').on('click', function () {
        $('.cols').show(500);
    });

    $('.fade').on('click', function () {
        $('.cols').hide(500);
    });

    $('.slide').on('click', function () {
        $('.cols').slideToggle();
    });


    $('.custom').on('click', function () {
        $('.cols').animate({
            opacity: 0.5,
            height: 'toggle'
        }, 5000);
    });

});
