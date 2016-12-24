if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

jQuery.fn.extend({
	timeline: function(){
		Timeline = new Timeline();
		this.addClass('tlContainer');
		Timeline.createTimelineElements(this);
	}
});
var video = 0;
var audioElement;
var Timeline;
var ePos = 'tp';
var adding = false;
var editing = false;
var currentEvent;
var baseUrl = location.origin;
var locationController = window.location.pathname.split('/')[1];
function Timeline(){
	
	this.$mainContainer;
	this.$tlLeft;
	this.$tlRight;
	this.$tlHead;
	this.$tlFoot;
	this.$tlEvents;
	this.$tlEventData;
	this.$btAddEvent;
	this.$suceso;
	this.$aprendizaje;
	this.$importancia;
	this.$btSaveEvent;
	this.$btRemoveEvent;
	this.$tlTitle;
	this.$btnNav;

	var events = new Array();

	Timeline.prototype.createTimelineElements = function(elementContainer){
		this.$tlHead = $('<div class="tlHead"></div>');
		this.$tlTitle = $('<label class="sub-title">HITOS DE MI VIDA</label>')

		this.$tlEvents = $('<ul class="tlEvents"></ul>');
		this.$tlEventData = $('<div class="tlEventData"></div>');
		this.$suceso = $('<label id="suceso">¿Qué sucedió? <textarea disabled name="suceso" rows="3"></textarea></label>');
		this.$importancia = $('<label id="importancia">¿Por qué es importante ese suceso en tu vida? <textarea disabled name="importancia" rows="3" value=""></textarea></label>');
		this.$aprendizaje = $('<label id="aprendizaje">¿Qué aprendizaje y/o cambio personal generó ese hito? <textarea disabled name="aprendizaje" rows="3" value=""></textarea></label>');
		this.$btSaveEvent = $('<input type="button" id="saveEvent" value="Guardar">');
		this.$btRemoveEvent = $('<input type="button" id="removeEvent" value="Borrar">');
		this.$tlFoot = $('<div class="tlFoot"></div>');
		this.$tlLeft = $('<div class="btLeft"></div>');
		this.$tlRight = $('<div class="btRight"></div>');
		this.$btAddEvent = $('<input class="btAddEvent" type="button" value="Agregar hito" >');
		this.$mainContainer = elementContainer;

		if(locationController == 'misiones'){
			this.$btnNav = $('<input value="Continuar" type="button" data-toggle="modal" data-target="#modal-ser"  class="btn btn-normal" id="continuar">');
		}else{
			this.$mainContainer.addClass('timeline-diario');
		}
		
		elementContainer.addClass('timeline');

		this.addElements();
		this.setListeners();



	};
	Timeline.prototype.setListeners = function(){
		console.log();
		this.$btAddEvent.on('click', { container: this.$tlEvents, dataContainer: this.$tlEventData}, this.addEvent);

		this.$btSaveEvent.on('click',{dataContainer: this.$tlEventData, timeline: this},this.saveEvent);

	}



	Timeline.prototype.addElements = function(){

		this.$mainContainer.append(this.$tlHead);
		this.$tlHead.append(this.$tlTitle);
		this.$tlHead.append(this.$btAddEvent);
		cover = $('<div class="cover"></div>');
		this.$mainContainer.append(cover.append(this.$tlEvents));
		this.$tlEventData.append(this.$suceso);
		this.$tlEventData.append(this.$importancia);
		this.$tlEventData.append(this.$aprendizaje);
		this.$tlEventData.append(this.$btRemoveEvent);
		this.$tlEventData.append(this.$btSaveEvent);
		this.$tlFoot.append(this.$tlLeft);
		this.$tlFoot.append('<div class="line"><div>');
		this.$tlFoot.append(this.$tlRight);
		this.$mainContainer.append(this.$tlFoot);
		this.$mainContainer.append(this.$btnNav);
	}

	//adds new event element for saving
	Timeline.prototype.addEvent = function(event){
		if(!adding){
			
			$('#modalEvent').modal();
			adding = true;
		}

	}

	Timeline.prototype.getEvents = function(){
		return events;
	}

	Timeline.prototype.saveEvent = function(data){
		var timelineEvent = new TimelineEvent();
		timelineEvent.make(data);
		Timeline.$tlEvents.append(timelineEvent.$mainContainer);
		var width = Timeline.$tlEvents.width() + 300;
		Timeline.$tlEvents.width(width);
		Timeline.sortEvents();
	}


	Timeline.prototype.sortEvents = function(){
		$('.tlEvents li').sort(sortDescending).appendTo('.tlEvents');
		$('.tlEvents li').each(function(){
			$(this).attr('class','tlEvent '+ePos);
			if(ePos=='tp'){
				ePos = 'bt';
			}else{
				ePos='tp';
			}
		});
	}


}

