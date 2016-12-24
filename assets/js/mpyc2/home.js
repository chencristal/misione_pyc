var inicio = true;
$(document).ready(function(){
	
	 var URLhash = window.location.hash;
		//if(URLhash == "#1"){
			$('#homeImg').show();
			$('#misiones').show();
			$('#biblioteca').show();
			$('#tituloBiblioteca').show();
			$('#tituloNave').show();
		//}

		if(URLhash == "#2"){
			$('#homeImg').hide();
			$('#misiones').hide();
			$('#biblioteca').hide();
			$('#tituloBiblioteca').hide();
			$('#tituloNave').hide();
			$('#animacion-container').show();
		}	


});

