var inicio = true;
var intervalo;
var intervaloSegundos;
var ahorcadoListo=false;
var widthInicial=60;
var contadorOportunidades=1;
var letras = [];
letras["I"]=false;
letras["N"]=false;
letras["T"]=false;
letras["E"]=false;
letras["L"]=false;
letras["G"]=false;
letras["C"]=false;
letras["V"]=false;
letras["O"]=false;
letras["U"]=false;
letras["D"]=false;
letras["A"]=false;
var minutos;
var segundos;
var errorDeCargaSoloUnaVez=true;
var ayudaVisible=false;
var palabrasBarriga=0;
var topScroll=0;
var pasoScroll=44;
var hazTenidoNovio;
var preguntasRegla= [	"¿Conozco a su familia?",
						"¿Conoce a mi familia?",
						"¿Conozco a sus amigos?",
						"¿Conoce a mis amigos?",
						"¿Conozco los hitos más importantes de su historia personal?",
						"¿Conoce los hitos más importantes de mi historia personal?",
						"¿Conozco sus costumbres o tradiciones?",
						"¿Conoce mis costumbres o tradiciones?",
						"¿Conozco sus planes de vida, aspiraciones y sueños?",
						"¿Conoce mis planes de vida, aspiraciones y sueños?",
						"¿Conozco sus creencias?","¿Conoce mis creencias?",
						"¿Conoce cómo me comporto en el ámbito académico o profesional?",
						"¿Conozco cómo se comporta en el ámbito académico o profesional?",
						"¿Conozco la imagen que proyecta a los demás?",
						"¿Conoce la imagen que proyecto a los demás?"];

var respuestasRegla=[	"Tu noviazgo está en un nivel bajo de conocimiento mutuo",
						"Tu noviazgo está en un nivel medio de conocimiento mutuo",
						"Tu noviazgo está en un nivel alto de conocimiento mutuo"];
var leftRegla=-8;
var respuestasSi=0;
var preguntaActual=0;


