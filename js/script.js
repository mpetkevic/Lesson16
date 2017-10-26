$('.icon').click(function(){
    if ($('.icon').hasClass('ion-android-menu')) {
        console.log('Has Class!!!');
        $('.icon').removeClass('ion-android-menu');
        $('.icon').addClass('ion-android-close');
        $('.menu').css('transform', 'translateX(0%)');
    } else {
        $('.icon').removeClass('ion-android-close');
        $('.icon').addClass('ion-android-menu');
        $('.menu').css('transform', 'translateX(-100%)')
    };
});

$("#btn1").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
});

$("#btn2").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
});

$("#btn3").click(function() {
    $('html, body').animate({
        scrollTop: $("#blog").offset().top
    }, 1000);
});

$("#btn4").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#btn5").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});