var inicio = true;
var currentNave;

var listElement = $('#content');
var numItems = listElement.children().size();
var numPages = 15;
var perPage = 1;
var curr = 0;
var naveColor = 1;
var coloresNave = ['yellow', 'blue', 'purple'];
$(document).ready(function() {


	/************** FUNCIONALIDAD DE JUEGO NAVE *********************/
	setupClickNave(1);
	setupClickNave(2);
	setupClickQuitarNave();

	$('#agregar').click(function() {

		$('.naves').append('<div class="nave-container" set="">' + '<input  class="btn-mejorar" type="button" value="mejorar" style="display:none;">' + '<div class="nave ' + coloresNave[naveColor] + '">' + ' <label  type="text"></label>' + '<img class="selected-img-pre" alt="foto" src="#" style="display:none">' + '</div>' + '<input class="btn-delete quitar-nave" type="button" value="X" >' + '</div>');
		setupClickNave(1);
		setupClickQuitarNave();
		validateForm();

		if (naveColor > 1) {
			naveColor = 0;
		} else {
			naveColor++;
		}

	});

	$('#myModal').on('hide.bs.modal', function(e) {
		var modal = $(this);
		limpiarModal(modal);
		validateForm();
		if (jcrop_api) {
			jcrop_api.destroy();
		}
		$('input[type=radio]').prop('checked', false)


	});
	$('#modal-nave').on('hide.bs.modal', function(e) {
		var modal = $(this);
		modal.find('textarea').val('');
	});


	/* CARGAR DATOS DE LA NAVE EN EL MODAL SI TIENE DATOS */

	$("#select_img").change(function() {
		readURL(this);
	});

	$('.btn-guardar-nave').click(function() {

		if ($('#form-preguntas').valid() && validateRadio()) {

			guardarNave($('#form-preguntas'));
			
		} else {
			$('#dialog-text').text("Debes escribir el nombre de tu amigo, seleccionar una foto o ícono y responder todas las preguntas");
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

	$('.btn-guardar-mejora').click(function(event) {
		var texto = $('#mejora').val();
		var resultadoId = $('#id-resultado').val();
		guardarMejora(texto, resultadoId);
		$('#modal-nave').modal('hide');
		currentNave.find('textarea').val(texto);

	});




	/************** FIN FUNCIONALIDAD DE JUEGO NAVE *********************/

	$('#continuar').click(function() {
		location.reload(true);
	});

	$('#continuar-2').click(function() {
		$('#juego-nave-2').slideUp();
		$('.memoria').slideDown();
	});





	$('#jump-video').click(function() {
		$('#animacion-container').slideUp();
		$('#juego-nave-1').slideDown();
		LimelightPlayer.doPause();
		audioElement.play();
		audioElement.controls = true;
		$('.subs').show();
		$('.subs-panel').html('<p>En cada nave ubicarás a uno de tus amigos por afinidad.  Para agregar otros, puedes presionar el botón +. Recuerda que es ilimitado. Cada vez que crees una nave haz clic sobre ella para registrarle un nombre, fotografía y escribir una breve descripción.</p><p>Luego, puedes determinar la calidad de amistad que tienes con cada persona calificando de 1 a 5 las afirmaciones que aparecerán.</p>');
	});


	$('#guardar_memo').click(function() {

		var memoria = $('#memoria').val();
		var memoria_id = $('#memoria').attr('r');
		if ($('#form-memoria_m2').valid()) {
			enviarMemoria(memoria, 7, memoria_id);
			


		} else {
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


	listElement = $('#content');
	numItems = listElement.children().size();

	listElement.children().css('display', 'none');
	listElement.children().slice(0, perPage).css('display', 'block');


	$('.nextTo').click(function() {
		nextTo();
	});

	$('.backTo').click(function() {
		backTo();
	});

	$('#img-modal').click(function() {
		$('#select_img').click();
	});

	$('label.option').click(function() {

		$(this).find('input[type="radio"]').prop('checked', 'true');
	});


	validateForm();

	audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../assets/audio/m7/1.mp3');
    document.body.appendChild(audioElement);
    $.get();
});

function updateCoords(c) {
	$('#x').val(c.x);
	$('#y').val(c.y);
	$('#w').val(c.w);
	$('#h').val(c.h);
};

function checkCoords() {
	if (parseInt($('#w').val())) return true;
	alert('Selecciona el area a recortar.');
	return false;
};

/* Envia los datos de la nave a la base de datos */
function guardarNave(form) {
	var misionId = 7;
	var nombreAmigo = form.find('#modal-nombre').val();
	var puntaje = 0;
	var respuestas = new Array();
	var preguntas = new Array();
	var x = $('#x').val();
	var y = $('#y').val();
	var w = $('#w').val();
	var h = $('#h').val();
	var data = new FormData();
	var file = $('#select_img')[0].files[0];

	$('#form-preguntas input[type="radio"').each(function() {
		var option = $(this);
		if (option.prop('checked')) {
			puntaje += parseInt($(this).val());
			respuestas.push($(this).val());
			preguntas.push($(this).parent().index() + 1);
		}

	});

	puntaje = puntaje * 1000;
	data.append('mision_id', misionId);
	data.append('nombre', nombreAmigo);
	data.append('puntaje', puntaje);
	data.append('respuestas', JSON.stringify(respuestas));
	data.append('preguntas', JSON.stringify(preguntas));
	data.append('file', file);
	data.append('x', x);
	data.append('y', y);
	data.append('w', w);
	data.append('h', h);
	if(mobile){
		data.append('mobile',1);

	}else{
		data.append('mobile',0);
		if(x==''){
			$('#dialog-text').text("Selecciona y recorta el rostro de tu amigo.");
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
			return false;
		}
	}

	var data = $.ajax({
		url: 'agregar_amigo',
		type: 'POST',
		data: data,
		cache: false,
		processData: false, // Don't process the files
		contentType: false, // Set content type to false as jQuery will tell the server its a query string request
		success: function(data) {
			//console.log(data);
			var oData = JSON.parse(data);

			currentNave.find('.selected-img-pre').attr('src', '.' + oData.amigo.foto).show();
			currentNave.find('label').text(oData.amigo.nombre_amigo);
			$('input[type=radio]').prop('checked', false)
			var modal = $('#myModal');
			modal.modal('hide');
			limpiarModal(modal);

		},
		error: function(jqXHR, textStatus, errorThrown) {
			// Handle errors here

			// STOP LOADING SPINNER
		}
	});


	return data.response;
}

function guardarMejora(texto, resultadoId) {

	var data = {
		'resultadoId': resultadoId,
		'texto': texto
	};
	$.ajax({
		url: 'agregar_mejora',
		type: 'post',
		data: data,
		success: function(data) {
			$('#dialog-text').text("Mejora realizada");
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
}


function validateForm() {
	$('#form-preguntas').validate({
		errorPlacement: function(error, element) {

			return true;
		}
	});
}

function validateRadio() {
	var valid = true;
	for (var i = 1; i <= 15; i++) {
		if ($('input[name=pp' + i + ']:checked').length <= 0) {
			valid = false;
		}
	}
	return valid;
}


function backTo() {
	var goToPage = curr - 1;
	if (goToPage >= 0) {
		goTo(goToPage);
	}
}

function nextTo() {
	goToPage = curr + 1;
	if (goToPage < 15) {
		goTo(goToPage);
	}
}

function goTo(page) {
	var startAt = page * perPage,
		endOn = startAt + perPage;

	listElement.children().css('display', 'none').slice(startAt, endOn).css('display', 'block');
	curr = page;
}

function limpiarModal(modal) {
	modal.find('#modal-nombre').val('');
	modal.find('img').attr('src', '../assets/img/load-img.png').attr('style', '');

	modal.find('#select_img').remove();
	modal.find('form').append('<input id="select_img" type="file" accept=".jpg" name="select_img" required style="display:none">');
	$("#select_img").change(function() {
		readURL(this);
	});
	curr= 0;
	$('.pregunta').hide();
	$('#content').children().eq(0).show();
}
var jcrop_api;

function readURL(input, target) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function(e) {
			$('#img-modal').attr('src', e.target.result);
			$('#img-modal').Jcrop({
				boxWidth: 200,
				boxHeight: 200,
				aspectRatio: 1,
				onSelect: updateCoords
			}, function() {
				jcrop_api = this;
			});

		};

		reader.readAsDataURL(input.files[0]);


	}
}

function setupClickQuitarNave() {
	$('.quitar-nave').click(function(event) {
		$(event.target).parent().remove();
	});
}

function setupClickNave(option) {
	if (option == 1) {
		$('#juego-nave-1 .nave').click(function(event) {
			var modal = $('#myModal');



			currentNave = $(event.target).closest('div.nave-container');
			var imgSrc = currentNave.find('img').attr('src');
			if (imgSrc == '#') {
				imgSrc = '../assets/img/load-img.png';
			}
			modal.find('#modal-nombre').val(currentNave.find('label').text());
			modal.find('.nave').attr('class', currentNave.find('.nave').attr('class'));
			modal.find('img').attr('src', imgSrc);

			modal.modal();

		});
	} else {
		$('input.mejorar').click(function(event) {
			var modal = $('#modal-nave');
			currentNave = $(event.target).closest('div.nave-container');
			modal.find('#mejora').val(currentNave.find('textarea').val());
			modal.find('#nombre').text(currentNave.find('label').text());
			modal.find('#id-resultado').val(currentNave.attr('id'));
			modal.modal();

		});
	}

}




function terminarMision(respuesta, pregunta, mision_id, respuesta_id) {
	var data = {
		'respuestas': respuesta,
		'mision_id': mision_id,
		'preguntas': pregunta
	};
	$.ajax({
		url: "terminar_mision",
		type: "post",
		data: data,
		success: function(response) {


		},
		error: function(event) {

		}
	});
}

function enviarMemoria(respuesta, mision_id, memoria_id) {
	var data = {
		'respuesta': respuesta,
		'mision_id': mision_id,
		'memoria_id': memoria_id
	};
	$.ajax({
		url: "terminar_memoria",
		type: "post",
		data: data,
		success: function(response) {
			window.location.href = location.origin+'/misiones';

		},
		error: function(event) {

		}
	});
}
