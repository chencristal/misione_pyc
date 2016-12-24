
$(document).ready(function(){

	$('#continuarHome123').click(function(){
		$("#animacion-container").slideUp();
		$("#emocionesHome").slideDown();
	});

	var URLhash = window.location.hash;

	if(URLhash == "#2" || URLhash == "#nuevo"){
		$('#animacion-container').show();
		$('#menuHomeContanider').hide();
	}else{
		$('#animacion-container').hide();
		$('#menuHomeContanider').show();

	}


});


