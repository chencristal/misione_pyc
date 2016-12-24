var inicio = true; 
var row = 1;// Contador para las filas de la tareas
var h;//Alto de las filas de tareas
var infoScroll1 = {//Informacion del scroll con las tareas
		posInicial: 0,
		filaActual: 1,
		id: "contenedorTareas",
		row: 0
	}
var infoScrollHazloYA = {//Informacion del scroll de la seccion Hazlo Ya
		posInicial: 0,
		filaActual: 1,
		id: "contenedorHazloYa",
		row: 0
	}
var infoScrollPlanificalo = {//Informacion del scroll de la seccion Planificalo
		posInicial: 0,
		filaActual: 1,
		id: "contenedorPlanificalo",
		row: 0
	}
var infoScrollDelegalo = {//Informacion del scroll de la seccion Delegalo
		posInicial: 0,
		filaActual: 1,
		id: "contenedorDelegalo",
		row: 0

	}
var infoScrollNoLoHagas = {//Informacion del scroll de la seccion No Lo Hagas
		posInicial: 0,
		filaActual: 1,
		id: "contenedorNoLoHagas",
		row: 0

	}
var filasVistas=4;// Numero de filas que se ven al inicio de la actividad
var ListaTareas= new Array();//Array con las tareas
var infoScroll2= new Array(infoScrollHazloYA, infoScrollPlanificalo, infoScrollDelegalo, infoScrollNoLoHagas); //informacion de los scroll organizada
var clickImportante=false;
var clickUrgente=false;
$(document).ready(function(){

	// $('#jump-video2').click(function(){

	// 	console.log("jump");
		
	// 	if(inicio){
	// 		//LimelightPlayer.doPause();
	// 		$('#animacion-container').slideUp();
	// 		$('#animacion-container2').slideDown();
	// 		//audioElement.play();
	// 		//audioElement.controls = true;
	// 		//$('.subs').show();
	// 		//$('.subs-panel').html('Vamos a viajar en tu propia historia. Regresemos a un momento en el que hayas actuado haciendo uso de tu libertad con la posibilidad de: ELEGIR lo correcto por encima de lo conveniente, de actuar con AUTODETERMINACIÓN a pesar de un contexto difícil o de reconocer y ACEPTAR aquellas realidades que no puedes cambiar.');
	// 	}else{
	// 		$('#animacion-container').slideUp();
	// 		$('.videoteca').slideDown();
	// 		player.stopVideo();
	// 		audioElement.pause();
	// 		$('audio').hide();
	// 		$('.subs').hide();
	// 	}
	// });

	$('.info a').click(function(){
		$('.info-text-no-height').toggle();
	});

	$("#jump-video2").click(function(){
		$('#animacion-container2').slideUp();
		$('#test-atencion').slideDown();
	});

	$("#continuar1").click(function(){
		$('#emergenteCuestionario').show();
	});

	$("#siguienteCuestionario").click(function(){
		vista4();
	});

	$("#continuar2").click(function(){
		$('#contenedor-imagen1').slideUp();
		$('#contenedor-imagen2').slideDown();
		cambiarAudio2();
	});
	$("#continuar3").click(function(){
		$('#contenedor-imagen2').slideUp();
		$('#contenedor-tareas').slideDown();
		cambiarAudio3();
		//Creacion de las filas de tareas y el scroll

		getTareas();

		
	});
	//Mostrar la matriz 
	$('#continuar-matriz').click(function(){
		if(validarFormulario() == true){
			for(var a=1; a<row; a++){
				var fila='#R'+a;
				var impName='importanteR'+a;
				var urgName='urgenteR'+a;
				var taskName= $(fila+' #tarea').val();
				var importan= $(fila+' input[name='+impName+']:checked').val();
				var urgent=$(fila+' input[name='+urgName+']:checked').val();
				guardarTareas(taskName, importan, urgent);
			}
			var l=ListaTareas.length;
			for(var a=0; a<l; a++){
				var cuadrant= cuadrante(ListaTareas[a].importante, ListaTareas[a].urgente);
				insertarTarea(cuadrant, ListaTareas[a].nombreTarea);
			}
			creacScroll();
			putFlechas();
			cambiarAudio4();
			$('#contenedor-tareas').slideUp();
			$('#contenedor-matriz').slideDown();
			var JsonTareas= JSON.stringify(ListaTareas);
			setTareas(JsonTareas);
			
			
		}
	});
	$("#continuar4").click(function(){
		$('#contenedor-matriz').slideUp();
		$('#contenedor-memoria').slideDown();
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
			enviarMemoria(memoria, 17, memoria_id);
			
		
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
    audioElement.setAttribute('src', '../assets/audio/mpyc2/m6/p1.mp3');

    document.body.appendChild(audioElement);
    //audioElement.load()

    $.get();

    //Añadir una fila
    $('#newRowBtn').click(function(){
		nuevafila(row);
		row++;
	});

	//Mover el cuador de tareas

	$('#up').click(function(){

		infoScroll1 = scroollUp("contenedorTareas", h, infoScroll1.posInicial, infoScroll1.filaActual, row-filasVistas,0);
		
	});

	$('#down').click(function(){
		infoScroll1 = scroollDonw("contenedorTareas", h, infoScroll1.posInicial, infoScroll1.filaActual, 1,0);
	});

	//Mover los cuadrantes de la matriz

	$('.upTareas').click(function(){
		var id=$(this).parent().attr('id');
		var index = getIndex(id);
		id+=' #scrollTareas2 #contenedorTareas';
		infoScroll2[index] = scroollUp(infoScroll2[index].id, 38, infoScroll2[index].posInicial, infoScroll2[index].filaActual, infoScroll2[index].row-3, infoScroll2[index].row);
		
	});

	$('.downTareas').click(function(){
		var id=$(this).parent().attr('id');
		var index = getIndex(id);
		id+=' #scrollTareas2 #contenedorTareas';
		infoScroll2[index] = scroollDonw(infoScroll2[index].id, 38, infoScroll2[index].posInicial, infoScroll2[index].filaActual, 1, infoScroll2[index].row);
		
	});
		$('#remRowBtn').click(function(){
		row=quitarFila(row);
		console.log(infoScroll1);
		console.log(row);
	});

	$('#HojaUrgente').click(function(){
		$('#emergenteUrgente').fadeIn("slow");
	});

	$('#HojaImportante').click(function(){
		$('#emergenteImportante').fadeIn("slow");
	});

	$('#continuarUrgente').click(function(){
		$('#emergenteUrgente').fadeOut("slow");
		clickUrgente=true;
		habilitarSiguiente();
	});

	$('#continuarImportante').click(function(){
		$('#emergenteImportante').fadeOut("slow");
		clickImportante=true;
		habilitarSiguiente();
	});

	$('#numero1').change(function(){

		var valor= $(this).val();
		$('#imagenCuastionario1').css("visibility", "visible");
		if(valor==7){
			$('#imagenCuastionario1').attr("src", ("../assets/img/mpyc2/m6/correcto.png"));
		}else{
			$('#imagenCuastionario1').attr("src", ("../assets/img/mpyc2/m6/incorrecto.png"));
		}		
	});
	$('#numero2').change(function(){

		var valor= $(this).val();
		$('#imagenCuastionario2').css("visibility", "visible");
		if(valor==8){
			$('#imagenCuastionario2').attr("src", ("../assets/img/mpyc2/m6/correcto.png"));
		}else{
			$('#imagenCuastionario2').attr("src", ("../assets/img/mpyc2/m6/incorrecto.png"));
		}		
	});
	$('#numero3').change(function(){

		var valor= $(this).val();
		$('#imagenCuastionario3').css("visibility", "visible");
		if(valor==7){
			$('#imagenCuastionario3').attr("src", ("../assets/img/mpyc2/m6/correcto.png"));
		}else{
			$('#imagenCuastionario3').attr("src", ("../assets/img/mpyc2/m6/incorrecto.png"));
		}		
	});

	var URLhash = window.location.hash;
	if(URLhash == "#1"){
		//$("#dragElementos").show();
		$("#animacion-container2").hide();
		$("#continuar3").click();
	}
});


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

//funcion para incertar nuevas filas de tarea

function nuevafila(filaNo){
	$( '#contenedorTareas' ).append( '<div id="R'+filaNo+'" class="col-md-12">'+
        	'<div class="col-md-6">'+
        		'<input type="text" class="tareaText" id="tarea">'+
        	'</div>'+
        	'<div class="radioM6 col-md-3 pandingRadioGroup">'+
        		'<div class="col-md-6" align="center">'+
        			'<input type="radio" id="importanteSiR'+filaNo+'" value="1" name="importanteR'+filaNo+'">'+
        			'<label for="importanteSiR'+filaNo+'"></label>'+
    			'</div>'+
        		'<div class="col-md-6" align="center">'+
    				'<input type="radio" id="importanteNoR'+filaNo+'" value="0" name="importanteR'+filaNo+'">'+
        			'<label for="importanteNoR'+filaNo+'"></label>'+
    			'</div>'+
        	'</div>'+
        	'<div class="radioM6 col-md-3 pandingRadioGroup">'+
        		'<div class="col-md-6" align="center">'+
        			'<input type="radio" id="urgenteSiR'+filaNo+'" value="1" name="urgenteR'+filaNo+'">'+
        			'<label for="urgenteSiR'+filaNo+'"></label>'+
        		'</div>'+
        		'<div class="col-md-6" align="center">'+
        			'<input type="radio" id="urgenteNoR'+filaNo+'" value="0" name="urgenteR'+filaNo+'">'+
        			'<label for="urgenteNoR'+filaNo+'"></label>'+
        		'</div>'+
        	'</div>'+ 
'</div><br id="brR'+filaNo+'"/>');
}

//funcion para mover el scroll hacia arriba

function scroollUp(elemento, alto, posIn, f, filaInf, r){

	var pos = posIn;
	var newPos = pos;
	var filaAc=f;

	if(f != filaInf){

		newPos = pos-alto
		var elem = document.getElementById(elemento);
		var id = setInterval(frame, 5);
		function frame() {
		    if (pos == newPos) {
	      		clearInterval(id);
		    } else {
		        pos--; 
		        elem.style.top = pos + 'px';
		        posIn = pos; 
		    }
	  	}
	  	filaAc++;
  	}
  	var temp = {
		posInicial: newPos,
		filaActual: filaAc,
		id: elemento,
		row: r
	}

	return temp;
}

//fncion para mover el scroll hacia abajo

function scroollDonw(elemento, alto, posIn, f, filaSup, r){

	var pos = posIn;
	var newPos = pos;
	var filaAc=f;

	if(f != filaSup){

		newPos = pos+alto
		var elem = document.getElementById(elemento);
		var id = setInterval(frame, 5);
		function frame() {
		    if (pos == newPos) {
	      		clearInterval(id);
		    } else {
		        pos++; 
		        elem.style.top = pos + 'px';
		        posIn = pos; 
		    }
	  	}
	  	filaAc--;
  	}
  	var temp = {
		posInicial: newPos,
		filaActual: filaAc,
		id: elemento,
		row: r
	}

	return temp;


}

  	//funcion par guardar las tareas en un array

function guardarTareas(nombreTarea, importante, urgente){

	var tarea = {
		nombreTarea: nombreTarea,
		importante: importante,
		urgente: urgente
	}

	ListaTareas.push(tarea);

}

//funcion para desterminas el cuadrante de la matriz

function cuadrante(importante, urgente){

	if(importante == 1){
		if(urgente== 1){
			return '#hazloYa';			
		}else{
			return '#planificalo';
		}

	}else{
		if(urgente== 1){
			return '#delegalo';
		}else{
			return '#noLoHagas'
		}
	}
}

//funcion para insertar las tareas en la matriz
function insertarTarea(cuadrante, mensaje){

	var msg='<p>'+mensaje+'</p>';
	var elem= cuadrante+' #scrollTareas2 .contenedorTareas';
	$(elem).append(msg);
	var index=getIndex(cuadrante);
	infoScroll2[index].row++;
}

//funcion para dar tamalo a los scroll de la matriz

function creacScroll(){

	var heightMatriz=$('#matriz').height();
	var heightUp=$('#up').height();
	var heightTitulo=$('.titulo-cuadrante').height();
	var elem = document.getElementById("scrollTareas2");
	$(".contenedorScroll2").each(function(){
		$(this).css("height", 30*4 );
	});

	//elem.style.height = ((heightMatriz/2)-(heightUp*2)-heightTitulo-50) + 'px';
	}

// funcion para obtener el index segin el cuadrantede la matriz

function getIndex(id){
	if(id == "hazloYa" || id == "#hazloYa" ){
		return 0;
	}
	if(id == "planificalo" || id == "#planificalo" ){
		return 1;
	}
	if(id == "delegalo" || id == "#delegalo" ){
		return 2;
	}
	if(id == "noLoHagas" || id == "#noLoHagas" ){
		return 3;
	}

	return 0;

}


// funcion para poner las flechas de los cuandrantes de la matriz
function putFlechas(){

	for(var a=0; a<4; a++){
		var idUp=infoScroll2[a].id+'Up';
		var idDown=infoScroll2[a].id+'Down';
		var elemUp = document.getElementById(idUp);
		var elemDown = document.getElementById(idDown);
		
		if(infoScroll2[a].row<5){
		
			elemUp.style.visibility = 'hidden';
			elemDown.style.visibility = 'hidden';
		}else{
			elemUp.style.visibility = 'visible';
			elemDown.style.visibility = 'visible';
		}
	}
}

//funcion para validar fromulario

function validarFormulario(){

	for(var a=1; a<row; a++){
		var fila='#R'+a;
		var impName='importanteR'+a;
		var urgName='urgenteR'+a;
		var taskName= $(fila+' #tarea').val();
		var important= $(fila+' input[name='+impName+']:checked').val();
		var urgent=$(fila+' input[name='+urgName+']:checked').val();
		if(taskName=="" || taskName==null){

			mostrarMensaje('Rellena todas tus tareas');
			return false;
		}

		if(important== undefined){

			mostrarMensaje('Define la importancia de todas tus tareas');
			return false;
		}

		if(urgent== undefined){

			mostrarMensaje('Define la urgencia de todas tus tareas');
			return false;
		}

	}

	return true;


}

//funcion para girar la imagenes

function girar(){

	var Radio = 190;
	var grados=0;
	var increment=0;
	var posY;
	var posX;
	var id = setInterval(frame,11);
	function frame() {
	    //if (grados > Math.PI) {
     	//	clearInterval(id);
	    //} else {
	    	increment+=0.001;
	        grados=increment*Math.PI;
	    	for(var a=1; a<10; a++){
	    		var id="imgAn"+a;
	    		var elem = document.getElementById(id);
	    		var suma=Math.PI*2*a/9;
	    		posX=Radio*Math.cos(grados + suma);
	        	posY=Radio*Math.sin(grados + suma);
	        	elem.style.top = posY + 'px';
	       		elem.style.left = posX + 'px';

	    	}
	      
	  	//}
  	}
}

//Cambiar al audio 2
function cambiarAudio2(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m6/p2.mp3');
	audioElement.play();
	$('.subs').show();
	$('.subs-panel').html('Para que puedas organizar tus tareas es importante que entiendas la diferencia entre lo urgente y lo importante.');
}

//Cambiar al audio 3
function cambiarAudio3(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m6/p3.mp3');
	audioElement.play();
	$('.subs').show();
	$('.subs-panel').html('Vamos a hacer un ejercicio que te ayudará a ponerte al día en todos los pendientes que tienes urgentes para poder dedicarte a lo importante: Primero haz una lista de lo que tengas atrasado. Después vas a identificar cuál tarea es urgente, cuál importante, cuál cumple con las dos y cuál con ninguna. Si necesitas más guía para hacer  el ejercicio puedes hacer clic en el botón con el interrogante.');
}
//Cambiar al audio 4
function cambiarAudio4(){
	audioElement.setAttribute('src', '../assets/audio/mpyc2/m6/p4.mp3');
	audioElement.play();
	$('.subs').show();
	$('.subs-panel').html('Con esta matriz de Eisenhower ya puedes identificar cuáles tareas requieren más atención que otras. Como ya hiciste un ejercicio de priorizar e identificar lo urgente de lo importante, puedes seguir utilizando esta herramienta para organizarte en la universidad. Desde ahora en el Proyecto de Vida, dentro de la cara Académico/Profesional, encontrarás un botón que te permitirá hacer esta dinámica cuantas veces lo requieras.');
}

function setTareas(JsonTasks){
	var data = {
		'JsonTasks': JsonTasks,
		'respuesta_id' : "1"
	};
	$.ajax({
	 	async: 'false',
        url: "setTareas",
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

function getTareas(){
	
	$.ajax({
	 	async: 'false',
        url: "getTareas",
        type: "post",
        data: 0,
        success:  function (response) {

        	console.log(response);

        	var llenar=false;
        	var obj;
        	var cant;

        	if(response!="Vacio"){

        		console.log("llenar");

        		obj = JSON.parse(response);
        		cant = obj.length;
        		llenar = true; 

        	}

    		for(;row<filasVistas+1;row++){
			nuevafila(row);
			}

			h=$('#R1').height();
			var elem = document.getElementById("scrollTareas");
			elem.style.height = (h*(filasVistas+1)) + 'px';

			if(llenar == true){

				for(var a = 0; a < cant-4; a++){
					nuevafila(row);
					row++;
				}

				for(var a = 0; a< cant; a++){
					var fila='#R'+(a+1); //+1 por que la filas empiezan desde 1;
					var impName='#importante';
					var urgName='#urgente';
					if(obj[a].importante==1){
						impName+='SiR'+(a+1);
					}else{
						impName+='NoR'+(a+1);
					}

					if(obj[a].urgente==1){
						urgName+='SiR'+(a+1);
					}else{
						urgName+='NoR'+(a+1);
					}

					$(fila+' #tarea').val(obj[a].nombre_tarea);
					$(impName).attr('checked', true);
					$(urgName).attr('checked', true);
					

				}

			}

           
            
        },
        error: function(event){
        	console.log(event);
        }
    });
}

function quitarFila(filaNo){

	if(filaNo>5){
		var idRemoved='#R'+(filaNo-1);
		var brRemoved='#brR'+(filaNo-1);
		$( idRemoved ).remove();
		$( brRemoved ).remove();
		filaNo--;

		if((filaNo-infoScroll1.filaActual)==3){
			infoScroll1 = scroollDonw("contenedorTareas", h, infoScroll1.posInicial, infoScroll1.filaActual, 1,0);
		}

	}

	return filaNo;


}

function vista4(){
	$('#test-atencion').slideUp();
		$('#contenedor-imagen1').slideDown();
		girar();
		audioElement.play();
		audioElement.controls = true;
		$('.subs').show();
		$('.subs-panel').html('Recientes estudios científicos en neurociencia indican que el cerebro no es capaz de hacer al tiempo  varias funciones que requieran atención; lo que hace el cerebro es alternar entre una y otra tarea. En lugar de pretender ser <i>multitask</i>, las personas deberían preocuparse por aprender a ser ordenadas y a priorizar, lo que lleva a una verdadera eficacia.');
		$( '#dialog' ).dialog( "close" );
	
}

function habilitarSiguiente(){
	if(clickImportante==true && clickUrgente==true){
		$('#continuar3').prop('disabled', false);
	}
}