function detectMsBrowser() {
    using_ms_browser =
      navigator.appName == "Microsoft Internet Explorer" ||
      (navigator.appName == "Netscape" &&
        navigator.appVersion.indexOf("Edge") > -1) ||
      (navigator.appName == "Netscape" &&
        navigator.appVersion.indexOf("Trident") > -1);

    if (using_ms_browser == true) {
      alert(
        "Please use Chrome or Firefox for the best browsing experience!"
      );
    }
  }
  function setBrandMarginTop() {
    var bottomContainerHeight = $(".tm-welcome-container").height();

    $(".tm-brand-container-outer").css({
      "margin-top": -bottomContainerHeight + "px"
    });
  }

  $(function() {
    setBrandMarginTop();
    detectMsBrowser();

    // Handle window resize event
    $(window).resize(function() {
      setBrandMarginTop();
    });

    let pathImg = "img/";
    let img = 1;

    $(document).off('click','#btn_next').on('click','#btn_next',function (){
        if (img<13){
            img ++;
            console.log(img);
            $('#img_projectArq').attr('src',`${pathImg}${img}.jpg`);
            $('#btn_back').css('visibility','visible');
        }
        if (img==13){
          $('#btn_next').css('visibility','hidden');
        }
        if (img==3){
          $('#btn_video').parent().removeClass('d-none');
        }
        else{
          $('#btn_video').parent().addClass('d-none');
        }
    });

    $(document).off('click','#btn_back').on('click','#btn_back',function (){
      if (img>1){
          img --;
          $('#img_projectArq').attr('src',`${pathImg}${img}.jpg`);
          $('#btn_next').css('visibility','visible');
          
      }
      if (img==1){
        $('#btn_back').css('visibility','hidden');
      }
      if (img==3){
        $('#btn_video').parent().removeClass('d-none');
      }
      else{
        $('#btn_video').parent().addClass('d-none');
      }
  });

  });