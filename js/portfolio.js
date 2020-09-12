let iPlus=1;
$('#plus').on('click',function (){
    if (iPlus%2==0){
	    $('#plus').css({'transition':'background 0.5s ease','-moz-transition':'background 0.5s ease','-webkit-transition':'background 0.5s ease','-o-transition':'background 0.5s ease','background':'url("../../img/minus.png")','background-size':'100% 100%'});
    }
    else {
        $('#plus').css({'transition':'background 0.5s ease','-moz-transition':'background 0.5s ease','-webkit-transition':'background 0.5s ease','-o-transition':'background 0.5s ease','background':'url("../../img/plus.png")','background-size':'100% 100%'}); 
    }
    iPlus++;
}); 