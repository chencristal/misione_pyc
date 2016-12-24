var inicio = true;

var frase1 = {	data:1,
	texto:"Captar al otro de una manera más intensa y diferencial, percibiéndolo individualmente en su unicidad. No se ama a alguien, se ama amar y se busca a quien amar."}
var frase2 = {	data:2,
	texto:"Descentrarse de sí mismo y abrir la puerta de la intimidad para percibir al otro y comunicarse en comunión. La atención se fija en el otro y se distrae de todo lo demás."}
var frase3 = {	data:3,
	texto:"Hay una invención de sí mismo por el encuentro con el otro. Es sentirse un nuevo ser humano gracias al otro. Efecto transformador recíproco."}
var frase4 = {	data:4,
	texto:'Hacer únicas e irrepetible todas las cosas compartidas. Una canción, un banco de plaza o un árbol se transforman en: "nuestra canción", "nuestro banco", "nuestro árbol".'}
var frase5 = {	data:5,
	texto:"Sentir la necesidad de estar juntos. La separación es dolorosa e insoportable. Unión."}
var frase6 = {	data:6,
	texto:"Sentir la necesidad de estar en exclusividad con el otro."}
var frase7 = {	data:7,
	texto:"Sentir la necesidad de que aquello que están experimentando les siga sucediendo el resto de la vida. Que esto sea duradero y no termine nunca."}

var frases= new Array(frase7, frase5, frase3, frase4, frase2, frase1, frase6);
var drop_flag = [0,0,0,0,0,0,0];
var NoFrases=frases.length;
var fraseActual=0;
var ContFotos=0;
var ContDespriciones =0;

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

