function responsive(){
	$('#portfolio_items').css('width',$(window).width()+'px');
	$('.parallax-window').css('height',($(window).height()*1.03)+'px');
	$('#contact').css('height',($(window).height()*0.8)+'px');
	$('.back-home').height($(window).height()*1.1);
	$('#lineas').css('height',$(window).height()+'px');
	$('#lineas').css('width',($(window).width()*0.5)+'px');
}

responsive();

window.onresize = function() {
    responsive();
}