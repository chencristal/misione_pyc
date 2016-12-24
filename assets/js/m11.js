var edit = false;
var add = false;
var added = false;
var currentFlor;
var video = 0;
var listElement = $('#content');
var numItems = listElement.children().size();
var numPages = 4;
var perPage = 1;
var curr = 0;
$(document).ready(function(){
	
	$('#jump-video').click(function(){

		if(video == 0){
			LimelightPlayer.doPause();
			$('#animacion-container').slideUp();
			$('.flor').slideDown();
			audioElement.play();
			audioElement.controls = true;
			$('.subs').show();
		$('.subs-panel').html('<p> Con el clic abres las definiciones de cada aspecto y accedes al formato de registro. Puedes ir guardando permanentemente y retomar cada vez que quieras. Cuando oprimas en “archivar”, se registrará en la bitácora personal y ya no se podrá editar.</p>'); 
			$(this).val('Iniciar');
		}else{
			LimelightPlayer.doPause();
			$('#animacion-container').slideUp();
			$('.mejorar-flor').slideDown();
			var aspectos = $('.mejorar-flor label.dato');
			aspectos.eq(0).text($('#data-fortalezas').val());
			aspectos.eq(1).text($('#data-limitaciones').val());
			aspectos.eq(2).text($('#data-oportunidades').val());
			aspectos.eq(3).text($('#data-riesgos').val());


			
		}
		
		
	});

	$('#continuar').click(function(){
		if(video==2){
			audioElement.pause();
			$('.flor').slideUp();
			$('.memoria').slideDown();
			completo = true;
		}else{
			$('.item-flor').each(function(){
				completo = true;
				if($(this).attr('id')==''){
					completo=false;
				}
			});
			if(completo){
				$('.flor').slideUp();
				$('#animacion-container').slideDown();
				//player.loadVideoById('Yt2_6yJ9rUs');
				audioElement.pause();
				video++;
			}else{
				$('#dialog-text').text("Debes completar la actividad para avanzar.");
				$( "#dialog" ).dialog({
			    resizable: true,
				dialogClass: 'no-close success-dialog',
			      modal: true,
			      buttons: {
			        Ok: function() {
			          $( this ).dialog( "close" );
			        }
			      }
			    });
			}
		}
	});

	$('.pt_').mouseenter(function(){
		var element = $(this);
		switch(true){
			case element.hasClass('op_'):
			$('.op').css('background-color', '#ffae00');
			$('.ri').css('background-color', '#ffae00');
			$('.lim_ span').css('color','#1c3d42');
			//$('.m-l').addClass('d');
			$('#warped span').css('color', '#1c3d42')
			break;

			case element.hasClass('ri_'):
			$('.op').css('background-color', '#ffae00');
			$('.ri').css('background-color', '#ffae00');
			//$('.ri_ span').css('color','#1c3d42');
			//$('.m-r').addClass('d');
			//$('#warped span').css('color', '#1c3d42')
			break;

			case element.hasClass('lim_'):
			$('.lim').css('background-color', '#ffae00');
			$('.fort').css('background-color', '#ffae00');
			$('.lim_ span').css('color','#1c3d42');
			//$('.m-l').addClass('d');
			//$('#warped2 span').css('color', '#1c3d42')
			break;

			case element.hasClass('fort_'):
			$('.lim').css('background-color', '#ffae00');
			$('.fort').css('background-color', '#ffae00');
			$('.ri_ span').css('color','#1c3d42');
			//$('.m-r').addClass('d');
			$('#warped2 span').css('color', '#1c3d42')
			break;

			case element.hasClass('m-l'):
			$('.m-l').addClass('d');
			$('.m-l span').css('color','#1c3d42');
			break;

			case element.hasClass('m-r'):
			$('.m-r').addClass('d');
			$('.m-r span').css('color','#1c3d42');
			break;
		}
	});
	$('.pt_').mouseleave(function(){
		var element = $(this);
		switch(true){
			case element.hasClass('op_'):
			$('.op').css('background-color', 'transparent');
			$('.ri').css('background-color', 'transparent');
			$('.lim_ span').css('color','white');
			$('.m-l').removeClass('d');
			$('#warped span').css('color', 'white')
			break;

			case element.hasClass('ri_'):
			$('.op').css('background-color', 'transparent');
			$('.ri').css('background-color', 'transparent');
			$('.ri_ span').css('color','white');
			$('.m-r').removeClass('d');
			$('#warped span').css('color', 'white')
			break;

			case element.hasClass('lim_'):
			$('.lim').css('background-color', 'transparent');
			$('.fort').css('background-color', 'transparent');
			$('.m-l').removeClass('d');
			$('.m-l span').css('color','white');
			$('#warped2 span').css('color', 'white')
			break;

			case element.hasClass('fort_'):
			$('.lim').css('background-color', 'transparent');
			$('.fort').css('background-color', 'transparent');
			$('.ri_ span').css('color','white');
			$('.m-r').removeClass('d');
			$('#warped2 span').css('color', 'white')
			break;

			case element.hasClass('m-l'):
			$('.m-l').removeClass('d');
			$('.m-l span').css('color','white');
			break;

			case element.hasClass('m-r'):
			$('.m-r').removeClass('d');
			$('.m-r span').css('color','white');
			break;
		}
	});

$('.pt_').click(function(){
		var element = $(this);
		switch(true){
			case element.hasClass('op_'):
			$('.f-op').toggle();
			$('.f-ri').hide();
			$('.f-lim').hide();
			$('.f-fort').hide();
			
			 
			break;

			case element.hasClass('ri_'):
			$('.f-op').toggle();
			$('.f-ri').hide();
			$('.f-lim').hide();
			$('.f-fort').hide();
			
			break;

			case element.hasClass('fort_'):
			$('.f-op').hide();
			$('.f-ri').hide();
			$('.f-lim').toggle();
			$('.f-fort').hide();
			
			break;

			case element.hasClass('lim_'):
			$('.f-op').hide();
			$('.f-ri').hide();
			$('.f-lim').toggle();
			$('.f-fort').hide();
			
			break;

			case element.hasClass('m-r'):
			$('.f-op').hide();
			$('.f-ri').toggle();
			$('.f-lim').hide();
			$('.f-fort').hide();
			
			break;

			case element.hasClass('m-l'):
			$('.f-op').hide();
			$('.f-ri').hide();
			$('.f-lim').hide();
			$('.f-fort').toggle();
			break;
		}
	});

	$('#guardar_memo').click(function(){
		var memoria = $('#memoria').val();
		var memoria_id = $('#memoria').attr('r');
		if($('#form-memoria_m2').valid()){
			enviarMemoria(memoria, 11, memoria_id);
		}else{
			$('#dialog-text').text("Debes responder todas preguntas");
			$( "#dialog" ).dialog({
		    resizable: true,
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

	$('#guardar').click(function(){
		currentTime=0;
	});



	$('.add').click(function(){
		currentFlor = $(this).closest('.item-flor');
		openModal($(this),currentFlor);
	
		switch(true){
			case currentFlor.hasClass('f-op'):
			//audioElement.setAttribute('src', '../assets/audio/m11/4.mp3');
			$('')
    		$.get();
    		//audioElement.play();
			break;

			case currentFlor.hasClass('f-lim'):
			//audioElement.setAttribute('src', '../assets/audio/m11/5.mp3');
    		$.get();
    		//audioElement.play();
			break;

			case currentFlor.hasClass('f-fort'):
			//audioElement.setAttribute('src', '../assets/audio/m11/3.mp3');
    		$.get();
    		
    		//audioElement.play();
			break;

			case currentFlor.hasClass('f-ri'):
			//audioElement.setAttribute('src', '../assets/audio/m11/2.mp3');
    		$.get();
    		//audioElement.play();
			break;
		}	
    	
	});

	$('label.option').click(function() {

		$(this).find('input[type="radio"]').prop('checked', 'true');
	});

	$('#form-flor').validate({
		errorPlacement: function(error, element) {
			return true;
		}
	});

	$('#archivar').click(function(){
		if($('#form-flor').valid()){
			sendFlor();
		}else{
			$('#dialog-text').text("Todos los campos son obligatorios");
			$( "#dialog" ).dialog({
		    resizable: true,
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

	$('#modal-flor').on('hide.bs.modal', function(){
		var modal = $(this);
		modal.find('textarea').val('');
		modal.find('.radio').prop('checked', false);
		audioElement.pause();

	});



	listElement = $('#content');
	numItems = listElement.children().size();

	listElement.children().css('display', 'none');
	listElement.children().slice(0, perPage).css('display', 'block');

	$('.nextTo').click(function() {
		if (curr < 3) {
			nextTo();
		} else {
			if ($('#m-flor').valid() ) {
				$('.item-flor a').hide();
				var mejoraFort = $('#mejora-fortalezas').val();
				var mejoraLim = $('#mejora-limitaciones').val();
				var mejoraRi = $('#mejora-riesgos').val();
				var mejoraOp = $('#mejora-oportunidades').val();
				 $('#text-fortalezas').text(mejoraFort);
				 $('#text-limitaciones').text(mejoraLim);
				 $('#text-riesgos').text(mejoraRi);
				 $('#text-oportunidades').text(mejoraOp);
				var data = {
					fort: mejoraFort,
					lim: mejoraLim,
					ri: mejoraRi,
					op: mejoraOp
				};
				console.log(data);
				ajaxSubmit(data, 'set_mejora', successMejora, errorMejora);
				
			} else {
				$('#dialog-text').text("No has respondido a todas las preguntas.");
				$( "#dialog" ).dialog({
			    resizable: true,
				dialogClass: 'no-close success-dialog',
			      modal: true,
			      buttons: {
			        Ok: function() {
			          $( this ).dialog( "close" );
			        }
			      }
			    });
			}
		}
	});

	$('.backTo').click(function() {
		backTo();
	});

	$('#m-flor').validate();
	

	audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../assets/audio/m11/1.mp3');
   	document.body.appendChild(audioElement);
    $.get();
});

function successMejora(data){
	
	$('.mejorar-flor').slideUp();
	$('.flor').slideDown();
	audioElement.setAttribute('src', '../assets/audio/m11/6.mp3');
	$.get();
	audioElement.play();
	$('.subs-panel').html('<p>El trabajo que estás realizando modifica tu futuro y aumenta tu nivel de realización. Verás los frutos!</p> <p>Ten presente que puedes acudir al kit de emergencia. ¡Aprovéchalo!</p>');
	video++;
}

function errorMejora(data){
	console.log(data);
}

function backTo() {
	var goToPage = curr - 1;
	if (goToPage >= 0) {
		goTo(goToPage);
	}
}

function nextTo() {
	goToPage = curr + 1;
	if (goToPage < 4) {
		goTo(goToPage);
	}
}


function goTo(page) {
	var startAt = page * perPage,
		endOn = startAt + perPage;

	listElement.children().css('display', 'none').slice(startAt, endOn).css('display', 'block');
	curr = page;
	if (page == 3) {
		$('.nextTo').text('Terminar');

	} else {
		$('.nextTo').text('Siguiente');
	}
}


function sendFlor(){
	var modal = $('#modal-flor');
	var flor = modal.attr('mF');
	var efecto = $('#form-flor input[name=efecto]:checked').val();
	var texto = $('#form-flor textarea').val();

	var data = {
		'flor': flor,
		'efecto': efecto,
		'texto':texto
	};
	var url='insert_flor';
	if(edit){
		data['id'] = currentFlor.attr('id');
		url='update_flor';
	}
	$.ajax({
		data: data,
		type: 'post',
		url:url,
		success: function(data){
			console.log(data);
			var oData = JSON.parse(data);
			currentFlor.find('.efecto-selected').val(oData.efecto);
			currentFlor.find('.textarea').val(oData.texto);
			currentFlor.attr('id',oData.resultado_id);
			console.log(currentFlor);
			$('#modal-flor').modal('toggle');
			add=false;
			edit=false;
		}
	});


}
function validateRadio() {
	var valid = true;
	for (var i = 1; i <= 15; i++) {
		if ($('input[name=efecto]:checked').length <= 0) {
			valid = false;
		}
	}
	return valid;
}
var textFlor = [
	'¿Cómo podrías sacar mayor provecho de tus fortalezas?',
	'¿Qué puedes hacer para reducir o eliminar tus limitaciones? Esta tarea requiere de mucho esfuerzo, pero piensa en los resultados que puedes lograr si te exiges ahora.',
	'¿De qué modo puedes sacar mayor beneficio a las oportunidades que identificaste para no dejarlas pasar? ',
	'¿Qué puedes hacer para evitar o minimizar los riesgos que reconociste? De forma anticipada, ¿qué podrías realizar, en caso de que no puedas evitarlos, para que causen el menor daño posible?'
];	
function openModal(itemAdd, flor){
	var id = flor.attr('data-flor-id');
	var title = itemAdd.text();
	var modal = $('#modal-flor');
	modal.attr('mF', id);
	modal.modal('toggle');
	modal.find('h4 b').text(title.toUpperCase());
	//modal.find('#form-flor label.texto').text(textFlor[id-1]);

	if(flor.attr('id')==''){
		add = true;
	}else{
		modal.find('textarea').val(flor.find('.textarea').val());
	
		//modal.find('input[name=efecto][value='+flor.find('.efecto-selected').val()+']').prop('checked', true);
		edit=true;
	}

	var textId = itemAdd.attr('id');

	switch(textId){
		case 'fortalezas':
		modal.find('div.preguntas').html('Preguntas guía: ¿Qué te hace especial? ¿Cuáles son tus habilidades? ¿Cuáles son tus cualidades? ¿En qué eres bueno sin mayor esfuerzo? ¿Qué es lo que más alaban o admiran los demás de ti? ¿Cuáles son tus creencias?');
		break;

		case 'riesgos':
		modal.find('div.preguntas').html('Preguntas guía: ¿De qué recursos familiares, económicos o materiales careces? ¿Qué cambios sociales, económicos o legales se están presentando que puedan obstaculizar tus planes?');
		break;

		case 'oportunidades':
		modal.find('div.preguntas').html('Preguntas guía: ¿Cuáles son tus redes de apoyo? ¿Cuentas con recursos familiares? ¿Tienes recursos económicos o materiales? ¿Posees buenos contactos personales? ¿Conoces algunas oportunidades de becas, descuentos, empleos, intercambios, entre otros, a los que puedas aplicar? ¿Qué cambios sociales, económicos o legales se están presentando y pueden facilitar tus planes?');
		break;

		case 'limitaciones':
		modal.find('div.preguntas').html('Preguntas guía: ¿Cuáles son tus defectos? ¿Cuáles son tus vicios? ¿En qué no eres bueno? ¿En qué recibes mayores críticas? ¿Qué es lo que más te decepciona de ti?');
		break;
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


