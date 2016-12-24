                var inicio = true; 
var segmentos=50;
var src;
var DeltaW=new Array();
var topFinal=350;
var leftFinal=280;
var NoFrames=100;
var frameRate=10;
var click=false;
var contIngrediente=1;
var perdio=false;
var gano=false;
var topSupFrascos=32;
var topInfFrascos=162;
var escala=0;
var imag;
var position;
var H;
var W;
var img;
var tituloGenreal;
var tipoIngrediente;
var deltaTop;
var deltaLeft;

var frasco1 = {
	top:topSupFrascos,
	left: 136
}
var frasco2 = {
	top:topSupFrascos,
	left: 215
}
var frasco3 = {
	top:topSupFrascos,
	left: 292
}
var frasco4 = {
	top:topSupFrascos,
	left: 369
}
var frasco5 = {
	top:topSupFrascos,
	left: 448
}
var frasco6 = {
	top:topInfFrascos,
	left: 144
}
var frasco7 = {
	top:topInfFrascos,
	left: 245
}
var frasco8 = {
	top:topInfFrascos,
	left: 350
}
var frasco9 = {
	top:topInfFrascos,
	left: 445
}

var frascos= new Array(frasco1,frasco2,frasco3,frasco4,frasco5,frasco6,frasco7,frasco8,frasco9);



