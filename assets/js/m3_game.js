var KEY_UP = 38,
	KEY_LEFT = 37,
	KEY_RIGHT = 39;

var car_images = ['top', 'left', 'right'];
var start_timer;
var route;
var correct_route = 0;

$(document).ready(function() {
	var direction_flag = 0;		// 0: up, 1: left, 2: right
	var tmp_direction_flag = 0;
	var unit = 2.7;

	var v_count = 3, h_count = 3;
	var parent_width, parent_height, car_width, car_height, width,height;

    var ms_interval = 30, t_ms = 60*1000/ms_interval, tid;
    var tcount = t_ms, subcount = t_ms, route_id = 0;


	function check_resize() {
		var main_width = parseInt($(window).width()),
			main_height = parseInt($(window).height());

		parent_width = parent_height = Math.min(main_width, main_height) - $('header.nav').height() - 40;
		/*if (parent_width < 400)
			parent_width = parent_height = 400;
		else if (parent_width > 800)
			parent_width = parent_height = 800;*/

		car_width = parent_width / 10;
		car_height = parent_height / 10;
		width = parent_width / (h_count - 1);
		height = parent_height / (v_count - 1);
        unit = width / t_ms * 16.5;

		$('.img_car')
			.width(car_width)
			.height(car_height);
		$('.car_parent')
			.css('left', ((parent_width-car_width)/2)+'px')
			.css('top', ((parent_width-car_height)/2)+'px');
		$.each($('.sub-parent'), function (k, v) {
			$(v).height(height)
				.css('top', k*height);
			$.each($('.div-part', $(v)), function (key, val) {
				$(val).width(width)
					.height(height)
					.css('left', key*width);
			});
		});

        var margin = (main_width - parent_width) / 2;
		$('#div_street_parent')
		 .width(parent_width)
		 .height(parent_width)
		 .css('left', margin+'px');

		var ctrl_width = parseInt(parent_width * 9 / 16),
			arrow_pan_width = parseInt(ctrl_width * 2 / 3);
		$('#img_control').width(ctrl_width);
		var ctrl_height = $('#img_control').height();

		$('.car-arrow-panel')
			.width(arrow_pan_width);

        $('.car-time')
            .css('left', ctrl_width/10 + 'px')
            .css('top', ctrl_width/635*449/5 + 'px');
        $('.car-time>span')
            .css('font-size', ctrl_width/9 + 'px');

		$('body').scrollTop(0);
	}

    start_timer = function() {
        check_resize();
        tid = setInterval(sub_move, ms_interval);
    };

	$(window).resize(function () {
		// check_resize();
	});

	function check_reorder_item() {
		if (direction_flag == 0) {		// move up
			var top = parseFloat($('*[data-item="0"]').css('top'));
			if (top <= 0 && top + unit >= 0) {
				return 1;
			}
		}
		else if (direction_flag == 1) {		// move left
			var left = parseFloat($('*[data-subitem="2"]').css('left'));
			if (left <= parent_width && left + unit >= parent_width) {
				return 1;
			}
		}
		else if (direction_flag == 2) {		// move right
			var left = parseFloat($('*[data-subitem="0"]').css('left'));
			if (left + width >= 0 && left + width - unit <= 0) {
				return 1;
			}
		}
		return 0;
	}

    function show_arrow(keyCode) {
        if (keyCode == 2) {
            $('.car-arrow-panel>img').hide();
            $('#img_arrow_right').show();
        }
        else if (keyCode == 1) {
            $('.car-arrow-panel>img').hide();
            $('#img_arrow_left').show();
        }
        else if (keyCode == 0) {
            $('.car-arrow-panel>img').hide();
            $('#img_arrow_top').show();
        } else {
            $('.car-arrow-panel>img').hide();
            $('#img_arrow_off').show();
        }
    }

	function sub_move() {
		var b_new = check_reorder_item();

		if (direction_flag == 1) {		// move left
			if (b_new && direction_flag != tmp_direction_flag) {
				for (var i=0;i<h_count;i++) {
					var val = $('*[data-subitem="'+i+'"]');
					val.css('left', (i*width)+'px');
				}
				direction_flag = tmp_direction_flag;
                $('.img_car').hide();
				$('#img_car_' + car_images[direction_flag]).show();
			} else {
				$.each($('.div-part'), function (key, val) {
					$(val).css('left', '+='+unit+'px');
					if (b_new) {
						var item = $(val).attr('data-subitem');
						var new_val = (item + 1) % h_count;
						$(val).attr('data-subitem', new_val);
						if (new_val == 0) {
							var left = parseFloat($(val).css('left'));
							$(val).css('left', (left-width*h_count)+'px');
						}
					}
				});
			}
		}
		else if (direction_flag == 2) {		// move right
			if (b_new && direction_flag != tmp_direction_flag) {
				$.each($('.div-part'), function (key, val) {
					var item = $(val).attr('data-subitem');
					var new_val = (item == 0) ? h_count-1 : item-1;
					$(val).attr('data-subitem', new_val);
					$(val).css('left', (width*new_val)+'px');
				});
				direction_flag = tmp_direction_flag;
                $('.img_car').hide();
                $('#img_car_' + car_images[direction_flag]).show();
			} else {
				$.each($('.div-part'), function (key, val) {
					$(val).css('left', '-='+unit+'px');
					if (b_new) {
						var item = $(val).attr('data-subitem');
						var new_val = (item == 0) ? h_count-1 : item-1;
						$(val).attr('data-subitem', new_val);
						if (new_val == h_count - 1) {
							var left = parseFloat($(val).css('left'));
							$(val).css('left', (left+width*h_count)+'px');
						}
					}
				});
			}
		}
		else if (direction_flag == 0) {		// move up
			if (b_new && direction_flag != tmp_direction_flag) {
				for (var i=0;i<v_count;i++) {
					var val = $('*[data-item="'+i+'"]');
					val.css('top', (i*height)+'px');
				}
				direction_flag = tmp_direction_flag;
                $('.img_car').hide();
                $('#img_car_' + car_images[direction_flag]).show();
			} else {
				$.each($('.sub-parent'), function (key, val) {
					$(val).css('top', '+='+unit+'px');
					if (b_new) {
						var item = $(val).attr('data-item');
						var new_val = (item + 1) % v_count;
						$(val).attr('data-item', new_val);
						if (new_val == 0) {
							var top = parseFloat($(val).css('top'));
							$(val).css('top', (top-height*v_count)+'px');
						}
					}
				});
			}
		}

		// display the instructions
        if (b_new && (subcount - tcount) > 1) {
			if (route[route_id] != direction_flag) {
				console.log(route_id + " wrong : " + route[route_id] + "," + direction_flag);
			}
			else {
                console.log(route_id + " right : " + route[route_id] + "," + direction_flag);
                correct_route ++;
			}
			route_id ++;
            show_arrow(undefined);

			subcount = tcount;
		}
		else if (tcount == subcount - 70) {
            show_arrow(route[route_id]);
		}

		if ((--tcount) <= 0) {		// stop the timer when the time is up
            clearInterval(tid);
            $('#emergenteCuestionario').show();
            $('#textoA').text('Score : ' + correct_route + '/16');
        }
        var sec = parseInt(tcount*ms_interval / 1000);
		var msec = parseInt((tcount*ms_interval - sec*1000) / 10);
		if (sec < 10) sec = "0" + sec;
		if (msec < 10) msec = "0" + msec;
        $('.car-time > span').text(sec+":"+msec);
	}

	function process_arrow(keyCode) {
        if (direction_flag != 1 && keyCode == KEY_RIGHT) {
            tmp_direction_flag = 2;
        }
        else if (direction_flag != 2 && keyCode == KEY_LEFT) {
            tmp_direction_flag = 1;
        }
        else if (keyCode == KEY_UP) {
            tmp_direction_flag = 0;
        }
    }
	$('body').keydown(function (e) {
        if (e.keyCode == KEY_UP || e.keyCode == KEY_LEFT || e.keyCode == KEY_RIGHT)
            e.preventDefault();
        process_arrow(e.keyCode);
	});

    $('body').keyup(function (e) {
        e.preventDefault();
    });

    $('.car-arrow-panel>img').mousedown(function (e) {
        e.preventDefault();
        var w = $(this).width(), h = $(this).height(), keycode;
        if (e.offsetX < w/3 && e.offsetY > h/2)
            keycode = KEY_LEFT;
        else if (e.offsetX >= w/3 && e.offsetX < w*2/3 && e.offsetY < h/2)
            keycode = KEY_UP;
        else if (e.offsetX >= w*2/3 && e.offsetY > h/2)
            keycode = KEY_RIGHT;
        process_arrow(keycode);
        console.log(keycode);
    });

    $('.car-arrow-panel>img').mouseup(function (e) {
        e.preventDefault();
    });

});
