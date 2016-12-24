var inicio = true;
var cont=0;
$(document).ready(function(){
	$('#actividadCamino').css("height", ($( window ).height()));
	$('#actividadCamino2').css("height", ($( window ).height()));
	$('#contenedorFlechas').css("height", ($( window ).height()-83));
	$('#objetosHabitacion').css("height", ($(window).height()-70));
	$('#cuadro1FlechaIz').show();
	$('#continuar').click(function(){
		
			//LimelightPlayer.doPause();
			$('#video1').slideUp();
			$('#objetosHabitacion').slideDown();
			cambiarAudio0();
			//audioElement.play();
			//audioElement.controls = true;
			//$('.subs').show();
			//$('.subs-panel').html('Vamos a viajar en tu propia historia. Regresemos a un momento en el que hayas actuado haciendo uso de tu libertad con la posibilidad de: ELEGIR lo correcto por encima de lo conveniente, de actuar con AUTODETERMINACIÓN a pesar de un contexto difícil o de reconocer y ACEPTAR aquellas realidades que no puedes cambiar.');
			//$('#animacion-container2').slideUp();
			//$('.videoteca').slideDown();
			//player.stopVideo();
			//audioElement.pause();
			//$('audio').hide();
			//$('.subs').hide();
	});

	/**$('#guardar-respuesta').click(function(){
		var respuesta = $('#respuesta').val();
		var pregunta = $('#respuesta').parent().text();
		var respuesta_id = $('#respuesta').attr('r');

		if(respuesta != ''){
			terminarMision(respuesta, pregunta, 1, respuesta_id);
			inicio=false;
			$('.pregunta').slideUp();
			$('#animacion-container').slideDown();
		}else{
			$('#dialog-text').text('No has respondido aún.');
			$( "#dialog" ).dialog({
		      modal: true,
		      buttons: {
		        Ok: function() {
		          $( this ).dialog( "close" );
		        }
		      }
		    });
		}
	});**/

	$('.primordial').click(
		function(){
			if(!($(this).hasClass("Cliked"))){
				var titulo=$(this).data("titulo");
				var texto=$(this).data("texto");
				$('#tituloObjetos').text(titulo);
				$('#textoObjetos').text(texto);
				$('#emergenteObjetos').fadeIn("slow");
				$(this).find("span").show();
				$(this).addClass("Cliked");


				if(cont==3){
					$('#siguienteObjetos').val("Continuar");
				}

			}
		}
	);

	$('#siguienteObjetos').click(
		function(){
			if(cont<3){
				$('#emergenteObjetos').fadeOut("slow");
				cont++;
			}else{

				if(cont==100){
					$('#objetosHabitacion').slideUp();
		  			$('#actividadCamino').slideDown();
					cambiarAudio1();

				}else{

					$('#emergenteObjetos').fadeOut("slow", mostarIncioDelCamino);
				
				}
			}

		}
	);

	$('#guardar_memoria').click(function(){
		var memoria = $('#memoria').val();
		var memoria_id = $('#memoria').attr('respuesta');
		if(memoria != ''){
			enviarMemoria(memoria, 21, memoria_id);
		}else{
			$('#dialog-text').text('No has escrito tu memoria, vamos tenemos tiempo.');
			$( "#dialog" ).dialog({
		      modal: true,
		      dialogClass: 'no-close success-dialog',
		      buttons: {
		        Ok: function() {
		          $(this).dialog("close");
		        }
		      }
		    });
		}
	});

		var num= 1;
	  $('.video-container .thumb-nail').each(function(){
	  	$(this).css('background', 'url("../assets/img/images/imgs_video_'+num+'.png") no-repeat center 0 0 transparent');
	  		num++;
	  });

    audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../assets/audio/m1/1.mp3');

    document.body.appendChild(audioElement);
    //audioElement.load()

    $.get();

    $( ".palabras" ).hover(
  		function() {
  			click=false;
    		var titulo = $( this ).data("titulo");
    		var texto= $( this ).data("texto");
    		$('#tituloAlerta').text(titulo);
    		$('#textoAlerta').text(texto);
    		
  		}, 

  		function() {

  			    		
  		}
	);


/** 
Este bloque es de la parte funcional de la mision 10.
**/
//$("#botonContinuar").prop("disabled","true");

//$("#botonSi").click(function(){
//	$("#botonContinuar").removeProp("disabled");
//});

for(i = 1; i < 12; i++){
	$("#mensaje"+i).hide();
	$("#btn"+i).removeClass("borderBoton");
}
$("#btn1").click(function(){
	for(i = 1; i < 12; i++){
		$("#mensaje"+i).hide();
		$("#btn"+i).removeClass("borderBoton");
	}
	$("#mensaje1").show();
	$("#btn1").addClass("borderBoton");
	$("#botonCuadro1").show();
});
$("#btn2").click(function(){
	for(i = 1; i < 12; i++){
		$("#mensaje"+i).hide();
		$("#btn"+i).removeClass("borderBoton");
	}
	$("#mensaje2").show();
	$("#btn2").addClass("borderBoton");
	$("#botonCuadro1").show();
});
$("#btn3").click(function(){
	for(i = 1; i < 12; i++){
		$("#mensaje"+i).hide();
		$("#btn"+i).removeClass("borderBoton");
	}
	$("#mensaje3").show();
	$("#btn3").addClass("borderBoton");
	$("#botonCuadro1").show();
});
$("#btn4").click(function(){
	for(i = 1; i < 12; i++){
		$("#mensaje"+i).hide();
		$("#btn"+i).removeClass("borderBoton");
	}
	$("#mensaje4").show();
	$("#btn4").addClass("borderBoton");
	$("#botonCuadro1").show();
});
$("#btn5").click(function(){
	for(i = 1; i < 12; i++){
		$("#mensaje"+i).hide();
		$("#btn"+i).removeClass("borderBoton");
	}
	$("#mensaje5").show();
	$("#btn5").addClass("borderBoton");
	$("#botonCuadro1").show();
});
$("#btn6").click(function(){
	for(i = 1; i < 12; i++){
		$("#mensaje"+i).hide();
		$("#btn"+i).removeClass("borderBoton");
	}
	$("#mensaje6").show();
	$("#btn6").addClass("borderBoton");
	$("#botonCuadro1").show();
});
$("#btn7").click(function(){
	for(i = 1; i < 12; i++){
		$("#mensaje"+i).hide();
		$("#btn"+i).removeClass("borderBoton");
	}
	$("#mensaje7").show();
	$("#btn7").addClass("borderBoton");
	$("#botonCuadro1").show();
});
$("#btn8").click(function(){
	for(i = 1; i < 12; i++){
		$("#mensaje"+i).hide();
		$("#btn"+i).removeClass("borderBoton");
	}
	$("#mensaje8").show();
	$("#btn8").addClass("borderBoton");
	$("#botonCuadro1").show();
});
$("#btn9").click(function(){
	for(i = 1; i < 12; i++){
		$("#mensaje"+i).hide();
		$("#btn"+i).removeClass("borderBoton");
	}
	$("#mensaje9").show();
	$("#btn9").addClass("borderBoton");
	$("#botonCuadro1").show();
});
$("#btn10").click(function(){
	for(i = 1; i < 12; i++){
		$("#mensaje"+i).hide();
		$("#btn"+i).removeClass("borderBoton");
	}
	$("#mensaje10").show();
	$("#btn10").addClass("borderBoton");
	$("#botonCuadro1").show();
});
$("#btn11").click(function(){
	for(i = 1; i < 12; i++){
		$("#mensaje"+i).hide();
		$("#btn"+i).removeClass("borderBoton");
	}
	$("#mensaje11").show();
	$("#btn11").addClass("borderBoton");
	$("#botonCuadro1").show();
});

//** Flecha 1 **/ 
$("#cuadro1FlechaIz").click(function(){
	$("#cuadroFlecha1").show();
	cambiarAudio4();
});
$("#cuadro1FlechaDe").click(function(){
	$("#cuadro2Flecha1").show();
});
$("#botonCuadro1").click(function(){
	$("#cuadroFlecha1").hide();
	$("#cuadro1FlechaDe").show();
	$("#titulo2FlechaCuadro1").show();
});
$("#boton2Cuadro1").click(function(){
	$("#mensajeCuadroFlecha1").show();
	$("#cuadro2Flecha1").hide();
});
$("#guardarCuadro1").click(function(){
	$('#cuadro2FlechaIz').show();
	$("#flechas1").slideUp();
	$("#flechas2").slideDown();
	$("#flechas2").css({"display":"table-cell"});
	$("#imagen1Cuadro2").show();
	$('#actividadCamino2').css("background-image", "url(../assets/img/mpyc2/m10/fondo3.jpg)");
	$("#titulo1FlechaCuadro2").show();
});
/** Flecha 2 **/ 
$("#cuadro2FlechaIz").click(function(){
	$("#cuadroFlecha2").show();
});
$("#cuadro2FlechaDe").click(function(){
	$("#cuadro2Flecha2").show();
});
$("#boton1Cuadro2").click(function(){
	$("#cuadroFlecha2").hide();
	$("#cuadro2FlechaDe").show();
	$("#titulo2FlechaCuadro2").show();
});
$("#boton2Cuadro2").click(function(){
	$("#mensajeCuadroFlecha2").show();
	$("#cuadro2Flecha2").hide();
});
$("#guardarCuadro2").click(function(){
	$('#cuadro3FlechaIz').show();
	$("#flechas2").slideUp();
	$("#flechas3").slideDown();
	$("#flechas3").css({"display":"table-cell"});
	$("#imagen1Cuadro3").show();
	$('#actividadCamino2').css("background-image", "url(../assets/img/mpyc2/m10/fondo4.jpg)");
	$("#titulo1FlechaCuadro3").show();
});
/** Flecha 3 **/
$("#cuadro3FlechaIz").click(function(){
	$("#cuadroFlecha3").show();
});
$("#cuadro3FlechaDe").click(function(){
	$("#cuadro2Flecha3").show();
});
$("#boton1Cuadro3").click(function(){
	$("#cuadroFlecha3").hide();
	$("#cuadro3FlechaDe").show();
	$("#titulo2FlechaCuadro3").show();
});
$("#boton2Cuadro3").click(function(){
	$("#mensajeCuadroFlecha3").show();
	$("#cuadro2Flecha3").hide();
});
$("#guardarCuadro3").click(function(){
	$('#cuadro4FlechaIz').show();
	$("#flechas3").slideUp();
	$("#flechas4").slideDown();
	$("#flechas4").css({"display":"table-cell"});
	$("#imagen1Cuadro4").show();
	$('#actividadCamino2').css("background-image", "url(../assets/img/mpyc2/m10/fondo5.jpg)");
	$("#titulo1FlechaCuadro4").show();
});
/** Flecha 4 **/ 
$("#cuadro4FlechaIz").click(function(){
	$("#cuadroFlecha4").show();
});
$("#cuadro4FlechaDe").click(function(){
	$("#cuadro2Flecha4").show();
});
$("#boton1Cuadro4").click(function(){
	$("#cuadroFlecha4").hide();
	$("#cuadro4FlechaDe").show();
	$("#titulo2FlechaCuadro4").show();
});
$("#boton2Cuadro4").click(function(){
	$("#mensajeCuadroFlecha4").show();
	$("#cuadro2Flecha4").hide();
});
$("#guardarCuadro4").click(function(){
	$('#cuadro5FlechaIz').show();
	$("#flechas4").slideUp();
	$("#flechas5").slideDown();
	$("#flechas5").css({"display":"table-cell"});
	$("#imagen1Cuadro5").show();
	$('#actividadCamino2').css("background-image", "url(../assets/img/mpyc2/m10/fondo6.jpg)");
	$("#titulo1FlechaCuadro5").show();
});
/** Flecha 5 **/
$("#cuadro5FlechaIz").click(function(){
	$("#cuadroFlecha5").show();
});
$("#cuadro5FlechaDe").click(function(){
	$("#cuadro2Flecha5").show();
});
$("#boton1Cuadro5").click(function(){
	$("#cuadroFlecha5").hide();
	$("#cuadro5FlechaDe").show();
	$("#titulo2FlechaCuadro5").show();
});
$("#boton2Cuadro5").click(function(){
	$("#mensajeCuadroFlecha5").show();
	$("#cuadro2Flecha5").hide();
});
$("#guardarCuadro5").click(function(){
	$("#flechas5").slideUp();
	$("#felicitacionesCamino").slideDown();
	$('#actividadCamino2').css("background-image", "none");
	$('#actividadCamino2').css("display", "none");
});

$("#botonContinuar").click(function(){
	$("#actividadCamino").slideUp();
	$("#actividadCamino2").slideDown();
	$("#imagen1Cuadro1").show();
	cambiarAudio2();
});
$("#continuar3").click(function(){
	$("#felicitacionesCamino").slideUp();
	$("#contenedor-memoria").slideDown();
});
/**
Termina bloque de la parte funcional de la mision 1.
**/ 
});

