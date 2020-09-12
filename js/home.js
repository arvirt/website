var l=0;
var top_back_home=0;
 
$('.btn_menu').click(function (){
	
	if (l%2==0){
		$('.menu').css('display','block');
		$('.container-fluid').css('display','none');
		$('.tm-bg-blue-01').css('display','none');
		$('.tmPortfolio').css('display','none');
		$('#tmContact').css('display','none');
		$('body').css('overflow-y','hidden');
	}
	
	if (l%2==1){
		
		$('.menu').css('display','none');
		$('.container-fluid').css('display','block');
		$('.tm-bg-blue-01').css('display','block');
		$('.tmPortfolio').css('display','block');
		$('#tmContact').css('display','block');
		$('body').css('overflow-y','scroll');
	}
	
	l++;
});

$(window).scroll(function() {
				top_back_home=((($(this).scrollTop())*-1.15));
	
				$('.back-home').css('top',top_back_home+'px');
	
				if ($(this).scrollTop() > $(window).height()-36) {
					$('.home').css('visibility','hidden');
					$('.back-home').css('visibility','hidden');
					$('.triangulo').css('visibility','hidden');
					$('.header').css('visibility','hidden');
					$('#lineas').css('visibility','hidden');
				}
				if ($(this).scrollTop() <= $(window).height()-36) {
					$('.home').css('visibility','visible');
					$('.back-home').css('visibility','visible');
					$('.triangulo').css('visibility','visible');
					$('.header').css('visibility','visible');
					$('#lineas').css('visibility','visible');
				}
				if ($(this).scrollTop() > 6000) {
					$('.header').css('background','#6cb3e5');
					$('.buttons-header').css('display','inline-block');
					$('.btn_menu').css('display','none');
				} else {
					$('.btn_menu').css('display','block');
					$('.header').css('background','none');
					$('.buttons-header').css('display','inline-block');
				}		
}); 			
	
$('#fb').click(
	function (){
		window.open('https://facebook.com/arvirt');		
	}
);

$('#lkd').click(
	function (){	
		window.open('https://co.linkedin.com/company/arvirt-s-a-s');	
	}
);

$('#itg').click(
	function (){
		window.open('https://www.instagram.com/arvirt3D/?hl=es-la');
	}
);

$('#menu_btn_somos').click(
	function (){	
		window.open('http://www.arvirt.com/nueva/#somos','_self');	
	}
);

$('#menu_btn_portafolio').click(
	function (){
		window.open('http://www.arvirt.com/nueva/portafolio','_self');
	}
);

$('#menu_btn_hablemos').click(
	function (){	
		window.open('http://www.arvirt.com/nueva/hablemos','_self');	
	}
);