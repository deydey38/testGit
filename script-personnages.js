$(document).ready(function(){

	$(".navbar-brand").hover(function(){
    $(this).css("color", "grey");
  },
  function(){
      $(this).css("color", "white");
  });

	$('.perso').css('margin-bottom', '32px');

	$.get( "https://swapi.co/api/people/?format=json", function( data ) {
    //$( ".perso" ).html( data.results );
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
 			$(div4).addClass("col-md-4");
			$(button).addClass("btn btn-info btn-sm");

			$(row).css("padding-bottom", "10px");
			$(row).css("padding-top", "10px");
			$(row).css("border-bottom", "1px solid black");
			$(slide).css("display", "none");
			$(div8).html(value.name);
			$(button).html("Plus d\'informations");

			$(slide).append("Date de naissance : "+value.birth_year+"\n");
			$(slide).append("Poids : "+value.mass+"kg");

			$(div4).append(button);
			$(".perso").append(row);
			$(row).append(div8);
			$(div8).after(div4);
			$(row).append(slide);

			$(button).click(function() {
      	$(button).parent().parent().find('.slide').toggle('show');
    	});
		});
		$(".perso .row").last().css("border-bottom", "none");
		console.log("supression bordure");

  });

})
