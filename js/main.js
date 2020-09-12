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

$('#btn_openFloatMenu').on('click',function(){
	$('#floatMenu').show();
});

$('#btn_closeFloatMenu').on('click',function(){
	$('#floatMenu').hide();
});

/* Btn nosotros*/
$('#btn_floatNosotros').mouseover(function(){
	if (!$(this).hasClass('active')){
		$('#floatNosotros').removeClass('inactive_btnFloat');
		$('#floatNosotros').addClass('active_btnFloat');
		$('#floatNosotros').css('color','white');
	}	
});

$('#btn_floatNosotros').mouseout(function(){
	if (!$(this).hasClass('active')){
		$('#floatNosotros').removeClass('active_btnFloat');
		$('#floatNosotros').addClass('inactive_btnFloat');
	}
});

/* Btn portafolio*/
$('#btn_floatPortafolio').mouseover(function(){
	if (!$(this).hasClass('active')){
		$('#floatPortafolio').removeClass('inactive_btnFloat');
		$('#floatPortafolio').addClass('active_btnFloat');
		$('#floatPortafolio').css('color','white');
	}
});

$('#btn_floatPortafolio').mouseout(function(){
	if (!$(this).hasClass('active')){
		$('#floatPortafolio').removeClass('active_btnFloat');
		$('#floatPortafolio').addClass('inactive_btnFloat');
	}
});

/* Btn Hablemos*/
$('#btn_floatHablemos').mouseover(function(){
	if (!$(this).hasClass('active')){
		$('#floatHablemos').removeClass('inactive_btnFloat');
		$('#floatHablemos').addClass('active_btnFloat');
		$('#floatHablemos').css('color','white');
	}
});

$('#btn_floatHablemos').mouseout(function(){
	if (!$(this).hasClass('active')){
		$('#floatHablemos').removeClass('active_btnFloat');
		$('#floatHablemos').addClass('inactive_btnFloat');
	}
});

$('#btn_floatNosotros').click(function(){
	window.open('http://arvirt.com/nueva','_self');
});

$('#btn_floatPortafolio').click(function(){
	window.open('http://arvirt.com/nueva/portafolio.html','_self');
});

$('#btn_floatHablemos').click(function(){
	window.open('http://arvirt.com/nueva/hablemos.html','_self');
});

$('#btn_floatFacebook,#btn_facebook').click(function(){
	window.open('https://www.facebook.com/Arvirt/');
});

$('#btn_floatInstagram,#btn_instagram').click(function(){
	window.open('https://www.instagram.com/arvirt3d/');
});

$('#btn_floatLinkedin,#btn_linkedin').click(function(){
	window.open('https://www.linkedin.com/company/arvirt3d');
});