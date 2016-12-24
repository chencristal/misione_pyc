
<script type="text/javascript">
    function limelightPlayerCallback(playerId, eventName, data){
        var id = "player";
        if (eventName == 'onPlayerLoad' && (LimelightPlayer.getPlayers() == null || LimelightPlayer.getPlayers().length == 0)) {
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
    <div id="libroDrop" class="row b-shadow col-md-12" style="display:none; margin-top: 30px;">
        <div class="col-md-12 text-center">
            <label class="uppercase texto-azul" id="pregunta" style="margin: 20px 0px; font-size:30px;">
                <strong>TIPS PARA ORAR</strong>
            </label>
        </div>
        <div class="row">
            <div id="imagen" class="col-xs-6 image-drag-panel" style="z-index:50; position:relative;">
                <div class="col-xs-6 col-md-4">
                    <div>
                        <img id="imagen1" class="imagen" data-item="1" src="<?php echo base_url('assets/img/m8/1.png');?>"/>
                    </div>
                    <div>
                        <img src="<?php echo base_url('assets/img/m8/btn/1.png');?>" style="width: 55px;"/>
                    </div>
                </div>
                <div class="col-xs-6 col-md-4">
                    <div>
                        <img id="imagen2" class="imagen" data-item="2" src="<?php echo base_url('assets/img/m8/2.png');?>"/>
                    </div>
                    <div>
                        <img src="<?php echo base_url('assets/img/m8/btn/2.png');?>" style="width: 55px;"/>
                    </div>
                </div>
                <div class="col-xs-6 col-md-4">
                    <div>
                        <img id="imagen3" class="imagen" data-item="3" src="<?php echo base_url('assets/img/m8/3.png');?>"/>
                    </div>
                    <div>
                        <img src="<?php echo base_url('assets/img/m8/btn/3.png');?>" style="width: 55px;"/>
                    </div>
                </div>
                <div class="col-xs-6 col-md-4">
                    <div>
                        <img id="imagen4" class="imagen" data-item="4" src="<?php echo base_url('assets/img/m8/4.png');?>"/>
                    </div>
                    <div>
                        <img src="<?php echo base_url('assets/img/m8/btn/4.png');?>" style="width: 55px;"/>
                    </div>
                </div>
                <div class="col-xs-6 col-md-4">
                    <div>
                        <img id="imagen5" class="imagen" data-item="5" src="<?php echo base_url('assets/img/m8/5.png');?>"/>
                    </div>
                    <div>
                        <img src="<?php echo base_url('assets/img/m8/btn/5.png');?>" style="width: 55px;"/>
                    </div>
                </div>
                <div class="col-xs-6 col-md-4">
                    <div>
                        <img id="imagen6" class="imagen" data-item="6" src="<?php echo base_url('assets/img/m8/6.png');?>"/>
                    </div>
                    <div>
                        <img src="<?php echo base_url('assets/img/m8/btn/6.png');?>" style="width: 55px;"/>
                    </div>
                </div>
                <div class="col-xs-6 col-md-4">
                    <div>
                        <img id="imagen7" class="imagen" data-item="7" src="<?php echo base_url('assets/img/m8/7.png');?>"/>
                    </div>
                    <div>
                        <img src="<?php echo base_url('assets/img/m8/btn/7.png');?>" style="width: 55px;"/>
                    </div>
                </div>
            </div>

            <div id="slider2" class="col-xs-6" style="color:white;">
                <div class="col-xs-offset-2 col-xs-8 b-shadow image-drop-parent" style="height: 300px;">
                    <div id="image-drop-panel" class="image-drop-panel">
                        <div style="display: table-cell; vertical-align: middle;">
                            <img id="drop-image" style="width: 100%; height: 100%;">
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 margin-top-10">
                    <h4 class="text-center">Agradecer y pedir perdon.</h4>
                </div>
                <div class="col-xs-12 text-center margin-top-20">
                    <input id="volver_drop" type="button" value="Volver" class="btn btn-normal">
                    <input id="continuar_drop" type="button" value="Continuar" class="btn btn-normal">
                </div>
            </div>
        </div>
    </div>
    <!-- Tercera parte -->
    <!--Cuadro Test de Atencion-->
    <div class="row form relativa" id="test_atencion" style="display:none;">
        <form action="" id="">
            <fieldset>
                <label class="uppercase result-title" id="pregunta">Test de Atención</label>

                <div class="col-md-12">
                    <p class="texto-blanco col-md-2 pull-left" style="position:relative; top:20px;">1</p>
                    <input id="numero1" min="0" class="col-md-8 input" placeholder="" style="width: 80%">
                </div>
                <div class="col-md-12">
                    <p class="texto-blanco col-md-2 pull-left" style="position:relative; top:20px;">2</p>
                    <input id="numero2" min="0" class="col-md-8 input" placeholder="" style="width: 80%">
                </div>
                <div class="col-md-12 margin-bottom-30">
                    <p class="texto-blanco col-md-2 pull-left" style="position:relative; top:18px;">3</p>
                    <input id="numero3" min="0" class="col-md-8 input" placeholder="" style="width: 80%">
                </div>

                <div class="col-md-12 margin-bottom-20">
                    <label class="result-title">¿Cuál es el papel que tiene allí? ¿Qué funciones cumple?</label>
                    <textarea class="input text-normal" rows="6" id="textoPersona" name="textoPersona"></textarea>
                </div>

                <div class="col-md-12" style="text-align: right;">
                    <input type="button" class="btn btn-normal" value="Guardar">
                    <input type="button" class="btn btn-normal salir" id="continuarEscribirPersonas" value="Continuar">
                </div>

                <div class="absoluta emergenteCuestionario" id="emergenteCuestionario">
                    <div class="contorno sombra relativa">
                        <p class="texto-blanco" id="textoA">Con esta actividad se comprueba que no es fácil concentrarse en más de una tarea a la vez.</p>
                        <input type="button" class="btn btn-normal relativa"  id="siguienteCuestionario" value="Continuar.">
                    </div>
                </div>
            </fieldset>
            <br>
        </form>
    </div>
    <!-- Quinta parte -->
    <div class="row form memoria" id="memoriaMision" style="display:none; margin-top:30px">
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