function sortDescending(a, b) {
	var date1  = $(a).find(".eventDate").attr('id');
	date1 = date1.split('/');
	date1 = new Date(date1[2], date1[1] -1, date1[0]);
	var date2  = $(b).find(".eventDate").attr('id');
	date2= date2.split('/');
	date2= new Date(date2[2], date2[1] -1, date2[0]);

	return date1 > date2 ? 1 : -1;
};




function TimelineEvent(){
	var eventPosition;
	var eventDate;
	var suceso;
	var importancia;
	var aprendizaje;

	this.$mainContainer;
	this.$dateContainer;
	this.$calendarContainer;
	this.$imgContainer;
	this.$inputFile;
	this.$btnMore;
	this.$previewContainer;


	
	

	TimelineEvent.prototype.make = function(config){

		this.$mainContainer = $('<li id="'+config.resultado_id+'" class="tlEvent '+ePos+'"></li>');
		this.$imgContainer = $('<img class="imgContainer" src=".'+config.url_foto+'"></img>');
		this.$previewContainer = $('<div class="previewContainer"><label class="eventTitle">'+config.titulo.substring(0,18)+'...</label><label class="eventDesc">'+config.suceso.substring(0,18)+'...</label><label class="eventDate" id="'+config.fecha+'">'+formatDate(config.fecha)+'</label></div>');
		this.$mainContainer.append(this.$imgContainer);
		this.$mainContainer.append(this.$previewContainer);

		this.setListeners();
		if(ePos=='tp'){
			ePos = 'bt';
		}else{
			ePos='tp';
		}
	}
	function formatDate(dateText){
		var months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
		var pieces = dateText.split('/');
	    //return months[pieces[0]-1]+' '+pieces[1]+' de '+pieces[2];
	    return months[pieces[1]-1]+' '+(pieces[0])+' de '+pieces[2];
	}

	TimelineEvent.prototype.setListeners = function(){
		
		this.$mainContainer.on('click', {Event: this}, this.openModal);

	}

	TimelineEvent.prototype.openModal = function(event) {
		currentEvent = event.data.Event;
		editing = true;
		console.log('open');
		loadEvent();


	};

	TimelineEvent.prototype.updateEvent = function(data){

		this.$imgContainer.attr('src','.'+data.url_foto);
		this.$previewContainer.find('.eventTitle').text(data.titulo.substring(0,18)+'...');
		this.$previewContainer.find('.eventDesc').text(data.suceso.substring(0,18)+'...');
		this.$previewContainer.find('.eventDate').text(formatDate(data.fecha));
	}

	TimelineEvent.prototype.borrar = function(){
		this.$mainContainer.remove();
		var width = Timeline.$tlEvents.width
		Timeline.$tlEvents.width(width-300);
	}


}


