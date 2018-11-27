$(function () {
    $(".img-circle").finish();
    $(".img-circle").hoverIntent(
        function () {
            $(this).filter(':not(:animated)').animate({button: '300px'})
                .animate({width: '400px', height: '300px'})
                .animate({opacity: '1'}, "fast");

        },
        function () {
            $(this).stop().animate({
                left: '0px',
                opacity: '0.5',
                width: '300px',
                height: '225px'
            }, "slow");
        }
    )
});