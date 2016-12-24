var video = 0;
var audioElement;
$(document).ready(function() {
	$("#form-actividad input").keydown(function (e) {
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
    $('.concepto').click(function(){
		$(this).next().toggle();
	});

	$('.input').focusout(function(){
			var utilidad = parseInt($('input[name=utilidad]').val());
	   		var placer = parseInt($('input[name=placer]').val());
	   		var afinidad = parseInt($('input[name=afinidad]').val());

	   	$('#total').val(utilidad+placer+afinidad);
	})


    $('#crear-chart').click(function(){
	   if($('#form-actividad').valid()){ //checks if it's valid
	   		//var total = parseInt($('input[name=total').val());
	   		//var considerados = parseInt($('input[name=considerados]').val());
	   		var utilidad = parseInt($('input[name=utilidad]').val());
	   		var placer = parseInt($('input[name=placer]').val());
	   		var afinidad = parseInt($('input[name=afinidad]').val());
	   		$('#form-actividad').slideUp();
	   		$('#form-chart').slideDown();
  			createBarchart( utilidad, placer, afinidad);
	   }
	   else{
	       mostrarMensaje('Debes llenar todos los campos.');
	   }
    });

    $('#form-actividad').validate({
    	errorPlacement: function(error,element) {

		    return true;
		  }
    });//sets up the validation

    $('#continuar-1').hide();
	$("div.img").droppable({
	    drop: function(event, ui) {
	     	var box = $(ui.draggable);
	    	var container = $(this);
	       	if(box.attr('id') == container.attr('id')){
	       		$('#continuar-1').show();
	       		container.find('.tt').text('¡CORRECTO!');
	       	}
	    }
  	});
		
	$('.opcion').draggable({
	  revert: function(container){
	    	if($(container).attr('id')==$(this).attr('id')){
	    		return false;
	    	}else{
	    		return true;
	    	}
	    }
	});
	$('#jump-video').click(function(){

		switch(video){
			case 0:
			LimelightPlayer.doPause();
			$('#animacion-container').slideUp();
			$('.mini-juego#juego-seleccion').slideDown();
			audioElement.play();
			audioElement.controls = true;
			$('.subs').show();
			$('.subs-panel').html('<p>En la base de datos que dejaron en mi programación, encuentro que la amistad tiene tres causas principales: por utilidad, por placer y por afinidad.</p><p>Si quieres saber más de cada una de estas causas (para revisar cuál aplica en tu vida), puedes dar click.</p>');
			

			break;

			case 1:
			LimelightPlayer.doPause();
			$('#animacion-container').slideUp();
			$('.actividad').slideDown();
			
			break;

			case 2:
			LimelightPlayer.doPause();
			$('#animacion-container').slideUp();
			$('.memoria').slideDown();
			break;
		}

		
	});
	$('#continuar').click(function(){
			$('.mini-juego#juego-seleccion').slideUp();
			$('.mini-juego#juego-arrastrar').slideDown();
			$('.subs').hide();
			audioElement.pause();
			$('audio').hide();
	});

	$('#continuar-1').click(function(){
		$('.mini-juego').slideUp();
		$('#animacion-container').slideDown();
		video++;
		
	});

	$('#continuar-2').click(function(){
		$('#form-chart').slideUp();
		$('#animacion-container').slideDown();
		video++;
	})
	

	$('#guardar_memo').click(function(){
		var memoria = $('#memoria').val();
		var memoria_id = $('#memoria').attr('r');
		var respuesta = $
		if(memoria != ''){
			enviarMemoria(memoria, 6, memoria_id);
		}else{
			$('#dialog-text').text('No has respondido aún.');
			$( "#dialog" ).dialog({
		      modal: true,
		      dialogClass: 'no-close success-dialog',
		      buttons: {
		        Ok: function() {
		          $(this).dialog("close");
		        }
		      }
		    });
		}
	});

	audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../assets/audio/m6/1.mp3');
    document.body.appendChild(audioElement);
    $.get();

	
});



/************************** FUNCTIONS ****************************************/

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





function initElementsDragAndClicks(){
	$('.draggable').draggable({
	  containment: "parent"
	});

	$('.persona-item')
	.on('mouseenter', function(event){
		$(event.target).parent().find('.nombre-persona').show();
	})
	.on('mouseleave', function(event){
		$(event.target).parent().find('.nombre-persona').hide();
	});
}


function createBarchart( utilidad, placer, afinidad){

	var barChartData = {
		labels : ["Por utilidad","Por placer","Por afinidad"],
		datasets : [
			{
				fillColor : "#ffae00",
				strokeColor : "#ffffff",
				highlightFill: "#B77A00",
				highlightStroke: "#ffffff",
				data : [utilidad, placer, afinidad]
			}
		]
	}
	
	var ctx = document.getElementById("canvas").getContext("2d");
	var myBar = new Chart(ctx).Bar(barChartData, {
					responsive : true,
					scaleGridLineColor : "rgba(255,255,255,0.8)",
					
				    //Boolean - If there is a stroke on each bar
				    barShowStroke : true,

				    //Number - Pixel width of the bar stroke
				    barStrokeWidth : 2,

				    //Number - Spacing between each of the X value sets
				    barValueSpacing : 5,

				    //Number - Spacing between data sets within X values
				    barDatasetSpacing : 1,
				    scaleFontColor: "#FFF",
				    // Number - Scale label font size in pixels
				    scaleFontSize: 13,

				    // String - Scale label font weight style
				    scaleFontStyle: "bold",
				     scaleOverride : true,
			        scaleStepWidth : utilidad+placer+afinidad,
			        scaleStartValue : 0 ,
				    scaleSteps: 1

				});
	
}

