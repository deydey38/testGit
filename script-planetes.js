$(document).ready(function(){

  var opts = {
      lines: 11, // The number of lines to draw
      length: 28, // The length of each line
      width: 2, // The line thickness
      radius: 30, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 0.1, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#000', // #rgb or #rrggbb
      speed: 0.9, // Rounds per second
      trail: 74, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: 'auto', // Top position relative to parent in px
      left: 'auto' // Left position relative to parent in px
  };

  var spinner = null;
  var spinner_div = 0;
  spinner_div = $('#spinner').get(0);
  if(spinner == null) {
	   spinner = new Spinner(opts).spin(spinner_div);
  }else {
	    spinner.spin(spinner_div);
  }

	$(".navbar-brand").hover(function(){
    $(this).css("color", "grey");
  },
  function(){
      $(this).css("color", "white");
  });

  $(".jumbotron").css("margin-bottom", "0");

  $('.planetes').css('margin-bottom', '32px');

  $('.navbar').css('margin-bottom', '32px');

  $.get( "https://swapi.co/api/planets/?format=json", function( data ) {
    spinner.stop(spinner_div);
    $.each(data.results, function(index, value){
      console.log(index, value);
      var row = document.createElement("div");
 			var div8 = document.createElement("div");
 			var div4 = document.createElement("div");
			var slide = document.createElement("div");
			var button = document.createElement("button")

			$(row).addClass("row");
			$(slide).addClass("col-md-12 slide");
 			$(div8).addClass("col-md-8");
 			$(div4).addClass("col-md-4 text-right");
			$(button).addClass("btn btn-info btn-sm ");

			$(row).css("padding-bottom", "10px");
			$(row).css("padding-top", "10px");
			$(row).css("border-bottom", "1px solid black");
			$(slide).css("display", "none");
			$(div8).html("<h4>"+value.name+"</h4>");
			$(button).html("Plus d\'informations");

			$(slide).append('Climat : '+value.climate+'<br/>');
			$(slide).append("Diamètre : "+value.diameter+"m"+'<br/>');
			$(slide).append("Periode orbitale : "+value.orbital_period+" jours"+'<br/>');

			$(div4).append(button);
			$(".planetes").append(row);
			$(row).append(div8);
			$(div8).after(div4);
			$(row).append(slide);

			$(button).click(function() {
      	$(button).parent().parent().find('.slide').toggle('show');
				if($(button).text() === "Plus d\'informations"){
					$(button).html("Moins d\'informations");
				}else{
					$(button).html("Plus d\'informations");
				}
    	});
		});

    $(".planetes .row").last().css("border-bottom", "none");
  });

});
