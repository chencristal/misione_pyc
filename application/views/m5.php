
<script type="text/javascript">
    function limelightPlayerCallback(playerId, eventName, data){
        var id = "player";
        if (eventName == 'onPlayerLoad' && (LimelightPlayer.getPlayers() == null || LimelightPlayer.getPlayers().length == 0)) {
            LimelightPlayer.registerPlayer(id);
        }

        if(eventName == 'onPlayerLoad'){
            LimelightPlayer.doLoadMedia('cf7ab6d3ed0b46fa8e7e868416903c4f', true, 0);
        }

        if(eventName == 'onMediaComplete'){
            $('#jump-video').show();
        }
    }
</script>

<div class="container principal">

    <div class="row" id="animacion-container" style="text-align:center; display:block">
        <div id="iframe-container">
            <div id="player"> <script src="//video.limelight.com/player/embed.js"></script>
                <object type="application/x-shockwave-flash" id="limelight_player_156792" name="limelight_player_156792" class="LimelightEmbeddedPlayerFlash swfPrev-beforeswfanchor0 swfNext-afterswfanchor0" width="640" height="390" data="//video.limelight.com/player/loader.swf" tabindex="0">
                    <param name="movie" value="//video.limelight.com/player/loader.swf">
                    <param name="wmode" value="window">
                    <param name="allowScriptAccess" value="always">
                    <param name="allowFullScreen" value="true">
                    <param name="flashVars" value="playerForm=Player&amp;deepLink=true"></object>
                <a id="afterswfanchor0" href="#limelight_player_156792" tabindex="0" title="Flash end" style="border:0;clip:rect(0 0 0 0);display:block;height:1px;margin:-1px;outline:none;overflow:hidden;padding:0;position:absolute;width:1px;" data-related-swf="limelight_player_156792"></a>
                <script>LimelightPlayerUtil.initEmbed('limelight_player_156792');</script></div>
        </div>

        <!-- BEGIN STEP 1 -->
        <div id="page-container" class="instrucciones-m4 columna" style="display:none; margin-top: 20px !important;">
            <br><br><br>
            <div class="row m-b help-portlet" style="background: url('<?php echo base_url('assets/img/m5/m5_1.png')?>') no-repeat center;">
                <div>
                    <div class="col-md-8 col-sm-12" style="margin-bottom: 100px;">
                        <div class="col-md-8 col-xs-12" style="display: table;">
                            <a href="javascript:;" class="mission-nav-arrow-button" id="btn_desc_left">
                                <img src="<?php echo base_url('assets/img/m5/right.png')?>">
                            </a>
                            <div class="columna" style="background-color: #00fffc; width: 70%; display: table-cell; vertical-align: middle;">
                                <label id="lbl_desc_title" class="uppercase" style="padding: 0px 20px;"></label>
                            </div>
                            <a href="javascript:;" class="mission-nav-arrow-button" id="btn_desc_right">
                                <img src="<?php echo base_url('assets/img/m5/left.png')?>">
                            </a>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-12">
                        <div class="columna top-arrow">
                            <label style="color: white;" id="lbl_desc_content"></label>
                        </div>
                    </div>
                </div>
            </div>
            <br>
        </div>
        <!-- END STEP 1 -->

        <!-- BEGIN STEP 2 -->
        <div class="row form mini-juego" style="display:none; margin-top: 20px !important;">
            <br>
            <div class="instrucciones-m4 columna" style="background-color: white">
                <div class="row m-b" style="margin: 10px 50px !important;">
                    <div class="col-md-12" style="margin-bottom: 20px;border-bottom: 5px double black;">
                        <a href="#" id="main_title" style="font-size: 47px; font-family: 'Georgia', sans-serif; border-bottom: 0;"><?php echo $maintitle?></a>
                        <p style="background-color: #eee;"> FECHA - EDICION #001 </p>
                    </div>
                    <div class="col-md-12" style="margin-bottom: 30px; text-align: left;">
                        <div class="col-md-6 text-center">
                            <a href="#" id="sub_title" style="font-size: 24px; display:block; font-family: 'Georgia', sans-serif; border-bottom: 0;"><?php echo $subtitle?></a>
                            <a href="#" id="news_content">
								<p class="newspaper"><?php echo $content?></p>
							</a>
                            <!--<p class="newspaper" style="padding-right: 30px;">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>-->
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-12 text-center" style="padding: 30px;">
                                <img src="<?php echo base_url($filename)?>" id="btn_upload"
                                     style="height: 216px; width: 100%; cursor: pointer;">
                                <input type="file" id="file_upload" style="display: none;" accept="image/*">
                            </div>
                            <!--<div class="col-md-12">
                                <p class="newspaper">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                </p>
                            </div>-->
                        </div>
                    </div>
                </div>

            </div>
            <br>
        </div>
        <!-- END STEP 2 -->

        <!-- BEGIN STEP 3 -->
        <div id="div_step_3" class="row form" style="display:none; margin-top: 20px !important;">
            <form action="#" id="form_memoria_m5" method="post">
                <fieldset>
                    <label class="memo-title2">MEMORIA DE LA MISIÓN</label>
                    <label class="quote texto-azul">“Cuida del orden y el orden cuidará de ti”.<br><span><strong>-  San Agustín</strong></span></label><br>
                    <label>¿Qué pensamiento te surge después de esta misión?</label>
                    <textarea class="input" r="2696" rows="6" id="memoria" name="memoria" required=""></textarea>
                </fieldset>
                <br>
                <a class="btn btn-normal bot-ir-al-home-misiones" href="https://misionpyc.com/home2"><span class="glyphicon glyphicon-home"></span> Regresar al Home</a>
                <input type="button" class="btn btn-normal salir" id="guardar_memo" value="Guardar">
            </form>
            <br>
        </div>
        <!-- END STEP 3 -->

        <a class="btn btn-normal bot-ir-al-home-misiones" href="<?php echo base_url('home')?>"><span class="glyphicon glyphicon-home"></span> Ir al Home</a>
        <input id="jump-video" type="button" value="Continuar" class="btn btn-normal"  style="display:none">
        <br><br>
    </div>


    <!--Acividad sde la foto del hombre de negocios-->
    <div class="row form relativa" id="actividadEmpresa" style=" display:none">
        <form>
            <fieldset id="fieldsetEmpresa" style="height: 320px;">
                <div id="contenedorEmpresa">
                    <div class="col-md-5">
                        <img id="bissEmpresa"src="<?php echo base_url('assets/img/bliss_1.png');?>">
                    </div>
                    <div class="col-md-7 relativa">
                        <div class="contorno sombra" >
                            <img src="<?php echo base_url('assets/img/m4/foto_hombrenegocios.png'); ?>">
                        </div>
                        <input type="button" class="btn btn-normal" id="mostrarPopup" value="Mostrar más" style="position: relative; left: -120px;">
                    </div>
                </div>
                <input type="button" class="btn btn-normal" id="continuarEmpresa" value="Continuar" style="position: relative; top: -65px; left: 260px;">
            </fieldset>

            <div class="absoluta" id="emergenteEmpresa">
                <div class="contorno sombra relativa">
                    <p class="texto-blanco">El gerente tiene una gran responsabilidad y es quien representa a los demás, por ello debería ser quien tiene más claro procurar el beneficio común. Sin embargo cada integrante cumple una serie de tareas sin las cuales la empresa no funcionaría de la misma manera. Todos suman desde sus capacidades  y sus roles.</p>
                    <input type="button" class="btn btn-normal relativa"  id="CerrarEmergente" value="Cerrar">
                </div>
            </div>
        </form>
    </div>

    <!--Actividad de las fotos de familas de diferentes culturas-->
    <div class="row form" id="actividadFotos" style="display: none;">
        <form>
            <fieldset>
                <div>
                    <div class="col-md-3">
                        <img class="fotoFamilia" src="<?php echo base_url('assets/img/m4/familia1.png');?>" >
                    </div>
                    <div class="col-md-3">
                        <img class="fotoFamilia" src="<?php echo base_url('assets/img/m4/familia2.png');?>" >
                    </div>
                    <div class="col-md-3">
                        <img class="fotoFamilia" src="<?php echo base_url('assets/img/m4/familia3.png');?>" >
                    </div>
                    <div class="col-md-3">
                        <img class="fotoFamilia" src="<?php echo base_url('assets/img/m4/familia4.png');?>" >
                    </div>
                </div>
            </fieldset>
            <br>
            <div class="contorno sombra texto-blanco" id="tetxoFotosFamilia">
                <p>Cada cultura reparte las tareas y funciones del hogar de diferentes maneras. Sin embargo, siempre hay alguien que se encarga de liderar las tareas de cuidado con los demás miembros del hogar y está más presente en la crianza y acompañamiento a  los menores. Pero debe existir corresponsabilidad en los deberes del hogar entre todos los miembros. De hecho, entre mayor participación hay de cada uno, más equitativo, sólido y estable es el grupo familiar.</p>
            </div>
            <input type="button" class="btn btn-normal" id="continuarFotos" value="Continuar">

        </form>
    </div>

    <div class="row form" id="actividadEscribirPersonas" style=" display:none">
        <form>

            <fieldset style="height: 330px;">
                <span class="titulo-magenta">MI HOGAR</span>
                <div id="familaContenedorCol">
                    <div class="col-md-5" id="familiaColIz">
                        <div class="col-md-3 heigthColFamilia">
                            <span class="helper"></span> <!--Esta liena centra verticalmente-->
                            <img id="izquierda" src="<?php echo base_url('assets/img/m4/izq.png') ?>">
                        </div>
                        <div class="col-md-6 heigthColFamilia2 sliderFamila" id="sliderFamilia">

                        </div>
                        <div class="col-md-3 heigthColFamilia">
                            <span class="helper"></span> <!--Esta liena centra verticalmente-->
                            <img id="derecha" src="<?php echo base_url('assets/img/m4/der.png') ?>">
                        </div>

                    </div>

                    <div class="col-md-7" id="familiaColDer">
                        <div class="contorno sombra">
                            <span class="titulo-azul" id="nombrePersonaDescripcion">nombre</span>
                            <textarea class="input text-normal" rows="6" id="textoPersona" name="textoPersona" placeholder="Responde: ¿Cuál es el papel que tiene allí? ¿Qué funciones cumple? ¿Cómo aporta al beneficio común? ¿Cómo propicia la unidad en el grupo?"></textarea>

                        </div>
                        <input type="button" class="btn btn-normal" id="guardarEscritura" value="Guardar" style="position: relative; left: -114px;">
                    </div>
                </div>
                <input type="button" class="btn btn-normal salir" id="continuarEscribirPersonas" value="Siguiente" style="position: relative; left: 250px; top: -70px;">
            </fieldset>
        </form>
    </div>

    <div class="row form memoria login-container" style="display:none">
        <form action="" id="form-memoria_m1">
            <fieldset>
                <label class="memo-title">MEMORIA DE LA MISIÓN</label>
                <label class="quote">
                    <br>“Tener un lugar a donde ir, se llama Hogar. Tener personas a quien amar, se llama Familia, y tener ambas se llama Bendición.” <br><span>- Papa Francisco</span>


                </label><br>

                <label>¿Qué pensamiento te surge después de esta misión?</label>
                <textarea class="input text-normal" r="<?php echo $memoria_id?>" rows="6" id="memoria" name="memoria" required><?php echo $memoria ?></textarea>
            </fieldset>
            <br>

            <input type="button" class="btn btn-normal salir" id="guardar_memo" value="Guardar">



        </form>
    </div>

</div>

</div>

