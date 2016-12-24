var inicio = true;
$(document).ready(function(){
	
	$('#continuar').click(function(){
		
		if(inicio){
			//LimelightPlayer.doPause();
			$('#animacion-container').slideUp();
			$('#parte2').slideDown();
			inicio = false;
			//audioElement.play();
			//audioElement.controls = true;
			//$('.subs').show();
			//$('.subs-panel').html('Vamos a viajar en tu propia historia. Regresemos a un momento en el que hayas actuado haciendo uso de tu libertad con la posibilidad de: ELEGIR lo correcto por encima de lo conveniente, de actuar con AUTODETERMINACIÓN a pesar de un contexto difícil o de reconocer y ACEPTAR aquellas realidades que no puedes cambiar.');
		}else{
			terminarMision("", "", 12, "");
			$('#animacion-container').slideUp();
			$('#parte6Memoria').slideDown();
			player.stopVideo();
			audioElement.pause();
		
		}
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

	$('#guardar_memoria').click(function(){
		var memoria = $('#memoria').val();
		var memoria_id = $('#memoria').attr('respuesta');
		if(memoria != ''){
			enviarMemoria(memoria, 12, memoria_id);
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

/** 
Este bloque es de la parte funcional de la mision 1.
La variable "data" es igual al numero que tiene el atributo "data-item".
**/

//Esto es para la segunda parte de la mision 1, seleccion.
var nombreElemento = ["Salir de rumba","Comer lo que te gusta","Mantenerte saludable","Contemplar un atardecer en la playa","Graduarte con honores","Ser valiente","Amar a alguien"]; // 0,1,2,3,4,5,6,7 = 8 Nombres;
$("#elementoSel1").val(nombreElemento[0]);
$("#elementoSel2").val(nombreElemento[1]);
var cont = 0;
	$('.elementoSel').click(function(){
		setTimeout(quitarClases,1000);
		cont ++;
		if(cont > 6){
			cont --;
		}
		$("#contadorData").html(cont+"/6");
		$("#elementoSel2").removeClass("Seleccionado");
		$("#elementoSel1").removeClass("Seleccionado");
		var data = $(this).attr("data-item");
		if(data < 8){
			if($(this).attr("id") == "elementoSel1"){
				$(this).attr("data-item", parseInt(data)+1);
				$("#elementoSel2").attr("data-item", parseInt(data)+1);
				$("#elementoSel1").addClass("Seleccionado");
				$("#elementoSel2").val(nombreElemento[data]);
				$("#elementoSel2").addClass("girar");
				$("#elementoSel1").addClass("girar");
			}
			if($(this).attr("id") == "elementoSel2"){
				$(this).attr("data-item", parseInt(data)+1);
				$("#elementoSel1").attr("data-item", parseInt(data)+1);
				$("#elementoSel2").addClass("Seleccionado");
				$("#elementoSel1").val(nombreElemento[data]);
				$("#elementoSel1").addClass("girar");
				$("#elementoSel2").addClass("girar");
			}
	}
	});

	// Esto es de la segunda parte para mostrar solo un icono del click cuando data-item este en 8.
	$('.elementoSel').click(function(){
	var data = $(this).attr("data-item");
	if(data == 8){
		if($(this).attr("id") == "elementoSel1"){
			$("#elementoSel2").hide();
			$("#elementoSel1").addClass("text-center");
			$("#elementoSel1").addClass("Seleccionado");
			$("#elementoSel1").removeClass("pull-left");
			$("#elementoSel1").removeClass("centrarElemento1");
			$("#elementoSel2").removeClass("centrarElemento2");
			$('#continuar1').show();
		}
		if($(this).attr("id") == "elementoSel2"){
			$("#elementoSel1").hide();
			$("#elementoSel2").addClass("text-center");
			$("#elementoSel2").addClass("Seleccionado");
			$("#elementoSel2").removeClass("pull-right");
			$("#elementoSel1").removeClass("centrarElemento1");
			$("#elementoSel2").removeClass("centrarElemento2");
			$('#continuar1').show();
		}
	}
	});
	//Boton continuar 1.
	$("#continuar1").click(function(){
		$('#atras1').show();
		$('#parte2').slideUp();
		$('#parte3').slideDown();
	});

	//Esto es para la tarcera parte, seleccion del elemento, multiseleccion.
	// variable contador para que solo se puedan 5 clicks.
	var contador = 0;
	$('.elementoASel').click(function(){
		var oID = $(this).attr("id");
		if(contador < 5){
			if($(this).hasClass("Seleccionado")){
			$('#'+oID).removeClass("Seleccionado");
			contador--;	
			}else{
			$('#'+oID).addClass("Seleccionado");
			contador++;
			}
		}else if($(this).hasClass("Seleccionado")){
			$('#'+oID).removeClass("Seleccionado");
			contador--;	
		}
		if(contador == 5){
			$("#continuar2").css("display","block");
		}else{
			$("#continuar2").css("display","none");
		}
	});
	//Boton continuar 2.
	$('#continuar2').click(function(){
		$('#atras2').show();
		$('#parte3').slideUp();
		$('#parte4').slideDown();
	});
	//Boton atras 1.
	$('#atras1').click(function(){
		$('#parte3').slideUp();
		$('#parte2').slideDown();
	});

	//Esto es para seleccionar objetiva - subjetiva y mostrar solo un icono.
	$('.elementoBSel').click(function(){
	var data = $(this).attr("data-item");
	if(data == 1){
		if($(this).attr("id") == "elementoSel3"){
			$("#elementoSel3").addClass("Seleccionado");
			$("#elementoSel4").removeClass("Seleccionado");
			$('#continuar3').show();
		}
		if($(this).attr("id") == "elementoSel4"){
			$("#elementoSel4").addClass("Seleccionado");
			$("#elementoSel3").removeClass("Seleccionado");
			$('#continuar3').show();
		}
	}
	});
	//Boton continuar 3.
	$("#continuar3").click(function(){
		$('#parte4').slideUp();
		$('#animacion-container').slideDown();
		$('#continuar').css("display","none");
	});

	//Boton atras 2.
	$('#atras2').click(function(){
		$('#parte4').slideUp();
		$('#parte3').slideDown();
	});

	//Boton continuar4.
	$("#continuar4").click(function(){
		terminarMision("", "", 12, "");
		$('#animacion-container').slideUp();
		$('#parte6Memoria').slideDown();
	});

/**
Termina bloque de la parte funcional de la mision 1.
**/ 
});

function quitarClases(){
	$("#elementoSel1").removeClass("Seleccionado");
	$("#elementoSel2").removeClass("Seleccionado");
	$("#elementoSel2").removeClass("girar");
	$("#elementoSel1").removeClass("girar");
}

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