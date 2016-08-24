$(document).ready(function(){
	var finnImage = $("#finn");
	var jakeImage = $("#jake");
	var gunterImage = $("#gunter");
	var icekingImage = $("#iceking");

	var checkCharacter = false

	$(finnImage).click(function(){
		$(finnImage).appendTo("#player");
	});

	$(jakeImage).click(function(){
		$(jakeImage).appendTo("#player");
	});

	$(gunterImage).click(function(){
		$(gunterImage).appendTo("#player");
	});

	$(icekingImage).click(function(){
		$(icekingImage).appendTo("#player");
	});	

});

//create array and loop.
