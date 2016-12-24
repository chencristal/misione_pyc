var audioElement;
var video = 0;

function show_loading(obj, visible) {
    if (visible) {
        obj.waitMe({
            effect : 'bounce',
            text : 'Loading...',
            bg : 'rgba(255,255,255,0)',
            color : '#fff',
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
	

	var leftOptions = ['SOÑAR', 'SENTIR', 'DISFRUTAR'];
	var rightOptions = ['PENSAR', 'COMPRENDER', 'QUERER'];
	var rSelected = 0;
	var lSelected = 0;
	var leftSuccess = false;
	var rightSuccess = false;

	$('#form-memoria_m3').validate({
		errorPlacement: function(error,element) {

		    return true;
		}
	});

	$('#form-mision3').validate({
		errorPlacement: function(error,element) {

		    return true;
		}
	});

	$('#siguienteCuestionario').click(function () {
        $.ajax({
            async: 'false',
            url: base_url+"m3/save_mission_route",
            type: "post",
            data: "correct_route="+correct_route,
            beforeSend: function() {
                show_loading($('#emergenteCuestionario'), true);
            },
            success: function (response) {
                show_loading($('#emergenteCuestionario'), false);

                $('#div_street').hide();
                $(this).hide();
                $('#animacion-container').slideDown();
                $('#jump_home').hide();
            },
            error: function (event) {
                show_loading($('#emergenteCuestionario'), false);
                console.log(event);
            }
        });

    });
	$('#jump-video').click(function(){
		if(video == 0){
			$('#animacion-container').slideUp();
			$('#videointeractivo_hype_container').remove();
            $('#div_street').show();
            start_timer();
			audioElement.controls = true;
			audioElement.play();
			$('.subs').show();
			$('.subs-panel').html('Hay dos aspectos fundamentales que influyen en el actuar y hay una pista en los términos. Después de leerlas, baja la palanca de cada cuadro inferior y haz clic en el botón correspondiente cuando creas que has encontrado la indicada.');
			video++;
		}else{
			$('#animacion-container').slideUp();
			$('#div_step_3').slideDown();
            audioElement.pause();
		}
		
	});
	$('#btn_step3').click(function () {
        var data = {
            'first' : $('#memoria_1').val(),
            'second' : $('#memoria_2').val()
        };

        $.ajax({
            async: 'false',
            url: base_url+"m3/save_mission",
            type: "post",
            data: data,
            beforeSend: function() {
                show_loading($('#div_step_3'), true);
            },
            success: function (response) {
                show_loading($('#div_step_3'), false);
                $('#div_step_3').slideUp();
                $('#div_step_5').slideDown();
            },
            error: function (event) {
                show_loading($('#div_step_3'), false);
                console.log(event);
            }
        });
    });
	$('.palanca.left').click(function(){
		if(!leftSuccess){
			toggleClass($(this),'palanca-clicked',200);
			$('.left-box').text(leftOptions[lSelected]);
			lSelected++;
			if(lSelected>2){
				lSelected=0;
			}
		}
		
	});

	$('.palanca.right').click(function(){
		if(!rightSuccess){
			toggleClass($(this),'palanca-clicked', 200);
			$('.right-box').text(rightOptions[rSelected]);
			rSelected++;
			if(rSelected>2){
				rSelected=0;
			}
		}
		
	});


	$('.ok.left').click(function(){
		if(!leftSuccess){
			if(lSelected-1==1){
			showPanel('¡Correcto!, SENTIR es uno de los aspectos que influye en el ACTUAR.', true);
			$('.left-box').addClass('success');
				leftSuccess = true;
				verificarCompleto(leftSuccess, rightSuccess);
			}else{
				showPanel('Inténtalo de nuevo. Ese concepto no cumple con el significado brindado.', false);
			}
		}
		
	});

	$('.ok.right').click(function(){
		if(!rightSuccess){
			if(rSelected-1==0){
				showPanel('¡Correcto!, PENSAR es uno de los aspectos que influye en el ACTUAR.', true);
				$('.right-box').addClass('success');
				rightSuccess = true;
				verificarCompleto(leftSuccess, rightSuccess);
			}else{
				showPanel('Inténtalo de nuevo. Ese concepto no cumple con el significado brindado.', false);
				
			}
		}
		
	});

	$('#guardar-respuesta').click(function(){
		var respuestas = new Array();
		var preguntas = new Array();

		if($('#form-mision3').valid()){
			$('.pregunta_l').each(function(){
			preguntas.push($(this).text());
			});

			$('.respuesta').each(function(){
				respuestas.push($(this).val());
			});

			terminarMision(JSON.stringify(respuestas), JSON.stringify(preguntas), 3);
			$('.pregunta').slideUp();
			$('.memoria').slideDown();
			audioElement.pause();
			$('audio').hide();
			$('.subs').hide();
			
		}else{
			$('#dialog-text').text("Responda todo el cuestionario");
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

	$('#guardar_memo').click(function(){
        var memoria = $('#memoria').val();
        var memoria_id = $('#memoria').attr('r');
        if(memoria != ''){
            enviarMemoria(memoria, 3, memoria_id);
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

	$('#salir-juego').click(function(){
		//$('#player').show();
		player.stopVideo();
		audioElement.setAttribute('src', base_url + 'assets/audio/m3/4.mp3');
		audioElement.controls = true;
		$.get();
		audioElement.play();
		$('.subs').show();
		$('.subs-panel').html('<p>Responde cada una de las preguntas que se presentan a continuación, puedes guardarlas y salir si lo deseas. Solo cuando completes todos los interrogantes se almacenará en tu proyecto de vida y verás cómo sube tu nivel de realización futura.</p>');

		$('.mini-juego').slideUp();
		$('.pregunta').slideDown();
		//$('#animacion-container').slideDown();
		//$('.video-2').show();
		
	});

	/*audioElement = document.createElement('audio');
    audioElement.setAttribute('src', base_url + 'assets/audio/m3/2.mp3');

    document.body.appendChild(audioElement);
    $.get();*/
    

});

function verificarCompleto(leftSuccess, rightSuccess){
	if(leftSuccess  && rightSuccess){
		var texto = 'AUTOGOBIERNO';
		$('.ayuda-img').addClass('complete');
		setTimeout(function(){
			$('header label').text(texto).show().addClass('success-e').css('font-size', '20pt');
			
			$('#salir-juego').show();
			audioElement.setAttribute('src', base_url + 'assets/audio/m3/3.mp3');
			$('.subs-panel').html('¡La tengo clara! En el caso de la persona que ayudó a quien cayó, a pesar de lo que sentía por sus problemas, pensó para actuar y eso indica que tiene un alto grado de autogobierno, a diferencia del conductor irritado.');
			$.get();
			audioElement.play();
		}, 2000);
		

	}
}

function showPanel(texto,ok){
	var mensajeElement = $('header label');
	
	if(ok){
		mensajeElement.removeClass('error-e');
		mensajeElement.addClass('success-e');
	}else{
		mensajeElement.removeClass('success-e');
		mensajeElement.addClass('error-e');
	}

	mensajeElement.text(texto);
	mensajeElement.show();

	
}

function terminarMision(respuesta, pregunta, mision_id, respuesta_id){
	var data = {
		'respuesta': respuesta,
		'mision_id': mision_id,
		'pregunta' : pregunta
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
			url: base_url+"terminar_memoria",
        type: "post",
        data: data,
        beforeSend: function() {
            show_loading($('#div_step_5'), true);
        },
        success:  function (response) {
            show_loading($('#div_step_5'), false);
            window.location.href = base_url+'m3';
        },
        error: function(event){
            show_loading($('#div_step_5'), false);
            console.log(event);
        }
    });
}
