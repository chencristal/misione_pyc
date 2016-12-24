var inicio = true;
var it;
$(document).ready(function(){
	
	$('#continuar').click(function(){
		
		if(inicio){
			//LimelightPlayer.doPause();
			$('#video').slideUp();
			$('#dragElementos').slideDown();
			cambiarAudio3();
			//audioElement.play();
			//audioElement.controls = true;
			//$('.subs').show();
			//$('.subs-panel').html('Vamos a viajar en tu propia historia. Regresemos a un momento en el que hayas actuado haciendo uso de tu libertad con la posibilidad de: ELEGIR lo correcto por encima de lo conveniente, de actuar con AUTODETERMINACIÓN a pesar de un contexto difícil o de reconocer y ACEPTAR aquellas realidades que no puedes cambiar.');
		}else{
			$('#animacion-container2').slideUp();
			$('.videoteca').slideDown();
			player.stopVideo();
			audioElement.pause();
			$('audio').hide();
			$('.subs').hide();
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
			enviarMemoria(memoria, 16, memoria_id);
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
	$('#up').click(function(){
		infoScroll1 = scroollUp("elementos", 30);	
	});
	$('#down').click(function(){
		infoScroll1 = scroollDonw("elementos", 30);
	});

$('.elementosDrag').draggable({
	containment: "#elementosOver",
	revert: function(container){
	    	if($(container).hasClass('imagen') && !$(container).hasClass('No-Drop')){
	    		return false;
	    	}else{
	    		return true;
	    	}
	    }
});

$('.dragImg').draggable({
	containment: "#cont2",
	disabled: true,
	revert: function(container){
	    	if($(container).hasClass('imagen') && !$(container).hasClass('No-Drop')){
	    		return false;
	    	}else{
	    		return true;
	    	}
	    },
});

$('.elementosDrag').on('dragstart',function(event){
	$(this).css("z-index","10");
});

$('.pasivo').droppable({
	drop: dropEv
});
$('.asertivo').droppable({
	drop: dropEv
});
$('.agresivo').droppable({
	drop: dropEv
});

$('#dropImg').droppable({
	drop: dropEv1
});

// Mostrar elemetos para los drag.
$("#play").click(function(){
	$("#contPlay").hide();
	$("#elementos").show();
	$("#boton-up").show();
	$("#boton-down").show();
	setupTimer();
});

$("#audio1").click(function(){
	cambiarAudioPasivo();
	$('#imgPasiva').draggable( "enable" );
	$('#imgPasiva').css( "cursor", "move" );

});
$("#audio2").click(function(){
	cambiarAudioAsertivo();
	$('#imgAsertiva').draggable( "enable" );
	$('#imgAsertiva').css( "cursor", "move" );
	
});
$("#audio3").click(function(){
	cambiarAudioAgresivo();
	$('#imgAgresiva').draggable( "enable" );
	$('#imgAgresiva').css( "cursor", "move" );
	
});
	
$(".texto-pregunta").click(function(){
	if($(this).hasClass("Seleccionado")){
		$(this).removeClass("Seleccionado");
	}else{
		$(this).addClass("Seleccionado");
	}
});

$("#continuar1").click(function(){
	$('#dragElementos').slideUp();
	$('#dragImgs').slideDown();
	//cambiarAudio1();
});
$("#continuar2").click(function(){
	$('#dragImgs').slideUp();
	$('#preguntaAsertiva').slideDown();
	cambiarAudio2();
});
$("#continuar3").click(function(){
	$('#preguntaAsertiva').slideUp();
	$('#memoriaM').slideDown();
});

	

var URLhash = window.location.hash;
if(URLhash == "#1"){
	$("#dragElementos").show();
	$("#video").hide();
	$("#play").click();
}
if(URLhash == "#2"){
	$("#dragImgs").show();
	$("#video").hide();
}


/**
Termina bloque de la parte funcional de la mision 1.
**/ 
});
var perdio = 0;
function dropEv( event, ui ) {
 	 var draggable = ui.draggable;
	 if(!$(event.target).hasClass('No-Drop')){
		 $(event.target).addClass('No-Drop');
		 $(event.target).append(ui.draggable.removeClass('b-shadow'));
		 $(event.target).css("height","auto");
		 $("#elementosOver").css("overflow","hidden");
	 }
	 var data_itemDrag = $(draggable).attr("data-item");
	 var data_itemDrop = $(event.target).attr("id");
	 
	 if(data_itemDrag > 14 && data_itemDrag < 22){
	 	if(data_itemDrop > 7 && data_itemDrop < 15){
	 		$(event.target).css("border","1px solid #a2ff00");
	 		$(event.target).css("background","#3C763D");
	 		$(event.target).css("box-shadow","0 0 5px 1px #a2ff00");
	 		$(draggable).removeClass("ui-draggable");
			$(draggable).removeClass("elementosDrag");
		 	$(draggable).removeClass("ui-draggable-handle");
		 	$("#cont").css("height","+=45");
		 	$("#elementosOver").css("height","+=40");
	 	}else{
	 		$(event.target).css("border","1px solid #ff3600");
	 		$(event.target).css("background","#5E2D1E");
	 		$(event.target).css("box-shadow","0 0 5px 1px #ff3600");
	 		$(draggable).removeClass("ui-draggable");
		 	$(draggable).removeClass("elementosDrag");
		 	$(draggable).removeClass("ui-draggable-handle");
		 	$("#cont").css("height","+=45");
		 	$("#elementosOver").css("height","+=40");
		 	perdio ++;
	 	}
	 }
	 if(data_itemDrag > 7 && data_itemDrag < 15){
		if(data_itemDrop > 0 && data_itemDrop < 8){
			$(event.target).css("border","1px solid #a2ff00");
			$(event.target).css("background","#3C763D");
			$(event.target).css("box-shadow","0 0 5px 1px #a2ff00");
	 		$(draggable).removeClass("ui-draggable");
			$(draggable).removeClass("elementosDrag");
		 	$(draggable).removeClass("ui-draggable-handle");
		 	$("#cont").css("height","+=45");
		 	$("#elementosOver").css("height","+=40");
	 	}else{
	 		$(event.target).css("border","1px solid #ff3600");
	 		$(event.target).css("background","#5E2D1E");
	 		$(event.target).css("box-shadow","0 0 5px 1px #ff3600");
	 		$(draggable).removeClass("ui-draggable");
		 	$(draggable).removeClass("elementosDrag");
		 	$(draggable).removeClass("ui-draggable-handle");
		 	$("#cont").css("height","+=45");
		 	$("#elementosOver").css("height","+=40");
		 	perdio ++;
	 	}
	 }
	 if(data_itemDrag > 0 && data_itemDrag < 8){
		if(data_itemDrop > 14 && data_itemDrop < 22){
			$(event.target).css("border","1px solid #a2ff00");
			$(event.target).css("background","#3C763D");
			$(event.target).css("box-shadow","0 0 5px 1px #a2ff00");
	 		$(draggable).removeClass("ui-draggable");
			$(draggable).removeClass("elementosDrag");
		 	$(draggable).removeClass("ui-draggable-handle");
		 	$("#cont").css("height","+=45");
		 	$("#elementosOver").css("height","+=40");
	 	}else{
	 		$(event.target).css("border","1px solid #ff3600");
	 		$(event.target).css("background","#5E2D1E");
	 		$(event.target).css("box-shadow","0 0 5px 1px #ff3600");
	 		$(draggable).removeClass("ui-draggable");
		 	$(draggable).removeClass("elementosDrag");
		 	$(draggable).removeClass("ui-draggable-handle");
		 	$("#cont").css("height","+=45");
		 	$("#elementosOver").css("height","+=40");
		 	perdio ++;
	 	}
	 }
	 checkNoDrops();
}

function dropEv1( event, ui ) {
 	 var draggable = ui.draggable;
	 if(!$(event.target).hasClass('No-Drop')){
		 $(event.target).addClass('No-Drop');
		 $(event.target).append(ui.draggable.addClass('centroDrop1'));
		 $("#dropImg").css("top","-351px");
	 }
	 var data_itemDrag1 = $(draggable).attr("data-item");

	 $("#instrucciones").hide();

	 if(data_itemDrag1 == 1){
	 	$("#audio1").hide();
	 	$("#imgsMal").show();
	 	$("#default").hide();
	 }
	 if(data_itemDrag1 == 2){
	 	$("#audio2").hide();
	 	$("#default").hide();
	 	$("#imgsBien").show();
	 	$("#instrucciones").hide();
	 	$("#continuar2").show();
	 }
	 if(data_itemDrag1 == 3){
	 	$("#audio3").hide();
	 	$("#default").hide();
	 	$("#imgsMal").show();
	 }
	 if($("#dropImg").children().attr("data-item") == 1 || $("#dropImg").children().attr("data-item") == 3){
	 	$("#dropImg").children().hover(function(){
	 		$('#dialog-text').html("<div id=''><p style='text-align:center;'>Debes convencer al profe con otra respuesta más acertada. Vuelve a intentarlo.</p><input type='image' id='reinicio2' src='../assets/img/mpyc2/m5/reload.png' style='position:relative; left:180px;'></div>");
			$("#reinicio2").click(function(){
				document.location.href = document.location.origin+"/misiones/m16#2";
				location.reload();
			});
			$( "#dialog" ).dialog({
		      modal: true,
		      dialogClass: 'no-close success-dialog',
		      width: 550,
			  height: 270,
		    });
	 	});
	 	$("#dropImg").children().click(function(){
	 		$('#dialog-text').html("<div id=''><p style='text-align:center;'>Debes convencer a la profe con otra respuesta mas acertada. Vuelve a intentarlo.</p><input type='image' id='reinicio3' src='../assets/img/mpyc2/m5/reload.png' style='position:relative; left:180px;'></div>");
			$("#reinicio3").click(function(){
				document.location.href = document.location.origin+"/misiones/m16#2";
				location.reload();
			});
			$( "#dialog" ).dialog({
		      modal: true,
		      dialogClass: 'no-close success-dialog',
		      width: 550,
			  height: 270,
		    });
	 	});
	 }
	 checkNoDrops1();
}

// Esto es para mirar si existe el .No-Drop, entonces al hacer el drag no va a dejar hacer un drop.
function checkNoDrops(){
	for(i=1; i<=22; i++){
		if(!$("#"+i).children().length == 1){
			$("#"+i).removeClass('No-Drop');
			$("#"+i).css("height","25");
			$("#"+i).css("border","1px solid #00fffc");
			$("#"+i).css("box-shadow","0 0 5px 1px ##00fffc");
			$("#"+i).css("background","#152A2D");
		}
	}
	if(perdio > 2){
		$('#dialog-text4').html("<div id=''><input type='image' id='reinicio4' src='/assets/img/mpyc2/m5/reload.png' style='position:relative; left:120px; top: 34px;'></div>");
		$("#reinicio4").click(function(){
			document.location.href = document.location.origin+"/misiones/m16#1";
			location.reload();
		});
		$( "#dialog4" ).dialog({
		    modal: true,
		    dialogClass: 'no-close success-dialog',
		    width: 400,
			height: 270,
		});
	}else{
		
		if(!$("#elementos").children().length == 1){
			$("#continuar1").show();
			clearInterval(it);
			$( "#dialog5" ).dialog({
		      modal: true,
		      dialogClass: 'no-close success-dialog',
		      height: 100,
		      buttons: {
		        Cerrar: function() {
		          $(this).dialog("close");
		        }
		      }
		    });
		}
	}
}

function checkNoDrops1(){
		if(!$("#dropImg").children().length == 1){
			$("#dropImg").removeClass('No-Drop');
		}
}

function setupTimer(){
	var timer = $('.timer');
	var currentTime = 180;
	it = setInterval(function(){
		if($("#dragElementos").css("display") == "none"){
			clearInterval(it);
		}
		currentTime--;
		if(currentTime>0){
			var minutes = Math.floor(currentTime / 60);
			var seconds = currentTime%60;
			if(minutes<10){
				minutes = '0'+minutes;
			}
			if(seconds<10){
				seconds = '0'+seconds;
			}
			timer.text(minutes+':'+seconds);
		}else{
			$('#dialog-text4').html("<div id=''><input type='image' id='reinicio4' src='/assets/img/mpyc2/m5/reload.png' style='position:relative; left:120px; top: 34px;'></div>");
			$("#reinicio4").click(function(){
				document.location.href = document.location.origin+"/misiones/m16#1";
				location.reload();
			});
			$( "#dialog4" ).dialog({
			    modal: true,
			    dialogClass: 'no-close success-dialog',
			    width: 400,
				height: 270,
			});
		}
	},1000);
}

//funcion para mover el scroll hacia arriba
var pos = 0;
function scroollUp(elemento, alto){
		
		var elem = document.getElementById(elemento);
		var hElem=$('#'+elemento).height();
		var hElemOver=$('#elementosOver').height();
		
		if((hElem+pos)>hElemOver){

			var newPos = pos-alto;
			
			var id = setInterval(frame, 5);
			
			function frame() {
			    if (pos <= newPos) {
		      		clearInterval(id);
		      		console.log("top elementos"+pos);
			    } else {
			        pos--; 
			        elem.style.top = pos + 'px';
			    }
		  	}
	  	}
	  	
}

//fncion para mover el scroll hacia abajo

function scroollDonw(elemento, alto){

		var elem = document.getElementById(elemento);
		if(pos<0){
			var newPos = pos+alto
			var id = setInterval(frame, 5);
			function frame() {
			    if (pos >= newPos) {
		      		clearInterval(id);
		      		console.log(pos);
			    } else {
			        pos++; 
			        elem.style.top = pos + 'px';
			    }
		  	}
	  	}

}

//Cambiar al audio 1
function cambiarAudio1(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m5/p1.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Te presento el siguiente caso entre un profesor y un estudiante. Tu misión es ayudar a que el estudiante logre dar una respuesta asertiva. Para ello deberás identificar las características que tiene cada tipo de comunicación, arrastrándola al que consideres correcto. Si fallas tres veces, el estudiante responderá de forma no asertiva y deberás volver a comenzar el ejercicio.');
	audioElement.onpause = function(){
		$('.subs').hide();
		audioElement.controls = false;
	}
}

//Cambiar al audio 2
function cambiarAudio2(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m5/p2.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Ahora piensa en las características  de la comunicación asertiva y  reflexiona cuál es la que más se te dificulta o menos encuentras en tu manera de comunicarte. Escribe un propósito de mejoramiento en ese aspecto, el cual quedará registrado en el módulo de proyecto de vida.');
	audioElement.onpause = function(){
		$('.subs').hide();
		audioElement.controls = false;
	}
}

//Cambiar al audio 3
function cambiarAudio3(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m5/p3.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Identifica las características que tiene cada tipo de comunicación, arrastrándolas al tipo que consideres correcto. Si fallas tres veces deberás comenzar de nuevo. Tienes tres minutos.');
	audioElement.onpause = function(){
		$('.subs').hide();
		audioElement.controls = false;
	}
}

function cambiarAudioPasivo () {
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m5/pasiva.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Ay profeee... recíbalo. Si?');
	audioElement.onpause = function(){
		$('.subs').hide();
		audioElement.controls = false;
	}
}
function cambiarAudioAgresivo () {
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m5/agresiva.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('¡Profe eso es una injusticia! Me parece muy incoherente de su parte. El otro día usted llegó tarde y ahí si no pasa nada.');
	audioElement.onpause = function(){
		$('.subs').hide();
		audioElement.controls = false;
	}
}
function cambiarAudioAsertivo () {
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m5/asertiva.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Profe. Me disculpo por llegar tarde. Tengo claro que la hora de entrega era a las 8am. Yo salí de mi casa a la misma hora de siempre y cuando venía por el camino se pinchó una llanta del carro. Yo me esforcé mucho en este trabajo y me sentiría muy mal que no sea evaluado. Me gustaría que considere una excepción dadas las circunstancias.');
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
