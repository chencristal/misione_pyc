// Jquery Plugin
// Created - Gunjan Kothari
// Date - 24/04/2014
// Improved - Carlos Cortés
// Date - 30/12/2015
// Plugin to Draw a line between to elements
var _nodes = new Array();
(function($) {
	$.fn.connect = function(param) {

		var _canvas;
		var _ctx;
		
		var _me = this;
		var _parent = param || document;
		//Initialize Canvas object
		_canvas = $('<canvas/>')
			.addClass('line-canvas')
			.attr('width', $(_parent).width())
			.attr('height', $(_parent).height());
		$(this).append(_canvas);

		this.drawLine = function(option) {
			_nodes.push(option);
			this.connect(option);
		};
		this.drawAllLine = function(option) {

			/*Mandatory Fields------------------
			left_selector = '.class',
			data_attribute = 'data-right',
			*/

			if (option.left_selector != '' && typeof option.left_selector !== 'undefined' && $(option.left_selector).length > 0) {
				$(option.left_selector).each(function(index) {
					var option2 = new Object();
					$.extend(option2, option);
					option2.left_node = $(this).attr('id');
					option2.right_node = $(this).data(option.data_attribute);
					if (option2.right_node != '' && typeof option2.right_node !== 'undefined') {
						_me.drawLine(option2);

					}
				});
			}
		};

		//This Function is used to connect two different div with a dotted line.
		this.connect = function(option) {
			
			_ctx = _canvas[0].getContext('2d');
			_ctx.beginPath();
			try {
				var _color;
				var _shadowColor;
				var _dash;
				var _left = new Object(); //This will store _left elements offset  
				var _right = new Object(); //This will store _right elements offset	
				var _error = (option.error == 'show') || false;
				/*
				option = {
					left_node - Left Element by ID - Mandatory
					right_node - Right Element ID - Mandatory
					status - accepted, rejected, modified, (none) - Optional
					style - (dashed), solid, dotted - Optional	
					horizantal_gap - (0), Horizantal Gap from original point
					error - show, (hide) - To show error or not
					width - (2) - Width of the line
				}
				*/

				if (option.left_node != '' && typeof option.left_node !== 'undefined' && option.right_node != '' && typeof option.right_node !== 'undefined' && $(option.left_node).length > 0 && $(option.right_node).length > 0) {
					
					//To decide colour of the line
					switch (option.status) {
						case 'positiva':
							_color = '#FFFFFF';
							_shadowColor = 'rgba(255,255,255,0.7)';
							break;

						case 'distante':
							_shadowColor = 'rgba(255,252,0,0.7)';
							_color = '#FFFC00';
							break;

						case 'conflictiva':
							_shadowColor = 'rgba(255,144,0,0.7)';
							_color = '#FF9000';
							break;

						case 'ruptura':
							_shadowColor = 'rgba(255,2,0,0.7)';
							_color = '#FF0200';
							break;

						default:
							_color = '#00fffc';
							_shadowColor = 'rgba(5, 255, 250, 0.7)	';
							break;
					}

					//To decide style of the line. dotted or solid
					switch (option.style) {
						case 'dashed':
							_dash = [4, 2];
							break;

						case 'solid':
							_dash = [];
							break;

						case 'dotted':
							_dash = [4, 2];
							break;

						default:
							_dash = [4, 2];
							break;
					}

					//If left_node is actually right side, following code will switch elements.
					//If left_node is actually over the right_node put the lines top
					$(option.right_node).each(function(index, value) {
						_left_node = $(option.left_node);
						_right_node = $(value);
						var _gap = option.horizantal_gap || 0;
						
						if (_left_node.position().top >= _right_node.position().top) {
							_tmp = _left_node
							_left_node = _right_node
							_right_node = _tmp;
						}
						
						//Get Left point and Right Point
						if(_left_node.position().top> _right_node.position().top-_left_node.height()-60 
							&& _left_node.position().top<= _right_node.position().top+_right_node.height()+60){
							
							if(_left_node.position().left <= _right_node.position().left){
								_left.x = _left_node.position().left + _left_node.outerWidth();
								_left.y = _left_node.position().top + (_left_node.outerHeight()/2);
								_right.x = _right_node.position().left;
								_right.y = _right_node.position().top + (_right_node.outerHeight()/2);
								_ctx.moveTo(_left.x, _left.y);
						
								if (_gap != 0) {
									_ctx.lineTo(_left.x + _gap, _left.y);
									_ctx.lineTo(_right.x - _gap, _right.y);
								}
								_ctx.lineTo(_right.x, _right.y);

							}else{
								_left.x = _left_node.position().left;
								_left.y = _left_node.position().top + _left_node.outerHeight()/2;
								_right.x = _right_node.position().left + _right_node.outerWidth();
								_right.y = _right_node.position().top + (_right_node.outerHeight() / 2);
								
								_ctx.moveTo(_left.x, _left.y);
						
								if (_gap != 0) {
									_ctx.lineTo(_left.x - _gap, _left.y);
									_ctx.lineTo(_right.x + _gap, _right.y);
								}
								_ctx.lineTo(_right.x, _right.y);
							}
							

							
						}else{
							
							_left.x = _left_node.position().left + (_left_node.outerWidth()/2);
								_left.y = _left_node.position().top + (_left_node.outerHeight() );
								_right.x = _right_node.position().left + (_right_node.outerWidth()/2);
								_right.y = _right_node.position().top;
								
								_ctx.moveTo(_left.x, _left.y);
							
								if (_gap != 0) {
									_ctx.lineTo(_left.x , _left.y+ _gap);
									_ctx.lineTo(_right.x , _right.y- _gap);
								}
								_ctx.lineTo(_right.x, _right.y);
							
							

						}
						
						

						//Create a group
						//var g = _canvas.group({strokeWidth: 2, strokeDashArray:_dash}); 	


						if (!_ctx.setLineDash) {
							_ctx.setLineDash = function() {}
						} else {
							_ctx.setLineDash(_dash);
						}
						_ctx.lineWidth = option.width || 2;
						_ctx.strokeStyle = _color;
						_ctx.shadowColor = _shadowColor;
						_ctx.shadowOffsetX = 0; 
						_ctx.shadowOffsetY = 5;
						_ctx.stroke();
						
					});

					//option.resize = option.resize || false;
				} else {
					if (_error) alert('Mandatory Fields are missing or incorrect');
				}
			} catch (err) {
				if (_error) alert('Mandatory Fields are missing or incorrect');
			}
		};

		//It will redraw all line when screen resizes
		$(window).resize(function() {
			_me.redrawLines();
		});
		this.redrawLines = function() {
			_ctx.clearRect(0, 0, $(_parent).width(), $(_parent).height());
			_nodes.forEach(function(entry) {
				entry.resize = true;
				_me.connect(entry);
			});
		};
		return this;
	};
}(jQuery));