$(document).ready(function(){

  $(".c").hover(function(){
  	$(this).find(".o").fadeTo("fast", 1);
  },
    function(){
        $(this).find(".o").fadeTo("fast", "0");
    });

  $(".navbar-brand").hover(function(){
    $(this).css("color", "grey");
  },
  function(){
      $(this).css("color", "white");
  });

});
