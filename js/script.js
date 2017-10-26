$('.fa').click(function(){
    if ($('.fa').hasClass('fa-bars')) {
        console.log('Has Class!!!');
        $('.fa').removeClass('fa-bars');
        $('.fa').addClass('fa-times');
        $('.menu').css('transform', 'translateX(0%)');
    } else {
        $('.fa').removeClass('fa-times');
        $('.fa').addClass('fa-bars');
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