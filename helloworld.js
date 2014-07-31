$(function(){
	var clicked = false;
	var mb = $("#MyButton");
	var ob = $("#OutputBox");
	mb.click(function(){
		mb.text("Clicked!");
		clicked = true;
		var txt = $("#MyField").val();
		ob.text(txt);
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
