$(document).ready(function(){
	var hue=1;
	var starting_hue=Math.random()*360
	var hue_increment=31; //because prime numbers are cool.
	var default_luminosity=1;
	var default_saturation=1;
	var decay=10;
	traverse();
	
	function traverse(selector,depth){
		if(selector){
			depth++;
			console.log("Starting iteration #"+depth);
			$(selector).children().each(function(){
				console.log("current child is:");
				console.log(this);
				var current_region=$(this);
				var current_hue=(starting_hue+(depth*hue_increment))%360;
				setBG(current_region,current_hue,depth,function(){
					traverse($(current_region),depth);
				});				
			});
		}
		else{
			console.log("first iteration starting.");
			var depth=1;
			if($('body')){
				setBG($('body'),starting_hue,depth,function(){
					$('body').children().each(function(){
						//console.log($(this));
						traverse($(this),depth);
					});

					
				});
			}
		}
		function setBG(region,color,depth,callback){
		
			//$(region).css({"backgroundColor":"hsla("+starting_hue+","+default_saturation*(decay/(decay+depth))+","+default_luminosity*(decay/(decay+depth))+",1)"});
			$(region).css({"backgroundColor":color});
			if(callback){
				callback();
			}
		}
	}

});