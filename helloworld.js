$(function(){ // Replaces $(document).ready(function(){});
	var clicked = false;
	var mb = $("MyButton"); 
	$("#MyButton").click(function(){  // Not working.... :(
		mb.text("Clicked!");
		clicked = true;
	})
	.mouseleave(function(){
		if(clicked){
			mb.text("Click Me Again!");
		}
		else{
			mb.text("Click Me!");
		}
	})
	.hover(
		function(){
			mb.text("Oh no, DON'T CLICK ME!!");
		},
		function(){
			if(clicked){
				mb.text("Click Me Again!");
			}
			else{
				mb.text("Click Me!");
			}
		}
	);
});
