$(function(){
	var clicked = false;
	var mb = $("#MyButton");
	var ob = $("#OutputBox"); 
 	var hist;
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
    		hist = mb.text;
			mb.text("Oh no, DON'T CLICK ME!!");
		},
		function(){
    		mb.text(hist);
		}
	);
});
