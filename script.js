$(document).ready(function(){

  $(".choix").hover(function(){
  	//$(this).css("background", "#212529");
  	$(this).find("h3").css("font-weight", "bold");
  },
    function(){
        //$(this).css("background", "white");
        $(this).find("h3").css("font-weight", "normal");
    });

  $(".choix").click(function() {
    window.location = $(this).find("a").attr("href");
});
  
})
