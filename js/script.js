/* Preloader Handling */
(function ($, window) {
    $(window).on('load', () => {
        $('#status').fadeOut();
        $('#preloader').fadeOut();

    })
})($, window);