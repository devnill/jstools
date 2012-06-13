$(document).ready(function(){
	var hue=1;
	var starting_hue=Math.random()*360
	var hue_increment=19; //because prime numbers are cool. --keeps an even distubution of colors
	var default_luminosity=.5;	
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
				var current_hue=Math.floor((starting_hue+(depth*hue_increment))%360);
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
			
			saturation=100*default_saturation*(decay/(decay+depth));
			luminosity=-100*(default_luminosity*(decay/(decay+depth))-1);
			console.log("setting hue "+color+", saturation "+saturation+", luminosity "+luminosity+" in:");
			console.log(region);
			$(region).css({"backgroundColor":"hsla("+color+","+saturation+"%,"+luminosity+"%,1)"});
			
			if(callback){
				callback();
			}
		}
	}

});