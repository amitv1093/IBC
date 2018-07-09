$(document).ready(function() {

    //var windHeight, windWidth;

    // console.log(windHeight + " " + windWidth);

    $(window).on("resize", function() {
        $(".banner").css('minHeight', $(window).height());
        // windHeight = $(window).height();
        // windWidth = $(window).width();

        // $("#image-svg").attr({
        //     "height": windHeight,
        //     "width": windWidth
        // });
        // $("#clip-triangle > polygon").attr("points", "0 0,0 " + windHeight + "," + windWidth + " " + windHeight + "," + windWidth + " 0");
    }).resize();


    $(".ibc-menu").click(function(event) {
        $(this).toggleClass('clickMenu').closest('header').toggleClass('add-zindex');
        $(".banner").toggleClass('activeBanner').promise().done(function() {
            $(".logo-bg").toggleClass('active-logo-bg');
        });
        $("body").toggleClass("overflow-hidden");
        $(".nav-menu").toggleClass('is-visible');
    });

    /*$(".ibc-menu-close").click(function(event) {
        $(".banner").toggleClass('activeBanner').promise().done(function() {
            $(".logo-bg").toggleClass('active-logo-bg');
        });
        $("body").toggleClass("overflow-hidden");
        $(".nav-menu").removeClass('is-visible');
    });*/

});