$(document).ready(function(){

	var x=-3;
	var W=$('#frasco1').width()*2; 	

	for(var i=0; i<segmentos; i++){



			DeltaW.push((Math.atan(x)+4.5)/6*W);
			x+=(6/segmentos);
	}
	

	$('#continuar').click(
		function(callback){
		
			if(inicio){
				//LimelightPlayer.doPause();
				$('#video').slideUp();
				$('#contenedorActividadCocina').slideDown();
				$('#contenedorPrincipal').addClass("animarMargin");
				$("#contenedorPrincipal").bind('animationend webkitAnimationEnd', function() {
				 	$(this).css({"margin":"25px auto 0px auto"}); 
				 });
				cambiarAudio1();
				//audioElement.play();
				//audioElement.controls = true;
				//$('.subs').show();
				//$('.subs-panel').html('Vamos a viajar en tu propia historia. Regresemos a un momento en el que hayas actuado haciendo uso de tu libertad con la posibilidad de: ELEGIR lo correcto por encima de lo conveniente, de actuar con AUTODETERMINACIÓN a pesar de un contexto difícil o de reconocer y ACEPTAR aquellas realidades que no puedes cambiar.');
			}else{
				//$('#animacion-container').slideUp();
				//$('.videoteca').slideDown();
				//player.stopVideo();
				//audioElement.pause();
				//$('audio').hide();
				//$('.subs').hide();
			}
		}
	);

	$( ".frasco" ).hover(
  		function() {
			position=$(this).position();
  			click=false;
    		var titulo = $( this ).data("titulo");
    		var texto= $( this ).data("texto");
    		src= $( this ).attr("src");
    		$('#colIngrediente').css("visibility", "visible");
    		$('#tituloIngrediente').text(titulo);
    		$('#descIngrediente').text(texto);
    		$('#descIngrediente').attr("display", "inline-block");
    		$('#frascodescripcion').attr("src",src);
    		$('#frascodescripcion').attr("display", "inline-block");
  		}, 

  		function() {

  			if(click==true){
  				$(imag).css('top', position.top);
				$(imag).css('left', position.left);
				$(imag).css('height', H);
				$(imag).css('width', W);

  			}
    		
  		}
	);

	$(".frasco").click(
		function(){
			if(contIngrediente<=4){
				tituloGeneral = $( this ).data("titulo");
    			texto= $( this ).data("texto");
				imag= '#'+$(this).attr("id");
				//position=$(this).position();
				H=$(this).height();
				W=$(this).width(); 
				//Altura=H/segmentos;
				img = $( this ).data("image");
				deltaTop=topFinal-position.top;
				deltaLeft=leftFinal-position.left;
				tipoIngrediente=$( this ).data("tipo");
				$('#tituloEmergenteFrasco').text(tituloGeneral);
    			$('#textoEmergenteFrasco').text(texto);
				$('#emergenteFrasco').fadeIn("slow");
		    	/*		 
				$('#genio').css('top', position.top);
				$('#genio').css('left', position.left);
				$('#genio').css('height', H);
				$('#genio').css('width', W);


				for(var i=0; i<segmentos; i++){

					$( '#genio' ).append('<div id="segm'+i+'"></div>');
					$('#segm'+i).css('height', Altura);
					$('#segm'+i).css("background", "url(../assets/img/mpyc2/m7/"+img+") no-repeat");
					$('#segm'+i).css("background-position", "0% "+(i*(100/(segmentos-1)))+"%");
					$('#segm'+i).css("background-size", (W)+"px "+H+"px");

				}
			
				var t=0;
				var deltat=1/NoFrames;
				var temp=0;

				var id = setInterval(frame, 100);

				function frame() {

					if (temp > 1) {
		    	  		clearInterval(id);
		      			var idIngrediente='#ingrediente'+contIngrediente;
		      			$(idIngrediente).text(titulo);
	    				$(idIngrediente).css("visibility", "visible");
	    				contIngrediente++;

	    				if(contIngrediente>4){
	    					$("#probarReceta").prop('disabled', false);
	    				}

	    				if(tipoIngrediente=="malo"){
	    					perdio=true;
	    				
	    				}

	      				animacion(t, deltat, position, deltaTop, deltaLeft, H, W, imag);
			    	
			    	} else {
			       
						temp++
				    }
			  	}*/
		  	}

	  	}
	);

    $('#botonEmergenteFrasco').click(
    	function () {
    		$('#emergenteFrasco').fadeOut("slow");
			var Altura=H/segmentos;
			
	    			 
			$('#genio').css('top', position.top);
			$('#genio').css('left', position.left);
			$('#genio').css('height', H);
			$('#genio').css('width', W);


			for(var i=0; i<segmentos; i++){

				$( '#genio' ).append('<div id="segm'+i+'"></div>');
				$('#segm'+i).css('height', Altura);
				$('#segm'+i).css("background", "url(../assets/img/mpyc2/m7/"+img+") no-repeat");
				$('#segm'+i).css("background-position", "0% "+(i*(100/(segmentos-1)))+"%");
				$('#segm'+i).css("background-size", (W)+"px "+H+"px");

			}

			var t=0;
			var deltat=1/NoFrames;
			var temp=0;

			var id = setInterval(frame, 100);

			function frame() {

				if (temp > 1) {
	    	  		clearInterval(id);
	      			var idIngrediente='#ingrediente'+contIngrediente;
	      			$(idIngrediente).text(tituloGeneral);
    				$(idIngrediente).css("visibility", "visible");
    				contIngrediente++;

    				if(contIngrediente>4){
    					$("#probarReceta").prop('disabled', false);
    				}

    				if(tipoIngrediente=="malo"){
    					perdio=true;
    				
    				}

      				animacion(t, deltat, position, deltaTop, deltaLeft, H, W, imag);
		    	
		    	} else {
		       
					temp++
			    }
		  	}

    	}
	);

	
	$("#probarReceta").click(
		function(){

	  		if(perdio==true){

				$('#dialog-text').text('Alguno o algunos ingredientes no te permitirán tener un noviazgo sano. Vuelve a intentarlo.');
				$( "#dialog" ).dialog({
			    	modal: true,
			    	dialogClass: 'no-close success-dialog',
			    	buttons: {
			    		Ok: function() {
			        		$( this ).dialog( "close" );
		        		}
		      		}
	    		});
	  			contIngrediente=1;
				perdio=false;
				for( var a=0; a<5; a++){
					var idIngrediente='#ingrediente'+a;
					$(idIngrediente).css("visibility", "hidden");
				}

				for( var a=0; a<9; a++){
					var idFrasco='#frasco'+(a+1);
					$(idFrasco).css("top", frascos[a].top);
					$(idFrasco).css("top", frascos[a]).left;
					$(idFrasco).css("display", "inline-block");
				}

				$("#probarReceta").prop('disabled', true);

	  		}else{

	  			if(gano==false){
	  				
					$('#dialog-text').text('¡CORRECTO! Estos ingredientes te garantizan una buena relación.');
					$( "#dialog" ).dialog({
		    			modal: true,
		    			dialogClass: 'no-close success-dialog',
		   				buttons: {
		    				Ok: function() {
		        				$( this ).dialog( "close" );
		        			}
		      			}
		    		});
	  				$('#continuar-vista2').toggle();
	  				$(this).toggle();
	  				gano=true;
	  			}
	  		}
	  	}
  	);

	$("#continuar-vista2").click(function(){
		$('#contenedorActividadCocina').slideUp();
		$('#ContenedorTareasCompromiso').slideDown();
	});

	$("#guardarCompromiso").click(function(){

		var respuestaCompromiso = $('#pregunta2').val();
		var respuestaIngrediente= $('#pregunta1').val();
		if(respuestaCompromiso != '' &&  respuestaIngrediente != ''){
			guardarEnCubo(respuestaCompromiso);
			//guardarResultado(respuestaIngrediente);
		   	$('#ContenedorTareasCompromiso').slideUp();
			$('#contenedor-memoria').slideDown();
			inicio=false;
			
		}else{
			$('#dialog-text').text('No has respondido aún.');
			$( "#dialog" ).dialog({
		      modal: true,
		      dialogClass: 'no-close success-dialog',
		      buttons: {
		        Ok: function() {

		          $( this ).dialog( "close" );
		        }
		      }
		    });
		}

		
	});

	$('#guardar_memo').click(function(){

		var memoria = $('#memoria').val();
		var memoria_id = $('#memoria').attr('r');
		if(memoria != ''){
			enviarMemoria(memoria, 18, memoria_id);
			
		
		}else{
			$('#dialog-text').text('No has respondido aún.');
			$( "#dialog" ).dialog({
		      modal: true,
		      dialogClass: 'no-close success-dialog',
		      buttons: {
		        Ok: function() {

		          $( this ).dialog( "close" );
		        }
		      }
		    });
		}

	});
});

