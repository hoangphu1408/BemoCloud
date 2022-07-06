(function ($) {
    "use strict";
    const imJs = {
        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        d: function (e) {
            (this._window = $(window)),
                (this._document = $(document)),
                (this._body = $("body")),
                (this._html = $("html"));
        },
        methods: function (e) {
            imJs.stickyHeader();
            imJs.toggleMenuMobile();
        },
        stickyHeader: function (e) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $(".header--sticky").addClass("sticky");
                } else {
                    $(".header--sticky").removeClass("sticky");
                }
            });
        },
        toggleMenuMobile() {
            $(".header-default .hamburger-icon").on("click", function (e) {
                $(".header-default .main-menu").toggleClass("show");
                $("body").toggleClass("no-scroll");
            });
        },
        backToTopInit: function () {
            // declare variable
            const scrollTop = $(".backto-top");
            $(window).scroll(function () {
                // declare variable
                const topPos = $(this).scrollTop();
                // if user scrolls down - show scroll to top button
                if (topPos > 100) {
                    $(scrollTop).css("opacity", "1");
                } else {
                    $(scrollTop).css("opacity", "0");
                }
            });

            //Click event to scroll to top
            $(scrollTop).on("click", function () {
                $("html, body").animate(
                    {
                        scrollTop: 0,
                        easingType: "linear",
                    },
                    500,
                );
                return false;
            });
        },
    };
    imJs.m();
})(jQuery, window);
