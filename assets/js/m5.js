
/* For Page 2 BEGIN*/

var desc_key = 0;
var desc_flag = [1, 0, 0, 0, 0, 0];
var sz_titles = [
	'Visitar a los enfermos',
	'Dar de comer al hambriento y dar de beber al sediento',
	'Dar posada al peregrino',
	'Vestir al desnudo',
	'Visitar a los presos',
	'Enterrar a los difuntos'
];

var sz_contents = [
	'Aunque muchos profesionales de la salud trabajan diariamente con enfermos, existen otras personas conscientes de que los enfermos no solo necesitan medicamentos y  cuidados desde su condición, sino también atención y compañía.',
	'Hay mucha gente que por desgracia no tiene garantizado lo mínimo para cada día. Por eso es importante que otras personas, que cuentan con los medios, los ayuden en su necesidad.',
	'No todos tienen un techo bajo el cual dormir y descansar de forma digna. Esta es una realidad que presenciamos a diario en las grandes poblaciones. Aunque muy pocos pueden recibir a alguien en su propia casa, por fortuna hay muchos que se preocupan por brindarle una cama confortable a quien la necesita en fundaciones y refugios.',
	'Mientras muchas personas tienen más ropa de la que necesitan, otros sufren por esta razón. En distintas parroquias, instituciones y fundaciones hacen constantes campañas de donación de ropa.',
	'Las personas que están privadas de la libertad tienen muchas necesidades materiales y espirituales. Ellas deben pasar por varios procesos que les permitan llegar al arrepentimiento y crecimiento personal para su futura reintegración a la sociedad. Pero hay también otras personas privadas de la libertad, por ejemplo, los secuestrados. De ahí que sea importante trabajar en causas en pro de los secuestrados, ayudándoles a sobrellevar esta difícil situación, haciéndoles sentir que no han sido olvidados y dándoles esperanza a  ellos y sus familias.',
	'El cuerpo humano ha sido lugar de morada del Espíritu Santo y por ello merece un entierro apropiado. En países que han sufrido conflictos armados, como el nuestro, estas obras de recuperación de los cuerpos y entrega a los familiares, adquieren un valor muy significativo.'
];

/* For Page 2 END*/

var video = 0;
var arrayPersonas= new Array();
var audioElement;
var personaActual;
var maxPersonas;
var casaW;
var casaH;

function show_loading(obj, visible) {
	if (visible) {
		obj.waitMe({
			effect : 'bounce',
			text : 'Loading...',
			bg : 'rgba(255,255,255,0)',
			color : '#000',
			maxSize : '',
			textPos : 'vertical',
			fontSize : '',
			source : ''
		});
	}
	else {
		obj.waitMe('hide');
	}
}

$(document).ready(function() {

	$.fn.editable.defaults.mode = 'inline';
	$('#main_title').editable({
		type: 'text',
		pk: 'user',
		url: base_url + 'm5/change_title',
		title: 'Enter Main Title'
	});
	$('#sub_title').editable({
		type: 'text',
		pk: 'user',
		url: base_url + 'm5/change_subtitle',
		title: 'Enter Sub Title'
	});
    $('#news_content').editable({
        type: 'textarea',
        pk: 'user',
        url: base_url + 'm5/change_content',
        title: 'Enter Content',
        display: function(value) {
            $(this).html('<p class="newspaper">' + value + '</p>');
        }
    });

	/* For Page 2 BEGIN */
	function view_description() {
		desc_flag[desc_key] = 1;
		$('#lbl_desc_title').text(sz_titles[desc_key]);
		$('#lbl_desc_content').text(sz_contents[desc_key]);

		var flags = 0;
		$.each(desc_flag, function (key, val) {
			flags = flags + val;
		});
		if (flags == 6)
			$('#jump-video').prop('disabled', false);
	}

	$('#btn_desc_left').click(function(){
		if (desc_key == 0) desc_key = 5;
		else desc_key = desc_key - 1;
		view_description();
	});
	$('#btn_desc_right').click(function(){
		if (desc_key == 5) desc_key = 0;
		else desc_key = desc_key + 1;
		view_description();
	});
	view_description();
	/* For Page 2 END */

	/* For Page 3 BEGIN */
	$('#btn_upload').click(function () {
		$('#file_upload').trigger('click');
	});
	$('#file_upload').change(function () {
		if ($(this).val() != "") {
			var data = new FormData();
			data.append('image', $(this)[0].files[0]);
			$.ajax({
				url: base_url+'m5/upload',
				type: 'POST',
				data: data,
				cache: false,
				dataType: 'json',
				processData: false,
				contentType: false,
				beforeSend: function () {
					show_loading($('#animacion-container'), true);
				},
				success: function (data) {
					show_loading($('#animacion-container'), false);
					$('#btn_upload').attr('src', data.file);
				},
				error: function (data, status) {
					show_loading($('#animacion-container'), false);
					console.log(status);
				}
			});
		}
	});
	/* For Page 3 END */
	

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


	audioElement = document.createElement('audio');
	audioElement.setAttribute('src', base_url + 'assets/audio/m6/1.mp3');
	document.body.appendChild(audioElement);

	$('#jump-video').click(function(){
		if(video==0) {
			LimelightPlayer.doPause();
			$('#iframe-container').slideUp();
			$('#page-container').slideDown();
			video++;
			$(this).val('Siguiente');
			$('#jump-video').prop('disabled', true);

			audioElement.play();
			audioElement.controls = true;
		} else if (video==1) {
			$('#page-container').slideUp();
			$('.mini-juego').slideDown();
			video++;
			$(this).val('Continuar');

			audioElement.pause();
			audioElement.currentTime = 0;
			audioElement.setAttribute('src', base_url + 'assets/audio/m4/p2.mp3');
			audioElement.play();
			audioElement.controls = true;
		} else {
			$('.mini-juego').slideUp();
			$('#div_step_3').slideDown();
			video++;
			$(this).val('Volver');
		}
	});


	$('#guardar_memo').click(function(){
		var memoria = $('#memoria').val();
		var memoria_id = $('#memoria').attr('r');
		if(memoria != ''){
			enviarMemoria(memoria, 5, memoria_id);
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
		url: base_url+"terminar_memoria",
		type: "post",
		data: data,
		beforeSend: function() {
			show_loading($('#animacion-container'), true);
		},
		success:  function (response) {
			show_loading($('#animacion-container'), false);
			window.location.href = base_url+'m5';
		},
		error: function(event){
			show_loading($('#animacion-container'), false);
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




