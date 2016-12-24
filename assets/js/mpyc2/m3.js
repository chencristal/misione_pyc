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
var frase8 = {	data:8, 
				texto:"Dar  vida a proyectos de los dos. Pensar en un futuro juntos. Generar, producir, dejar huella, incluyendo la procreación."}
var frase9 = {	data:9,
				texto:'"Unión de uniones."'}
var frases= new Array(frase7, frase5, frase3, frase4, frase9, frase2, frase1, frase6, frase8);
var NoFrases=frases.length;
var fraseActual=0;
var ContFotos=0;
var ContDespriciones =0;
$(document).ready(function(){

	
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
			enviarMemoria(memoria, 14, memoria_id);
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
    audioElement.setAttribute('src', '../assets/audio/mpyc2/m3/p1.mp3');

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
	    	/*if($(container).hasClass('imagen') && !$(container).hasClass('No-Drop')){
	    		return false;
	    	}else{
	    		return true;
	    	}*/
	    	if(container!=false){
	    		//console.log(container.parent());
	    		
	    		var contenedor = $('#slider2').find(".b-p1").children().children();
	    		var data1 = contenedor.data("item");
	    		var data2= $(this).data("item");
				if(data1==data2){
					contenedor.children().last().show();
					contenedor.children().first().hide();
					$(this).hide();
					ContFotos++;
					console.log(ContFotos);
					mostrarContinuar1();


					//console.log("exito");
				}

	    	}
	    	return true;
	    }
});

