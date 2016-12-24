var inicio = true;

var fraseActual=0;
var ContFotos=0;
var ContDespriciones =0;
var total_hours = 0;

var item_label = [
    'Estudio', 'Clases', 'Otros Estudios', 'Trabajo', 'Alimentación', 'Arreglo Personal', 'Dormir', 'Desplazamientos',
    'Tareas Domésticas', 'Deporte y Actividad Física', 'Aficiones y Pasatiempos', 'Relaciones Familiares', 'Interacción Social',
    'Voluntariado', 'Espiritualidad y Religiosidad', 'Ocio'
];

var item_color = [
    '#21676a', '#307b7e', '#429093', '#4a999c', '#53a3a6', '#60b1b4', '#73c0c3', '#89cfd2',
    '#195c2d', '#226c39', '#307d47', '#3e8d56', '#4c9c64', '#5cac75', '#6db884', '#87cb9c'
];

var item_index = [];
var item_value = [];

var group_hours_label = [
    'ESTUDIO',
    'TRABAJO',
    'VITALES',
    'DEBERES COTIDIANOS',
    'BIENESTAR',
    'RELACIONES',
    'ACTIVIDAD INTERIOR',
    'OCIO'
];
var group_hours = [0,0,0,0,0,0,0,0];
var group_color = [
    '#35ee80', '#0f9244', '#7cf6ff', '#099992', '#f846ff', '#790085', '#b9d431', '#b99f06'
];

