$(document).ready(function(){

  $(".c").hover(function(){
  	$(this).find(".o").fadeTo("fast", 1);
  },
    function(){
        //$(this).css("background", "white");
        $(this).find(".o").fadeTo("fast", "0");
    });
  
})
