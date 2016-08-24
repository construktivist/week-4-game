$(document).ready(function(){
	var finn = $("#finn");
	var jake = $("#jake");
	var gunter = $("#gunter");
	var iceking = $("#iceking");
	var characters = [finn, jake, gunter, iceking];
	var playerCheck = false;
	var enemyCheck = false;
	
	function setPlayer(character){
		if (playerCheck === false){
			var playerCheck = true;
			$(character).appendTo("#player");
			for(var i = 0; i < characters.length; i++){
				if(characters[i] !== character){
					$(characters[i]).appendTo(".enemies");
					console.log(characters[i]);
				};
			};
		};
		else if(enemyCheck === false){
			var enemyCheck = true;
			$(character).appendTo("#enemy");
		};
	};

	$(finn).click(function(){
		setPlayer(finn);
	});

	$(jake).click(function(){
		setPlayer(jake);
	}); 

	$(gunter).click(function(){
		setPlayer(gunter);
	});

	$(iceking).click(function(){
		setPlayer(iceking);
	});	

});

//create array and loop.
