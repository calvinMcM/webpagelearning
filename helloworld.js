$(function(){
	var submitb = $("#submitb");
	var player = 1;

	submitb.click(function(){
		if(player === 1){
			$("input[name=move]:checked").replaceWith($("<span>" X "</span>");
			player = 2;
		}	
		else{
			$("input[name=move]:checked").replaceWith($("<span>" O "</span>");
			player = 1;
		}
	});
});
