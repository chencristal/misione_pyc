$(document).ready(function() {
	$('.draggable').draggable();
	$('.datepicker').datepicker({ maxDate: 1 });

	$('.f-perfil-u img').click(function(){
		$('.f-perfil-u img + input').click();
	});

	$('.f-portada-u img').click(function(){
		$('.f-portada-u img + input').click();
	});

	$('.f-portada-u img + input').on('change', function(){
			
			readUrlInputFile(this, $('.f-portada-u img'));
	});
	$('.f-perfil-u img + input').on('change', function(){
			
			readUrlInputFile(this, $('.f-perfil-u img'));
	});

	$('#cerrar-drag').click(function(){
		$('.draggable').toggle();
	});

	$('#guardar-perfil').click(function(){
		var data = new FormData();
		if($('#form-perfil').valid()){
			var data = {
				nombre: $('input[name=nombre]').val(),
				apellidos: $('input[name=apellidos]').val(),
				dia: $('select[name=dia]').val(),
				mes: $('select[name=mes]').val(),
				year: $('select[name=year]').val(),
				cualidades: $('textarea[name=cualidades]').val(),
				gustos: $('textarea[name=gustos]').val(),
				intereses: $('textarea[name=intereses]').val(),
			};
			ajaxSubmit(data, 'diario/update_estudiante', successUpdateEstudiante, errorUpdateEstudiante);
		}
	});
	$('.help').click(function(){
		$('.draggable').toggle();
	})

	$('#form-perfil').validate();

	$('.gallery-link img, .gallery-link span').click(function(event){
		var id = event.target.parentNode.id;
		var data = {
			id: id
		}
		
		$('#modal-gallery').attr('data-gallery-id',data.id);
		ajaxSubmit(data, 'diario/get_gallery_items', successLoadGallery, errorLoadGallery);
	});

	$('.gallery-upload img').click(function(e){
		$('#gallery-file').click();
	});
	$('.gallery-upload img + #gallery-file').on('change', function(){
		
		readUrlInputFile(this, $('.gallery-upload img'));
	})

	$('a.tab-select').click(function(){
		var element = $(this);
		if(element.attr('data-id')=='curva' || element.attr('data-id')=='bitacora' || element.attr('data-id')=='hitos'){
			$('.diario').addClass('diario-lg');
		}else{
			$('.diario').removeClass('diario-lg');
		}
	});


	$('#ver-chart').click(function () {
		var data = {
			year: $('select[name=year_chart]').val(),
			mes: $('select[name=mes_chart').val(),
		}	

		console.log(data);

		ajaxSubmit(data, 'diario/get_emociones', successGetEmociones, errorAjax);
	});

	$('.tablero a').click(function () {
		
		var box = $(this).find('.box');
		if(box.hasClass('completo')){

			var data = {
				mision_id: box.attr('id')
			};
			//console.log(data);
			ajaxSubmit(data, 'diario/get_memoria_mision', successGetMemoria, errorAjax);
		}else{
			mostrarMensaje('Aún no completas o realizas ésta misión.');
		}
	});

	var URLhash = window.location.hash;
	if(URLhash == "#1"){
		audioElement = document.createElement('audio');
    	document.body.appendChild(audioElement);
    	$.get();
    	audioElement.setAttribute('src', '../assets/audio/mpyc2/emociones/p1.mp3');
		audioElement.play();
		audioElement.controls = true;
		$('.subs').show();
		$('.subs-panel').html('Oye. Llevas un número significativo de registros de tus estados emocionales. Ya fuiste a tu diario personal para revisar cómo está tu curva emocional? Veamos tus respuestas!');
		$("#blissCurva").show();
		audioElement.onpause = function(){
		$('.diario').addClass('diario-lg');
		$("a[data-id=curva]").click();
		setTimeout('$("#ver-chart").click();',1000);		
		audioElement1 = document.createElement('audio');
    	document.body.appendChild(audioElement1);
		audioElement1.setAttribute('src', '../assets/audio/mpyc2/emociones/p2.mp3');
		audioElement1.play();
		audioElement.controls = true;
		$('.subs').show();
		$('.subs-panel').html('Ahora pregúntate: ¿Notas alguna tendencia más marcada? y de ser así, ¿por qué crees que tienes más registros en esa emoción? Si tus registros son muy cambiantes, ¿por qué crees que están  fluctuando tanto tus emociones? Piénsalo… Si consideras que alguien puede ayudarte a analizar y  comprender estos resultados acude a las unidades  de servicios y apoyo de la Universidad de La Sabana, que encontrarás en tu Kit de emergencia. ');
		mostrarMensaje("¿Se nota alguna tendencia más marcada en tus emociones?",mostrarAlertaUno());
		audioElement1.onpause = function(){
			$("#blissCurva").hide();
			$('.subs').hide();
			$('').hide();
			$("#dialog").dialog("close");
		}
		}

	}

});

function mostrarAlertaUno(){
	mostrarMensaje("¿Por qué crees que tienes más registros en esa emoción?",mostrarAlertaDos());
}
function mostrarAlertaDos(){
	mostrarMensaje("¿Por qué crees que están  fluctuando tanto tus emociones?");
}