$(document).ready(function(){

	$('#continuar_drop').prop('disabled', true);

	$('#continuar').click(function(){
		if(inicio){
			//LimelightPlayer.doPause();
			$('#video').slideUp();
			$('#libroDrop').slideDown();
			audioElement.play();
			audioElement.controls = true;
			$('.subs').show();
			$('.subs-panel').html('Mira. Este es el álbum de las etapas del proceso amoroso. En cada hoja encontrarás una etapa. Ayúdame a arrastrar y ubicar las características de cada una, identifica también la foto que ilustra dicha etapa y los diálogos que corresponden a cada situación. Tómate tu tiempo.');
		}else{
			$('#animacion-container').slideUp();
			$('.videoteca').slideDown();
			player.stopVideo();
			audioElement.pause();
			$('audio').hide();
			$('.subs').hide();
		}

	});

    $('#continuar_drop').click(function(){
        $('#libroDrop').slideUp();
        $('#test_atencion').slideDown();
    });

    $('#continuarEscribirPersonas').click(function(){

		var data = {
			'first' : $('#numero1').val(),
			'second' : $('#numero2').val(),
			'third' : $('#numero3').val(),
			'comment' : $('#textoPersona').val()
		};

		$.ajax({
			async: 'false',
			url: base_url+"m8/save_mission",
			type: "post",
			data: data,
			beforeSend: function() {
				show_loading($('#test_atencion'), true);
			},
			success: function (response) {
				show_loading($('#test_atencion'), false);
				$('#emergenteCuestionario').show();
			},
			error: function (event) {
				show_loading($('#test_atencion'), false);
				console.log(event);
			}
		});
    });

    $('#siguienteCuestionario').click(function(){
        $('#test_atencion').slideUp();
        $('#memoriaMision').slideDown();
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
		if(memoria != ''){
			enviarMemoria(memoria, 8, memoria_id);
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

	var num= 1;
	$('.video-container .thumb-nail').each(function(){
		$(this).css('background', 'url("../assets/img/images/imgs_video_'+num+'.png") no-repeat center 0 0 transparent');
		num++;
	});

	audioElement = document.createElement('audio');
	audioElement.setAttribute('src', base_url + 'assets/audio/mpyc2/m3/p1.mp3');

	document.body.appendChild(audioElement);
	//audioElement.load()

	$.get();

	/**
	 Este bloque es para la parte funcional de la mision 3.
	 **/
// Esto es para hacer el drag de las imagenes con el nombre de la clase imagen.
	$('.imagen').draggable({
		containment: "#libroDrop",
		revert: function(container){
			if(container!=false){
                var $img = $('#drop-image');
                var src = $(this).prop('src');
                $(this).closest('.col-md-4').hide();
				drop_flag[$(this).data('item') - 1] = 1;
                $img.prop('src', src);

				var drop_check = 0;
				$.each(drop_flag, function(k,v){
					drop_check += v;
				});
				if (drop_check == 7)
					$('#continuar_drop').prop('disabled', false);
			}
			return true;
		}
	});

// Esto es para hacer el drop de las imagenes en la clase drop.
	$('.image-drop-panel').droppable({
	});



	var opcionCont=9;
	var opcion=1;
	// Esto es para las opciones del dialog, no se por que no lee con saltos de linea, toco escribir todo el html de corrido. :(
	// Agregar una <div id='divOpcion1' style='display:block;'><p id='opcion1' data-item='1'></p><input type='button' id='opcion1' class='btn btn-normal opcionC' data-item='1' value='Escoger'></div>
	//$("#buscar").prop('disabled', true);
	$(".buscar").click(function(){
		//$("#bien").attr("id","imagenMal");
		//$("#textoBuscar").css("display","none");
		//$("#reload").attr("id","imagenMal");
		//$("#imagenBien").css("display","none");
		//$("#imagenMal").css("display","none");
		opcionCont=frases.length;
		opcion=1;
		fraseActual=0;
		NoFrases=frases.length;
		$("#cont").html(opcion+"/"+opcionCont);
		$("#dialog2").dialog({
			modal: true,
			dialogClass: 'no-close success-dialog',
			width: 700,
			height: 320,
		});
		$('#opcionTexto').text(frases[0].texto);


	});

	$('#dialog-text2').html("<div id='cont' class='pull-right' style='position:relative; left:10px; top:-20px;'>"+opcion+"/"+opcionCont+"</div><input type='image' class='botonesDialog' id='dialogAtras' src='../assets/img/mpyc2/m3/arrow-prev.png'><input type='image' class='botonesDialog' id='dialogSiguiente'  src='../assets/img/mpyc2/m3/arrow-next.png'><div id='contenedorFrases'><div id='divOpcionTexto' class='divDialog' style='display:block;'><p id='opcionTexto' data-item='1'>texto texto texto</p><input type='button' id='opcionTexto' class='btn btn-normal opcionC' data-item='1' value='Escoger'></div></div><div id=''><input type='button' id='cerrarDialog' class='btn btn-normal' value='Cerrar'></div>");

	$("#cerrarDialog").click(function(){
		$("#dialog2").dialog("close");
	});

	$("#botonVerSlider3").hide();
	$("#botonVerSlider2").click(function(){
		$("#slider2").show();
		$("#botonVerSlider3").show();
		$("#botonVerSlider2").hide();
	});
	$("#botonVerSlider3").click(function(){
		//setTimeout(esconderSlider2,3000);
		//$("#slider2").addClass("cambioHoja");
		$("#slider2").hide();
		//$("#botonVerSlider2").addClass("cambioHoja");
		$("#botonVerSlider2").show();
		$("#botonVerSlider3").hide();
	});

	// Boton atras del dialog de opciones
	$("#dialogAtras").click(function(){
		if(fraseActual>0){
			fraseActual--;
			$('#opcionTexto').text(frases[fraseActual].texto);
			opcion=fraseActual+1;
			$("#cont").html(opcion+"/"+opcionCont);
		}

	});

	//Boton siguiente del dialog de opciones
	$("#dialogSiguiente").click(function(){
		/*if(opcion < 9){
		 $("#divOpcion"+(opcion+1)).toggle();
		 $("#divOpcion"+opcion).toggle();
		 opcion ++;
		 $("#cont").html(opcion+"/"+opcionCont);
		 }*/

		if(fraseActual<(NoFrases-1)){
			fraseActual++;
			$('#opcionTexto').text(frases[fraseActual].texto);
			opcion=fraseActual+1;
			$("#cont").html(opcion+"/"+opcionCont);
		}

	});

	$(".imagenMal").hover(function(){
		$(this).hide();
		idImagenMal = $(this).attr("id");
		id= idImagenMal.split("imagenMal");
		idBuscar = "#buscar" + id[1];
		$(idBuscar).show();
	});

	$(".opcionC").click(function(){

		var dataArray = frases[fraseActual].data;
		console.log(dataArray);
		var contenedor = $('#slider2').find(".b-p1").children().children();
		var datapagina = contenedor.data("item");
		console.log(datapagina);
		var idBuscar= '#buscar'+datapagina;
		$(idBuscar).hide();
		if(dataArray == datapagina){
			var idDescripcion="#descripcion"+datapagina;
			$(idDescripcion).show();
			ContDespriciones++;
			frases.splice(fraseActual, 1);
			mostrarContinuar1();


			console.log(idDescripcion);
		}else{
			var idImagenMal="#imagenMal"+datapagina;
			$(idImagenMal).show();
			console.log(idImagenMal);
		}

		$("#dialog2").dialog("close");
	});

// Esto es para poder hacer drag en la barriga de bliss.
	$('.imagenBarriga').draggable({
		containment: $('#contImg')
	});

// Esto es para hacer el efecto lupa en la barriga de Bliss.
	var zoom = 1;
	var zoomCounter = 0;
	var zoom = 1.0;

	// Esto es del zoom-out, o alejar la imagen.
	$('.zoom-out').click(function(event){
		console.log(zoomCounter);
		if(zoomCounter>-100){
			zoom-= 0.1;
			$('.imagenBarriga').css('transform','scale('+zoom+')');
			zoomCounter--;
		}
	});

	// Esto es el zoom-in, o acercar la imagen.
	$('.zoom-in').click(function(event){
		console.log(zoomCounter);
		if(zoomCounter<100){
			zoom+= 0.1;
			$('.imagenBarriga').css('transform','scale('+zoom+')');
			zoomCounter++;
		}
	});

// Esto es para el efecto libro
	$("#slider").booklet();
	$("#slider").booklet({ arrows: true });
	/*$("#slider2").booklet();
	$("#slider2").booklet({ arrows: true });*/

// Boton continuar2
	$("#continuar1").click(function(){
		$('#libroDrop').slideUp();
		$('#parteBarriga').slideDown();
		$(".principal").removeClass("container");
		cambiarAudio();
		$(".principal").removeClass("container");
		$(".principal").addClass("login-form");
		//$(".principal").css("height","622px");
		$(".principal").css("height",($(window).height()-35));

	});

// Boton continuar3
	$("#continuar3").click(function(){
		$('#parteBarriga').slideUp();
		$('#memoriaMision').slideDown();
		$(".principal").addClass("container");
		$(".principal").removeClass("login-form");
	});

	/**
	 Termina bloque de la parte funcional de la mision 3.
	 **/

});

// Esto es para que cuando termine de hacer el drop ponga una clase No-Drop.
function dropEv( event, ui ) {
	var draggable = ui.draggable;
	if(!$(event.target).hasClass('No-Drop')){
		$(event.target).addClass('No-Drop');
		$(event.target).append(ui.draggable.addClass('centroDrop'));
	}
	$("#reload").attr("id","imagenMal");
	checkNoDrops();
	$("#buscar").prop('disabled', false);
	$("#buscar").addClass("parpadeo");
	$("#imagenMal").addClass("parpadeo2");
	$("#drop").removeClass("cambioHoja");
	$("#textoDrop").removeClass("cambioHoja");
}

//Cambiar al audio 2
function cambiarAudio(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m3/p2.mp3');
	audioElement.play();
	$("audio").css("z-index","1");
	$('.subs').show();
	$('.subs-panel').html('Gracias por tu ayuda. Con esa información ya puedo actualizar mis bases de datos, y esto me ayudará a entender mejor el paso del enamoramiento al amor maduro de  ustedes los humanos.');
	audioElement.onpause = function(){
		$('.subs').hide();
		audioElement.controls = false;
	}
}

// Esto es para mirar si existe el .No-Drop, entonces al hacer el drag no va a dejar hacer un drop.
function checkNoDrops(){
	for(i=1; i<=9; i++){
		if(!$("#imagen"+i).children().length == 1){
			$("#imagen"+i).removeClass('No-Drop');
		}
	}
}

function esconderSlider2(){
	$("#slider2").hide();
}

function checkNoImgs(){
	$("#buscar").prop('disabled', true);
	var childrenImg = $("#imagenes").children().length;
//Esto es para mostrar el boton al terminar de hacer los drops.
	if(childrenImg == 0){
		// Mostrar Slider automatico
		$('#libroDrop').hide();
		$('#libroSlider').show();
		$("#slider").addClass("cambioHoja");
		//Lo de abajo es para mostrar el boton de continuar1 despues de hacer los drops, pero no creo que se vaya a usar.
		//$("#continuar1").css("display","block");
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
		url: base_url+"terminar_memoria",
		type: "post",
		data: data,
		beforeSend: function() {
			show_loading($('#memoriaMision'), true);
		},
		success:  function (response) {
			show_loading($('#memoriaMision'), false);
			window.location.href = base_url+'m8';
		},
		error: function(event){
			show_loading($('#memoriaMision'), false);
			console.log(event);
		}
	});
}

function mostrarContinuar1(){
	if(ContFotos==9 && ContDespriciones == 9){
		$('#continuar1').show();
	}
}


