var inicio = true;
$(document).ready(function(){
	
	$('#continuar').click(function(){
		
		if(inicio){
			//LimelightPlayer.doPause();
			$('#video1').slideUp();
			$('#actividadImagenes').slideDown();
			$('#playerID').get(0).stopVideo();
			cambiarAudio1();
			//audioElement.play();
			//audioElement.controls = true;
			//$('.subs').show();
			//$('.subs-panel').html('Vamos a viajar en tu propia historia. Regresemos a un momento en el que hayas actuado haciendo uso de tu libertad con la posibilidad de: ELEGIR lo correcto por encima de lo conveniente, de actuar con AUTODETERMINACIÓN a pesar de un contexto difícil o de reconocer y ACEPTAR aquellas realidades que no puedes cambiar.');
		}else{
			//$('#animacion-container2').slideUp();
			//$('.videoteca').slideDown();
			//player.stopVideo();
			//audioElement.pause();
			//$('audio').hide();
			//$('.subs').hide();
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
			enviarMemoria(memoria, 13, memoria_id);
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
$("#continuar2").prop("disabled","true");
$("#comunidad").click(function(){
	$("#persona").hide();

	if($("#texto2").css("display") == "block"){
		$("#texto2").hide();
	}

	if($("#texto3").css("display") == "block"){
		$("#texto3").hide();
	}

	$("#texto1").show();
	$("#texto1").addClass("centrarTexto");
	$("#comunidad").css("color","#a2ff00");
	$("#continuar2").removeProp("disabled");
});

$("#familia").click(function(){
	$("#persona").hide();

	if($("#texto1").css("display") == "block"){
		$("#texto1").hide();
	}

	if($("#texto3").css("display") == "block"){
		$("#texto3").hide();
	}

	$("#texto2").show();
	$("#texto2").addClass("centrarTexto");
	$("#familia").css("color","#f846ff");
	$("#continuar2").removeProp("disabled");
});

$("#profesion").click(function(){
	$("#persona").hide();

	if($("#texto1").css("display") == "block"){
		$("#texto1").hide();
	}

	if($("#texto2").css("display") == "block"){
		$("#texto2").hide();
	}

	$("#texto3").show();
	$("#texto3").addClass("centrarTexto");
	$("#profesion").css("color","#ffae00");
	$("#continuar2").removeProp("disabled");
});
//** Acciones de los botones del termometro 
var total = 00;
$("#botonFrase1").prop("disabled","true");
$("#botonFrase2").prop("disabled","true");
$("#botonFrase3").prop("disabled","true");
$("#botonFrase4").prop("disabled","true");
$("#botonFrase5").prop("disabled","true");
$("#botonFrase6").prop("disabled","true");
$("#botonFrase7").prop("disabled","true");
$("#botonFrase8").prop("disabled","true");
$("#botonFrase9").prop("disabled","true");
$("#botonFrase10").prop("disabled","true");
$("#botonFrase11").prop("disabled","true");

$(".radios1").click(function(){
	$("#botonFrase1").removeProp("disabled");
});
$(".radios2").click(function(){
	$("#botonFrase2").removeProp("disabled");
});
$(".radios3").click(function(){
	$("#botonFrase3").removeProp("disabled");
});
$(".radios4").click(function(){
	$("#botonFrase4").removeProp("disabled");
});
$(".radios5").click(function(){
	$("#botonFrase5").removeProp("disabled");
});
$(".radios6").click(function(){
	$("#botonFrase6").removeProp("disabled");
});
$(".radios7").click(function(){
	$("#botonFrase7").removeProp("disabled");
});
$(".radios8").click(function(){
	$("#botonFrase8").removeProp("disabled");
});
$(".radios9").click(function(){
	$("#botonFrase9").removeProp("disabled");
});
$(".radios10").click(function(){
	$("#botonFrase10").removeProp("disabled");
});
$(".radios11").click(function(){
	$("#botonFrase11").removeProp("disabled");
});
	
$("#botonFrase1").click(function(){
	$("#frase1").slideUp();
	$("#frase2").slideDown();

	res1 = parseInt($(".radios1:checked").attr("data-p"));
	if(res1 == 4){
		$("#linea").css("top","-=31");
	}else if(res1 == 2){
		$("#linea").css("top","-=14");
	}else if(res1 == 1){
		$("#linea").css("top","-=8");
	}else if(res1 == 0){
		$("#linea").css("top","-=0");
	}
	total = (res1);
	if(total > 15 && total < 33){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_azul.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_azul.png");
	}else if(total > 33 && total < 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_naranja.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_naranja.png");
	}else if(total > 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_rojo.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_roja.png");
	}
});
$("#botonFrase2").click(function(){
	$("#frase2").slideUp();
	$("#frase3").slideDown();
	res2 = parseInt($(".radios2:checked").attr("data-p"));
	if(res2 == 4){
		$("#linea").css("top","-=15");
	}else if(res2 == 2){
		$("#linea").css("top","-=7");
	}else if(res2 == 1){
		$("#linea").css("top","-=4");
	}else if(res2 == 0){
		$("#linea").css("top","-=0");
	}
	total = (res1+res2);
	if(total > 15 && total < 33){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_azul.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_azul.png");
	}else if(total > 33 && total < 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_naranja.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_naranja.png");
	}else if(total > 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_rojo.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_roja.png");
	}
});
$("#botonFrase3").click(function(){
	$("#frase3").slideUp();
	$("#frase4").slideDown();
	res3 = parseInt($(".radios3:checked").attr("data-p"));
	if(res3 == 4){
		$("#linea").css("top","-=31");
	}else if(res3 == 2){
		$("#linea").css("top","-=14");
	}else if(res3 == 1){
		$("#linea").css("top","-=8");
	}else if(res3 == 0){
		$("#linea").css("top","-=0");
	}
	total = (res1+res2+res3);
	if(total > 15 && total < 33){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_azul.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_azul.png");
	}else if(total > 33 && total < 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_naranja.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_naranja.png");
	}else if(total > 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_rojo.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_roja.png");
	}
});
$("#botonFrase4").click(function(){
	$("#frase4").slideUp();
	$("#frase5").slideDown();
	res4 = parseInt($(".radios4:checked").attr("data-p"));
	if(res4 == 4){
		$("#linea").css("top","-=31");
	}else if(res4 == 2){
		$("#linea").css("top","-=14");
	}else if(res4 == 1){
		$("#linea").css("top","-=8");
	}else if(res4 == 0){
		$("#linea").css("top","-=0");
	}
	total = (res1+res2+res3+res4);
	if(total > 15 && total < 33){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_azul.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_azul.png");
	}else if(total > 33 && total < 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_naranja.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_naranja.png");
	}else if(total > 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_rojo.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_roja.png");
	}
});
$("#botonFrase5").click(function(){
	$("#frase5").slideUp();
	$("#frase6").slideDown();
	res5 = parseInt($(".radios5:checked").attr("data-p"));
	if(res5 == 4){
		$("#linea").css("top","-=31");
	}else if(res5 == 2){
		$("#linea").css("top","-=14");
	}else if(res5 == 1){
		$("#linea").css("top","-=8");
	}else if(res5 == 0){
		$("#linea").css("top","-=0");
	}
	total = (res1+res2+res3+res4+res5);
	if(total > 15 && total < 33){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_azul.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_azul.png");
	}else if(total > 33 && total < 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_naranja.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_naranja.png");
	}else if(total > 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_rojo.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_roja.png");
	}
});
$("#botonFrase6").click(function(){
	$("#frase6").slideUp();
	$("#frase7").slideDown();
	res6 = parseInt($(".radios6:checked").attr("data-p"));
	if(res6 == 4){
		$("#linea").css("top","-=31");
	}else if(res6 == 2){
		$("#linea").css("top","-=14");
	}else if(res6 == 1){
		$("#linea").css("top","-=8");
	}else if(res6 == 0){
		$("#linea").css("top","-=0");
	}
	total = (res1+res2+res3+res4+res5+res6);
	if(total > 15 && total < 33){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_azul.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_azul.png");
	}else if(total > 33 && total < 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_naranja.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_naranja.png");
	}else if(total > 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_rojo.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_roja.png");
	}
});
$("#botonFrase7").click(function(){
	$("#frase7").slideUp();
	$("#frase8").slideDown();
	res7 = parseInt($(".radios7:checked").attr("data-p"));
	if(res7 == 4){
		$("#linea").css("top","-=31");
	}else if(res7 == 2){
		$("#linea").css("top","-=14");
	}else if(res7 == 1){
		$("#linea").css("top","-=8");
	}else if(res7 == 0){
		$("#linea").css("top","-=0");
	}
	total = (res1+res2+res3+res4+res5+res6+res7);
	if(total > 15 && total < 33){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_azul.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_azul.png");
	}else if(total > 33 && total < 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_naranja.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_naranja.png");
	}else if(total > 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_rojo.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_roja.png");
	}
});
$("#botonFrase8").click(function(){
	$("#frase8").slideUp();
	$("#frase9").slideDown();
	res8 = parseInt($(".radios8:checked").attr("data-p"));
	if(res8 == 4){
		$("#linea").css("top","-=31");
	}else if(res8 == 2){
		$("#linea").css("top","-=14");
	}else if(res8 == 1){
		$("#linea").css("top","-=8");
	}else if(res8 == 0){
		$("#linea").css("top","-=0");
	}
	total = (res1+res2+res3+res4+res5+res6+res7+res8);
	if(total > 15 && total < 33){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_azul.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_azul.png");
	}else if(total > 33 && total < 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_naranja.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_naranja.png");
	}else if(total > 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_rojo.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_roja.png");
	}
});
$("#botonFrase9").click(function(){
	$("#frase9").slideUp();
	$("#frase10").slideDown();
	res9 = parseInt($(".radios9:checked").attr("data-p"));
	if(res9 == 4){
		$("#linea").css("top","-=31");
	}else if(res9 == 2){
		$("#linea").css("top","-=14");
	}else if(res9 == 1){
		$("#linea").css("top","-=8");
	}else if(res9 == 0){
		$("#linea").css("top","-=0");
	}
	total = (res1+res2+res3+res4+res5+res6+res7+res8+res9);
	if(total > 15 && total < 33){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_azul.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_azul.png");
	}else if(total > 33 && total < 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_naranja.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_naranja.png");
	}else if(total > 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_rojo.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_roja.png");
	}
});
$("#botonFrase10").click(function(){
	$("#frase10").slideUp();
	$("#frase11").slideDown();
	res10 = parseInt($(".radios10:checked").attr("data-p"));
	if(res10 == 4){
		$("#linea").css("top","-=31");
	}else if(res10 == 2){
		$("#linea").css("top","-=14");
	}else if(res10 == 1){
		$("#linea").css("top","-=8");
	}else if(res10 == 0){
		$("#linea").css("top","-=0");
	}
	total = (res1+res2+res3+res4+res5+res6+res7+res8+res9+res10);
	if(total > 15 && total < 33){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_azul.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_azul.png");
	}else if(total > 33 && total < 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_naranja.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_naranja.png");
	}else if(total > 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_rojo.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_roja.png");
	}
});
$("#botonFrase11").click(function(){
	$("#contenedorFrases").slideUp();
	$("#resultado").slideDown();
	$("#resultado").css("top",-8);
	$("#resultado").css("left",-27);
	$(".titulosFrases").css("top",-20);
	res11 = parseInt($(".radios11:checked").attr("data-p"));
	if(res11 == 4){
		$("#linea").css("top","-=31");
	}else if(res11 == 2){
		$("#linea").css("top","-=14");
	}else if(res11 == 1){
		$("#linea").css("top","-=8");
	}else if(res11 == 0){
		$("#linea").css("top","-=0");
	}
	total = (res1+res2+res3+res4+res5+res6+res7+res8+res9+res10+res11);
	if(total > 15 && total < 33){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_azul.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_azul.png");
		$("#textoRes3").show();
	}else if(total > 33 && total < 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_naranja.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_naranja.png");
		$("#textoRes2").show();
	}else if(total > 40){
		$("#bolitaTerm").attr("src","/assets/img/mpyc2/m2/circulo_rojo.png");
		$("#linea").attr("src","/assets/img/mpyc2/m2/barra_roja.png");
		$("#textoRes1").show();
	}else{
		$("#textoRes4").show();
	}
	$("#continuar3").show();
	$("#resultadoTotal").html(total);
});
//**************

//** Esto es de los botones de la quinta parte. //
$("#btn1").click(function(){
	for(i = 1; i < 9; i++){
		$("#btn"+i).removeClass("borderSel");
		$("#vista"+i).hide();
	}
	$("#btn1").addClass("borderSel");
	$("#vista1").show();
});

$("#btn2").click(function(){
	for(i = 1; i < 9; i++){
		$("#btn"+i).removeClass("borderSel");
		$("#vista"+i).hide();
	}
	$("#btn2").addClass("borderSel");
	$("#vista2").show();
});

$("#btn3").click(function(){
	for(i = 1; i < 9; i++){
		$("#btn"+i).removeClass("borderSel");
		$("#vista"+i).hide();
	}
	$("#btn3").addClass("borderSel");
	$("#vista3").show();
});

$("#btn4").click(function(){
	for(i = 1; i < 9; i++){
		$("#btn"+i).removeClass("borderSel");
		$("#vista"+i).hide();
	}
	$("#btn4").addClass("borderSel");
	$("#vista4").show();
});

$("#btn5").click(function(){
	for(i = 1; i < 9; i++){
		$("#btn"+i).removeClass("borderSel");
		$("#vista"+i).hide();
	}
	$("#btn5").addClass("borderSel");
	$("#vista5").show();
});

$("#btn6").click(function(){
	for(i = 1; i < 9; i++){
		$("#btn"+i).removeClass("borderSel");
		$("#vista"+i).hide();
	}
	$("#btn6").addClass("borderSel");
	$("#vista6").show();
});

$("#btn7").click(function(){
	for(i = 1; i < 9; i++){
		$("#btn"+i).removeClass("borderSel");
		$("#vista"+i).hide();
	}
	$("#btn7").addClass("borderSel");
	$("#vista7").show();
});

$("#btn8").click(function(){
	for(i = 1; i < 9; i++){
		$("#btn"+i).removeClass("borderSel");
		$("#vista"+i).hide();
	}
	$("#btn8").addClass("borderSel");
	$("#vista8").show();
});
//***********
$("#continuar1").click(function(){
	$('#actividadImagenes').slideUp();
	$('#actividadBtn').slideDown();
});
$("#continuar2").click(function(){
	$('#actividadBtn').slideUp();
	$('#actividadTerm').slideDown();
});
$("#continuar3").click(function(){
	$('#actividadTerm').slideUp();
	$('#actividadBtn2').slideDown();
});
$("#continuar4").click(function(){
	terminarMision("","",13,"");
	$('#actividadBtn2').slideUp();
	$('#contenedor-memoria').slideDown();
});
/**
Termina bloque de la parte funcional de la mision 1.
**/ 
});
function cambiarAudio1(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m2/p1.mp3');
	audioElement.play();
	$('.subs').show();
	audioElement.controls = true;
	$('.subs-panel').html('El servicio  puede catalogarse como una acción de amor. ¡Hay muchas formas de Amar! Cada uno según su vocación. La vocación no sólo hace referencia a la ocupación o profesión sino también a todos los aspectos de la vida.');
	audioElement.onpause = function(){
		$('.subs').hide();
		audioElement.controls = false;
	}
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
