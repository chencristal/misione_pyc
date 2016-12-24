var inicio = true;
$(document).ready(function(){
	
	$('#continuar').click(function(){
		
		if(inicio){
			//LimelightPlayer.doPause();
			$('#video1').slideUp();
			$('#actividadLibro').slideDown();
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
		
	});

	$('#guardar-respuesta').click(function(){
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
	});

	$('#guardar_memo').click(function(){

		var memoria = $('#memoria').val();
		var memoria_id = $('#memoria').attr('r');
		if(respuesta != ''){
			enviarMemoria(memoria, 1, memoria_id);
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

    //** Comienza Funcines de Mision 2 **/
    $("#portadaLibro1").click(function(){
    	$('#dialog-text6').text('MEMORIAS. Siendo un bebé, le pusieron una raqueta de juguete en la mano. Desde entonces, Agassi no ha hecho otra cosa que golpear pelotas de tenis. Su padre, obsesionado en convertirlo en un astro del deporte, cosntruyó una máquina (el dragón) que disparaba 2.500 pelotas al día contra el pequeño Andre. Escrita por el premio Pulitzer J. R. Moehringer, Open es la semblanza a corazón abierto de André Agassi, que en estas memorias se muestra tal como es: un hombre que debió enfrentarse a las presiones de su familia, de la fama, pero que siempre conservó el valor de la amistad y un sentido altruista de la vida. En esta cautivadora autobiografía, Agassi revela, con sentido del humor y ternura, una vida definida por la contradicción entre un destino impuesto y el anhelo por complacer a quienes lo han sacrificado todo por él. Tomado de http://www.duomoediciones.com/es/catalogo-editorial/publicacion-767.htm');
			$( "#dialog6" ).dialog({
		      modal: true,
		      width: 550,
			  height: 270,
		      dialogClass: 'no-close success-dialog',
		      buttons: {
		        Ok: function() {
		          $(this).dialog("close");
		        }
		      }
		    });
    });

    $("#portadaLibro2").click(function(){
    	$('#dialog-text6').text('El atentado - Yasmina Khadra Tel Aviv, hora punta. Un ataque suicida provoca una masacre en un restaurante atestado de personas. El doctor Amín Jaafari, israelí de origen palestino, atiende en el hospital a los supervivientes cuando recibe la noticia de que, entre los muertos, se encuentra su mujer, y que todo apunta a que se trata de la causante del atentado. En busca de una explicación a lo sucedido y convertido de repente en traidor para muchos con quienes compartía el mundo aparentemente a salvo en el que vivía, el protagonista tratará de penetrar en el complejo entramado del terrorismo islámico. Tomado de http://www.alianzaeditorial.es/libro.php?id=3596357&id_col=100500&id_subcol=100501');
			$( "#dialog6" ).dialog({
		      modal: true,
		      width: 550,
			  height: 270,
		      dialogClass: 'no-close success-dialog',
		      buttons: {
		        Ok: function() {
		          $(this).dialog("close");
		        }
		    }
		});
    });

    $("#continuarLibro1").click(function(){
    	$("#libro2").show();
    	$("#libro1").hide();
    });

    $("#continuarLibro1").attr('disabled','disabled');
    $("#continuarLibro2").attr('disabled','disabled');
    
    var show1 = 0;
    var show11 = 0;
    $("#bien1").click(function(){
    	show1 = 1;
    	console.log(show1);
    	$("#bien1").removeClass("concepto");
    	$("#bien1").addClass("conceptoSel");
    	audio2();
    	if((show1 + show11) == 2 || (show11 + show1) == 2){
    		$("#continuarLibro1").removeAttr('disabled');
   		}
    });
     $("#bien2").click(function(){
    	show11 = 1;
    	console.log(show11);
    	$("#bien2").removeClass("concepto");
    	$("#bien2").addClass("conceptoSel");
    	audio2();
    	if((show1 + show11) == 2 || (show11 + show1) == 2){
    		$("#continuarLibro1").removeAttr('disabled');
   		}
    });

    

    var show2 = 0;
    var show22 = 0;
    $("#bien3").click(function(){
    	show2 = 1;
    	console.log(show2);
    	$("#bien3").removeClass("concepto");
    	$("#bien3").addClass("conceptoSel");
    	audio2();
    	if((show2 + show22) == 2 || (show22 + show2) == 2){
    		$("#continuarLibro2").removeAttr('disabled');
    	}
    });
     $("#bien4").click(function(){
    	show22 = 1;
    	console.log(show22);
    	$("#bien4").removeClass("concepto");
    	$("#bien4").addClass("conceptoSel");
    	audio2();
    	if((show2 + show22) == 2 || (show22 + show2) == 2){
    		$("#continuarLibro2").removeAttr('disabled');
    	}
    });

     $("#mal1").click(function(){
     	audio1();
     });
     $("#mal2").click(function(){
     	audio1();
     });
     $("#mal3").click(function(){
     	audio1();
     });
     $("#mal4").click(function(){
     	audio1();
     });
   
   

    $("#continuarLibro2").click(function(){
    	$("#actividadLibro").slideUp();
    	$("#actividadCitas").slideDown();
    	audio3();
    });

    $("#continuarLibro3").click(function(){
        var tituloLibro = $('#tituloLibro').val();
        var cita1 = $('#textoCita1').val();
        var cita2 = $('#textoCita2').val();
        var separador = "$/&"
        var memoria_id = $('#tituloLibro').attr('r');

        var respuesta = tituloLibro+separador+cita1+separador+cita2;

        if(tituloLibro != '' || cita1 != '' || cita2 != ''){
            enviarMemoria(respuesta, 2, memoria_id);
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


    });

    $("#textoCon1").click(function(){
    	if($("#tituloCon1").val() == ""){
    		$("#tituloCon1").val($("#textoCon1").text());
    	}else if($("#tituloCon2").val() == ""){
    		$("#tituloCon2").val($("#textoCon1").text());
    	}
    	$("#textoCon1").removeClass("concepto");
    	$("#textoCon1").addClass("conceptoSel");
    	if($("#tituloCon1").val() != "" && $("#tituloCon2").val() != ""){
    		$(".textosConceptos").hide();
    	}
    });
    $("#textoCon2").click(function(){
    	if($("#tituloCon1").val() == ""){
    		$("#tituloCon1").val($("#textoCon2").text());
    	}else if($("#tituloCon2").val() == ""){
    		$("#tituloCon2").val($("#textoCon2").text());
    	}
    	$("#textoCon2").removeClass("concepto");
    	$("#textoCon2").addClass("conceptoSel");
    	if($("#tituloCon1").val() != "" && $("#tituloCon2").val() != ""){
  			$(".textosConceptos").hide();
    	}
    });
    $("#textoCon3").click(function(){
    	if($("#tituloCon1").val() == ""){
    		$("#tituloCon1").val($("#textoCon3").text());
    	}else if($("#tituloCon2").val() == ""){
    		$("#tituloCon2").val($("#textoCon3").text());
    	}
    	$("#textoCon3").removeClass("concepto");
    	$("#textoCon3").addClass("conceptoSel");
    	if($("#tituloCon1").val() != "" && $("#tituloCon2").val() != ""){
  			$(".textosConceptos").hide();
    	}
    });
    $("#textoCon4").click(function(){
    	if($("#tituloCon1").val() == ""){
    		$("#tituloCon1").val($("#textoCon4").text());
    	}else if($("#tituloCon2").val() == ""){
    		$("#tituloCon2").val($("#textoCon4").text());
    	}
    	$("#textoCon4").removeClass("concepto");
    	$("#textoCon4").addClass("conceptoSel");
    	if($("#tituloCon1").val() != "" && $("#tituloCon2").val() != ""){
  			$(".textosConceptos").hide();
    	}
    });
    $("#textoCon5").click(function(){
    	if($("#tituloCon1").val() == ""){
    		$("#tituloCon1").val($("#textoCon5").text());
    	}else if($("#tituloCon2").val() == ""){
    		$("#tituloCon2").val($("#textoCon5").text());
    	}
    	$("#textoCon5").removeClass("concepto");
    	$("#textoCon5").addClass("conceptoSel");
    	if($("#tituloCon1").val() != "" && $("#tituloCon2").val() != ""){
  			$(".textosConceptos").hide();
    	}
    });
    $("#textoCon6").click(function(){
    	if($("#tituloCon1").val() == ""){
    		$("#tituloCon1").val($("#textoCon6").text());
    	}else if($("#tituloCon2").val() == ""){
    		$("#tituloCon2").val($("#textoCon6").text());
    	}
    	$("#textoCon6").removeClass("concepto");
    	$("#textoCon6").addClass("conceptoSel");
    	if($("#tituloCon1").val() != "" && $("#tituloCon2").val() != ""){
  			$(".textosConceptos").hide();
    	}
    });
    $("#textoCon7").click(function(){
    	if($("#tituloCon1").val() == ""){
    		$("#tituloCon1").val($("#textoCon7").text());
    	}else if($("#tituloCon2").val() == ""){
    		$("#tituloCon2").val($("#textoCon7").text());
    	}
    	$("#textoCon7").removeClass("concepto");
    	$("#textoCon7").addClass("conceptoSel");
    	if($("#tituloCon1").val() != "" && $("#tituloCon2").val() != ""){
  			$(".textosConceptos").hide();
    	}
    });
    $("#textoCon8").click(function(){
    	if($("#tituloCon1").val() == ""){
    		$("#tituloCon1").val($("#textoCon8").text());
    	}else if($("#tituloCon2").val() == ""){
    		$("#tituloCon2").val($("#textoCon8").text());
    	}
    	$("#textoCon8").removeClass("concepto");
    	$("#textoCon8").addClass("conceptoSel");
    	if($("#tituloCon1").val() != "" && $("#tituloCon2").val() != ""){
  			$(".textosConceptos").hide();
    	}
    });
    $("#textoCon9").click(function(){
    	if($("#tituloCon1").val() == ""){
    		$("#tituloCon1").val($("#textoCon9").text());
    	}else if($("#tituloCon2").val() == ""){
    		$("#tituloCon2").val($("#textoCon9").text());
    	}
    	$("#textoCon9").removeClass("concepto");
    	$("#textoCon9").addClass("conceptoSel");
    	if($("#tituloCon1").val() != "" && $("#tituloCon2").val() != ""){
  			$(".textosConceptos").hide();
    	}
    });
    $("#textoCon10").click(function(){
    	if($("#tituloCon1").val() == ""){
    		$("#tituloCon1").val($("#textoCon10").text());
    	}else if($("#tituloCon2").val() == ""){
    		$("#tituloCon2").val($("#textoCon10").text());
    	}
    	$("#textoCon10").removeClass("concepto");
    	$("#textoCon10").addClass("conceptoSel");
    	if($("#tituloCon1").val() != "" && $("#tituloCon2").val() != ""){
  			$(".textosConceptos").hide();
    	}
    });
    //** **/


});

function audio1(){
	audioElement.setAttribute('src', '../assets/audio/m2/error.mp3');
	audioElement.play();
	audioElement.controls = true;
}
function audio2(){
	audioElement.setAttribute('src', '../assets/audio/m2/bien.mp3');
	audioElement.play();
	audioElement.controls = true;
}


function audio3(){
	audioElement.setAttribute('src', '../assets/audio/m2/p5.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Ahora es tu turno de traer citas del libro que seleccionaste para leer este semestre. Elige dos términos del listado de la parte inferior y busca dos citas textuales que ejemplifiquen dicho término.');
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
