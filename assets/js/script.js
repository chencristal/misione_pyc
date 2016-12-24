var currentForm = 0;
var forms;
var emoSelected;
var mobile = false;

$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function(){
	$("input[type=number]").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

	forms = $("#form_registro").children();
	$(".next").click(function(){
		nextForm();
	});
	$(".back").click(function(){
		backForm();
	});
	$(".submit").click(function(){
		submitForm();
	});

	$('li.emoticon img').click(function(event){
		seleccionar($(event.target));
	});

	$('#aceptar-emo').click(function(){
		if(emoSelected!== undefined){
			addEmo();
			$('#emocionesHome').slideUp();
			//$('#holo').addClass('holo');
			//$('#homeImg').show();
			//$('#misiones').show();
			//$('#biblioteca').show();
			//$('#tituloBiblioteca').show();
			$('#menuHomeContanider').slideDown();
			//audioElement.play();
			//audioElement.controls = true;
			//$('.subs').show();
			//$('.subs-panel').html('Antes de emprender las misiones déjame presentarte la nueva pantalla de inicio. A la izquierda está la biblioteca, donde se encuentran algunos libros que enriquecerán tu viaje. A la derecha puedes ver la cápsula del tiempo,  donde está el menú de opciones que ya conocías, con las misiones, el proyecto de vida y el diario personal.');
			// Estos if's son para mostrar la alerta dependiendo de los estados que el controlador home2 trae.
			if($("#estado1").attr("data-token") == 1){
		    	mostrar_alerta_a();
		    }
		    if($("#estado2").attr("data-token") == 1){
		    	mostrar_alerta_b();
		    }
		    if($("#ingreso").attr("data-ingreso") == 1){
		    	ingresoCurvae();
		    }
		}
		else{
			$('#dialog-text').text("Selecciona tu estado de ánimo");
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

	$('.home #jump-video').click(function(){
		try{
			//LimelightPlayer.doPause();
			//audioElement.play();
			//audioElement.controls = true;
			//$('.subs').show();
			//$('.subs-panel').html('Antes de emprender las misiones déjame presentarte la nueva pantalla de inicio. A la izquierda está la biblioteca, donde se encuentran algunos libros que enriquecerán tu viaje. A la derecha puedes ver la cápsula del tiempo,  donde está el menú de opciones que ya conocías, con las misiones, el proyecto de vida y el diario personal.');
		}catch(e){
			$('#player').children().eq(0).remove();}
			$('#animacion-container').remove();
			$('#holo').show();
			$('#misiones').hide();
	});

	$("#misiones").click(function(){
		audioElement.pause();
		audioElement.controls = false;
		$('#habitacion').slideUp();
		$('#menuHome').slideDown();
	});

	audioElement = document.createElement('audio');
    audioElement.setAttribute('src', base_url + 'assets/audio/mpyc2/home.mp3');

    document.body.appendChild(audioElement);
    //audioElement.load()

    //$.get();

	var footerToggled = true;

	$('footer a.slap').click(function(){

		$('a.slap').toggleClass('down', 2000);

		if(!footerToggled){
			$( "footer" ).animate({
			    bottom: "-110px"
			  }, 1000 );
			/*if(mobile){
				$('.main .layer').hide();
			}*/
			footerToggled=true;
		}else{
			$( "footer" ).animate({
			    bottom: "0px"
			  }, 1000 );

			/*if(mobile){
				$('.main .layer').show();
			}*/
			footerToggled=false;
		}


	});
	$('footer').mouseleave(function(){
		if(!footerToggled){
			$('a.slap').toggleClass('down', 2000);
			$( "footer" ).animate({
			    bottom: "-110px"
			  }, 1000 );
			/*if(mobile){
				$('.main .layer').hide();
			}*/
			footerToggled=true;
		}
	});
	mobile = isMobile();
	

	$('.checkbox label').click(function(event){
		event.stopPropagation();
		var checkbox = $(event.target).parent().find('input');

		if(!checkbox.prop('checked')){

			checkbox.prop('checked','true');
		}else{
			checkbox.prop('checked','');
		}
		
	});

	$('#login-form').validate({
    	errorPlacement: function(error,element) {
		    return true;
		}
    });

    $('#login').click(function(e){
    	if($('#login-form').valid()){
    		if($('input[type="checkbox"]').prop('checked')){
    			$('#login-form').submit();
    		}
    		else{
	    		$('#dialog-text').text("Acepta los términos y condiciones");l
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
			    e.preventDefault();
	    	}
    		
    	}
    	else {
    		$('#dialog-text').text("Ingresa tus datos.");
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

    $('#aceptar-emo-logout').click(function(e){
    	if(emoSelected == undefined){
    		$('#dialog-text').text("Selecciona tu estado de ánimo");
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
    		e.preventDefault();

    	}else{
    		$(this).submit();
    	}
    });

    $('.reset-item').click(function(){
    	if(confirm('Seguro deseas resetear esta misión?')){

    		var data ={
    			mision_id: $(this).attr('data-mision-id')
    		};

    		ajaxSubmit(data, 'misiones/borrar_progreso_mision', successBorrado, errorJson);
    	}
    });

    $('.reset').click(function(){
    	$('.menu-reset').toggle();
    });

    $('.subs').click(function(){
    	$('.subs-panel').toggle();
    });

    /*$('#biblioteca').click(function(){

    	window.location.href =  location.origin+'/bookTrailer';;
    });    */

    $('.resetContainer').click(function(){
    	console.log("Borrar");
    	$.ajax({
		 	url: "login/truncateAllTables",
    		type: "post",
        	success: function(response){
        		console.log(response);
        	}

    	});
    });



});
function successBorrado(data){
  window.location.href = location.origin+'/misiones';
}

function errorJson(){

}

function isMobile(){
	if(jQuery.browser.mobile){
	   $('.main .layer').hide();
	   return true;
	}else{
	   $('.main .layer').hide();
	   return false;
	}
}


function seleccionar(element){
	if($('#emo-selected') !==undefined){
		$('#emo-selected').val(element.parent().attr('id'));
	}
	if(emoSelected !== undefined){
		if(emoSelected.attr('id')!== element.parent().attr('id')) {
			emoSelected.find('img').toggleClass('selected');
		}
	}
		
	emoSelected = element.parent();
	emoSelected.find('img').toggleClass('selected');


}

function nextForm(){
	forms.eq(currentForm).slideUp();
	currentForm++;
	forms.eq(currentForm).slideDown("hidden");



}
function backForm(){
	forms.eq(currentForm).slideUp();
	currentForm--;
	forms.eq(currentForm).slideDown();
}

function submitForm(){

	$("#form_registro").validate({
  		submitHandler: function(form) {
	    	$(form).ajaxSubmit();
	  	},
	  	errorPlacement: function(error,element) {

		    return true;
		  }
	});

	if(!$("#form_registro").valid()){
		alert("Has dejado campos sin llenar.");
	}
}

function addEmo(){
	var data = {
		'emoticon_id': emoSelected.attr('id')
	};
	 $.ajax({
        url: "home/estado_emocional",
        type: "post",
        data: data
    });
}

function toggleClass(element, targetClass, timeOut){
	element.addClass(targetClass);
	setTimeout(function(){
        element.removeClass(targetClass);
  	},timeOut);
}

/* Se elimina porque no funciona:  function() {
          $( this ).dialog( "close" ); 
          
function mostrarMensaje(mensaje){
	$('#dialog-text').text(mensaje);
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
}*/

function mostrarMensaje(mensaje,funcion){
	$('#dialog-text').text(mensaje);
	$( "#dialog" ).dialog({
    resizable: true,
	dialogClass: 'no-close success-dialog',
      modal: true,
      buttons: {
        Ok: function() {
			$(this).dialog('close');
        }
      }
    });
}


function ajaxUpload(data, url, successCallback, errorCallback){
	$.ajax({
		url:url,
		type: 'post',
		data: data,
		cache:false,
		processData: false, 
		contentType: false,
		success: successCallback,
		error: errorCallback
	});
}

function ajaxSubmit(data, url, successCallback, errorCallback){
	$.ajax({
		url:url,
		type:'post',
		data:data,
		cache:false,
		success: successCallback,
		error: errorCallback
	});
}
// Esta funcion es para la alerta A en el home cuando existan 10 registros en emocion_id.
function mostrar_alerta_a(){
	$('#dialog-text3').html($("#nombreUsuario").attr("data-nombre")+", recuderda que tu estado emocional afecta positiva o negativamente el normal desempeño en las actividades cotidianas y genera cambios en la salud, las relaciones interpersonales y el rendimiento académico. Las situaciones díficiles pueden ser superadas más fácilmente cuando las enfrentamos con la compañía o la guía de otra persona.");
		$("#dialog3").dialog({
		modal: true,
		dialogClass: 'no-close success-dialog',
		width: 600,
		height: 410,
		buttons: {
		    "Siguiente": function() {
				$(this).dialog("close");
				document.location.href = document.location.origin+"/ayuda#1";
			}
		}
	});
}
// Esta funcion es para la alerta A en el home cuando existan 10 registros en emocion_id.
function mostrar_alerta_b(){
	$('#dialog-text3').html($("#nombreUsuario").attr("data-nombre")+", recuderda que tu estado de la salud influye en tu estado ánimo, y puede afectar las relaciones interpersonales y el rendimiento académico. Aprende a escuchar las señales de tu cuerpo y acude oportunamente al profesional de la salud que te puede ayudar.");
		$("#dialog3").dialog({
		modal: true,
		width: 600,
		height: 410,
		dialogClass: 'no-close success-dialog',
		buttons: {
		    "Siguiente": function() {
				$(this).dialog("close");
				document.location.href = document.location.origin+"/ayuda#2";
			}
		}
	});
}
function ingresoCurvae(){
	document.location.href = document.location.origin+"/diario#1";
}


