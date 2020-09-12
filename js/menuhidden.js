$(window).scroll(function() {		
    if ($(this).scrollTop() > 100) {
        $('.header').css('visibility','hidden');
    }

    if ($(this).scrollTop() <= 100) {
        $('.header').css('visibility','visible');
    }	
}); 