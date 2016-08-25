$(document).ready(function(){
	var $finn = $("#finn");
	var $jake = $("#jake");
	var $gunter = $("#gunter");
	var $iceking = $("#iceking");
	var $button = $(".button");
	var characters = [$finn, $jake, $gunter, $iceking];
	var playerCheck = false;
	var enemyCheck = false;

	var finn{
		hp: 20,
		attack: 5,
		counterAttack: 2,
	};

	var jake{
		hp: 20,
		attack: 1,
		counterAttack: 1;
	};
	
	function setPlayer(character){
		if (playerCheck === false){

			playerCheck = true;

			$(character).appendTo("#player");

			
			for(var i = 0; i < characters.length; i++){
				
				if(characters[i] !== character){
					
					$(characters[i]).appendTo(".enemies");
				};
			};	
		}

		else if(playerCheck === true && enemyCheck === false){

			enemyCheck = true;

			$(character).appendTo("#enemy");
		}

		else{
			alert("You must defeat your chosen enemy!");
		}

	};

	function combat(player, enemy){
		enemy.hp - player.attack;
		console.log(enemy.hp);
		console.log(player.hp);
	};

	

	$($finn).click(function(){
		setPlayer($finn);
		console.log(player);
	});

	$($jake).click(function(){
		setPlayer($jake);
		console.log(enemy);
	}); 

	$($gunter).click(function(){
		setPlayer($gunter);
	});

	$($iceking).click(function(){
		setPlayer($iceking);
	});	

	$($button).click(function(){
		console.log("Attack!");
		combat(finn, jake);
	});

});

