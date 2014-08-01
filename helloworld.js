$(function(){
	var clicked = false;
	var mb = $("#MyButton");
	var ob = $("#OutputBox");
	var list = new Array();
	var originalText = ob.text(); // Used to make sure that the "List of Recent Entries: <br>" line is not lost.
	var txt = $("#MyField");
	mb.click(function(){ // The idea is that every time the button is click, it updates a list of entries next to the field on the webpage.
		mb.text("Clicked!");
		clicked = true;
		if(txt.val() != ""){
			list.push(txt.val());
		}
		var toPrint = list.join(", ");
		ob.text(originalText + toPrint);
		txt.val("");
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
