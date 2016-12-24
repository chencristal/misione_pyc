
<script type="text/javascript">
    function limelightPlayerCallback(playerId, eventName, data){
        var id = "player";
        if (eventName == 'onPlayerLoad' && (LimelightPlayer.getPlayers() == null
            || LimelightPlayer.getPlayers().length == 0))
        {
            LimelightPlayer.registerPlayer(id);
        }
        if(eventName == 'onPlayerLoad'){
            if(!inicio){
                LimelightPlayer.doLoadMedia('bc24b4d98e5e4096a5d76a9f8be2f377', true, 0);
            }else{
                LimelightPlayer.doLoadMedia('bc24b4d98e5e4096a5d76a9f8be2f377', true, 0)
            }
        }
        if(eventName == 'onMediaComplete'){
            $('#continuar').show();
        }
    }
</script>
<div class="container principal">
    <!-- Primera parte -->
    <div class="row mision-video" id="video" style="text-align:center; display:block;">
        <div id="iframe-container">
            <div id="player"></div>
            <script src="//video.limelight.com/player/embed.js"></script>
            <object type="application/x-shockwave-flash" id="limelight_player_156792" name="limelight_player_156792" class="LimelightEmbeddedPlayerFlash swfPrev-beforeswfanchor0 swfNext-afterswfanchor0" width="640" height="390" data="//video.limelight.com/player/loader.swf" tabindex="0">
                <param name="movie" value="//video.limelight.com/player/loader.swf">
                <param name="wmode" value="window">
                <param name="allowScriptAccess" value="always">
                <param name="allowFullScreen" value="true">
                <param name="flashVars" value="playerForm=Player&amp;deepLink=true"></object>
            <a id="afterswfanchor0" href="#limelight_player_156792" tabindex="0" title="Flash end" style="border:0;clip:rect(0 0 0 0);display:block;height:1px;margin:-1px;outline:none;overflow:hidden;padding:0;position:absolute;width:1px;" data-related-swf="limelight_player_156792"></a>
            <script>LimelightPlayerUtil.initEmbed('limelight_player_156792');</script>
        </div>
        <!-- <iframe title="Video" class="row mision-video" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/zqmOeVG1mYY" frameborder="0" allowFullScreen></iframe> -->
        <a class="btn btn-normal" href="<?php echo base_url('home')?>"><span class="glyphicon glyphicon-home"></span> Ir al Home</a>
        <input style="display:none; position:relative;" id="continuar" type="button" value="Continuar" class="btn btn-normal">
    </div>
    <!-- Segunda parte -->
    <div id="panel_1" class="row b-shadow col-md-12" style="display:none; padding: 30px 30px;">
        <div class="col-md-12 text-center margin-bottom-10">
            <label class="result-title">Califica cada área de 1 a 10</label>
        </div>
        <div class="col-md-12 text-center">
            <div>
                <img src="<?php echo base_url('assets/img/m9/1_page_back.png')?>">
            </div>

            <!-- Item Area Begin -->
            <div style="width: 100%; height: 100%; position: absolute; top: 0px;">
                <div class="div_item_area" id="div_item_area_1">
                    <p class="texto-blanco pull-left">Servicio al Prójimo</p>
                    <input id="numero1" min="0" class="input" placeholder=""> <!--type="number"-->
                </div>
                <div class="div_item_area" id="div_item_area_2">
                    <p class="texto-blanco pull-left">Ocio</p>
                    <input id="numero2" min="0" class="input" placeholder=""> <!--type="number"-->
                </div>
                <div class="div_item_area" id="div_item_area_3">
                    <p class="texto-blanco pull-left">Salud</p>
                    <input id="numero3" min="0" class="input" placeholder=""> <!--type="number"-->
                </div>
                <div class="div_item_area" id="div_item_area_4">
                    <p class="texto-blanco pull-left">Manejo del Dinero</p>
                    <input id="numero4" min="0" class="input" placeholder=""> <!--type="number"-->
                </div>
                <div class="div_item_area" id="div_item_area_5">
                    <p class="texto-blanco pull-right">Espiritualidad</p>
                    <input id="numero5" min="0" class="input" placeholder=""> <!--type="number"-->
                </div>
                <div class="div_item_area" id="div_item_area_6">
                    <p class="texto-blanco pull-right">Estudio</p>
                    <input id="numero6" min="0" class="input" placeholder=""> <!--type="number"-->
                </div>
                <div class="div_item_area" id="div_item_area_7">
                    <p class="texto-blanco pull-right">Relaciones Sociales</p>
                    <input id="numero7" min="0" class="input" placeholder=""> <!--type="number"-->
                </div>
                <div class="div_item_area" id="div_item_area_8">
                    <p class="texto-blanco pull-right">Familia</p>
                    <input id="numero8" min="0" class="input" placeholder=""> <!--type="number"-->
                </div>
            </div>
            <!-- Item Area End -->
        </div>
        <div class="col-md-12 margin-top-30" style="text-align: right">
            <input id="continue_panel_1" type="button" value="Continuar" class="btn btn-normal">
        </div>
    </div>
    <!-- Tercera parte -->

    <!-- Chart Panel Begin -->
    <div id="panel_2" class="row b-shadow col-md-12" style="display:none; padding: 30px 30px;">
        <div class="col-md-12 text-center margin-bottom-10">
            <label class="result-title">Califica cada área de 1 a 10</label>
        </div>
        <div class="col-md-12 text-center">
            <div>
                <img src="<?php echo base_url('assets/img/m9/2_page_back_.png')?>">
            </div>
            <div class="div_radar_chart">
                <canvas id="radar_chart" class="radar-chart" width="640px" height="400px">
                </canvas>
            </div>
        </div>
        <div class="col-md-12 margin-top-30" style="text-align: right">
            <input id="continue_panel_2" type="button" value="Continuar" class="btn btn-normal">
        </div>
    </div>
    <!-- Chart Panel End -->


    <!-- Third Panel Begin -->
    <div id="panel_3" class="row b-shadow col-md-12" style="display:none; padding: 30px 30px;">
        <div class="col-md-12 text-center margin-bottom-10">
            <label class="result-title">Califica cada área de 1 a 10</label>
        </div>
        <div class="col-md-12 text-center">
            <div class="col-md-offset-2 col-md-4" style="text-align: left">
                <div class="hours-text" id="div_hour_1" data-item="1">
                    <img src="<?php echo base_url('assets/img/m9/pregunta.png')?>">
                    <input id="numero1" min="0" class="input" type="number" placeholder="">
                    <span class="texto-blanco">Estudio</span>
                    <div class="b-shadow help-panel" style="display:none">
                        Dedicado a tareas, trabajos, lecturas o estudio.
                    </div>
                </div>
                <div class="hours-text" id="div_hour_2" data-item="2">
                    <img src="<?php echo base_url('assets/img/m9/pregunta.png')?>">
                    <input id="numero1" min="0" class="input" type="number" placeholder="">
                    <span class="texto-blanco">Clases</span>
                    <div class="b-shadow help-panel" style="display:none">
                        El tiempo que se está dentro del aula
                    </div>
                </div>
                <div class="hours-text" id="div_hour_3" data-item="3">
                    <img src="<?php echo base_url('assets/img/m9/pregunta.png')?>">
                    <input id="numero1" min="0" class="input" type="number" placeholder="">
                    <span class="texto-blanco">Otros Estudios</span>
                    <div class="b-shadow help-panel" style="display:none">
                        Formales o informales, presenciales o virtuales, para aprender otros temas como por ejemplo idiomas  o manejo de programas.
                    </div>
                </div>
                <div class="hours-text" id="div_hour_4" data-item="4">
                    <img src="<?php echo base_url('assets/img/m9/pregunta.png')?>">
                    <input id="numero1" min="0" class="input" type="number" placeholder="">
                    <span class="texto-blanco">Trabajo</span>
                    <div class="b-shadow help-panel" style="display:none">
                        Actividad realizada por una retribución económica o con el objetivo de producir un valor posterior.
                    </div>
                </div>
                <div class="hours-text" id="div_hour_5" data-item="5">
                    <img src="<?php echo base_url('assets/img/m9/pregunta.png')?>">
                    <input id="numero1" min="0" class="input" type="number" placeholder="">
                    <span class="texto-blanco">Alimentación</span>
                    <div class="b-shadow help-panel" style="display:none">
                        Tiempo invertido en la preparación, compra y consumos de las comidas principales y otras meriendas.
                    </div>
                </div>
                <div class="hours-text" id="div_hour_6" data-item="6">
                    <img src="<?php echo base_url('assets/img/m9/pregunta.png')?>">
                    <input id="numero1" min="0" class="input" type="number" placeholder="">
                    <span class="texto-blanco">Arreglo Personal</span>
                    <div class="b-shadow help-panel" style="display:none">
                        Bañarse, vestirse, afeitarse, peinarse, maquillarse, entre otras actividades.
                    </div>
                </div>
                <div class="hours-text" id="div_hour_7" data-item="7">
                    <img src="<?php echo base_url('assets/img/m9/pregunta.png')?>">
                    <input id="numero1" min="0" class="input" type="number" placeholder="">
                    <span class="texto-blanco">Dormir</span>
                    <div class="b-shadow help-panel" style="display:none">
                        Siestas y sueño nocturno.
                    </div>
                </div>
                <div class="hours-text" id="div_hour_8" data-item="8">
                    <img src="<?php echo base_url('assets/img/m9/pregunta.png')?>">
                    <input id="numero1" min="0" class="input" type="number" placeholder="">
                    <span class="texto-blanco">Desplazamientos</span>
                    <div class="b-shadow help-panel" style="display:none">
                        Tiempo invertido en transportarse por cualquier medio con el objetivo de llegar a un lugar específico en el que debemos estar.
                    </div>
                </div>
            </div>
            <div class="col-md-6" style="text-align: left">
                <div class="hours-text" id="div_hour_9" data-item="9">
                    <img src="<?php echo base_url('assets/img/m9/pregunta.png')?>">
                    <input id="numero1" min="0" class="input" type="number" placeholder="">
                    <span class="texto-blanco">Tareas Domésticas</span>
                    <div class="b-shadow help-panel" style="display:none">
                        Limpieza del hogar, lavado, planchado y arreglo de ropa, pago de recibos, mercado y administración del hogar.
                    </div>
                </div>
                <div class="hours-text" id="div_hour_10" data-item="10">
                    <img src="<?php echo base_url('assets/img/m9/pregunta.png')?>">
                    <input id="numero1" min="0" class="input" type="number" placeholder="">
                    <span class="texto-blanco">Deporte y Actividad Física</span>
                    <div class="b-shadow help-panel" style="display:none">
                        Desde ejercicios individuales y caminatas, hasta práctica formal de un deporte, gimnasio, danza, entre otras.
                    </div>
                </div>
                <div class="hours-text" id="div_hour_11" data-item="11">
                    <img src="<?php echo base_url('assets/img/m9/pregunta.png')?>">
                    <input id="numero1" min="0" class="input" type="number" placeholder="">
                    <span class="texto-blanco">Aficiones y Pasatiempos</span>
                    <div class="b-shadow help-panel" style="display:none">
                        Actividades de recreo e interés personal que no tienen necesariamente fines productivos específicos tales como la literatura, música, cine, videojuegos, artes, entre otras.
                    </div>
                </div>
                <div class="hours-text" id="div_hour_12" data-item="12">
                    <img src="<?php echo base_url('assets/img/m9/pregunta.png')?>">
                    <input id="numero1" min="0" class="input" type="number" placeholder="">
                    <span class="texto-blanco">Relaciones Familiares</span>
                    <div class="b-shadow help-panel" style="display:none">
                        Relaciones familiares: Dedicado a compartir y dialogar con la familia.
                    </div>
                </div>
                <div class="hours-text" id="div_hour_13" data-item="13">
                    <img src="<?php echo base_url('assets/img/m9/pregunta.png')?>">
                    <input id="numero1" min="0" class="input" type="number" placeholder="">
                    <span class="texto-blanco">Interacción Social</span>
                    <div class="b-shadow help-panel" style="display:none">
                        Reuniones, fiestas, espacios de encuentro para compartir y dialogar con amigos o salidas con la pareja.
                    </div>
                </div>
                <div class="hours-text" id="div_hour_14" data-item="14">
                    <img src="<?php echo base_url('assets/img/m9/pregunta.png')?>">
                    <input id="numero1" min="0" class="input" type="number" placeholder="">
                    <span class="texto-blanco">Voluntariado</span>
                    <div class="b-shadow help-panel" style="display:none">
                        Tiempo dedicado al servicio a los otros.
                    </div>
                </div>
                <div class="hours-text" id="div_hour_15" data-item="15">
                    <img src="<?php echo base_url('assets/img/m9/pregunta.png')?>">
                    <input id="numero1" min="0" class="input" type="number" placeholder="">
                    <span class="texto-blanco">Espiritualidad y Religiosidad</span>
                    <div class="b-shadow help-panel" style="display:none">
                        Tiempo de reflexión, oración, dialogo con Dios, celebraciones y ritos.
                    </div>
                </div>
                <div class="hours-text" id="div_hour_16" data-item="16">
                    <img src="<?php echo base_url('assets/img/m9/pregunta.png')?>">
                    <input id="numero1" min="0" class="input" type="number" placeholder="">
                    <span class="texto-blanco">Ocio</span>
                    <div class="b-shadow help-panel" style="display:none">
                        Tiempo dedicado a actividades de pausa o relajación que no persiguen objetivos productivos o que cultivan algún aprendizaje. Contemplación, observación, acciones para matar tiempo, pasar canales en tv, navegar en Internet de forma despreocupada, entre otras.
                    </div>
                </div>
                <div class="text-center margin-top-20">
                    <p class="texto-blanco" style="font-size: 18px; font-weight: 700;">TOTAL HORAL AL DÍA</p>
                    <input id="total_hours" min="0" class="input text-center" readonly
                           style="font-size: 20px; font-weight: 700; width: 100px;" placeholder="" value="0">
                </div>
            </div>
        </div>
        <div class="col-md-12 margin-top-30 text-center">
            <input id="btn_prev_3" type="button" value="Anterior" class="btn btn-normal">
            <input id="btn_following_3" type="button" value="Siguiente" class="btn btn-normal">
        </div>

        <div class="absoluta text-center emergenteCuestionario" id="emergenteCuestionario">
            <div class="contorno sombra relativa">
                <p class="texto-blanco" id="textoA">Con esta actividad se comprueba que no es fácil concentrarse en más de una tarea a la vez.</p>
                <input type="button" class="btn btn-normal relativa"  id="siguienteCuestionario" value="Continuar.">
            </div>
        </div>
        <div class="absoluta text-center emergenteCuestionario" id="div_help_message">
            <div class="contorno sombra relativa">
                <p class="texto-blanco" id="help_message">Con esta actividad se comprueba que no es fácil concentrarse en más de una tarea a la vez.</p>
                <input type="button" class="btn btn-normal relativa"  id="btn_continue_help" value="Continuar.">
            </div>
        </div>
    </div>
    <!-- Third Panel End -->


    <!-- Chart Panel Begin -->
    <div id="panel_4" class="row b-shadow col-md-12" style="display:none; padding: 30px 30px;">
        <div class="col-md-12 text-center margin-bottom-10">
            <label class="result-title">Califica cada área de 1 a 10</label>
        </div>
        <div class="col-md-7 text-center">
            <canvas id="pie_chart" width="640px" height="400px">
            </canvas>
        </div>
        <div class="col-md-5 margin-top-40" id="color_panel">
        </div>
        <div class="col-md-12 margin-top-30" style="text-align: right">
            <input id="continue_panel_4" type="button" value="Continuar" class="btn btn-normal">
        </div>
    </div>
    <!-- Chart Panel End -->


    <!-- Base Panel Begin -->
    <div id="panel_5" class="row b-shadow col-md-12" style="display:none; padding: 30px 30px;">
        <div class="col-md-12 text-center margin-bottom-10">
            <label class="result-title">Con base en tu calificación en la Rueda de la Vida, define una tarea para esta semana.</label>
        </div>
        <div class="col-md-12 margin-bottom-10">
            <div class="col-md-6" style="text-align: right; padding-right: 70px;">
                <div class="base-review">
                    <label class="texto-blanco">Familla</label>
                    <img src="<?php echo base_url('assets/img/m9/1_base.png')?>">
                    <input id="numero1" min="0" class="input" placeholder="">
                </div>
                <div class="base-review">
                    <label class="texto-blanco">Relaciones Sociales</label>
                    <img src="<?php echo base_url('assets/img/m9/2_base.png')?>">
                    <input id="numero1" min="0" class="input" placeholder="">
                </div>
                <div class="base-review">
                    <label class="texto-blanco">Estudio</label>
                    <img src="<?php echo base_url('assets/img/m9/3_base.png')?>">
                    <input id="numero1" min="0" class="input" placeholder="">
                </div>
                <div class="base-review">
                    <label class="texto-blanco">Espritualidad</label>
                    <img src="<?php echo base_url('assets/img/m9/4_base.png')?>">
                    <input id="numero1" min="0" class="input" placeholder="">
                </div>
            </div>
            <div class="col-md-6" style="text-align: right; padding-right: 70px;">
                <div class="base-review">
                    <label class="texto-blanco">Manejo del Dinero</label>
                    <img src="<?php echo base_url('assets/img/m9/5_base.png')?>">
                    <input id="numero1" min="0" class="input" placeholder="">
                </div>
                <div class="base-review">
                    <label class="texto-blanco">Salud</label>
                    <img src="<?php echo base_url('assets/img/m9/6_base.png')?>">
                    <input id="numero1" min="0" class="input" placeholder="">
                </div>
                <div class="base-review">
                    <label class="texto-blanco">Ocio</label>
                    <img src="<?php echo base_url('assets/img/m9/7_base.png')?>">
                    <input id="numero1" min="0" class="input" placeholder="">
                </div>
                <div class="base-review">
                    <label class="texto-blanco">Servicio al Projimo</label>
                    <img src="<?php echo base_url('assets/img/m9/8_base.png')?>">
                    <input id="numero1" min="0" class="input" placeholder="">
                </div>
            </div>
        </div>
        <div class="col-md-12 margin-top-30" style="text-align: right">
            <input id="continue_panel_5" type="button" value="Continuar" class="btn btn-normal">
        </div>
    </div>
    <!-- Base Panel End -->

    <!-- Quinta parte -->
    <div class="row form memoria" id="memoriaMision" style="display:none;">
        <form action="" id="form-memoria_m1">
            <fieldset>
                <label class="memo-title2">MEMORIA DE LA MISIÓN</label>
                <label class="quote texto-azul">“Amar no es mirarse el uno al otro; es mirar juntos en la misma dirección”.<br><span><strong>- Antoine de Saint-Exúpery</strong></span></label><br>
                <label>¿Qué pensamiento te surge después de esta misión?</label>
                <textarea class="input" rows="6" id="memoria" name="memoria" required></textarea>
            </fieldset>
            <br>

            <div class="col-md-12" style="text-align: right; right: 30px;">
                <input type="button" class="btn btn-normal" value="Guardar">
                <input type="button" class="btn btn-normal salir" id="guardar_memo" value="Salir">
            </div>
            <br><br>
        </form>
    </div>
</div>
<script type="text/javascript" src="<?php echo base_url('assets/js/mpyc2/jquery.booklet.latest.min.js')?>"></script>
<script type="text/javascript" src="<?php echo base_url('assets/js/mpyc2/jquery.easing.1.3.js')?>"></script>