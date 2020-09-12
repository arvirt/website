$(function (){
    $('#img-piezasGraficas').css({'width':$('.embed-container').css('width'),'height':$('.embed-container').css('height')});

    $('#img-piezasGraficas').hover(function (){
        $('#img-infoBox').css('display','block');
    });

    $('#img-piezasGraficas').mouseleave(function (){
        $('#img-infoBox').css('display','none');
    });

    $('#close').click(function(){
        $('#details').css('display','none');
        $('#footerSection').show();
    });

    $('#seeDetails').click(function(){
        $('#details').css('display','block');
        $("html, body").animate({ scrollTop: 50 }, "slow");
        $('#footerSection').hide();
    });

    
});