function terminarMision(respuesta, pregunta, mision_id, respuesta_id){
	var data = {
		'respuesta': respuesta,
		'mision_id': mision_id,
		'pregunta' : pregunta,
		'respuesta_id' : respuesta_id
	};
	$.ajax({
	 	async: 'false',
        url: "terminar_mision",
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

function cambiarAudio0(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m10/p0.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Ayudame a alistar la mochila de viaje. Selecciona los cuatro elementos imprescindibles para emprender el camino del perdón.');

}

//Cambiar al audio 1
function cambiarAudio1(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m10/p1.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('El perdón sólo tiene sentido, cuando alguien ha recibido un daño objetivo de otro.');
	audioElement.onpause = function(){
		/*$('.subs').hide();
		audioElement.controls = false;*/
	}

}
//Cambiar al audio 2
function cambiarAudio2(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m10/p2mod.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Comencemos a recorrer las estaciones. Selecciona las opciones de caminos para cada estación de la ruta.');
	audioElement.onpause = function(){
		/*$('.subs').hide();
		audioElement.controls = false;
		//cambiarAudio3();*/
	}

}
//Cambiar al audio 3
function cambiarAudio3(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m10/p3.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Selecciona las opciones de caminos para cada estación de la ruta. ');
	audioElement.onpause = function(){
		/*$('.subs').hide();
		audioElement.controls = false;*/
	}

}
//Cambiar al audio 4
function cambiarAudio4(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m10/p4.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Un corazón herido se oculta tras muchas actitudes. Pasa con el cursor sobre los términos e identifica si hay alguna característica que adoptes.');
	audioElement.onpause = function(){
		/*$('.subs').hide();
		audioElement.controls = false;*/
	}

}

function mostarIncioDelCamino(){
	$('#tituloObjetos').text("¡Felicidades!");
	$('#textoObjetos').text("Ahora que has encontrado estos objetos, estamos listos para emprender el camino del perdón.");
	$('#emergenteObjetos').fadeIn("slow");
	cont=100;

}