function successGetMemoria (data) {
	console.log(data);
		var oData = JSON.parse(data);

		var modalM = $('#modal-bitacora');

		modalM.find('label').html(oData.memoria);

		modalM.modal();
}

function successGetEmociones(data){
	var oData = JSON.parse(data);
	console.log(oData);
	var dataChart = [oData.e1, oData.e2, oData.e3, oData.e4, oData.e5, oData.e6, oData.e7, oData.e8, oData.e9, oData.e10, oData.e11,oData.e12,oData.e13];
	createChart(dataChart);
}

function successLoadGallery(data){
	var modal = $('#modal-gallery');
	$('.gallery-img').remove();	
	try{

		var oData = JSON.parse(data);
		console.log(oData);
		for(var i=0; i<oData.length; i++){
			var html = '<div class="gallery-img b-shadow">'
      						+'<img src="'+oData[i].url_imagen+'">'
      					+'</div>';
			$('.gallery').prepend(html);
		}
		
	}catch(error){
		
	}

	modal.modal();
}

function errorLoadGallery(error){
	
}


function successUpdateEstudiante(data){

	try{
		var oData = JSON.parse(data);
		
	}catch(error){
		
	}
}

function errorUpdateEstudiante(textStatus){
	
	//mostrarMensaje('Ha ocurrido un error inesperado');
}


function readUrlInputFile(element, img){
	if (element.files && element.files[0]) {
		var reader = new FileReader();
		reader.onload = function(e) {
			var data = new FormData();
			img.parent().addClass('loading');
			data.append('file', $(element)[0].files[0]);
			
			
			if(img.attr('id')!= 'gallery-preview'){
				data.append('id',element.id);
				
				ajaxUpload(data, 'diario/upload_img_portrait', successUploadPortraitImg, errorAjax);
			}else{
				data.append('id',$('.modal').attr('data-gallery-id'));
				ajaxUpload(data, 'diario/upload_gallery_img', successUploadGalleryFile, errorAjax);
			}
			
		};
		reader.readAsDataURL(element.files[0]);
	}
}
function successUploadGalleryFile(data){
	try{

		var oData = JSON.parse(data);
		var html = '<div class="gallery-img b-shadow">'
  						+'<img src="'+oData.url+'">'
  					+'</div>';

		$('.gallery').prepend(html);
		$('.loading').removeClass('loading').addClass('gallery-upload');
		
	}catch(error){
		
	}
}
function successUploadPortraitImg(data){
	try{
		
		var oData = JSON.parse(data);
		var element = $('#'+oData.id).parent();
		element.css('background', 'rgba(162, 255, 0, 0.33)');
		element.find('img').attr('src', oData.url);
	}catch(error){
		
	}
	
}

function errorAjax(textStatus){
	
}

var myBar;
function createChart(data){
	if(myBar != undefined){
		myBar.destroy();
	}
	var chartData = {
		labels : ['CONTENTO','TRISTE','CANSADO','ENFERMO','ENAMORADO','ASUSTADO','PENSATIVO','ENFADADO','DESPECHADO','RELAJADO','ABURRIDO','DEPRIMIDO','ESTRESADO'],
		datasets : [
			{
			label: "My First dataset",
            fillColor: "rgba(220,220,220)",
            strokeColor: "#ffae00",
            pointColor: "#ffae00",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: data
			}
		]
	}

	var ctx = document.getElementById("canvas").getContext("2d");
	 myBar = new Chart(ctx).Line(chartData, {
	 	customTooltips: function (tooltip) {
        var tooltipEl = $('#chartjs-tooltip');

        if (!tooltip) {
            tooltipEl.css({
                opacity: 0
            });
            return;
        }

        tooltipEl.removeClass('above below');
        tooltipEl.addClass(tooltip.yAlign);

        // split out the label and value and make your own tooltip here
        var parts = tooltip.text.split(":");
        var emos = {
        	'CONTENTO': 'a',
        	'TRISTE': 	'b',
			'CANSADO': 	'e',
			'ENFERMO': 	'f',
			'ENAMORADO': 	'g',
			'ASUSTADO': 	'c',
			'PENSATIVO': 	'h',
			'ENFADADO': 	'd',
			'DESPECHADO': 	'i',
			'RELAJADO': 	'j',
			'ABURRIDO': 	'k',
			'DEPRIMIDO': 	'l',
			'ESTRESADO': 	'm',
        }
        var src = '../assets/img/emoticons/on/btn_'+emos[parts[0]]+'_on.png'
        var innerHtml = '<img width="60" style="display:block" src="'+src+'">';
        tooltipEl.html(innerHtml);

        tooltipEl.css({
            opacity: 1,
            left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',
            top: tooltip.chart.canvas.offsetTop + tooltip.y + 'px',
            fontFamily: tooltip.fontFamily,
            fontSize: tooltip.fontSize,
            fontStyle: tooltip.fontStyle,
        });
    },
	responsive: true,
	///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.1)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 4,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points
    bezierCurve : true,

    //Number - Tension of the bezier curve between points
    bezierCurveTension : 0.4,

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,
      scaleFontSize: 16,
      scaleFontColor : "#00fffc",
      scaleLabel: "<%=value%>%",
    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
	
	});
}