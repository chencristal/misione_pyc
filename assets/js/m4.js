var video = 0;
var arrayPersonas= new Array();
var personaActual;
var maxPersonas;
var casaW;
var casaH;
$(document).ready(function() {
	
	 $("#eliminarPersona").click(function(){

    		if(document.getElementById("elm").style.display=="none")
    		{
    			document.getElementById("elm").style.display="block";
    		}
    		else{
    			document.getElementById("elm").style.display="none";
    		}

        if($("[id*=btn-eliminarPersona]").css("display")=="none")
        {
        	
        	$("[id*=btn-eliminarPersona]").css("display", "block");
			// $("[id*=btn-eliminarPersona]").hide();
        }
        else
        {
        	
        	$("[id*=btn-eliminarPersona]").css("display", "none");
			// $("[id*=btn-eliminarPersona]").show();
        }
    });

   $('body').on('click', '.btn-cerrar', function(){
    		$(this).closest(".persona-item").remove();
    });
		

	$('#jump-video').click(function(){
		if(video==0){
			LimelightPlayer.doPause();
			$('#iframe-container').slideUp();
			$('#page-container').slideDown();
			video++;
			$(this).val('Siguiente');
		}else{
			$('#animacion-container').slideUp();
			$('.mini-juego').slideDown();
		}
		
		
	});
	

	$('#guardar_memo').click(function(){
		var memoria = $('#memoria').val();
		var memoria_id = $('#memoria').attr('r');
		if(memoria != ''){
			enviarMemoria(memoria, 4, memoria_id);
		}else{
			$('#dialog-text').text('No has respondido aún.');
			$( "#dialog" ).dialog({
			  dialogClass: 'no-close success-dialog',
		      modal: true,
		      buttons: {
		        Ok: function() {
		          $( this ).dialog( "close" );
		        }
		      }
		    });
		}
	});

	$('.lista-persona .select').click(function(event){
		$(event.target).parent().find('ul').toggle();
	});
	

	$('.persona').click(function(event){
		//toggle the list
		$(event.target).closest('ul').toggle();

		//check type
		var type = $(event.target).closest('li').attr('p');
		
		//new persona
		var persona = new Persona(type);
		

		initElementsDragAndClicks();
		

	});

	$('#continuar').click(function(){
		guardarPersonas();
		//getTextoPersonas();
		$('.mini-juego').slideUp();
		$('#actividadEmpresa').slideDown();
		cambiarAudio1();

	});

	$('#continuarEmpresa').click(
		function(){
			$('#actividadEmpresa').slideUp();
			$('#actividadFotos').slideDown();
		}
	);

	$('#continuarFotos').click(
		function(){
			$('#actividadFotos').slideUp();
			$('#actividadEscribirPersonas').slideDown();
			cambiarAudio2();
		}
	);

	$('#continuarEscribirPersonas').click(
		function(){

			$('#guardarEscritura').click();

			if(isAllTextoPersonas()==true){

				terminarMision();
				$('#actividadEscribirPersonas').slideUp();
				$('.memoria').slideDown();

			}else{

				$('#dialog-text').text('No has escrito el rol de todos los integrantes de tu familia.');
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
		}
	);


	$('#guardarEscritura').click(
		function(){
			arrayPersonas[personaActual].texto=$('#textoPersona').val();
		}
	);

	$('#mostrarPopup').click(
		function(){
			$('#emergenteEmpresa').fadeIn("slow");
		}
	);

	$('#CerrarEmergente').click(
		function(){
			$('#emergenteEmpresa').fadeOut("slow");
		}
	);

	initElementsDragAndClicks();
	$('.nombre-persona').unbind('click').click(function(){$(this).focus()})

	var zoomCounter = 0;
	var zoom = 1.0;
	$('.zoom-out').click(function(event){
		console.log(zoomCounter);
		if(zoomCounter>-2){
			zoom-= 0.1;
			$('.casa').css('transform','scale('+zoom+')');
			zoomCounter--;
		}
	});
	$('.zoom-in').click(function(event){
		if(zoomCounter<2){
			zoom+= 0.1;
			$('.casa').css('transform','scale('+zoom+')');
			zoomCounter++;
		}
	});

	$('#izquierda').click(

		function(){
			
			if(personaActual<maxPersonas-1){
				arrayPersonas[personaActual].texto=$('#textoPersona').val();
				personaActual++;
				moverIzquierda();
				$('#textoPersona').val(arrayPersonas[personaActual].texto);
			}
		}

	);

	$('#derecha').click(
		function(){

			if(personaActual>0){
				arrayPersonas[personaActual].texto=$('#textoPersona').val();
				personaActual--;
				moverDerecha();
				$('#textoPersona').val(arrayPersonas[personaActual].texto);
			}


		}

	);


});



function terminarMision(){
	var ciudad = $('#ciudad').val();
	var barrio = $('#barrio').val();
	var personasElements = $('.hogar').find('.persona-item');

	
	if( ciudad == '' || barrio == ''){
		mostrarMensaje('Escribe la ciudad y el barrio');
	}else{
		var personasArray = new Array();
		for(var i=0; i<personasElements.length; i++){
			var persona = personasElements.eq(i);
			var tipoPersona = persona.attr('type');
			var texto = arrayPersonas[i].texto;
			var nombrePersona = persona.find('input').val();
			var top = (arrayPersonas[i].top*100)/casaH;
			var left = (arrayPersonas[i].left*100)/casaW;
			var persona = {
				'tipoPersona':tipoPersona,
				'top': top,
				'left': left,
				'nombrePersona':nombrePersona,
				'textoPersona': texto


			}
			personasArray.push(persona);
		}

		var data = {
			'mision_id': 4,
			//'ciudad': ciudad,
			//'barrio': barrio,
			'personas': JSON.stringify(personasArray)
		}
		$.ajax({
			async: 'false',
			url: 'terminar_mision',
			type: 'post',
			data: data,
			success:  function (response) {
	            console.log(response);

	        },
	        error: function(event){
	        	console.log(event);
	        }
		});


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



function Persona(type){
	this.pElement;

	var imgUrl = location.origin+'/assets/img/m4/';
	var wImgClass;
	switch(type){
		case "0":
		case "1":  imgUrl += 'bebe.png';
		wImgClass = 'sm'
		break;
		case "2":  imgUrl += 'mama.png';
		wImgClass = 'lg mom'
		break;
		case "3": imgUrl += 'papa.png';
		wImgClass = 'lg'
		break;
		case "4": imgUrl += 'nino.png';
		wImgClass = 'md'
		break;
		case "5": imgUrl += 'nina.png';
		wImgClass = 'md'
		break;
		case "6": imgUrl += 'mujer.png';
		wImgClass = 'lg'
		break;
		case "7": imgUrl += 'hombre.png';
		wImgClass = 'lg'
		break;
		case "8": imgUrl += 'abuelo.png';
		wImgClass = 'lg'
		break;
		case "9": imgUrl += 'abuela.png';
		wImgClass = 'lg'
		break;
	}

	var element = '<div type="'+type+'"class="persona-item draggable" data-texto=""><div class="btn-eliminar-persona" id="btn-eliminarPersona"><button type="button" id="btn-eln-per"  class="btn btn-default btn-xs btn-cerrar"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></div><input class="input nombre-persona"><img class="foto-persona '+wImgClass+'"src="'
	+imgUrl+'">'
	+'</div>';

	$('.casa').append(element);

}


function initElementsDragAndClicks(){
	$('.draggable').draggable({
	  containment: "parent",

	});

	$('.nombre-persona').unbind('click').click(function(){$(this).focus()})
}

function guardarPersonas(){


	$('.persona-item').each(function(){
		var tipo=$(this).attr("type");
		var nombre=$(this).children(".nombre-persona").val();
		var pos=$(this).position();
		var texto=$(this).data("texto");
		var personaSave={
			'tipo':tipo,
			'nombre':nombre,
			'texto': texto,
			'top': pos.top,
			'left':pos.left
		}

		var stringToAppend="<div class='slideFamilia'>";
		stringToAppend+="<span class='helper'></span> <!--Esta liena centra verticalmente-->";
		var imgUrl=getSource(tipo);
		stringToAppend+="<img id='persona' src='"+imgUrl+"'>";
		stringToAppend+="</div>";

		$('#sliderFamilia').append(stringToAppend);
		arrayPersonas.push(personaSave);
	});

	casaW = $('.casa').width();
	casaH = $('.casa').height();
	maxPersonas= arrayPersonas.length;
	personaActual=0;
	$('#nombrePersonaDescripcion').text(arrayPersonas[0].nombre);
	$('#textoPersona').val(arrayPersonas[0].texto);

	
}

function getSource(type){
	var imgUrl = location.origin+'/assets/img/m4/';
	switch(type){
		case "0":
		case "1":  
			imgUrl += 'bebe.png';
			break;
		case "2":
			imgUrl += 'mama.png';
			break;
		case "3": 
			imgUrl += 'papa.png';
			break;
		case "4": 
			imgUrl += 'nino.png';
			break;
		case "5": 
			imgUrl += 'nina.png';
			break;
		case "6": 
			imgUrl += 'mujer.png';
			break;
		case "7": 
			imgUrl += 'hombre.png';
			break;
		case "8": 
			imgUrl += 'abuelo.png';
			break;
		case "9": 
			imgUrl += 'abuela.png';
			break;
	}

	return imgUrl;

}

function moverIzquierda(){
	var texto= $('#textoPersona').val();

	$('#nombrePersonaDescripcion').text(arrayPersonas[personaActual].nombre);

	$('.slideFamilia').each(
		function(){
			$(this).animate({left: "-=120.25"});
		}
	);

}

function moverDerecha(){
	$('#nombrePersonaDescripcion').text(arrayPersonas[personaActual].nombre);
	$('.slideFamilia').each(
		function(){
			$(this).animate({left: "+=120.25"});
		}
	);
}

function getTextoPersonas(){
	
	$.ajax({
	 	url: "get_texto_personas",
        type: "post",
        data: 0,
        success:  function (response) {

        	var llenar=false;
        	var obj;
        	var cant;

        	if(response!="No hay informacion"){

        		obj = JSON.parse(response);
        		cant = obj.length;
        		llenar = true; 

        	}


			if(llenar == true){

				

				for(var a = 0; a< cant; a++){

					var temp= obj[a].texto_persona;
					arrayPersonas[a].texto=temp;
				}

				$('#textoPersona').val(arrayPersonas[0].texto);


			}

           
            
        },
        error: function(event){
        	console.log(event);
        }
    });
}

//Cambiar al audio 1
function cambiarAudio1(){
	audioElement.setAttribute('src', '../assets/audio/m4/p1.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('En una empresa hay roles, funciones y tareas desempeñadas por distintas personas. En un hogar sucede igual.');
}

//Cambiar al audio 2
function cambiarAudio2(){
	audioElement.setAttribute('src', '../assets/audio/m4/p2.mp3');
	audioElement.play();
	audioElement.controls = true;
	$('.subs').show();
	$('.subs-panel').html('Ahora piensa en cada integrante de tu hogar. ¿Cuál es el papel que tiene allí? ¿Qué funciones cumple? ¿Cómo aporta  al beneficio común? ¿Cómo propicia la  unidad en el grupo? ');
}

function isAllTextoPersonas(){
	var cant = arrayPersonas.length;
	var lleno =true;


	for (var a = 0; a < cant; a++){
		if(arrayPersonas[a].texto=='' || arrayPersonas[a].texto== null){
			lleno = false;
			break;
		}
	}

	return lleno;
}