function callback(){

	for(var i=0; i<segmentos; i++){

		$('#segm'+i).remove()
	}

}

function animacion(t, deltat, position, dt, dl, H, W, imag){

	$(imag).toggle();
	escala=1;
	
	var id = setInterval(frame, 7);
	function frame() {
	    if (t > 1) {
      		clearInterval(id);
      		callback();
	    } else {
	        t+=deltat;
	        $('#genio').css('top', position.top+(dt*t));
			$('#genio').css('left', position.left+(dl*t));
			$('#genio').css('-moz-transform', 'scale('+escala+','+escala+')');
			
			$('#genio').css('-webkit-transform', 'scale('+escala+','+escala+')');
			$('#genio').css('transform', 'scale('+escala+','+escala+')');
			escala-=0.01;
 
			


	        for(var i=0; i<segmentos; i++){
	        	var temp=W-t*(W-DeltaW[(i*-1)+segmentos]);
	        	var desp=(temp/W)*100;

	        	$('#segm'+i).css("background-position", desp+"% "+(i*(100/(segmentos-1)))+"%");
				$('#segm'+i).css("background-size", temp+"px "+H+"px");
		
			}
	        
	    }
  	}
}

//Cambiar al audio 1
function cambiarAudio1(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m7/p1.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Selecciona los ingredientes que consideres clave para un buen noviazgo.');
}


function guardarEnCubo(pregunta){
	var data = {
		'pregunta' : pregunta,
	};
	$.ajax({
	 	async: 'false',
        url: "guardar_en_cubo_mpyc2_m7",
        type: "post",
        data: data,
        success:  function (response) {
            console.log(response);
            audioElement.pause();
        },
        error: function(event){
        	console.log(event);
        }
    });
}

function guardarResultado(respuestaIngrediente){
	var data = {
		'nombre_ingrediente' : respuestaIngrediente,
	};
	$.ajax({
	 	async: 'false',
        url: "guardar_respuesta_mpyc2_m7",
        type: "post",
        data: data,
        success:  function (response) {
            console.log(response);
            audioElement.pause();
        },
        error: function(event){
        	console.log(event);
        }
    });
}

function enviarMemoria(respuesta, mision_id, memoria_id){
	var data = {
		'respuesta': respuesta,
		'mision_id': mision_id,
		'memoria_id' : memoria_id
	};
	$.ajax({
	 	async: 'false',
        url: "terminar_memoria",
        type: "post",
        data: data,
        success:  function (response) {
           	window.location.href = location.origin+'/misiones';

        },
        error: function(event){
        	console.log(event);
        }
    });
}

