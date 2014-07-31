$(function(){ // Replaces $(document).ready(function(){});
	var clicked = false;
	$("#MyButton").click(function(){  // Not working.... :(
		$("MyButton").text("Clicked!");
		clicked = true;
	});
	$("#MyButton").mouseleave(function(){
		if(clicked){
			$("MyButton").text("Click Me Again!");
		}
		else{
			$("MyButton").text("Click Me!");
		}
	});
	$("MyButton").hover(
		function(){
			$("MyButton").text("Oh no, DON'T CLICK ME!!");
		},
		function(){
			if(clicked){
				$("MyButton").text("Click Me Again!");
			}
			else{
				$("MyButton").text("Click Me!");
			}
		}
	);

});