$(document).ready(function(){

	
	$('#actividadLetras').css("height", ($( window ).height()));
	animacion1();
	animacion2();

	document.addEventListener('keydown', 
		function(event) {
			if (ahorcadoListo) {
				switch(event.keyCode){
					case 73: //I
						var L="I"
						if(letras[L]==false){
							aparecerLetra(L);
							letras[L]=true;
						}
						break;
					case 78: //N
						var L="N"
						if(letras[L]==false){
							aparecerLetra(L);
							letras[L]=true;
						}
						break;
					case 84: //T
						var L="T"
						if(letras[L]==false){
							aparecerLetra(L);
							letras[L]=true;
						}
						break;
					case 69: //E
						var L="E"
						if(letras[L]==false){
							aparecerLetra(L);
							letras[L]=true;
						}
						break;
					case 76: //L
						var L="L"
						if(letras[L]==false){
							aparecerLetra(L);
							letras[L]=true;
						}
						break;
					case 71: //G
						var L="G"
						if(letras[L]==false){
							aparecerLetra(L);
							letras[L]=true;
						}
						break;
					case 67: //C
						var L="C"
						if(letras[L]==false){
							aparecerLetra(L);
							letras[L]=true;
						}
						break;
					case 65: //A
						var L="A"
						
						if(letras[L]==false){
							aparecerLetra(L);
							letras[L]=true;
						}
						break;
					case 86: //V
						var L="V"
						if(letras[L]==false){
							aparecerLetra(L);
							letras[L]=true;
						}
						break;
					case 79: //O
						var L="O"
						if(letras[L]==false){
							aparecerLetra(L);
							letras[L]=true;
						}
						break;
					case 85: //U
						var L="U"
						if(letras[L]==false){
							aparecerLetra(L);
							letras[L]=true;
						}
						break;
					case 68: //D
						var L="D"
						if(letras[L]==false){
							aparecerLetra(L);
							letras[L]=true;
						}
						break;
					default:
						intentoFallido();

						break;




				}
			}
		}
	);

	$('#errorCarga').click(
		function(){
			reinicioActividad();
		}
	);


	$('#btnSi').click(
		function(){
			siguinetePregunta();
			reglaSi();
		}
	);

	$('#btnNo').click(
		function(){
			siguinetePregunta();
		}
	);

	$('#ayudaLetras').click(
		function(){
			if(ayudaVisible==true){
				$('#contenedorAyudaLetras').fadeOut("slow");
				ayudaVisible=false;
			}else{
				$('#contenedorAyudaLetras').fadeIn("slow");
				ayudaVisible=true;
			
			}
		}
	);

	
	$('#continuar').click(
		function(){

			$('#video1').slideUp();
			$('#contenedorActividadLetras').slideDown();
			$('#contenedorPrincipal').removeClass("container");
			$('#contenedorPrincipal').addClass("log-in");
			$('.subs a').css({"color": "#154447"});
			$('.subs').css({"top": "90px"});
			cambiarAudio1();
	});

	$('#carga10').click(
		function(){

			$('#contenedorPrincipal').css({"margin": "25px auto 0px auto"});
			$('#contenedorActividadLetras').slideUp();
			$('#contenedorActividadMonacho').slideDown();
			$('#contenedorPrincipal').removeClass("log-in");
			$('.subs a').css({"color": "#ffffff"});
			$('.subs').css({"top": "76px"});
			
	});

	$('#siguienteMonacho').click(
		function(){

			if(hazTenidoNovio==true){
				$('#preguntaTienesNovio').css({"display":"block"});
				$('#advertenciaDePreguntas').css({"display":"none"});
			}else{
				$('#preguntaTienesNovio').css({"display":"none"});
				$('#advertenciaDePreguntas').css({"display":"block"});
				
			}

			$('#contenedorActividadMonacho').slideUp();
			$('#contenedorActividadRegla').slideDown();
			cambiarAudio5();

			
	});

	$('#siguienteRegla').click(
		function(){

			$('#contenedorActividadRegla').slideUp();
			$('#contenedor-memoria').slideDown();

			
	});



	
	
	
	
	$("#siguienteLetras").click(function(){
		$('#contenedorActividadLetras').slideUp();
		$('#contenedorActividadMonacho').slideDown();
	});

	$("#guardarCompromiso").click(function(){

		var respuestaCompromiso = $('#pregunta2').val();
		var respuestaIngrediente= $('#pregunta1').val();
		if(respuestaCompromiso != '' &&  respuestaIngrediente != ''){
			guardarEnCubo(respuestaCompromiso);
			guardarResultado(respuestaIngrediente);
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

	$('#guardar_memoria').click(function(){
		var memoria = $('#memoria').val();
		var memoria_id = $('#memoria').attr('respuesta');
		if(memoria != ''){
			enviarMemoria(memoria, 19, memoria_id);
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

	 $('.palabraDraggable').draggable({
		containment: "#contenerdorScroll",
		revert: function(container){
			if($(container).attr("id")=="barrigaMoncaho" ){
				palabrasBarriga++;
				var id="#palabra"+palabrasBarriga;
				$(id).toggle();
				$(id+" span").text($(this).children().text());
				$(id).css({"cursor":"default"});
				$(this).toggle();
				if(!(palabrasBarriga<5)){
					$("#siguienteMonacho").prop('disabled', false);
					$('.palabraDraggable').each(
						function(){
							$(this).removeClass("palabraDraggable");
							$(this).removeClass("texto-blanco");
							$(this).draggable( "disable" );
							$(this).css({"cursor":"default"});
						}
					);
					$('#preguntaFinalMonacho').fadeIn("slow");
					if(hazTenidoNovio==true){
						$('#preguntaFinalMonacho span').text("Analiza los resultados de tu selección. ¿Estas características aportan a tu crecimiento personal?");
					}else{
						$('#preguntaFinalMonacho span').text("¿Por qué te fijas en personas con estas características?¿Son comunes esas características  a las que tienen mis amigos y/o familiares?");

					}


				}

	    		return true;
	    	}else{
	    		
	    		return true;
	    	}
	    		
	    	
	    },
	    start: function( event, iu) {
	    	$(this).css({"z-index": "10"});
		}
	});

	$( "#barrigaMoncaho" ).droppable({
	 
	});

	$('#donw').click(
		function(){
			var maxColHeigth=0;
			$('#scroll').children().each(
				function(){
					if($(this).height()>maxColHeigth){
						maxColHeigth=$(this).height();
					}
				}
			);
			if(topScroll>(maxColHeigth-223)*-1)
			topScroll-=pasoScroll;
			$('#scroll').animate({"top": topScroll+"px"});

		}
	);

	$('#up').click(
		function(){
			if(topScroll<0){
				topScroll+=pasoScroll;
				$('#scroll').animate({"top": topScroll+"px"});
			}

		}
	);

	$('#preguntaHazTenidoNovio #botonera #Si').click(
		function(){
			hazTenidoNovio=true;
			desaparecerDialogo();
			cambiarAudio3();
			
		}
	);

	$('#preguntaHazTenidoNovio #botonera #No').click(
		function(){
			hazTenidoNovio=false;
			desaparecerDialogo();
			cambiarAudio4();
			
		}
	);

	$('#preguntaTienesNovio #botonera #Si').click(
		function(){
			$('#preguntaTienesNovio').fadeOut("slow");
			$('#contenedorActividadRegla #cortina').css({"display":"none"});
			cambiarAudio6();


		}
	);

	$('#preguntaTienesNovio #botonera #No').click(
		function(){
			$('#siguienteRegla').click();
			
		}
	);

	$('#siguienteAdvertencia').click(
		function(){
			$('#advertenciaDePreguntas').fadeOut("slow");
			$('#contenedorActividadRegla #cortina').css({"display":"none"});

		}

	);

	$('.quitar').click(function(){
		var texto=$(this).parent().find("span").text();
		var id=$(this).parent().attr("id");
		var res = id.split("palabra");
		var numero= res[1];

		
		$('.palabraDraggable').each(function(){
			if($(this).children().text()==texto){
				$(this).show();
			}
		});

		for( var a=numero; a<6; a++){
			var next=parseInt(a)+1;
			var idActual="#palabra"+a;
			var idSiguiente="#palabra"+next;

			$(idActual).find("span").text($(idSiguiente).find("span").text());
		}

		idActual="#palabra"+palabrasBarriga;
		$(idActual).hide();
		palabrasBarriga--;

	});



});


//Cambiar al audio 1
function cambiarAudio1(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m8/p1.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Verifiquemos en la base de datos... ');
	audioElement.onpause = function(){
		$('.subs').hide();
		audioElement.controls = false;
	}

}

//Cambiar al audio 2
function cambiarAudio2(){

	audioElement.setAttribute('src', '../assets/audio/mpyc2/m8/p2.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('La atracción física no es suficiente para establecer una relación de noviazgo. Debe ser una decisión tomada desde la inteligencia y la voluntad.');
}

//Cambiar al audio 3
function cambiarAudio3(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m8/p3.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('¿Cuáles de estas características identificas en aquellas personas con las que has tenido una relación de noviazgo?');
}

//Cambiar al audio 4
function cambiarAudio4(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m8/p4.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('¿ De las siguientes características cuáles tienen las personas que te llaman la atención para una posible relación de noviazgo?');
}

//Cambiar al audio 5
function cambiarAudio5(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m8/p5.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Un factor de éxito en el noviazgo es la amistad, que puede ser previa o construirse y desarrollarse durante la relación.  Para ser amigo de alguien es imprescindible conocerse.');
	audioElement.onpause = function(){
		$('.subs').hide();
		//audioElement.controls = false;
		if(hazTenidoNovio==false){
			cambiarAudio7();
		}
	}
}

//Cambiar al audio 6
function cambiarAudio6(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m8/p6.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('¿Sabes cuánto conoces a la persona con la que tienes una relación de noviazgo?');
}

//Cambiar al audio 7
function cambiarAudio7(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m8/p7.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('A continuación verás unas preguntas que ayudan a profundizar el conocimiento en una relación de noviazgo.');
	audioElement.onpause = function(){
		/*$('.subs').hide();
		audioElement.controls = false;*/
	}

}

//Cambiar al audio de error
function cambiarAudioError(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m8/error.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Parece que hay un error en el archivo. Ayúdame a completar la frase. Usa tu teclado!.');
	audioElement.onpause = function(){
		/*$('.subs').hide();
		audioElement.controls = true;*/
	}

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
function animacion1(){
	
	$('#contenedorOracion1').addClass("animarOracion");	
	$("#contenedorOracion1").bind('oanimationend animationend webkitAnimationEnd', function() { 
   		$('#contenedorOracion1').removeClass("animarOracion");
   		$('#contenedorOracion1').css("width", "100%");	
   		$('#contenedorOracion2').addClass("animarOracion");
   		$("#contenedorOracion2").bind('oanimationend animationend webkitAnimationEnd', function() { 
   			$('#contenedorOracion2').removeClass("animarOracion");
   			$('#contenedorOracion2').css("width", "100%");		
   			$('#contenedorOracion3').addClass("animarOracion2");
   			$("#contenedorOracion3").bind('oanimationend animationend webkitAnimationEnd', function() { 
   				$("#contenedorOracion3").unbind('oanimationend animationend webkitAnimationEnd');
				$('#contenedorOracion3').removeClass("animarOracion2");
				$('#contenedorOracion3').css("width", "100%");
				$('#carga9').css("width", "100%");
				$('#carga9').removeClass("animarBarra");
				intervalo=setTimeout(function() {
					ultimaAnimacion();
					clearTimeout(intervalo);

				}, 1000);

   			});

   		});		
	});
}

function ultimaAnimacion(){

	$('#contenedorCarga').fadeOut("slow");
	$('#contenedorOracionesLetras').addClass("animarOracion3");
	cambiarAudioError();
	$("#contenedorOracionesLetras").bind('oanimationend animationend webkitAnimationEnd', function() {
		$('#contenedorOracionesLetras').css("top", "10px");
		$('#contenedorOracion3').css("width", "100%");	
		$('#contenedorOracionesLetras').removeClass("animarOracion3");
		$('#contenedorOracion3').removeClass("animarOracion4");
		$( '#contnedorAhorcado').fadeIn( "slow" );
		arrancarActividadLetras();
	});
				
}

function animacion2(){
	$('#carga9').addClass("animarBarra")
}

function aparecerLetra(L){
	var id="."+L;
	$(id).each(function(){
		$(this).fadeIn( "slow" );
	})
	widthInicial+=3.33;
	if(widthInicial<98){
		$('#contenedorCarga2 #carga9').animate({width: widthInicial+"%"});

	}else{
		$('#contenedorCarga2 #carga9').toggle();
		$('#contenedorCarga2 #carga10').toggle();
		clearTimeout(intervaloSegundos);
		cambiarAudio2();

	}

}

function arrancarActividadLetras(){
	ahorcadoListo=true;
	setReloj(1, 1);

}

function setReloj(min, seg){
	minutos=min;
	segundos=seg;
	intervaloSegundos = setInterval(quitarSegundo, 1000);


}

function quitarSegundo(){
	segundos--;
	if(minutos==0 && segundos==0){
		contadorOportunidades=3;
		intentoFallido();
	}

	if(segundos==-1){
		minutos--;
		segundos=59;
	}



	var stringMinutos;
	var stringSegundos;
	if(minutos<10){
		stringMinutos="0"+minutos;
	}else{
		stringMinutos=minutos;
	}

	if(segundos<10){
		stringSegundos="0"+segundos;
	}else{
		stringSegundos=segundos;
	}
	$('#contenedorRelojLetras #contadorRegla2').text(stringMinutos+":"+stringSegundos);
}

function intentoFallido(){
	var id= "#estrella"+contadorOportunidades;
	$(id).fadeOut("slow");
	$('#contenedorActividadLetras').addClass("animarBarriga");
	$("#contenedorActividadLetras").bind('oanimationend animationend webkitAnimationEnd', function() {
		$('#contenedorActividadLetras').removeClass("animarBarriga");
	});
	if(contadorOportunidades==3){
		perdio();
		
	}else{
		contadorOportunidades++;
	}
}

function perdio(){
	clearTimeout(intervaloSegundos);
	ahorcadoListo=false;
	errorDeCargaSoloUnaVez=true;
	errorDeCarga();

	$('.letraAhorcado').each(function(){
		$(this).addClass("animarRotarLetras");
		$(this).bind('oanimationend animationend webkitAnimationEnd', function() {
			$(this).unbind('oanimationend animationend webkitAnimationEnd');
			$(this).css({"-webkit-transform": "rotate(180deg)"});
			$(this).animate({top: "350px"},1000, "swing");
		});
	});
}

function errorDeCarga(){
	if(errorDeCargaSoloUnaVez==true){
		errorDeCargaSoloUnaVez=false;
		$('#contenedorCarga2 #carga9').toggle();
		$('#contenedorCarga2 #errorCarga').toggle();
	}
}

function reinicioActividad(){
	$('.letraAhorcado').each(function(){
		//$(this).fadeOut(10);
		$(this).css({"display": "none"});
		$(this).removeClass("animarRotarLetras");
		$(this).css({"-webkit-transform": "rotate(0deg)"});
		$(this).css({"top": "-13px"});
	});
	$('.estrella').each(function(){
		$(this).css({"display": "block"});
	});
	widthInicial=60;
	contadorOportunidades=1;
	letras["I"]=false;
	letras["N"]=false;
	letras["T"]=false;
	letras["E"]=false;
	letras["L"]=false;
	letras["G"]=false;
	letras["C"]=false;
	letras["V"]=false;
	letras["O"]=false;
	letras["U"]=false;
	letras["D"]=false;
	letras["A"]=false;
	$('#contenedorCarga2 #carga9').css({"width": "60%"});
	$('#contenedorCarga2 #carga9').toggle();
	$('#contenedorCarga2 #errorCarga').toggle();
	arrancarActividadLetras();
}

function siguinetePregunta(){
	$('#contenedorPreguntasRegla #contenedorPregunta #preguntaRegla').fadeOut("slow", aparecerPregunta);
	$('#botoneraRegla').fadeOut("slow");
	$('#contenedorContadorRegla').fadeOut("slow");
}

function aparecerPregunta(){
	preguntaActual++;
	if(preguntaActual<15){
		$('#contenedorPreguntasRegla #contenedorPregunta #preguntaRegla').text(preguntasRegla[preguntaActual]);
		var stringPreguntaActual;
		if(preguntaActual+1 < 10){
			stringPreguntaActual="0"+(preguntaActual+1);
		}else{
			stringPreguntaActual=(preguntaActual+1);
		}
		$('#contenedorContadorRegla #contadorRegla').text(stringPreguntaActual+"/15");
		$('#contenedorPreguntasRegla #contenedorPregunta #preguntaRegla').fadeIn("slow");
		$('#botoneraRegla').fadeIn("slow");
		$('#contenedorContadorRegla').fadeIn("slow");
	}else{
		$('#seccionPreguntas').fadeOut("slow", aparecerResultado);
		if(respuestasSi<6){
			$('#ResultadoRegla').text(respuestasRegla[0]);
		}else if(respuestasSi < 12){
			$('#ResultadoRegla').text(respuestasRegla[1]);
		}else{
			$('#ResultadoRegla').text(respuestasRegla[2]);

		}

	}
}

function reglaSi(){
	respuestasSi++;
	leftRegla+=50;
	$('#imagFlecha').animate({left: leftRegla+"px"});

}

function aparecerResultado(){
	$('#seccionResultados').fadeIn("slow");
}

function desaparecerDialogo(){
	$('#preguntaHazTenidoNovio').fadeOut("slow");
	$('#contenedorActividadMonacho #cortina').toggle();
}

function aparecerAdvertencia(){
	$('#advertenciaDePreguntas').fadeIn("slow");
	cambiarAudio7();
}








