$(document).ready(function(){

	$.get( "https://swapi.co/api/people/?format=json", function( data ) {
    $( ".perso" ).html( data.results );
		 //console.log(data.results[0].name);
	$.each(data.results, function(index, value){
		$(".perso").append("<p>"+value.name+"</p>");
		console.log(index, value);
	});
  });
  
})