$(document).ready(function(){

    function calc_total_hours() {
        item_index = [];
        item_value = [];
        var total_hour = 0;
        group_hours = [0,0,0,0,0,0,0,0];

        $.each($('.hours-text'), function (key, val) {
            var index = $(val).data('item');
            var v = parseInt($('input', $(val)).val());
            v = isNaN(v) ? 0 : v;

            if (v > 0) {
                item_index.push(index - 1);
                item_value.push(v*7);

                switch (index) {
                    case 1: case 2: case 3:
                        group_hours[0] += v*7;
                        break;
                    case 4:
                        group_hours[1] += v*7;
                        break;
                    case 5: case 6: case 7:
                        group_hours[2] += v*7;
                        break;
                    case 8: case 9:
                        group_hours[3] += v*7;
                        break;
                    case 10: case 11:
                        group_hours[4] += v*7;
                        break;
                    case 12: case 13:
                        group_hours[5] += v*7;
                        break;
                    case 14: case 15:
                        group_hours[6] += v*7;
                        break;
                    case 16:
                        group_hours[7] += v*7;
                        break;
                }
            }
            total_hour += v;
        });
        $('#total_hours').val(total_hour);

        return total_hour;
    }

    $('#continuar').click(function(){
        if(inicio){
            //LimelightPlayer.doPause();
            $('#video').slideUp();
            $('#panel_1').slideDown();
            audioElement.play();
            audioElement.controls = true;
        }else{
            $('#animacion-container').slideUp();
            $('.videoteca').slideDown();
            player.stopVideo();
            audioElement.pause();
            $('audio').hide();
            $('.subs').hide();
        }

    });

    $('#continue_panel_1').click(function(){
        $('#panel_1').slideUp();
        $('#panel_2').slideDown();

//Get the context of the Radar Chart canvas element we want to select
        var ctx = document.getElementById("radar_chart").getContext("2d");
        var myRadarChart = new Chart(ctx,
            {
                type: "radar",
                data: {
                    labels : ["","","","","","","",""],
                    datasets : [
                        {
                            data : [65,59,46,81,56,55,40,31],
                            backgroundColor: ['rgba(250, 250, 250, 0.5)'],
                            borderColor: ['#eeeeee'],
                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    scale: {
                        angleLines:{
                            display: false
                        },
                        gridLines: {
                            color: ['#00ffcc']
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true
                        }
                    },
                    showTooltips: false,
                    legend: {
                        display: false
                    }
                }
            }
        );
    });

    $('#continue_panel_2').click(function(){
        $('#panel_2').slideUp();
        $('#panel_3').slideDown();
    });
    
    $('.hours-text img').click(function (e) {
        var sz_help = $('.help-panel', $(this).closest('.hours-text')).text();

        $('#help_message').text(sz_help);
        $('#div_help_message').show();
    });

    $('.hours-text input').keyup(function(){
        total_hours = calc_total_hours();
    });
    $('#btn_following_3').click(function () {
        total_hours = calc_total_hours();
        if (total_hours != 24) {
            $('#emergenteCuestionario').show();
        } else {
            $('#panel_3').slideUp();
            $('#panel_4').slideDown();

            // For a pie chart
            //var ctx = document.getElementById('pie_chart').getContext('2D');
            var labels = [];
            var colors = [];

            $('#color_panel').html('');
            $.each(group_hours_label, function (key, val) {
                labels.push(item_label[val]);
                colors.push(item_color[val]);

                $('#color_panel').append(
                    $('<div/>').attr('class', 'color-item')
                        .append($('<div/>').attr('class', 'color-item-circle').attr('style', 'background-color:' + group_color[key]))
                        .append($('<span/>').attr('class', 'texto-blanco uppercase').text(group_hours_label[key] + ':'))
                        .append($('<span/>').attr('class', 'titulo-azul').text(group_hours[key] + ' horas'))
                );
            });
            var ctx = document.getElementById("pie_chart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: group_hours_label,
                    datasets: [{
                        backgroundColor: group_color,
                        data: group_hours
                    }]
                },
                options: {
                    showTooltips: false,
                    legend: {
                        display: false,
                        labels: {
                            fontColor: 'rgb(255, 99, 132)'
                        }
                    }
                }
            });
        }
    });

    $('#siguienteCuestionario').click(function(){
        $('#emergenteCuestionario').hide();
    });
    $('#btn_continue_help').click(function(){
        $('#div_help_message').hide();
    });

    $('#continue_panel_4').click(function () {
        $('#panel_4').slideUp();
        $('#panel_5').slideDown();
    });

// Radar Data


    $('#guardar-respuesta').click(function(){
        var respuesta = $('#respuesta').val();
        var pregunta = $('#respuesta').parent().text();
        var respuesta_id = $('#respuesta').attr('r');

        if(respuesta != ''){
            terminarMision(respuesta, pregunta, 1, respuesta_id);
            inicio=false;
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
        if(memoria != ''){
            enviarMemoria(memoria, 14, memoria_id);
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

    var num= 1;
    $('.video-container .thumb-nail').each(function(){
        $(this).css('background', 'url("../assets/img/images/imgs_video_'+num+'.png") no-repeat center 0 0 transparent');
        num++;
    });

    audioElement = document.createElement('audio');
    audioElement.setAttribute('src', base_url + 'assets/audio/mpyc2/m3/p1.mp3');

    document.body.appendChild(audioElement);
    //audioElement.load()

// Boton continuar3
    $("#continue_panel_5").click(function(){
        $('#panel_5').slideUp();
        $('#memoriaMision').slideDown();
    });

    /**
     Termina bloque de la parte funcional de la mision 3.
     **/

});
//Cambiar al audio 2
function cambiarAudio(){
    audioElement.setAttribute('src', '../assets/audio/mpyc2/m3/p2.mp3');
    audioElement.play();
    $("audio").css("z-index","1");
    $('.subs').show();
    $('.subs-panel').html('Gracias por tu ayuda. Con esa información ya puedo actualizar mis bases de datos, y esto me ayudará a entender mejor el paso del enamoramiento al amor maduro de  ustedes los humanos.');
    audioElement.onpause = function(){
        $('.subs').hide();
        audioElement.controls = false;
    }
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
            audioElement.pause();
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
            show_loading($('#memoriaMision'), true);
        },
        success:  function (response) {
            show_loading($('#memoriaMision'), false);
            window.location.href = base_url+'m9';
        },
        error: function(event){
            show_loading($('#memoriaMision'), false);
            console.log(event);
        }
    });
}

function mostrarContinuar1(){
    if(ContFotos==9 && ContDespriciones == 9){
        $('#continuar1').show();
    }
}


