var lastBrujula;
var newBrujula;
var EstadoBrujulas= new Array(false, false, false, false);
var aFaltantnes=10;
var maderaOk=false;
var pasoPorLupa=false;
var intentos=1;
var prenderMotor=true;
var inicio =true;



$(document).ready(function(){
	
	$("#continuar2").click(function(){
		
		if(inicio){
			$('#video2').slideUp();
			$('#contenedorActividadMadera').slideDown();
		 	cambiarAudio1();
		 	inicio = false;
			
		}else{
			$('#video2').slideUp();
			$('#contenedor-memoria').slideDown();
		
		}
		
	});

	// $("#continuar2").click(function(){
	// 	$('#video2').slideUp();
	// 	$('#contenedorActividadMadera').slideDown();
	// 	cambiarAudio1();
		 
	// });

	$("#siguienteMadera").click(function(){
		$('#contenedorActividadMadera').slideUp();
		$('#contenedorActividadRadares').slideDown();
		cambiarAudio2();
	});

	$("#siguienteRadar").click(function(){
		$('#contenedorActividadRadares').slideUp();
		$('#contenendorActividadA').slideDown();
		$('#contenedorPrincipal').addClass("animarMargin");
		$("#contenedorPrincipal").bind('animationend webkitAnimationEnd', function() {
		 	$(this).css({"margin":"18px auto 0px auto"}); 
		 });
		//cambiarAudio1();
		cambiarAudio3();
	});

	$("#siguienteA").click(function(){
		if(aFaltantnes==0){

			$('#contenendorActividadA').slideUp();
			$('#contenendorActividadMotor').slideDown();
			cambiarAudio4();
		}else{
			$('#emergenteA').fadeOut("slow");

		}
		
	});

	$("#siguienteMotor").click(function(){
		$('#contenendorActividadMotor').slideUp();
		$('#video2').slideDown();
		$('#continuar2').css("display", "none");
	});

	$("#continuar3").click(function(){
		$('#video3').slideUp();
		$('#contenedor-memoria').slideDown();
	});

	 
	 $('#img_01').imageLens({ lensSize: 200 });

	newBrujula=$('#brujulaDignidad').parent();

	$('.brujula').click(
		function(){
			var titulo=$(this).data("titulo");
			var texto=$(this).data("texto");
			var color=$(this).data("color");
			var index=$(this).data("nobrujula");
			var candado=true;

			lastBrujula=newBrujula;
			newBrujula=$(this).parent();
			lastBrujula.removeClass("brujulaSeleccionada");
			newBrujula.addClass("brujulaSeleccionada");

			$('#tituloBrujula').removeClass("titulo-magenta");
			$('#tituloBrujula').css("color", color);
			$('#tituloBrujula').text(titulo);
			$('#textoBrujula').text(texto);

			EstadoBrujulas[index]=true;

			for(var a=0; a<4; a++){

				if(EstadoBrujulas[a]==false){
					candado=false;
					break;
				}
			}

			if(candado==true){

				$("#siguienteRadar").prop('disabled', false);
			}

		}
	);

	$('.seleccionA').click(
		function(){

			
			if($(this).hasClass("aSeleccionada")==false){

				var titulo=$(this).data("titulo");
				var texto=$(this).data("texto");
				aFaltantnes--;

				$('#tituloA').text(titulo);
				$('#textoA').text(texto);
				$('#contador').text(aFaltantnes);
				$(this).children().css('display', 'inline-block');
				$(this).addClass("aSeleccionada");
				animarBote();
				$('#emergenteA').fadeIn("slow");

				if(aFaltantnes==0){

					$("#siguienteA").prop('disabled', false);
					$("#siguienteA").val("Siguiente");
				}
			}

		}

	);

	 $('.madera').draggable({
		containment: "#contenedorDrag",
		revert: function(container){
	    	if($(container).attr("id")=="maderaComplemento" && $(this).attr("id")=="madera1"){
	    		maderaOk=true;
	    		$('#maderas').css("display", "none");
	    		$('#procesos').css("display", "block");
	    		$('#maderaComplemento').css( "visibility", "visible");
	    		$('#textoMadera').text("Siendo él y ella maderas diversas, deben cortarse limarse y pulirse para que puedan encajar adecuadamente. Usa herramientas para esta labor.");
	    		return false;
	    	}else{
	    		
	    		return true;
	    	}
	    },
	    stop: function( event, ui ) {
	    	if(maderaOk==false){
	    		$(this).removeClass('maderaComplemento');
	    		$(this).css("left", 68 );
	    	}
	    }
	});

    $('.madera').on('dragstart',
    	function(event){
			$(this).addClass('maderaComplemento');
		}
	);


	$( "#maderaComplemento" ).droppable({
	 
	});

	$('#proceso1').click(
		function(){

			if($('#proceso1').hasClass("procesoOn")==true){

				$('#proceso1').removeClass('procesoOn');
				$('#proceso2').addClass('procesoOn');
				$('#proceso1').addClass('procesoOff');
				$('#proceso2').removeClass('procesoOff');
				$('#maderaBase').attr("src", "../assets/img/mpyc2/m9/madera_sup_2.png");
				$('#maderaComplemento').attr("src", "../assets/img/mpyc2/m9/madera_inf_2.png");
			}

		}

	);

	$('#proceso2').click(
		function(){
	
			if($('#proceso2').hasClass("procesoOn")==true){
	
				$('#proceso2').removeClass('procesoOn');
				$('#proceso3').addClass('procesoOn');
				$('#proceso2').addClass('procesoOff');
				$('#proceso3').removeClass('procesoOff');
				$('#maderaBase').attr("src", "../assets/img/mpyc2/m9/madera_sup_3.png");
				$('#maderaComplemento').attr("src", "../assets/img/mpyc2/m9/madera_inf_2.png");
			}

		}

	);

	$('#proceso3').click(
		function(){

			if($('#proceso3').hasClass("procesoOn")==true){

				$('#procesos').css("display", "none");
				$('#pegamentos').css("display", "block");
				$('#maderaBase').attr("src", "../assets/img/mpyc2/m9/madera_sup.png");
				$('#maderaComplemento').attr("src", "../assets/img/mpyc2/m9/madera_inf.png");
				$('#maderaComplemento').addClass("maderaComplemento2")
				$('#maderaComplemento').removeClass("maderaComplemento");
				$('#textoMadera').text("Antes de lanzar el barco al agua las maderas deben unirse firmemente. Busca el mejor tipo de pegamento para este fin.");
				cambiarAudio1B();
			}

		}

	);

	$('#pegamento1').click(
		function(){

			$('#pegamento1').attr("src", "../assets/img/mpyc2/m9/pegamento_selec.png");
			$('#pegamento2').attr("src", "../assets/img/mpyc2/m9/cinta.png");
			$('#pegamento3').attr("src", "../assets/img/mpyc2/m9/grapadora.png");
			$('#colbon').css("display", "inline-block");
			$('#cintas').css("display", "none");
			$('#grapas').css("display", "none");
			//cambiarAudio1B();
			$("#siguienteMadera").prop('disabled', false);
		}

	);
	$('#pegamento2').click(
		function(){

			$('#pegamento1').attr("src", "../assets/img/mpyc2/m9/pegamento.png");
			$('#pegamento2').attr("src", "../assets/img/mpyc2/m9/cinta_selec.png");
			$('#pegamento3').attr("src", "../assets/img/mpyc2/m9/grapadora.png");
			$('#colbon').css("display", "none");
			$('#cintas').css("display", "inline-block");
			$('#grapas').css("display", "none");

		}

	);
	$('#pegamento3').click(
		function(){

			$('#pegamento1').attr("src", "../assets/img/mpyc2/m9/pegamento.png");
			$('#pegamento2').attr("src", "../assets/img/mpyc2/m9/cinta.png");
			$('#pegamento3').attr("src", "../assets/img/mpyc2/m9/grapadora_selec.png");
			$('#colbon').css("display", "none");
			$('#cintas').css("display", "none");
			$('#grapas').css("display", "inline-block");

		}

	);

	$('#imagMotor').click(
		function(){

			if(pasoPorLupa==true){

				$("#contenedorLupa").css("display", "none");
				$('#instruccionesMotor').animate({opacity: "0"});
				$('#blissMotor').animate({
					top: "-98px",
					left: "10px"});
				$('#blissMotor').animate({  borderSpacing: 0.5 }, {
    				step: function(now,fx) {
    					now=now+1;
				      $(this).css('-webkit-transform','scale('+now+','+now+')'); 
				      $(this).css('-moz-transform','scale('+now+','+now+')');
				      $(this).css('transform','scale('+now+','+now+')');
				    },
    				duration:'slow'
					},'linear');
				$("#contenedorPrenderMotor").css("display", "inline-block");
				$('#imagMotor').css("cursor", "default");
			}

		}
	);

	$('#lupa').click(
		function(){


			$("#imagAceite").elevateZoom({ zoomType	: "lens", lensShape : "round", lensSize : 150 }); 
			$("#imagGasolina").elevateZoom({ zoomType	: "lens", lensShape : "round", lensSize : 150 }); 
			$('#imagMotor').css("cursor", "pointer");
			pasoPorLupa=true;
			$("#lupa").addClass("lupaDesactivada");

		}
	);

	$('#imagAceite').hover(
		function(){

			console.log("hover");
		}

	);

	 $('#mano').draggable({
		containment: "#areaPrenderMotor",
		revert: function(container){
	    	    		
    		return true;
	    	
	    },
	    revertDuration: 1500,
	    axis: "x",
	    drag: function( event, ui ) {
	    	if(ui.position.left<-140){
	    		if(prenderMotor==true){
	    			prenderMotor=false;
	    			$('#imagMotor').addClass("moviminetoMotor");
	    			intentos=intentoMotor(intentos);

	    		}
	    	}
	    },
	    stop: function( event, ui ) {
	    	$('#imagMotor').removeClass("moviminetoMotor");
	    	prenderMotor=true;

	    }



	});

	$('#continuarMotor').click(function(){
		$('#emergenteMotor').fadeOut("slow");

	});

	$('#guardar_memo').click(function(){

		var memoria = $('#memoria').val();
		var memoria_id = $('#memoria').attr('r');
		if(memoria != ''){
			enviarMemoria(memoria, 20, memoria_id);
			
		
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

//Cambiar al audio 1
function cambiarAudio1(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m9/p1.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('El primer paso de la construcción del barco del amor maduro es la etapa de noviazgo a partir del enamoramiento.');
}

function cambiarAudio1B(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m9/p1B.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Algunos pegamentos son más débiles para asegurar la unión de las maderas en la travesía. Con el pegamento del compromiso matrimonial el barco ha quedado sólido y listo para zarpar. Sin embargo todavía faltan muchas otras cosas para que este viaje funcione.');
}

//Cambiar al audio 2
function cambiarAudio2(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m9/p2.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('El tablero de control ayuda a definir el rumbo. En este barco se deben coordinar y atender cuatro señales del radar de ubicación.');
}

//Cambiar al audio 3
function cambiarAudio3(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m9/p3.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Para poder ponerse en  marcha este barco tiene tres fuentes de energia. La primera es el viento de la afectividad que recogen las velas.');
}

//Cambiar al audio 4
function cambiarAudio4(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m9/p4.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Cuando la afectividad está baja o no alcanzan para inflar suficientemente las velas, el barco puede moverse recurriendo a sus dos motores.');
}

function AudioMotor(){
    	audioElement.setAttribute('src', '../assets/audio/mpyc2/m9/motor.mp3');
		audioElement.play();
}

function AudioArranqueMotor1(){
    	audioElement.setAttribute('src', '../assets/audio/mpyc2/m9/arranque1.mp3');
		audioElement.play();
}

function AudioArranqueMotor2(){
    	audioElement.setAttribute('src', '../assets/audio/mpyc2/m9/arranque2.mp3');
		audioElement.play();
}

function intentoMotor(i){
	$('#emergenteMotor').fadeIn("slow");
	if(i==1){
		$('#tituloMotor').text("Humildad");		
		$('#textoMotor').text("Reconocer los aspectos positivos y negativos de la propia personalidad y conducta.");
		$('#punto1').css("visibility", "hidden");
		AudioArranqueMotor1()		
	}
	if(i==2){
		$('#tituloMotor').text("Misericordia");		
		$('#textoMotor').text("Tratar con corazón los defectos del otro.");
		$('#punto2').css("visibility", "hidden");		
		AudioArranqueMotor2()		
	}
	if(i==3){
		$('#tituloMotor').text("Paciencia");		
		$('#textoMotor').text("Tolerar los límites y debilidades del otro.");
		$('#punto3').css("visibility", "hidden");		
		AudioArranqueMotor1()		
		
	}
	if(i==4){
		$('#tituloMotor').text("Perdón");		
		$('#textoMotor').text("Decisión voluntaria de no vengarse ni permanecer resentido para cicatrizar las heridas.");	
		$('#punto4').css("visibility", "hidden");	
		
		AudioArranqueMotor2()		
	}
	if(i==5){
		$('#tituloMotor').text("Rectificar y Corregirse");		
		$('#textoMotor').text("Actuar ante las equivocaciones para evitar volver a cometerlas.");
		$('#punto5').css("visibility", "hidden");	
		$('#HUDMotor').css("visibility", "hidden");
		$('#contenedorPrenderMotor').css("visibility", "hidden");contenedorPrenderMotor
		$('#imagMotor').addClass("moviminetoMotorInfinito");
		$("#siguienteMotor").prop('disabled', false);
		AudioMotor();
	}


	i++;
	return i;
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

function animarBote(){
	var pos=$('.contedorBote').position();
	var posx=pos.left;
	var newPosx=posx+22;
	var id = setInterval(frame, 9);
	function frame() {
	    if (posx > newPosx) {
      		clearInterval(id);
        } else {
	        posx+=0.05;
	        $('.contedorBote').css('left', posx);
	        
	    }
  	}

}