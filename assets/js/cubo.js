var clicked = false;

$(document).ready(function () {
	 setInterval(cambiar,500);
	$('.lado, .vision, .mision').mouseenter(function(){
		var ide = $(this).attr('class').split(' ')[0];

		$(this).find('img').attr('src','../assets/img/cubo/'+ide+'.png');
	});
	
	$('.lado, .vision, .mision').mouseleave(function(){
		var ide = $(this).attr('class').split(' ')[0];
		if(!$(this).hasClass('done')){
			$(this).find('img').attr('src','../assets/img/cubo/'+ide+'_.png');
		}
		
	});
	
	
	$('#modal-vm').on('hidden.bs.modal', function () {
		$('.historico-lista').show();
		$('.historial').empty();
	});

	$('.info a').click(function(){
		$('.info-text').toggle();
	});

	
	$('.vision, .mision').click(function(){
		var title = $(this).attr('data-title').toUpperCase();
		var vmNombre = $(this).attr('id');
		var modal = $('#modal-vm');
		modal.attr('data-vm-nombre', vmNombre);
		modal.find('.sub-title').html(title);
		modal.find('#titulo-data').html(title);
		
		var data = {
			vm_nombre: $('#modal-vm').attr('data-vm-nombre')
		}
		ajaxSubmit(data, 'vida/get_historial_uploads', successLoadHistorial, errorAjax);


		$('#modal-vm').modal();
		mostrarMensaje('Se puede tardar la subida del archivo dependiendo de su peso.');
		$('.historico-lista').hide();
	});

	$('.ico').click(function(){
		var data = {
			vm_nombre: $('#modal-vm').attr('data-vm-nombre')
		}
		ajaxSubmit(data, 'vida/get_historial_uploads', successLoadHistorial, errorAjax);
		
	});

	$('.upload').click(function(){
		$('.upload + #select_file').click();
	});

	$('.upload + #select_file').on('change', function(){
	
		readUrlInputFile(this, $('.upload'));
	});

	$('#close').click(function(){
		$('#modal-lado').modal('toggle');
	});
	
	$('.lado').click(function(){

		var titulo = $(this).attr('data-lado');
		var nombre_lado = $(this).attr('id');
		if(titulo == "ACADÉMICO"){
			$("#contenedorMatriz").show();
		}else{
			$("#contenedorMatriz").hide();
		}
		$('#modal-lado').attr('data-lado-nombre', nombre_lado);
		$('#lado').html(titulo);
		$('.pregunta-principal').html(preguntas[nombre_lado]);
		var data = {
			nombre_lado: nombre_lado
		}
		if(!clicked){
			mostrarMensaje('Fija un propósito para este ámbito, respondiendo a la pregunta "'+preguntas[nombre_lado]+'".');
			clicked = true;
		}
		ajaxSubmit(data, 'vida/get_preguntas',successGetPreguntasLado, errorAjax);

	});

	$('#add-pregunta').click(function(){
		$('#add').hide();
		$('#ok').show();
	});

	$('.plus.ok').click(function(){
		var pregunta = $('#nueva-pregunta').val();
		var nombre_lado = $('#modal-lado').attr('data-lado-nombre');
		if(pregunta!=''){
			var data ={
				pregunta: pregunta,
				nombre_lado: nombre_lado
			};
			ajaxSubmit(data, 'vida/add_pregunta', successGetPreguntasLado, errorAjax);
		}
		$('#add').show();
		$('#ok').hide();
		var pregunta = $('#nueva-pregunta').val('');
	});

	$('#jump-video').click(function(){
		LimelightPlayer.doPause();
		$('#animacion-container').slideUp();
		$('.cubo').slideDown();
		
		audioElement.play();
		audioElement.controls = true;
		$('.subs').show();
		$('.subs-panel').html('El objetivo es que te propongas tareas de mejora y crecimiento en cada uno de los aspectos de tu vida, que representan las diferentes caras del cubo. Es recomendable que te plantees retos concretos y alcanzables; de esta forma, podrás irlos cumpliendo. A medida que esto ocurra, deberás ingresar a cada una de las tareas y evaluar el estado de realización. Así, tu nivel de desempeño irá aumentando.')

		
	});
	audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './assets/audio/cubo.mp3');
     document.body.appendChild(audioElement);
    $.get();
});

var preguntas ={
	personal:'¿Cómo podría mejorar personalmente?',
	social:'¿Cómo podría mejorar mis relaciones interpersonales?',
	familiar:'¿Cómo podría mejorar mis relaciones familiares?',
	afectivo:'¿Cómo puedo armonizar mi desarrollo afectivo?',
	academico:'¿Cómo podría mejorar mi desempeño académico?',
	material:'¿Cómo podría favorecer mi bienestar?'
}

function successGetPreguntasLado(data){
	$('.pregunta').remove();
	var oData = JSON.parse(data).response;

	for(var i = 0; i<oData.length; i++){
		var html = '<div class="pregunta" id="'+oData[i].mejora_id+'">'
	            +'<label class="texto-pregunta">'+oData[i].pregunta+'</label>'
				+'<label class="option">'
					+'<input class="radio" type="radio" name="p'+oData[i].mejora_id+'" value="0">'
					+'<label>&nbsp;</label>'
					+'Nunca'
				+'</label>'
				+'<label class="option">'
					+'<input class="radio" type="radio" name="p'+oData[i].mejora_id+'" value="1">'
					+'<label>&nbsp;</label>'
					+'A veces'
				+'</label>'
				+'<label class="option">'
					+'<input class="radio" type="radio" name="p'+oData[i].mejora_id+'" value="2">'
					+'<label>&nbsp;</label>'
					+'Siempre'
				+'</label>'
            	+'</div>';
            
		$('.preguntas-container').append(html);
		$('input[name=p'+oData[i].mejora_id+'][value="'+oData[i].respuesta+'"]').prop('checked', 'true');
	}

	$('label.option label').click(function() {
		checkUpdate(this);
	});
	$('#modal-lado').modal();
	
}