// Esto es para hacer el drop de las imagenes en la clase drop.
$('.paginaDrop').droppable({
	/*drop: function(event, ui){
		console.log($(this).parent());
	}*/
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

		$('#dialog-text2').html("<div id='cont' class='pull-right' style='position:relative; left:10px; top:-20px;'>"+opcion+"/"+opcionCont+"</div><input type='image' class='botonesDialog' id='dialogAtras' src=base_url+'assets/img/mpyc2/m3/arrow-prev.png'><input type='image' class='botonesDialog' id='dialogSiguiente'  src='../assets/img/mpyc2/m3/arrow-next.png'><div id='contenedorFrases'><div id='divOpcionTexto' class='divDialog' style='display:block;'><p id='opcionTexto' data-item='1'>texto texto texto</p><input type='button' id='opcionTexto' class='btn btn-normal opcionC' data-item='1' value='Escoger'></div></div><div id=''><input type='button' id='cerrarDialog' class='btn btn-normal' value='Cerrar'></div>");
		
		/*$("#contenedorFrases").click(function(e){
			var id = e.target.id;
			if(id == "opcion1"){
				$("#contenedorFrases #divOpcion1").remove();
				if($("#contenedorFrases").find("#divOpcion1")){
					$("#contenedorFrases #divOpcion2").css("display","block");
				}
				$("#cont").html(opcion+"/"+opcionCont);
			}
			if(id == "opcion2"){
				$("#contenedorFrases #divOpcion2").remove();
				if($("#contenedorFrases").find("#divOpcion2")){
					$("#contenedorFrases #divOpcion3").css("display","block");
				}
				$("#cont").html(opcion+"/"+opcionCont);
			}
			if(id == "opcion3"){
				$("#contenedorFrases #divOpcion3").remove();
				if($("#contenedorFrases").find("#divOpcion3")){
					$("#contenedorFrases #divOpcion4").css("display","block");
				}
				$("#cont").html(opcion+"/"+opcionCont);
			}
			if(id == "opcion4"){
				$("#contenedorFrases #divOpcion4").remove();
				if($("#contenedorFrases").find("#divOpcion4")){
					$("#contenedorFrases #divOpcion5").css("display","block");
				}
				$("#cont").html(opcion+"/"+opcionCont);
			}
			if(id == "opcion5"){
				$("#contenedorFrases #divOpcion5").remove();
				if($("#contenedorFrases").find("#divOpcion5")){
					$("#contenedorFrases #divOpcion6").css("display","block");
				}
				$("#cont").html(opcion+"/"+opcionCont);
			}
			if(id == "opcion6"){
				$("#contenedorFrases #divOpcion6").remove();
				if($("#contenedorFrases").find("#divOpcion6")){
					$("#contenedorFrases #divOpcion7").css("display","block");
				}
				$("#cont").html(opcion+"/"+opcionCont);
			}
			if(id == "opcion7"){
				$("#contenedorFrases #divOpcion7").remove();
				if($("#contenedorFrases").find("#divOpcion7")){
					$("#contenedorFrases #divOpcion8").css("display","block");
				}
				$("#cont").html(opcion+"/"+opcionCont);
			}
			if(id == "opcion8"){
				$("#contenedorFrases #divOpcion8").remove();
				if($("#contenedorFrases").find("#divOpcion8")){
					$("#contenedorFrases #divOpcion9").css("display","block");
				}
				$("#cont").html(opcion+"/"+opcionCont);
			}
			if(id == "opcion9"){
				$("#contenedorFrases #divOpcion9").remove();
				if($("#contenedorFrases").find("#divOpcion9")){
				}
				$("#cont").html(opcion+"/"+opcionCont);
			}
		});*/

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



		// Esto es para la verificacion de la imagen con la opcion del dialog, la variable data es del data-item de la opcion del dialog.
		// data-item va hasta a 3 pues solo hay 3 opciones.
		// dataImagen va hasta 9 sin contar el 0 pues hay 9 imagenes.
		// Se hace la comparacion con los if y else if para mostrar el resultado correcto.
		/*$(".opcionC").click(function(){
		$("#textoBuscar").css("display","block");
		$("#buscar").removeClass("parpadeo");
		var data = frases[fraseActual].data;
		var dataImagen = $(".No-Drop").children().eq(0).attr("data-item");
		var dataRespuesta = $("#respuesta"+data).attr("data-item");
		if(dataImagen == 1 && data == 1 ){
			//opcionCont --;
			$(".No-Drop").children().eq(0).remove();
			$("#drop").addClass("cambioHoja");
			$("#textoDrop").addClass("cambioHoja");
			if($("#drop").hasClass("No-Drop")){
				$("#drop").removeClass("No-Drop");
			}
			$("#dialog2").dialog("close");
			checkNoImgs();
			$("#imagenMal").show();
			$("#imagenMal").removeClass("parpadeo2");
			$("#imagenMal").attr("id","bien");
			$("#botonVerSlider2").show();
			$("#slider2 #img1").show();
			$("#slider2 #textoImg1").show();
			frases.splice(fraseActual, 1);
		}else if(dataImagen == 2 && data == 2 ){
			//opcionCont --;
			$(".No-Drop").children().eq(0).remove();
			$("#drop").addClass("cambioHoja");
			$("#textoDrop").addClass("cambioHoja");
			if($("#drop").hasClass("No-Drop")){
				$("#drop").removeClass("No-Drop");
			}
			$("#dialog2").dialog("close");
			checkNoImgs();
			$("#imagenMal").show();
			$("#imagenMal").removeClass("parpadeo2");
			$("#imagenMal").attr("id","bien");
			$("#botonVerSlider2").show();
			$("#slider2 #img2").show();
			$("#slider2 #textoImg2").show();
			frases.splice(fraseActual, 1);
		}else if(dataImagen == 3 && data == 3 ){
			//opcionCont --;
			$(".No-Drop").children().eq(0).remove();
			$("#drop").addClass("cambioHoja");
			$("#textoDrop").addClass("cambioHoja");
			if($("#drop").hasClass("No-Drop")){
				$("#drop").removeClass("No-Drop");
			}
			$("#dialog2").dialog("close");
			checkNoImgs();
			$("#imagenMal").show();
			$("#imagenMal").removeClass("parpadeo2");
			$("#imagenMal").attr("id","bien");
			$("#botonVerSlider2").show();
			$("#slider2 #img3").show();
			$("#slider2 #textoImg3").show();
			frases.splice(fraseActual, 1);
		}else if(dataImagen == 4 && data == 4 ){
			//opcionCont --;
			$(".No-Drop").children().eq(0).remove();
			$("#drop").addClass("cambioHoja");
			$("#textoDrop").addClass("cambioHoja");
			if($("#drop").hasClass("No-Drop")){
				$("#drop").removeClass("No-Drop");
			}
			$("#dialog2").dialog("close");
			checkNoImgs();
			$("#imagenMal").show();
			$("#imagenMal").removeClass("parpadeo2");
			$("#imagenMal").attr("id","bien");
			$("#botonVerSlider2").show();
			$("#slider2 #img4").show();
			$("#slider2 #textoImg4").show();
			frases.splice(fraseActual, 1);
		}else if(dataImagen == 5 && data == 5 ){
			//opcionCont --;
			$(".No-Drop").children().eq(0).remove();
			$("#drop").addClass("cambioHoja");
			$("#textoDrop").addClass("cambioHoja");
			if($("#drop").hasClass("No-Drop")){
				$("#drop").removeClass("No-Drop");
			}
			$("#dialog2").dialog("close");
			checkNoImgs();
			$("#imagenMal").show();
			$("#imagenMal").removeClass("parpadeo2");
			$("#imagenMal").attr("id","bien");
			$("#botonVerSlider2").show();
			$("#slider2 #img5").show();
			$("#slider2 #textoImg5").show();
			frases.splice(fraseActual, 1);
		}else if(dataImagen == 6 && data == 6 ){
			//opcionCont --;
			$(".No-Drop").children().eq(0).remove();
			$("#drop").addClass("cambioHoja");
			$("#textoDrop").addClass("cambioHoja");
			if($("#drop").hasClass("No-Drop")){
				$("#drop").removeClass("No-Drop");
			}
			$("#dialog2").dialog("close");
			checkNoImgs();
			$("#imagenMal").show();
			$("#imagenMal").removeClass("parpadeo2");
			$("#imagenMal").attr("id","bien");
			$("#botonVerSlider2").show();
			$("#slider2 #img6").show();
			$("#slider2 #textoImg6").show();
			frases.splice(fraseActual, 1);
		}else if(dataImagen == 7 && data == 7 ){
			//opcionCont --;
			$(".No-Drop").children().eq(0).remove();
			$("#drop").addClass("cambioHoja");
			$("#textoDrop").addClass("cambioHoja");
			if($("#drop").hasClass("No-Drop")){
				$("#drop").removeClass("No-Drop");
			}
			$("#dialog2").dialog("close");
			checkNoImgs();
			$("#imagenMal").show();
			$("#imagenMal").removeClass("parpadeo2");
			$("#imagenMal").attr("id","bien");
			$("#botonVerSlider2").show();
			$("#slider2 #img7").show();
			$("#slider2 #textoImg7").show();
			frases.splice(fraseActual, 1);
		}else if(dataImagen == 8 && data == 8 ){
			//opcionCont --;
			$(".No-Drop").children().eq(0).remove();
			$("#drop").addClass("cambioHoja");
			$("#textoDrop").addClass("cambioHoja");
			if($("#drop").hasClass("No-Drop")){
				$("#drop").removeClass("No-Drop");
			}
			$("#dialog2").dialog("close");
			checkNoImgs();
			$("#imagenMal").show();
			$("#imagenMal").removeClass("parpadeo2");
			$("#imagenMal").attr("id","bien");
			$("#botonVerSlider2").show();
			$("#slider2 #img8").show();
			$("#slider2 #textoImg8").show();
			frases.splice(fraseActual, 1);
		}else if(dataImagen == 9 && data == 9 ){
			//opcionCont --;
			$(".No-Drop").children().eq(0).remove();
			$("#drop").addClass("cambioHoja");
			$("#textoDrop").addClass("cambioHoja");
			if($("#drop").hasClass("No-Drop")){
				$("#drop").removeClass("No-Drop");
			}
			$("#dialog2").dialog("close");
			checkNoImgs();
			$("#imagenMal").show();
			$("#imagenMal").removeClass("parpadeo2");
			$("#imagenMal").attr("id","bien");
			$("#botonVerSlider2").show();
			$("#slider2 #img9").show();
			$("#slider2 #textoImg9").show();
			frases.splice(fraseActual, 1);
		}else{
			$("#textoBuscar").css("display","none");
			$("#reload").attr("id","imagenMal");	
			$("#imagenMal").toggle();
			$("#imagenMal").addClass("parpadeo2");
			$("#buscar").toggle();
				if(dataRespuesta == 1){
					$("#respuesta1").css("display","block");
				}else if(dataRespuesta == 2){
					$("#respuesta2").css("display","block");
				}else if(dataRespuesta == 3){
					$("#respuesta3").css("display","block");
				}else if(dataRespuesta == 4){
					$("#respuesta4").css("display","block");
				}else if(dataRespuesta == 5){
					$("#respuesta5").css("display","block");
				}else if(dataRespuesta == 6){
					$("#respuesta6").css("display","block");
				}else if(dataRespuesta == 7){
					$("#respuesta7").css("display","block");
				}else if(dataRespuesta == 8){
					$("#respuesta8").css("display","block");
				}else if(dataRespuesta == 9){
					$("#respuesta9").css("display","block");
				}
			$("#imagenMal").hover(function(){
				$("#buscar").css("display","block");
				if(dataRespuesta == 1){
					$("#respuesta1").css("display","none");
				}else if(dataRespuesta == 2){
					$("#respuesta2").css("display","none");
				}else if(dataRespuesta == 3){
					$("#respuesta3").css("display","none");
				}else if(dataRespuesta == 4){
					$("#respuesta4").css("display","none");
				}else if(dataRespuesta == 5){
					$("#respuesta5").css("display","none");
				}else if(dataRespuesta == 6){
					$("#respuesta6").css("display","none");
				}else if(dataRespuesta == 7){
					$("#respuesta7").css("display","none");
				}else if(dataRespuesta == 8){
					$("#respuesta8").css("display","none");
				}else if(dataRespuesta == 9){
					$("#respuesta9").css("display","none");
				}
			});
			$("#dialog2").dialog("close");
			if($("#imagenMal").css("display","block")){
				$("#buscar").addClass("parpadeo");
			}
		}
		});*/

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
$("#slider2").booklet();
$("#slider2").booklet({ arrows: true });

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

function mostrarContinuar1(){
	if(ContFotos==9 && ContDespriciones == 9){
		$('#continuar1').show();
	}
}


