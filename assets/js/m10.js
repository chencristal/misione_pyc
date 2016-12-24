
$(document).ready(function(){
	
	$('#jump-video').click(function(){

		$('#animacion-container').slideUp();
		$('.reloj').slideDown();
		LimelightPlayer.doPause();
		setupTimer();
		
	});

	$('#guardar-respuesta').click(function(){
		var respuesta = $('#respuesta').val();
		var pregunta = $('#respuesta').parent().text();
		var respuesta_id = $('#respuesta').attr('r');

		if(respuesta != ''){
			terminarMision(respuesta, pregunta, 1, respuesta_id);
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
		if($('#form-memoria_m2').valid()){
			enviarMemoria(memoria, 10, memoria_id);
		}else {
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

	$('#continuar').click(function(){
		$('.papel').slideUp();
		$('.memoria').slideDown();
	});


	audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../assets/audio/m10/1.mp3');
    $.get();

	audioElement.addEventListener('ended', function(){
		if(flag){
			audioElement.setAttribute('src', '../assets/audio/m10/2.mp3');
			$.get();
			audioElement.play();
			flag=false;
			var at = setTimeout(function(){
				flag=false;
				setupTimer();
				$('#nombre').removeAttr('disabled');
				$('#cualidades').removeAttr('disabled');
			}, 14000)
		}
	});
});
var currentTime;
var flag = true;
function setupTimer(){
	if(flag){
		currentTime =120;
	}else{
		currentTime=60;
	}
	var timer = $('.timer');
	var it = setInterval(function(){
		currentTime--;
		if(currentTime>0){
			var minutes = Math.floor(currentTime / 60);
			var seconds = currentTime%60;
			if(minutes<10){
				minutes = '0'+minutes;
			}
			if(seconds<10){
				seconds = '0'+seconds;
			}
			timer.text(minutes+':'+seconds);
		}else{
			clearInterval(it);
			if(!flag){
				$('.reloj').slideUp();
				$('.papel').slideDown();
				var nombre = $('#nombre').val();
				var texto = $('#cualidades').val();

				$('.titulo').text(nombre);
				$('.texto').text(texto);
			}else{
				$('#nombre').attr('disabled','disabled');
				$('#cualidades').attr('disabled','disabled');

				audioElement.play();
				
			}
			
		
		}
		
		
	},1000)
}
/*
 * Starts any clocks using the user's local time
 * From: cssanimation.rocks/clocks
 */
function initLocalClocks() {
  // Get the local time using JS
   var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  // Create an object with each hand and it's angle in degrees
  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }
  }

  setUpMinuteHands();

}

/*
 * Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
 */
function setUpMinuteHands() {
  // Find out how far into the minute we are
  var containers = document.querySelectorAll('.minutes-container');
  var secondAngle = containers[0].getAttribute("data-second-angle");
  if (secondAngle > 0) {
    // Set a timeout until the end of the current minute, to move the hand
    var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
    console.log(delay);
    setTimeout(function() {
      moveMinuteHands(containers);
    }, delay);
  }
}

/*
 * Do the first minute's rotation
 */
function moveMinuteHands(containers) {
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.webkitTransform = 'rotateZ(6deg)';
    containers[i].style.transform = 'rotateZ(6deg)';
  }
  // Then continue with a 60 second interval
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 12;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 60000);
}

/*
 * Move the second containers
 */
function moveSecondHands() {
  var containers = document.querySelectorAll('.seconds-container');
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 6;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 1000);
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