function checkUpdate(event){
	$(event).closest('label.option').find('input[type="radio"]').prop('checked', 'true');
	var data = {
		mejora_id: $(event).closest('.pregunta').attr('id'),
		respuesta: $(event).closest('label.option').find('input[type="radio"]').val(),
		nombre_lado: $('#modal-lado').attr('data-lado-nombre')
	};
	var id = $('#modal-lado').attr('data-lado-nombre');
	$('div[id='+id+']').addClass('done');
	$('div[id='+id+']').find('img').attr('src', '../assets/img/cubo/'+id+'.png');
	ajaxSubmit(data, 'vida/update_mejora', successGetPreguntasLado, errorAjax);
}

function successLoadHistorial(data){

	var oData = JSON.parse(data).historial;
	var $historial = $('.historial');
	var html;
	$('.item-li').remove();
	for( var i=0; i<oData.length; i++){
		html = '<li class="item-li"><a class="historia-item" target="_blank" href=".'+oData[i].url+'">'+oData[i].nombre_archivo+'</a> <span class="historia-date float-right">'+oData[i].d+'/'+oData[i].m+'/'+oData[i].y+'</span></li>';
		$historial.append(html);
	}
	$('.historico-lista').toggle();
}

function successUploadVm(data){
	var oData = JSON.parse(data);
	console.log(data);
	if(oData.status == -1){
		mostrarMensaje('Archivo demasiado pesado. Tamaño máximo: 5Mb.')
	}else{
		var id = $('#modal-vm').attr('data-vm-nombre')
		$('div[id='+id+']').addClass('done');
		$('div[id='+id+']').find('img').attr('src', '../assets/img/cubo/'+id+'.png');
	}
	$('.loading').removeClass('loading');
}

function errorAjax(textStatus){

}

function eliminarClaseSuccess(){
	$('.success').removeClass('success');	
}

function readUrlInputFile(element, img){
	if (element.files && element.files[0]) {
		var reader = new FileReader();
		reader.onload = function(e) {
			var data = new FormData();
			if(element.files[0].size <= 5000000){
				img.addClass('loading').removeClass('gallery-upload');
				data.append('file', $(element)[0].files[0]);
				data.append('vm_nombre',$('#modal-vm').attr('data-vm-nombre'));
				ajaxUpload(data, 'vida/upload_vm', successUploadVm, errorAjax);
				mostrarMensaje('Archivo subido exitosamente.');
				$('.loading').addClass('success');
			}else{
				mostrarMensaje('Archivo demasiado pesado. Tamaño máximo: 5Mb.');
			}
		
		
			
		};
		reader.readAsDataURL(element.files[0]);
	}
}
	var imgSocial=new Array('../assets/img/cubo/social.png','../assets/img/cubo/social_.png');
	var imgAfect=new Array('../assets/img/cubo/afectivo.png','../assets/img/cubo/afectivo_.png');
	var imgPerso=new Array('../assets/img/cubo/personal.png','../assets/img/cubo/personal_.png');
	var imgAca=new Array('../assets/img/cubo/academico.png','../assets/img/cubo/academico_.png');
	var imgFami=new Array('../assets/img/cubo/familiar.png','../assets/img/cubo/familiar_.png');
	var imgMate=new Array('../assets/img/cubo/material.png','../assets/img/cubo/material_.png');
	var imgMisi=new Array('../assets/img/cubo/mision.png','../assets/img/cubo/mision_.png');
	var imgVisi=new Array('../assets/img/cubo/vision.png','../assets/img/cubo/vision_.png');
	
 function cambiar(){
        var numeroSocial=Math.floor((Math.random()*imgSocial.length));
		var numeroAfect=Math.floor((Math.random()*imgAfect.length));
		var numeroPerso=Math.floor((Math.random()*imgPerso.length));
		var numeroAca=Math.floor((Math.random()*imgAca.length));
		var numeroFami=Math.floor((Math.random()*imgFami.length));
		var numeroMate=Math.floor((Math.random()*imgMate.length));
		var numeroMisi=Math.floor((Math.random()*imgMisi.length));
		var numeroVisi=Math.floor((Math.random()*imgVisi.length));
		
        document.getElementById("social").childNodes[0].src = imgSocial[numeroSocial];
		document.getElementById("afectivo").childNodes[0].src =imgAfect[numeroAfect];
		document.getElementById("personal").childNodes[0].src = imgPerso[numeroPerso];
		document.getElementById("academico").childNodes[0].src = imgAca[numeroAca];
		document.getElementById("familiar").childNodes[0].src = imgFami[numeroFami];
		document.getElementById("material").childNodes[0].src=imgMate[numeroMate];
		document.getElementById("mision").childNodes[0].src=imgMisi[numeroMisi];
		document.getElementById("vision").childNodes[0].src=imgVisi[numeroVisi];
	 }
	 
