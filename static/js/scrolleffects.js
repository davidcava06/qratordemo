$(document).ready(function() {
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
        triggerElement: '#s1'
    })
    .setClassToggle('#t1', 'fade-in')
    .addIndicators() // for debugging
    .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#s2'
    })
    .setClassToggle('#t2', 'fade-in')
    .addIndicators() // for debugging
    .addTo(controller);

    var scene3 = new ScrollMagic.Scene({
        triggerElement: '#s3'
    })
    .setClassToggle('#t3', 'fade-in')
    .addIndicators() // for debugging
    .addTo(controller);
    
});
