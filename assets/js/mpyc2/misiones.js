var inicio = true;
$(document).ready(function(){
	$('#jump-video').click(function(){
			$('#animacion-container').slideUp();
			$('.tablero2').show();
			audioElement.play();
			audioElement.controls = true;
			$('.subs').show();
			$('.subs-panel').html('######');
		
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
	
	$('#continuar-v').click(function(){
			$('.videoteca').slideUp();
			$('.memoria').slideDown();
	});

	$('#guardar_memo').click(function(){

		var memoria = $('#memoria').val();
		var memoria_id = $('#memoria').attr('r');
		if(respuesta != ''){
			enviarMemoria(memoria, 1, memoria_id);
			
		
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
