var buscar = false;

$(document).on('click', '#botonBuscar', function(e){
	console.log("buscar");
	if(buscar == false){
		e.preventDefault();
		$('#advertencia').show();

	}
});

function admin_select_all(){
	var a = document.querySelector(".admin-resultset").querySelectorAll("input[type=checkbox]");
	var at = true;
	for(var i=0;i<a.length;i++){
		at = at && (a[i].checked == true);
	}
	var new_state=true;
	if(at==1){
		new_state=false;
	}
	for(var i=0;i<a.length;i++){
		a[i].checked = new_state;
	}


		
}

function cambioCodigo() {
	//console.log("cambio");
	var codigo = document.getElementById("codigo");
	var index = codigo.selectedIndex;
	var value = codigo.options[index].value;
	var misiones = document.getElementById("modulo");
	var cantMisiones= misiones.length;
	var grupos = document.getElementById("grupo");
	var cantGrupos = grupos.length;
	//console.log(index);
	if(index != 0){

		if(index != 1){
			$('#isla').hide();
			$('.admin-top').hide();
		}else{
			$('#isla').show();
			$('.admin-top').show();

		}

		buscar =true;
		$('#advertencia').hide();



		$.ajax({
			async: 'false',
    		url: "admin/get_misiones_by_code",
    		type: "post",
    		data: {codigo: value},
			dataType:"json", 
    		success:  function (response) {
    			//console.log(response);

        		for(var a =0; a< cantMisiones; a++){
        			misiones.remove(0);
        		}
				
				var option = document.createElement("option");
				option.text = "Misión...";
				option.value = "*";
    			misiones.add(option, misiones[0]);


        		for (var a = 0; a < response.materias.length; a++){
					var option = document.createElement("option");
					option.text = response.materias[a].nombre;
					option.value = response.materias[a].mision_id;
        			misiones.add(option, misiones[a+1]);
        		}

        		for(var a = 0; a < cantGrupos; a++){
        			grupos.remove(0);
        		}

        		var option = document.createElement("option");
				option.text = "Grupo..."
				option.value = "*";
				grupos.add(option, grupos[0]);

        		for(var a = 0; a< response.grupos.length; a++){
					if(response.grupos[a].grupo != null){
						var option = document.createElement("option");
						option.text = response.grupos[a].grupo;
						option.value = response.grupos[a].grupo;
        				grupos.add(option, grupos[a+1]);
					}
        		}
			//console.log(index);
        		
    		},
    		error: function(event){
    			console.log(event);
    		}
		})
	}else{
		buscar = false;
		
	} 
}

