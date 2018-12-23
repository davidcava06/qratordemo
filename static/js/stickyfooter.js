jQuery(document).ready(function() {
    
    var navOffset = jQuery(".scroll-wrapper").offset().top;

    jQuery(".scroll-wrapper").wrap('<div class="nav-placeholder"></div>');
    jQuery(".nav-placeholder").height(jQuery(".scroll-wrapper").outerHeight());
    jQuery(".scroll-wrapper").wrapInner('<div class="nav-inner"></div>');
    jQuery(window).scroll(function() {
        var scrollPos = jQuery(window).scrollTop();

        if (scrollPos >= navOffset) {
            jQuery(".scroll-wrapper").addClass("fixedbottom");
        } else {
            jQuery(".scroll-wrapper").removeClass("fixedbottom");
        }
    })
    
});