$(document).ready(function(){
	loadHitos();

	$('#delEvent').click(function(e) {
		var modal = $('#modalEvent');
		modal.find('.input').val('');
		modal.find('#select_img').remove();
		modal.find('img').attr('src','../assets/img/m9/up.png').after('<input id="select_img" type="file" accept=".jpg" name="select_img" required style="display:none">');
		$("#select_img").change(function() {
			readURL(this);
		});

		if(adding){
			adding=false;

		}

		if(editing){
			
			borrarEvent();
			editing=false;
		}
		
		modal.modal('toggle');
	});

	$('#modalEvent img').click(function(){
		$("#select_img").click();
	});
	$("#select_img").change(function() {
		readURL(this);
	});

	$('#saveEvent').click(function(){
		var timelineEvent = new TimelineEvent();
		var modal = $('#modalEvent');
		var data = sendEvent(modal);
		
		//Timeline.addEvent(timelineEvent);
	});

	$('#modalEvent').on('hide.bs.modal', function(e) {
		var modal = $('#modalEvent');
		modal.find('.input').val('');
		modal.find('#select_img').remove();
		modal.find('img').attr('src','../assets/img/m9/up.png').after('<input id="select_img" type="file" accept=".jpg" name="select_img" required style="display:none">');
		$("#select_img").change(function() {
			readURL(this);
		});
		adding=false;
		editing=false;
	});

	var scrolled=0;
	$(".btRight").on("click" ,function(){
		console.log(scrolled);
		if(scrolled<Timeline.$tlEvents.width()){
			scrolled=scrolled+300;

			$(".cover").animate({
			        scrollLeft:  scrolled
			   });
		}
	    

	});


	$(".btLeft").on("click" ,function(){
		console.log(scrolled);
		if(scrolled>0){
			scrolled=scrolled-300;
			$(".cover").animate({
			        scrollLeft:  scrolled
			   });
		}
		
	});

	$('#jump-video').click(function() {
		LimelightPlayer.doPause();
		$('#animacion-container').slideUp();
		$('#timeline').slideDown();
		video = 1;
		audioElement.play();
		audioElement.controls = true;

		$('.subs').show();
		$('.subs-panel').html('<p> Esta línea de tiempo representa tu vida. Piensa en  los momentos más importantes que han marcado tu historia. Selecciona entre tres y  siete sucesos, ponle un nombre a cada uno y una foto o un ícono. Si requieres agregar otro momento, haz clic en el botón +. En cada hito vas a contestar tres preguntas: </p> <p>1. ¿Qué sucedió?</p> <p>2. ¿Por qué es importante ese suceso en tu vida?</p> <p>3. ¿Qué aprendizaje y/o cambio personal generó ese hito?</p> ');

	});

	$('#guardar_memo').click(function() {

		var memoria = $('#memoria').val();
		var memoria_id = $('#memoria').attr('r');
		if ($('#form-memoria_m2').valid()) {
			enviarMemoria(memoria, 9, memoria_id);

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

	$('#continuar-2').click(function() {
		$('#modal-ser').modal('toggle');
		$('#timeline').slideUp();
		$('.memoria').slideDown();
		audioElement.pause();
		$('audio').hide();
		$('.subs').show();
		
	});
	$('#modal-ser').on('shown.bs.modal', function(){
		audioElement.setAttribute('src', '../assets/audio/m9/2.mp3');
    	$.get();
    	audioElement.play();
    	$('.subs-panel').html('<p>¡Has hecho un buen trabajo!</p></p>Dale una mirada general a este grupo de hitos y trata de relacionar esas experiencias pasadas con tu forma de ser en el presente.</p>');
    });
	$('#atras').click(function(){
		$('.memoria').slideUp();
		$('#timeline').slideDown();
	});

	audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../assets/audio/m9/1.mp3');
    document.body.appendChild(audioElement);
    $.get();

});

function sendEvent(hito){
	var data = new FormData();
	

	if(adding){
		if($('#form-event').valid()){

			var file = $('#select_img')[0].files[0];
			if(file != undefined){
				data.append('titulo', hito.find('#titulo').val());
				data.append('fecha', hito.find('#fecha').val());
				data.append('suceso', hito.find('#suceso').val());
				data.append('importancia', hito.find('#importancia').val());
				data.append('aprendizaje', hito.find('#aprendizaje').val());
				data.append('file', file);
				data.append('url', window.location.pathname.split('/')[1]);
				newEvent(data);
			}else{
				mostrarMensaje('No has seleccionado una foto para el hito');
			}
			
		}
	}

	if(editing){
		$('#select_img').removeAttr('required');
		if($('#form-event').valid()){
			var file = $('#select_img')[0].files[0];
			if(file!=undefined){
				data.append('file', file);
			}
			data.append('id',currentEvent.$mainContainer.attr('id'));
			data.append('titulo', hito.find('#titulo').val());
			data.append('fecha', hito.find('#fecha').val());
			data.append('suceso', hito.find('#suceso').val());
			data.append('importancia', hito.find('#importancia').val());
			data.append('aprendizaje', hito.find('#aprendizaje').val());
			
			updateEvent(data);
		}
	}

}

function updateEvent(data){


	var data = $.ajax({
		url: baseUrl+'/misiones/update_hito',
		type: 'POST',
		data: data,
		cache: false,
		processData: false, // Don't process the files
		contentType: false, // Set content type to false as jQuery will tell the server its a query string request
		success: function(data) {
			var oData = JSON.parse(data);
			currentEvent.updateEvent(oData);
			$('#modalEvent').modal('toggle');
		},
		error:  function(error) {
			  console.log(error);
		}
	});
}

function newEvent(data){


	var data = $.ajax({
		url: baseUrl+'/misiones/agregar_hito',
		type: 'POST',
		data: data,
		cache: false,
		processData: false, // Don't process the files
		contentType: false, // Set content type to false as jQuery will tell the server its a query string request
		success: function(data) {
			//console.log(data);
			var oData = JSON.parse(data);
			Timeline.saveEvent(oData);
			$('#modalEvent').modal('toggle');
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(textStatus);
		}
	});
}

function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function(e) {
			$('#eventImg').attr('src', e.target.result);

		};

		reader.readAsDataURL(input.files[0]);


	}
}



function loadHitos(){
	
	$.ajax({
		url: baseUrl+'/misiones/get_hitos',
		type: "post",
		success: function(data) {

			var oData = JSON.parse(data);
			var size = oData.length;
			for (var i = 0 ; i < size; i++) {
				Timeline.saveEvent(oData[i]);
			};
		},
		error: function(event) {
			console.log(event);
		}
	});
}


function loadEvent(){
	var id = currentEvent.$mainContainer.attr('id');
	var data = {
		'id': id
	};
	$.ajax({
		url: baseUrl+'/misiones/get_hito',
		type: "post",
		data: data,
		success: function(data) {

			var oData = JSON.parse(data);
			var modal = $('#modalEvent');
			modal.modal();

			modal.find('img').attr('src', '.'+oData.url_foto);
			modal.find('#titulo').val(oData.titulo);
			modal.find('#fecha').val(oData.fecha);
			modal.find('#suceso').val(oData.suceso);
			modal.find('#importancia').val(oData.importancia);
			modal.find('#aprendizaje').val(oData.aprendizaje);


		},
		error: function(event) {
			console.log(event);
		}
	});
}

function borrarEvent(){
	var id = currentEvent.$mainContainer.attr('id');
	var data = {
		'id': id
	};

	console.log('id');
	$.ajax({
		url: baseUrl+'/misiones/borrar_hito',
		type: "post",
		data: data,
		success: function(data) {
			currentEvent.borrar();
			console.log(data);
		}
	});
}

function validateForm() {
	$('#form-event').validate({
		errorPlacement: function(error, element) {

			return true;
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
		url: baseUrl+'/misiones/terminar_memoria',
		type: "post",
		data: data,
		success: function(response) {
			
			window.location.href = location.origin+'/misiones';
		},
		error: function(event) {
			
		}
	});
}

